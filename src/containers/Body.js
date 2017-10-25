import React from 'react'
import { connect } from 'react-redux'
import Ants from '../containers/Ants'
import './Body.css';

const mapStateToProps = (state) => {
  return {
    ants: state.ants.all
  }
}

const Body = props =>
  <section className="body section">
    <Ants ants={props.ants} />
  </section>

export default connect(mapStateToProps)(Body);
