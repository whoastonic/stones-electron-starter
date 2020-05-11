import React, { ReactElement } from 'react'

import { connect } from 'react-redux'
import { AppState, InitialState } from '../../redux/reducers'

const mapStateToProps = (state: any): any => {
  return state
}

export const CardLoader = connect(mapStateToProps)(({
  cards
}: AppState): ReactElement => {
  return (
    <div>
      {
        cards !== undefined
          ? loadContent(cards)
          : <div></div>
      }
    </div>
  )
})

function loadContent ({ fetching, error, data }: InitialState): ReactElement {
  return (
    <div className="container card-finder-container">
      {
        fetching
          ? <div>Fetching Data...</div>
          : <div></div>
      }
      {
        data.length > 0
          ? loadCardInfo(data)
          : error !== undefined
            ? error
            : <div></div>
      }
    </div>
  )
}

function loadCardInfo (data: any[]): ReactElement {
  return (
    <div>
      {
        data.map((card: any, key) => (
          <div className="card card-box" key={key}>
            <div className="card card-name">
              {card.name}
            </div>
            <div className="card card-img">
              <img src={card.card_images[0].image_url_small} alt="..."/>
            </div>
            <div className="card card-info">
              <div className="card card-props">
                {card.atk} / {card.def} <br/>
                {card.level} | {card.race} | {card.attribute} | {card.archtype} | {card.type}
              </div>
              <div className="card card-desc">
                {card.desc}
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}
