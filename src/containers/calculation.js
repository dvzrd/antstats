import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { runCalculation } from '../actions/index'

class Calculation extends Component {

  static propTypes = {
    ant: PropTypes.object.isRequired,
    calculating: PropTypes.bool.isRequired,
    calculated: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
    // calculation: PropTypes.int.isRequired
  }

  componentDidMount() {
    const { dispatch, ant } = this.props
    
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.calculating) {
      const { dispatch, ant } = nextProps

      dispatch(runCalculation(ant))
    }
  }

  render() {
    const { calculating, calculation } = this.props

    return (
      <Container>
        { calculating ?
          <Message>Calculation in progress</Message> :
          ( calculation > 0 ?
            <Message>{ calculation }</Message> :
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

Calculation.propTypes = {
  calculating: PropTypes.bool,
  calculation: PropTypes.number
}

const mapStateToProps = state => {
  const { calculation } = state
  console.log(calculation)

  return {
    ant: calculation.ant,
    calculating: calculation.calculating,
    calculated: calculation.calculated,
    calculation: calculation.calculation
  }
}

export default connect(mapStateToProps)(Calculation)
