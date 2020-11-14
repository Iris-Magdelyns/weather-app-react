import React, {useState} from "react";
import "./Weather.css";
import Loader from 'react-loader-spinner';
import axios from "axios";

export default function Weather(){
    let [city, setCity] = useState("null");
    let [infoWeather, setInfoWeather] = useState(false);
    let [weather, setWeather] = useState({});
    let SearchEngine = (
        <div className="Search input-group">
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
                className="btn btn-outline-secondary" 
                type="submit"
                id="search-city"
                value="Search"
                />
                <input
                className="btn btn-outline-secondary" 
                type="submit"
                id="current-city"
                value="Current place"
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

    if(infoWeather) {
        return(

            <div className ="Weather"> 
                {SearchEngine}
                <h1>{weather.city}</h1>
                <ul>
                    <li>zaterdag 14.00</li>
                    <li>{weather.description}</li>
                </ul>
            
                <div className= "row">
                    <div className="col-6 temperature">

                        <img src ="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" alt ="bewolkt" />
                        {Math.round(weather.temperature)} °C | °F
                    </div>
                    <div className="col-6">
                        <ul>
                            <li>
                                Neerslagkans: 24%
                            </li>
                            <li>
                                Humidity: {weather.humidity}%
                            </li>
                            <li>
                                Wind: {Math.round(weather.wind)} km/h
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )

    }else {
    return (
    <div className = "Weather">
        {SearchEngine}
        <Loader type="ThreeDots" color="#FFFF66" height={100} width={100} />
    </div>
    );    
    }
}