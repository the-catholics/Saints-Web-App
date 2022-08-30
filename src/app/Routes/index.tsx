import React from 'react'
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import Home from '../containers/Home'
import About from '../containers/About'
import NotFound from '../containers/NotFound'

const Routes: React.FC = () => (
  <Router>
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Switch>
  </Router>
);

export default Routes;