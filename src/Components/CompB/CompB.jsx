import React from "react";
import "../CompB/CompB.css";

const CompB = ({obj}) => {
  return (
    <>
      <h1 className="cat">hello</h1>
      <h2>Name:{obj.name}</h2>
      <h2>Age:{obj.age}</h2>
    </>
  );
};

export default CompB;
