import React, { Component } from "react";

class Display extends Component {
  render() {
    return (
      <div className="display" id="display">
        {this.props.total}
      </div>
    );
  }
}
export default Display;
