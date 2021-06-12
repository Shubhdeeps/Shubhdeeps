import React from "react";
import Images, { Cloud, Snow, Rain } from './svgs/Images'



const WeatherType = ({cloudPercent, type}) => {
   let cloudCount = false
   let rain = false
   let snow = false

    if(type !== 'Clear' ){
      
        if(cloudPercent <= 1){
            cloudCount = false;
            rain = false
            snow = false
        }
        else if(cloudPercent > 1){
            cloudCount = true;
            if(type === 'Drizzel' || type === 'Rain'){
                 rain = true
                 snow = false
            }
            if(type === 'Snow'){
                snow = true
                rain = false
            }
        }
    }
    else{
        cloudCount = false;
        rain = false;
        snow = false
    }

return(
    <>
    <div className='current' >
       {cloudCount ? <Cloud /> : null }
        {rain? <Rain /> : null}
        {snow? <Snow /> : null}
    </div>   

  </>  
)
}

export default WeatherType;