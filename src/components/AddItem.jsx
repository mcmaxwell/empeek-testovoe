import React from 'react'
import Button from './Button'

const AddItem = ({setItem}) => {
  let input

  function addItem () {
    if(input.value) {
      setItem(input.value)
      input.value = ''

    } else {
      input.style.borderColor = 'red'
    }
  }
  return (
    <div className="items__add-item">
      <input
        name="name"
        placeholder="Type name here..."
        required
        onChange={() => (input.style.borderColor = '')}
        ref={(node) => { input = node }}/>
      <Button classname={'btn-add'} isActive={false} onClick={addItem} text={'Add new'} />
    </div>
  )
}

export default AddItem
