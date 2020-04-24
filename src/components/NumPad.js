import React, { Component } from "react";

class NumPad extends Component {
  render() {
    const numbers = [
      { value: 7, id: "seven" },
      { value: 8, id: "eight" },
      { value: 9, id: "nine" },
      { value: 4, id: "four" },
      { value: 5, id: "five" },
      { value: 6, id: "six" },
      { value: 1, id: "one" },
      { value: 2, id: "two" },
      { value: 3, id: "three" },
      { value: 0, id: "zero" },
      { value: ".", id: "decimal" },
      { value: "=", id: "equals" },
    ];
    return (
      <div className="numpad">
        {numbers.map((number) => {
          return (
            <div
              onClick={this.props.handleNumber}
              className="number"
              id={number.id}
              key={number.id}
            >
              {number.value}
            </div>
          );
        })}
      </div>
    );
  }
}
export default NumPad;
