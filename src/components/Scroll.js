import React from "react";

const Scroll = (props) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "3px solid #444",
        height: "70vh",
        marginTop: "10px",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
