import { CustomerInfo } from "../Helper/Context";
import { useContext } from "react";

const CustomerBasket = () =>{

    const {customerName, setCustomerName, id, setId} = useContext(CustomerInfo);




    

    return (
        <section>
            <p>Welcome back, {customerName}</p>
            <p>Your id number is {id}</p>
            <p>Your basket is empty</p>
        </section>
        
        
        
    )


}
export default CustomerBasket;