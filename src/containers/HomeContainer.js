import CarList from "../components/CarList";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import CustomerLogin from "../components/CustomerLogin";
// this handles all things on the homepage



const HomeContainer = () => {

    return (
        <>
            <NavBar />
            <div className="titleBar">
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
            <h4 id="headingCenter"> only 90% breakdown rate after 3 days.</h4>
            <h5 id="headingRight">if you ask for a refund youll go out the way Han did. </h5>
            <a  href = "link to review site"> <img src = "http://animalultrasoundassociation.org/wp-content/uploads/2019/08/trustpilot.jpg" alt = "Trust-pilot  stars image" id="trustPilot"/></a>
            {/* <HomeSearch/> */}
            <CarList/>
            {/* <CustomerLogin/> */}
            
           

            <Footer/>
        </>
    );
}
export default HomeContainer;