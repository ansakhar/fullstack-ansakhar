import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { votePlus } from '../reducers/anecdoteReducer'
//import { notificationChange } from '../reducers/notificationReducer'


const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state.anecdotes)

  return (
<div>
{anecdotes.sort((a, b) => (b.votes - a.votes)).map(anecdote =>
    <div key={anecdote.id}>
      <div>
        {anecdote.content}
      </div>
      <div>
        has {anecdote.votes}
        <button onClick={() => dispatch(votePlus(anecdote.id))}>vote</button>
      </div>
    </div>
  )}
  </div>
  )
}

export default AnecdoteList