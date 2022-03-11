// useContext and useReducer are React Hooks
import React, { createContext, useContext, useReducer } from 'react';

export const StateContext = createContext();

// Higher Order Component (HOC)
export const StateProvider = ({ reducer, initState, children }) => (
    <StateContext.Provider value = {useReducer(reducer, initState)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);