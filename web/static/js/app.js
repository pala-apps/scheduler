// Brunch automatically concatenates all files in your
// watched paths. Those paths can be configured at
// config.paths.watched in "brunch-config.js".
//
// However, those files will only be executed if
// explicitly imported. The only exception are files
// in vendor, which are never wrapped in imports and
// therefore are always executed.

// Import dependencies
import "phoenix_html"
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRedirect, browserHistory, Redirect } from 'react-router';
import { createStore, applyMiddleware } from 'redux';

// Import local files
import AppContainer from './components/AppContainer';
import reducer from './reducers'
// Local files can be imported directly using relative
// paths "./socket" or full ones "web/static/js/socket".

// import socket from "./socket"

const store = createStore( reducer, window.devToolsExtension && window.devToolsExtension() );

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={AppContainer}/>
      <Route path='/role/new' component={AppContainer}/>
      <Redirect from="*" to="/"/>
    </Router>
  </Provider>,
  document.getElementById( 'app' )
)
