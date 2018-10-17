import React from 'react'

export default ({ message, onClose }) => (
  <div className="alert alert-danger" role="alert">
    {message}
    {onClose && <button onClick={onClose} type="button" className="close" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>}
  </div>
)