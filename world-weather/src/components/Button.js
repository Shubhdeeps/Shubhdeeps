import React from 'react'
import './stylesheets/button.css'

//Button click function
const buttonClicked = (x, setCountries) => {
   setCountries(x.name)
}


const Button = (props) => {

   return(  <button className="button" id={props.x.name} onClick={() => buttonClicked(props.x, props.setCountries)}> See more  </button>)
}

export default Button 