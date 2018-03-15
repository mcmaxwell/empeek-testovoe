import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const AddItem = ({setItem}) => {
  let input

  function addItem (e) {
    e.preventDefault()
    if(input.value) {
      setItem(input.value)
      input.value = ''

    } else {
      input.style.borderColor = 'red'
    }
  }
  return (
    <form className="items__add-item" onSubmit={addItem}>
      <input
        name="name"
        placeholder="Type name here..."
        required
        onChange={() => (input.style.borderColor = '')}
        ref={(node) => { input = node }}/>
      <Button classname={'btn-add'} isActive={false} onClick={() => 'ss'} text={'Add new'} />
    </form>
  )
}

AddItem.propTypes = {
  setItem: PropTypes.func.isRequired
}

export default AddItem
