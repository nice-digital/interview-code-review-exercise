import React from 'react'
import { render, screen } from '@testing-library/react'
import Calculator from './calculator'
import UserEvent from '@testing-library/user-event'

const ERR_ROOB = 'ERROR: RESULT OUT OF BOUNDS'
const ERR_NR = 'ERROR: NEGATIVE RESULT'
const ERR_DB0 = 'ERROR: DIVISION BY 0'
const ERR = 'ERROR'


describe('Tests For Calculator Interface', () => {
  test('Renders correctly.', () => {
    render(<Calculator />)
  })
  test('Render button +/-', () => {
    render(<Calculator />)
    const button = screen.getByText('+/-')
    expect(button).toBeInTheDocument()
  })
  test('Render button CE', () => {
    render(<Calculator />)
    const button = screen.getByText('CE')
    expect(button).toBeInTheDocument()
  })
  test('Render button DEL', () => {
    render(<Calculator />)
    const button = screen.getByText('DEL')
    expect(button).toBeInTheDocument()
  })
  test('Render button /', () => {
    render(<Calculator />)
    const button = screen.getByText('/')
    expect(button).toBeInTheDocument()
  })
  test('Render button 7', () => {
    render(<Calculator />)
    const button = screen.getByText('7')
    expect(button).toBeInTheDocument()
  })
  test('Render button 8', () => {
    render(<Calculator />)
    const button = screen.getByText('8')
    expect(button).toBeInTheDocument()
  })
  test('Render button 9', () => {
    render(<Calculator />)
    const button = screen.getByText('9')
    expect(button).toBeInTheDocument()
  })
  test('Render button *', () => {
    render(<Calculator />)
    const button = screen.getByText('*')
    expect(button).toBeInTheDocument()
  })
  test('Render button 4', () => {
    render(<Calculator />)
    const button = screen.getByText('4')
    expect(button).toBeInTheDocument()
  })
  test('Render button 5', () => {
    render(<Calculator />)
    const button = screen.getByText('5')
    expect(button).toBeInTheDocument()
  })
  test('Render button 6', () => {
    render(<Calculator />)
    const button = screen.getByText('6')
    expect(button).toBeInTheDocument()
  })
  test('Render button -', () => {
    render(<Calculator />)
    const button = screen.getByText('-')
    expect(button).toBeInTheDocument()
  })
  test('Render button 1', () => {
    render(<Calculator />)
    const button = screen.getByText('1')
    expect(button).toBeInTheDocument()
  })
  test('Render button 2', () => {
    render(<Calculator />)
    const button = screen.getByText('2')
    expect(button).toBeInTheDocument()
  })
  test('Render button 3', () => {
    render(<Calculator />)
    const button = screen.getByText('3')
    expect(button).toBeInTheDocument()
  })
  test('Render button +', () => {
    render(<Calculator />)
    const button = screen.getByText('+')
    expect(button).toBeInTheDocument()
  })
  test('Render button 0', () => {
    render(<Calculator />)
    const button = screen.getAllByText('0')
    button.forEach(el => expect(el).toBeInTheDocument())
  })
  test('Render button .', () => {
    render(<Calculator />)
    const button = screen.getByText('.')
    expect(button).toBeInTheDocument()
  })
  test('Render button =', () => {
    render(<Calculator />)
    const button = screen.getByText('=')
    expect(button).toBeInTheDocument()
  })
})

describe('Tests For Operations', () => {
  test('2 plus 3 gives 5.', () => {
    render(<Calculator />)
    const button2 = screen.getByText('2').parentElement
    const button3 = screen.getByText('3').parentElement
    const buttonPlus = screen.getByText('+').parentElement
    const buttonEquals = screen.getByText('=').parentElement
    UserEvent.click(button2)
    UserEvent.click(buttonPlus)
    UserEvent.click(button3)
    UserEvent.click(buttonEquals)
    const displayActual = screen.getByRole('displayActual')
    expect(displayActual.innerHTML).toBe('5')
  })
  test('999999999 plus 1 gives error because is greater than 999999999.', () => {
    render(<Calculator />)
    const button9 = screen.getByText('9').parentElement
    const button1 = screen.getByText('1').parentElement
    const buttonPlus = screen.getByText('+').parentElement
    const buttonEquals = screen.getByText('=').parentElement
    for (let i = 0; i < 9; i++) {
      UserEvent.click(button9)
    }
    UserEvent.click(buttonPlus)
    UserEvent.click(button1)
    UserEvent.click(buttonEquals)
    const displayActual = screen.getByRole('displayActual')
    expect(displayActual.innerHTML).toBe(ERR_ROOB)
  })
  test('5 minus 3 gives 2.', () => {
    render(<Calculator />)
    const button5 = screen.getByText('5').parentElement
    const button3 = screen.getByText('3').parentElement
    const buttonMinus = screen.getByText('-').parentElement
    const buttonEquals = screen.getByText('=').parentElement
    UserEvent.click(button5)
    UserEvent.click(buttonMinus)
    UserEvent.click(button3)
    UserEvent.click(buttonEquals)
    const displayActual = screen.getByRole('displayActual')
    expect(displayActual.innerHTML).toBe('2')
  })
  test('1 minus 2 gives error because negative.', () => {
    render(<Calculator />)
    const button1 = screen.getByText('1').parentElement
    const button2 = screen.getByText('2').parentElement
    const buttonMinus = screen.getByText('-').parentElement
    const buttonEquals = screen.getByText('=').parentElement
    UserEvent.click(button1)
    UserEvent.click(buttonMinus)
    UserEvent.click(button2)
    UserEvent.click(buttonEquals)
    const displayActual = screen.getByRole('displayActual')
    expect(displayActual.innerHTML).toBe(ERR_NR)
  })
  test('3 multiplied by 3 gives 9', () => {
    render(<Calculator />)
    const button3 = screen.getByText('3').parentElement
    const buttonProduct = screen.getByText('*').parentElement
    const buttonEquals = screen.getByText('=').parentElement
    UserEvent.click(button3)
    UserEvent.click(buttonProduct)
    UserEvent.click(button3)
    UserEvent.click(buttonEquals)
    const displayActual = screen.getByRole('displayActual')
    expect(displayActual.innerHTML).toBe('9')
  })
  test('8 divided by 2 gives 4', () => {
    render(<Calculator />)
    const button8 = screen.getByText('8').parentElement
    const button2 = screen.getByText('2').parentElement
    const buttonDivision = screen.getByText('/').parentElement
    const buttonEquals = screen.getByText('=').parentElement
    UserEvent.click(button8)
    UserEvent.click(buttonDivision)
    UserEvent.click(button2)
    UserEvent.click(buttonEquals)
    const displayActual = screen.getByRole('displayActual')
    expect(displayActual.innerHTML).toBe('4')
  })
  test('+/- negates a value', () => {
    render(<Calculator />)
    const button1 = screen.getByText('1').parentElement
    const buttonNegate = screen.getByText('+/-').parentElement
    UserEvent.click(button1)
    UserEvent.click(buttonNegate)
    const displayActual = screen.getByRole('displayActual')
    expect(displayActual.innerHTML).toBe('-1')
    UserEvent.click(buttonNegate)
    expect(displayActual.innerHTML).toBe('1')
  })
  test('CE clear actualDisplay.', () => {
    render(<Calculator />)
    const button1 = screen.getByText('1').parentElement
    const button2 = screen.getByText('2').parentElement
    const buttonCE = screen.getByText('CE').parentElement
    UserEvent.click(button1)
    UserEvent.click(button2)
    UserEvent.click(buttonCE)
    const displayActual = screen.getByRole('displayActual')
    expect(displayActual.innerHTML).toBe('0')
  })
  test('DEL deletes last digit of actualDisplay.', () => {
    render(<Calculator />)
    const button1 = screen.getByText('1').parentElement
    const button2 = screen.getByText('2').parentElement
    const buttonDEL = screen.getByText('DEL').parentElement
    UserEvent.click(button1)
    UserEvent.click(button2)
    UserEvent.click(buttonDEL)
    const displayActual = screen.getByRole('displayActual')
    expect(displayActual.innerHTML).toBe('1')
  })
  test('1 divided by 0 gives error because divided by 0', () => {
    render(<Calculator />)
    const button1 = screen.getByText('1').parentElement
    const button0 = screen.getAllByText('0')
    const buttonDivision = screen.getByText('/').parentElement
    const buttonEqual = screen.getByText('=').parentElement
    UserEvent.click(button1)
    UserEvent.click(buttonDivision)
    UserEvent.click(button0[1].parentElement)
    UserEvent.click(buttonEqual)
    const displayActual = screen.getByRole('displayActual')
    expect(displayActual.innerHTML).toBe(ERR_DB0)
  })
  test('Invalid operation gives an error, usually given because operates with errors on display', () => {
    render(<Calculator />)
    const button1 = screen.getByText('1').parentElement
    const button0 = screen.getAllByText('0')
    const buttonDivision = screen.getByText('/').parentElement
    const buttonEqual = screen.getByText('=').parentElement
    UserEvent.click(button1)
    UserEvent.click(buttonDivision)
    UserEvent.click(button0[1].parentElement)
    UserEvent.click(buttonEqual)
    UserEvent.click(buttonDivision)
    UserEvent.click(button1)
    UserEvent.click(buttonEqual)
    const displayActual = screen.getByRole('displayActual')
    expect(displayActual.innerHTML).toBe(ERR)
  })
})
