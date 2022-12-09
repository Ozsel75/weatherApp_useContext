import axios from "axios";
import React, { useContext } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import SearchContext from "../../context/SearchContext";
import { SearchContextProvider } from "../../context/SearchContext";
import "./search.css";

function Search() {
  const { setCity } = useContext(SearchContext);

  const api = {
    method: "GET",
    url: "https://wft-geo-db.p.rapidapi.com/v1/geo/cities",
    headers: {
      "X-RapidAPI-Key": "d6ee9a8cdemsh56083398585e8ffp11baa2jsn63bc72adf4a9",
      "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
  };

  const loadOptions = (inputValue) => {
    return axios
      .request(api, (api.params = { namePrefix: `${inputValue}` }))
      .then((response) => {
        return {
          options: response.data.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      })
      .catch((error) => console.log(error));
  };

  const onChangeHandler = (value) => {
    setCity(value);
  };

  return (
    <AsyncPaginate className="pagi"
      placeholder="Search for city"
      debounceTimeout={600}
      onChange={onChangeHandler}
      loadOptions={loadOptions}
    />
  );
}

export default Search;