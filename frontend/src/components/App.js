// @flow

import React from 'react';
import logo from '../resources/logo.svg';
import './App.css';

import { Grid } from 'react-bootstrap';

const App = (props: { [key: string]: string }) => {
  return (
    <Grid>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    </Grid>
  );
};

export default App;
