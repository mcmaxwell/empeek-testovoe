import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ isActive, classname, onClick, text }) => {
  return (
    <button
      className={'btn ' + classname + (isActive ? ' active' : '') }
      onClick={e => {
        onClick()
      }}>{text}</button>
  )
}

Button.propTypes = {
  active: PropTypes.string,
  classname: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Button;
