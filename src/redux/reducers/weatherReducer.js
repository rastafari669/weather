/* eslint-disable no-undef */

import { ActionsTypes } from "../constants/action-types";

const initialState = {
  cityWeather: {},
  favorites: [],
  isLoading: false,
};

export const weatherReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionsTypes.IS_LOADING:
      return { ...state, isLoading: true };
    case ActionsTypes.STOP_LOADING:
      return { ...state, isLoading: false };
    case ActionsTypes.GET_CITY_WEATHER:
      return { ...state, cityWeather: payload };
    case ActionsTypes.ADD_TO_FAVORITES:
      return { ...state, favorites: [...state.favorites, payload] };
    case ActionsTypes.REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter((item) => item.id !== payload),
      };

    default:
      return state;
  }
};
