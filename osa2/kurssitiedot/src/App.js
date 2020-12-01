import React from 'react'
import Course from './components/Course'

const App = ({ courses }) => {
  console.log('App toimii...')
  return (
    <div>
      <h1>
        Web development curriculum
      </h1>
      {courses.map(course => 
        <Course key={course.id} course={course} total={course.parts.reduce( (sum, part) =>
          {console.log('what is happening', sum, part)
            return sum + part.exercises  },0)
          } />
          )}
     
    </div>
  )
}

export default App
