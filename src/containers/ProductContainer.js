import NavBar from "../components/NavBar";
import CarList from "../components/CarList";
import Footer from "../components/Footer";

const ProductContainer = () => {

    return (
        <>
            <NavBar />
            <h1 id="title">
                Carz4FREEEEEEEE: Our Products
            </h1>
            <p> Here are some of our most popular products!</p>
            <CarList/>
            <Footer/>
        </>
    );
}
export default ProductContainer;