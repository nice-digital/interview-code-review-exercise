/* @jsx jsx */
import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import { injectGlobal } from '@emotion/css'
import { jsx, css } from '@emotion/react'

injectGlobal`
  @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap');
`

/* Inspired on Kitty Giraudel, Button Switches with Checkboxes and CSS3 Fanciness
https://tympanus.net/codrops/2012/09/13/button-switches-with-checkboxes-and-css3-fanciness/ */
const Button = styled.div`
  width: 75px;
  height: 75px;
  margin: 15px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  input {
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 50%;
    background: linear-gradient(#fcfcfc, #b2ac9e);
    border: 0px;
    transition: 0.2s ease-out;
    z-index: -1;
    box-shadow:
      inset 0 2px 3px rgba(255,255,255,0.13),
      0 5px 8px rgba(0,0,0,0.3),
      0 10px 10px 4px rgba(0,0,0,0.3);
  }

  p {
    font-family: 'Quicksand', sans-serif;
    color: white;
    font-size: 22px;
    font-weight: 500;
    user-select: none;
  }

  &:after {
    content: "";
    position: absolute;
    left: 0;
    width: 55px;
    height: 55px;
    left: 10px;
    top: 10px;
    z-index: -1;
    border-radius: 50%;
    background: linear-gradient(#cbc7bc, #d2cbc3);
  }

  &:active {
    input {
      color: #9abb82;
      box-shadow:
        inset 0 2px 3px rgba(255,255,255,0.13),
        0 5px 8px rgba(0,0,0,0.35),
        0 3px 10px 4px rgba(0,0,0,0.2);
    }
  }
`

const pressed = css`
  color: #25a4b8 !important;
  text-shadow: 0 0 7px #00ffc4;
`

const CalcButton = ({ text, active, onClick }) => {
  return (
    <Button onClick={onClick}>
      <input type="button" />
      <p css={active ? css`${pressed}` : ''}>{text}</p>
    </Button>
  )
}

CalcButton.propTypes = {
  text: PropTypes.string.isRequired,
  active: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
}

CalcButton.defaultProps = {
  active: false,
}

export default CalcButton
