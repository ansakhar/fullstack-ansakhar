import React, { useState, useEffect } from 'react'
import axios from 'axios'
import FilterForm from './components/FilterForm'
import Countries from './components/Countries'

const App = () => {
  
  const [countries, setCountries] = useState([])

  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])
  
  console.log('render', countries.length, 'countries')


  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
  }

  const handleShow = (event) => 
  {
    console.log(event.target.value)
    setNewFilter(event.target.value)
  }


  const countriesToShow = countries.filter(country => 
      country.name.toLowerCase().includes(newFilter.toLowerCase()) === true)
     
     
  return (
    <div>
      <FilterForm newFilter = {newFilter} handleFilterChange = {handleFilterChange}/>

      <Countries countries = {countriesToShow} handleShow = {handleShow} />

    </div>
  )
}

export default App