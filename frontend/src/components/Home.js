// @flow

import React, { Element } from 'react';
import { connect } from 'react-redux';
import { Map } from 'immutable';

const Home = (props: {}): Element<any> => {
    return <div>Home</div>;
}

const mapStateToProps = (state: Map<any, any>): {} => {
    return {};
};

const mapDispatchToProps = (dispatch: any): {} => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);