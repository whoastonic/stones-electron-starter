/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/default-param-last */
import { createReducer } from 'reduxsauce'

import { CARD_ACTIONS } from './types'
import { combineReducers, Action } from 'redux'

interface InitialState {
  fetching: boolean
  error: string | undefined
  data: any[]
}

export interface AppState {
  cards?: InitialState
}

export const request = (state: InitialState, action: Action<InitialState>) => {
  console.log(action)
  console.log(state)

  return {
    ...state,
    fetching: true
  }
}

const success = (state: InitialState, action: Action<InitialState>) => {
  console.log(action)
  console.log(state)

  return {
    ...state,
    data: ['invalid-data']
  }
}

const error = (state: InitialState, action: Action<InitialState>) => {
  console.log(action)

  return {
    ...state,
    erorr: 'some-error'
  }
}

export const INITIAL_STATE = {
  fetching: false,
  error: undefined,
  data: []
}

export const CARD_HANDLER = {
  [CARD_ACTIONS.REQUEST_CARD]: request,
  [CARD_ACTIONS.SUCCESS_CARD]: success,
  [CARD_ACTIONS.ERROR_CARD]: error
}

export default combineReducers({
  cards: createReducer<InitialState>(
    INITIAL_STATE,
    CARD_HANDLER
  )
})
