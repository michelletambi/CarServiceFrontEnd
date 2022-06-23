import React from "react";
import {Route, Routes, Link, BrowserRouter} from "react-router-dom"
import { BsFillBasket2Fill } from "react-icons/bs";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { AiFillCar } from "react-icons/ai";
import {AiFillHome} from "react-icons/ai";
import {AiOutlineLogin} from "react-icons/ai";
import {AiOutlineInfoCircle} from "react-icons/ai";

function NavBar() {

    return(
        <div id="navBar">
            <Link to="/">
            <button className="buttonDesign" type="submit">Home <AiFillHome/></button>
            </Link>
            <Link to="/About">
            <button className="buttonDesign" type="submit">About <AiOutlineInfoCircle/></button>
            </Link>
            <Link to="/Products">
            <button className="buttonDesign" type="submit">Products <AiFillCar/></button>
            </Link>
            <Link to="/Contact">
            <button className="buttonDesign" type="submit">Contact <BsFillChatLeftTextFill/></button> 
            </Link>
            <Link to="/LogIn">
            <button className="basketAndLogIn" type="submit">Log in <AiOutlineLogin/></button>
            </Link>
            <Link to="/Basket">
            <button className="basketAndLogIn" type="submit">Basket <BsFillBasket2Fill/></button>
            </Link>
        
        </div>
        
    );
}


export default NavBar;