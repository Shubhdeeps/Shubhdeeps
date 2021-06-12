import './stylesheets/single.css'
import Weather from './Weather'
import Arrow from './svgs/Arrow'



const singleCountry = ( {newSearch, setWeather, weather, utc, setUTC, setCountries, countries} ) => {

  const handleClick = () => {
    setCountries('')
}
    return( 
      <section className="" >
       <div className="sHead">
      <div onClick={handleClick}> <Arrow  /></div>  
       
      <p> {newSearch[0].name} </p>
      </div>
      
      <div className='parent'>
      <img className='flag'
      src={newSearch[0].flag}  alt='flag' width='400' height='250' />
      <div className='container01'>
      <h2> <span>Capital: </span> {newSearch[0].capital} </h2>
      <h2> <span>Timezone: </span> {newSearch[0].timezones} </h2>
      <h2> <span>Population: </span> {newSearch[0].population} </h2>
      <h2> <span>Languages: </span>  {newSearch[0].languages.map(y => {
          return <li key={y.name} >{y.name}</li> })} </h2>
          </div>
      </div>  
       
       <div className="parent2">        
        <h2>Weather in {newSearch[0].capital} </h2> 
        <Weather weather={weather} setWeather={setWeather} city={newSearch[0].capital} region={newSearch[0].region} utc={utc} setUTC={setUTC} />
        </div>
      </section>
      )
      }
export default singleCountry;