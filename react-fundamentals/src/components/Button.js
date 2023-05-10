import React from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "../context/ThemeContext";

export function Button({ children, onClick }) {
  const { theme } = React.useContext(ThemeContext);

  return (
    <button
      onClick={onClick}
      style={{
        color: theme === "dark" ? "#fff" : "#000",
        background: theme === "dark" ? "#000" : "#fff",
      }}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};
