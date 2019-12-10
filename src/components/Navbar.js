import React, { Component } from 'react';
import {Link} from 'react-router-dom';

// MUI staff
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Button } from '@material-ui/core';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));


class Navbar extends Component {


    render() {
        return (
            <AppBar>
                <Toolbar className="nav-container">
                    {/* <IconButton edge="start"  color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton> */}
                    
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
