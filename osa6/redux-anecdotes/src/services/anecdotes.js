import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (content) => {
    const object = { content, votes: 0 }
    const response = await axios.post(baseUrl, object)
    return response.data
  }

const getOne = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`)
  return response.data
}

const addVote = async (id) => {
    const anecdote = await getOne(id)
    anecdote.votes = anecdote.votes + 1
    const response = await axios.put(`${baseUrl}/${id}`, anecdote)
    return response.data
  }

// eslint-disable-next-line import/no-anonymous-default-export
export default { 
    getAll,
    createNew,
    addVote
}