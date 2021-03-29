import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import Notification from './components/Notification'
import LoginForm from './components/LoginForm'
import BlogForm from './components/BlogForm'
import Togglable from './components/Togglable'
import loginService from './services/login' 

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [newBlog, setNewBlog] = useState('')
  const [newAuthor, setNewAuthor] = useState('')
  const [newUrl, setNewUrl] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [loginVisible, setLoginVisible] = useState(false)
  const [blogVisible, setBlogVisible] = useState(true)
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
      setErrorMessage (`a new blog ${newBlog} by ${newAuthor} was added`)
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      setBlogs(blogs.concat(returnedBlog))
      setNewBlog('')
      setNewAuthor('')
      setNewUrl('')
    }) 
    .catch(error => {
      setErrorMessage (`error: wrong format`)
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)})
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
      setErrorMessage('error: wrong username or password')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  const loginForm = () => (
    <Togglable buttonLabel="log in" buttonLabel2="cancel">
          <LoginForm
            username={username}
            password={password}
            handleUsernameChange={({ target }) => setUsername(target.value)}
            handlePasswordChange={({ target }) => setPassword(target.value)}
            handleSubmit={handleLogin}
          />
          </Togglable>
  )
  
  const handleLogout = () => {
    console.log("logout")
    window.localStorage.removeItem('loggedBlogappUser')
    setUser(null)
  }

  const blogForm = () => (
   <Togglable buttonLabel="new note" buttonLabel2="cancel">
      <BlogForm
      
        onSubmit={addBlog}
        
        valueBlog={newBlog}
        handleChangeBlog={handleBlogChange}
        
        valueAuthor={newAuthor}
        handleChangeAuthor={handleAuthorChange}

        valueUrl={newUrl}
        handleChangeUrl={handleUrlChange}
        />
        
    </Togglable >
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