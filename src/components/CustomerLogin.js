import axios from 'axios';
import {useEffect, useState} from 'react';
const CustomerLogin = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [id, setId] = useState("");
    const [customers, setCustomers] = useState([]);
    const[error, setError] = useState(null);

    const customersUrl = `http://localhost:8080/customers/${id}`;

    const getCustomerById = async () => {
        const response = await axios.get(customersUrl);
        setCustomers(response.data)
    };

    useEffect(() => {
        getCustomerById();
    }, [id])

    // console.log({customers});
    // console.log({id});
   

   
    
    return (
        <>
        <form>
            <label htmlFor = "email-address">Email:</label>
            <input type = "text"
            value = {id}
            onChange = {event =>
            setId(event.target.value)}/>
            <label htmlFor = "password">Password</label>
            {/* type is text for now just to check things work, later will change it to type = "password" */}
            <input type = "text" 
            onChange = { event =>
            setPassword(event.target.value)}/>
            {error && <p>{error}</p>}
            <input type = "submit" value = "Log in"/>
            <ul>
            {/* { customers.map(customer =>
                    <li key={customer.id}>{`${customer.id}`}</li>
                    )
                } */}
            </ul>





        </form>
        </>
    )





}

export default CustomerLogin;