import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import _ from 'underscore'

import check from '../images/check.svg'
import pencil from '../images/pencil.svg'
import lock from '../images/lock.svg'

const PartyLevel = (props) => {
  const {
    status,
    title,
    image,
    index,
    market,
    mode,
    guideway,
    serviceTimes,
  } = props

  const hasInvalidMode = _.contains([1, 5, 7], props.mode && props.mode.id)

  const levelOneReady = props.index === 1
  const levelOneComplete = props.index === 1 && props.market
  const levelTwoReady = props.index === 2 && !!props.market
  const levelTwoComplete = props.index === 2 && props.mode && !hasInvalidMode
  const levelThreeReady = props.index === 3 && !!props.mode && !hasInvalidMode
  const levelThreeComplete = props.index === 3 && props.guideway
  const levelFourReady = props.index === 4 && !!props.guideway
  const levelFourComplete = props.index === 4 && props.serviceTimes.hasDefaultValues === false
  const levelFiveReady = props.index === 5 && props.serviceTimes && props.guideway

  const isInProgress = levelOneReady || levelTwoReady || levelThreeReady ||
                       levelFourReady || levelFiveReady
  const isComplete = levelOneComplete || levelTwoComplete || levelThreeComplete || levelFourComplete
  const isLocked = !isInProgress && !isComplete

  const partyLevelCssClass = isComplete ? 'PartyLevel--complete' : 'PartyLevel'
  const imgCssClass = isLocked ? 'PartyLevel__image--unstarted' : 'PartyLevel__image'

  const statusIcon = () => {
    if (isComplete) {
      return check
    } else if (isInProgress) {
      return pencil
    } return lock
  }

  const titleCssClass = () => {
    if (isComplete || isInProgress) {
      return 'PartyLevel__title'
    } else {
      return 'PartyLevel__title--unstarted'
    }
  }

  const selectedChoices = [market, mode, guideway, serviceTimes];

  const selectedChoiceText = (index, selectedChoices) => {
    const selectedChoice = selectedChoices[index - 1]
    let text = selectedChoice && selectedChoice.title

    if (index === 2 && hasInvalidMode) text = 'Choose another mode'

    return text
  }

  return (
    // TODO: lock after debugging
    // false ?
    isLocked ?
      <div className={partyLevelCssClass}>
        <img src={`../images/${image}`}
          alt={title}
          className={imgCssClass}
        />
        <div className="PartyLevel__details">
          <img src={statusIcon()} alt={title} className="PartyLevel__status" />
          <h2 className={titleCssClass()}>{title}</h2>
          <span className="PartyLevel__progress">{selectedChoiceText(index, selectedChoices)}</span>
        </div>
      </div>
    :
      <Link to={props.link}>
        <div className={partyLevelCssClass}>
          <img src={`../images/${image}`}
            alt={title}
            className={imgCssClass}
          />
          <div className="PartyLevel__details">
            <img src={statusIcon()} alt={title} className="PartyLevel__status" />
            <h2 className={titleCssClass()}>{title}</h2>
            <span className="PartyLevel__progress">{selectedChoiceText(index, selectedChoices)}</span>
          </div>
        </div>
      </Link>
  )
}

export default PartyLevel

PartyLevel.propTypes = {
  status: PropTypes.string,
  percentChange: PropTypes.number,
  departments: PropTypes.arrayOf(PropTypes.number),
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  index: PropTypes.number,
  completeSections: PropTypes.number,
  link: PropTypes.string,
};
