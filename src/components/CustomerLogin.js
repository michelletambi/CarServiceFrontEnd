import {useState, useEffect} from 'react';
import { withRouter } from "react-router";
import axios from 'axios';
import { CustomerInfo } from '../Helper/Context';
import CustomerBasket from './CustomerBasket';
import { Link } from "react-router-dom";

const CustomerLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("Invalid id");
    const [id, setId] = useState("");
    const [customer, setCustomer] = useState({});
    const[customerName, setCustomerName] = useState("");

    const customersUrl = `http://localhost:8080/customers/${id}`;
    
    async function handleSubmit (e) {
        // prevents the webpage from reloading when the form is submitted
        e.preventDefault();
        // window.location.href = "./Basket"
        console.log("submitted");
    }
    const getCustomerById = async () => {
        const response = await axios.get(customersUrl);
        setCustomer(response.data);
        setCustomerName(response.data.name);
        
    };

    useEffect(() => {
        getCustomerById();
    }, [id])
    console.log({customer});
    console.log({customerName});
    // console.log({id});


    return(
        <>
        <h1 id="heading">Log in</h1>
        <form onSubmit = {handleSubmit}>
            <label htmlFor = "email-address" for="uname"><b id="b">Username</b></label>
            <input type = "text"
            placeholder="Enter Id/User" 
            name="uname"
            // Sets the value as email
            onChange = {event => setId(event.target.value)}
            // Requires the input before logging in
            required/>
            <label htmlFor = "password" for="psw"><b id="b">Password</b></label>
            {/* type is text for now just to check things work, later will change it to type = "password" */}
            <input type = "text"
            // Sets the value as password
            placeholder="Enter Password" name="psw"
            onChange = {event => setPassword(event.target.value)}/>
            <Link to="/Products">
            <input className="loginButton" type ="submit" value = "Log in"/>
            </Link>
            <CustomerInfo.Provider value = {{customerName, setCustomerName, id, setId}}>
            <CustomerBasket/>
            </CustomerInfo.Provider>
        </form>
        </>
    )





}

export default CustomerLogin;