import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import AppIcon from '../images/icon.png';
import axios from 'axios';
import { Link } from 'react-router-dom';

//MUI Stuff

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

//Jquery

import $ from 'jquery';

const styles = {
    form: {
        textAlign: 'center'
    },
    image: {
        margin: '20px auto 20px auto'
    },
    pageTitle:{
        margin: '10px auto 10px auto'
    },
    TextField:{
        margin: '10px auto 10px auto'
    },
    button:{
        marginTop: 20,
        position: 'relative' 
    },
    customError: {
        color: 'red',
        fontSize: '0.8rem',
        marginTop: 10
    },
    progress:{
        position: 'absolute'
    },
    small:{
        marginTop: 10
    },
    inputGroup:{
        margin: 10
    },
    inputGroupPrepend:{
        borderColor: "black"
    },
    

    
};

class writeidea extends Component {

    constructor(){
        super();
        this.state={

            response: {},
            loading: false,
            body: "",
            category:"",
            title:"",
            errors:{}
            
        };
    };
    
    handleSubmit = (event) => {
        
        
        event.preventDefault();
        this.setState({
            loading: true
        });
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
                "Authorization": localStorage.getItem("FBIdToken")
            }
          };
        
          const userData ={
            "body": this.state.body,
            "category": this.state.category,
            "title": this.state.title,
          };
          //fetch ideas from the server

          axios.post('/idea', userData, axiosConfig)
            .then(res => {
                
                this.setState({
                    loading : false
                });
                
                this.props.history.push('/');
                // console.log("got response");
                
            })
            .catch((err) => {
                
                this.setState({
                    loading : false,
                    errors : err.response.data
                });
              
            });
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value //this will hold name and value of email or name depending on the event
        });
    };

    render() {
        const { classes } = this.props;
        const { errors, loading } = this.state;
        return(
            <Grid container className={classes.form}>
                <Grid item sm/>
                <Grid item sm>
                    <img src={AppIcon} alt="RealiseApp icon" className={classes.image}/>
                   <Typography variant="h3" className={classes.pageTitle}>
                        Write Your Idea
                    </Typography>
                    <form noValidate onSubmit={this.handleSubmit}>

                        <TextField id="title" 
                            name="title" 
                            type="title" 
                            label="title" 
                            className={classes.TextField}
                            helperText={errors.title}
                            error={errors.title ? true : false}
                            value={this.state.title} 
                            onChange={this.handleChange} 
                            fullWidth/>
                        <TextField id="category" 
                            name="category" 
                            type="category" 
                            label="category"
                            helperText={errors.category}
                            error={errors.category ? true : false} 
                            className={classes.TextField}
                            value={this.state.category} 
                            onChange={this.handleChange}
                            
                            fullWidth/>

                            <TextField id="body" 
                            name="body" 
                            type="body" 
                            label="Write Your Business Idea Here"
                            helperText={errors.body}
                            error={errors.body ? true : false} 
                            className={classes.TextField}
                            value={this.state.body} 
                            onChange={this.handleChange}
                            multiline={true} 
                            fullWidth/>

                            <br />
                            <br />
                            <br />

                                                
                            {errors.code && (
                              <Typography variant="body2" className={classes.customError}>
                                Please be logged in First
                              </Typography>
                            )}

                            <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            onClick={this.handleSubmit}
                            disabled={loading}
                            >
                              writeidea
                              {loading && (
                                <CircularProgress size={30} className={classes.progress} />
                              )}
                            </Button>  <br /><br /> 
                            <small className={classes.small}>
                                  have an account ?  sign in <Link to="/signin">here</Link>
                            </small>  

                       
                    </form>

                </Grid>
                <Grid item sm/>
            </Grid>
        );
    };

};

writeidea.propTypes = {

    classes: PropTypes.object.isRequired

}

export default withStyles(styles)(writeidea);

