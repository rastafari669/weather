import React, { useState, useEffect } from "react";
import "./Main.css";
import { useLocation } from "react-router-dom";
import WeatherDetails from "../WeatherDetails/WeatherDetails";

import { useDispatch } from "react-redux";
import {
  isLoading,
  stopLoading,
  setWeather,
} from "../../redux/actions/weatherActions";
import { useSelector } from "react-redux";
import { Audio } from "react-loader-spinner";

const Main = () => {
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  const location = useLocation();
  const dispatch = useDispatch();

  const state = useSelector((state) => state.city);

  useEffect(() => {
    const { from } = location.state ? location.state : "null";
    if (from && from !== "Tel-aviv Port") {
      const getDefaultCity = async (name) => {
        dispatch(isLoading());

        dispatch(setWeather(name));

        dispatch(stopLoading());
      };
      getDefaultCity(from);
    } else {
      const getDefaultCity = async () => {
        dispatch(isLoading());

        dispatch(setWeather("Tel-aviv Port"));

        dispatch(stopLoading());
      };
      getDefaultCity();
    }
  }, [location.state, dispatch]);

  const check = async (value) => {
    const regex = /[A-Za-z]/;
    const chars = value.split("");
    const char = chars.pop();
    if (!regex.test(char)) {
      value = chars.join("");

      setError(`״${char}״ is not a valid character. English letters only`);
    } else {
      setError("");
      setCity(value);
    }
  };

  const EnterCity = async (e) => {
    if (city) {
      if (e.key === "Enter") {
        dispatch(isLoading());

        dispatch(setWeather(city));

        dispatch(stopLoading());
      } else {
        setError("Unknown city name");
      }
    }
  };

  return (
    <>
      <div className="search-outer">
        <h2>Press Enter to Search</h2>

        <input
          onKeyDown={EnterCity}
          placeholder="Search for City..."
          onChange={(event) => check(event.target.value)}
          className="searchbar"
          type="text"
        />
        <p>{error}</p>

        {!state.isLoading ? (
          <WeatherDetails cityWeatherCur={state.cityWeather} city={city} />
        ) : (
          <Audio height="100" width="100" color="grey" ariaLabel="loading" />
        )}
      </div>
    </>
  );
};

export default Main;
