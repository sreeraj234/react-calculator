import React from "react";
import "./App.css";
import Calculator from "./Component/Calculator";

class App extends React.Component {
  render() {
    return (
      <div className="container">
      <p id="heading">Calculator</p>
      <Calculator/> 
      </div>
    )
  }
}

export default App;
