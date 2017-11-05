import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// @TODO: move logic to container
const Calculation = ({ calculating, calculation }) =>
  <Component>
    { calculating ?
    <Message>Calculation in progress</Message> :
    ( calculation > 0 ?
      <Message>{ calculation }</Message> :
      <Message>Run calculations</Message> )}
  </Component>

const Component = styled.figure`
  position: relative;
  margin: 0 auto;
`

const Message = styled.p`
  margin: 0;
`

Calculation.propTypes = {
  calculating: PropTypes.bool,
  calculation: PropTypes.number
}

export default Calculation
