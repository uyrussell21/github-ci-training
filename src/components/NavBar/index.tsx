import React from "react";
import * as moduleStyles from "./styles.module.css";

const styles = {
  navBarStyles: {
    backgroundColor: "salmon",
    padding: "16px 48px",
    marginBottom: 16,
  },
  list: {
    display: "flex",
    "li + li": {},
  },
} satisfies Record<
  string,
  React.CSSProperties | Record<string, React.CSSProperties>
>;

const NavBar: React.FC = () => {
  return (
    <nav style={styles.navBarStyles}>
      <ul className={moduleStyles.list}>
        <li>
          <a href="/" className={moduleStyles.link}>
            Home
          </a>
        </li>
        <li>
          <a href="/about" className={moduleStyles.link}>
            About
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
