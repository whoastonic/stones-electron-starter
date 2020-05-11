import { fetchJSON } from '../modules/fetch'
import { Creators } from './actions'

const {
  requestCard,
  successCard,
  errorCard
} = Creators

export const fetchCard = (name: string) => (dispatch: any) => {
  dispatch(requestCard())
  fetchJSON('https://jsonplaceholder.typicode.com/todos/1')
    .then((data) => dispatch(successCard(data)))
    .catch((err) => dispatch(errorCard(err)))
}

// export const fetchCard = (name: string) => (dispatch) => {
//   return (dispatch) => {
//     dispatch(requestCard())
//     fetchJSON('')
//   }
// }

// export const fetchAnime = (name: string): void => {
//   return (dispatch) => {

//   }
// }

// export const fetchManga = (name: string): void => {
//   return (dispatch) => {

//   }
// }
