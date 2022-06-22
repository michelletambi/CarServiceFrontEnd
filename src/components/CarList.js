import React from "react";
import {useState, useEffect} from "react";
import axios from 'axios';

const CarList = () => {

    const [cars, setCars] = useState([]);
    const [filteredCars, setFilteredCars] = useState([]);
    const [query, setQuery] = useState("");
    const [manufacturer, setManufacturer] = useState("");

    const stock = "Show%20only%20in-stock%20items=false";

    useEffect(() => {
        axios.get(`http://127.0.0.1:8080/filter_products/?Show%20only%20in-stock%20items=false${query}` )
            .then(res => {
                const cars = res.data;
                setCars(cars);
            }).catch((err) => console.log(err));
        }, [query]
    );
    console.log(query);
    // console.log(cars.filter(car => car.manufacturer.includes("Rover")));
    

 
    return(
        <ul>
            <form>
                <label>Search:</label>
                <input type = "text" onChange = {(event) => setQuery(`&Manufacturer=${event.target.value}&Minimum%20Price=0`)}/>
                <ul>
                    { cars.map(cars =>
                    <li key={cars.id}>{`${cars.manufacturer} | ${cars.model}`}</li>
                    )
                }

                </ul>

             </form>

            {/* {// if the all the search inputs are null, we should return all cars
                cars.map(cars =>
                    <li key={cars.id}>{`${cars.manufacturer}} | ${cars.model}`}</li>
                )
            } */}
        </ul> 
    )


    {/* //          ---- example code ----

    // const [clubs, setClubs] = useState([]);

    // useEffect(() => {
    //     axios.get('http://127.0.0.1:8080/clubs') */}
    {/* //         .then(res => { */}
    {/* //             const clubs = res.data;
    //             setClubs(clubs);
    //         }).catch((err) => console.log(err));
    //     }, []
    // );

    // return(
    //     <ul>
    //         {
    //             clubs.map(club =>
    //                 <li key={club.id}>{`${club.name}} | ${club.manager}`}</li>
    //             )
    //         }
    //     </ul>
    // ) */}
}

export default CarList;