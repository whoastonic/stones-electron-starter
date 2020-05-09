import React, { ReactElement } from 'react'
import './index.css'

import * as logger from '../../modules/logger'

interface WorldProps {
  fetchCard: (name: string) => void
}

const findCard = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
  logger.info('searching for the card!')
}

const HelloWorld = (props: WorldProps): ReactElement => {
  return (
    <div>
      <div className="container">
        Hello, and welcome Stones Electron Stater (SES).
        This project was built with Electron, React, and Redux.
        The project was built for users who like each of these projects...

        <div className="card-finder">
          Also heres a Yu-Gi-Oh Card Finder!
          <div className="card-search">
            <input type="text" className="card-search" id="card-search"/>
            <br/>
            <button onClick={findCard}>Find Card!</button>
          </div>
          <div id="card-loader" className="card-container">
          </div>
        </div>
      </div>
    </div>

  )
}

export default HelloWorld
