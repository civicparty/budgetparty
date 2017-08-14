import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class CheckboxChoices extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      activeChoice,
      level,
      serviceTimeChoices,
      handleChange,
    } = this.props

    // <p key={option.id}>
    //   <input type="checkbox" value={option.id} id={option.id}
    //     name={option.title} checked={isChecked}
    //     onChange={e => handleChange(e, level.index, serviceTimeChoices)}
    //     ref={input => this.input = input}
    //     defaultChecked={false}
    //   />
    //   <label htmlFor={option.id}>{option.title} ({option.times})</label>
    // </p>

    return (
      <div className="Choices__body">

        {serviceTimeChoices.map((serviceTime) => {
          return (
            <div>
              <h3>{serviceTime.title} ({serviceTime.times})</h3>
              <form onChange={e => handleChange(serviceTime, serviceTime.frequencyChoices[e.target.value])}>
                {serviceTime.frequencyChoices.map((frequencyChoice) => {
                  const isChecked = activeChoice && activeChoice.find((choice) => {
                    return (choice.frequency.id === frequencyChoice.id) &&
                      (choice.serviceTime.id === serviceTime.id)
                  })

                  return (
                    <div>
                      <input id={`${serviceTime.id}: ${frequencyChoice.id}`} type="radio"
                        value={frequencyChoice.id}
                        checked={isChecked}
                      />
                      <label htmlFor={`${serviceTime.id}: ${frequencyChoice.id}`}>
                        {frequencyChoice.title}
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
    )
  }
}
