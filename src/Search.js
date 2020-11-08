import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  let [city, setCity] = useState("null");
  let [infoWeather, setInfoWeather] = useState(false);
  let [weather, setWeather] = useState({});
  let SearchEngine = (
    <div>
      <h1>Weather search engine</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a city"
          aria-label="Recipient's username with two button addons"
          aria-describedby="button-addon4"
          id="search-city-input"
          onChange={changeCity}
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  );

  function showTemperature(response) {
    console.log(response);
    setInfoWeather(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description
    });
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=
    ${city}&appid=25770910791bc4a6117831afdb2e65e7&units=metric`;
    axios.get(url).then(showTemperature);
  }
  if (infoWeather) {
    return (
      <div>
        {SearchEngine}
        Temperature: {Math.round(weather.temperature)}°C
        <br />
        {weather.description}
        <br />
        Windspeed: {weather.wind} km/h
        <br />
        Humidity: {weather.humidity}
        <br />
        <img src={weather.icon} alt={weather.description} />
      </div>
    );
  } else {
    return <div>{SearchEngine}</div>;
  }
}
