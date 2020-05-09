import React from 'react'
import { Provider } from 'react-redux'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import HelloWorld from '../views/HelloWorld'
import { store } from '../redux'

export const App = (): React.ReactElement => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" component={HelloWorld} exact/>
      </Switch>
    </Router>
  </Provider>
)
