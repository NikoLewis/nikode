import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';

class ShowEvents extends Component {
  render() {
    const events = this.props.allEvents;
    console.log('EVENTS ARE:', events);
    if (events !== 'not loaded') {
      return (
        <div className="events">
          {events.map(event => {
            return (
              <div key={event.id} className="single-event">
                <div>
                  {event.title} @{event.where}
                </div>
                <div>
                  {moment(event.date).format('MMMM Do YYYY')} @{moment(
                    event.time,
                  ).format('h:mm a')}}
                </div>

                <div> {event.summary}</div>
              </div>
            );
          })}
        </div>
      );
    } else if (events === 'not loaded') {
      return <p>Loading...</p>;
    }
  }
}

export default ShowEvents;
