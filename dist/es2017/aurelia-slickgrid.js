var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// import 3rd party vendor libs
import 'jquery-ui-dist/jquery-ui';
import 'slickgrid/lib/jquery.event.drag-2.3.0';
import 'slickgrid/slick.core';
import 'slickgrid/slick.dataview';
import 'slickgrid/slick.grid';
import 'slickgrid/slick.groupitemmetadataprovider';
import 'slickgrid/controls/slick.columnpicker';
import 'slickgrid/controls/slick.gridmenu';
import 'slickgrid/controls/slick.pager';
import 'slickgrid/plugins/slick.autotooltips';
import 'slickgrid/plugins/slick.cellexternalcopymanager';
import 'slickgrid/plugins/slick.cellrangedecorator';
import 'slickgrid/plugins/slick.cellrangeselector';
import 'slickgrid/plugins/slick.cellselectionmodel';
import 'slickgrid/plugins/slick.checkboxselectcolumn';
import 'slickgrid/plugins/slick.headerbuttons';
import 'slickgrid/plugins/slick.headermenu';
import 'slickgrid/plugins/slick.rowmovemanager';
import 'slickgrid/plugins/slick.rowselectionmodel';
import { bindable, BindingEngine, bindingMode, Container, Factory, inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { GlobalGridOptions } from './global-grid-options';
import { GridStateType, } from './models/index';
import { ControlAndPluginService, disposeAllSubscriptions, ExportService, FilterService, GraphqlService, GridEventService, GridService, GridStateService, GroupingAndColspanService, ResizerService, SortService, toKebabCase, } from './services/index';
import * as $ from 'jquery';
const aureliaEventPrefix = 'asg';
const eventPrefix = 'sg';
// Aurelia doesn't support well TypeScript @autoinject in a Plugin so we'll do it the old fashion way
let AureliaSlickgridCustomElement = class AureliaSlickgridCustomElement {
    constructor(bindingEngine, controlAndPluginService, exportService, elm, ea, filterService, gridEventService, gridService, gridStateService, groupingAndColspanService, resizerService, sortService, container) {
        this.bindingEngine = bindingEngine;
        this.controlAndPluginService = controlAndPluginService;
        this.exportService = exportService;
        this.elm = elm;
        this.ea = ea;
        this.filterService = filterService;
        this.gridEventService = gridEventService;
        this.gridService = gridService;
        this.gridStateService = gridStateService;
        this.groupingAndColspanService = groupingAndColspanService;
        this.resizerService = resizerService;
        this.sortService = sortService;
        this.container = container;
        this._columnDefinitions = [];
        this._eventHandler = new Slick.EventHandler();
        this._hideHeaderRowAfterPageLoad = false;
        this.isGridInitialized = false;
        this.showPagination = false;
        this.serviceList = [];
        this.subscriptions = [];
        this.columnDefinitions = [];
        this.serviceList = [
            controlAndPluginService,
            exportService,
            filterService,
            gridEventService,
            gridService,
            gridStateService,
            groupingAndColspanService,
            resizerService,
            sortService
        ];
    }
    attached() {
        this.initialization();
        this.isGridInitialized = true;
    }
    initialization() {
        this.dispatchCustomEvent(`${aureliaEventPrefix}-on-before-grid-create`);
        this.ea.publish('onBeforeGridCreate', true);
        // make sure the dataset is initialized (if not it will throw an error that it cannot getLength of null)
        this._dataset = this._dataset || this.dataset || [];
        this.gridOptions = this.mergeGridOptions(this.gridOptions);
        this.createBackendApiInternalPostProcessCallback(this.gridOptions);
        if (this.gridOptions.enableGrouping) {
            this.groupItemMetadataProvider = new Slick.Data.GroupItemMetadataProvider();
            this.dataview = new Slick.Data.DataView({ groupItemMetadataProvider: this.groupItemMetadataProvider });
        }
        else {
            this.dataview = new Slick.Data.DataView();
        }
        // for convenience, we provide the property "editor" as an Aurelia-Slickgrid editor complex object
        // however "editor" is used internally by SlickGrid for it's own Editor Factory
        // so in our lib we will swap "editor" and copy it into a new property called "internalColumnEditor"
        // then take back "editor.model" and make it the new "editor" so that SlickGrid Editor Factory still works
        // Wrap each editor class in the Factory resolver so consumers of this library can use
        // dependency injection. Aurelia will resolve all dependencies when we pass the container
        // and allow slickgrid to pass its arguments to the editors constructor last
        // when slickgrid creates the editor
        // https://github.com/aurelia/dependency-injection/blob/master/src/resolvers.js
        this._columnDefinitions = this.columnDefinitions.map((column) => {
            // on every Editor which have a "collection" or a "collectionAsync"
            if (column.editor && column.editor.collectionAsync) {
                this.loadEditorCollectionAsync(column);
            }
            return Object.assign({}, column, { editor: column.editor && Factory.of(column.editor.model).get(this.container), internalColumnEditor: Object.assign({}, column.editor) });
        });
        this.controlAndPluginService.createCheckboxPluginBeforeGridCreation(this._columnDefinitions, this.gridOptions);
        this.grid = new Slick.Grid(`#${this.gridId}`, this.dataview, this._columnDefinitions, this.gridOptions);
        this.controlAndPluginService.attachDifferentControlOrPlugins(this.grid, this.dataview, this.groupItemMetadataProvider);
        this.attachDifferentHooks(this.grid, this.gridOptions, this.dataview);
        this.grid.init();
        this.dataview.beginUpdate();
        this.dataview.setItems(this._dataset, this.gridOptions.datasetIdPropertyName);
        this.dataview.endUpdate();
        // user might want to hide the header row on page load but still have `enableFiltering: true`
        // if that is the case, we need to hide the headerRow ONLY AFTER all filters got created & dataView exist
        if (this._hideHeaderRowAfterPageLoad) {
            this.showHeaderRow(false);
        }
        // after the DataView is created & updated execute some processes
        this.executeAfterDataviewCreated(this.grid, this.gridOptions, this.dataview);
        // publish & dispatch certain events
        this.ea.publish('onGridCreated', this.grid);
        this.ea.publish('onDataviewCreated', this.dataview);
        this.dispatchCustomEvent(`${aureliaEventPrefix}-on-grid-created`, this.grid);
        this.dispatchCustomEvent(`${aureliaEventPrefix}-on-dataview-created`, this.dataview);
        // attach resize ONLY after the dataView is ready
        this.attachResizeHook(this.grid, this.gridOptions);
        // attach grouping and header grouping colspan service
        if (this.gridOptions.createPreHeaderPanel) {
            this.groupingAndColspanService.init(this.grid, this.dataview);
        }
        // initialize grid service
        this.gridService.init(this.grid, this.dataview);
        // when user enables translation, we need to translate Headers on first pass & subsequently in the attachDifferentHooks
        if (this.gridOptions.enableTranslate) {
            this.controlAndPluginService.translateColumnHeaders();
        }
        // if Export is enabled, initialize the service with the necessary grid and other objects
        if (this.gridOptions.enableExport) {
            this.exportService.init(this.grid, this.dataview);
        }
        // attach the Backend Service API callback functions only after the grid is initialized
        // because the preProcess() and onInit() might get triggered
        if (this.gridOptions && this.gridOptions.backendServiceApi) {
            this.attachBackendCallbackFunctions(this.gridOptions);
        }
        this.gridStateService.init(this.grid, this.controlAndPluginService, this.filterService, this.sortService);
        // create the Aurelia Grid Instance with reference to all Services
        const aureliaElementInstance = {
            // Slick Grid & DataView objects
            dataView: this.dataview,
            slickGrid: this.grid,
            // public methods
            dispose: this.dispose.bind(this),
            // return all available Services (non-singleton)
            backendService: this.gridOptions && this.gridOptions.backendServiceApi && this.gridOptions.backendServiceApi.service,
            exportService: this.exportService,
            filterService: this.filterService,
            gridEventService: this.gridEventService,
            gridStateService: this.gridStateService,
            gridService: this.gridService,
            groupingService: this.groupingAndColspanService,
            pluginService: this.controlAndPluginService,
            resizerService: this.resizerService,
            sortService: this.sortService,
        };
        this.dispatchCustomEvent(`${aureliaEventPrefix}-on-aurelia-grid-created`, aureliaElementInstance);
    }
    detached(emptyDomElementContainer = false) {
        this.ea.publish('onBeforeGridDestroy', this.grid);
        this.dispatchCustomEvent(`${aureliaEventPrefix}-on-before-grid-destroy`, this.grid);
        this.dataview = [];
        this._eventHandler.unsubscribeAll();
        this.grid.destroy();
        if (emptyDomElementContainer && this.gridId) {
            const containerId = this.gridOptions && this.gridOptions.gridContainerId || `slickGridContainer-${this.gridId}`;
            $(containerId).empty();
        }
        this.ea.publish('onAfterGridDestroyed', true);
        this.dispatchCustomEvent(`${aureliaEventPrefix}-on-after-grid-destroyed`, this.grid);
        // dispose of all Services
        this.serviceList.forEach((service) => {
            if (service && service.dispose) {
                service.dispose();
            }
        });
        this.serviceList = [];
        // also dispose of all Subscriptions
        this.subscriptions = disposeAllSubscriptions(this.subscriptions);
    }
    dispose(emptyDomElementContainer = false) {
        this.detached(emptyDomElementContainer);
    }
    bind() {
        // get the grid options (priority is Global Options first, then user option which could overwrite the Global options)
        this.gridOptions = Object.assign({}, GlobalGridOptions, this.gridOptions);
        this._columnDefinitions = this.columnDefinitions;
        // subscribe to column definitions assignment changes with BindingEngine
        // assignment changes are not triggering a "changed" event https://stackoverflow.com/a/30286225/1212166
        // also binding docs https://github.com/aurelia/binding/blob/master/doc/article/en-US/binding-observables.md#observing-collections
        this.subscriptions.push(this.bindingEngine.collectionObserver(this.columnDefinitions)
            .subscribe(this.columnDefinitionsChanged.bind(this)));
    }
    columnDefinitionsChanged() {
        this._columnDefinitions = this.columnDefinitions;
        if (this.isGridInitialized) {
            this.updateColumnDefinitionsList(this.columnDefinitions);
        }
    }
    /**
     * Commits the current edit to the grid
     */
    commitEdit(target) {
        if (this.grid.getOptions().autoCommitEdit) {
            const activeNode = this.grid.getActiveCellNode();
            // a timeout must be set or this could come into conflict when slickgrid
            // tries to commit the edit when going from one editor to another on the grid
            // through the click event. If the timeout was not here it would
            // try to commit/destroy the twice, which would throw a jquery
            // error about the element not being in the DOM
            setTimeout(() => {
                // make sure the target is the active editor so we do not
                // commit prematurely
                if (activeNode && activeNode.contains(target) && this.grid.getEditorLock().isActive()) {
                    this.grid.getEditorLock().commitCurrentEdit();
                }
            });
        }
    }
    datasetChanged(newValue, oldValue) {
        this._dataset = newValue;
        this.refreshGridData(newValue);
        // expand/autofit columns on first page load
        // we can assume that if the oldValue was empty then we are on first load
        if (!oldValue || oldValue.length < 1) {
            if (this.gridOptions.autoFitColumnsOnFirstLoad) {
                this.grid.autosizeColumns();
            }
        }
    }
    /**
     * Define what our internal Post Process callback, it will execute internally after we get back result from the Process backend call
     * For now, this is GraphQL Service only feature and it will basically
     * refresh the Dataset & Pagination without having the user to create his own PostProcess every time
     */
    createBackendApiInternalPostProcessCallback(gridOptions) {
        if (gridOptions && gridOptions.backendServiceApi) {
            const backendApi = gridOptions.backendServiceApi;
            // internalPostProcess only works with a GraphQL Service, so make sure it is that type
            if (backendApi && backendApi.service && backendApi.service instanceof GraphqlService) {
                backendApi.internalPostProcess = (processResult) => {
                    const datasetName = (backendApi && backendApi.service && typeof backendApi.service.getDatasetName === 'function') ? backendApi.service.getDatasetName() : '';
                    if (processResult && processResult.data && processResult.data[datasetName]) {
                        this._dataset = processResult.data[datasetName].nodes;
                        this.refreshGridData(this._dataset, processResult.data[datasetName].totalCount);
                    }
                    else {
                        this._dataset = [];
                    }
                };
            }
        }
    }
    attachDifferentHooks(grid, gridOptions, dataView) {
        // on locale change, we have to manually translate the Headers, GridMenu
        this.subscriptions.push(this.ea.subscribe('i18n:locale:changed', (payload) => {
            if (gridOptions.enableTranslate) {
                this.controlAndPluginService.translateColumnHeaders();
                this.controlAndPluginService.translateColumnPicker();
                this.controlAndPluginService.translateGridMenu();
                this.controlAndPluginService.translateHeaderMenu();
            }
        }));
        // if user entered some Columns "presets", we need to reflect them all in the grid
        if (gridOptions.presets && Array.isArray(gridOptions.presets.columns) && gridOptions.presets.columns.length > 0) {
            const gridColumns = this.gridStateService.getAssociatedGridColumns(grid, gridOptions.presets.columns);
            if (gridColumns && Array.isArray(gridColumns) && gridColumns.length > 0) {
                // make sure that the checkbox selector is also visible if it is enabled
                if (gridOptions.enableCheckboxSelector) {
                    const checkboxColumn = (Array.isArray(this._columnDefinitions) && this._columnDefinitions.length > 0) ? this._columnDefinitions[0] : null;
                    if (checkboxColumn && checkboxColumn.id === '_checkbox_selector' && gridColumns[0].id !== '_checkbox_selector') {
                        gridColumns.unshift(checkboxColumn);
                    }
                }
                // finally set the new presets columns (including checkbox selector if need be)
                grid.setColumns(gridColumns);
            }
        }
        // attach external sorting (backend) when available or default onSort (dataView)
        if (gridOptions.enableSorting) {
            gridOptions.backendServiceApi ? this.sortService.attachBackendOnSort(grid, dataView) : this.sortService.attachLocalOnSort(grid, dataView);
        }
        // attach external filter (backend) when available or default onFilter (dataView)
        if (gridOptions.enableFiltering) {
            this.filterService.init(grid);
            // if user entered some "presets", we need to reflect them all in the DOM
            if (gridOptions.presets && Array.isArray(gridOptions.presets.filters) && gridOptions.presets.filters.length > 0) {
                this.filterService.populateColumnFilterSearchTerms();
            }
            gridOptions.backendServiceApi ? this.filterService.attachBackendOnFilter(grid) : this.filterService.attachLocalOnFilter(grid, this.dataview);
        }
        // if user set an onInit Backend, we'll run it right away (and if so, we also need to run preProcess, internalPostProcess & postProcess)
        if (gridOptions.backendServiceApi) {
            const backendApi = gridOptions.backendServiceApi;
            if (backendApi && backendApi.service && backendApi.service.init) {
                backendApi.service.init(backendApi.options, gridOptions.pagination, this.grid);
            }
        }
        // expose all Slick Grid Events through dispatch
        for (const prop in grid) {
            if (grid.hasOwnProperty(prop) && prop.startsWith('on')) {
                this._eventHandler.subscribe(grid[prop], (e, args) => {
                    return this.dispatchCustomEvent(`${eventPrefix}-${toKebabCase(prop)}`, { eventData: e, args });
                });
            }
        }
        // expose all Slick DataView Events through dispatch
        for (const prop in dataView) {
            if (dataView.hasOwnProperty(prop) && prop.startsWith('on')) {
                this._eventHandler.subscribe(dataView[prop], (e, args) => {
                    return this.dispatchCustomEvent(`${eventPrefix}-${toKebabCase(prop)}`, { eventData: e, args });
                });
            }
        }
        // expose GridState Service changes event through dispatch
        this.subscriptions.push(this.ea.subscribe('gridStateService:changed', (gridStateChange) => {
            this.elm.dispatchEvent(new CustomEvent(`${aureliaEventPrefix}-on-grid-state-changed`, {
                bubbles: true,
                detail: gridStateChange
            }));
        }));
        // on cell click, mainly used with the columnDef.action callback
        this.gridEventService.attachOnCellChange(grid, dataView);
        this.gridEventService.attachOnClick(grid, dataView);
        this._eventHandler.subscribe(dataView.onRowCountChanged, (e, args) => {
            grid.updateRowCount();
            grid.render();
        });
        this._eventHandler.subscribe(dataView.onRowsChanged, (e, args) => {
            grid.invalidateRows(args.rows);
            grid.render();
        });
        // does the user have a colspan callback?
        if (gridOptions.colspanCallback) {
            dataView.getItemMetadata = (rowNumber) => {
                const item = dataView.getItem(rowNumber);
                if (gridOptions && gridOptions.colspanCallback) {
                    return gridOptions.colspanCallback(item);
                }
                return null;
            };
        }
    }
    attachBackendCallbackFunctions(gridOptions) {
        const backendApi = gridOptions.backendServiceApi;
        const serviceOptions = (backendApi && backendApi.service && backendApi.service.options) ? backendApi.service.options : {};
        const isExecuteCommandOnInit = (!serviceOptions) ? false : ((serviceOptions && serviceOptions.hasOwnProperty('executeProcessCommandOnInit')) ? serviceOptions['executeProcessCommandOnInit'] : true);
        // update backend filters (if need be) before the query runs
        if (backendApi) {
            const backendService = backendApi.service;
            // if user entered some any "presets", we need to reflect them all in the grid
            if (gridOptions && gridOptions.presets) {
                // Filters "presets"
                if (backendService && backendService.updateFilters && Array.isArray(gridOptions.presets.filters) && gridOptions.presets.filters.length > 0) {
                    backendService.updateFilters(gridOptions.presets.filters, true);
                }
                // Sorters "presets"
                if (backendService && backendService.updateSorters && Array.isArray(gridOptions.presets.sorters) && gridOptions.presets.sorters.length > 0) {
                    backendService.updateSorters(undefined, gridOptions.presets.sorters);
                }
                // Pagination "presets"
                if (backendService && backendService.updatePagination && gridOptions.presets.pagination) {
                    backendService.updatePagination(gridOptions.presets.pagination.pageNumber, gridOptions.presets.pagination.pageSize);
                }
            }
            else {
                const columnFilters = this.filterService.getColumnFilters();
                if (columnFilters && backendService && backendService.updateFilters) {
                    backendService.updateFilters(columnFilters, false);
                }
            }
        }
        if (backendApi && backendApi.service && (backendApi.onInit || isExecuteCommandOnInit)) {
            const query = (typeof backendApi.service.buildQuery === 'function') ? backendApi.service.buildQuery() : '';
            const onInitPromise = (isExecuteCommandOnInit) ? (backendApi && backendApi.process) ? backendApi.process(query) : undefined : (backendApi && backendApi.onInit) ? backendApi.onInit(query) : null;
            // wrap this inside a setTimeout to avoid timing issue since the gridOptions needs to be ready before running this onInit
            setTimeout(async () => {
                // keep start time & end timestamps & return it after process execution
                const startTime = new Date();
                if (backendApi.preProcess) {
                    backendApi.preProcess();
                }
                // await for the Promise to resolve the data
                const processResult = await onInitPromise;
                const endTime = new Date();
                // define what our internal Post Process callback, only available for GraphQL Service for now
                // it will basically refresh the Dataset & Pagination without having the user to create his own PostProcess every time
                if (processResult && backendApi && backendApi.service instanceof GraphqlService && backendApi.internalPostProcess) {
                    backendApi.internalPostProcess(processResult);
                }
                // send the response process to the postProcess callback
                if (backendApi.postProcess) {
                    processResult.statistics = {
                        startTime,
                        endTime,
                        executionTime: endTime.valueOf() - startTime.valueOf(),
                        totalItemCount: this.gridOptions && this.gridOptions.pagination && this.gridOptions.pagination.totalItems
                    };
                    backendApi.postProcess(processResult);
                }
            });
        }
    }
    attachResizeHook(grid, options) {
        // expand/autofit columns on first page load
        if (grid && options.autoFitColumnsOnFirstLoad && options.enableAutoSizeColumns && typeof grid.autosizeColumns === 'function') {
            this.grid.autosizeColumns();
            // compensate anytime SlickGrid measureScrollbar is incorrect (only seems to happen in Chrome 1/5 computers)
            this.resizerService.compensateHorizontalScroll(this.grid, this.gridOptions);
        }
        // auto-resize grid on browser resize
        this.resizerService.init(grid);
        if (grid && options.enableAutoResize) {
            this.resizerService.attachAutoResizeDataGrid({ height: this.gridHeight, width: this.gridWidth });
            if (options.autoFitColumnsOnFirstLoad && options.enableAutoSizeColumns && typeof grid.autosizeColumns === 'function') {
                grid.autosizeColumns();
            }
        }
    }
    executeAfterDataviewCreated(grid, gridOptions, dataView) {
        // if user entered some Sort "presets", we need to reflect them all in the DOM
        if (gridOptions.enableSorting) {
            if (gridOptions.presets && Array.isArray(gridOptions.presets.sorters) && gridOptions.presets.sorters.length > 0) {
                this.sortService.loadLocalPresets(grid, dataView);
            }
        }
    }
    mergeGridOptions(gridOptions) {
        gridOptions.gridId = this.gridId;
        gridOptions.gridContainerId = `slickGridContainer-${this.gridId}`;
        // use jquery extend to deep merge & copy to avoid immutable properties being changed in GlobalGridOptions after a route change
        const options = $.extend(true, {}, GlobalGridOptions, gridOptions);
        // also make sure to show the header row if user have enabled filtering
        this._hideHeaderRowAfterPageLoad = (options.showHeaderRow === false);
        if (options.enableFiltering && !options.showHeaderRow) {
            options.showHeaderRow = options.enableFiltering;
        }
        return options;
    }
    /**
     * On a Pagination changed, we will trigger a Grid State changed with the new pagination info
     * Also if we use Row Selection or the Checkbox Selector, we need to reset any selection
     */
    paginationChanged(pagination) {
        if (this.gridOptions.enableRowSelection || this.gridOptions.enableCheckboxSelector) {
            this.grid.setSelectedRows([]);
        }
        this.ea.publish('gridStateService:changed', {
            change: { newValues: pagination, type: GridStateType.pagination },
            gridState: this.gridStateService.getCurrentGridState()
        });
    }
    /**
     * When dataset changes, we need to refresh the entire grid UI & possibly resize it as well
     * @param dataset
     */
    refreshGridData(dataset, totalCount) {
        if (dataset && this.grid && this.dataview && typeof this.dataview.setItems === 'function') {
            this.dataview.setItems(dataset, this.gridOptions.datasetIdPropertyName);
            if (!this.gridOptions.backendServiceApi) {
                this.dataview.reSort();
            }
            // this.grid.setData(dataset);
            this.grid.invalidate();
            this.grid.render();
            if (this.gridOptions.backendServiceApi) {
                // do we want to show pagination?
                // if we have a backendServiceApi and the enablePagination is undefined, we'll assume that we do want to see it, else get that defined value
                this.showPagination = ((this.gridOptions.backendServiceApi && this.gridOptions.enablePagination === undefined) ? true : this.gridOptions.enablePagination) || false;
                // before merging the grid options, make sure that it has the totalItems count
                // once we have that, we can merge and pass all these options to the pagination component
                if (!this.gridOptions.pagination) {
                    this.gridOptions.pagination = (this.gridOptions.pagination) ? this.gridOptions.pagination : undefined;
                }
                if (this.gridOptions.pagination && totalCount) {
                    this.gridOptions.pagination.totalItems = totalCount;
                }
                if (this.gridOptions.presets && this.gridOptions.presets.pagination && this.gridOptions.pagination) {
                    this.gridOptions.pagination.pageSize = this.gridOptions.presets.pagination.pageSize;
                    this.gridOptions.pagination.pageNumber = this.gridOptions.presets.pagination.pageNumber;
                }
                this.gridPaginationOptions = this.mergeGridOptions(this.gridOptions);
            }
            // resize the grid inside a slight timeout, in case other DOM element changed prior to the resize (like a filter/pagination changed)
            if (this.grid && this.gridOptions.enableAutoResize) {
                const delay = this.gridOptions.autoResize && this.gridOptions.autoResize.delay || 10;
                this.resizerService.resizeGrid(delay, { height: this.gridHeight, width: this.gridWidth });
            }
        }
    }
    /**
     * Toggle the filter row displayed on first row
     * @param isShowing
     */
    showHeaderRow(isShowing) {
        this.grid.setHeaderRowVisibility(isShowing);
        return isShowing;
    }
    /** Toggle the filter row displayed on first row */
    toggleHeaderRow() {
        const isShowing = !this.grid.getOptions().showHeaderRow;
        this.grid.setHeaderRowVisibility(isShowing);
        return isShowing;
    }
    /**
     * Dynamically change or update the column definitions list.
     * We will re-render the grid so that the new header and data shows up correctly.
     * If using i18n, we also need to trigger a re-translate of the column headers
     */
    updateColumnDefinitionsList(newColumnDefinitions) {
        if (this.gridOptions.enableTranslate) {
            this.controlAndPluginService.translateColumnHeaders(false, newColumnDefinitions);
        }
        else {
            this.controlAndPluginService.renderColumnHeaders(newColumnDefinitions);
        }
        if (this.gridOptions && this.gridOptions.enableAutoSizeColumns) {
            this.grid.autosizeColumns();
        }
    }
    //
    // private functions
    // ------------------
    /** Dispatch of Custom Event, which by default will bubble & is cancelable */
    dispatchCustomEvent(eventName, data, isBubbling = true, isCancelable = true) {
        const eventInit = { bubbles: isBubbling, cancelable: isCancelable };
        if (data) {
            eventInit.detail = data;
        }
        return this.elm.dispatchEvent(new CustomEvent(eventName, eventInit));
    }
    /** Load the Editor Collection asynchronously and replace the "collection" property when Promise resolves */
    loadEditorCollectionAsync(column) {
        const collectionAsync = column && column.editor && column.editor.collectionAsync;
        if (collectionAsync) {
            // wait for the "collectionAsync", once resolved we will save it into the "collection"
            // the collectionAsync can be of 3 types HttpClient, HttpFetch or a Promise
            //
            collectionAsync.then((response) => {
                if (Array.isArray(response)) {
                    this.updateEditorCollection(column, response); // from Promise
                }
                else if (response instanceof Response && typeof response.json === 'function') {
                    if (response.bodyUsed) {
                        throw new Error('[Aurelia-SlickGrid] The response body passed to collectionAsync was ' +
                            'already read. Either pass the dataset from the Response ' +
                            'or clone the response first using response.clone()');
                    }
                    // from Fetch
                    response.json().then(data => this.updateEditorCollection(column, data));
                }
                else if (response && response['content']) {
                    this.updateEditorCollection(column, response['content']); // from aurelia-http-client
                }
            });
        }
        return [];
    }
    /**
     * Update the "internalColumnEditor.collection" property.
     * Since this is called after the async call resolves, the pointer will not be the same as the "column" argument passed.
     * Once we found the new pointer, we will reassign the "editor" and "collection" to the "internalColumnEditor" so it has newest collection
     */
    updateEditorCollection(column, newCollection) {
        column.editor.collection = newCollection;
        // find the new column reference pointer & reassign the new editor to the internalColumnEditor
        const columns = this.grid.getColumns();
        if (Array.isArray(columns)) {
            const columnRef = columns.find((col) => col.id === column.id);
            columnRef.internalColumnEditor = column.editor;
        }
    }
};
__decorate([
    bindable({ defaultBindingMode: bindingMode.twoWay })
], AureliaSlickgridCustomElement.prototype, "columnDefinitions", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.twoWay })
], AureliaSlickgridCustomElement.prototype, "element", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.twoWay })
], AureliaSlickgridCustomElement.prototype, "gridPaginationOptions", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.twoWay })
], AureliaSlickgridCustomElement.prototype, "dataview", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.twoWay })
], AureliaSlickgridCustomElement.prototype, "grid", void 0);
__decorate([
    bindable()
], AureliaSlickgridCustomElement.prototype, "dataset", void 0);
__decorate([
    bindable()
], AureliaSlickgridCustomElement.prototype, "gridId", void 0);
__decorate([
    bindable()
], AureliaSlickgridCustomElement.prototype, "gridOptions", void 0);
__decorate([
    bindable()
], AureliaSlickgridCustomElement.prototype, "gridHeight", void 0);
__decorate([
    bindable()
], AureliaSlickgridCustomElement.prototype, "gridWidth", void 0);
__decorate([
    bindable()
], AureliaSlickgridCustomElement.prototype, "pickerOptions", void 0);
AureliaSlickgridCustomElement = __decorate([
    inject(BindingEngine, ControlAndPluginService, ExportService, Element, EventAggregator, FilterService, GridEventService, GridService, GridStateService, GroupingAndColspanService, ResizerService, SortService, Container)
], AureliaSlickgridCustomElement);
export { AureliaSlickgridCustomElement };
//# sourceMappingURL=aurelia-slickgrid.js.map