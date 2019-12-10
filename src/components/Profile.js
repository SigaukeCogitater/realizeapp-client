// import React, { Component, Fragment } from 'react';
// import PropTypes from 'prop-types';
// import withStyles from '@material-ui/core/styles/withStyles';
// import { Link } from 'react-router-dom';
// import dayjs from 'dayjs';

// import MyButton from '../util/MyButton';
// import ProfileSkeleton from '../util/ProfileSkeleton';
// // MUI stuff
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import MuiLink from '@material-ui/core/Link';
// import Paper from '@material-ui/core/Paper';
// // Icons
// import LocationOn from '@material-ui/icons/LocationOn';
// import LinkIcon from '@material-ui/icons/Link';

// // import EditIcon from '@material-ui/icons/Edit';
// // import KeyboardReturn from '@material-ui/icons/KeyboardReturn';

// import axios from 'axios';

// const styles = {
//   card: {
//     position: 'relative',
//     display: 'flex',
//     marginBottom: 20
//   },
//   image: {
//     minWidth: 200
//   },
//   content: {
//     padding: 25,
//     objectFit: 'cover'
//   },
// ///


// primary: {
//   main: '#8e24aa',
//   dark: '#008394',
//   contrastText: '#fff'
// },
// secondary: {
//   main: '#c2185b',
//   dark: '#b22a00',
//   contrastText: '#fff'
// },
// typography: {
//   useNextVariants: true
// },
// form: {
//   textAlign: 'center'
// },
// image: {
//   margin: '20px auto 20px auto'
// },
// pageTitle: {
//   margin: '10px auto 10px auto'
// },
// textField: {
//   margin: '10px auto 10px auto'
// },
// button: {
//   marginTop: 20,
//   position: 'relative'
// },
// customError: {
//   color: 'red',
//   fontSize: '0.8rem',
//   marginTop: 10
// },
// progress: {
//   position: 'absolute'
// },
// invisibleSeparator: {
//   border: 'none',
//   margin: 4
// },
// visibleSeparator: {
//   width: '100%',
//   borderBottom: '1px solid rgba(0,0,0,0.1)',
//   marginBottom: 20
// },
// paper: {
//   padding: 20
// },
// profile: {
//   '& .image-wrapper': {
//     textAlign: 'center',
//     position: 'relative',
//     '& button': {
//       position: 'absolute',
//       top: '80%',
//       left: '70%'
//     }
//   },
//   '& .profile-image': {
//     width: 200,
//     height: 200,
//     objectFit: 'cover',
//     maxWidth: '100%',
//     borderRadius: '50%'
//   },
//   '& .profile-details': {
//     textAlign: 'center',
//     '& span, svg': {
//       verticalAlign: 'middle'
//     },
//     '& a': {
//       color: '#00bcd4'
//     }
//   },
//   '& hr': {
//     border: 'none',
//     margin: '0 0 10px 0'
//   },
//   '& svg.button': {
//     '&:hover': {
//       cursor: 'pointer'
//     }
//   }
// },
// buttons: {
//   textAlign: 'center',
//   '& a': {
//     margin: '20px 10px'
//   }
// }
// }



// ///

// class Profile extends Component {

//   state = {
//     ideas: null,
//     competitions: null,
//     signedIn : false,
//     // userDetails: {},
//     createdAt: "",
//     userImage: "",
//     lastName: "",
//     firstName: "",
//     email: "",
//     accountType: "",
//     signedIn: true,
//     errors: {},
//     authenticated: false,
//     loading: false

    
//   }

//   componentDidMount(){

//     this.setState({
//       loading: true
//     })

//     axios.get('/user')

//         .then(res => {
//             console.log("in axios competitions");
//             console.log(res.data);
//             this.setState({
//                 createdAt: res.data.credentials.createdAt,
//                 userImage: res.data.credentials.imageUrl,
//                 userName: res.data.credentials. userName,
//                 lastName: res.data.credentials.lastName,
//                 firstName: res.data.credentials.firstName,
//                 email: res.data.credentials.email,
//                 accountType: res.data.credentials.accountType,
//                 authenticated : true,
//                 loading: false
             

//             });
            
//         })
//         .catch(err => {
//             this.setState({
//                 errors: err.response.data,
//                 authenticated : false,
//                 loading : false
//             });
//             console.log(err.response.data);
//             console.log(this.state);
//             }
//             );


//   }

//   render() {
//     const {
      
//       userName, createdAt, imageUrl, firstName, lastName, email,
//         loading,
//         authenticated
      
//     } = this.state;

//     const{ classes } = this.props; 


//     let profileMarkup = !loading ? (
      
//       authenticated ? (
//         // <Paper className={classes.paper}>
//           <Typography variant="body2" align="center">
//             No profile found, please login again
//           </Typography>
//           <div className={classes.buttons}>
//             <Button
//               variant="contained"
//               color="primary"
//               component={Link}
//               to="/login"
//             >
//               Login
//             </Button>
//             <Button
//               variant="contained"
//               color="secondary"
//               component={Link}
//               to="/signup"
//             >
//               Signup
//             </Button>
//           </div>
//         </Paper>
//       )
    
   

//     return profileMarkup;
//   }
// }

// Profile.propTypes = {
//     classes: PropTypes.object.isRequired
// };

// export default (withStyles(styles)(Profile));

