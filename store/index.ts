import { createWrapper } from "next-redux-wrapper";
import { AnyAction } from "redux";
import { thunk, ThunkDispatch, ThunkMiddleware, withExtraArgument } from "redux-thunk";

import { configureStore } from "@reduxjs/toolkit";

import { rootReducer } from "./reducers";

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