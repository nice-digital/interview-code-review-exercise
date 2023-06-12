import React from 'react'
import { render, screen } from '@testing-library/react'
import Display from './display'

describe('Test For Display Render', () => {
  test('Render correctly on calculator init.', () => {
    render(<Display actual="0" last="" />)
    const actual = screen.getByText('0')
    const last = screen.getAllByText('')
    expect(actual).toBeInTheDocument()
    expect(last[0]).toBeInTheDocument()
  })
  test('Render correctly during an operation.', () => {
    render(<Display actual="2" last="3" />)
    const actual = screen.getByText('2')
    const last = screen.getByText('3')
    expect(actual).toBeInTheDocument()
    expect(last).toBeInTheDocument()
  })
})
