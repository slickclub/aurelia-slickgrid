var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "aurelia-framework", "aurelia-i18n", "./../models/index", "../sorters/sorterUtilities", "./utilities"], function (require, exports, aurelia_framework_1, aurelia_i18n_1, index_1, sorterUtilities_1, utilities_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CollectionService = /** @class */ (function () {
        function CollectionService(i18n) {
            this.i18n = i18n;
        }
        /**
         * Filter 1 or more items from a collection
         * @param collection
         * @param filterByOptions
         */
        CollectionService.prototype.filterCollection = function (collection, filterByOptions, filterResultBy) {
            if (filterResultBy === void 0) { filterResultBy = index_1.FilterMultiplePassType.chain; }
            var filteredCollection = [];
            // when it's array, we will use the new filtered collection after every pass
            // basically if input collection has 10 items on 1st pass and 1 item is filtered out, then on 2nd pass the input collection will be 9 items
            if (Array.isArray(filterByOptions)) {
                filteredCollection = (filterResultBy === index_1.FilterMultiplePassType.merge) ? [] : collection.slice();
                for (var _i = 0, filterByOptions_1 = filterByOptions; _i < filterByOptions_1.length; _i++) {
                    var filter = filterByOptions_1[_i];
                    if (filterResultBy === index_1.FilterMultiplePassType.merge) {
                        var filteredPass = this.singleFilterCollection(collection, filter);
                        filteredCollection = utilities_1.uniqueArray(filteredCollection.concat(filteredPass));
                    }
                    else {
                        filteredCollection = this.singleFilterCollection(filteredCollection, filter);
                    }
                }
            }
            else {
                filteredCollection = this.singleFilterCollection(collection, filterByOptions);
            }
            return filteredCollection;
        };
        /**
         * Filter an item from a collection
         * @param collection
         * @param filterBy
         */
        CollectionService.prototype.singleFilterCollection = function (collection, filterBy) {
            var filteredCollection = [];
            if (filterBy) {
                var property_1 = filterBy.property || '';
                var operator = filterBy.operator || index_1.OperatorType.equal;
                // just check for undefined since the filter value could be null, 0, '', false etc
                var value_1 = typeof filterBy.value === 'undefined' ? '' : filterBy.value;
                switch (operator) {
                    case index_1.OperatorType.equal:
                        filteredCollection = collection.filter(function (item) { return item[property_1] === value_1; });
                        break;
                    case index_1.OperatorType.contains:
                        filteredCollection = collection.filter(function (item) { return item[property_1].toString().indexOf(value_1.toString()) !== -1; });
                        break;
                    case index_1.OperatorType.notContains:
                        filteredCollection = collection.filter(function (item) { return item[property_1].toString().indexOf(value_1.toString()) === -1; });
                        break;
                    case index_1.OperatorType.notEqual:
                    default:
                        filteredCollection = collection.filter(function (item) { return item[property_1] !== value_1; });
                }
            }
            return filteredCollection;
        };
        /**
         * Sort 1 or more items in a collection
         * @param collection
         * @param sortByOptions
         * @param enableTranslateLabel
         */
        CollectionService.prototype.sortCollection = function (collection, sortByOptions, enableTranslateLabel) {
            var _this = this;
            var sortedCollection = [];
            if (sortByOptions) {
                if (Array.isArray(sortByOptions)) {
                    // multi-sort
                    sortedCollection = collection.sort(function (dataRow1, dataRow2) {
                        for (var i = 0, l = sortByOptions.length; i < l; i++) {
                            var sortBy = sortByOptions[i];
                            if (sortBy) {
                                var sortDirection = sortBy.sortDesc ? index_1.SortDirectionNumber.desc : index_1.SortDirectionNumber.asc;
                                var propertyName = sortBy.property || '';
                                var fieldType = sortBy.fieldType || index_1.FieldType.string;
                                var value1 = (enableTranslateLabel) ? _this.i18n.tr(dataRow1[propertyName] || ' ') : dataRow1[propertyName];
                                var value2 = (enableTranslateLabel) ? _this.i18n.tr(dataRow2[propertyName] || ' ') : dataRow2[propertyName];
                                var sortResult = sorterUtilities_1.sortByFieldType(value1, value2, fieldType, sortDirection);
                                if (sortResult !== index_1.SortDirectionNumber.neutral) {
                                    return sortResult;
                                }
                            }
                        }
                        return index_1.SortDirectionNumber.neutral;
                    });
                }
                else {
                    // single sort
                    var propertyName_1 = sortByOptions.property || '';
                    var sortDirection_1 = sortByOptions.sortDesc ? index_1.SortDirectionNumber.desc : index_1.SortDirectionNumber.asc;
                    var fieldType_1 = sortByOptions.fieldType || index_1.FieldType.string;
                    sortedCollection = collection.sort(function (dataRow1, dataRow2) {
                        var value1 = (enableTranslateLabel) ? _this.i18n.tr(dataRow1[propertyName_1] || ' ') : dataRow1[propertyName_1];
                        var value2 = (enableTranslateLabel) ? _this.i18n.tr(dataRow2[propertyName_1] || ' ') : dataRow2[propertyName_1];
                        var sortResult = sorterUtilities_1.sortByFieldType(value1, value2, fieldType_1, sortDirection_1);
                        if (sortResult !== index_1.SortDirectionNumber.neutral) {
                            return sortResult;
                        }
                        return index_1.SortDirectionNumber.neutral;
                    });
                }
            }
            return sortedCollection;
        };
        CollectionService = __decorate([
            aurelia_framework_1.inject(aurelia_i18n_1.I18N)
        ], CollectionService);
        return CollectionService;
    }());
    exports.CollectionService = CollectionService;
});
//# sourceMappingURL=collection.service.js.map