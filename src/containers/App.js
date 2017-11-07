import React, { Component } from 'react'
import { graphql, gql, compose } from 'react-apollo'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { 
  mapStateToAnts,
  runCalculations, 
  endCalculations, 
  resetCalculations 
} from '../actions/index'
import Header from '../components/header'
import Ants from '../components/ants'
import CTA from '../components/cta'
import Footer from '../components/footer'

class App extends Component {

  static propTypes = {
    calculating: PropTypes.bool.isRequired,
    calculated: PropTypes.bool.isRequired,
    calculationsByAnt: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  // componentDidMount() {
  //   const { dispatch } = this.props
  // }

  componentWillReceiveProps(nextProps) {
    const { calculating, calculated, dispatch } = nextProps
    console.log('WILL RECEIVE PROPS ', this.props, nextProps)

    if (!calculating && calculated) {
      console.log('ending calculations', calculated)
      dispatch(endCalculations(calculated))
    }
  }

  handleRunCalculations = () => {
    const { calculating, antsQuery, dispatch } = this.props
     
    if (!calculating) {
      dispatch(mapStateToAnts(antsQuery.allAnts))
      dispatch(runCalculations(calculating))
      console.log('RUNNING CALCULATIONS', calculating)
    }
  }

  handleResetCalculations = () => {
    const { calculated, dispatch } = this.props

    if (calculated) {
      dispatch(resetCalculations(calculated))
      console.log('RESET CALCULATIONS', calculated)
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

  renderCTA() {
    const { calculating, calculated } = this.props
    let cta
    
    calculated ?
      cta = <CTA label='Reset Win Rates'
                 handleAction={ this.handleResetCalculations } /> :
      (calculating ? 
        cta = 'Calculating...' : 
        cta = <CTA label='Calculate Win Rates'
                   handleAction={ this.handleRunCalculations } />)
    
    return cta
  }

  render() {
    return (
      <Container>
        <Header />
        <Main>
          { this.renderAnts() }
          { this.renderCTA() }
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
    id
    name
    color
    length
    weight
    image
  }
}
`

const mapStateToProps = state => {
  const { ants } = state

  console.log(ants.calculationsByAnt)

  return {
    calculating: ants.calculating,
    calculated: ants.calculated,
    calculationsByAnt: ants.calculationsByAnt
  }
}

export default compose(
  graphql(ANTS_QUERY, { name: 'antsQuery' }),
  connect(mapStateToProps)
)(App);
