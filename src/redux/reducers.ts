/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/default-param-last */
import { createReducer } from 'reduxsauce'

import { CARD_ACTIONS } from './types'
import { combineReducers } from 'redux'

interface State {
  fetching: boolean
  error: string | undefined
  data: object | string | object[] | string[]
}

export const INITIAL_STATE = {
  fetching: false,
  error: undefined,
  data: []
}

export const INITIAL_CARD_STATE = {
  name: '',
  description: '',
  cardProperties: {
    cardType: '',
    cardEffect: '',
    battleInfo: null
  }
}

export const request = (state = INITIAL_STATE, action: any) => {
  return {
    ...state,
    fetching: true
  }
}

const success = (state = INITIAL_STATE, action: any) => {
  console.log(action)

  return {
    ...state,
    data: action
  }
}

const error = (state = INITIAL_STATE, action: any) => {
  console.log(action)

  return {
    ...state,
    data: action
  }
}

export const CARD_HANDLER = {
  [CARD_ACTIONS.REQUEST_CARD]: request,
  [CARD_ACTIONS.SUCCESS_CARD]: success,
  [CARD_ACTIONS.ERROR_CARD]: error
}

export default combineReducers({
  cards: createReducer(INITIAL_STATE, CARD_HANDLER)
})
