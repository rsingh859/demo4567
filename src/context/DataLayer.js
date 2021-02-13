import { createContext, useContext, useReducer } from 'react';
import logger from 'use-reducer-logger';

export const DataLayerContext = createContext();

export const DataLayerContextProvider = ({ initialState, reducer, children }) => (
    <DataLayerContext.Provider value = { useReducer(logger(reducer), initialState) }>
        {children}
    </DataLayerContext.Provider>
);

export const useDataLayerContextValue = () => useContext(DataLayerContext);