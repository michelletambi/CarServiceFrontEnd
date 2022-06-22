import NavBar from "../components/NavBar";
import DarkMode from "../components/Darkmode";
import CarFilter from "../components/CarFilter";
import HomeSearch from "../components/HomeSearch";
import Footer from "../components/Footer";

const AboutContainer = () => {

    return (
        <>
            <NavBar />
            <h1 id="title">
                Carz4FREEEEEEEE: About us...
            </h1>
            <h3> Our rich, VIBRANT History</h3>
            <HomeSearch/>
            <CarFilter/>
            <Footer />
        </>
    );
}

export default AboutContainer;