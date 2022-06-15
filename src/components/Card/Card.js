import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToFav } from "../../redux/actions/weatherActions";
import cloudy from "../../Images/cloudy-day.png";
import star from "../../Images/star-2.png";
import { getDay } from "../../utils";
import SweetAlert from "sweetalert2-react";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import Switch from "react-switch";

const Card = ({ cityWeatherCur }) => {
  const dispatch = useDispatch();
  const [btn, setBtn] = useState(false);
  const [disableBtn, setDisableBtn] = useState(false);
  const [checked, setChecked] = useState(false);

  const favList = useSelector((state) => state.city.favorites);

  useEffect(() => {
    setDisableBtn(false);
    const isFound = favList.some((element) => {
      if (element.name === cityWeatherCur.cityDetails.cityName) {
        return true;
      }
      return false;
    });

    if (isFound) {
      setDisableBtn(true);
    } else {
      setDisableBtn(false);
    }
  }, [cityWeatherCur.cityDetails.cityName, favList]);

  const addToFavorites = (e, item) => {
    e.preventDefault();

    setBtn(true);
    dispatch(
      addToFav({
        weather: item.WeatherText,
        name: item.cityName,
        temp: item.Temperature.Imperial.Value,
        id: uuidv4(),
      })
    );
    setDisableBtn(true);
  };

  const switchDeg = () => {
    setChecked((checked) => !checked);
  };

  return (
    <div data-aos="flip-left" className="container-cards">
      <div className="card card-info main">
        <img className="card-img-top" src={cloudy} alt="Card-img" />
        <div className="card-body">
          <h4>{cityWeatherCur.cityDetails.cityName}</h4>
          <h5 className="card-title">
            {getDay(cityWeatherCur.DailyFive[0]?.Date)}
          </h5>
          <p className="card-text tempText">
            {cityWeatherCur.cityDetails?.WeatherText}
          </p>
          <p className="card-text">
            {checked
              ? cityWeatherCur.cityDetails?.Temperature.Imperial.Value
              : cityWeatherCur.cityDetails?.Temperature.Metric.Value}{" "}
            {checked ? "F" : "C"}{" "}
          </p>
          <Switch onChange={() => switchDeg()} checked={checked} />
          <br />
          <button
            disabled={disableBtn}
            onClick={(e) => addToFavorites(e, cityWeatherCur.cityDetails)}
            className={"btn btn-primary"}
          >
            Add to Favorites<img src={star} alt="fav"></img>
          </button>
          <SweetAlert
            show={btn}
            title="Success!"
            text="City sucessfully added to favorites!"
            onConfirm={() => setBtn(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
