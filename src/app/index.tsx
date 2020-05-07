import React from 'react'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import HelloWorld from '../components/HelloWorld'

export const App = (): React.ReactElement => (
  <Router>
    <Switch>
      <Route path="/" component={HelloWorld} exact/>
    </Switch>
  </Router>
)
