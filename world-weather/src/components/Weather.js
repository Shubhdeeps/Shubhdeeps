import React from 'react'
import './stylesheets/weather.css'
import WeatherService, { useService } from './WeatherService'
import Images, { Sun, Moon } from './svgs/Images'
import WeatherType from './WeatherType';

const Weather = (props) => {

  const newDate = new Date();
  const UTCTime = newDate.getUTCHours()

  useService(props.city, props.setWeather);

  let wind = 0
  let wDirection = ''
  let temperature = 0
  let cloudPercent = 0
  let type = "clear"
  let sun = false;
  let humidity = 0
  let pressure = 0
  let max = 0
  let min = 0
  let feel = 0

if(props.weather!==''){

  // cloud percentage
  cloudPercent = props.weather.clouds.all
  console.log(cloudPercent)
 temperature = (Number(props.weather.main.temp) - 32)*5/9 
 wind = props.weather.wind.speed
 wDirection = props.weather.wind.deg
 humidity = props.weather.main.humidity
 pressure = props.weather.main.pressure
 max = (props.weather.main.temp_max - 32)*5/9 
 min = (props.weather.main.temp_min - 32)*5/9 
 feel = (props.weather.main.feels_like - 32)*5/9 
 type = props.weather.weather[0].main


 const localTIme = UTCTime + props.weather.timezone/3600
 
 const dateObject = new Date(props.weather.sys.sunrise*1000)
 const sunRise = dateObject.getHours()
 console.log('sunrise: ' + sunRise)
 const dateObject1 = new Date(props.weather.sys.sunset*1000)
 const sunSet = dateObject1.getHours()
 console.log('sunset: ' + sunSet)

 if(localTIme >= sunRise && localTIme < sunSet){
   sun = true
 }
 else {sun = false}

 console.log('local: ' + localTIme)


}


console.log('sun? '+ sun)
  return (
    <div className="weather">
         <div className="day"> {sun? <Sun /> : <Moon />} 
         </div>
         <p className="temp"> {Math.round(temperature)} ° </p> 
         <div className="heading">
         <p> <span> Wind: </span> {wind} mph direction {wDirection} </p>
         <p> <span> Humidity: </span> {humidity} </p>
         <p> <span> Pressure: </span> {pressure} </p>
         </div>
         <div className='extra'>
         <p> <span> {type} </span>  </p> 
         <p> {Math.round(max)}° / {Math.round(min)}° </p>  
         <p> Feel like {Math.round(feel)}°  </p> 
         </div>
         <div className="weatherType">
         <WeatherType cloudPercent={cloudPercent} type={type} />
         </div>
    </div>
)
 
}






export default Weather


