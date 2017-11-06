import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Calculation from '../containers/calculation'

const Ants = ({ ants }) => (
  <Component>
    <Lineup>
      {ants.map((ant, index) =>
        <Ant key={ index }>
          <Figure>
            <Name>{ ant.name }</Name>
            <List>
              <Item>
                <Title>Color: </Title>
                <Value>{ ant.color }</Value>
              </Item>
              <Item>
                <Title>Length: </Title>
                <Value>{ ant.length }mm</Value>
              </Item>
              <Item>
                <Title>Weight: </Title>
                <Value>{ ant.weight }mg</Value>
              </Item>
            </List>
            <Calculation calculating={ ant.calculating }
                        calculation={ ant.calculation } />
            <Image src={ ant.image } alt={ ant.name } />
          </Figure>
        </Ant>
      )}
    </Lineup>
  </Component>
)

const Component = styled.section`
  background-color: #fff;
  z-index: 3;
`

const Lineup = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin: 0 auto;
  padding: 0;
  list-style: none;
`

const Ant = styled.li`
  position: relative;
  flex: 1;
  margin-top: 6em;
  margin-bottom: 6em;
  padding: 0;
  text-align: left;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -25%;
    width: 150%;
    height: 40%;
    pointer-events: none;
    outline: .15em solid transparent;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    transform: rotate(5deg);
    transform-origin: 0 0;
    background-color: #343434;
    z-index: 1;
  }

  &:first-child {
    margin-top: 3em;

    &::before {
      top: -50%;
      height: 50%;
      box-shadow: 0 -1em 0 0.25em rgba(253, 64, 0, 0.9);
      border-top: 2em solid rgba(6, 7, 2, 0.95);
      background-color: #fff;
      transform: rotate(3.5deg);
    }
  }

  &:nth-child(even) {
    text-align: right;

    &::before {
      top: -15%;
      transform: rotate(-5deg);
    }
  }

  &:nth-child(2)::before {
    height: 14%;
    box-shadow: 0 -0.35em 0 1.25em rgba(5, 5, 3, 0.9);
    border-top: 1.25em solid rgba(253, 64, 0, 0.8);
    border-bottom: 0.5em solid rgba(253, 64, 0, 0.95);
    background-color: rgba(5, 5, 3, 0.95);
  }

  &:nth-child(3)::before {
    top: -60%;
    height: 16%;
    transform: rotate(6deg);
    box-shadow: 0 0.5em 0 1.75em rgba(5, 5, 3, 0.85);
    border-top: 0.75em solid rgba(253, 64, 0, 0.75);
    border-bottom: 1.5em solid rgba(253, 64, 0, 0.8);
    background-color: rgba(5, 5, 3, 0.9);
  }

  &:nth-child(4)::before {
    top: -10%;
    height: 12%;
    transform: rotate(-5.5deg);
    box-shadow: 0 -0.25em 0 1.75em rgba(53, 53, 53, 0.95);
    border-top: 0.5em solid rgba(253, 64, 0, 0.95);
    border-bottom: 1em solid rgba(253, 64, 0, 0.75);
    background-color: rgba(52, 52, 52, 0.9);
  }

  &:nth-child(5)::before {
    height: 14%;
    box-shadow: 0 -0.25em 0 1.75em rgba(53, 53, 53, 0.9);
    border-top: 0.75em solid rgba(253, 64, 0, 0.8);
    border-bottom: 1.25em solid rgba(253, 64, 0, 0.85);
    background-color: rgba(52, 52, 52, 0.85);
  }

  &:last-child::after {
    content: '';
    position: absolute;
    bottom: -60%;
    left: -25%;
    width: 150%;
    height: 45%;
    pointer-events: none;
    box-shadow: 0 0.5em 0 0.5em rgba(253, 64, 0, 0.9);
    border-bottom: 1.5em solid rgba(53, 53, 53, 0.9);
    outline: .15em solid transparent;
    background-color: #fff;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    transform: rotate(-2.5deg);
    transform-origin: 0 0;
    z-index: 1;
  }
`

const Figure = styled.figure`
  min-height: 45vh;

  @media only screen and (min-width: 75em) {
    min-height: 65vh;
  }
`


const Name = styled.h1`
  max-width: 12em;
  margin-right: auto;
  margin-left: 0;
  color: #050503;
  letter-spacing: 0.05em;
  z-index: 2;
  transition: all 500ms;

  ${Ant}:hover & {
    color: #FC4000;
  }

  ${Ant}:nth-child(even) & {
    margin-right: 0;
    margin-left: auto;
  }

  @media only screen and (min-width: 48em) {
    font-size: 2em;
  }

  @media only screen and (min-width: 75em) {
    margin-top: 4em;

    ${Ant}:last-child & {
      margin-top: 6em;
    }
  }
`

const List = styled.ul`
  display: inline-block;
  margin-left: 1.25em;
  padding: 0;
  color: #343434;
  text-align: left;
  list-style: none;
  transition: all 500ms;

  ${Ant}:hover & {
    color: #050503;
  }

  @media only screen and (min-width: 48em) {
    font-size: 1.15em;
  }
`

const Item = styled.li`
  margin-bottom: 0.25em;

  &::before {
    content: '•';
    display: inline-block;
    width: 1em;
    margin-left: -1em;
    color: #050503;
    transition: all 500ms;

    ${Ant}:hover & {
      color: #FC4000;
    }
  }
`

const Image = styled.img`
  position: absolute;
  right: -15%;
  left: auto;
  bottom: 0;
  z-index: -1;
  filter: grayscale(100%);
  transition: all 500ms;

  ${Ant}:hover & {
    filter: grayscale(0);
  }

  ${Ant}:nth-child(even) & {
    right: auto;
    left: -15%;
  }

  @media only screen and (min-width: 30em) {
    width: 85%
  }

  @media only screen and (min-width: 48em) {
    width: 75%
  }

  @media only screen and (min-width: 75em) {
    right: -35%;
    bottom: 20%;
    width: 100%

    ${Ant}:nth-child(even) & {
      left: -35%;
      right: auto;
    }

    ${Ant}:last-child & {
      bottom: 0;
    }
  }
`

const Title = styled.strong`
  font-weight: bold;
`

const Value = styled.em`
  font-weight: lighter;
`

Ants.propTypes = {
  ants: PropTypes.array.isRequired
}

export default Ants
