import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { votePlus } from '../reducers/anecdoteReducer'
import { notificationChange } from '../reducers/notificationReducer'


const AnecdoteList = () => {

  const dispatch = useDispatch()

  const anecdotes = useSelector(({ filter, anecdotes }) => {
    return anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))
  })

  return (
<div>

{anecdotes.sort((a, b) => (b.votes - a.votes)).map(anecdote =>
    <div key={anecdote.id}>
      <div>
        {anecdote.content}
      </div>
      <div>
        has {anecdote.votes}
        <button onClick={() => {
          dispatch(votePlus(anecdote.id))
          dispatch(notificationChange(`you voted '${anecdote.content}'`))
          setTimeout(() => {
            dispatch(notificationChange(null))
          }, 5000)
        }
          }>vote</button>
      </div>
    </div>
  )}
  </div>
  )
}

export default AnecdoteList