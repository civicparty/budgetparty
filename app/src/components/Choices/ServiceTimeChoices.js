import React, { Component } from 'react'

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

          const isChecked = activeChoice && activeChoice.find((item) => {
            return (item.id === serviceTime.id) && item.checked
          })

          return (
            <div>
              <h3>{serviceTime.title} ({serviceTime.times})</h3>
              <form onChange={e => handleChange(serviceTime, serviceTime.frequencyChoices[e.target.value])}>
                {serviceTime.frequencyChoices.map((frequencyChoice) => {
                  return (
                    <div>
                      <input id={`${serviceTime.id}: ${frequencyChoice.id}`} type="radio"
                        value={frequencyChoice.id}
                        checked={false}
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
      </div>
    )
  }
}
