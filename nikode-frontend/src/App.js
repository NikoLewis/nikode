import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import './App.css';
import axios from 'axios';

import Events from './components/events/ShowEvents';
import PostEvent from './components/events/PostEvent';

import NavBar from './components/NavBar';
import Header from './Header';

class App extends Component {
  // # PATCH/PUT /events/1
  constructor(props) {
    super(props);
    this.state = {
      events: 'not loaded',
      title: '',
      eventEditing: false,
      currentEventId: '',
      currentEventName: '',
    };
    this.allEvents = this.allEvents.bind(this);
    this.handleEventChange = this.handleEventChange.bind(this);
    this.handleEventSubmit = this.handleEventSubmit.bind(this);
    this.onEventEditClick = this.onEventEditClick.bind(this);
  }

  allEvents() {
    axios
      .get('http://localhost:3000/events')
      .then(response => {
        this.setState({ events: response.data });
        // console.log(this.state.events);
      })
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.allEvents();
  }

  handleEventChange(event) {
    event.preventDefault();
    let name = event.target.name;
    console.log('name is:', name);
    console.log('event.target.value', event.target.value);

    this.setState({ [name]: event.target.value });
    console.log('this.state', this.state);
  }

  handleEventSubmit(event) {
    event.preventDefault();
    // console.log('current state ===>', this.state);
    // console.log('this is the future tweed ===>', this.state.aTweed);
    axios
      .post('http://localhost:3000/events', {
        event: {
          title: this.state.title,
          where: this.state.location,
          info_link: this.state.link,
          time: this.state.time,
          date: this.state.date,
        },
      })
      .then(response => {
        console.log('event added successfully');
        this.allEvents();
      })
      .catch(err => {
        console.log('err is', err);
      });
  }

  showEventEditInfo(event) {
    // console.log('state after onEventEditClick', this.state);
    console.log('event.target.value', event.target.value);
    console.log('event.target.name', event.target.name);
    console.log('eventEditing:', this.state.eventEditing);
  }
  onEventEditClick(event) {
    // event.target.name = `event${event.id}`
    event.preventDefault();
    this.setState({
      eventEditing: true,
      currentEventId: event.target.value,
      currentEventName: event.target.name,
    });

    this.showEventEditInfo(event);
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <div>
              <Header />
              <NavBar />
            </div>
            <Switch>
              <Route
                exact
                path="/nikode"
                render={props => (
                  <div>
                    <Events
                      {...props}
                      allEvents={this.state.events}
                      onEventEditClick={this.onEventEditClick}
                      eventEditing={this.eventEditing}
                      currentEventName={this.currentEventName}
                      currentEventId={this.currentEventId}
                    />
                    <PostEvent
                      {...props}
                      onEventSubmit={this.handleEventSubmit}
                      onEventChange={this.handleEventChange}
                      title={this.state.title}
                    />
                  </div>
                )}
              />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
