import React from "react";
import {useState, useEffect} from "react";
import axios from 'axios';

const CarList = () => {

    const [cars, setCars] = useState([]);
    const [query, setQuery] = useState("");

    const stock = "Show%20only%20in-stock%20items=false";

    useEffect(() => {
        axios.get(`http://127.0.0.1:8080/filter_products/?Show%20only%20in-stock%20items=false${query}` )
            .then(res => {
                const cars = res.data.splice(0,5);
                setCars(cars);
                // cars.splice(0,10);
            }).catch((err) => console.log(err));
            
        }, [query]
    );
    console.log(query);
  
    return(
        <ul>
            <form>
                <label id="search">Search:</label>
                <input id="searchBar" placeholder="Start typing to find your dream car!" type = "text" onChange = {(event) => setQuery(`&Manufacturer=${event.target.value}&Minimum%20Price=0`)}/>
                <ul id="">
                    { cars.map(cars =>
                    <li key={cars.id}>{`${cars.manufacturer} | ${cars.model}`}</li>
                    )
                }

                </ul>

             </form>

        </ul> 
    )
}

export default CarList;