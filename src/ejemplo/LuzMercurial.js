import React from "react";

class LuzMercurial extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "pink",
    };
  }

  render() {
    return (
      <div
        className="luz-mercurial"
        style={{ backgroundColor: this.props.color || this.state.color }}
      />
    );
  }
}

export default LuzMercurial;
