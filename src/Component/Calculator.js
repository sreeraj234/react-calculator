import React from "react";
import Button from "./Button"
import Display from "./Display"

class Calculator extends React.Component {
  constructor() {
    super();
    this.state={
        string:"",
        answer:""
    }
    this.handleButton = this.handleButton.bind(this)
  }
  
  handleButton(value){ 
    const {string} = this.state
  switch (value) {
    case "=":
      if(string.length===1 && 
        (string[string.length-1]==="/" ||
        string[string.length-1]==="*"))
        this.setState({string:""})

      if(!isNaN(string[string.length-1])){
        var temp=eval(string)
        temp=+temp.toFixed(5)
        this.setState(
          string.length<=11?{answer:temp}:{answer:temp.toExponential(5)}
          )
        }
      break;

    case "C":
      this.setState({answer:"",string:""})
      break;

    case "CE":
      this.setState({string:string.slice(0,-1)})
      break;

    default:
      if(string.length<=20){
        if(isNaN(string[string.length-1])&&isNaN(value))
        this.setState({string:string.slice(0,-1)+value})
        else
        this.setState({string:string+value})
        break;
      }
  }
}

  render() {
    return (
      <div className="calculator">
        <Display string={this.state.string} answer={this.state.answer}/>
        <Button handleButton={this.handleButton}/>
      </div>
    );
  }
}

export default Calculator;
