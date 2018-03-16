import React, { Component } from 'react';
import axios from 'axios';

class SignUpPage extends Component {
  render() {
    return (
      <div className="LandingPage">
        <form onSubmit={this.props.onSignUpSubmit}>
          <p>Awesome, let's create an account </p>
          <label>
            Username:
            <input
              type="text"
              name="newUserName"
              onChange={this.props.onSignUpChange}
            />
          </label>

          <label>
            Password:
            <input
              type="text"
              name="newUserpassword"
              onChange={this.props.onSignUPChange}
            />
          </label>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default SignUpPage;
