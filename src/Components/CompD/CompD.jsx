import React from "react";

const CompD = ({arrobj}) => {
  return (
    <>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        {arrobj.map((element,index)=>{
          return(
            <>
            <div key={index}>
            <div class="col">
          <div class="card">
             <div class="card-body">
              <h4 class="card-title">{element.id}</h4>
              <h4 class="card-title">{element.name}</h4>
              <h4 class="card-title">{element.age}</h4>
             </div>
             <div class="card-footer">
              <button class= "btn btn-danger">Button</button>
             </div>
          </div>
        </div>
        </div>
        </> 
          )
        })
}         
        
      </div>
    </>
  );
};

export default CompD;
