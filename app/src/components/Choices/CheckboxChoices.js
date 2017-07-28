import React, { Component } from 'react'

export default class CheckboxChoices extends Component {
  constructor(props) {
    super(props)
  }

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
                name={option.title} checked={isChecked}
                onChange={e => handleChange(e, level.index, choices)}
                ref={input => this.input = input}
                defaultChecked={false}
              />
              <label htmlFor={option.id}>{option.title} ({option.times})</label>
            </p>
          )
        })}
      </div>
    )
  }
}
