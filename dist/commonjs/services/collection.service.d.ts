import { I18N } from 'aurelia-i18n';
import { CollectionFilterBy, CollectionSortBy, FilterMultiplePassType, FilterMultiplePassTypeString } from './../models/index';
export declare class CollectionService {
    private i18n;
    constructor(i18n: I18N);
    /**
     * Filter 1 or more items from a collection
     * @param collection
     * @param filterByOptions
     */
    filterCollection(collection: any[], filterByOptions: CollectionFilterBy | CollectionFilterBy[], filterResultBy?: FilterMultiplePassType | FilterMultiplePassTypeString | null): any[];
    /**
     * Filter an item from a collection
     * @param collection
     * @param filterBy
     */
    singleFilterCollection(collection: any[], filterBy: CollectionFilterBy): any[];
    /**
     * Sort 1 or more items in a collection
     * @param collection
     * @param sortByOptions
     * @param enableTranslateLabel
     */
    sortCollection(collection: any[], sortByOptions: CollectionSortBy | CollectionSortBy[], enableTranslateLabel?: boolean): any[];
}
