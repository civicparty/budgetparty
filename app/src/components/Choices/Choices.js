import React, { Component } from 'react'
import _ from 'underscore'

import Navigation from '../Navigation'
import RouteChoices from './RouteChoices'
import GuidewayChoices from './GuidewayChoices'
import TransitModeChoices from './TransitModeChoices'
import ServiceTimeChoices from './ServiceTimeChoices'
import partyLevels from '../../config/partyLevels'
import routeChoices from '../../config/routeChoices'
import modeChoices from '../../config/modeChoices'
import serviceTimeChoices from '../../config/serviceTimeChoices'

export default class Choices extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleServiceTimeChange = this.handleServiceTimeChange.bind(this);
  }

  componentWillMount() {
    // this.props.onUpdateAmounts(this.props.choices);
  }

  componentWillReceiveProps(nextProps) {
    const { choices, onUpdateAmounts } = nextProps
    const { user, gameId } = this.props

    if (choices !== this.props.choices) {
      onUpdateAmounts(choices, user.uid, gameId);
    }
  }

  handleChange(e, levelId, currentChoices) {
    const {
      onSelectMarket,
      onSelectMode,
      onSelectGuideway,
      onConfirmSelectTimes,
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
    onSelectTimes(newServiceTimeId, newFrequencyChoiceId)
  }

  render() {
    const level = partyLevels[this.props.match.params.level_id - 1];
    const showDropdown = _.contains([2, 3], level.index);
    const { calculations } = this.props;
    const { market, mode, guideway, serviceTimes } = this.props.choices;

    const guidewayChoices = mode && modeChoices[mode.id - 1] ?
                              modeChoices[mode.id - 1].guidewayChoices :
                              [''];

    const choices = level.index === 1 ? routeChoices :
                    level.index === 2 ? modeChoices :
                    level.index === 3 ? guidewayChoices :
                    level.index === 4 ? serviceTimeChoices : '';

    const activeChoiceId = level.index === 1 ? market && market.id :
                           level.index === 2 ? mode && mode.id :
                           level.index === 3 ? guideway && guideway.id : '';

    const activeChoice = activeChoiceId ? choices[activeChoiceId - 1] :
                         level.index === 4 ? serviceTimes : '';

    return (
      <div>
        <Navigation showBack showBudget amounts={calculations} />

        <div className="Choices">

          {
            (level.index === 1) &&
              <RouteChoices {...this.props}
                level={level}
                choices={choices}
                activeChoiceId={activeChoiceId}
                activeChoice={activeChoice}
                handleChange={this.handleChange}
              />
          }

          {
            (level.index === 2) &&
              <TransitModeChoices
                level={level}
                choices={choices}
                activeChoiceId={activeChoiceId}
                activeChoice={activeChoice}
                activeRouteType={market}
                handleChange={this.handleChange}
              />
          }

          {
            (level.index === 3) &&
              <GuidewayChoices {...this.props}
                level={level}
                choices={choices}
                activeChoiceId={activeChoiceId}
                activeChoice={activeChoice}
                handleChange={this.handleChange}
              />
          }

          {
            (level.index === 4) &&
              <ServiceTimeChoices
                handleChange={this.handleServiceTimeChange}
                toogleDefaults = {this.props.onConfirmSelectTimes}
                serviceTimeChoices={choices}
                level={level}
                activeChoice={activeChoice}
              />
          }
        </div>
      </div>
    )
  }
}
