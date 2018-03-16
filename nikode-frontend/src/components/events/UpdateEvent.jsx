import React, { Component } from 'react';
import axios from 'axios';

class UpdateEvent extends Component {
  render() {
    return (
      <div className="updateEvent">
        Hi I'm a single event about to be edited
        <form onSubmit={this.props.onEventUpdateSubmit}>
          <p> Add Event: </p>
          <label>
            Title:
            <input
              type="text"
              name="title"
              onChange={this.props.onEventUpdateChange}
            />
          </label>

          <label>
            Location:
            <input
              type="text"
              name="location"
              onChange={this.props.onEventUpdateChange}
            />
          </label>

          <label>
            Date:
            <input
              type="text"
              name="date"
              placeholder="DD/MM/YYYY"
              onChange={this.props.onEventUpdateChange}
            />
          </label>

          <label>
            Start time:
            <input
              type="text"
              name="time"
              placeholder="6:00 PM"
              onChange={this.props.onEventUpdateChange}
            />
          </label>

          <label>
            Link:
            <input
              type="text"
              name="link"
              onChange={this.props.onEventUpdateChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default UpdateEvent;
