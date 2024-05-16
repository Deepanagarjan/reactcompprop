import React from "react";
import CompA from "./Components/CompA/CompA";
import CompB from "./Components/CompB/CompB";
import CompC from "./Components/CompC/CompC";
import CompD from "./Components/CompD/CompD";

const App = () => {
  const a = 10;
  const arr = [1,2,3,4,5];
  const obj = {name:"deepa",age:"25"}
  const arrobj = 
  [
    {id:1,name:"deepa",age:25},
    {id:2,name:"arjun",age:27},
    {id:3,name:"saro",age:28},
  ]
  return (
    <>
      <h1>App component</h1>
      <CompA a = {a} arr={arr}/>
      <CompB obj = {obj}/>
      <CompC arr={arr}/>
      <CompD  arrobj={arrobj}/>
    </>
  );
};

export default App;
