import React, { ReactElement } from 'react'
import './index.css'

import { CardFinder } from '../../components/card-finder'
import { CardLoader } from '../../components/card-loader'
import { INITIAL_STATE } from '../../redux'

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
          <CardLoader cards={INITIAL_STATE}/>
        </div>

        Not into that? check <a href="/world">this</a> out.
      </div>
    </div>
  )
}

export default HelloWorld
