import HomeSearch from "../components/HomeSearch";
import DarkMode from "../components/Darkmode";
import CarList from "../components/CarList";
// this handles all things on the homepage


const HomeContainer = () => {

    return (
        <>
            <h1 id="title">
                Carz4FREEEEEEEE
            </h1>
            <DarkMode /> 
            <img src="https://cdn.onebauer.media/one/media/5d31/bc4a/6933/03bf/2fd4/6ce8/fast-furious.jpg?format=jpg&quality=80&width=960&height=540&ratio=16-9&resize=aspectfill" alt = "i live my life a quarter mile at a time..." id="image"/>
            <p> 
                we buy any carz4free and sell for free
            </p>
            <p> 
                100% profit rate 
            </p> 
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