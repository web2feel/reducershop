import React,{useContext} from "react";
import {StateContext} from "../App"
function Header() {

  const {state} = useContext(StateContext)
  return (
    <div className="header">
      <h1>Site Logo</h1>
      <div> {state.cart.length} - Items</div>
    </div>
  );
}

export default Header;
