import { HYDRATE } from "next-redux-wrapper";
import { AnyAction, combineReducers } from "redux";

import { PlayerAction } from "@/types/player";

import { RootState } from "../";
import { playerReducer } from "./playerReducer";
import { trackReducer } from "./trackReducer";

export const rootReducer = combineReducers({
  player: playerReducer,
  track: trackReducer,
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
