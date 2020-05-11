import React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { HelmetProvider } from 'react-helmet-async'
import { loadableReady } from '@loadable/component'

import { App } from './app'
import { store, INITIAL_STATE } from './redux'
import { error } from './modules/logger'

loadableReady(() => hydrate(
  <HelmetProvider>
    <Provider store={
      store(({ cards: INITIAL_STATE }))
    }>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </HelmetProvider>,
  document.getElementById('root')
)).catch((err) => error(err))
