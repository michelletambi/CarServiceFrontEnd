import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer.js";
import { BsFillBasket2Fill } from "react-icons/bs";
import AddCartItem from "../components/AddCartItem";
import { useState } from "react";


const BasketContainer = () => {

    const [newRating, setNewRating] = useState("");

    return (
        <> 
          <header id="header">
            <NavBar/>
          </header>
          <h1 id="title"> Your basket <BsFillBasket2Fill/></h1>
          <main className="elementBody">
              <div id="basketContainer">
                  <h4 id="headingCenter">Cart</h4>
                  <AddCartItem />
                    <hr/> 
                    <p id="b">Total: <span class="price"><b>£</b></span></p>
              </div>
            </main>
            <Footer />
        </>
    );
}

export default BasketContainer;