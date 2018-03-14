import React from 'react';
import ReactDOM from 'react-dom';

const Comments = () => (
  <div className="main__block comments">
    <h2>Comments #2</h2>
    <div className="comments__list">
      <div className="comments__item">
        <div className="comments__item-avatar" style={{background:'#ff8a00'}}></div>
        <div className="comments__item-text">
          A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980s
        </div>
      </div>
      <div className="comments__item">
        <div className="comments__item-avatar" style={{background:'#47568c'}}></div>
        <div className="comments__item-text">
          A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980s
        </div>
      </div>
      <div className="comments__item">
        <div className="comments__item-avatar" style={{background:'#ff8a00'}}></div>
        <div className="comments__item-text">
          A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980s
        </div>
      </div>
    </div>
    <div className="comments__form">
      <div className="comments__item-avatar" style={{background:'#e6e6e6'}}></div>
      <textarea className="comments__input"></textarea>
    </div>
  </div>
);

export default Comments;
