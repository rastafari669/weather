import { ActionsTypes } from "../constants/action-types";
import { getApiId, getApiCityWeather, getApiFiveDays } from "../../api";

export const setWeather = (theWeather) => {
  return async function (dispatch) {
    try {
      const City = await getApiId(theWeather);
      const cityName = City.data[0]?.LocalizedName;

      const cityId = City.data[0]?.Key;
      const cityWeather = await getApiCityWeather(cityId);

      const DailyFive = await getApiFiveDays(cityId);

      const weatherForcast = {
        cityDetails: { ...cityWeather.data[0], cityName },
        DailyFive: DailyFive.data.DailyForecasts,
      };

      dispatch({
        type: ActionsTypes.GET_CITY_WEATHER,
        payload: weatherForcast,
      });
    } catch (error) {
      alert(error);
    }
  };
};

export const addToFav = (cityWeather) => {
  return {
    type: ActionsTypes.ADD_TO_FAVORITES,
    payload: cityWeather,
  };
};

export const removeFav = (cityWeather) => {
  return {
    type: ActionsTypes.REMOVE_FROM_FAVORITES,
    payload: cityWeather,
  };
};

export const isLoading = () => {
  return {
    type: ActionsTypes.IS_LOADING,
  };
};

export const stopLoading = () => {
  return {
    type: ActionsTypes.STOP_LOADING,
  };
};
