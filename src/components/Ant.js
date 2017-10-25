import React from 'react'
import { connect } from 'react-redux'
import { getCalculation } from '../actions/index'
import Calculation from './Calculation'

const Ant = props =>
  <li className={ props.ant.calculating ? 'calculating ant item' : 'ant item' }>
    <figcaption className="caption">
      <h1 className="title">{props.ant.name}</h1>
      <ul className="list">
        <li className="item">
          <strong className="name">Color:</strong> <em className="value">{props.ant.color}</em>
        </li>
        <li className="item">
          <strong className="name">Length:</strong> <em className="value">{props.ant.length}mm</em>
        </li>
        <li className="item">
          <strong className="name">Weight:</strong> <em className="value">{props.ant.weight}mg</em>
        </li>
      </ul>
      { props.ant.calculating && !props.ant.calculation ?
        <Calculation status={props.ant.calculating}
                     action={props.getCalculation(props.ant)} />
      : null }
      <img className="image" src={props.ant.image} alt={props.ant.name} />
    </figcaption>
  </li>

export default connect(null, {getCalculation})(Ant)
