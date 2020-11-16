import React, { useState } from "react";

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState('celsius');

    function showFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit");
    }
    function showCelsius(event){
        event.preventDefault();
        setUnit("celsius");
    }

    if (unit === 'celsius'){
        return(
        <div className ="WeatherTemperature">
            {Math.round(props.celsius)}
            <span className ="unit">
                °C | 
                °<a href ="/" onClick={showFahrenheit}>
                F
                </a>
            </span> 
        </div>
    );
    }else{
        return (
            <div className ="WeatherTemperature">
                {Math.round(props.celsius * 1.8 + 32)}
            <span className ="unit">
                °F | 
                °<a href ="/" onClick={showCelsius}>
                C
                </a>
            </span> 
        </div>
        )
    }
}
