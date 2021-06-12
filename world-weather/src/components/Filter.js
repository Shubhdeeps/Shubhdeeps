 import './stylesheets/filter.css'
import React from 'react'


const Filter = (props) => {


const handleChange = (event) => {
 props.setCountries(event.target.value)
}

    return(
      <div className="filter">
         <label> Filter</label>
         <input
         className="input" 
         value={props.countries}
         onChange={handleChange}
         />
      </div>
    )
}

export default Filter
