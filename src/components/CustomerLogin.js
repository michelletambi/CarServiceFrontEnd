import {useState, useEffect} from 'react';
import { withRouter } from "react-router";
import axios from 'axios';
import { CustomerInfo } from '../Helper/Context';
import CustomerBasket from './CustomerBasket';
import { Link } from "react-router-dom";

const CustomerLogin = () => {
    const [id, setId] = useState("");
    const [customer, setCustomer] = useState({});
    const [email, setEmail] = useState("");
    const[customerName, setCustomerName] = useState("");
    const[password, setPassword] = useState("");

    
    async function handleSubmit (e) {
        // prevents the webpage from reloading when the form is submitted
        e.preventDefault();
    }
  

    const login = async () => {
        const res = await
        axios.post('http://localhost:8080/customers/login', {
            // since user inputs in username and password have been set to email and password, this infor is then sent to the post url above
            email,
            password
        }); console.log(res)
        setCustomerName(res.data.name)
    }
    login();


    return(
        <>
        <h1 id="heading">Log in</h1>
        <form onSubmit = {handleSubmit}>
            <label htmlFor="uname"><b id="b">Email</b></label>
            <input type = "text"
            placeholder="Enter Id/User" 
            name="uname"
            value = {email}
            // Sets the value as email
            onChange = {event => setEmail(event.target.value)}
            // onChange = {event => setId(event.target.value)}
            // Requires the input before logging in
            required/>
            <label htmlFor="psw"><b id="b">Password</b></label>
            {/* type is text for now just to check things work, later will change it to type = "password" */}
            <input type = "text"
            // Sets the value as password
            placeholder="Enter Password" name="psw"
            value = {password}
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