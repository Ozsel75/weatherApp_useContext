import { createContext, useState, useContext, useEffect } from "react";
import SearchContext from "./SearchContext";
import { apiKey, apiUrl } from "../api";
import axios from "axios";

const WeatherContext = createContext();

export const WeatherContextProvider = ({ children }) => {
  const [weather, setWeather] = useState();
  const [forecast, setForecast] = useState();

  const values = { weather, setWeather, forecast, setForecast };
  const { city } = useContext(SearchContext);

  useEffect(() => {
    if (city) {
      const [lat, lon] = city.value.split(" ");
      const WeatherAxios = axios(
        `${apiUrl}/current?lat=${lat}&lon=${lon}&key=${apiKey}&lang=tr`
      );
    
      const ForecastAxios = axios(
        `${apiUrl}/forecast/daily?lat=${lat}&lon=${lon}&key=${apiKey}&lang=tr&days=7`
      );

      Promise.all([WeatherAxios, ForecastAxios])
        .then(async (res) => {
          setWeather(await res[0].data.data[0]);
          setForecast(await res[1].data.data);
        })
        .catch((e) => console.log(e));
    }
  }, [city]);

  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};

export default WeatherContext;
