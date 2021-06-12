import sun from './images/Sun.png'
import moon from './images/Moon.png'
import cloud from './images/Cloud.png'
import scloud from './images/smallCloud.png'
import snow from './images/snow.png'
import rain from './images/rain.png'

export const Sun = () => {
    return(
        <img className='sun1'
        src={sun} alt="sun" width="500" height="500"></img>
        
        )
}


export const Moon = () => {
    return(
        <img className='sun1'
        src={moon} alt="moon" width="500" height="500"></img>
        
        )
}

export const Cloud = () => {
    return(
        <img className='cloud1'
        src={cloud} alt="cloud" width="150" height="150"></img>
        
        )
}


export const Snow = () => {
    return(
        <img className='snow'
        src={snow} alt="snow" width="500" height="500"></img>
        
        )
}

export const Rain = () => {
 
    return (
      <img className="rain"
        src={rain}></img>
    )
 
}
 