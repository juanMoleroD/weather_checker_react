import React, { useState } from "react";
import WeatherList from "../component/WeatherList";

const WeatherReportContainer = ({weatherCodes}) => {

    const cities = [
        {
            name:"Glasgow, UK",
            coordinatesFormated: "latitude=55.8554402&longitude=-4.3026695"
        },
        {
            name:"Maracaibo, VE",
            coordinatesFormated: "latitude=10.6335369&longitude=-71.7471553"
        }
    ]

    const [selectedCity, setSelectedCity] = useState(cities[0]);

    const changeCity = (indexInCities) => {
        setSelectedCity(cities[indexInCities])
    } 

    return(
        <>
            <header>
                <h1 id="main-heading">Weather Report</h1>
            </header>
            <main>
                <WeatherList 
                city={selectedCity} 
                changeCity={changeCity} 
                weatherCodes={weatherCodes}/>
            </main>
        </>
    )
}

export default WeatherReportContainer;