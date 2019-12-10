import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';

import Idea from '../components/Idea';
// import Competition from '../components/Competition';


import withStyles from '@material-ui/core/styles/withStyles';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';


import Button from '@material-ui/core/Button';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Image from '../images/no-img.png';
import CircularProgress from '@material-ui/core/CircularProgress';


const styles = {
  card: {
    position: 'relative',
    display: 'flex',
    marginBottom: 20,
    backgroundImage: "url(" + "../images/no-img.png" + ")"
  },
  image: {
    minWidth: 200
  },
  image2: {
    padding: 5,
    height: 50,
    width: 50

  },
  hr:{
    color: '#D3D3D3'
  },
  
  content: {
    padding: 25,
    objectFit: 'cover',
  },
  paper: {
  padding: 20,
  marginLeft: '20px',
  backgroundColor: '#D3D3D3'
},
image1:{
  size: 100
}
};



class home extends Component {

    state = {
        ideas: null,
        competitions: null,
        signedIn : false,
        userDetails: null,
        createdAt: "",
        userImage: Image,
        lastName: "",
        firstName: "",
        email: "",
        accountType: "",
        signedIn: false,
        errors: {},
        loading: false
        
        
    }
    
//signing out
    handleSubmit(){
        localStorage.removeItem('FBIdToken');
        axios.defaults.headers.common['Authorization'] = null;
      
      }

    componentDidMount(){

      this.setState({
        loading : true
      });
    

        axios.get('/ideas')
            .then(res => {
                console.log("in axios ideas");
                console.log(res.data);
                this.setState({
                    ideas: res.data
                    
                });
                
            })
            .catch(err => console.log(err));
        
          
        axios.get('/competitions')
            .then(res => {
                console.log("in axios competitions");
                console.log(res.data);
                
                this.setState({
                    competitions: res.data,
                    
                });
                
            })
            .catch(err => console.log(err));
                   
        axios.defaults.headers.common['Authorization'] = 
        localStorage.getItem('FBIdToken');

        axios.get('/user')
        .then(res => {
            // console.log("in axios competitions");
            // console.log(res.data);
            this.setState({
                createdAt: res.data.credentials.createdAt,
                userImage: res.data.credentials.imageUrl,
                userName: res.data.credentials. userName,
                lastName: res.data.credentials.lastName,
                firstName: res.data.credentials.firstName,
                email: res.data.credentials.email,
                accountType: res.data.credentials.accountType,
                signedIn: true,
                loading: false
            });
            
        })
        .catch(err => {
          
            this.setState({
                errors: err.response.data,
                signedIn: false,
                loading: false
            });
            console.log(err.response.data);
            console.log(this.state);
            }
            );

    }

    render() {

        const {
            
              lastName,
              firstName,
              userImage,
              userName,
              signedIn,
              email,
              createdAt,
              competitions,
              loading
              

          } = this.state;

          const { classes } = this.props;

        let recentIdeasMarkup = this.state.ideas ? (
            this.state.ideas.map(idea => <Idea key = { idea.ideaId } idea={idea}/>)
        ) : <p>{loading && (
          <CircularProgress size={30} className={classes.progress} />
        )}</p>;
        
        const competitionsList = [];
        if(competitions !== null){
          
          competitions.forEach(element => {
            competitionsList.push(element)
          });

        }

        console.log("competitionsList");
        console.log(competitionsList);
        
       return (
            <Grid container spacing={16}>
                <Grid item sm={8} xs={12}>
                    {recentIdeasMarkup}
                </Grid>
                <Grid item sm={4} xs={12}>

                <Paper className={classes.paper}>
                <Card className={classes.card}>

                  <CardContent >
                  <Grid container spacing={16}>

                  {!signedIn && (
                    <Grid item  sm={16} xs={16}>
                    <CardMedia
                      image={userImage}
                      title="Profile image"
                      className={classes.image}/>

                      
                  </Grid>
                  )}

                    
                  <Grid item  sm={4} xs={8}>
                      <CardMedia
                        image={userImage}
                        title="Profile image"
                        className={classes.image2}/>
                         <br/>
                      
                        
                    </Grid>
                   

                  <Grid item sm={12} xs={8} backgroundColor="blue">


                      {signedIn &&(
                      <Typography
                        variant="p"
                        component={Link}
                        to={`/users/${userName}`}
                        color="secondary">
                        Username: {userName}
                        <br/><hr className={classes.hr}/>
                      </Typography>)}
                      
                    
                      {signedIn && (<Typography
                        variant="p"
                        color="secondary">
                        Full Name: <span> {firstName} </span> {lastName}
                        <br/><hr className={classes.hr}/>
                      </Typography>)}
                      
                      
                      {signedIn && (<Typography
                        variant="p"
                        color="secondary">
                        email:    {email}
                        <br/><hr className={classes.hr}/>
                      </Typography>)}
                      
                      {signedIn && (<Typography
                        variant="p"
                        color="secondary">
                        <span>Joined:   {dayjs(createdAt).format('MMM YYYY')}</span>
                        <br/><hr className={classes.hr}/>
                      </Typography>)}
                     
                      
                    </Grid>
  
                  </Grid> 
                    <br />
                      {signedIn && (<Button onClick={this.handleSubmit} 
                        color="inherit" backgroundColor="#2F4F4F" component={Link} to="/signin"> 
                        Sign out
                      </Button>)}
                      {!signedIn && (<Button onClick={this.handleSubmit} 
                        color="inherit" backgroundColor="#2F4F4F" component={Link} to="/signin"> 
                        Signin
                        
                      </Button>)}

                    </CardContent>
                    </Card>

                    </Paper>
                    

                    {/* {competitions && (competitionsList.map((competition=>{
                      return <Competition competition={competition.body} />
                    }))
                    )} */}
                
                </Grid>
            </Grid>
        );
    }
}
export default (withStyles(styles)(home));

