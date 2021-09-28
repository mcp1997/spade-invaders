import React from 'react'
import styled from 'styled-components'

const StyledAbout = styled.div`
  color: white;
  font-family: 'press_start_2p';
`

export default function About() {
  return (
    <StyledAbout>
      <h1>About this Project</h1>
      <p>My name is Matt Phillips and I am an entry-level full-stack web developer. This project&apos;s purpose is to demonstrate my basic skills in creating a CRUD Web Application using the React library for my front end and Node framework for my back end. It also demostrates skills with CSS, APIs, and a basic SQL database.</p>
      <p>Click <a href='github.com'>here</a> to navigate to this project&apos;s GitHub page.</p>
      <p>This website is a fully-functioning blackjack game written in Javascript within the React Library, heavily inspired by the Arcade classic <i>Space Invaders</i>. Users can either play as a guest, or they may create an account if they wish to place virtual &quot;bets&quot; and keep track of how much virtual &quot;currency&quot; has been won or lost. </p>
      <p>Thanks for checking it out!</p>
    </StyledAbout>
  )
}