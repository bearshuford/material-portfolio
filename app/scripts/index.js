import React from 'react';
import { Router, Route, IndexRedirect, IndexRoute } from 'react-router'
import { createHashHistory } from 'history';
import { render } from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


import App from './components/App.jsx';


const history = new createHashHistory();

render((
  <Router history={history}>
    <Route path="/" component={App}>
    </Route>
  </Router>
), document.getElementById('root'));
