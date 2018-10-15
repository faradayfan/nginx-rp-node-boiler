import React from 'react'
import './ErrorMessage.css'

export default (props) => {
  if (props.message) {
    return (
      <div className="alert alert-danger" role="alert">
        <strong>Error!</strong> {props.message}
      </div>
    )
  } else {
    return <span />
  }
}