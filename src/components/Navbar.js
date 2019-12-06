import React, { Component } from 'react';
import Link from 'react-router-dom/Link';

// MUI staff
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Button } from '@material-ui/core';

class Navbar extends Component {
    render() {
        return (
            <AppBar>
                <Toolbar class="nav-container">
                    <Button color="inherit" component={Link} to="/signin">Sigin</Button>
                    <Button color="inherit" component={Link} to="/">Home</Button>
                    <Button color="inherit" component={Link} to="/companysignup">Signup Companies</Button>
                    <Button color="inherit" component={Link} to="/personalsignup">Signup Personal</Button>
                    <Button color="inherit" component={Link} to="/writeidea">Write Idea</Button>
                    
                </Toolbar>
            </AppBar>
        )
    }
}

export default Navbar;
