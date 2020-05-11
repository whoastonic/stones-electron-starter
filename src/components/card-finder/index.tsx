import React, { ReactElement } from 'react'
import { Dispatch } from 'redux'

import { fetchCard } from '../../redux/operations'

import { connect } from 'react-redux'

interface CFProps {
  fetching?: boolean
  searchCard?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const mapDispatchToProps = (dispatch: Dispatch): any => {
  return {
    searchCard: (_: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
      const str = (document.getElementById('find-card') as HTMLInputElement).value

      console.log(str)

      fetchCard('something')(dispatch)

      console.log('more of something')
    }
  }
}

export const CardFinder = connect(null, mapDispatchToProps)(({
  searchCard
}: CFProps): ReactElement => {
  return (
    <div>
      <input type="text" name="card" id="find-card" className="card-finder card-search"/>
      <button
        onClick={searchCard}
        type="submit"
        className="cf-button card-search">
        Find Card
      </button>
    </div>
  )
})
