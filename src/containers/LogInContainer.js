import NavBar from "../components/NavBar";
import '../App.css';
import css from "./LogIn.css";
import Footer from "../components/Footer";
import {Route, Routes, Link, BrowserRouter} from "react-router-dom"
import axios from 'axios';
import {useEffect, useState} from 'react';
import CustomerLogin from "../components/CustomerLogin";
import { ThemeProvider } from "styled-components";
import { createContext } from 'react';
import ReactSwitch from "react-switch";

const LogInContainer = () => {


    return(
        <>
        <header className="header">
            <NavBar/>
        </header>
        <main className="elementBody">
        <div id="container">
            <form>
                <CustomerLogin/>
            </form>
        </div>
        </main>
        <Footer/>
        </>
        );
}


export default LogInContainer;
