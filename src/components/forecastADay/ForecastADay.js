import React from 'react'
import { useContext } from "react";
import DayContext from "../../context/DayContext";
import WeatherContext from "../../context/WeatherContext";
import "./forecastADay.css";

function ForecastADay() {

    const {day} = useContext(DayContext);
    const {forecast} = useContext(WeatherContext)

    if (day) {
  return (
    <div className="forecastADay">
        <div className="forecastDay_items">
          <span>Fells Like</span>
          <p>
            {Math.round(forecast[day - 1].app_min_temp)}°C /{" "}
            {Math.round(forecast[day - 1].app_max_temp)}°C{" "}
          </p>
        </div>
        <div className="forecastDay_items">
          <img
            className="forecastDay_items_param_icons"
            src="/parameters-icons/humidity.png"
            alt=""
          />
          <p>{forecast[day - 1].rh}%</p>
        </div>

        <div className="forecastDay_items">
          <img
            className="forecastDay_param_icons"
            src="/parameters-icons/pressure.png"
            alt=""
          />
          <p>{forecast[day - 1].pres} hPa</p>
        </div>
        <div className="forecastDay_items">
          <img
            className="forecastDay_items_param_icons"
            src="/parameters-icons/wind.png"
            alt=""
          />
          <p>{forecast[day - 1].wind_spd} m/s</p>
        </div>
      </div>
    );
  }
}
export default ForecastADay