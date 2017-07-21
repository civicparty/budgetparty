
import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as selectActions from '../actions/index'

import Choices from './Choices'



function mapStateToProps(state, props) {
  return {
    select: state.select
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(selectActions, dispatch)
  }
}

class ClassContainer extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    debugger
    return <Choices {...this.props} changeModeSelect={this.props.actions.selectTransitMode} />
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassContainer);
