import { createContext, useContext, useReducer } from 'react';

export const DataLayerContext = createContext();

export const DataLayerContextProvider = ({ initialState, reducer, children }) => (
    <DataLayerContext.Provider value = { useReducer(reducer, initialState) }>
        {children}
    </DataLayerContext.Provider>
);

export const useDataLayerContextValue = () => useContext(DataLayerContext);