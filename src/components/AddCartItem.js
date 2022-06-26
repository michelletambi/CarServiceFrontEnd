import { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

function AddCartItem () {

    const [quantity, setQuantity] = useState(0);

    return (
        <>
        <CartItem1
          name={"Ford Escort Cabriolet"}
          quantity={quantity}
          remove={()=>{
            if(quantity > 0) {
              setQuantity(quantity - 1)
            }
          }}
          add={() => setQuantity(quantity + 1)}
        />
        </>
      );

}

const CartItem1 = ({name, quantity, remove, add}) => {

    return (
      <>
      <span id="b">{`${name}`}</span>
      <button className="minusBtn" onClick={remove}>-</button>
      <input type="text" value={quantity} readOnly/>
      <button className="plusBtn" onClick={add}>+</button>
      </>
    );
  }

  export default AddCartItem;