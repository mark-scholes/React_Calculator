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

//Calculator tests

//passes:14 failures:2 duration:0.19

// 1. My calculator should contain a clickable element containing an "=" (equal sign) with a corresponding id="equals"
// 2. My calculator should contain 10 clickable elements containing one number each from 0-9, with the following corresponding IDs: id="zero", id="one", id="two", id="three", id="four", id="five", id="six", id="seven", id="eight", and id="nine"
// 3. My calculator should contain 4 clickable elements each containing one of the 4 primary mathematical operators with the following corresponding IDs: id="add", id="subtract", id="multiply", id="divide"
// 4. My calculator should contain a clickable element containing a "." (decimal point) symbol with a corresponding id="decimal"
// 5. My calculator should contain a clickable element with an id="clear"
// 6. My calculator should contain an element to display values with a corresponding id="display"
// 7. At any time, pressing the clear button clears the input and output values, and returns the calculator to its initialized state; 0 should be shown in the element with the id of "display"
// 8. As I input numbers, I should be able to see my input in the element with the id of "display"
// 9. In any order, I should be able to add, subtract, multiply and divide a chain of numbers of any length, and when I hit "=", the correct result should be shown in the element with the id of "display"
// 10. When inputting numbers, my calculator should not allow a number to begin with multiple zeros.
// 12. I should be able to perform any operation (+, -, *, /) on numbers containing decimal points
// 14. Pressing an operator immediately following "=" should start a new calculation that operates on the result of the previous evaluation
// 15. My calculator should have several decimal places of precision when it comes to rounding (note that there is no exact standard, but you should be able to handle calculations like "2 / 7" with reasonable precision to at least 4 decimal places)
// Close
// All of the above passed the requirements.

//11. When the decimal element is clicked, a "." should append to the currently displayed value; two "." in one number should not be accepted
// 13. If 2 or more operators are entered consecutively, the operation performed should be the last operator entered (excluding the negative (-) sign.
//These requirements have not been met
