import { createStore, Store } from 'redux'

import reducers from './reducers'

export const store: Store = createStore(reducers)
