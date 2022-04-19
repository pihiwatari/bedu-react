import React from "react";
import PropTypes from "prop-types";

class Name extends React.Component {
  componentDidMount() {
    alert("Componente montado");
  }

  componentWillUnmount() {
    alert("bye");
  }

  render() {
    return (
      <div>
        {this.props.name}
        <button onClick={this.props.deleteNameFromList}>X</button>
      </div>
    );
  }
}

Name.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Name;
