import React from 'react'

const Persons = ({persons, handleDelete}) => {
  return (
    <div className='person'>
      {persons.map(person => 
        <div key={person.id}> {person.name} {person.number} 
         <button onClick={() => handleDelete(person)}>delete</button> </div>
          )}
    </div>
  )
}

export default Persons