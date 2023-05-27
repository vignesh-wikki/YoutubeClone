import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Bottom from "./Navigation"



const reducer = (state = { menu: "closMenu" }, actions) => {
  if (actions.type == "OPENMENU") {
    return {
      menu: "openMenu",
    };
  } else if (actions.type == "CLOSEMENU") {
    return {
      menu: "closeMenu",
    };
  }

  return state;
};

const database = createStore(reducer);

const App = () => (
  <Provider store={database}>  
    <Bottom />
  </Provider>
);

export default App;





