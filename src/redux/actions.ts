import { createActions } from 'reduxsauce'

export const {
  Creators
} = createActions({
  requestCard: [],
  successCard: ['card'],
  errorCard: ['error']
})
