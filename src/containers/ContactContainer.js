import NavBar from "../components/NavBar";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const ContactContainer = () => {
    return (
        <>
            <NavBar/>
                <h3 id="Contactform">Contact Form</h3>
            <div class="containerForm">
                <form>
                    <label for="fname">First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder=" Your name.."></input>

                    <label for="lname">Last Name</label>
                    <input type="text" id="lname" name="lastname" placeholder=" Your last name.."></input>

                    <label for="lname">Email</label>
                    <input type="text" id="lname" name="lastname" placeholder=" Your Email.."></input>

                    <label for="subject">Subject</label>
                    <textarea id="subject" name="subject" placeholder="Send us a message .."></textarea>

                    <input type="submit" value="Submit"></input>
                </form>
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
export default ContactContainer;