import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import Weather from './components/weather'

const App = () => {
  const ACCESS_KEY = "9ef48c0705499069b88c8af0bf120522";

  const [weatherData, setWeatherData] = useState({});
  useEffect(()=>{
    getData();
  },[])

  const getData = async()=>{
    const response = await fetch (`http://api.weatherstack.com/current?access_key=${ACCESS_KEY}&query=New York`);
    const data = await response.json();
    console.log(data.location);
    setWeatherData( Object.values(data));
   
   
  }

 
  return (
    <div className="App">
      <h1> Weather App  </h1>
      <form>
        <input type="text" />
        <button type="submit" > Submit </button>
      </form>

      {/* {weatherData.map(weather => (
        <Weather />
          // <Weather temp="weather.current.temperature" status="Clear" humidity="20" time="12" country="India"/>
      ))} */}
    
    </div>
   
  );
}

export default App;
