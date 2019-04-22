import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Details from './components/Details';
import Login from './components/Login';
import Logout from './components/Logout';
import Register from './components/Register';
import Create from './components/Create';
import Profile from './components/Profile';
import Error from './components/Error';

import api from './api/index';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {user: undefined, memes: []}
  }

  componentDidMount() {
    this.loadMemes();
    this.checkLogin();
  }

  checkLogin = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      const user = await api.getUser(token);
      if (user) {
        this.setState({user});
      }
    }
  }

  loadMemes = async () => {
    const memes = await api.getAllMemes();
    this.setState({memes: memes})
  }
  
  login = async (username, password) => {
    const user = await api.login(username, password);
    if(user) {
      this.setState({user})
    }
  };

  logout = () => {
    this.setState({ user: null });
    localStorage.removeItem('token');
  };

  register = async (username, password) => {
    const user = await api.register(username, password);
    if(user) {
      this.setState({user})
    }
  };

  createMeme = async meme => {
    await api.createMeme(meme);
    this.loadMemes();
  };

  upvote = async id => {
    await api.upvote(id);
    this.loadMemes()
  };

  downvote = async id => {
    await api.downvote(id);
    this.loadMemes()
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Header {...this.state} />
          <Switch>
            {/* <Route exact path="/" component={Main} /> */}
            <Route
              exact
              path="/"
              render={() => (
                <Main
                  {...this.state}
                  upvote={this.upvote}
                  downvote={this.downvote}
                />
              )}
            />
            <Route
              exact
              path="/details/:id"
              render={() => <Details {...this.state} />}
            />
            <Route
              exact
              path="/create"
              render={() => (
                <Create {...this.state} createMeme={this.createMeme} />
              )}
            />
            <Route
              exact
              path="/login"
              render={() => <Login {...this.state} login={this.login} />}
            />
            <Route
              exact
              path="/logout"
              render={() => <Logout {...this.state} logout={this.logout} />}
            />
            <Route
              exact
              path="/register"
              render={() => (
                <Register {...this.state} register={this.register} />
              )}
            />
            <Route
              exact
              path="/profile"
              render={() => <Profile {...this.state} />}
            />
            <Route component={Error} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
