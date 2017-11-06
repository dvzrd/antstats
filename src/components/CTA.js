import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const CTA = ({ calculating, calculated, handleRunCalculations, handleResetCalculations }) =>
  <Component>
    { calculated ?
      <Button type="button"
            onClick={ () => handleResetCalculations() }>
        Restart Calculations
      </Button> :
      ( calculating ? 
        null :
        <Button type="button"
                onClick={ () => handleRunCalculations() }>
          Calculate Win Rates
        </Button>)}
  </Component>

const Component = styled.aside`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: 1em;
  z-index: 5;
`

const Button = styled.button`
  cursor: pointer;
  position: relative;
  margin-bottom: 1em;
  padding: 1em;
  min-width: 16em;
  outline: 0;
  box-shadow: 0.1em 0.075em 0 0.15em #060702;
  border: 0.05em solid #fff;
  border-top: 0.2em solid;
  border-left: 0.2em solid;
  background-color: #FC4000;
  color: #fff;
  font-size: 1em;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 0.05em;
  transition: all 250ms;

  &:hover {
    border: 0.05em solid #FC4000;
    border-bottom: 0.2em solid;
    border-right: 0.2em solid;
    box-shadow: -0.1em -0.075em 0 0.15em #060702;
    background-color: #060702;
    color: #FC4000;
  }

  &:active {
    box-shadow: 0 0 0 0.2em #060702 inset;
    border: 0.2em solid #FC4000;
    background-color: #fff;
    color: #060702;
  }
`

CTA.propTypes = {
  calculating: PropTypes.bool.isRequired,
  calculated: PropTypes.bool.isRequired,
  handleRunCalculations: PropTypes.func.isRequired,
  handleResetCalculations: PropTypes.func.isRequired
}

export default CTA
