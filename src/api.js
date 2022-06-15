import axios from "axios";

const apikey = "cJUgjltovAoW7iGdjROMvmbQTlCGavUX";
const BASEURL = "https://dataservice.accuweather.com";

const getApiId = async (city) => {
  return await axios.get(
    `${BASEURL}/locations/v1/cities/autocomplete?apikey=${apikey}&q=${city}`
  );
};

const getApiCityWeather = async (cityId) => {
  return await axios.get(
    `${BASEURL}/currentconditions/v1/${cityId}?apikey=${apikey}`
  );
};

const getApiFiveDays = async (cityId) => {
  return await axios.get(
    `${BASEURL}/forecasts/v1/daily/5day/${cityId}?apikey=${apikey}`
  );
};

export { getApiId, getApiCityWeather, getApiFiveDays };
