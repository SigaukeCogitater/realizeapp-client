import React, { Component } from 'react';

class signin extends Component {
    state={
        ID: "",
        HidePassword: "",
        Password: ""
    }
    inputID = (e) => {
        this.setState({
            ID: e.target.value
        });
    }
    inputPassword = (e) => {
        this.setState({
            Password: e.target.value
        });
        
    }

    empty= (e) =>{}
    render() {
        return(
            <form>
                <title>Realize</title>
                <div id="SignIn">
                    <h1>Sign In</h1>
                    <p><input id= "ID" placeholder="ID" onChange={this.inputID}></input></p>
                    <p><input type="password" id="Password" placeholder="Password" onChange={this.inputPassword}></input></p>
                    <div class="button" onClick={this.empty/*check if there's corresponding data in database*/}>Log In</div>
                    {console.log("Password change:" + this.state.Password)}
                    {console.log("ID change: " + this.state.ID)}
                </div>
                <div id="SignUp">
                    <h1>Sign Up</h1>
                    <div class="button" onClick={this.empty/*go to sign up page*/} >Personal</div>
                    <div class="button" onClick={this.empty/*go to sign up page*/} >Company</div>
                </div>
                
            </form>
        )
    }

}

export default signin;

