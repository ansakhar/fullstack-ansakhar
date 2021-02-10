const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  const reducer = (sum, blog) => {
    return sum + blog.likes
  }

  return blogs.length === 0
  ? 0 
  : blogs.reduce(reducer, 0)
}

const favouriteBlog = (blogs) => {
  const reducer = (theBestBlog, blog) => {
    if(theBestBlog.likes > blog.likes){
    return theBestBlog
  }
    else {
      return blog
    }
  }

  return blogs.reduce(reducer, 0)
}
  
  module.exports = {
    dummy,
    totalLikes,
    favouriteBlog
  }