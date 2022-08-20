import React from "react";

const CityDayWidget = ({dayWeather}) => {

    console.log(dayWeather)

    return (
        <li>
            <p>{dayWeather[0]}</p>
            <p>{dayWeather[1]}</p>
            <p>{dayWeather[2]}˚C</p>
            <p>{dayWeather[3]}˚C</p>
        </li>
    )
}

export default CityDayWidget;