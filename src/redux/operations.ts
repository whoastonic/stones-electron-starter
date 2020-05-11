import { fetchJSON } from '../modules/fetch'
import { Creators } from './actions'

const {
  requestCard,
  successCard,
  errorCard
} = Creators

export const fetchCard = (name: string) => (dispatch: any) => {
  dispatch(requestCard())
  fetchJSON(`https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${name}`)
    .then((data) => dispatch(successCard(data)))
    .catch((err) => dispatch(errorCard(err)))
}
