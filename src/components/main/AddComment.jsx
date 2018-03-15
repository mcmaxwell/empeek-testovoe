import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'

const AddComment = ({setComment, idItem}) => {
  let textarea

  function sendComment (e) {
    e.preventDefault()
    if(textarea.value) {
      setComment(textarea.value, idItem)
      textarea.value = ''
    } else {
      textarea.style.borderColor = 'red'
    }
  }

  function sendKeyComment (e) {    
    ((e.keyCode == 10 || e.keyCode == 13) && (e.ctrlKey || e.metaKey)) ?
      sendComment(e) :
        null
  }
  return (
    <form className="comments__form" onSubmit={sendComment} id="comments__form">
      <div className="comments__item-avatar" style={{background:'#e6e6e6'}}></div>
      <textarea className="comments__input" ref={(node) => { textarea = node }} onKeyDown={sendKeyComment}></textarea>
    </form>
  )
}

AddComment.propTypes = {
  setComment: PropTypes.func.isRequired,
  idItem: PropTypes.string.isRequired
}

export default AddComment
