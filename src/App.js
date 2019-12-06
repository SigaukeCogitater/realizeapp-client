import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import MuiThemeProveder from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
// Components

import Navbar from './components/Navbar';

//Pages

import home from './pages/home';
import personalsignup from './pages/personalsignup';
import companysignup from './pages/companysignup';
import signin from './pages/signin';
import writeidea from './pages/writeidea';


//theme from mui

const theme = createMuiTheme(
  {
    palette: {
      primary: {
        main: '#8e24aa',
        dark: '#008394',
        contrastText: '#fff'
      },
      secondary: {
        main: '#c2185b',
        dark: '#b22a00',
        contrastText: '#fff'
      },
      typography:{
        
        useNextVariants: true

      }
    },
  }
)

class App extends Component{
  render(){
    // const classes = useStyles();

    return (
      <MuiThemeProveder theme ={theme}>
          <div className="App">
          <Router>
          <Navbar/>
            <div className="container">
            <Switch>  
                <Route exact path="/" component={home}/>
                <Route exact path="/signin" component={signin}/>
                <Route exact path="/personalsignup" component={personalsignup}/>
                <Route exact path="/writeidea" component={writeidea}/>
                                         
                <Route exact path="/companysignup" component={companysignup}/>
              </Switch>
            </div>
          </Router>
           
      </div>
      </MuiThemeProveder>
    );

  }
}

export default App;
