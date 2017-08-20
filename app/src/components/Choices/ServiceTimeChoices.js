import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Header from './Header'

export default class ServiceTimeChoices extends Component {

  render() {
    const {
      activeChoice,
      serviceTimeChoices,
      handleChange,
    } = this.props

    return (
      <div>
        <Header {...this.props} />

        <div className="Choices__body">
          <h3 className="Choices__empty-text">
            Choose your desired operating hours and arrival frequency. (Select one option per category.)
          </h3>
          {serviceTimeChoices.map((serviceTime, i) => {
            return (
              <div key={i}>
                <h3>{serviceTime.title} ({serviceTime.times})</h3>
                <form onChange={e => handleChange(serviceTime, serviceTime.frequencyChoices[e.target.value])}>
                  {serviceTime.frequencyChoices.map((frequencyChoice, i) => {
                    const activeFrequencyId = activeChoice && (activeChoice[serviceTime.id] && activeChoice[serviceTime.id].frequencyId)
                    const isChecked = activeChoice ?
                      frequencyChoice.id === activeFrequencyId : false

                    return (
                      <div key={i}>
                        <input id={`${serviceTime.id}: ${frequencyChoice.id}`} type="radio"
                          value={frequencyChoice.id}
                          checked={isChecked}
                        />
                        <label htmlFor={`${serviceTime.id}: ${frequencyChoice.id}`}>
                          {frequencyChoice.value === null ? frequencyChoice.title : `Every ${frequencyChoice.title}`}
                        </label>
                      </div>
                    )
                  })}
                </form>
              </div>

            )
          })}
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
