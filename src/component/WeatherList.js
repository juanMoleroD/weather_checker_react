import React , {useEffect, useState} from 'react';
import City from './City';

const WeatherList = ({city}) => {

    const [currentWeather, setCurrentWeather] = useState("");

    const getWeatherInfo = (cityToGetWeather) => {
        const url = `https://api.open-meteo.com/v1/forecast?${cityToGetWeather.coordinatesFormated}&current_weather=true`
        fetch(url)
            .catch(error => console.error)
            .then(rawResponse => rawResponse.json())
            .then(parcedResponse => setCurrentWeather(parcedResponse))
    }

    useEffect( () => {getWeatherInfo(city)}, [])

    return (
        <section className='weather-card'>
            <div className='city-selection'>
                <button>Glasgow</button>
                <button>Maracaibo</button>
            </div>
                {currentWeather ? 
                <City currentWeather={currentWeather} city={city}/> 
                : null
                }
        </section>
    )
}

export default WeatherList;