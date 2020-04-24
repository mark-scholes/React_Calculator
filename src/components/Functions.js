import React, { Component } from "react";

class Functions extends Component {
  render() {
    const operators = [
      {
        value: "AC",
        id: "clear",
      },
      {
        value: "/",
        id: "divide",
      },
      {
        value: "*",
        id: "multiply",
      },
      {
        value: "-",
        id: "subtract",
      },
      {
        value: "+",
        id: "add",
      },
    ];
    return (
      <div className="functions">
        {operators.map((operator) => {
          return (
            <div
              className="operator"
              key={operator.value}
              id={operator.id}
              onClick={this.props.handleNumber}
            >
              {operator.value}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Functions;
