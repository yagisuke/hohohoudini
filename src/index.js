import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import Home from './Home';
import AddPolyfill from './AddPolyfill';
import NonPolyfill from './NonPolyfill';
import SimpleAnimation from './SimpleAnimation';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div>
        <Route component={Home}/>
        <Route path='/hohohoudini/non_polyfill' component={NonPolyfill}/>
        <Route path='/hohohoudini/add_polyfill' component={AddPolyfill}/>
        <Route path='/hohohoudini/simple_animation' component={SimpleAnimation}/>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
