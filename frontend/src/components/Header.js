// @flow

import React, { Element } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Map } from 'immutable';

const Header = (props: {}): Element<any> => {
    return (
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                   <a href="#">Some sort of Issue Tracker</a>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav>
                <NavItem eventKey={1} href="/">Home</NavItem>
                <NavItem eventKey={2} href="#">Link</NavItem>
                <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                    <MenuItem eventKey={3.1}>Action</MenuItem>
                    <MenuItem eventKey={3.2}>Another action</MenuItem>
                    <MenuItem eventKey={3.3}>Something else here</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey={3.3}>Separated link</MenuItem>
                </NavDropdown>
            </Nav>
        </Navbar>
    );
};

const mapStateToProps = (state: Map<any, any>): {} => {
    return {};
};

const mapDispatchToProps = (dispatch: any): {} => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
