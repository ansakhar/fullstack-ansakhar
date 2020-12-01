import React from 'react'

const Course = (props) => {
  console.log('course', props)
  return (
    <div>
      <Header course={props.course.name} />
      <Content parts={props.course.parts}/>
      <Total total={props.total}/>
    </div>
  )
}

const Header = (props) => {
  console.log('header', props)
  return (
      <h2>
         {props.course}
      </h2>
  )
}

const Part = ({ part }) => {
  console.log('part', part) 
  return (
      <p>
         {part.name} {part.exercises}
      </p>    
  )
}

const Content = ({ parts }) => {
  console.log('content', parts)
  return (
    <div>
      {parts.map(part => 
          <Part key={part.id} part={part} />
        )}
    </div>
  )
}

const Total = (props) => {
  console.log('Total', props)
  return (
  <div>
    <h3>
      total of {props.total} exercises
    </h3>
    </div>
    )}


export default Course