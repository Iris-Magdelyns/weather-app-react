import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastHours(props){
    function hours(){
        let date = new Date (props.data.dt * 1000);
        let hours = date.getHours();
        return `${hours}:00 h`;
    }

    function temperature (){
        let temp = Math.round(props.data.main.temp)
        return `${temp}°C`;
    }


    return(
        <div className ="WeatherForecastData coll">
            {hours()}
            <WeatherIcon code = {props.data.weather[0].icon} />
            {temperature()}
        </div>
    );
}



