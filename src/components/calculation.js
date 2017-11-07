import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { runCalculation } from '../actions/index'

class Calculation extends Component {

  static propTypes = {
    ant: PropTypes.object.isRequired,
    calculating: PropTypes.bool.isRequired,
    calculated: PropTypes.object.isRequired,
    calculations: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { dispatch, ant } = this.props
    
    console.log('MOUNTED ', ant)
  }

  componentWillReceiveProps(nextProps) {
    console.log('NEW PROPS')
    if (nextProps.calculating) {
      const { dispatch, ant } = nextProps

      dispatch(runCalculation(ant))
    }
  }

  render() {
    const { ant, calculating, calculations } = this.props
    const hasCalculations = Object.keys(calculations).length > 0
    // const calculation = calculations[ant.name].calculation

    return (
      <Container>
        { calculating ?
          <Message>Calculation in progress</Message> :
          ( hasCalculations ?
            <Message>get calculation for this ant</Message> :
            null )}
      </Container>
    )
  }
}

const Container = styled.figure`
  position: relative;
  margin: 0 auto;
`

const Message = styled.p`
  margin: 0;
`

const mapStateToProps = state => {
  const { ants, calculations } = state

  console.log(calculations)

  return {
    calculating: ants.calculating,
    calculated: ants.calculated,
    calculations
  }
}

export default connect(mapStateToProps)(Calculation)
