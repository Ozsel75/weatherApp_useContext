import React from 'react'
import "./forecast.css"
import ForecastADay from "../forecastADay/ForecastADay";
import WeatherContext from "../../context/WeatherContext";
import DayContext from "../../context/DayContext";
import { useContext } from "react";

const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

function Forecast() {

    const { forecast } = useContext(WeatherContext)
    const {day, setDay} = useContext(DayContext)
    const dayInAWeek = new Date().getDay()

    const forecastDays = days.slice(dayInAWeek, days.length).concat(days.slice(0, dayInAWeek));



  return (
    <>
    <div className="forecast">
      {forecast.map((item, i) => (
        <div
          className="daily_item"
          key={i}
          onClick={() => {
            if (day === i + 1) {
              setDay(null);
            } else {
              setDay(i + 1);
            }
          }}
        >
          <label className="daily_item_day">{forecastDays[i]}</label>
          <img src={`/icons/${item.weather.icon}.png`} alt="weather" />
          <div>
            <p className="maxTemp">{`${Math.floor(
              item.min_temp
            )} / ${Math.ceil(item.max_temp)}`}</p>
          </div>
        </div>
      ))}
    </div>
    <ForecastADay />
  </>
);
}


export default Forecast