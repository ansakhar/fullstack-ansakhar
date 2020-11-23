import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

let maks = 0
let maksVote = 0

const App = (props) => {
  const [selected, setSelected] = useState(0)

  const setToSelect = (newSelect)  => {
    setSelected(newSelect) }

  const [points, setPoints] = useState(Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf,0))

  const setToPoints = (newPoints)  => {
    setPoints(newPoints) }

  const copy = [...points]

  const handleAnecdoteClick = () => {
    setToSelect(getRandomInt(anecdotes.length))
}

  const handleVoteClick = () => {
   copy[selected] += 1
   console.log(copy)
   setToPoints(copy)
   console.log(selected)
   console.log(maks)
   if (copy[selected] > maksVote) 
   {
    maks = selected 
    maksVote = copy[selected]
     console.log(maks)
   }
}
  return (
    <div>
      <h1>
        Anecdote of the day
      </h1>
      <div>
      {props.anecdotes[selected]}
      </div>
      <div>has {copy[selected]} votes</div>
      <Button handleClick={handleVoteClick} text="vote" />
      <Button handleClick={handleAnecdoteClick} text="new anecdote" />
      <h1>
        Anecdote with most votes
      </h1>
      <div>
      {props.anecdotes[maks]}
      </div>
      <div>has {copy[maks]} votes</div>
    </div>
  )
}


const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
