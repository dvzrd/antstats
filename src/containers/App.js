import React, { Component } from 'react'
import { graphql, gql, compose } from 'react-apollo'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { runCalculations, endCalculations, resetCalculations } from '../actions/index'
import Header from '../components/header'
import Ants from '../components/ants'
import CTA from '../components/cta'
import Footer from '../components/footer'

class App extends Component {

  static propTypes = {
    calculating: PropTypes.bool.isRequired,
    calculated: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
    ants: PropTypes.array.isRequired
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
    // @TODO: compare lengths with another array
    if (nextProps.ants.length === 5) {
      const { dispatch, ants } = nextProps

      dispatch(endCalculations(ants))
    }
  }

  handleRunCalculations = () => {
    const { calculating, dispatch, ants } = this.props
    
    if (!calculating) {
      dispatch(runCalculations(ants))
      console.log('RUNNING CALCULATIONS', calculating)
      console.log(this.props)
    }
  }

  handleResetCalculations = () => {
    const { calculating, dispatch, ants } = this.props

    if (!calculating) {
      dispatch(resetCalculations(ants))
      console.log('RESET CALCULATIONS', calculating)
    }
  }

  renderAnts() {
    const { antsQuery } = this.props
    const ants = antsQuery.allAnts

    if (antsQuery && antsQuery.loading) {
      return <Message>Loading</Message>
    }

    if (antsQuery && antsQuery.error) {
      return <Message>Error</Message>
    }

    return <Ants ants={ ants } />
  }

  render() {
    const { calculating, calculated } = this.props

    console.log(this.props)

    return (
      <Container>
        <Header />
        <Main>
          { this.renderAnts() }
          <CTA calculating={ calculating } 
               calculated={ calculated } 
               handleRunCalculations={ this.handleRunCalculations }
               handleResetCalculations={ this.handleResetCalculations } />
        </Main>
        <Footer />
      </Container>
    )
  }
}

const Container = styled.main`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  margin: 0 auto;
`

const Main = styled.main`
  flex: 1;
  margin-top: 50vh;
  margin-bottom: 25vh;
  background-color: #fff;
  z-index: 3;
`

const Message = styled.aside`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  color: #fd4000;
  font-size: 2em;
  text-align: center;
  z-index: 10;
`

export const ANTS_QUERY = gql`
query AntsQuery {
  allAnts {
    name
    color
    length
    weight
    image
    calculation
    calculating
  }
}
`

const mapStateToProps = state => {
  const { ants } = state

  return {
    calculating: ants.calculating,
    calculated: ants.calculated,
    ants: ants.ants
  }
}

export default compose(
  graphql(ANTS_QUERY, { name: 'antsQuery' }),
  connect(mapStateToProps)
)(App);
