import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import _ from 'underscore'

import Navigation from '../Navigation'
import DropdownChoices from './DropdownChoices'
import ServiceTimeChoices from './ServiceTimeChoices'
import partyLevels from '../../config/partyLevels'
import marketChoices from '../../config/marketChoices'
import modeChoices from '../../config/modeChoices'
import serviceTimeChoices from '../../config/serviceTimeChoices'

export default class Choices extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleServiceTimeChange = this.handleServiceTimeChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { choices, onUpdateAmounts } = nextProps

    if (choices !== this.props.choices) {
      onUpdateAmounts(choices);
    }
  }

  handleChange(e, levelId, currentChoices) {
    const {
      onSelectMarket,
      onSelectMode,
      onSelectGuideway,
      choices,
    } = this.props

    const selectId = e.target.value;
    const newChoice = currentChoices.find(item => Number(selectId) === item.id)

    return levelId === 1 ? onSelectMarket(newChoice) :
           levelId === 2 ? onSelectMode(newChoice) :
           levelId === 3 ? onSelectGuideway(newChoice) : ''
  }

  handleServiceTimeChange(newServiceTimeId, newFrequencyChoiceId) {
    const { onSelectTimes } = this.props;
    console.log(newServiceTimeId, ': ', newFrequencyChoiceId)

    onSelectTimes(newServiceTimeId, newFrequencyChoiceId)
  }

  render() {
    const level = partyLevels[this.props.match.params.level_id - 1];
    const showDropdown = _.contains([1, 2, 3], level.index);
    const { calculations } = this.props;
    const { market, mode, guideway, serviceTimes } = this.props.choices;

    const guidewayChoices = mode && modeChoices[mode.id] ?
                              modeChoices[mode.id].guidewayChoices :
                              modeChoices[0].guidewayChoices;

    const choices = level.index === 1 ? marketChoices :
                    level.index === 2 ? modeChoices :
                    level.index === 3 ? guidewayChoices :
                    level.index === 4 ? serviceTimeChoices : '';

    const activeChoiceId = level.index === 1 ? market && market.id :
                           level.index === 2 ? mode && mode.id :
                           level.index === 3 ? guideway && guideway.id : '';

    const activeChoice = activeChoiceId ? choices[activeChoiceId - 1] :
                         level.index === 4 ? serviceTimes : '';

    const imageStyle = {
      backgroundImage: activeChoice ? `url(/images/${activeChoice.image})` : '',
      backgroundSize: 'cover',
      paddingTop: '65px',
      height: '200px',
    }

    return (
      <div>
        <Navigation showBack showBudget amounts={calculations} />

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
              <ServiceTimeChoices
                handleChange={this.handleServiceTimeChange}
                serviceTimeChoices={choices}
                level={level}
                activeChoice={activeChoice}
              />
          }
          <Link to="/dashboard/" className="Choices__button">
            Select & Continue
          </Link>
        </div>
      </div>
    )
  }
}
