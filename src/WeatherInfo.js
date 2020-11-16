import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props){
    return( 
        <div className = "WeatherInfo">
            <h1>
                {props.data.city}
            </h1>
            <h2>
                <FormatDate />
            </h2>  
            <div className="temperature">
                <WeatherIcon code = {props.data.icon} className = "icon"/>
                <WeatherTemperature celsius ={props.data.temperature} />
                
            </div>
            <div>
                <p>
                    {props.data.description}
                    <br />
                    Humidity: {props.data.humidity}%
                    <br />
                    Wind: {Math.round(props.data.wind)} KM/H
                </p>   
            </div>
        </div>  
    );
}