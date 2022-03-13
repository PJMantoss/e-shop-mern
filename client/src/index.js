import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Pay from './stripe/Pay';
import Success from './stripe/Success';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" component={<App />} />
        <Route path="/pay" component={<Pay />} />
        <Route path="/success" component={<Success />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
