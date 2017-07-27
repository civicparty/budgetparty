import React, { Component } from 'react'
import _ from 'underscore'

import Navigation from '../Navigation'
import DropdownChoices from './DropdownChoices'
import CheckboxChoices from './CheckboxChoices'
import partyLevels from '../../config/partyLevels'
import marketChoices from '../../config/marketChoices'
import modeChoices from '../../config/modeChoices'
import serviceTimeChoices from '../../config/serviceTimeChoices'

export default class Choices extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, levelId) {
    const selectId = e.target.value;
    const selectText = e.target.options ?
      e.target.options[e.target.selectedIndex].text :
      e.target.labels[0].textContent;
    debugger


    return levelId === 1 ? this.props.onSelectMarket(selectId, selectText) :
           levelId === 2 ? this.props.onSelectMode(selectId, selectText) :
           levelId === 3 ? this.props.onSelectGuideway(selectId, selectText) :
           levelId === 4 ? this.props.onSelectTimes(selectId, selectText) : ''
  }

  render() {
    const level = partyLevels[this.props.match.params.level_id];
    const showDropdown = _.contains([1, 2, 3], level.index);
    const { marketId, modeId, guidewayId } = this.props.choices;

    const guidewayChoices = modeId && modeChoices[modeId.id] ?
                              modeChoices[modeId.id].guidewayChoices :
                              modeChoices[0].guidewayChoices;

    const choices = level.index === 1 ? marketChoices :
                    level.index === 2 ? modeChoices :
                    level.index === 3 ? guidewayChoices :
                    level.index === 4 ? serviceTimeChoices : '';

    const activeChoiceId = level.index === 1 ? marketId && marketId.id :
                           level.index === 2 ? modeId && modeId.id :
                           level.index === 3 ? guidewayId && guidewayId.id : '';

    const activeChoice = activeChoiceId ? choices[activeChoiceId - 1] : ''

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
            showDropdown &&
              <DropdownChoices {...this.props}
                level={level}
                choices={choices}
                activeChoiceId={activeChoiceId}
                activeChoice={activeChoice}
                handleChange={this.handleChange}
              />
          }

          {
            !showDropdown &&
              <CheckboxChoices {...this.props}
                handleChange={this.handleChange}
                choices={choices}
                level={level}
                activeChoiceId={activeChoiceId}
                activeChoice={activeChoice}
              />
          }
        </div>
      </div>
    )
  }
}
