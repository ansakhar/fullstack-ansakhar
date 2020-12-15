import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Weather from './Weather'

const CountryInfo = ({ country }) => {
  const api_key = process.env.REACT_APP_API_KEY

  const [weather, setWeather] = useState([])

  useEffect(() => {
    console.log('effect')
    console.log(`http://api.weatherstack.com/current?access_key=${api_key}&query=${country.capital}`)
    axios
      .get (`http://api.weatherstack.com/current?access_key=${api_key}&query=${country.capital}`)
      .then(response => {
        console.log('promise fulfilled')
        setWeather(response.data)
      })
  }, [api_key,country.capital])

  return (
    <div>
      <h2>{country.name}</h2>

      <div>capital {country.capital}</div>
      <div>population {country.population}</div>

      <h3>Spoken languages</h3>

        <ul>
          {country.languages.map(language => <div key={language.name}> <li>{language.name}</li></div>)}
        </ul>

      <div>
        <img src = {country.flag} alt = 'Flag' width = '10%'></img>
      </div>

      <h3>Weather in  {country.capital} </h3>

      <Weather weather={weather} />

      </div>
  )
}

export default CountryInfo