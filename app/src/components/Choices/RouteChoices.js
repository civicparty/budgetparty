import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Header from './Header'

export default class RouteChoices extends Component {

  renderDescription(activeChoice, level) {
    return (
      <div>
        <p>{ activeChoice.desc }</p>
        <p>Route Distance: {activeChoice.distance} miles</p>
        <p>Project Budget: ${activeChoice.budget / 1000000} million</p>
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

    return (
      <div>
        <Header {...this.props} overlay="false" />

        <div className="padded-body">
          <h1 className="center-text">{level.title} Options</h1>

          <form onChange={e => handleChange(e, level.index, choices)}>
            <ul className="RouteChoices">
              {
                choices.map((item) => {
                  return (
                    <li key={item.id} className="RouteChoices__button">
                      <input type="radio" value={item.id}
                        className="RouteChoices__hideInput"
                        id={`route_choice_${item.id}`}
                        checked={activeChoiceId === item.id}
                      />
                      <label htmlFor={`route_choice_${item.id}`}
                        className="RouteChoices__label"
                      >
                        <img src={`/images/${item.image}`}
                          className="RouteChoices__img"
                          alt={`${item.title} icon`}
                        />
                        <span className="RouteChoices__labelText">{item.title}</span>
                      </label>
                    </li>
                  )
                })
              }
            </ul>
          </form>

          { activeChoiceId ?
            <div>
              <h2>{ activeChoice.title }</h2>
              <div className="Choices__description">
                { this.renderDescription(activeChoice, level) }
              </div>
            </div>
            :
            <h3 className="Choices__empty-text">
              Choose a {level.title}<br /> to learn more about it
            </h3>
          }

          { activeChoice &&
            <Link to="/dashboard/" className="Choices__button">
              Select & Continue
            </Link>
          }
        </div>
      </div>
    )
  }
}
