import React, { useState } from 'react'
import './styleComponents/App.css'
import Header from './components/Header.js'
import Country from './components/Country'
import WeatherService, { useCountries } from './components/WeatherService'

const App = () => {
  const[countries, setCountries] = useState('')
  const [search, setSearch] = useState([])
  const [weather, setWeather] = useState('')
  const [utc, setUTC] = useState('');
   
  useCountries(setSearch);

  return(
    <div>
      <Header countries={countries} setCountries={setCountries} />
      <Country countries={countries}  search={search} setCountries={setCountries} weather={weather} setWeather={setWeather} utc={utc} setUTC={setUTC} />
     
    </div>
  )
}

export default App