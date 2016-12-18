// @flow

import React, { Element } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Map } from 'immutable';

import Header from './Header'

import { Grid } from 'react-bootstrap';

const App = (props: { children: Array<Element<any>> }): Element<any> => {
  return (
    <Grid>
      <div className="App">
        <Header />
        { props.children }
      </div>
    </Grid>
  );
};

const mapStateToProps = (state: Map<any, any>): {} => {
    return {};
};

const mapDispatchToProps = (dispatch: any): {} => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
