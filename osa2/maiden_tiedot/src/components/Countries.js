import React from 'react'
import CountryInfo from './CountryInfo'

const Countries = (props) => {
  
  if (props.countries.length > 10) 
  return ( 
    <div>
      Too many matches, specify another filter
    
    </div>
    
   )
   else {
    if (props.countries.length === 1) {
      return ( 
        <div>
        {props.countries.map(country => 
          <CountryInfo key={country.numericCode} country={country} />
            )}
      </div>
        
       )}
       else {
  return (
    <div>
      {props.countries.map(country => 
      <div 
      key={country.numericCode}> 
        {country.name}   
        <button value = {country.name} onClick={props.handleShow}> show </button>
        </div>
          )}
          
    </div>
  )}
}
}

export default Countries