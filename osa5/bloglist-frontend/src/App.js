import React, { useState, useEffect, useRef } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import Notification from './components/Notification'
import LoginForm from './components/LoginForm'
import BlogForm from './components/BlogForm'
import Togglable from './components/Togglable'
import loginService from './services/login' 

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [user, setUser] = useState(null)
  const blogFormRef = useRef()

  useEffect(() => {
    blogService.getAll()
    .then(blogs =>
      setBlogs( blogs )
    )  
  }, [])

  const addBlog = (blogObject) => {
    blogFormRef.current.toggleVisibility()
    blogService
    .create(blogObject)
    .then(returnedBlog => { 
      setErrorMessage (`a new blog ${blogObject.title} by ${blogObject.author} was added`)
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      setBlogs(blogs.concat(returnedBlog))
    }) 
    .catch(error => {
      setErrorMessage (`error: wrong format`)
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)})
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
   <Togglable buttonLabel="create new blog" buttonLabel2="cancel" ref={blogFormRef}>
      <BlogForm createBlog={addBlog} /> 
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