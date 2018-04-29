import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import App from './components/app-component'
import {Provider} from 'react-redux'
import {render} from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducers'

const store = createStore(reducer)

render(
  <Provider store={store}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>
  ,document.getElementById('root'))
