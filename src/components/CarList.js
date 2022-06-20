import React from "react";
import {useState, useEffect} from "react";
import axios from 'axios';

const CarList = () => {

    const [cars, setCars] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:8080/get_all_products/')
            .then(res => {
                const cars = res.data;
                setCars(cars);
            }).catch((err) => console.log(err));
        }, []
    );

    return(
        <ul>
            {
                cars.map(cars =>
                    <li key={cars.id}>{`${cars.manufacturer}} | ${cars.model}`}</li>
                )
            }
        </ul>
    )


    //          ---- example code ----

    // const [clubs, setClubs] = useState([]);

    // useEffect(() => {
    //     axios.get('http://127.0.0.1:8080/clubs')
    //         .then(res => {
    //             const clubs = res.data;
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
    // )
}

export default CarList;