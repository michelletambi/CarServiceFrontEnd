import React from "react";
import NavBar from "../components/NavBar";
import { useState } from "react";

const BasketContainer = (value, item) => {
    const [newRating, setNewRating] = useState("");
    const {increment,decrement,removeItem}=value
    const {id,make,img,price,total,count}=item;

    return (
        <> 
            <NavBar />
            
            <h1 class id="yourcart"> Your basket 🧺</h1>

            <div className="results"> 
              <h2> result 
                <button id="addtobasket"> Add to basket </button>
              </h2>
            </div>
<div>
    <div class="container">
      <h4>Cart
        <span class="price">
          <i class="fa fa-shopping-cart"></i>
          
        </span>
      </h4>

      <p>Product 1 <span class="price">£</span> <button> - </button><input type="number" min="1" max="5" className="newCakeForm__input" id="ratingField" placeholder="rating" required
          onChange={(e) => {setNewRating(e.target.value)}} />
 <button> + </button> </p>
      <hr/>
      <p>Total: <span class="price"><b>£</b></span></p>
    </div>
  </div>



                <footer className="footer"> 
                <hr/>
                 <ul className="helpline">
                    <strong> Help and Support</strong>
                    <li><i class="fa-solid fa-phone"></i> Call: 0800 1110 66</li>
                    <li><i class="fa-solid fa-inbox"></i> Email: Carz4Free@Carz.com </li>
                </ul>

                <ul className="socials"> 
                    <li>Contact Us</li>
                    <li><i class="fa-brands fa-twitter"></i></li>
                    <li><i class="fa-brands fa-facebook"></i></li>
                    <li><i class="fa-brands fa-instagram"></i></li>
                </ul>
                <ul className="Legalstuff"> 
                    <li> Terms and conditions </li>
                    <li> Privacy Policy </li>
                    <li> Cookie Settings </li>
                    <li> Legal </li>
                </ul>
                    <p className="copyrights"> 
                        © 2022 Carz4free Ltd. All rights reserved. 
                    </p>
            </footer>
        </>
    );
}

export default BasketContainer;