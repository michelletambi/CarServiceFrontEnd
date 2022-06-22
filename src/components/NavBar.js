import React from "react";
import {Route, Routes, Link, BrowserRouter} from "react-router-dom"


function NavBar() {

    return(
        <div id="navBar">
            <Link to="/">
            <button className="buttonDesign" type="submit">Home</button>
            </Link>
            <Link to="/About">
            <button className="buttonDesign" type="submit">About</button>
            </Link>
            <Link to="/Products">
            <button className="buttonDesign" type="submit">Products</button>
            </Link>
            <Link to="/Contact">
            <button className="buttonDesign" type="submit">Contact</button> 
            </Link>
            <Link to="/LogIn">
            <button class="basketAndLogIn" type="submit">Log in <></>
                <img src="https://cdn-icons-png.flaticon.com/512/152/152533.png" height="15" width="15"/>
            </button>
            </Link>
            <Link to="/Basket">
            <button className="basketAndLogIn" type="submit">Basket <></>
                <img src="http://cdn.onlinewebfonts.com/svg/img_230512.png" height="15" width="15"/>
            </button>
            </Link>
        
        </div>
        
    );
}


        
            

export default NavBar;