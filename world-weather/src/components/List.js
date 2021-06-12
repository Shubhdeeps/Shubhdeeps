import './stylesheets/list.css'
import Button from './Button'

// a function that will shortlist the countries and will illustrate more button

const List = ( {newSearch, setCountries, weather, setWeather } ) => {

 const buttonClicked = (x, setCountries) => {
   setCountries(x);
 }

    return( 
           <div className='pList'> 
          { newSearch.map(x => (
        <div className='list' >
        <li  className='listChild'
        key={x.name} >  
        <img className='img'
         src={x.flag}  alt='flag' />
         <p className="Cname">{x.name} </p>
        <Button x={x} setCountries={setCountries} />
        </li>
        </div>
       )
        )}
         </div> 
        )
    }

    

export default List;