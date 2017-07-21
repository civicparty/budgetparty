import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Navigation from './Navigation'
import partyLevels from '../config/partyLevels.js'
import modeChoices from '../config/modeChoices.js'

export default class Choices extends Component {
  constructor(props) {
    super(props);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleSelectChange(e) {
    console.log('handlingSelectChange', e.target.value)
    this.props.changeModeSelect(e.target.value);
  }

  render () {
    const level = partyLevels[this.props.match.params.level_id];
    debugger
    const { activeModeId } = this.props.state;
    const activeMode =  modeChoices[activeModeId];

    const imageStyle = {
      backgroundImage: activeMode ? `url(/images/${activeMode.image})` : '',
      backgroundSize: "cover",
    }

    return (
      <div>
        <Navigation {...this.props}
          level={level}
          isAuthed={this.props.isAuthed}
          handleLogout={this.props.handleLogout}
        />

        <div className="Choices">
          { activeModeId ?
            <div className="Choices__cover" style={imageStyle}>
              <div className="Choices__cover-overlay"></div>
            </div>
            :
            <div className="PartyLevelHeader">
              <img src={`/images/${level.image.split(".")[0]}_full.svg`}
                alt={level.title}
                className="PartyLevelHeader__image"
              />
            </div>
          }

          <div className="Choices__body">

            <select name="modeChoice"
              onChange={this.handleSelectChange}
              className="Choices__mode-dropdown"
            >
              <option value="">Select a Transit Mode</option>
              { modeChoices.map( item => {
                return (
                  <option value={item.id} key={item.id}>
                    {item.type}
                  </option>
                )
              }) }
            </select>

            { activeModeId ?
              <div>
                <h2>{ activeMode.type }</h2>
                <div className="Choices__description">
                  { activeMode.desc }
                </div>
                <Link to={`/dashboard/`} className="Choices__button" >
                  Select & Continue
                </Link>
              </div>
              :
              <h3 className="Choices__empty-text">
                Choose a transit option<br/>to learn more about it
              </h3>
            }

          </div>
        </div>
      </div>
    )
  }
}
