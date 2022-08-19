import React from "react";

const City = ({currentWeather, city, weatherCodes}) => {

    const temp = currentWeather.current_weather.temperature;
    const maxTemp = "tbc"
    const minTemp = "tbc"
    const wmoCodeMeaning = weatherCodes[currentWeather.current_weather.weathercode]
    const wind = currentWeather.current_weather.windspeed;

    return (
        <section className="city-content">
            <h2>{city.name}</h2>
            <h3>{wmoCodeMeaning}</h3>
            <p>Temperature Now - {temp}</p>
            <p>Highest Temp - {maxTemp}</p>
            <p>Lowest Temp - {minTemp}</p>
            <p>Wind Speed - {wind}</p>
            
        </section>
    )
}

export default City;