import axios from 'axios';
import {useEffect, useState} from 'react';
const CustomerLogin = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [id, setId] = useState("");
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/customers/${id}`)
        .then(response => setCustomers([response.data]));
    }, [])

    console.log(customers);
    // console.log(filteredCustomers);

    const filter = (customers, email) => {
        return customers.email == email
    }

    let filteredCustomers = customers.filter(customers, email);
    console.log(filteredCustomers);
    // console.log(customers.filter(c => c.name.includes("Ki")));
    
    
    return(

        <>
        <form>
            <label htmlFor = "email-address">Email:</label>
            <input type = "text"
            onChange = {event =>
            setEmail(event.target.value)}/>
            <label htmlFor = "password">Password</label>
            {/* type is text for now just to check things work, later will change it to type = "password" */}
            <input type = "text" 
            onChange = { event =>
            setPassword(event.target.value)}/>
            <input type = "submit" value = "Log in"/>





        </form>
        </>
    )





}

export default CustomerLogin;