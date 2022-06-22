import CarList from "../components/CarList";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
// this handles all things on the homepage



const HomeContainer = () => {

    return (
        <>
            <NavBar />
            <div className="titleBar">
                <h1 id="title">
                    Carz4FREEEEEEEE
                </h1>
                <h2 id="subtitle">Our cars will get you a quarter mile at a time, maybe</h2>
            </div>
            <h3 id="headingLeft"> 
                we buy any carz4free and sell for free
            </h3>
            <h4 id="headingCenter"> only 90% breakdown rate after 3 days.</h4>
            <h5 id="headingRight">if you ask for a refund youll go out the way Han did. </h5>
            <a  href = "link to review site"> <img src = "http://animalultrasoundassociation.org/wp-content/uploads/2019/08/trustpilot.jpg" alt = "Trust-pilot  stars image" id="trustPilot"/></a>
            {/* <HomeSearch/> */}
            <CarList/>
            <Footer/>
        </>
    );
}
export default HomeContainer;