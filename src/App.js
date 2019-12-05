import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import MuiThemeProveder from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
// Components

import Navbar from './components/Navbar';

//Pages

import home from './pages/home';
import personal_signup from './pages/personal_signup';
import company_signup from './pages/company_signup';
import login from './pages/login';


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

    return (
      <MuiThemeProveder theme ={theme}>
          <div className="App">
          <Router>
          <Navbar/>
            <div className="container">
            <Switch>  
                <Route exact path="/" component={home}/>
                <Route exact path="/login" component={login}/>
                <Route exact path="/personal_signup" component={personal_signup}/>
                <Route exact path="/company_signup" component={company_signup}/>
              </Switch>
            </div>
          </Router>
           
      </div>
      </MuiThemeProveder>
    );

  }
}

export default App;
