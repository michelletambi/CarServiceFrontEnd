import React from "react";
import NavBar from "../components/NavBar";
import { useState } from "react";
import Footer from "../components/Footer.js";


const BasketContainer = () => {
    const [newRating, setNewRating] = useState("");
    return (
        <> 
            <NavBar />
            <h1 class id="yourcart"> Your basket 🧺</h1>
            <div>
              <div class="container">
                  <h4>Cart
                    <span class="price">
                    <i class="fa fa-shopping-cart"></i>
                    </span>
                  </h4>
                    <p>
                      Product 1 <span class="price">£</span> <button> - </button><input type="number" min="1" max="5"  className="button_input" id="ratingField" placeholder="0" required onChange={(e) => {setNewRating(e.target.value)}} />
                      <button> + </button>
                    </p>
                    <hr/> 
                    <p>Total: <span class="price"><b>£</b></span></p>
                </div>
            </div>
                <Footer/>
        </>
    );
}

export default BasketContainer;