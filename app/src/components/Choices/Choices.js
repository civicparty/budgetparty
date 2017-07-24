import React, { Component } from 'react'
import _ from 'underscore'

import Navigation from '../Navigation'
import DropdownChoices from './DropdownChoices'
import partyLevels from '../../config/partyLevels'
import marketChoices from '../../config/marketChoices'
import modeChoices from '../../config/modeChoices'

export default class Choices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeChoiceId: '',
    }

    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleSelectChange(e) {
    this.setState({ activeChoiceId: e.target.value });
  }

  render() {
    const level = partyLevels[this.props.match.params.level_id];
    const { activeChoiceId } = this.state;
    const guidewayChoices = activeChoiceId ?
                              modeChoices[activeChoiceId].guidewayChoices :
                              modeChoices[0].guidewayChoices;
    const choices = level.index === 1 ? marketChoices :
                    level.index === 2 ? modeChoices :
                    level.index === 3 ? guidewayChoices : '';
    const activeChoice = activeChoiceId ? choices[activeChoiceId] : choices[0]
    const showDropdown = _.contains([1, 2, 3], level.index);

    const imageStyle = {
      backgroundImage: activeChoice ? `url(/images/${activeChoice.image})` : '',
      backgroundSize: 'cover',
      paddingTop: '65px',
      height: '200px',
    }

    return (
      <div>
        <Navigation {...this.props} showBack />

        <div className="Choices">

          { activeChoiceId ?
            <div className="Choices__cover" style={imageStyle}>
              <div className="Choices__cover-overlay" />
            </div>
            :
            <div className="PartyLevelHeader">
              <img src={`/images/${level.image.split('.')[0]}_full.svg`}
                alt={level.title}
                className="PartyLevelHeader__image"
              />
            </div>
          }

          {
            showDropdown ?
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
