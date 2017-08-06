import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Navigation from './Navigation'
import PartyLevelHeader from './PartyLevelHeader'
import partyLevels from '../config/partyLevels.js'

export default class Level extends Component {
  render () {
    let level = partyLevels[this.props.match.params.id - 1]
    const { calculations } = this.props

    const { totalSections, completeSections } = level
    const isComplete = totalSections - completeSections === 0
    const link = (level.index) < partyLevels.length ?
      `/level/${level.index}/choices` :
      '/submit'

    return (
      <div>
        <Navigation showBack showBudget amounts={calculations} />

        <div className="Level">

          <PartyLevelHeader {...this.props} level={level} />

          <div className="Level__body">
            <h1 className="Level__title">{level.title}</h1>
            <p className="Level__desc">{level.desc}</p>
          </div>

          {
            isComplete ?
              <div className="Level__review-buttons">
                <Link to="/level/:level_id/budget/1"
                  className="Level__edit-button">
                  Revise
                </Link>
                <Link to="/dashboard"
                  className="Level__done-button">
                  Done
                </Link>
              </div>
            :
              <Link to={link}
                className="Level__next-button"
              >
                {(level.index) < partyLevels.length ? 'View Choices' : 'Review & Submit'}
              </Link>
          }

        </div>

      </div>
    )
  }
}
