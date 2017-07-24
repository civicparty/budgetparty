import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Navigation from './Navigation'
import DropdownChoices from './Choices/Dropdown'
import partyLevels from '../config/partyLevels.js'
import marketChoices from '../config/marketChoices.js'
import modeChoices from '../config/modeChoices.js'

export default class Choices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeChoiceId: ''
    }

    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleSelectChange(e) {
    this.setState({ activeChoiceId: e.target.value });
  }

  render () {
    const level = partyLevels[this.props.match.params.level_id];
    const { activeChoiceId } = this.state;
    const choices = level.index === 1 ? marketChoices :
                    level.index === 2 ? modeChoices   : '';
    const activeChoice = choices[activeChoiceId];

    const imageStyle = {
      backgroundImage: activeChoice ? `url(/images/${activeChoice.image})` : '',
      backgroundSize: "cover",
      paddingTop: '65px',
      height: '200px',
    }
    return (
      <div>
        <Navigation {...this.props} showBack />

        <div className="Choices">

          { activeChoiceId ?
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

          {
            level.index === 1 || level.index === 2 ?
              <DropdownChoices {...this.props}
                level={level}
                choices={choices}
                activeChoiceId={activeChoiceId}
                activeChoice={activeChoice}
                handleSelectChange={this.handleSelectChange}
              /> : ''
          }
        </div>
      </div>
    )
  }
}
