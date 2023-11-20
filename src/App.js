import './App.css';
import { useState } from 'react';

const api = {
  key: "4d54e30f86c50ad6c89d76147bbd737c",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {

  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&&APPID=${api.key}`)
    .then(res => res.json())
    .then(result => {
      setWeather(result)
    });
  };


  return (
    <div id='grid' className="App" backgroundImage="/src/img/bg.jpg" >
      <header className="App-header">
        {/*header*/}
        <h1>Weather App</h1>

        {/* Search */}
        <div>
        <input type="text" placeholder="Enter City/Town"
        onChange={(e) => setSearch(e.target.value)}
        />

        <button onClick={searchPressed}>Search</button>
        </div>

        {/*If weather is not undefined */}
        {typeof weather.main != "undefined" ?
        <div className='result'>
        {/* Location */}
        <p>{weather.name}</p>

        {/* Temp */}
        <p>{weather.main.temp}°C</p>

        {/* Condition (Sunny) */}
        <p>{weather.weather[0].main}</p>
        <p id="desc">{weather.weather[0].description}</p>
        </div>
        :
        ''
        }
      </header>
    </div>
  );
}

export default App;
