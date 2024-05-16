import React from 'react';

const CompC = ({arr}) => {
    const handleSubmit = ()  =>{
        alert("Iam fine thanks for asking")
    }
    return (
        <>
         <h1>how r u</h1> 
         <button onClick={handleSubmit}>Click me</button> 
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

export default CompC;