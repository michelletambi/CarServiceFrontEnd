// this component handles the Get/filter/products end point
// User should be able to search and results should be filtered
import axios from 'axios';
import {useState, useEffect} from 'react';
import axios from 'axios';

const CarFilter = () => {


    


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