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
    const classOf = e.target.className;
    const { display } = this.state;
    const getFinalsequence = (display) => {
      let finalSequence = display.includes(" ")
        ? display.substr(display.lastIndexOf(" "))
        : display;
      return finalSequence;
    };

    if (classOf === "number" && val !== "=" && val !== ".") {
      display === "0"
        ? this.setState({ display: val })
        : this.setState({ display: display.concat(val) });
    } else if (val === "AC") {
      this.setState({ display: "0" });
    } else if (val === ".") {
      let testForDecimalPoint = getFinalsequence(display);
      if (
        display[display.length - 1] !== "." &&
        !testForDecimalPoint.includes(".")
      ) {
        this.setState({ display: display.concat(val) });
      }
    } else {
      if (val !== "=") {
        const symbolsRegex = /\/|\*|\-|\+/g;
        if (symbolsRegex.test(display.slice(-2, -1))) {
          console.log("true");
          let replacement = display
            .substr(0, display.length - 3)
            .concat(" ")
            .concat(val)
            .concat(" ");
          this.setState({
            display: replacement,
          });
        } else {
          console.log(false);
          this.setState({
            display: display.concat(" ").concat(val).concat(" "),
          });
        }
      } else {
        this.setState({
          display: eval(display).toString(),
        });
      }
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
