import React, { Component } from 'react';
import axios from 'axios';

import { BrowserRouter as Router, Link } from 'react-router-dom';

class LandingPage extends Component {
  render() {
    return (
      <div className="LandingPage">
        <Link to="/nikode/signup">SignUp</Link>
        <form onSubmit={this.props.onLoginSubmit}>
          <p>Welcome back, Login please </p>
          <label>
            Username:
            <input
              type="text"
              name="userNameAttempt"
              onChange={this.props.onLoginChange}
            />
          </label>

          <label>
            Password:
            <input
              type="text"
              name="passwordAttempt"
              onChange={this.props.onLoginChange}
            />
          </label>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default LandingPage;
