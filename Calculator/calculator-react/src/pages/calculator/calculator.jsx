import React, { useState, useEffect } from 'react'
import CalcButton from '../../components/calc-button/calc-button'
import Display from '../../components/display/display'
import styled from '@emotion/styled'

const Case = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & > div {
    width: 400px;
    padding: 20px;
    border-radius: 3px;
    background-color: #0000001f;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow:
      0 10px 0px 0px rgba(0,0,0,0.5),
      0 10px 10px 2px rgba(0,0,0,0.5);
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  
  button {
    background-color: transparent;
    border: 0;
  }
`

const buttons = [
  {
    value: '+/-',
    type: 'action',
    do: old => (parseFloat(old) * -1).toString()
  },
  {
    value: 'CE',
    type: 'action',
    do: () => '0'
  },
  {
    value: 'DEL',
    type: 'action',
    do: old => (old.length === 1) ? '0' : old.substring(0, old.length - 1)
  },
  {
    value: '/',
    type: 'operation',
    operation: (a, b) => (b === 0) ? 'ERROR: DIVISION BY 0' : (((a / b).toString().length > 9) ? (a / b).toFixed(7) : (a / b)),
  },
  {
    value: '7',
    type: 'value',
  },
  {
    value: '8',
    type: 'value',
  },
  {
    value: '9',
    type: 'value',
  },
  {
    value: '*',
    type: 'operation',
    operation: (a, b) => ((a * b) < 0) ? 'ERROR: NEGATIVE RESULT' : (((a * b) > 999999999) ? 'ERROR: RESULT OUT OF BOUNDS' : a * b),
  },
  {
    value: '4',
    type: 'value',
  },
  {
    value: '5',
    type: 'value',
  },
  {
    value: '6',
    type: 'value',
  },
  {
    value: '-',
    type: 'operation',
    operation: (a, b) => ((a - b) < 0) ? 'ERROR: NEGATIVE RESULT' : (((a - b) > 999999999) ? 'ERROR: RESULT OUT OF BOUNDS' : a - b),
  },
  {
    value: '1',
    type: 'value',
  },
  {
    value: '2',
    type: 'value',
  },
  {
    value: '3',
    type: 'value',
  },
  {
    value: '+',
    type: 'operation',
    operation: (a, b) => ((a + b) < 0) ? 'ERROR: NEGATIVE RESULT' : (((a + b) > 999999999) ? 'ERROR: RESULT OUT OF BOUNDS' : a + b),
  },
  {
    value: '0',
    type: 'value',
  },
  {
    value: '.',
    type: 'value',
  },
  {
    value: '=',
    type: 'operation',
    operation: (a, b) => b,
  },
]

const Calculator = () => {
  const [displayText, setDisplayText] = useState('0')
  const [lastValue, setLastValue] = useState('')
  const [operation, setOperation] = useState('')

  const handleButton = button => {
    if (button.type === 'value') {
      setLastValue(old => ((operation !== '') && (old === '')) ? ((operation === '=') ? (setOperation(''), '') : displayText) : old)
      setDisplayText(old => ((operation !== '') && (lastValue === '')) ? button.value : ((old === '0') ? button.value : old + button.value))
    } else if (button.type === 'operation') {
      if (!(button.value === '=' && operation === '=')) {
        setLastValue(old => (old === '') ? displayText : '')
        setDisplayText(old => (lastValue === '') ? '0' : buttons.find(toDo => toDo.value === operation).operation(parseFloat(lastValue), parseFloat(old)).toString())
        setOperation(button.value)
      }
    } else if (button.type === 'action') {
      setDisplayText(old => button.do(old))
    }
  }

  useEffect(() => {
    if (displayText.toUpperCase() === 'NAN') setDisplayText('ERROR')
    if (displayText.length > 9 && !displayText.toUpperCase().includes('ERROR')) setDisplayText(old => old.substring(0, 9))
  }, [displayText, operation])

  return (
    <Case>
      <div>
        <Display actual={displayText} last={lastValue} />
        <Grid>
          {
            buttons.map((button, index) => (
              <React.Fragment key={index}>
                <CalcButton text={button.value} onClick={() => handleButton(button)} active={operation === button.value} />
                {(index +1 === 4*4) ? <div /> : null}
              </React.Fragment>
            ))
          }
        </Grid>
      </div>
    </Case>
  )
}

export default Calculator
