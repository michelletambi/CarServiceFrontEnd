// this component handles the Get/filter/products end point
// User should be able to search and results should be filtered
import axios from 'axios';
import {useState, useEffect} from 'react';

const CarFilter = () => {

    const [cars, setCars] = useState([])
    const [model, setModel] = useState ("");
    const [manufacturer, setManufacturer] = useState("");

//          ----- java code for min / max price forms -----

    // if (minPrice > maxPrice){
    //     throw new Exception("Minimum price must be lower than maximum price!");
    // }

    // List<Product> priceRange = productRepository.findByPriceGreaterThanEqualAndPriceLessThanEqual(minPrice, maxPrice);
    // List<Product> result = inStock.stream().filter(priceRange::contains).collect(Collectors.toList());

    const searchByModel = useEffect( () => {
        axios.get(`http://127.0.0.1:8080/filter_products/${model}`)
        .then(res => {
            // .filter()
            const model = res.data;
            setModel(model);})
            .catch((err) => console.log("We do not stock this product"));
        }, []);

        function SearchByManufacturer() { useEffect( () => {
            axios.get(`http://127.0.0.1:8080/filter_products/${manufacturer}`)
            .then(res => {
                // .filter()
                const manufacturer = res.data;
                setManufacturer(manufacturer);})
                .catch((err) => console.log("We do not stock this product"));
    
            }, [])}

    const button = document.querySelector("#button");

    const handleButtonClick = (SearchByManufacturer) => {
        button.addEventListener("click", handleButtonClick);
    }

    


    return (
        <form>
            <label htmlFor = "Manufacturer">Manufacturer</label>
            <input type = "text" value = {manufacturer} onChange = {(event) => setManufacturer(event.target.value)}/>
            <button id="#button" onClick="handleButtonClick">Submit</button>
            <label htmlFor = "Model">Model</label>
            <input type = "text" value = {model} onChange = {(event) => setModel(event.target.value)}/>
            <button>Submit</button>


        </form>
    );
}


export default CarFilter