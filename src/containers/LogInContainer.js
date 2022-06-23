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
                <CustomerLogin/>
            </div>
            </form>
        </body>
        <Footer />
        </>
        );
}


export default LogInContainer;
