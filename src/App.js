import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import Weather from './components/weather'

const App = () => {
  const ACCESS_KEY = "9ef48c0705499069b88c8af0bf120522";

  const [weatherData, setWeatherData] = useState({});
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('India');
  useEffect(()=>{
    getData();
  },[query])

  const getData = async()=>{
    const response = await fetch (`http://api.weatherstack.com/current?access_key=${ACCESS_KEY}&query=${query}`);
    const data = await response.json();
    // console.log(data.location);
    setWeatherData( data);
   
   
  }

  const updateSearch = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value)
  }

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search)


  }

 let temp = weatherData.current ? weatherData.current.temperature : null;
 let status = weatherData.current ? weatherData.current.weather_descriptions : null;
 let humidity = weatherData.current ? weatherData.current.humidity : null;
 let time = weatherData.current ? weatherData.location.localtime : null;
 let country = weatherData.current ? weatherData.location.country : null;

  return (
    <div className="App">
      <h1> Weather App  </h1>
      <form onSubmit={getSearch}>
        <input type="text" value={search} onChange={updateSearch} />
        <button type="submit"> Submit </button>
      </form>
      
         <Weather temp={temp} status={status} humidity={humidity} time={time} country={country}/>
 
    
    </div>
   
  );
}

export default App;
