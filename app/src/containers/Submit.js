import { connect } from 'react-redux'
import Submit from '../components/Submit/Index.js'
import { database } from '../config/constants'

// import any actions

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (userId, data, gameId) => {
      if (userId) {
        return database.app.database()
                .ref(`users/${userId}/games/${gameId}`)
                .update({ comments: data })
      } else {
        return database.app.database()
                .ref('userResults')
                .push(data)
      }
    },
  }
}

const SubmitContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Submit)

export default SubmitContainer
