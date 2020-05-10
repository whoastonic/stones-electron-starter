import React, { ReactElement } from 'react'
import './index.css'

import { CardFinder } from '../../components/card-finder'
import { CardLoader } from '../../components/card-loader'
import { INITIAL_CARD_STATE } from '../../redux/reducers'

const card = {
  name: INITIAL_CARD_STATE.name,
  desc: INITIAL_CARD_STATE.description,
  type: INITIAL_CARD_STATE.cardProperties.cardType
}

const HelloWorld = (): ReactElement => {
  return (
    <div>
      <div className="container">
        Hello, and welcome Stones Electron Stater (SES).
        This project was built with Electron, React, and Redux.
        The project was built for users who like each of these projects...

        <div className="card-finder">
          Also heres a Yu-Gi-Oh Card Finder!
          <CardFinder searchCard={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => { console.log('something') }}/>
          <CardLoader card={card}/>
        </div>
      </div>
    </div>

  )
}

export default HelloWorld
