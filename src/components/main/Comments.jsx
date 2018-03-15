import React from 'react';
import PropTypes from 'prop-types'
import AddComment from './AddComment'

const Comments = ({comments, id, setComment, index}) => (
  <div className="main__block comments">
    <h2>Comments #{index + 1}</h2>
    <div className="comments__list">
      { (comments) ?
          comments.map((val, index) =>
             <div className="comments__item" key={index}>
               <div className="comments__item-avatar"></div>
               <div className="comments__item-text">
                 {val}
               </div>
             </div>
          ) : null
      }
    </div>
    <AddComment setComment={setComment} idItem={id} />
  </div>
);

Comments.propTypes = {
  setComment: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  comments: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}

export default Comments;
