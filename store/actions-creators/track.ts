import axios from "axios";
import { Dispatch } from "react";

import { CONSTS } from "@/consts";
import { TrackAction, TrackActionTypes } from "@/types/track";

export const fetchTracks = () => {
  return async (dispatch: Dispatch<TrackAction>) => {
    try {
      const response = await axios.get('http://localhost:5000/tracks');
      dispatch({ type: TrackActionTypes.FETCH_TRACKS, payload: response.data });
    } catch (e: unknown) {
      if (e instanceof Error) {
        dispatch({
          type: TrackActionTypes.FETCH_TRACKS_ERROR,
          payload: `Произошла ошибка ${e.message}`
        });
      }
    }
  };
};

export const searchTracks = (query: string) => {
  return async (dispatch: Dispatch<TrackAction>) => {
    try {
      const response = await axios.get(`${CONSTS.URL_TRACKS}tracks/search?query=${query}`);
      dispatch({ type: TrackActionTypes.FETCH_TRACKS, payload: response.data });
    } catch (e: unknown) {
      if (e instanceof Error) {
        dispatch({
          type: TrackActionTypes.FETCH_TRACKS_ERROR,
          payload: `Произошла ошибка ${e.message}`
        });
      }
    }
  };
};