import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Navigation from './Navigation'
import PartyLevelHeader from './PartyLevelHeader'
import partyLevels from '../config/partyLevels.js'

export default class Level extends Component {
  render () {
    let level = partyLevels[this.props.match.params.id]

    const { totalSections, completeSections } = level
    const isComplete = totalSections - completeSections === 0

    return (
      <div>
        <Navigation {...this.props}
          showBack
          level={level}
          isAuthed={this.props.isAuthed}
          handleLogout={this.props.handleLogout}
        />

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
              <Link to={`/level/${level.index}/choices`}
                className="Level__next-button"
              >
                {(level.index + 1) < partyLevels.length ? 'View Choices' : 'Review Final Budget'}
              </Link>
          }

        </div>

      </div>
    )
  }
}
