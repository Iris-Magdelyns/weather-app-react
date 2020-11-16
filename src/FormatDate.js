import React from "react";

export default function FormatDate(){
    let now = new Date();

    let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    ];
    let months = [
    "Januari",
    "Februari",
    "March",
    "April",
    "May",
    "Juni",
    "Juli",
    "August",
    "September",
    "October",
    "November",
    "December",
    ];

    let day = days[now.getDay()];
    let month = months[now.getMonth()];
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let date = now.getDate();
   
    if (hours < 10 && minutes < 10 ){
      return(<div>{day} {date} {month}, 0{hours}:0{minutes}</div>);
    } else if (hours > 10 && minutes < 10 ){
      return(<div>{day} {date} {month}, {hours}:0{minutes}</div>);
    } else if (hours < 10 && minutes > 10 ){
      return(<div>{day} {date} {month}, 0{hours}:{minutes}</div>);
    } else{
      return(<div>{day} {date} {month}, {hours}:{minutes}</div>)
    }

    

}

