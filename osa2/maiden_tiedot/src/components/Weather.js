import React from 'react'

const Weather = ({ weather }) => {

  return (
    <div>

  <div>temperature: {weather.current ? weather.current.temperature : "Loading.."} Celsius</div>
 
  <img src={weather.current ? weather.current.weather_icons[0] : "Loading.."} alt='' width='10%'></img> 

  <p>
    
      wind: {weather.current ? weather.current.wind_speed : "Loading.."} mph
       direction {weather.current ? weather.current.wind_dir : "Loading.."} 
   
   </p>

      </div>
  )
}

export default Weather