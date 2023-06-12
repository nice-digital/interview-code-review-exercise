import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

describe('General App Test', () => {
  test('Renders correctly.', () => {
    render(<App />)
  })
})