import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Header from './Header'

export default class TransitModeChoices extends Component {

  renderDescription(activeChoice, level) {
    return (
      <div>
        <p>{ activeChoice.desc }</p>
        { !activeChoice.disabled &&
          <div>
            <p>Passenger capacity: {activeChoice.capacityPerVehicle} (seated)</p>
            <p>Frequency: {activeChoice.frequency}</p>
            <p>Route Distance: {activeChoice.routeDistance}</p>
            <p>Distance between rail stops: {activeChoice.distanceBetweenStops}</p>
          </div>
        }
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
        <Header {...this.props} />

        <div className="Choices__body">
          <h1 className="center-text">{level.title} Options</h1>

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
                        className="TransitModeChoices__input"
                        id={`route_choice_${item.id}`}
                        checked={activeChoiceId === item.id}
                      />
                      <label htmlFor={`route_choice_${item.id}`}
                        className={`TransitModeChoices__labelText${activeChoice.disabled ? '--invalid' : ''}`}>
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

          { activeChoice && !activeChoice.disabled ?
            <Link to="/dashboard/" className="Choices__button">
              Select & Continue
            </Link>
            : activeChoice.disabled ?
              <div className="Choices__button--invalid">Invalid Option</div>
            : ''
          }
        </div>
      </div>
    )
  }
}
