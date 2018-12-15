import {
  createOverrideContext,
  Container,
  inject,
  singleton,
  View,
  ViewCompiler,
  ViewResources,
  ViewSlot
} from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { Column, Extension, ExtensionName, GridOption, GridStateChange } from '../models/index';
import { ExtensionUtility } from './extensionUtility';
import { SharedService } from '../services/shared.service';
import * as DOMPurify from 'dompurify';
import * as $ from 'jquery';

// using external non-typed js libraries
declare var Slick: any;

export interface CreatedView {
  id: string | number;
  dataContext: any;
  view?: View;
  viewSlot?: ViewSlot;
}

@singleton(true)
@inject(
  Container,
  EventAggregator,
  ExtensionUtility,
  SharedService,
  ViewCompiler,
  ViewResources
)
export class RowDetailViewExtension implements Extension {
  private _eventHandler: any = new Slick.EventHandler();
  private _extension: any;
  private _slots: CreatedView[] = [];
  private _viewModel: string;
  private _userProcessFn: (item: any) => Promise<any>;

  constructor(
    private container: Container,
    private ea: EventAggregator,
    private extensionUtility: ExtensionUtility,
    private sharedService: SharedService,
    private viewCompiler: ViewCompiler,
    private viewResources: ViewResources,
  ) { }

  dispose() {
    // unsubscribe all SlickGrid events
    this._eventHandler.unsubscribeAll();

    if (this._extension && this._extension.destroy) {
      this._extension.destroy();
    }
  }

  /**
   * Create the plugin before the Grid creation, else it will behave oddly.
   * Mostly because the column definitions might change after the grid creation
   */
  create(columnDefinitions: Column[], gridOptions: GridOption) {
    if (columnDefinitions && gridOptions) {
      // dynamically import the SlickGrid plugin with requireJS
      this.extensionUtility.loadExtensionDynamically(ExtensionName.rowDetailView);

      if (!gridOptions.rowDetailView) {
        throw new Error('The Row Detail View requires options to be passed via the "rowDetailView" property of the Grid Options');
      }

      if (gridOptions && gridOptions.rowDetailView) {
        if (!this._extension) {
          if (typeof gridOptions.rowDetailView.process === 'function') {
            // we need to keep the user "process" method and replace it with our own execution method
            // we do this because when we get the item detail, we need to call "onAsyncResponse.notify" for the plugin to work
            this._userProcessFn = gridOptions.rowDetailView.process;                // keep user's process method
            gridOptions.rowDetailView.process = (item) => this.onProcessing(item);  // replace process method & run our internal one
          } else {
            throw new Error('You need to provide a "process" function for the Row Detail Extension to work properly');
          }
          gridOptions.rowDetailView.postTemplate = (itemDetail: any) => DOMPurify.sanitize(`<div id="container_${itemDetail.id}" class="au-target"></div>`);
          this._extension = new Slick.Plugins.RowDetailView(gridOptions.rowDetailView);
          this._viewModel = gridOptions.rowDetailView.viewModel;
        }
        const selectionColumn: Column = this._extension.getColumnDefinition();
        selectionColumn.excludeFromExport = true;
        selectionColumn.excludeFromQuery = true;
        selectionColumn.excludeFromHeaderMenu = true;
        columnDefinitions.unshift(selectionColumn);
      }
      return this._extension;
    }
    return null;
  }

  register(rowSelectionPlugin?: any) {
    if (this.sharedService && this.sharedService.grid && this.sharedService.gridOptions) {
      // the plugin has to be created BEFORE the grid (else it behaves oddly), but we can only watch grid events AFTER the grid is created
      this.sharedService.grid.registerPlugin(this._extension);

      // this also requires the Row Selection Model to be registered as well
      if (!rowSelectionPlugin || !this.sharedService.grid.getSelectionModel()) {
        this.extensionUtility.loadExtensionDynamically(ExtensionName.rowSelection);
        rowSelectionPlugin = new Slick.RowSelectionModel(this.sharedService.gridOptions.rowSelectionOptions || { selectActiveRow: true });
        this.sharedService.grid.setSelectionModel(rowSelectionPlugin);
      }

      // this._extension = this.create(this.sharedService.allColumns, this.sharedService.gridOptions);
      this.sharedService.grid.registerPlugin(this._extension);

      // hook all events
      if (this.sharedService.grid && this.sharedService.gridOptions.rowDetailView) {
        if (this.sharedService.gridOptions.rowDetailView.onExtensionRegistered) {
          this.sharedService.gridOptions.rowDetailView.onExtensionRegistered(this._extension);
        }
        this._eventHandler.subscribe(this._extension.onAsyncResponse, (e: any, args: { item: any; detailView: any }) => {
          if (this.sharedService.gridOptions.rowDetailView && typeof this.sharedService.gridOptions.rowDetailView.onAsyncResponse === 'function') {
            this.sharedService.gridOptions.rowDetailView.onAsyncResponse(e, args);
          }
        });
        this._eventHandler.subscribe(this._extension.onAsyncEndUpdate, (e: any, args: { grid: any; item: any; }) => {
          this.renderView(args && args.item); // triggers after backend called "onAsyncResponse.notify()"
          if (this.sharedService.gridOptions.rowDetailView && typeof this.sharedService.gridOptions.rowDetailView.onAsyncEndUpdate === 'function') {
            this.sharedService.gridOptions.rowDetailView.onAsyncEndUpdate(e, args);
          }
        });
        this._eventHandler.subscribe(this._extension.onAfterRowDetailToggle, (e: any, args: { grid: any; item: any; expandedRows: any[]; }) => {
          this._slots.forEach((slot) => this.renderView(slot.dataContext)); // internal process
          if (this.sharedService.gridOptions.rowDetailView && typeof this.sharedService.gridOptions.rowDetailView.onAfterRowDetailToggle === 'function') {
            this.sharedService.gridOptions.rowDetailView.onAfterRowDetailToggle(e, args);
          }
        });
        this._eventHandler.subscribe(this._extension.onBeforeRowDetailToggle, (e: any, args: { grid: any; item: any; }) => {
          this.onBeforeRowDetailToggle(e, args); // internal process
          if (this.sharedService.gridOptions.rowDetailView && typeof this.sharedService.gridOptions.rowDetailView.onBeforeRowDetailToggle === 'function') {
            this.sharedService.gridOptions.rowDetailView.onBeforeRowDetailToggle(e, args);
          }
        });
        this._eventHandler.subscribe(this._extension.onRowBackToViewportRange, (e: any, args: { grid: any; item: any; rowId: number; rowIndex: number; expandedRows: any[]; rowIdsOutOfViewport: number[]; }) => {
          this.onRowBackToViewportRange(e, args); // internal process
          if (this.sharedService.gridOptions.rowDetailView && typeof this.sharedService.gridOptions.rowDetailView.onRowBackToViewportRange === 'function') {
            this.sharedService.gridOptions.rowDetailView.onRowBackToViewportRange(e, args);
          }
        });
        this._eventHandler.subscribe(this._extension.onRowOutOfViewportRange, (e: any, args: { grid: any; item: any; rowId: number; rowIndex: number; expandedRows: any[]; rowIdsOutOfViewport: number[]; }) => {
          if (this.sharedService.gridOptions.rowDetailView && typeof this.sharedService.gridOptions.rowDetailView.onRowOutOfViewportRange === 'function') {
            this.sharedService.gridOptions.rowDetailView.onRowOutOfViewportRange(e, args);
          }
        });

        // --
        // hook some events needed by the Plugin itself

        this._eventHandler.subscribe(this.sharedService.grid.onColumnsReordered, () => this.onColumnsReordered());

        // on sort, all row detail are collapsed so we can dispose of all the Views as well
        this._eventHandler.subscribe(this.sharedService.grid.onSort, () => this.disposeAllViewSlot());

        // on filter changed, we need to re-render all Views
        this.ea.subscribe('filterService:filterChanged', () => this._slots.forEach((slot) => this.redrawView(slot)));
      }
      return this._extension;
    }
    return null;
  }

  // --
  // private functions
  // ------------------

  /**
   * notify the onAsyncResponse with the "args.item" (required property)
   * the plugin will then use item to populate the row detail panel with the "postTemplate"
   * @param item
   */
  private notifyTemplate(item: any) {
    if (this._extension) {
      this._extension.onAsyncResponse.notify({ item }, undefined, this);
    }
  }

  /**
   * On Processing, we will notify the plugin with the new item detail once backend server call completes
   * @param item
   */
  private async onProcessing(item: any) {
    if (item && typeof this._userProcessFn === 'function') {
      const userProcessFn = this._userProcessFn(item);

      // wait for the "userProcessFn", once resolved we will save it into the "collection"
      const response: any | any[] = await userProcessFn;
      let awaitedItemDetail: any;

      if (response.hasOwnProperty('id')) {
        awaitedItemDetail = response; // from Promise
      } else if (response instanceof Response && typeof response['json'] === 'function') {
        awaitedItemDetail = await response['json'](); // from Fetch
      } else if (response && response['content']) {
        awaitedItemDetail = response['content']; // from aurelia-http-client
      }

      // notify the plugin with the new item details
      this.notifyTemplate(awaitedItemDetail || {});
    }
  }

  /** On Column Reordering, we need to redraw the View */
  private onColumnsReordered() {
    this._slots.forEach((slot) => {
      this.redrawView(slot);
    });
  }

  private addToArrayWhenNotFound(inputArray: any[], inputObj: any) {
    const arrayRowIndex = inputArray.findIndex((obj) => obj.id === inputObj.id);
    if (arrayRowIndex < 0) {
      inputArray.push(inputObj);
    }
  }

  private disposeAllViewSlot() {
    this._slots.forEach((slot) => this.disposeViewSlot(slot));
    this._slots = [];
  }

  private disposeViewSlot(expandedView: CreatedView) {
    if (expandedView && expandedView.view && expandedView.viewSlot && expandedView.view.unbind && expandedView.viewSlot.remove) {
      const container = $('#container_' + this._slots[0].id);
      if (container && container.length > 0) {
        expandedView.viewSlot.remove(expandedView.view);
        expandedView.view.unbind();
        container.empty();
        return expandedView;
      }
    }
    return null;
  }

  private onBeforeRowDetailToggle(e, args) {
    // expanding
    if (args && args.item && args.item.__collapsed) {
      // expanding row detail
      if (args && args.item) {
        const viewInfo: CreatedView = {
          id: args.item.id,
          dataContext: args.item
        };
        this.addToArrayWhenNotFound(this._slots, viewInfo);
      }
    } else {
      // collapsing, so dispose of the View/ViewSlot
      const foundSlotIndex = this._slots.findIndex((slot: CreatedView) => slot.id === args.item.id);
      if (foundSlotIndex >= 0) {
        if (this.disposeViewSlot(this._slots[foundSlotIndex])) {
          this._slots.splice(foundSlotIndex, 1);
        }
      }
    }
  }

  /** When Row comes back to Viewport Range, we need to redraw the View */
  private onRowBackToViewportRange(e: Event, args: { grid: any; item: any; rowId: number; rowIndex: number; expandedRows: any[]; rowIdsOutOfViewport: number[]; }) {
    if (args && args.item) {
      this._slots.forEach((slot) => {
        if (slot.id === args.item.id) {
          this.redrawView(slot);
        }
      });
    }
  }

  /** Dispatched event of a Grid State Changed event (which contain a "change" and the "gridState") */
  private onGridStateChanged(gridStateChanges: GridStateChange) {
    if (gridStateChanges.change.type === 'filter') {
      this._slots.forEach((slot) => {
        this.redrawView(slot);
      });
    }
  }

  /** Redraw the necessary View Slot */
  private redrawView(slot: CreatedView) {
    const containerElement = $('#container_' + slot.id);
    if (containerElement && containerElement.length) {
      this.renderView(slot.dataContext);
    }
  }

  /** Render (or rerender) the View Slot (Row Detail) */
  private renderView(item: any) {
    const containerElement = $('#container_' + item.id);
    const viewFactory = this.viewCompiler.compile('<template><compose view-model.bind="template" model.bind="modeling"></compose><template>', this.viewResources);

    if (containerElement.length) {
      // Creates a view
      containerElement.empty();
      const view = viewFactory.create(this.container);
      const viewModel = { template: this._viewModel || '', model: item };

      view.bind(viewModel, createOverrideContext(viewModel));

      // Add the view to the slot
      const viewSlot = new ViewSlot(containerElement[0], true);
      viewSlot.add(view);

      const slotObj = this._slots.find((obj) => obj.id === item.id);

      if (slotObj) {
        slotObj.view = view;
        slotObj.viewSlot = viewSlot;
      }
    }
  }

}
