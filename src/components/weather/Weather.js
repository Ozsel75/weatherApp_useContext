import React, { useContext } from "react";
import WeatherContext from "../../context/WeatherContext";
import "./Weather.css";
import { WiCloud } from "react-icons/wi";
import Forecast from "../forecast/Forecast";

function Weather() {
  const { weather } = useContext(WeatherContext);

  if (weather) {
    let sset = weather.sunset.split(":");
    let srise = weather.sunrise.split(":");
    let sunset = parseInt(sset[0]) + 3 + ":" + sset[1];
    let sunrise = parseInt(srise[0]) + 3 + ":" + srise[1];
    return (
      <div className="cw_container">
        <div className="cw_top">
          <div className="icon">
            <img src={`/icons/${weather.weather.icon}.png`} alt="weather" />
          </div>
          <div className="desc">
            <p>
              {weather.city_name}, {weather.country_code}
            </p>
            <p>{weather.weather.description}</p>
            <p>{Math.round(weather.temp)}°C</p>
          </div>
        </div>
        <div className="cw_middle">
          <div className="cw_items">
            <img
              className="cw_param_icons"
              src="/parameters-icons/humidity.png"
              alt=""
            />
            <p>{weather.rh}%</p>
          </div>
          <div className="cw_items">
            <p>{weather.clouds}%</p>
            <WiCloud size={"30px"} />
          </div>
          <div className="cw_items">
            <img
              className="cw_param_icons"
              src="/parameters-icons/pressure.png"
              alt=""
            />
            <p>{weather.pres} hPa</p>
          </div>
          <div className="cw_items">
            <p>{weather.wind_spd} m/s</p>
            <img
              className="cw_param_icons"
              src="/parameters-icons/wind.png"
              alt=""
            />
          </div>
          <div className="cw_items">
            <img
              className="cw_param_icons"
              src="/parameters-icons/sunrise.png"
              alt=""
            />
            <p>{sunrise} am</p>
          </div>
          <div className="cw_items">
            <p>{sunset} pm</p>
            <img
              className="cw_param_icons"
              src="/parameters-icons/sunset.png"
              alt=""
            />
          </div>
        </div>
        <Forecast />
      </div>
    );
  }
}

export default Weather;
