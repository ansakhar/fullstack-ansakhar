import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
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