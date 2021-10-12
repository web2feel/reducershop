import React, {useReducer, createContext} from "react";
import "./App.css";
import Header from "./Components/Header";
import Content from "./Components/Content";
import Sidebar from "./Components/Sidebar";

export const StateContext = createContext()
export const DispatchContext = createContext()

function App() {

  const initialState = {
    count:5,
    cart:[]
  }

  const reducer = (state, action) => {
      switch(action.type){
        case "INCREMENT":
          return {...state, count: state.count + action.number};
        case "add_to_cart":
          return {...state, cart: [...state.cart, action.payload]}
        default :
         return state
      }        
  }
 const [state,dispatch] = useReducer(reducer, initialState)

 console.log(state)

  return (
    <StateContext.Provider value={{state}}>
      <DispatchContext.Provider value={dispatch}>
    <div className="App">
      <Header />
      <div className="wrapper">
        <Content />
        <Sidebar />
      </div>
      <div className="footer">
        <h3> Count:{state.count} </h3>        
        <button onClick={() => dispatch({type:"INCREMENT", number:5})} >Add Count</button>
      </div>
    </div>
    </DispatchContext.Provider>
    </StateContext.Provider>

  );
}

export default App;
