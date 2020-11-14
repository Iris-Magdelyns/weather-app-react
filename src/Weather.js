import React from "react";
import "./Weather.css";

export default function Weather(){
    return(

    <div className ="Weather"> 
        <div class="input-group">
            <input 
                type="text" 
                class="form-control" 
                placeholder="Enter a city"
                aria-label="Recipient's username with two button addons" 
                aria-describedby="button-addon4"
                id="search-city-input" 
            />
            <div class="input-group-append" id="button-addon4">
                <button 
                    class="btn btn-outline-secondary" 
                    type="button"
                    id="search-city">
                        Search
                </button>
                <button 
                    class="btn btn-outline-secondary" 
                    type="button"
                    id="current-city">
                        Current place
                </button>
            </div>
        </div>

        <h1>Heemskerk</h1>
        <ul>
            <li>zaterdag 14.00</li>
            <li>Bewolkt</li>
        </ul>
    
        <div className= "row">
            <div className="col-6 temperature">

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

