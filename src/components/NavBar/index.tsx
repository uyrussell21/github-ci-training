import { Link } from "gatsby";
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
          <Link to="/" className={moduleStyles.link}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className={moduleStyles.link}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
