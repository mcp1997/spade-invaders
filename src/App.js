import React, { useState } from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import './index.css'

import logoBJ from './assets/spadeinvadersblackjack2.png'
import logoAbout from './assets/spadeinvadersabout2.png'
import logoRules from './assets/spadeinvadersrules2.png'

import Home from './components/Home'
import About from './components/About'
import Rules from './components/Rules'
import Play from './components/Play'

const StyledHeader = styled.div`

header {
  display: flex;
  justify-content: space-around;
  width: 95%;
  padding: 1% 1%;
  background-color: #051243;
  margin: 1% auto;
  box-shadow: 6px 6px red, 11px 11px yellow;
  border-radius: 10px;
}

.mainLogo {
  width: 45%;
}

.all-links {
  display: flex;
  justify-content: space-evenly;
  width: 50%;
}

.link {
  margin: auto;
  text-decoration: none;
  font-family: 'press_start_2p';
  font-size: 1.8vw;
  color: white;
  text-shadow: 3px 3px red;
}

.link:active {
  text-shadow: 1px 1px red;
  position: relative;
  top: 1px;
  left: 1px;
}
`

function App() {
  const [logo, setLogo] = useState(logoBJ)
  
  const clickHandler = evt => {
    const label = evt.target.innerText

    if ( label === 'About' ) {
      setLogo(logoAbout)
    } else if ( label === 'Rules' ) {
      setLogo(logoRules)
    } else {
      setLogo(logoBJ)
    }
  }

  return (
    <div className='App'>
      <StyledHeader>
        <header> 
          <img className='mainLogo' src={logo} alt='Spade Invaders' />
          <div className='all-links'>
            <Link className='link' to='/' onClick={clickHandler} >Home</Link>
            <Link className='link' to='/about' onClick={clickHandler} >About</Link>
            <Link className='link' to='/rules' onClick={clickHandler} >Rules</Link>
            <Link className='link' to='/play' onClick={clickHandler} >Play!</Link>
          </div>
        </header>
      </StyledHeader>
      <Switch>
        <Route path='/about' >
          <About />
        </Route>
        <Route path='/rules' >
          <Rules />
        </Route>
        <Route path='/play' >
          <Play />
        </Route>
        <Route path='/' >
          <Home clickHandler={clickHandler} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
