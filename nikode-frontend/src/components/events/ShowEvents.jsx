import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import UpdateEvent from './UpdateEvent';

class ShowEvents extends Component {
  render() {
    const events = this.props.allEvents;
    console.log('EVENTS ARE:', events);
    if (events !== 'not loaded') {
      // let content;
      console.log(
        'this is this.props.currentEventName:',
        this.props.currentEventName,
      );
      console.log('this is props:', this.props);
      // if (this.props.eventEditing) {
      //   return (
      //     <div>
      //       <UpdateEvent /> /nikode/events/`${this.props.value}`
      //     </div>
      //   );
      // } else {
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

                <div> {event.info_link}</div>
                <button
                  value={event.id}
                  name={`event${event.id}`}
                  onClick={this.props.onEventEditClick}
                >
                  Edit
                </button>
              </div>
            );
          })}
        </div>
      );
      // }
      // console.log('this is content:', content);
      // return content;
    } else if (events === 'not loaded') {
      return <p>Loading...</p>;
    }
  }
}

export default ShowEvents;
