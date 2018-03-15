import React, { Component } from 'react';
import ItemsList from '../components/main/ItemsList';
import addItemAction from '../action/actionAddItem'
import removeItemAction from '../action/actionRemoveItem'
import choiceItemAction from '../action/actionChoiceItem'
import addCommentAction from '../action/actionAddComment'
import { connect } from "react-redux"
import Comments from '../components/main/Comments'

class App extends Component {
  render() {
    return (
      <div className="main">
        <ItemsList
          items={this.props.items}
          setItem={this.props.setItemFunction}
          choiceItem={this.props.changeActive}
          removeItem={this.props.removeItemFunction} />
        {(this.props.items) ?
            this.props.items.map((val, index) => (
              val.isActive ? <Comments setComment={this.props.setCommentFunction} comments={val.masseges} index={index} id={val.id} /> : null
            )) : null
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.itemsList
})

const mapDispatchToProps = (dispatch) => ({
  setItemFunction: name => {
    dispatch(addItemAction(name))
  },
  changeActive: id => {
    dispatch(choiceItemAction(id))
  },
  removeItemFunction: id => {
    dispatch(removeItemAction(id))
  },
  setCommentFunction: (comment, idItem) => {
    dispatch(addCommentAction(comment, idItem))
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
