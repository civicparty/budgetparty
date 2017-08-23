import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import ProgressBar from '../ProgressBar'

class SavePage extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      name: (props.user && props.user.displayName) || '',
      email: (props.user && props.user.email) || '',
      zipcode: '',
      transitUse: '',
      placement: '',
    }
  }

  handleSubmit = (userId, data, gameId) => {
    this.props.onSubmit(userId, data, gameId)
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    const { user, gameId } = this.props;

    const userData = {
      transitUse: this.state.transitUse,
      name: this.state.name,
      email: this.state.email,
      zipcode: this.state.zipcode,
      placement: this.state.placement,
    }

    return (
      <div className="Submit__save-body">
        <h3 className="Submit__title">Save & Submit</h3>

        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" placeholder="Name"
          onChange={this.handleChange} value={this.state.name}
        />

        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" placeholder="Email"
          onChange={this.handleChange} value={this.state.email}
        />

        <label htmlFor="zipcode">Zipcode</label>
        <input type="text" name="zipcode" id="zipcode" placeholder="Zipcode" pattern="[0-9]{5}"
          onChange={this.handleChange} value={this.state.zipcode}
        />

        <label htmlFor="placement">Where would you choose to place the route you just designed?</label>
        <textarea type="textarea" name="placement" id="placement" placeholder="Add your comments here"
          onChange={this.handleChange} value={this.state.placement}
        />

        <label htmlFor="transitUse">How often do you currently use public transit? What do you use it for?</label>
        <textarea type="textarea" name="transitUse" id="transitUse" placeholder="Add your comments here"
          onChange={this.handleChange} value={this.state.transitUse}
        />

        <div className="Submit__review-buttons">
          <Link to="/dashboard" className="Service__edit-button">
            Revise
          </Link>
          <Link to="/done" className="Service__done-button"
            onClick={this.handleSubmit.bind(this, user.uid, userData, gameId)}
          >
            Submit
          </Link>
        </div>

        <ProgressBar x={4} y={4} />
      </div>
    )
  }

}

SavePage.propTypes = {
  funds: PropTypes.shape({
    sumOfServiceSpending: PropTypes.number.isRequired,
    servicesSumPercentChange: PropTypes.number.isRequired,
  }).isRequired,
  departments: PropTypes.arrayOf(PropTypes.object),
  onSubmit: PropTypes.func.isRequired,
  user: PropTypes.shape({
    email: PropTypes.string,
    displayName: PropTypes.string,
  }),
};

export default SavePage;
