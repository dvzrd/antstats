import React from 'react'

const CTA = props =>
  <aside className='cta aside' >
    <button type="button"
            className="primary button"
            onClick={props.action}>
      Run Calculations
    </button>
  </aside>

export default CTA
