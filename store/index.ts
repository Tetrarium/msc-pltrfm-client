import { Context, createWrapper, MakeStore } from "next-redux-wrapper";
import {
    AnyAction, applyMiddleware, createStore, legacy_createStore, Reducer, Store, StoreEnhancer,
    UnknownAction
} from "redux";
import { thunk, ThunkAction, ThunkDispatch, ThunkMiddleware, withExtraArgument } from "redux-thunk";

import { configureStore } from "@reduxjs/toolkit";

import { rootReducer } from "./reducers";
import { trackReducer } from "./reducers/trackReducer";

// , applyMiddleware(thunk)
// const makeStore: MakeStore<Store<RootState>> = (context: Context) => createStore(rootReducer, {}, applyMiddleware(thunk));

// export const wrapper = createWrapper<Store<RootState>>(makeStore, { debug: true });

// export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>;

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunk as ThunkMiddleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export const wrapper = createWrapper(makeStore, { debug: true });

export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>;