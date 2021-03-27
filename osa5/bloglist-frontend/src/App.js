import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import Notification from './components/Notification'
import loginService from './services/login' 

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [newBlog, setNewBlog] = useState('')
  const [newAuthor, setNewAuthor] = useState('')
  const [newUrl, setNewUrl] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [user, setUser] = useState(null)

  useEffect(() => {
    blogService.getAll()
    .then(blogs =>
      setBlogs( blogs )
    )  
  }, [])

  const addBlog = (event) => {
    event.preventDefault()
    const blogObject = {
      title: newBlog,
      author: newAuthor,
      url: newUrl,
      
    }
    blogService
    .create(blogObject)
    .then(returnedBlog => { 
      setBlogs(blogs.concat(returnedBlog))
      setNewBlog('')
      setNewAuthor('')
      setNewUrl('')
    }) 
  }

  const handleBlogChange = (event) => {
    console.log(event.target.value)
    setNewBlog(event.target.value)
  }

  const handleAuthorChange = (event) => {
    console.log(event.target.value)
    setNewAuthor(event.target.value)
  }

  const handleUrlChange = (event) => {
    console.log(event.target.value)
    setNewUrl(event.target.value)
  }

  const handleLogin = async (event) => {
    event.preventDefault()
    
    try {
      const user = await loginService.login({
        username, password,
      })

      window.localStorage.setItem(
        'loggedBlogappUser', JSON.stringify(user)
      ) 

      blogService.setToken(user.token)
  
      setUsername('')
      setPassword('')
      setUser(user)
    } catch (exception) {
      setErrorMessage('wrong credentials')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  const loginForm = () => (
    <form onSubmit={handleLogin}>
      <div>
        username
          <input
          type="text"
          value={username}
          name="Username"
          onChange={({ target }) => setUsername(target.value)}
        />
      </div>
      <div>
        password
          <input
          type="password"
          value={password}
          name="Password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <button type="submit">login</button>
    </form>
  )
  
  const handleLogout = () => {
    console.log("logout")
    window.localStorage.removeItem('loggedBlogappUser')
    setUser(null)
  }

  const blogForm = () => (
    <form onSubmit={addBlog}>
      <h2>create new</h2>
      <div>
        title:<input
       type="text"
       value={newBlog}
       name="Title"
        onChange={handleBlogChange}
      />
      </div>
      <div>
        author:<input
        type="text"
        value={newAuthor}
        name="Author"
        onChange={handleAuthorChange}
      />
      </div>
      <div>
        url:<input
        type="text"
        value={newUrl}
        name="Url"
        onChange={handleUrlChange}
      />
      </div>
      <button type="submit">create</button>
    </form>  
  )  

  if (user === null) {
    return (
      <div>
        <h2>log in to application</h2>
        <Notification message={errorMessage} />
        {loginForm()}
      </div>
    )
  }

  return (
    <div>
      <h2>blogs</h2>
      <Notification message={errorMessage} />
      <p>{user.name} logged in <button onClick={handleLogout}> logout</button> </p>

      {blogForm()}

      {blogs.map(blog =>
        <Blog key={blog.id} blog={blog} />
      )}

    </div>
  )
}

export default App