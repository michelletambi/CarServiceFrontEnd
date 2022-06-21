import CarList from "./CarList";
import {useState} from 'react';
const HomeSearch = () => {

const [canSeeCarList, setCanSeeCarList] = useState(false);

const handleButtonClick = event => {
    // 👇️ toggle the current state of canSeeCarList(so flip it from true to false and vice versa)
    // setCanSeeCarList(current => !current);
    setCanSeeCarList(true)
  };
 


return (
    <>
  
    <p>Know what you're looking for? search for a car:</p> 
    {/* <input type = "text" placeholder = "Search"/> */}
    <p>Alternatively, view all cars:</p>
    <button onClick = {handleButtonClick} >View all cars</button>
    {/* this operator (&&) returns the value on the right if the value on the left is truthy. 
    When the button is clicked, canSeeCarList becomes true, so we return CarList which is the list of cars  */}
    {canSeeCarList && (<CarList />)}
  




    

    </>
);


}

export default HomeSearch;