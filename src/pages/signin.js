import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import AppIcon from '../images/icon.png';
import axios from 'axios';

//MUI Stuff

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


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
        marginTop: 20 
    },
    customError: {
        color: 'red'
    }
    
}

class signin extends Component {

    constructor(){
        super();
        this.state={
            email: '',
            password: '',
            loading: false,
            errors:{}
            
        };
    };
    

    // componentDidMount(){
        
    //     $.ajax({
    //         url:"https://asia-northeast1-realizeapp-cd0a5.cloudfunctions.net/api/login",
    //         type:"POST",
    //         async:true,
    //         crossDomain:true,
    //         dataType:"json",
    //         data:{
    //       "email": "cocacola@gmail.com", 
    //       "password": "123456789"
    //     },
    //         contentType:"application/json; charset=utf-8",
    //         accepts:{
    //       "*": "*/*",
    //       text: "text/plain",
    //       html: "text/html",
    //       xml: "application/xml, text/xml",
    //       json: "application/json, text/javascript"
    //     },
    //         cache:true,
    //         beforeSend:BeforeSend,
    //         complete:OnComplete,
    //         success:OnSuccess,
    //         error:OnError
    //     });
        

    // }

    handleSubmit = (event) => {
        
        console.log("submitted");
        event.preventDefault();
        this.setState({
            loading: true
        });
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
          };
        
          const userData ={
            
            "email": this.state.email,
            "password": this.state.password
        };
          axios.post('/login', userData, axiosConfig)
            .then(res => {
                localStorage.setItem('FBIdToken', `Bearer ${res.data.token}`);
                this.setState({token : res.data.token,
                loading: false});

                this.props.history.push('/');
                console.log(this.state);
            })
            .catch((err) => {
                this.state.errors = err.response.data;
                //this.state.errors.password = err.response.data.errors.password;
                //this.state.errors.email = err.response.data.errors.email;
                this.state.loading = false;
                console.log(this.state.errors);

                // this.setState({
                //     errors: err.response.data,
                //     loading: false
                // });
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
                        Sign In
                    </Typography>
                    <form noValidate onSubmit={this.handleSubmit}>

                        <TextField id="email" 
                            name="email" 
                            type="email" 
                            label="Email" 
                            className={classes.TextField}
                            helperText={errors.email}
                            error={errors.email ? true : false}
                            value={this.state.email} 
                            onChange={this.handleChange} 
                            fullWidth/>
                        <TextField id="password" 
                            name="password" 
                            type="password" 
                            label="Password"
                            helperText={errors.password}
                            error={errors.password ? true : false} 
                            className={classes.TextField}
                            value={this.state.password} 
                            onChange={this.handleChange} 
                            fullWidth/>
                        
                            {errors.general && (
                              <Typography variant="body2" className={classes.customError}>
                                {errors.general}
                              </Typography>
                            )}

                            <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            onClick={this.handleSubmit}
                            // disabled={loading}
                            >
                              Signin
                              {/* {loading && (
                                <CircularProgress size={30} className={classes.progress} />
                              )} */}
                            </Button>                            

                    </form>

                </Grid>
                <Grid item sm/>
            </Grid>
        );
    };

};

signin.propTypes = {

    classes: PropTypes.object.isRequired

}

export default withStyles(styles)(signin);



// <form>
//                 <title>Realize</title>
//                 <div id="SignIn">
//                     <h1>Sign In</h1>
//                     <p><input id= "ID" placeholder="ID" onChange={this.inputID}></input></p>
//                     <p><input type="password" id="Password" placeholder="Password" onChange={this.inputPassword}></input></p>
//                     <div class="button" onClick={this.empty/*check if there's corresponding data in database*/}>Log In</div>
//                     {console.log("Password change:" + this.state.Password)}
//                     {console.log("ID change: " + this.state.ID)}
//                 </div>
//                 <div id="SignUp">
//                     <h1>Sign Up</h1>
//                     <div class="button" onClick={this.empty/*go to sign up page*/} >Personal</div>
//                     <div class="button" onClick={this.empty/*go to sign up page*/} >Company</div>
//                 </div>
                
//             </form>
