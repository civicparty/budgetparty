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
    // this.state = {
    //   activeChoiceId: '',
    // }
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleSelectChange(e) {
    this.props.onSelectMarket(e.target.value);
    // this.setState({ activeChoiceId: e.target.value });
  }

  render() {
    console.log(this.props.choices)
    const level = partyLevels[this.props.match.params.level_id];
    const { marketId, modeId, guidewayId } = this.props.choices;
    const guidewayChoices = modeId ?
                              modeChoices[modeId].guidewayChoices :
                              modeChoices[0].guidewayChoices;
    const choices = level.index === 1 ? marketChoices :
                    level.index === 2 ? modeChoices :
                    level.index === 3 ? guidewayChoices : '';
    const activeChoiceId = level.index === 1 ? marketId :
                    level.index === 2 ? modeId :
                    level.index === 3 ? guidewayId : '';
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
