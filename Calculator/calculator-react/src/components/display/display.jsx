import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import { injectGlobal } from '@emotion/css'

injectGlobal`
  @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@500&display=swap');
`

const DisplayScreen = styled.div`
  width: 100%;
  height: 75px;
  background: linear-gradient(#8ebf96, #2a8f3f);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  box-shadow:
    0 2px 3px 1px rgba(0,0,0,0.4);

    p {
      font-family: 'Chakra Petch', sans-serif;
      color: #434343;
      text-transform: uppercase;
      font-size: 23px;
      margin: 0;
      margin-left: 20px;
      margin-right: 20px;
      font-weight: 600;
      text-shadow: 0 0 2px #5e5e5e;

      &:first-of-type {
        font-size: 15px;
      }
    }
`

const Display = ({ actual, last }) => {
  return (
    <DisplayScreen>
      <p role="displayLast">{last}</p>
      <p role="displayActual">{actual}</p>
    </DisplayScreen>
  )
}

Display.propTypes = {
  actual: PropTypes.string.isRequired,
  last: PropTypes.string.isRequired,
}

export default Display
