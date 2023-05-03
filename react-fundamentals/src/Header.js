import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Button } from "./Button";
import { ThemeContext } from "./ThemeContext";

import styles from "./Header.css";

export function Header({ title, children }) {
  const { onToggleTheme } = useContext(ThemeContext);
  return (
    <>
      <h1 className={styles.title}>{title}</h1>
      <Button onClick={onToggleTheme}>Mudar tema</Button>
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
