import { createStore, applyMiddleware, compose } from 'redux';
import { logger } from 'redux-logger';
import rootReducer from './root-reducer';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const middlewares = [thunk,logger];

export const store = createStore(rootReducer, compose(applyMiddleware(...middlewares)));

export const persistor = persistStore(store);

