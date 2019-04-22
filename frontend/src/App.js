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

import data from './api/defaultData';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = data;
  }
  login = (username, password) => {
    this.setState({ user: { username, id: 1 } });
  };
  logout = () => {
    this.setState({ user: null });
  };
  register = (username, password) => {
    this.setState({
      user: { username, id: Math.floor(Math.random() * 1000000) },
    });
  };
  createMeme = meme => {
    this.setState(prevState => ({ memes: [...prevState.memes, meme] }));
  };
  upvote = id => {
    const [meme] = this.state.memes.filter(m => m.id === id);
    const upvotes = meme.upvotes + 1;
    this.setState({
      memes: this.state.memes.map(el =>
        el.id === id ? Object.assign({}, el, { upvotes }) : el
      ),
    });
  };
  downvote = id => {
    const [meme] = this.state.memes.filter(m => m.id === id);
    const upvotes = meme.upvotes - 1;
    this.setState({
      memes: this.state.memes.map(el =>
        el.id === id ? Object.assign({}, el, { upvotes }) : el
      ),
    });
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
