import React, { Component } from 'react'
import { FormattedNumber } from 'react-intl'
import { Link } from 'react-router-dom'

import Header from './Header'

export default class GuidewayChoices extends Component {

  renderDescription(activeChoice, level) {
    return (
      <div>
        <p>{ activeChoice.desc }</p>
        <p>Average speed: {activeChoice.averageSpeed} mph</p>
        <p>Construction Cost per Mile: &nbsp;
          <FormattedNumber
            value={activeChoice.capitalCostPerMile || 0}
            style="currency" //eslint-disable-line
            currency="USD"
            minimumFractionDigits={0}
            maximumFractionDigits={0}
          />
        </p>
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
