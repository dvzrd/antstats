import React from 'react'
import { connect } from 'react-redux'
import { calculateAnts } from '../actions/index'
import Ant from '../components/Ant'
import CTA from '../components/CTA'
import './Ants.css';

const Ants = props =>
  <figure className="fluid ants figure">
    <ul className="ants list">
      {props.ants.map((ant, index) =>
        <Ant key={index}
             ant={ant} />
      )}
    </ul>
    <CTA action={() => { props.calculateAnts(props.ants) }} />
  </figure>

export default connect(null, {calculateAnts})(Ants)
