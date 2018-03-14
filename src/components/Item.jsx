import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Item = ({ removeItem, isActive, name, badge, onClick}) => (
  <div className={'items__item' + (isActive ? ' active' : '')} onClick={onClick}>
    <div className="items__item-name">
      <span>{name}</span>
      <span className="badge">{badge}</span>
    </div>
    <Button classname={'btn-remove'} isActive={false} onClick={removeItem} text={'Delete'} />
  </div>
)

Item.propTypes = {
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  badge: PropTypes.number.isRequired
}

export default Item
