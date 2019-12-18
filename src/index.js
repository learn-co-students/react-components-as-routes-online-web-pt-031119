import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Login from './Login'
import Signup from './Signup'

ReactDOM.render((
  <Router>
    <divt>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
    </divt>
  </Router>),
  document.getElementById('root')
);
