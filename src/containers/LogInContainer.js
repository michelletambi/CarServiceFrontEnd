import NavBar from "../components/NavBar";
import css from "./LogIn.css";
import Footer from "../components/Footer";
import {Route, Routes, Link, BrowserRouter} from "react-router-dom"
import axios from 'axios';
import {useEffect, useState} from 'react';
import CustomerLogin from "../components/CustomerLogin";

const LogInContainer = () => {

    return(
        <>
        <header id="header">
            <NavBar/>
        </header>
        <body id="logInBody">
            <form>
            <div id="container">
                {/* <h1 id="heading">Log in</h1>

                <label for="uname"><b id="b">Username</b></label>
                <input type="text" placeholder="Enter Id/User" name="uname" required>
                </input>

                <label for="psw"><b id="b">Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required>
                </input>
                <Link to="/Welcome">
                <button className="loginButton"type="submit" >Login</button>
                </Link> */}
                <CustomerLogin/>
            </div>
            </form>
        </body>
        <Footer />
        </>
        );
}


export default LogInContainer;
