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
import UpdateEvent from './components/events/UpdateEvent';

import NavBar from './components/NavBar';
import Header from './Header';

import LandingPage from './components/user/LandingPage';
import SignUpPage from './components/user/SignUpPage';

// import DisplayBlogs from './components/blogs/DisplayBlogs';

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
      userNameAttempt: '',
      passwordAttempt: '',
      currentUser: '',
      userLoggedIn: false,
      newUserpassword: '',
      newUserName: '',
    };
    this.allEvents = this.allEvents.bind(this);
    this.handleEventChange = this.handleEventChange.bind(this);
    this.handleEventSubmit = this.handleEventSubmit.bind(this);
    this.onEventEditClick = this.onEventEditClick.bind(this);
    this.handleEventUpdateChange = this.handleEventUpdateChange.bind(this);
    // this.handleLoginAttempt = this.handleLoginAttempt.bind(this);
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

  handleSignUpChange(event) {
    event.preventDefault();
    let name = event.target.name;
    console.log('name is:', name);
    console.log('event.target.value', event.target.value);

    this.setState({ [name]: event.target.value });
    console.log('this.state', this.state);
  }
  handleEventUpdateChange(event) {
    event.preventDefault();
    let name = event.target.name;
    console.log('name is:', name);
    console.log('event.target.value', event.target.value);

    this.setState({ [name]: event.target.value });
    console.log('this.state', this.state);
  }

  //>>>>>>>>>>>>>>>>>>AUTH LOGIC HERE <<<<<<<<<<<<<<<<<<<<<

  // handleLoginAttempt(event) {
  //   // userNameAttempt: '',
  //   //   passwordAttempt: '',
  //   //   currentUser: '',
  //   //   userLoggedIn: false,
  //   event.preventDefault();
  //   let name = event.target.name;
  //   console.log(`${name}`, this.state[name]);
  //   this.setState({ [name]: event.target.value });
  // }

  // handleLoginSubmit(event) {
  //   event.preventDefault();

  //   // no clue how to get a user or match it to whats submitted
  //   // could I make a call to the api and compare it to the user object?
  //   axios
  //     .get('http://localhost:3000/users', {
  //       username: this.state.userNameAttempt,
  //       password: this.state.passwordAttempt,
  //     })
  //     // this is given when creating a user:
  //     //     {
  //     //     "user": {
  //     //         "id": 4,
  //     //         "username": "arkoded3",
  //     //         "password_digest": "$2a$10$aVKKiPEW6ZmTbsMRQa2TOes65aiv9O0kkDLf9Vo1Aq5fxLBt/aZiG",
  //     //         "created_at": "2018-03-14T18:49:09.507Z",
  //     //         "updated_at": "2018-03-14T18:49:09.507Z"
  //     //     },
  //     //     "token": "eyJhbGciOiJIUzI1NiJ9.eyJpZCI6NH0.iri3ZNM1y3dW7G9i_heLMHqJomQwsPOahkhY1ygEUjI"
  //     // }

  //     .then(response => {
  //       // set the state of userLoggedIn to true
  //       console.log('Logged in successfully');

  //       // this.state.userLoggedIn  ? (
  //       //       <Redirect to={"/nikode/home"} />
  //       //     ) : null
  //     })
  //     .catch(err => {
  //       // alert that un and or pw is incorrect and ask user to try again or create account
  //       console.log('err is', err);
  //     });
  // }

  //>>>>>>>>>>>>>>>>>>                <<<<<<<<<<<<<<<<<<<<<
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

  ChangeonEventUpdateSubmit() {}

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
                    <LandingPage
                      {...props}
                      onLoginChange={this.handleLoginAttempt}
                      onLoginSubmit={this.handleLoginSubmit}
                      userNameAttempt={this.state.userNameAttempt}
                      currentUser={this.state.currentUser}
                      userLoggedIn={this.state.userLoggedIn}
                    />
                  </div>
                )}
              />

              <Route
                exact
                path="/nikode/signup"
                render={props => (
                  <div>
                    <SignUpPage
                      {...props}
                      onSignUpChange={this.handleSignUpChange}
                      onSignUpSubmit={this.handleSignUpSubmit}
                      currentUser={this.state.currentUser}
                      userLoggedIn={this.state.userLoggedIn}
                      newUserpassword={this.state.newUserpassword}
                      newUserName={this.state.newUserpassword}
                    />
                  </div>
                )}
              />

              <Route
                exact
                path="/nikode/home"
                render={props => (
                  <div>
                    <Events
                      {...props}
                      allEvents={this.state.events}
                      onEventEditClick={this.onEventEditClick}
                      eventEditing={this.state.eventEditing}
                      currentEventName={this.state.currentEventName}
                      currentEventId={this.state.currentEventId}
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

              <Route
                exact
                path="/nikode/events/:id"
                render={props => (
                  <div>
                    <UpdateEvent
                      {...props}
                      // allEvents={this.state.events}
                      // onEventEditClick={this.onEventEditClick}
                      // eventEditing={this.state.eventEditing}
                      currentEventName={this.state.currentEventName}
                      currentEventId={this.state.currentEventId}
                      onEventUpdateChange={this.handleEventUpdateChange}
                    />
                  </div>
                )}
              />
            </Switch>
            {this.state.eventEditing ? (
              <Redirect to={`/nikode/events/${this.state.currentEventId}`} />
            ) : null}
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
