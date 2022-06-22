import NavBar from "../components/NavBar";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Footer from "../components/Footer.js";


const ContactContainer = () => {
    return (
        <>
            <NavBar/>
                <h3 id="Contactform">Contact Form</h3>
            <div class="containerForm">
                <form>
                    <label for="fname">First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>

                    <label for="lname"> Last Name </label>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name.."></input>

                    <label for="email">Email</label>
                    <input type="text" id="email" name="email" placeholder="Your Email.."></input>

                    <label for="subject">Subject</label>
                    <textarea id="subject" name="subject" placeholder="Send us a message .."></textarea>

                    <input type="submit" value="Submit"></input>
                </form>
            </div>

            <Footer/>
            
        </>
    );
}
export default ContactContainer;