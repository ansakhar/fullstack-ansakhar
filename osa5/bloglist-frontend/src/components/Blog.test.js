import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import Blog from './Blog'

test('Component renders title and author, but does not render url and likes', () => {
  const blog = {
    title: 'Component testing is done with react-testing-library',
    author: 'Blogs author',
    url: 'www.url.fi',
    likes: 12
  }

  const component = render(
    <Blog blog={blog} />
  )

  component.debug()

  expect(component.container).toHaveTextContent(
    'Component testing is done with react-testing-library'
  )

  expect(component.container).toHaveTextContent(
    'Blogs author'
  )

  expect(component.container).not.toHaveTextContent(
    'www.url.fi'
  )

  expect(component.container).not.toHaveTextContent(
    1
  )
})

test('clicking the button renders url and likes', async () => {
    const blog = {
        title: 'Component testing is done with react-testing-library',
        author: 'Blogs author',
        url: 'www.url.fi',
        likes: 12,
        user: { name: 'users name' }
      }
    const user = {
        name: 'users name'
    }
  
    const mockHandler = jest.fn()
  
    const component = render(
      <Blog blog={blog} user = {user} />
    )
  
    const button = component.getByText('view')
    fireEvent.click(button)

    component.debug()

    expect(component.container).toHaveTextContent(
        'www.url.fi'
      )
    expect(component.container).toHaveTextContent(12)
})

test('clicking the button likes', async () => {
    const blog = {
        title: 'Component testing is done with react-testing-library',
        author: 'Blogs author',
        url: 'www.url.fi',
        likes: 12,
        user: { name: 'users name' }
      }
    const user = {
        name: 'users name'
    }
  
    const mockHandler = jest.fn()
  
    const component = render(
      <Blog blog={blog} user = {user} updateBlog = {mockHandler} />
    )
  
    const button = component.getByText('view')
    fireEvent.click(button)

    const buttonLikes = component.getByText('like')
    fireEvent.click(buttonLikes)
    fireEvent.click(buttonLikes)

    expect(mockHandler.mock.calls).toHaveLength(2)
})