import React from 'react'

const Calculation = props =>
  <aside className={ props.status ? 'calculating aside' : 'calculation aside'}>
    { props.calculation ?
      <p className="message">Calculation: { props.calculation }</p>
    :
      <p className="message">{ props.status }</p>
    }
  </aside>

export default Calculation
