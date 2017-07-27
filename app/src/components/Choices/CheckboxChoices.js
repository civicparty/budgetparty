import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class CheckboxChoices extends Component {
  render() {
    const {
      activeChoice,
      level,
      choices,
      handleChange,
    } = this.props

    return (
      <div className="Choices__body">

        {choices.map((option) => {
          const isChecked = activeChoice && activeChoice.find((item) => {
            return (item.id === option.id) && item.checked
          })

          return (
            <p key={option.id}>
              <input type="checkbox" value={option.id} id={option.id}
                name={option.type} checked={isChecked}
                onChange={e => handleChange(e, level.index)}
              />
              <label htmlFor={option.id}>{option.title} ({option.times})</label>
            </p>
          )
        })}

        <Link to="/dashboard/" className="Choices__button" >
          Confirm & Continue
        </Link>
      </div>
    )
  }
}
