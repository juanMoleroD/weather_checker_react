import './App.css';
import WeatherReportContainer from './container/WeatherReportContainer';

function App() {

  const weatherCodes = {
    0 : "Clear Sky",
    1 : "Mainly Clear",
    2 : "Partly Cloudy",
    3 : "Overcast",
    45 : "Fog",
    48 : "Fog depositing rime",
    51 : "Light Drizzle",
    53 : "Moderate Drizzle",
    55 : "Dense Drizzle",
    56 : "Freezing Light Drizzle",
    57 : "Freezing Dense Drizzle",
    61 : "Slight Rain",
    63 : "Moderate Rain",
    65 : "Heavy Rain",
    66 : "Freezing Light Rain",
    67 : "Freezing Heavy Rain",
    71 : "Slight Snow Fall",
    73 : "Moderate Snow Fall",
    75 : "Heavy Snow Fall",
    77 : "Snow Grains",
    80 : "Slight Rain Showers",
    81 : "Moderate Rain Showers",
    82 : "Violent Rain Showers",
    85 : "Slight Snow Showers",
    86 : "Heavy Snow Showers",
    95 : "Thunderstorm",
    96 : "Thunderstorm with Slight Hail",
    99 : "Thunderstorm with Heavy Hail"
  }


  return (
    <div className="App">
      <WeatherReportContainer weatherCodes={weatherCodes}/>
    </div>
  );
}

export default App;