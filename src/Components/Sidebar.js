import React,{useContext} from "react";
import {StateContext} from "../App"

function Sidebar() {

  const {state} = useContext(StateContext)
  return (
    <div className="sidebar">
      <h3>Cart</h3>
    {
      state.cart.map(item => {
        return(
          <h3>{item.name}</h3>
        )
      })
    }

    </div>
  );
}

export default Sidebar;
