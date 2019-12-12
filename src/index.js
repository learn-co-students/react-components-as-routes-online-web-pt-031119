import React from 'react';
import ReactDom from 'react-dom';
import Home from './Home';
import About from './About';
import Login from './Login';
import Navbar from './Navbar';

import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDom.render((
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
    </div>
</Router>),
  document.getElementById('root')
)