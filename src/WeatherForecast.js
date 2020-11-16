import React, { useState } from "react";

import axios from "axios"; 
import WeatherForecastHours from "./WeatherForecastHours";
import "./WeatherForecast.css";

export default function WeatherForecast(props){
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);

    function handleForecastResponse(response) {
        setForecast(response.data);
        setLoaded(true);
    }

    if (loaded /*&& props.city === forecast.city.name*/) {
        console.log(forecast.city.name);
        return (
            <div className="WeatherForecast row">
                <WeatherForecastHours data={forecast.list[0]}/>
                <WeatherForecastHours data={forecast.list[1]}/>
                <WeatherForecastHours data={forecast.list[2]}/>
                <WeatherForecastHours data={forecast.list[3]}/>
                <WeatherForecastHours data={forecast.list[4]}/>   
            </div>
        );
    } else{
        let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=25770910791bc4a6117831afdb2e65e7&units=metric`;
        axios.get(url).then(handleForecastResponse);
        return null;
    }  
 
}