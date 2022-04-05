import React from "react";

class Luz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "pink",
    };
  }

  render() {
    return (
      <div
        className="luz"
        style={{ backgroundColor: this.props.color || this.state.color }}
      ></div>
    );
  }
}

export default Luz;
