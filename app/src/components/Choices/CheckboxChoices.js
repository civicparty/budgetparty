import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class CheckboxChoices extends Component {
  render() {
    const {
      activeChoice,
      activeChoiceId,
      level,
      choices,
      handleChange,
    } = this.props

    return (
      <div className="Choices__body">

        {choices.map((option) => {
          return (
            <p>
              <input type="checkbox" value={option.id} id={option.id} name={option.type}
                onChange={e => handleChange(e, level.index)}
              />
              <label htmlFor={option.id}>{option.type}</label>
            </p>
          )
        })}
      </div>
      //
      // <div className="Choices__body">
      //   <select name="modeChoice"
      //     onChange={e => handleSelectChange(e, level.index)}
      //     className="Choices__mode-dropdown"
      //     value={activeChoiceId}
      //   >
      //     <option value="">Select a {level.title}</option>{
      //       choices.map((item) => {
      //         return (
      //           <option value={item.id} key={item.id}>
      //             {item.type}
      //           </option>
      //         )
      //       })
      //   }</select>
      //
      //   { activeChoiceId ?
      //     <div>
      //       <h2>{ activeChoice.type }</h2>
      //       <div className="Choices__description">
      //         { activeChoice.desc }
      //       </div>
      //       <Link to="/dashboard/" className="Choices__button" >
      //         Select & Continue
      //       </Link>
      //     </div>
      //     :
      //     <h3 className="Choices__empty-text">
      //       Choose a {level.title}<br /> to learn more about it
      //     </h3>
      //   }
      // </div>
    )
  }
}
