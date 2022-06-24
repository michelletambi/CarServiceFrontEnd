import NavBar from "../components/NavBar";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Footer from "../components/Footer";


const ContactContainer = () => {
    return (
        <>
       

            <header>
                <NavBar/>
            </header>
            <h3 id="title">Contact Us!</h3>
            <h4 id="headingCenter">If you have any issues or questions, we'd love to hear from you</h4>
            <main className="elementBody" action="/action.php" method="post">

            <div>
                    <form className="containerForm" >
                        <label id="headingCenter">First Name</label>
                        <input type="uname" placeholder="Your first name.." required ></input>

                        <label id="headingCenter"> Last Name </label>
                        <input type="uname" placeholder="Your last name.." required ></input>
                        


                        <label id="headingCenter">Email</label>
                        <input type="uname" placeholder="Your Email.." required></input>
                        


                        <label id="headingCenter">Subject</label>
                        <textarea className="subject" name="subject" placeholder="Send us a message .." required></textarea>

                        <input type="submit" value="submit"></input>
                    </form>
                </div>
            </main>
           <Footer/>
        </>
    );
}
export default ContactContainer;