import React from 'react'
import { Tabs, Tab } from 'material-ui'
import TodoComponent from './todo-component'
import DoingComponent from './doing-component'
import CompleteComponente from './complete-component'

export default class Content extends React.Component {
  render() {
    return (
      <Tabs>
        <Tab label="TODO">
          <TodoComponent />
        </Tab>
        <Tab label="DOING">
          <DoingComponent />
        </Tab>
        <Tab label="COMPLETED">
          <CompleteComponente />
        </Tab>
      </Tabs>
    )
  }
}
