import React, { Component } from 'react'
import { graphql, gql, compose } from 'react-apollo'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { calculateAnts } from '../actions/index'
import Header from '../components/Header'
import Ants from '../components/Ants'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

class App extends Component {

  // static propTypes = {
  //   calculating: PropTypes.bool.isRequired,
  //   dispatch: PropTypes.func.isRequired
  // }

  handleCalculationsRequest = () => {
    // @TODO: get ants directly from props
    // fetch ants in DidComponentMount()
    const { calculateAnts } = this.props
    // const ants = fetchAnts(antsQuery.ants).payload

    // calculateAnts(ants)
  }

  renderAnts() {
    const { antsQuery } = this.props

    if (antsQuery && antsQuery.loading) {
      return <Message>Loading</Message>
    }

    if (antsQuery && antsQuery.error) {
      return <Message>Error</Message>
    }

    const ants = antsQuery.allAnts

    console.log(ants)
    
    return <Ants ants={ ants } />
  }

  render() {
    return (
      <Container>
        <Header />
        <Main>
          { this.renderAnts() }
          <CTA handleCalculations={ this.handleCalculationsRequest } />
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
  font-size: 2em;
  text-align: center;
`

// @TODO: move to actions
// to map state to props
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

export default compose(
  graphql(ANTS_QUERY, { name: 'antsQuery' }),
  connect(null, { calculateAnts })
)(App);
