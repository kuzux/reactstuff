// @flow

import React, { Element } from 'react';
import { connect } from 'react-redux';
import { Map } from 'immutable';

const NotFound = (props: {}): Element<any> => {
    return (<div>Not Found</div>);
};

const mapStateToProps = (state: Map<any, any>): {} => {
    return {};
};

const mapDispatchToProps = (dispatch: any): {} => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(NotFound);