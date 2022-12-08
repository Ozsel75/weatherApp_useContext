import Search from "./components/search/Search";
import "./App.css";
import { SearchContextProvider } from "./context/SearchContext";
import { WeatherContextProvider } from "./context/WeatherContext";
import Weather from "./components/weather/Weather";
import { DayContextProvider } from "./context/DayContext";

function App() {
  return (
    <div className="container">
      <SearchContextProvider>
        <Search />
        <WeatherContextProvider>
          <DayContextProvider>
            <Weather />
          </DayContextProvider>
        </WeatherContextProvider>
      </SearchContextProvider>
    </div>
  );
}

export default App;