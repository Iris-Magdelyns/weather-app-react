import React from "react";

export default function Weather(){
    return(

    <div className ="Weater"> 
    <form>
        <div className ="row">
            <div className="col-9">
                <input
                type ="search"
                placeholder ="Search for city..."
                className = "form-control" />
            </div>
            <div className ="col-3">
                <input 
                type ="submit"
                value ="Search"
                className = "btn btn primary" />
            </div>
        </div>
    </form>

    <h1>Heemskerk</h1>
    <ul>
        <li>zaterdag 14.00</li>
        <li>Bewolkt</li>
    </ul>
    
        <div className= "row">
            <div className="col-6">
                <img src ="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" alt ="bewolkt" />
                13 °C | °F
            </div>
            <div className="col-6">
                <ul>
                    <li>
                        Neerslagkans: 24%
                    </li>
                    <li>
                        Luchtvochtigheid: 92%
                    </li>
                    <li>
                        Wind: 24 km/h
                    </li>
                </ul>
            </div>
        </div>

    
    </div>
    )
}

