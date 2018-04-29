import React from 'react'
import { SortableContainer, SortableElement } from 'react-sortable-hoc'
import { List, ListItem } from 'material-ui/List'

export default class TodoComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6']
    }
  }
  render() {
    const SortableItem = SortableElement(({ value }) => (
      <ListItem primaryText={value} />
    ))
    const SortableList = SortableContainer(({ items }) => {
      return (
        <List>
          {items.map((value, idx) => (
            <SortableItem key={`item-${idx}`} index={idx} value={value} />
          ))}
        </List>
      )
    })
    const style = {
      width: '800px',
      margin: '0 auto',
      textAlign: 'left',
      border: 'solid'
    }
    return (
      <div style={style}>
        <SortableList items={this.state.items} />
      </div>
    )
  }
}
