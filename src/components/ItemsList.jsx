import React from 'react';
import Button from './Button'
import Item from './Item'
import AddItem from './AddItem'

class ItemsList extends React.Component {
  render() {
    return (
      <div className="main__block items">
        <h2>Items</h2>
        <AddItem setItem={this.props.setItem} />
        <div className="items__list">
          {
            this.props.items.map(val =>
              <Item
                key={val.id}
                {...val}
                badge={val.masseges.length}
                onClick={() => this.props.choiceItem(val.id)}
                removeItem={() => this.props.removeItem(val.id)}
               />
            )
          }
        </div>
      </div>
    )
  }
}

export default ItemsList;
