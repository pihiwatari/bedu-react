import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
