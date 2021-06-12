import React from 'react'

import SingleCountry from './SingleCountry'
import List from './List' 




// function using condition to decide the outcome
const result = (newSearch, countries, search, setCountries, setWeather, weather, utc, setUTC) => {
 
 if(countries === ''){
   return <List newSearch={newSearch} setCountries={setCountries} weather={weather} setWeather={setWeather} />
 }

else if (newSearch.length > 1){
    return <List newSearch={newSearch} setCountries={setCountries} weather={weather} setWeather={setWeather} />
  }
  else if (newSearch.length === 1){
  
  return    < SingleCountry newSearch={newSearch} setWeather={setWeather}  weather={weather} utc={utc} setUTC={setUTC} setCountries={setCountries} countries={countries}/>
  }
 
 }
 






    
const Country = (props) => {
 


    const newSearch = (props.search.filter(x => 
      { 
      return x.name.toLocaleLowerCase().match(props.countries.toLocaleLowerCase())
     }))
    
  

   return (
     <div>
       {result(newSearch, props.countries, props.search, props.setCountries, props.setWeather, props.weather, props.utc, props.setUTC )}
     </div>
   )
}

  export default Country