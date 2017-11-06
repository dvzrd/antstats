import React from 'react'
import styled from 'styled-components'

const Footer = () =>
  <Component>
    <Figure>
      <Copyright>
        Copyright © 2017, Damir Vazgird.
      </Copyright>
    </Figure>
  </Component>

const Component = styled.footer`
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  min-height: 25vh;
  background-color: #343434;
  background-image: linear-gradient(90deg, rgba(6, 7, 2, 0.5) 50%, rgba(52, 52, 52, 0.25) 50%);
  background-size: 1.5em 1.5em;
  z-index: 1;
`

const Figure = styled.figure`
  align-self: flex-end;
`

const Copyright = styled.p`
  margin: 0;
  color: #bdbdbd;
  font-size: 75%;
  text-align: right;
`

export default Footer
