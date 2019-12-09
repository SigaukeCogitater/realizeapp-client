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
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

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
    }
    
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
          axios.post('/idea', userData, axiosConfig)
            .then(res => {
                
                console.log(res.data);
                console.log(this.state);
                this.state.loading = false;
                
                this.props.history.push('/');
                console.log("got response");
                
            })
            .catch((err) => {
                this.state.errors = err.response.data;
              
                this.state.loading = false;
                console.log("got errors");
                console.log(this.state);

              
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
                        <TextareaAutosize
                            name="body"
                            id="body"
                            helperText={errors.body}
                            error={errors.body ? true : false} 
                            className={classes.TextField}
                            value={this.state.body} 
                            onChange={this.handleChange} 
                            
                              rowsMax={10}
                              aria-label="maximum height"
                              placeholder="Maximum 4 rows"
                              defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                  ut labore et dolore magna aliqua."
                            fullwidth
                            />
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
                            // disabled={loading}
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



// import React, { Component } from 'react';


// class companysignup extends Component {
    
//     state = {
//         id: "",
//         category:"",
//         titlelink:"",
//         phonenumber:"",
//         title: "",
//         //nickname: "",
//         pw: "",
//         re_pw: "",
//         titleCheck: "",
//         nicknameCheck: "",
//         pwCheck: "",
//         accountType: 1
//       };
  
  
//     handleid = e =>{
//       e.preventDefault();
//       this.setState({
//         id: e.target.value
//       });
//     };
//     checkid = e=>{
//       const inputid = {
//         id: this.state.id
//         ///here whole information
//       };
//       const id_info = {
//         method: "POST",
//         body: JSON.stringify(inputid),
//         headers: {
//           "Content-Type": "application/json"
//         }
//       };
//       fetch("https://asia-northeast1-realizeapp-cd0a5.cloudfunctions.net/api/signup/company", id_info)
//           .then(res => res.json())
//           .then(json => {
//             if (json === true) {
//               alert("You can use this id");
//               this.setState({
//                 idCheck: this.state.id
//               });
//             } else {
//               alert("This id is already existed");
//             }
//           });
//     }
  
//     //}
//     //handling title input box
//     handletitle = e => {
//       e.preventDefault();
//       this.setState({
//         title: e.target.value
//       });
//     };
//     //check title verify
//     checktitle = e => {
//       e.preventDefault();
//       //function of checking email is constant
//       // const chkEmail = function(str) {
//       //   var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
//       //   return regExp.test(str) ? true : false;
//       // };
//       const inputEmail = {
//         email: this.state.email
//       };
//       const email_info = {
//         method: "POST",
//         body: JSON.stringify(inputEmail),
//         headers: {
//           "Content-Type": "application/json"
//         }
//       };
//       //fetch("https://console.firebase.google.com/project/realizeapp-cd0a5/users", email_info)
//       fetch("http://localhost:3000/user/email", email_info)
//           .then(res => res.json())
//           .then(json => {
//             if (json === true) {
//               alert("You can use this id");
//               this.setState({
//                 emailCheck: this.state.email
//               });
//             } else {
//               alert("This id is already existed");
//             }
//           });
//     }
//       // if (chkEmail(this.state.email) === false) {
//       //   alert("Email format is invalid.");
//       //   this.setState({
//       //     email: ""
//       //   });
//       // } else {
//       //   fetch("http://localhost:3000/user/email", email_info)
//       //     .then(res => res.json())
//       //     .then(json => {
//       //       if (json === true) {
//       //         alert("You can use this id");
//       //         this.setState({
//       //           emailCheck: this.state.email
//       //         });
//       //       } else {
//       //         alert("This id is already existed");
//       //       }
//       //     });
//       // }
   
//     //handling email input box
//     handleNickname = e => {
//       e.preventDefault();
//       this.setState({
//         nickname: e.target.value
//       });
//     };
//     //verify email
//     checkNickname = e => {
//       e.preventDefault();
//       const chkNickname = function(str) {
//         var regNm = /^[가-힣]{2,15}|[a-zA-Z]{2,15}\s[a-zA-Z]{2,15}$/;
//         return regNm.test(str) ? true : false;
//       };
//       const inputNickname = {
//         nickname: this.state.nickname
//       };
//       const nickname_info = {
//         method: "POST",
//         body: JSON.stringify(inputNickname),
//         headers: {
//           "Content-Type": "application/json"
//         }
      
//       };
//       if (chkNickname(this.state.nickname) === false) {
//         //alert("한글,영문 대소문자 2~15자리만 사용 가능합니다");
//         alert("korean, english upper and smaller 2~15 is accessable.");
//       } else {
//         const resp =fetch("http://localhost:3000/user/nick", nickname_info)
//           .then(res => res.json())
//           .then(json => {
//             if (json === true) {
//               alert("You can use this nickname.");
//               this.setState({
//                 nicknameCheck: this.state.nickname
//               });
//             } else {
//               alert("This nickname is already existed.");
//             }
//           });
//       }
//     };
//     //첫번째 패스워드 입력창 set변환
//     handlePW = e => {
//       e.preventDefault();
//       this.setState({
//         pw: e.target.value
//       });
//     };
//     //두번째 패스워드 입력창 set변환
//     handleRE_PW = e => {
//       e.preventDefault();
//       this.setState({
//         re_pw: e.target.value
//       });
//     };
//     //첫번 째 두번 째 패스워드 일치 확인
//     checkPW = e => {
//       e.preventDefault();
//       //비밀번호 유효성검사(영문,숫자 혼합 6~20)
//       const chkPwd = function(str) {
//         var reg_pwd = /^.*(?=.{6,20})(?=.*[0-9])(?=.*[a-zA-Z]).*$/;
//         return !reg_pwd.test(str) ? false : true;
//       };
//       if (chkPwd(this.state.re_pw) === false) {
//         alert("mix english and number 6~12");
//         this.setState({
//           pw: "",
//           re_pw: ""
//         });
//       } else {
//         if (this.state.pw === this.state.re_pw) {
//           alert("Matched.");
//           this.setState({
//             pwCheck: this.state.re_pw
//           });
//         } else {
//           alert("Unmatched.");
//         }
//       }
//     };
//     //서버로 가입 양식 제출
//     handleSubmit = e => {
//       e.preventDefault();
//       const {
//         email,
//         emailCheck,
//         nickname,
//         nicknameCheck,
//         pwCheck,
//         pw,
//         re_pw
//       } = this.state;
//       const signupInfo = {
//         email: this.state.emailCheck,
//         pw: this.state.pwCheck,
//         nickname: this.state.nicknameCheck
//       };
//       const signup_info = {
//         method: "POST",
//         body: JSON.stringify(signupInfo),
//         headers: {
//           "Content-Type": "application/json"
//         }
//       };
//       if (
//         email &&
//         nickname &&
//         pw &&
//         re_pw &&
//         email === emailCheck &&
//         nickname === nicknameCheck &&
//         pw === re_pw &&
//         re_pw === pwCheck
//       ) {
//         fetch("http://localhost:3000/user", signup_info)
//           .then(alert("가입이 완료되었습니다."))
//           .then(this.props.history.push("/login"));
//       } else {
//         alert("입력값을 확인해주세요");
//       }
  
//     };
//     render() {
//       return (
//         <div>
//           <h1>Company Signup</h1>
//           <br/>
//           <div>
//             <p>
//             ID : <input
//               type="text"
//               onChange={this.handleid}
//               value={this.state.id}/>
//               <input type="button" onClick={this.checkid} value="check id"/>
//             </p>
//             <p>
//             Manager Email: <input
//               type="text"
//               onChange={this.handleEmail} 
//               value={this.state.email}/>
//               <input type="button" onClick={this.checkEmail} value="verify"/>
//             </p>
//             <p>
//             Nickname: <input
//               type = "text"
//               onChange={this.handleNickname}
//               value={this.state.nickname}/>
//               <input type="button" onClick={this.checkNickname} value="check nickname"/>
//             </p>
//             <p>
//             Password: <input
//               type = "password"
//               onChange={this.handlePW}
//               value={this.state.pw}/>
//             Repassword: <input
//               type = "password"
//               onChange={this.handleRE_PW}
//               value={this.state.re_pw}/>
//               <input type="button" onClick={this.checkPW} value="check password"/>
//             </p>
//             <div>
//               <button onClick={this.handleSubmit}>Submit</button>
//             </div>
//           </div>
//         </div>
//       );
//     }
// }

// export default companysignup;

