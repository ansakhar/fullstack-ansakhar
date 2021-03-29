import Togglable from './Togglable'

const BlogForm = ({ onSubmit, handleChangeBlog, valueBlog, handleChangeAuthor, valueAuthor, handleChangeUrl, valueUrl}) => {
    return (
      <div>
        <h2>create new</h2>
  
        <form onSubmit={onSubmit}>
        <div>
          <input
            value={valueBlog}
            onChange={handleChangeBlog}
          />
        </div>
        <div>
          <input
            value={valueAuthor}
            onChange={handleChangeAuthor}
          />
        </div>
        <div>
          <input
            value={valueUrl}
            onChange={handleChangeUrl}
          />
        </div>
        <button type="submit">
            create</button>
        </form>
      </div>
    )
  }
 
  export default BlogForm