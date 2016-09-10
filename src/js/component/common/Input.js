import React, { PropTypes } from 'react'

import classnames from 'classnames'

import './Input.css'
const Input = (props) => {


  return (
      <div className={classnames('input-wrap',props.className)}>
          <input {...props} className='input-body' />
      </div>
  )
}
//
// Input.propTypes = {
//   active: PropTypes.bool.isRequired,
//   children: PropTypes.node.isRequired,
//   onClick: PropTypes.func.isRequired
// }

export default Input
