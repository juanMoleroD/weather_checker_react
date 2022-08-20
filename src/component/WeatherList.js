import React , {useEffect, useState} from 'react';
import City from './City';

const WeatherList = ({city, changeCity, weatherCodes}) => {

    const [weatherReport, setweatherReport] = useState("");

    const getWeatherInfo = (cityToGetWeather) => {
        const urlSelectors = `&timezone=GMT&current_weather=true&daily=temperature_2m_max&daily=temperature_2m_min&daily=weathercode`
        const url = `https://api.open-meteo.com/v1/forecast?${cityToGetWeather.coordinatesFormated}${urlSelectors}`
        fetch(url)
            .catch(error => console.error)
            .then(rawResponse => rawResponse.json())
            .then(parcedResponse => setweatherReport(parcedResponse))
    }

    const handleChangeOfCity = (event) => {
        changeCity(event.target.value)
    }

    useEffect( () => {getWeatherInfo(city)}, [city])

    return (
        <section className='weather-card'>
            <ul className='city-selection'>
                <li value="0" onClick={handleChangeOfCity} >Glasgow, UK</li>
                <li value="1" onClick={handleChangeOfCity} >Maracaibo, VE</li>
            </ul>
                {weatherReport ? 
                <City 
                    weatherReport={weatherReport} 
                    city={city}
                    weatherCodes={weatherCodes}
                /> 
                : null
                }
        </section>
    )
}

export default WeatherList;