// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Home from './components/Home';
import NotFound from './components/NotFound';

import { createStore } from 'redux';
import { Map } from 'immutable';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import './index.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

const reducer = () => {};

const store = createStore(reducer, Map({}));

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home} />
                <Route path="*" component={NotFound} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
