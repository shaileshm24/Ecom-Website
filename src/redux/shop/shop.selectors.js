import { createSelector} from 'reselect';
import memoize from 'lodash.memoize';

const selectCollection= state => state.shop;

export const selectionCollectionItem = createSelector(
    [selectCollection],
    shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectionCollectionItem],
    collections => Object.keys(collections).map(key => collections[key])
  );

export const selectCategory = collectionUrlParam => createSelector(
    [selectionCollectionItem],
    collections => collections[collectionUrlParam]

);