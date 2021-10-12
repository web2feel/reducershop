import React, {useContext} from "react";
import {DispatchContext} from "../App"
function Item({ info }) {
  const dispatch = useContext(DispatchContext)

  return (
    <div className="product">
      <h2>{info.name}</h2>
      <h3> {info.price}</h3>
      <button onClick={() => dispatch({type:"add_to_cart", payload:info})}>Add to cart</button>
    </div>
  );
}

export default Item;
