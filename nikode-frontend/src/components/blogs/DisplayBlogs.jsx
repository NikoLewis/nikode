import React, { Component } from 'react';
// import axios from 'axios';
import moment from 'moment';
// import UpdateEvent from './UpdateEvent';

class DisplayBlogs extends Component {
  render() {
    // {events.map(event => {
    //       return (
    //         <div key={event.id} className="single-event">
    //           <div>
    //             {event.title} @{event.where}
    //           </div>
    //           <div>
    //             {moment(event.date).format('MMMM Do YYYY')} @{moment(
    //               event.time,
    //             ).format('h:mm a')}}
    //           </div>

    //           <div> {event.info_link}</div>
    //           <button
    //             value={event.id}
    //             name={`event${event.id}`}
    //             onClick={this.props.onEventEditClick}
    //           >
    //             Edit
    //           </button>
    //         </div>
    //       );
    //     })}
    return <div className="blogs">this will be the blog feed</div>;
  }
}

export default DisplayBlogs;
