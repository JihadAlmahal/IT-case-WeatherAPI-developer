import React, {useState } from "react";
import './App.css';

function App() {
  const [weather, setWeather] = useState([])
  const [location, setLocation] = useState();
  const [lastLocation, setLastLocation] = useState();
  const fetchData = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`)
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


  const temperature = weather.main ? weather.main.temp : null;
  const description = weather.weather ? weather.weather[0].description : null;

  const handleLocationChange = event => {
    setLocation(event.target.value);
  }
  const handlClick = () => {
    setLastLocation(location);
    fetchData();
  }
  
  return (
    <div>
    <div>
        <label htmlFor="location-input">Enter a city:</label>
        <input type="text" id="location-input" value={location} onChange={handleLocationChange} />
        <button onClick={handlClick}>Go</button>
      </div>
   <div>
   {temperature && description ? (
      `Temperature in ${lastLocation} is ${temperature} kelvin and the weather is ${description}.`
    ) : (
      "city not available"
    )}
   </div>
   </div>
  );
}

export default App;
