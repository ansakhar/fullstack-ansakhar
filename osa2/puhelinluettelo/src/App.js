import React, { useState, useEffect } from 'react'
import personService from './services/persons-service'
import FilterForm from './components/FilterForm'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'
import personsService from './services/persons-service'



const App = () => {
  
  const [persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)


  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])
  
  console.log('render', persons.length, 'persons')

  const addPerson = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber,
      
    }
    const found = persons.find(person => person.name === newName)
    if (found) {
     if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) 
     {
       personsService
       .update(found.id, nameObject)
       .then(returnedPerson => {
        setErrorMessage (`Person's ${newName} phonenumber was replaced`)
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
         setPersons(persons.map(person => person.id !== found.id ? person: returnedPerson))
       })
       .catch(error => {
        setErrorMessage (`Information of ${newName} has already been removed from server`)
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
          setPersons(persons.filter(person => person.id !== found.id))
      })
         
    } } 
    else
    {
      personService
      .create(nameObject)
      .then(returnedPerson => {
        setErrorMessage (`Added ${newName}`)
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      setPersons(persons.concat(returnedPerson))
      setNewName('')
      setNewNumber('')
    })   
    }
  } 

 const handleDelete = (deletedPerson) => {
  
  if (window.confirm(`Delete ${deletedPerson.name}?`))
{
  personService
    .remove(deletedPerson.id)

    .then(returnedPerson => {    
      setErrorMessage (`${deletedPerson.name} was deleted`)
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
      setPersons(persons.filter(person => person.id !== deletedPerson.id ))
    })
    
    .catch(error => {
      setErrorMessage (`Information of ${deletedPerson.name} has already been removed from server`)
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
        setPersons(persons.filter(person => person.id !== deletedPerson.id))
    })
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

      <Notification message={errorMessage} />

      <FilterForm newFilter = {newFilter} handleFilterChange = {handleFilterChange}/>

      <h3>add a new</h3>

      <PersonForm addPerson = {addPerson} newName = {newName} handleNameChange = {handleNameChange}
       newNumber = {newNumber} handleNumberChange = {handleNumberChange}/>

      <h3>Numbers</h3>
      
      <Persons persons = {personsToShow} handleDelete = {handleDelete}/>
      
    </div>
  )

}

export default App