import React from "react";

const CompA = ({a , arr}) => {
  return (
    <>
      <h1 style={{ color: "red" }}>Hiii</h1>
      <h2>The value of a is:{a}</h2>
      {arr.map((element,index)=>{
            return(
                <>
                <div key={index}>
                <h1>{element}</h1>
                </div>
                
                </>
            )
         }
        )}
    </>
  );
};

export default CompA;
