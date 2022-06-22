import NavBar from "../components/NavBar";

const ContactContainer = () => {

    return (
        <>
            <NavBar />
                <h1 id="title">
                Carz4FREEEEEEEE: Contact us...
                </h1>
                    <h3> Here are our details...</h3>

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
            <hr/>
            <footer id="footer"> 
                <p className="copyrights"> 
                        © 2022 carz4free Ltd. All rights reserved. 
                </p>
            </footer>
        </>
    );
}

export default ContactContainer;