import NavBar from "../components/NavBar";
import CarList from "../components/CarList";
import Footer from "../components/Footer";
import '../App.css';

const AboutContainer = () => {

    return (
        <>
            <NavBar />
            <h1 id="title">
                Carz4FREE: About us...
            </h1>
            <h3 id= "history"> Our rich, VIBRANT History</h3>
            <h4 id="placeholder"> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam quis enim lobortis scelerisque. Ornare lectus sit amet est placerat in egestas erat imperdiet. Sagittis purus sit amet volutpat consequat mauris. Est lorem ipsum dolor sit amet consectetur adipiscing. Hac habitasse platea dictumst quisque sagittis purus sit. Netus et malesuada fames ac turpis egestas integer eget aliquet. Vestibulum lorem sed risus ultricies tristique nulla. Suscipit tellus mauris a diam maecenas sed. Ut consequat semper viverra nam libero justo. Ac turpis egestas maecenas pharetra. Amet commodo nulla facilisi nullam vehicula. Et malesuada fames ac turpis egestas. Arcu cursus vitae congue mauris rhoncus aenean vel. Eget dolor morbi non arcu risus quis varius quam. Etiam sit amet nisl purus in mollis nunc. Neque vitae tempus quam pellentesque nec nam aliquam sem et.

            </h4>
            {/* <CarList/> */}
            <Footer />
        </>
    );
}

export default AboutContainer;