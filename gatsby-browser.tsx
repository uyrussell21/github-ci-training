import type { GatsbyBrowser } from "gatsby";
import * as React from "react";
import NavBar from "./src/components/NavBar";
import "./src/styles/global.css";

const styles = {
  pageStyles: {
    color: "#232129",
    padding: "24px 96px",
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
  },
  footer: {
    margin: 12,
  },
} satisfies Record<string, React.CSSProperties>;

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
  element,
}) => {
  return (
    <>
      <NavBar />
      <main style={styles.pageStyles}>{element}</main>
      <hr />
      <footer style={styles.footer}>
        <small>uyrussell21</small>
      </footer>
    </>
  );
};
