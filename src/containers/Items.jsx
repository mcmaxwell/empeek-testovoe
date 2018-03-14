import React, { Component } from 'react';
import ItemsList from '../components/ItemsList';
import addItemAction from '../action/actionAddItem'
import choiceItem from '../action/choiceItem'
import { connect } from "react-redux"

class App extends Component {
  render() {
    return (
      <ItemsList items={this.props.items} setItem={this.props.setItemFunction} choiceItem={this.props.changeActive} />
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
    dispatch(choiceItem(id))
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
