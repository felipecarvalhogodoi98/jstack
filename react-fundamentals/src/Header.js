import React from "react";
import PropTypes from "prop-types";

export function Header({ title, children }) {
  return (
    <>
      <h1>{title}</h1>
      {children}
    </>
  );
}

Header.prototype = {
  title: PropTypes.string,
  children: PropTypes.node,
};

Header.defaultProps = {
  title: "Jstack's blog",
};
