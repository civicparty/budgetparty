import { connect } from 'react-redux'
import Submit from '../components/Submit/Index.js'
import { database } from '../config/constants'

import { userRestart } from '../actions/index'

// import any actions

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (userId, data, gameId) => {
      if (userId) {
        database.app.database()
                .ref(`users/${userId}/games/${gameId}`)
                .update({ comments: data })
      } else {
        database.app.database()
                .ref('userResults')
                .push(data)
      }

      dispatch(userRestart());
    },
  }
}

const SubmitContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Submit)

export default SubmitContainer
