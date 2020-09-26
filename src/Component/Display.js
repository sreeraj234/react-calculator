import React from "react";
import "./Display.css";

class Display extends React.Component {   
    render() {
      const{string,answer} = this.props
    return (
        <div className="display">
            <p id="fl">{string}</p>
            <p id="sl">{answer}</p>
        </div>
    )

    }
}

export default Display
