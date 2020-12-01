import React from 'react'

const Persons = (props) => {
  return (
    <div>
      {props.persons.map(person => 
        <Person key={person.name} person={person} />
          )}
    </div>
  )
}

const Person = ({ person }) => {
  return (
    <p>{person.name} {person.number}</p>
  )
}

export default Persons