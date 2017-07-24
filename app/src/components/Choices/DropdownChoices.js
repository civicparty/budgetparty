import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class DropdownChoices extends Component {
  render() {
    const {
      activeChoice,
      activeChoiceId,
      level,
      choices,
      handleSelectChange,
    } = this.props

    return (
      <div className="Choices__body">
        <select name="modeChoice"
          onChange={handleSelectChange}
          className="Choices__mode-dropdown"
          value={activeChoiceId}
        >
          <option value="">Select a {level.title}</option>{
            choices.map((item) => {
              return (
                <option value={item.id} key={item.id}>
                  {item.type}
                </option>
              )
            })
        }</select>

        { activeChoiceId ?
          <div>
            <h2>{ activeChoice.type }</h2>
            <div className="Choices__description">
              { activeChoice.desc }
            </div>
            <Link to="/dashboard/" className="Choices__button" >
              Select & Continue
            </Link>
          </div>
          :
          <h3 className="Choices__empty-text">
            Choose a {level.title}<br /> to learn more about it
          </h3>
        }
      </div>
    )
  }
}
