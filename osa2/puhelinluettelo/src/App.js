import React, { useState } from 'react'
import FilterForm from './components/FilterForm'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

  const [ newName, setNewName ] = useState('')

  const [ newNumber, setNewNumber ] = useState('')

  const [newFilter, setNewFilter] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber
    }
    const found = persons.findIndex(person => person.name === newName)
    console.log(found)
    if (found >= 0) {
      window.alert(`${newName} is already added to phonebook`)
    } else
    {
    setPersons(persons.concat(nameObject))
    setNewName('')
    setNewNumber('')
    }
  } 

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
  }

  const personsToShow = persons.filter(person => 
      person.name.toLowerCase().includes(newFilter.toLowerCase()) === true)
     
  return (
    <div>
      <h2>Phonebook</h2>

      <FilterForm newFilter = {newFilter} handleFilterChange = {handleFilterChange}/>

      <h3>add a new</h3>

        <PersonForm addPerson = {addPerson} newName = {newName} handleNameChange = {handleNameChange}
        newNumber = {newNumber} handleNumberChange = {handleNumberChange}/>

      <h3>Numbers</h3>
      
        <Persons persons = {personsToShow}/>
      
    </div>
  )

}

export default App