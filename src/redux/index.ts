import { createStore, applyMiddleware, Store } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import reducers, { AppState } from './reducers'

export { INITIAL_STATE } from './reducers'

export const store = (initState: AppState): Store =>
  createStore(reducers, initState, applyMiddleware(thunk, logger))
