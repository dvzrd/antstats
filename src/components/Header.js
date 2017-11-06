import React from 'react'
import styled from 'styled-components'

const Header = () =>
  <Component>
    <Figure>
      <Title>
        Ant Stats
        <Description>
          An app for purveyors of the competitive ant racing scene, who wish to view statistics related to competing ants before races take place.
        </Description>
      </Title>
    </Figure>
  </Component>

const Component = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  min-height: 50vh;
  background-color: #050503;
  color: #fff;
  align-items: center;
  justify-content: center;
  z-index: 2;
`

const Figure = styled.figure`
  align-self: flex-start;
`

const Title = styled.h1`
  color: #fff;
  text-transform: uppercase;
  text-align: right;
  letter-spacing: 0.1em;
`

const Description = styled.small`
  color: #bdbdbd;
  text-transform: initial;
  border-top: 0.25em solid rgba(253, 64, 0, 0.25);
  padding-top: 0.25em;
  padding-left: 2em;
  margin-right: 0;
  margin-left: auto;
  letter-spacing: 0;
  line-height: 1.25;

  @media only screen and (min-width: 48em) {
    max-width: 75%;
    padding-left: 25%;
  }
`

export default Header
