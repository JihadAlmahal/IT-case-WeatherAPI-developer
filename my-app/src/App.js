import React, { useEffect, useState } from "react";
import './App.css';

function App() {
  const [weather, setWeather] = useState([])
  const fetchData = () => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=5b0d4dee87c8fc0237afdfcdd93b4873')
      .then(response => {
        return response.json()
      })
      .then(data => {
        setWeather(data)
      })
      .catch(error => {
        console.error(error);
      });
  }
  useEffect(() => {
    fetchData()
  }, [])
 
  const temperature = weather.main ? weather.main.temp : null;
  const description = weather.weather ? weather.weather[0].description : null;
  return (
   <div>
    temperature in london is {temperature} fahrenheit and the weather is {description} 
   </div>
  );
}

export default App;
