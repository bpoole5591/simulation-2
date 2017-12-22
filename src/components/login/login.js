import React, {Component} from "react";
// Redux 
import { connect } from "react-redux";
// Modules
import axios from "axios";
// CSS & ASSETS
import "./login.css";
import authLogo from "../../assets/auth_logo.png";
// Components
// null

class login extends Component {
    contructor(props) {
        //super(props);
        this.state = {
            username: "",
            password: ""
        };
    }

    render() {
        return (
            <div className="login-container">
                <div className="content-container">
                asdfadsfs    
                    <img className="auth-logo" src={authLogo} alt="auth logo" />
                </div>
            </div>
        );
    }
}

export default login;