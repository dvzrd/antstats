import React, { Component } from 'react'
import { graphql, gql, compose } from 'react-apollo'
import { connect } from 'react-redux'
import { fetchAnts } from '../actions/index'
import Body from '../containers/Body'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './Main.css'

class MainLayout extends Component {
  // @TODO: update graphql schema to allow mutations
  // dont need redux, only need apollo
  // mutateAnts() {
  //   const { antsQuery, antsMutation, getImages } = this.props
  //   const ants = antsQuery.ants.map(ant => ant.name)
  //   const images = getImages(ants).payload
  //
  //   const mutations = images.map(ant => {
  //     antsMutation({
  //       variables: {
  //         name: ant.name,
  //         image: ant.image,
  //         calculating: false,
  //         calculation: null
  //       }
  //     }).then(({ data }) => {
  //       console.log('got data', data);
  //     }).catch((error) => {
  //       console.log('there was an error sending the query', error);
  //     });
  //   })
  // }

  renderBody() {
    const { antsQuery, fetchAnts } = this.props

    if (antsQuery && antsQuery.loading) {
      // @TODO: loading component
      return (
        <section className="loading section">
          <figure className="loading figure">
            Loading
          </figure>
        </section>
      )
    }

    if (antsQuery && antsQuery.error) {
      // @TODO: error component
      return (
        <section className="error section">
          <figure className="error figure">
            Error
          </figure>
        </section>
      )
    }

    const ants = fetchAnts(antsQuery.ants).payload

    return <Body data={ants} />
  }

  render() {
    return (
      <main className="main layout">
        <Header />
        { this.renderBody() }
        <Footer />
      </main>
    )
  }
}

export const ANTS_QUERY = gql`
query AntsQuery {
  ants {
    name
    length
    color
    weight
  }
}
`

// @TODO: add mutation to schema
// const ANTS_MUTATION = gql`
// mutation AntsMutation($name: String!) {
//   antsMutation(name: $name) {
//     image
//     calculating
//     calculation
//   }
// }
// `

export default compose(
  graphql(ANTS_QUERY, { name: 'antsQuery' }),
  // graphql(ANTS_MUTATION, { name: 'antsMutation' }),
  connect(null, {fetchAnts})
)(MainLayout);
