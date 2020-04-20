import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import LoginMain from './components/LoginMain';
import Register from './components/Register';
import './App.css';

class App extends Component {
  logout() {
    localStorage.clear();
    window.location.href = '/';
  }

  render() {
    return (
      <div className="container">
        <Route exact path="/" component={LoginMain} />
        <Route path="/register" component={Register} />
      </div>
    )
  }
}
export default App;
