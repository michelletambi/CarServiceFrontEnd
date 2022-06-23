import NavBar from "../components/NavBar";
import CarList from "../components/CarList";
import Footer from "../components/Footer";

const AboutContainer = () => {

    return (
        <>
            <NavBar />
            <h1 id="title">
                Carz4FREE: About us...
            </h1>
            <h3> Our rich, VIBRANT History</h3>
            <CarList/>
            <Footer />
        </>
    );
}

export default AboutContainer;