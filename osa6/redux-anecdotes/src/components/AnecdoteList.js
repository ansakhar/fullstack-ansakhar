import React from 'react'
import { connect } from 'react-redux'
import { votePlus } from '../reducers/anecdoteReducer'
import { notificationChange } from '../reducers/notificationReducer'


const AnecdoteList = (props) => {

  const anecdotes = props.anecdotes
  const filter = props.filter

  const anecdotesToShow = anecdotes.filter((anecdote) =>
  anecdote.content.toLowerCase().includes(filter.toLowerCase()))

  return (
<div>

{anecdotesToShow.sort((a, b) => (b.votes - a.votes)).map(anecdote =>
    <div key={anecdote.id}>
      <div>
        {anecdote.content}
      </div>
      <div>
        has {anecdote.votes}
        <button onClick={() => {
          props.votePlus(anecdote.id)
          props.notificationChange(`you voted '${anecdote.content}'`, 5)
        }
          }>vote</button>
      </div>
    </div>
  )}
  </div>
  )
        }
const mapStateToProps = (state) => {
    return {
      anecdotes: state.anecdotes,
      filter: state.filter,
    }
}

const mapDispatchToProps = {
  votePlus,
  notificationChange
}

const ConnectedAnecdoteList = connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)

export default ConnectedAnecdoteList