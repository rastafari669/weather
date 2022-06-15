import React from "react";
import { useSelector } from "react-redux";
import star from "../../Images/star-2.png";
import cloudy from "../../Images/cloudy-day.png";
import { useDispatch } from "react-redux";
import { removeFav } from "../../redux/actions/weatherActions";
import { Link } from "react-router-dom";
import "./Fav.css";

const Fav = () => {
  const favList = useSelector((state) => state.city.favorites);

  const dispatch = useDispatch();

  const remove = (id, e) => {
    e.preventDefault();
    dispatch(removeFav(id));
  };

  return (
    <div>
      <h1>Favorites List</h1>
      <img src={star} alt="favorites"></img>
      <div data-aos="flip-up" className="container-cards">
        {favList.length > 0 ? (
          favList.map((item, i) => {
            return (
              <Link
                style={{ textDecoration: "none" }}
                key={i}
                to="/"
                state={{ from: item.name }}
              >
                <div className="card card-info">
                  <img className="card-img-top" src={cloudy} alt="Card" />
                  <div className="card-body">
                    <h4>{item.name}</h4>

                    <p className="card-text tempText">{item.weather}</p>
                    <p className="card-text">{item.temp} F</p>
                    <button
                      onClick={(e) => remove(item.id, e)}
                      className={"btn btn-danger"}
                    >
                      {"Remove from Favorites"}
                      <img src={star} alt="favorites"></img>
                    </button>
                  </div>
                </div>
              </Link>
            );
          })
        ) : (
          <h2 className="noFavTitle">
            No favorites yet...add your own favorites!
          </h2>
        )}
      </div>
    </div>
  );
};

export default Fav;
