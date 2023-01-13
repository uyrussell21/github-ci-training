import { render } from "@testing-library/react";
import * as Gatsby from "gatsby";
import React from "react";
import Index from "../index";

describe("IndexPage", () => {
  it(`h1 heading contains 'Gatsby'`, () => {
    const { getByTestId } = render(<Index />);
    const node = getByTestId(`h1-title`);
    expect(node.textContent).toContain("Gatsby");
  });
});
