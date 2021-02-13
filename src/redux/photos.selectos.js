import { createSelector } from 'reselect';

const selectPhotos = state => state.photos;

export const selectPhotosCollection = createSelector(
    [selectPhotos],
    shop => shop.data
);