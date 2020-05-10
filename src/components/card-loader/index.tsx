import React, { ReactElement } from 'react'

import { connect } from 'react-redux'
import { CardState } from '../../redux/reducers'

interface CardProps {
  name: string
  type: string
  desc: string
  atk?: number
  dfc?: number
  effect?: string
}

interface CLProps {
  card: CardProps
}

const mapStateToProps = (state: CardState): void => {}

export const CardLoader = connect(mapStateToProps)(({
  card
}: CLProps): ReactElement => {
  return (
    <div>
      {
        card === undefined
          ? (
            <div>
                Invalid Card
            </div>
          )
          : (
            <div>
                Card - {card.name}
                Type - {card.type}
                Description: <br/> {card.desc}
              {
                card.effect !== undefined
                  ? <div>Effect - {card.effect}</div>
                  : (<div></div>)
              }
              {

                card.atk !== undefined && card.dfc !== undefined
                  ? <div>
                    Attack Points - {card.atk}
                    Defence Points - {card.dfc}
                  </div>
                  : <div></div>
              }
            </div>
          )
      }
    </div>
  )
})