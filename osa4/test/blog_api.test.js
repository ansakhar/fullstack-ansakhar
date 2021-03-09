const mongoose = require('mongoose')
const helper = require('./test_helper')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)

const Blog = require('../models/blog')

describe('when there is initially some blogs saved', () => {
beforeEach(async () => {
    await Blog.deleteMany({})
    await Blog.insertMany(helper.initialBlogs)
  })

test('blogs are returned as json', async () => {
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('all blogs are returned', async () => {
    const response = await api.get('/api/blogs')
  
    expect(response.body).toHaveLength(helper.initialBlogs.length)
  })

test('blogs are identified by id', async () => {
    const response = await api.get('/api/blogs')
  
    const contents = response.body.map(blog => blog.id)

    expect(contents).toBeDefined()
  })

  describe('addition of a new blog', () => {
test('a valid blog can be added ', async () => {
    const newBlog = {
        title: "Hiidenkiven puutarhassa",
        author: "Minna Heinonen",
        url: "https://hiidenkivenpuutarhassa.blogspot.com/",
        likes: 205
      }
  
    await api
      .post('/api/blogs')
      .send(newBlog)
      .expect(200)
      .expect('Content-Type', /application\/json/)
  
      const blogsAtEnd = await helper.blogsInDb()
      expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length + 1)
    
      const contents = blogsAtEnd.map(blog => blog.title)
    expect(contents).toContainEqual('Hiidenkiven puutarhassa')
  })

  test('a blog without likes adding ', async () => {
    const newBlog = {
        title: "Trio MiuMau ja herra Nilsson",
        author: "Elena Kivinen",
        url: "https://www.blogit.fi/trio-miumau-ja-herra-nilsson"
      }
  
      const response = await api
      .post('/api/blogs')
      .send(newBlog)
      .expect(200)
      .expect('Content-Type', /application\/json/)

      const blogsAtEnd = await helper.blogsInDb()

      const contents = blogsAtEnd.find((blog) => blog.id === response.body.id)
    expect(contents.likes).toEqual(0)
  })

test('blog without url is not added', async () => {
    const newBlog = {
        title: "Trio MiuMau ja herra Nilsson",
        author: "Elena Kivinen"
      }
  
    await api
      .post('/api/blogs')
      .send(newBlog)
      .expect(400)
  
      const blogsAtEnd = await helper.blogsInDb()

      expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length)
  })
})

describe('deletion of a blog', () => {
    test('a blog can be deleted', async () => {
      const blogsAtStart = await helper.blogsInDb()
      const blogToDelete = blogsAtStart[0]
    
      await api
        .delete(`/api/blogs/${blogToDelete.id}`)
        .expect(204)
    
      const blogsAtEnd = await helper.blogsInDb()
    
      expect(blogsAtEnd).toHaveLength(
        helper.initialBlogs.length - 1
      )
    
      const contents = blogsAtEnd.map(blog => blog.id)
    
      expect(contents).not.toContain(blogToDelete.id)
    })
  })
})

afterAll(() => {
  mongoose.connection.close()
})