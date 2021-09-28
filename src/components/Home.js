import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import blackjack from '../assets/blackjack.png'
import invader from '../assets/spaceinvader.gif'

const StyledHome = styled.div`

.text-container {
  color: white;
  font-family: 'press_start_2p';
  width: 80%;
  margin: 5% auto 5%;
  text-align: center;

  h1 {
    margin-bottom: 5%;
  }

  p {
    margin: 0 auto;
    font-size: large;
  }

  img {
    width: 30%;
    margin: 5% auto;
  }
}

.invader {
  display: block;
  width: 25%;
  border-radius: 50%;
  margin: 0 auto;
}

.button {
  display: block;
  width: 18%;
  margin: 1% auto;
  padding: 1.5% 0;
  text-align: center;
  font-family: 'press_start_2p';
  color: white;
  font-size: medium;
  text-decoration: none;
  border-radius: 10px;
  background-color: #051243;
  box-shadow: 4px 4px red, 7px 7px yellow;
  text-shadow: 2px 2px red;
}

.button:active {
  box-shadow: 1px 1px red, 2px 2px yellow;
  position: relative;
  top: 3px;
  left: 3px;
}

`

export default function Home(props) {
  return (
    <StyledHome>
      <div className='text-container' >
        <h1>Welcome, SPADE CADET!</h1>
        <p>Enjoy some classic</p>
        <img src={blackjack} alt='blackjack' />
        <p>during your intergalactic travel...</p>
      </div>
      <img className='invader' src={invader} alt='invader' />
      <Link className='button' onClick={props.clickHandler} to='/play' >Let&apos;s Play!</Link>
    </StyledHome>
  )
}
