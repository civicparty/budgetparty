import React from 'react'

const renderOverlay = (level) => {
  let sign = level.percentChange > 0 ? '+' : '-'
  if (level.percentChange === 0) sign = ''
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  })
  const serviceBudget = formatter.format(level.serviceBudget)

  return (
    <div className="PartyLevelHeader__overlay">
      <span className="PartyLevelHeader__status">You Did It!</span>
      <h2 className="PartyLevelHeader__value">
        {serviceBudget}
      </h2>
      <span className="PartyLevelHeader__change">
        {sign}{level.percentChange}% from Last Year
      </span>
    </div>
  )
}

const PartyLevelHeader = (props) => {
  const { level } = props
  const { totalSections, completeSections } = level
  const isComplete = totalSections - completeSections === 0

  const imgCssClass = isComplete ? 'PartyLevelHeader__image--complete' : 'PartyLevelHeader__image'

  return (
    <div className="PartyLevelHeader">
      { isComplete && renderOverlay(level) }
      <img
        src={`../images/${level.image.split(".")[0]}_full.svg`}
        alt={level.title}
        className={imgCssClass}
      />
    </div>
  )
}

export default PartyLevelHeader
