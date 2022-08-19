import React, { useState } from "react";
import WeatherList from "../component/WeatherList";

const WeatherReportContainer = () => {

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

    const [selectedCity, setSelectedCity] = useState(cities[1]);

    return(
        <>
            <h1>Container - Weather Report</h1>
            <main>
                <WeatherList city={selectedCity} />
            </main>
        </>
    )
}

export default WeatherReportContainer;