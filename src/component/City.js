import React from "react";

const City = ({currentWeather, city}) => {

    const temp = currentWeather.current_weather.temperature;

    return (
        <section className="city-content">
            <p>{city.name}</p>
            <p>Temperature Now - {temp}</p>
            <p>WMO code meaning</p>
        </section>
    )
}

export default City;