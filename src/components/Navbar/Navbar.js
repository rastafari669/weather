import React from "react";
import pic from "../../Images/weather.png";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="logo" to="/">
          <a className="navbar-brand">
            <img
              style={{
                width: "40px",
                marginLeft: "30px",
                marginBottom: "10px",
              }}
              src={pic}
              alt="logo"
            ></img>{" "}
            Weather App
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            {/* <Switch /> */}
            <Link className="link" to="/">
              {" "}
              <li className="nav-link" aria-current="page">
                Home
              </li>
            </Link>
            <Link className="link" to="/favorites">
              <li className="nav-link">Favorites</li>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
