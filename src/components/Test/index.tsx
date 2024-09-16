import React from "react";
const TestComp: React.FC<any> = ({ inner }) => {
  return (
    <div>
      <h4>This is a failing Semgrep test</h4>
      <div dangerouslySetInnerHTML={{ __html: inner }} />
    </div>
  );
};

function TestComponent2(foo) {
  // ruleid:react-dangerouslysetinnerhtml
  let params = {
    smth: "test123",
    dangerouslySetInnerHTML: { __html: foo },
    a: b,
  };
  return React.createElement("div", params);
}

export default TestComp;
