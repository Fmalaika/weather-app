import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';

const Weather = () => {
  const ACCESS_KEY = "9ef48c0705499069b88c8af0bf120522";
  useEffect(()=>{
    getData();
  },[])

  const getData = async()=>{
    const response = await fetch (`http://api.weatherstack.com/current?access_key=${ACCESS_KEY}&query=New York`);
    const data = response.json();
    console.log(data);
  }
  return (
   <h1> Hello React </h1>
  );
}

export default Weather;
