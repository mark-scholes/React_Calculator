import React, { Component } from "react";
import Display from "./components/Display";
import NumPad from "./components/NumPad";
import Functions from "./components/Functions";
import "./index.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      display: "0",
    };
    this.handleNumber = this.handleNumber.bind(this);
  }

  handleNumber(e) {
    const val = e.target.textContent;
    console.log(val);
    const classOf = e.target.className;
    const { display } = this.state;

    if (classOf === "number" && val !== "=" && val !== ".") {
      display === "0"
        ? this.setState({ display: val })
        : this.setState({ display: display.concat(val) });
    } else if (val === "AC") {
      this.setState({ display: "0" });
    } else if (val === ".") {
      let index = display.lastIndexOf(" ");
      console.log(index);
      !display.slice(index).includes(".") &&
        isNaN(parseInt(display.slice(-1))) === false &&
        this.setState({ display: display.concat(val) });
    } else if (isNaN(parseInt(display.slice(-1))) === false || val === "=") {
      val !== "="
        ? this.setState({
            display: display.concat(" ").concat(val).concat(" "),
          })
        : this.setState({
            display: eval(display).toString(),
          });
    }
  }

  render() {
    return (
      <div id="container">
        <div id="Calculator">
          <Display total={this.state.display} />
          <NumPad handleNumber={this.handleNumber} />
          <Functions handleNumber={this.handleNumber} />
        </div>
      </div>
    );
  }
}

export default App;
