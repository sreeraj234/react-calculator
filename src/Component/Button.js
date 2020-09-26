import React from "react";
import "./Button.css";

class Button extends React.Component {
  render() {
    return (
        <div className="buttons">
          <div>
            <button onClick={()=>{this.props.handleButton("C")}} className="dark-button">C</button>
            <button onClick={()=>{this.props.handleButton("CE")}} className="dark-button">←</button>
            <button onClick={()=>{this.props.handleButton("/")}} className="dark-button">/</button>
            <br />
            <button onClick={()=>{this.props.handleButton("1")}}>1</button>
            <button onClick={()=>{this.props.handleButton("2")}}>2</button>
            <button onClick={()=>{this.props.handleButton("3")}}>3</button>
            <br />
            <button onClick={()=>{this.props.handleButton("4")}}>4</button>
            <button onClick={()=>{this.props.handleButton("5")}}>5</button>
            <button onClick={()=>{this.props.handleButton("6")}}>6</button>
            <br />
            <button onClick={()=>{this.props.handleButton("7")}}>7</button>
            <button onClick={()=>{this.props.handleButton("8")}}>8</button>
            <button onClick={()=>{this.props.handleButton("9")}}>9</button>
            <br />
            <button onClick={()=>{this.props.handleButton("0")}} id="zero">0</button>
            <button onClick={()=>{this.props.handleButton(".")}}>.</button>
          </div>
          <div className="column">
            <button onClick={()=>{this.props.handleButton("*")}} className="dark-button">x</button>
            <button onClick={()=>{this.props.handleButton("-")}} className="dark-button">-</button>
            <button onClick={()=>{this.props.handleButton("+")}} className="dark-button">+</button>
            <button onClick={()=>{this.props.handleButton("=")}} id="equal">=</button>
          </div>
        </div>
    );
  }
}

export default Button;
