import React, {useState} from "react";
import "./Weather.css";
import Loader from 'react-loader-spinner';
import axios from "axios";
import FormatDate from "./FormatDate";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(){
    let [city, setCity] = useState("null");
    let [infoWeather, setInfoWeather] = useState(false);
    let [weather, setWeather] = useState({});
    let SearchEngine = (
        <div className="Search input-group ">
            <form onSubmit ={handleSubmit}>
                <input 
                type="text" 
                className="form-control" 
                placeholder="Enter a city"
                aria-label="Recipient's username with two button addons" 
                aria-describedby="button-addon4"
                id="search-city-input" 
                onChange={changeCity}
                />
                
                <input
                className="btn btn-outline-secondary " 
                type="submit"
                id="search-city"
                value="Search"
                />
                
            </form>
        </div> 
    );

    function showTemperature(response) {
        console.log(response);
        setInfoWeather(true);
        setWeather({
            city: response.data.name, 
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            humidity: response.data.main.humidity,
            date: new Date (response.data.dt * 1000),
            icon: response.data.weather[0].icon,
            description: response.data.weather[0].description,
            feelsLike:  response.data.main.feels_like
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

    if(infoWeather) {
        return(

            <div className ="Weather"> 
                {SearchEngine}
               <WeatherInfo data={weather} />
               <WeatherForecast city={weather.city} />
            </div>
        )

    }else {
    return (
        <div className = "Weather">
            {SearchEngine}
        <h2> <FormatDate /> </h2>
            <Loader type="ThreeDots" color="#F6F2FE" height={100} width={500} className="Loader"/>
        </div>
        );    
    }
}