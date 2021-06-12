import React, { useEffect } from 'react'
import axios from 'axios'



export const useService = (city, setWeather) => {
const api_key = process.env.REACT_APP_API_KEY

useEffect(() => {
  axios
    .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${api_key}`)
    .then(response => {
      setWeather(response.data)
    })
}, [city, api_key])

}



export const useCountries = (setSearch) => {
  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
         setSearch(response.data)
        
      })
  }, [])
}