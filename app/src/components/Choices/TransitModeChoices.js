import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import _ from 'underscore'

import Header from './Header'

export default class TransitModeChoices extends Component {

  renderDescription(activeChoice, level, activeRouteTitle) {
    return (
      <div>
        <p>{ activeChoice.desc }</p>
        { !activeChoice.disabled &&
          <div>
            <p>Passenger capacity: {activeChoice.capacityPerVehicle} (seated)</p>
            <p>Optimal route distance: {activeChoice.routeDistance}</p>
            <p>Distance between rail stops: {activeChoice.distanceBetweenStops}</p>
          </div>
        }
        { !activeChoice.disabled && !_.contains(activeChoice.routeType, activeRouteTitle) &&
          <div className="error-text strong">
            <p>The {activeChoice.title} Mode Option is incompatible with the {activeRouteTitle} Route Type you chose in the previous level.</p>
            <p>Go back and select a different Route Type if you would like to use {activeChoice.title}.</p>
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
      activeRouteType,
    } = this.props;

    const imageStyle = {
      backgroundImage: activeChoice ? `url(/images/${activeChoice.image})` : '',
      backgroundSize: 'cover',
      paddingTop: '65px',
    }

    const activeRouteTitle = activeRouteType && activeRouteType.title

    return (
      <div>
        <Header {...this.props} />

        <div className="Choices__body">
          <h1 className="TransitModeChoices__h1">{level.title} Options</h1>

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
                  const isDeemphasized = !_.contains(item.routeType, activeRouteTitle)
                  const buttonClass = `TransitModeChoices__button${isDeemphasized ? '--deemphasize' : ''}`
                  const labelClass = `TransitModeChoices__labelText${isDeemphasized ? '--invalid' : ''}`

                  return (
                    <li key={item.id} className={buttonClass}>
                      <input type="radio" value={item.id}
                        className="TransitModeChoices__input"
                        id={`route_choice_${item.id}`}
                        checked={activeChoiceId === item.id}
                      />
                      <label htmlFor={`route_choice_${item.id}`}
                        className={labelClass}>
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
                { this.renderDescription(activeChoice, level, activeRouteTitle) }
              </div>
            </div>
          }

          {
            activeChoiceId && !_.contains(activeChoice.routeType, activeRouteTitle) && !activeChoice.disabled
            ?
              <Link to="/level/1/choices" className="Choices__button--nuetral">
                Go Back to Routes
              </Link>
            :
            activeChoice && !activeChoice.disabled ?
              <Link to="/dashboard/" className="Choices__button">
                Select & Continue
              </Link>
            :
            activeChoice.disabled ?
              <div className="Choices__button--invalid">Invalid Option</div>
            : ''
          }
        </div>
      </div>
    )
  }
}
