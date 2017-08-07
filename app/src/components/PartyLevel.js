import React from 'react'
import PropTypes from 'prop-types';
import check from '../images/check.svg'
import pencil from '../images/pencil.svg'
import lock from '../images/lock.svg'

const PartyLevel = (props) => {
  const {
    status,
    percentChange,
    departments,
    title,
    image,
    index,
    completeSections,
    market,
    mode,
    guideway,
    serviceTimes,
  } = props

  const isComplete = status === 'complete' || (departments && departments.length === completeSections)
  const isInProgress = status === 'ready' || status === 'in_progress'
  const isLocked = !status || status === 'locked' || status === null
  const incrOrDecr = percentChange > 0 ? 'Increased' : 'Decreased'

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
    const title = selectedChoice && selectedChoice.title

    return title
  }

  return (
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
};
