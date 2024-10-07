import { HYDRATE } from "next-redux-wrapper";
import { AnyAction, combineReducers } from "redux";

import { PlayerAction } from "@/types/player";

import { playerReducer } from "./playerReducer";

export const rootReducer = combineReducers({
  player: playerReducer,
});

const reducer = (state: RootState, action: AnyAction | PlayerAction) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    if (state.player) nextState.player = state.player;
    return nextState;
  } else {
    return rootReducer(state, action as PlayerAction);
  }
};

export type RootState = ReturnType<typeof rootReducer>;
