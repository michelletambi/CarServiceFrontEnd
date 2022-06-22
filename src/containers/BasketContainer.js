

const BasketContainer = () => {

    return (
        <> 
         <div id="navBar">
            <button className="buttonDesign">Home</button>
            <button className="buttonDesign">About</button>
            <button className="buttonDesign">Products</button>
            <button className="buttonDesign">Contact</button> 
        
            <button class="basketAndLogIn" type="submit">Log in <></>
                <img src="https://cdn-icons-png.flaticon.com/512/152/152533.png" height="15" width="15"/>
            </button>

                <button className="basketAndLogIn" type="submit">Basket <></>
                <img src="http://cdn.onlinewebfonts.com/svg/img_230512.png" height="15" width="15"/>
                </button>
        </div>
            <h1 class id="yourcart"> Your basket 🧺</h1>

            <div className="results"> 
              <h2> result <button id="addtobasket"> Add to basket </button></h2>
            </div>
              <div class="grid grid-cols-4 gap-4">
                <div>01</div>
                <div>09</div>
                </div>
                <button
                  className="btn btn-outline-danger text-uppercase mb-3 px-5"
                  type="button"
                  onClick={() => clearCart()}
                >
                  clear cart
                </button>

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