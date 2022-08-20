import React, { useEffect, useState } from "react";
import CityDayWidget from "./CityDayWidget";

const City = ({ weatherReport, city, weatherCodes }) => {

    const temp = weatherReport.current_weather.temperature;
    const maxTemp = weatherReport.daily.temperature_2m_max[0];
    const minTemp = weatherReport.daily.temperature_2m_min[0];
    const wmoCodeMeaning = weatherCodes[weatherReport.current_weather.weathercode];
    const wind = weatherReport.current_weather.windspeed;

    const [widgetData, setWidgetData] = useState([]);

    const getWidgetData = () => {
        const parsedWidgetsData = [[], [], [], [], []];
        for (let i = 0; i < 5; i++) {
            parsedWidgetsData[i].push(weatherReport.daily.time[i + 1]);
            parsedWidgetsData[i].push(weatherCodes[weatherReport.daily.weathercode[i + 1]]);
            parsedWidgetsData[i].push(weatherReport.daily.temperature_2m_max[i + 1]);
            parsedWidgetsData[i].push(weatherReport.daily.temperature_2m_min[i + 1]);
        }
        setWidgetData(parsedWidgetsData);
    }

    useEffect(() => { getWidgetData() }, [weatherReport])

    const widgetNodes = widgetData.map((dayWeather, index) => {
        return <CityDayWidget key={index} dayWeather={dayWeather} />
    });


    return (
        <>
            <section className="city-content">
                <h2>{city.name}</h2>
                <h3>{wmoCodeMeaning}</h3>
                <p>Temperature Now: {temp}˚C</p>
                <p>Highest Temp: {maxTemp}˚C</p>
                <p>Lowest Temp: {minTemp}˚C</p>
                <p>Wind Speed: {wind} km/h</p>
            </section>
            <section className="five-date-forecast-container">
                <ul>
                    {widgetNodes}
                </ul>
            </section>
        </>
    )
}

export default City;