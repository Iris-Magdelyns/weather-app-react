import React from "react";
import './Footer.css';

export default function Footer() {
    return(
        <div className="Footer">
            <p>
                Hosted on 
                <a href="https://ecstatic-lalande-e73b1b.netlify.app/">
                    Netlify
                </a>
                <br />
                <a href="https://github.com/Iris-Magdelyns/weather-app-react">
                    Open source code
                </a> 
                by Iris 
                    
            </p>
        </div>
    );
}