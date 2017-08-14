import React, { Component } from 'react'

export default class TransitModeChoices extends Component {

  renderDescription(activeChoice, level) {
    return (
      <div>
        <p>{ activeChoice.desc }</p>
        <p>Passenger capacity: {activeChoice.capacityPerVehicle} (seated)</p>
        <p>Frequency: {activeChoice.frequency}</p>
        <p>Route Distance: {activeChoice.routeDistance}</p>
        <p>Distance between rail stops: {activeChoice.distanceBetweenStops}</p>
      </div>
    )
  }

  render() {
    const {
      level,
      choices,
      handleChange,
      activeChoice,
      activeChoiceId,
    } = this.props;

    const imageStyle = {
      backgroundImage: activeChoice ? `url(/images/${activeChoice.image})` : '',
      backgroundSize: 'cover',
      paddingTop: '65px',
    }

    return (
      <div>
        {
          activeChoiceId ?
            <div className="Choices__cover" style={imageStyle}>
              <div className="Choices__cover-overlay" />
            </div>
            :
            <div className="PartyLevelHeader">
              <img src={`/images/${level.image.split('.')[0]}_full.svg`}
                alt={level.title}
                className="PartyLevelHeader__image"
              />
            </div>
        }

        <div className="padded-body">
          <h1>{level.title} Options</h1>

          {
            !activeChoiceId &&
              <h3 className="Choices__empty-text">
                Choose a {level.title}<br /> to learn more about it
              </h3>
          }

          <form onChange={e => handleChange(e, level.index, choices)}>
            <ul className="TransitModeChoices">
              {
                choices.map((item) => {
                  return (
                    <li key={item.id} className="TransitModeChoices__button">
                      <input type="radio" value={item.id}
                        className="TransitModeChoices__hideInput"
                        id={`route_choice_${item.id}`}
                        checked={activeChoiceId === item.id}
                      />
                      <label htmlFor={`route_choice_${item.id}`}
                        className="TransitModeChoices__labelText">
                        {item.title}
                      </label>
                    </li>
                  )
                })
              }
            </ul>
          </form>

          { activeChoiceId &&
            <div>
              <h2>{ activeChoice.title }</h2>
              <div className="Choices__description">
                { this.renderDescription(activeChoice, level) }
              </div>
            </div>
          }
        </div>
      </div>
    )
  }
}
