import React, {useState} from 'react'
const Blog = ({blog, updateBlog}) => {
  const [blogView, setBlogView] = useState(false)

  const handleLike = (blog) => {
    const newBlog = {
        title: blog.title,
        url: blog.url,
        likes: blog.likes + 1,
        author: blog.author,
        user: blog.user,
        id: blog.id
    }
    updateBlog(newBlog)
}

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

 if (blogView === false) {
  return (
    <div style={blogStyle}>
    {blog.title} {blog.author} <button onClick={() => setBlogView(true)}> view</button>
  </div>  
)}
return (
  <div style={blogStyle}>
  {blog.title} <button onClick={() => setBlogView(false)}> hide</button> <br/>
  {blog.url} <br/>
  {blog.likes} <button onClick={() => handleLike(blog)}> like</button> <br/>
  {blog.author}
</div> 
)
  }

export default Blog