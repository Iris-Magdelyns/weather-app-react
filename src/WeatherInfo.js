import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props){
    //<img src ={props.data.icon} alt ={props.data.description} />
    return( 
        <div className = "WeatherInfo">
            <h1>
                {props.data.city}
            </h1>
            <ul>
                <li><FormatDate /></li>
                <li>{props.data.description}</li>
            </ul>
                
            <div className= "row">
                <div className="col-6 temperature ">
                    <WeatherIcon code = {props.data.icon} className = "icon"/>
                    <span className="temperatureText">{Math.round(props.data.temperature)} °C | °F </span>
                </div>
                <div className="col-6">
                    <ul>
                        <li>
                            Humidity: {props.data.humidity}%
                        </li>
                        <li>
                            Wind: {Math.round(props.data.wind)} KM/H
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
    );
}