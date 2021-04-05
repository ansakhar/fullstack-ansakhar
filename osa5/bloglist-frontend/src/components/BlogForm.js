import React, { useState } from 'react'

const BlogForm = ({ createBlog }) => {
  const [newBlog, setNewBlog] = useState('')
  const [newAuthor, setNewAuthor] = useState('')
  const [newUrl, setNewUrl] = useState('')

  const handleBlogChange = (event) => {
    setNewBlog(event.target.value)
  }

  const handleAuthorChange = (event) => {
    setNewAuthor(event.target.value)
  }

  const handleUrlChange = (event) => {
    setNewUrl(event.target.value)
  }

  const addBlog = (event) => {
    event.preventDefault()
    createBlog({
      title: newBlog,
      author: newAuthor,
      url: newUrl,
    })
      setNewBlog('')
      setNewAuthor('')
      setNewUrl('')
  }

    return (
      <div>
        <h2>create new</h2>

        <form onSubmit={addBlog}>
        <div>
          <input
            value={newBlog}
            onChange={handleBlogChange}
          />
        </div>
        <div>
          <input
            value={newAuthor}
            onChange={handleAuthorChange}
          />
        </div>
        <div>
          <input
            value={newUrl}
            onChange={handleUrlChange}
          />
        </div>
        <button type="submit">
            create</button>
        </form>
      </div>
    )
  }

  export default BlogForm