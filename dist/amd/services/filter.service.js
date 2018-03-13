var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
define(["require", "exports", "aurelia-framework", "aurelia-event-aggregator", "./../filter-conditions/index", "./../filters/index", "./../models/index"], function (require, exports, aurelia_framework_1, aurelia_event_aggregator_1, index_1, index_2, index_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var FilterService = /** @class */ (function () {
        function FilterService(ea, filterFactory) {
            this.ea = ea;
            this.filterFactory = filterFactory;
            this._eventHandler = new Slick.EventHandler();
            this._filters = [];
            this._columnFilters = {};
        }
        FilterService.prototype.init = function (grid, gridOptions, columnDefinitions) {
            this._grid = grid;
            this._gridOptions = gridOptions;
        };
        /**
         * Attach a backend filter hook to the grid
         * @param grid SlickGrid Grid object
         * @param gridOptions Grid Options object
         */
        FilterService.prototype.attachBackendOnFilter = function (grid, options) {
            var _this = this;
            this._filters = [];
            this._slickSubscriber = new Slick.Event();
            // subscribe to the SlickGrid event and call the backend execution
            this._slickSubscriber.subscribe(this.attachBackendOnFilterSubscribe.bind(this));
            // subscribe to SlickGrid onHeaderRowCellRendered event to create filter template
            this._eventHandler.subscribe(grid.onHeaderRowCellRendered, function (e, args) {
                _this.addFilterTemplateToHeaderRow(args);
            });
        };
        FilterService.prototype.attachBackendOnFilterSubscribe = function (event, args) {
            return __awaiter(this, void 0, void 0, function () {
                var gridOptions, backendApi, query, processResult;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!args || !args.grid) {
                                throw new Error('Something went wrong when trying to attach the "attachBackendOnFilterSubscribe(event, args)" function, it seems that "args" is not populated correctly');
                            }
                            gridOptions = args.grid.getOptions() || {};
                            backendApi = gridOptions.backendServiceApi || gridOptions.onBackendEventApi;
                            if (!backendApi || !backendApi.process || !backendApi.service) {
                                throw new Error("BackendServiceApi requires at least a \"process\" function and a \"service\" defined");
                            }
                            // run a preProcess callback if defined
                            if (backendApi.preProcess) {
                                backendApi.preProcess();
                            }
                            return [4 /*yield*/, backendApi.service.onFilterChanged(event, args)];
                        case 1:
                            query = _a.sent();
                            // emit an onFilterChanged event
                            this.emitFilterChanged('remote');
                            return [4 /*yield*/, backendApi.process(query)];
                        case 2:
                            processResult = _a.sent();
                            // from the result, call our internal post process to update the Dataset and Pagination info
                            if (processResult && backendApi.internalPostProcess) {
                                backendApi.internalPostProcess(processResult);
                            }
                            // send the response process to the postProcess callback
                            if (backendApi.postProcess !== undefined) {
                                backendApi.postProcess(processResult);
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Attach a local filter hook to the grid
         * @param grid SlickGrid Grid object
         * @param gridOptions Grid Options object
         * @param dataView
         */
        FilterService.prototype.attachLocalOnFilter = function (grid, options, dataView) {
            var _this = this;
            this._filters = [];
            this._dataView = dataView;
            this._slickSubscriber = new Slick.Event();
            dataView.setFilterArgs({ columnFilters: this._columnFilters, grid: this._grid });
            dataView.setFilter(this.customLocalFilter.bind(this, dataView));
            this._slickSubscriber.subscribe(function (e, args) {
                var columnId = args.columnId;
                if (columnId != null) {
                    dataView.refresh();
                }
                _this.emitFilterChanged('local');
            });
            // subscribe to SlickGrid onHeaderRowCellRendered event to create filter template
            this._eventHandler.subscribe(grid.onHeaderRowCellRendered, function (e, args) {
                _this.addFilterTemplateToHeaderRow(args);
            });
        };
        /** Clear the search filters (below the column titles) */
        FilterService.prototype.clearFilters = function () {
            this._filters.forEach(function (filter, index) {
                if (filter && filter.clear) {
                    // clear element and trigger a change
                    filter.clear(true);
                }
            });
            // we need to loop through all columnFilters and delete them 1 by 1
            // only trying to clear columnFilter (without looping through) would not trigger a dataset change
            for (var columnId in this._columnFilters) {
                if (columnId && this._columnFilters[columnId]) {
                    delete this._columnFilters[columnId];
                }
            }
            // we also need to refresh the dataView and optionally the grid (it's optional since we use DataView)
            if (this._dataView) {
                this._dataView.refresh();
                this._grid.invalidate();
                this._grid.render();
            }
        };
        FilterService.prototype.customLocalFilter = function (dataView, item, args) {
            for (var _i = 0, _a = Object.keys(args.columnFilters); _i < _a.length; _i++) {
                var columnId = _a[_i];
                var columnFilter = args.columnFilters[columnId];
                var columnIndex = args.grid.getColumnIndex(columnId);
                var columnDef = args.grid.getColumns()[columnIndex];
                if (!columnDef) {
                    return false;
                }
                var fieldType = columnDef.type || index_3.FieldType.string;
                var filterSearchType = (columnDef.filterSearchType) ? columnDef.filterSearchType : null;
                var cellValue = item[columnDef.queryField || columnDef.queryFieldFilter || columnDef.field];
                var searchTerms = (columnFilter && columnFilter.searchTerms) ? columnFilter.searchTerms : null;
                var fieldSearchValue = (columnFilter && (columnFilter.searchTerm !== undefined || columnFilter.searchTerm !== null)) ? columnFilter.searchTerm : undefined;
                if (typeof fieldSearchValue === 'undefined') {
                    fieldSearchValue = '';
                }
                fieldSearchValue = '' + fieldSearchValue; // make sure it's a string
                var matches = fieldSearchValue.match(/^([<>!=\*]{0,2})(.*[^<>!=\*])([\*]?)$/); // group 1: Operator, 2: searchValue, 3: last char is '*' (meaning starts with, ex.: abc*)
                var operator = columnFilter.operator || ((matches) ? matches[1] : '');
                var searchTerm = (!!matches) ? matches[2] : '';
                var lastValueChar = (!!matches) ? matches[3] : '';
                // when using a Filter that is not a custom type, we want to make sure that we have a default operator type
                // for example a multiple-select should always be using IN, while a single select will use an EQ
                var filterType = (columnDef.filter && columnDef.filter.type) ? columnDef.filter.type : index_3.FilterType.input;
                if (!operator && filterType !== index_3.FilterType.custom) {
                    switch (filterType) {
                        case index_3.FilterType.select:
                        case index_3.FilterType.multipleSelect:
                            operator = 'IN';
                            break;
                        case index_3.FilterType.singleSelect:
                            operator = 'EQ';
                            break;
                        default:
                            operator = operator;
                            break;
                    }
                }
                // no need to query if search value is empty
                if (searchTerm === '' && !searchTerms) {
                    return true;
                }
                // filter search terms should always be string type (even though we permit the end user to input numbers)
                // so make sure each term are strings, if user has some default search terms, we will cast them to string
                if (searchTerms && Array.isArray(searchTerms)) {
                    for (var k = 0, ln = searchTerms.length; k < ln; k++) {
                        // make sure all search terms are strings
                        searchTerms[k] = ((searchTerms[k] === undefined || searchTerms[k] === null) ? '' : searchTerms[k]) + '';
                    }
                }
                // when using localization (i18n), we should use the formatter output to search as the new cell value
                if (columnDef && columnDef.params && columnDef.params.useFormatterOuputToFilter) {
                    var rowIndex = (dataView && typeof dataView.getIdxById === 'function') ? dataView.getIdxById(item.id) : 0;
                    cellValue = columnDef.formatter(rowIndex, columnIndex, cellValue, columnDef, item, this._grid);
                }
                // make sure cell value is always a string
                if (typeof cellValue === 'number') {
                    cellValue = cellValue.toString();
                }
                var conditionOptions = {
                    fieldType: fieldType,
                    searchTerms: searchTerms,
                    searchTerm: searchTerm,
                    cellValue: cellValue,
                    operator: operator,
                    cellValueLastChar: lastValueChar,
                    filterSearchType: filterSearchType
                };
                if (!index_1.FilterConditions.executeMappedCondition(conditionOptions)) {
                    return false;
                }
            }
            return true;
        };
        FilterService.prototype.dispose = function () {
            this.disposeColumnFilters();
            // unsubscribe all SlickGrid events
            this._eventHandler.unsubscribeAll();
            // unsubscribe local event
            if (this._slickSubscriber && typeof this._slickSubscriber.unsubscribe === 'function') {
                this._slickSubscriber.unsubscribe();
            }
        };
        /**
         * Dispose of the filters, since it's a singleton, we don't want to affect other grids with same columns
         */
        FilterService.prototype.disposeColumnFilters = function () {
            // we need to loop through all columnFilters and delete them 1 by 1
            // only trying to make columnFilter an empty (without looping) would not trigger a dataset change
            for (var columnId in this._columnFilters) {
                if (columnId && this._columnFilters[columnId]) {
                    delete this._columnFilters[columnId];
                }
            }
            // also destroy each Filter instances
            this._filters.forEach(function (filter, index) {
                if (filter && filter.destroy) {
                    filter.destroy(true);
                }
            });
        };
        FilterService.prototype.getColumnFilters = function () {
            return this._columnFilters;
        };
        FilterService.prototype.getCurrentLocalFilters = function () {
            var currentFilters = [];
            if (this._columnFilters) {
                for (var _i = 0, _a = Object.keys(this._columnFilters); _i < _a.length; _i++) {
                    var colId = _a[_i];
                    var columnFilter = this._columnFilters[colId];
                    var filter = { columnId: colId || '' };
                    if (columnFilter && columnFilter.searchTerms) {
                        filter.searchTerms = columnFilter.searchTerms;
                    }
                    else {
                        filter.searchTerm = (columnFilter && (columnFilter.searchTerm !== undefined || columnFilter.searchTerm !== null)) ? columnFilter.searchTerm : undefined;
                    }
                    currentFilters.push(filter);
                }
            }
            return currentFilters;
        };
        FilterService.prototype.callbackSearchEvent = function (e, args) {
            var targetValue = (e && e.target) ? e.target.value : undefined;
            var searchTerms = (args && args.searchTerms && Array.isArray(args.searchTerms)) ? args.searchTerms : [];
            var columnId = (args && args.columnDef) ? args.columnDef.id || '' : '';
            if (!targetValue && searchTerms.length === 0) {
                // delete the property from the columnFilters when it becomes empty
                // without doing this, it would leave an incorrect state of the previous column filters when filtering on another column
                delete this._columnFilters[columnId];
            }
            else {
                var colId = '' + columnId;
                this._columnFilters[colId] = {
                    columnId: colId,
                    columnDef: args.columnDef || null,
                    operator: args.operator || undefined,
                    searchTerms: args.searchTerms || undefined,
                    searchTerm: ((e && e.target) ? e.target.value : undefined),
                };
            }
            this.triggerEvent(this._slickSubscriber, {
                columnId: columnId,
                columnDef: args.columnDef || null,
                columnFilters: this._columnFilters,
                searchTerms: args.searchTerms || undefined,
                searchTerm: ((e && e.target) ? e.target.value : null),
                serviceOptions: this._onFilterChangedOptions,
                grid: this._grid
            }, e);
        };
        FilterService.prototype.addFilterTemplateToHeaderRow = function (args) {
            var columnDef = args.column;
            var columnId = columnDef.id || '';
            if (columnDef && columnId !== 'selector' && columnDef.filterable) {
                var searchTerms = void 0;
                var searchTerm = void 0;
                if (this._columnFilters[columnDef.id]) {
                    searchTerm = this._columnFilters[columnDef.id].searchTerm || undefined;
                    searchTerms = this._columnFilters[columnDef.id].searchTerms || undefined;
                }
                else if (columnDef.filter) {
                    // when hiding/showing (with Column Picker or Grid Menu), it will try to re-create yet again the filters (since SlickGrid does a re-render)
                    // because of that we need to first get searchTerm(s) from the columnFilters (that is what the user last entered)
                    searchTerms = columnDef.filter.searchTerms || undefined;
                    searchTerm = columnDef.filter.searchTerm || undefined;
                    this.updateColumnFilters(searchTerm, searchTerms, columnDef);
                }
                var filterArguments = {
                    grid: this._grid,
                    searchTerm: searchTerm,
                    searchTerms: searchTerms,
                    columnDef: columnDef,
                    callback: this.callbackSearchEvent.bind(this)
                };
                // depending on the Filter type, we will watch the correct event
                var filterType = (columnDef.filter && columnDef.filter.type) ? columnDef.filter.type : this._gridOptions.defaultFilterType;
                var filter_1;
                switch (filterType) {
                    case index_3.FilterType.custom:
                        if (columnDef && columnDef.filter && columnDef.filter.customFilter) {
                            filter_1 = columnDef.filter.customFilter;
                        }
                        else {
                            throw new Error('[Aurelia-Slickgrid] A Filter type of "custom" must include a Filter class that is defined and instantiated.');
                        }
                        break;
                    default:
                        filter_1 = this.filterFactory.createFilter(filterType);
                        break;
                }
                if (filter_1) {
                    filter_1.init(filterArguments);
                    var filterExistIndex = this._filters.findIndex(function (filt) { return filter_1.columnDef.name === filt.columnDef.name; });
                    // add to the filters arrays or replace it when found
                    if (filterExistIndex === -1) {
                        this._filters.push(filter_1);
                    }
                    else {
                        this._filters[filterExistIndex] = filter_1;
                    }
                    // when hiding/showing (with Column Picker or Grid Menu), it will try to re-create yet again the filters (since SlickGrid does a re-render)
                    // we need to also set again the values in the DOM elements if the values were set by a searchTerm(s)
                    if ((searchTerm || searchTerms) && filter_1.setValues) {
                        filter_1.setValues(searchTerm || searchTerms);
                    }
                }
            }
        };
        /**
         * A simple function that will be called to emit a change when a filter changes.
         * Other services, like Pagination, can then subscribe to it.
         * @param sender
         */
        FilterService.prototype.emitFilterChanged = function (sender) {
            if (sender === 'remote' && this._gridOptions && this._gridOptions.backendServiceApi) {
                var currentFilters = [];
                var backendService = this._gridOptions.backendServiceApi.service;
                if (backendService && backendService.getCurrentFilters) {
                    currentFilters = backendService.getCurrentFilters();
                }
                this.ea.publish('filterService:filterChanged', currentFilters);
            }
            else if (sender === 'local') {
                this.ea.publish('filterService:filterChanged', this.getCurrentLocalFilters());
            }
        };
        /**
         * When user passes an array of preset filters, we need to pre-polulate each column filter searchTerm(s)
         * The process is to loop through the preset filters array, find the associated column from columnDefinitions and fill in the filter object searchTerm(s)
         * This is basically the same as if we would manually add searchTerm(s) to a column filter object in the column definition, but we do it programmatically.
         * At the end of the day, when creating the Filter (DOM Element), it will use these searchTerm(s) so we can take advantage of that without recoding each Filter type (DOM element)
         * @param gridOptions
         * @param columnDefinitions
         */
        FilterService.prototype.populateColumnFilterSearchTerms = function (gridOptions, columnDefinitions) {
            if (gridOptions.presets && gridOptions.presets.filters) {
                var filters_1 = gridOptions.presets.filters;
                columnDefinitions.forEach(function (columnDef) {
                    var columnPreset = filters_1.find(function (presetFilter) {
                        return presetFilter.columnId === columnDef.id;
                    });
                    if (columnPreset && columnPreset.searchTerm) {
                        columnDef.filter = columnDef.filter || {};
                        columnDef.filter.searchTerm = columnPreset.searchTerm;
                    }
                    if (columnPreset && columnPreset.searchTerms) {
                        columnDef.filter = columnDef.filter || {};
                        columnDef.filter.operator = columnDef.filter.operator || index_3.OperatorType.in;
                        columnDef.filter.searchTerms = columnPreset.searchTerms;
                    }
                });
            }
            return columnDefinitions;
        };
        FilterService.prototype.updateColumnFilters = function (searchTerm, searchTerms, columnDef) {
            if (searchTerm !== undefined && searchTerm !== null && searchTerm !== '') {
                this._columnFilters[columnDef.id] = {
                    columnId: columnDef.id,
                    columnDef: columnDef,
                    searchTerm: searchTerm,
                    operator: (columnDef && columnDef.filter && columnDef.filter.operator) ? columnDef.filter.operator : null,
                    type: (columnDef && columnDef.filter && columnDef.filter.type) ? columnDef.filter.type : index_3.FilterType.input
                };
            }
            if (searchTerms) {
                // this._columnFilters.searchTerms = searchTerms;
                this._columnFilters[columnDef.id] = {
                    columnId: columnDef.id,
                    columnDef: columnDef,
                    searchTerms: searchTerms,
                    operator: (columnDef && columnDef.filter && columnDef.filter.operator) ? columnDef.filter.operator : null,
                    type: (columnDef && columnDef.filter && columnDef.filter.type) ? columnDef.filter.type : index_3.FilterType.input
                };
            }
        };
        FilterService.prototype.triggerEvent = function (evt, args, e) {
            e = e || new Slick.EventData();
            return evt.notify(args, e, args.grid);
        };
        FilterService = __decorate([
            aurelia_framework_1.inject(aurelia_event_aggregator_1.EventAggregator, index_2.FilterFactory)
        ], FilterService);
        return FilterService;
    }());
    exports.FilterService = FilterService;
});
//# sourceMappingURL=filter.service.js.map