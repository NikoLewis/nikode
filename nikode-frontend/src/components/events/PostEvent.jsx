import React, { Component } from 'react';
import axios from 'axios';
// import moment from 'moment';

class PostEvent extends Component {
  // defaultValue={this.props.title}
  render() {
    return (
      <div className="addEvent">
        <form onSubmit={this.props.onEventSubmit}>
          <p> Add Event: </p>
          <label>
            Title:
            <input
              type="text"
              name="title"
              onChange={this.props.onEventChange}
            />
          </label>

          <label>
            Location:
            <input
              type="text"
              name="location"
              onChange={this.props.onEventChange}
            />
          </label>

          <label>
            Date:
            <input
              type="text"
              name="date"
              placeholder="DD/MM/YYYY"
              onChange={this.props.onEventChange}
            />
          </label>

          <label>
            Start time:
            <input
              type="text"
              name="time"
              placeholder="6:00 PM"
              onChange={this.props.onEventChange}
            />
          </label>

          <label>
            Link:
            <input
              type="text"
              name="link"
              onChange={this.props.onEventChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default PostEvent;
