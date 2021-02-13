import { combineReducers } from 'redux';
import photosReducer from './reducer.photos';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['photos']
}

const rootReducer =  combineReducers({
    photos: photosReducer
});

export default persistReducer(persistConfig, rootReducer );