import React , {useEffect, useState} from 'react';
import City from './City';

const WeatherList = ({city, changeCity, weatherCodes}) => {

    const [currentWeather, setCurrentWeather] = useState("");

    const getWeatherInfo = (cityToGetWeather) => {
        const url = `https://api.open-meteo.com/v1/forecast?${cityToGetWeather.coordinatesFormated}&current_weather=true`
        fetch(url)
            .catch(error => console.error)
            .then(rawResponse => rawResponse.json())
            .then(parcedResponse => setCurrentWeather(parcedResponse))
    }

    const handleChangeOfCity = (event) => {
        changeCity(event.target.value)
    }

    useEffect( () => {getWeatherInfo(city)}, [city])

    return (
        <section className='weather-card'>
            <div className='city-selection'>
                <button value="0" onClick={handleChangeOfCity} >Glasgow</button>
                <button value="1" onClick={handleChangeOfCity} >Maracaibo</button>
            </div>
                {currentWeather ? 
                <City 
                    currentWeather={currentWeather} 
                    city={city}
                    weatherCodes={weatherCodes}
                /> 
                : null
                }
        </section>
    )
}

export default WeatherList;