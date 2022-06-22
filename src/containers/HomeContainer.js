import HomeSearch from "../components/HomeSearch";
import CarList from "../components/CarList";
import CarFilter from "../components/CarFilter";
import NavBar from "../components/NavBar";
// this handles all things on the homepage



const HomeContainer = () => {

    return (
        <>
            <NavBar />
            <div id="titleBar">
                <h1 id="title">
                    <img src="https://www.freeiconspng.com/thumbs/car-icon-png/car-icon-png-25.png" id="titleImage"/>
                    Carz4FREEEEEEEE
                </h1>
                <h2 id="subtitle">Our cars will get you a quarter mile at a time, maybe</h2>
            </div>
            <div id="imageBox">
            <img src="https://cdn.onebauer.media/one/media/5d31/bc4a/6933/03bf/2fd4/6ce8/fast-furious.jpg?format=jpg&quality=80&width=960&height=540&ratio=16-9&resize=aspectfill" alt = "i live my life a quarter mile at a time..." id="image"/>
            <p></p>
            </div>
            <h3 id="headingLeft"> 
                we buy any carz4free and sell for free
            </h3>
            <h4 id="headingCenter"> only 90% breakdown rate after 3 days</h4>
            <h5 id="headingRight">if you ask for a refund we'll run you over</h5>
            <a  href = "link to review site"> <img src = "http://animalultrasoundassociation.org/wp-content/uploads/2019/08/trustpilot.jpg" alt = "Trust-pilot  stars image" id="trustPilot"/></a>
            {/* <HomeSearch/> */}
            <CarList/>
            
           

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
                        © 2022 carz4free Ltd. All rights reserved. 
                    </p>
            </footer>
        </>
    );
}
export default HomeContainer;