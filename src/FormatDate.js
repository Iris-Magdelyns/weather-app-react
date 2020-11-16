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
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let date = now.getDate();

    return(<div>{day} {date} {month}, {hour}:{minutes}</div>);

}

