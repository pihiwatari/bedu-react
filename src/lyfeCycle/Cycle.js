import React, { Component } from "react";

class Cycle extends Component {
  constructor(props) {
    super(props);
    this.state = { message: "" };
    this.state = {
      link: (
        <a rel="noreferrer" href="https://google.com" target="_blank">
          Link
        </a>
      ),
    };
  }

  render() {
    return (
      <div>
        <h1> {this.state.message}.</h1>
        {this.state.link}
      </div>
    );
  }

  componentDidMount() {
    alert("Componente montado");
    this.setState({ message: "El componente se ha actualizado" });
    this.setState({
      link: (
        <a rel="noreferrer" href="https://bedu.org" target="_blank">
          El link se actualizo
        </a>
      ),
    });
  }

  componentDidUpdate() {
    alert("actualizado");
  }
}

export default Cycle;
