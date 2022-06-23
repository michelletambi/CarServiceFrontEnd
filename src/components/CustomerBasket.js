import { CustomerInfo } from "../Helper/Context";
import { useContext, useEffect } from "react";
import axios from "axios";

const CustomerBasket = () =>{

    const {customerName, setCustomerName, id, setId} = useContext(CustomerInfo);
   
    
    return (
        <section>
            <p id="b">Welcome back, {customerName}</p>
            <p id="b">Your id number is {id}</p>
            <p id="b">Your basket is empty</p>
        </section>
        
    )
}
export default CustomerBasket;