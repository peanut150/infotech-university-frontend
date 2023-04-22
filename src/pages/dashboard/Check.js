import React from "react";

export default function Check({title}){
    return(
        <>
            <div style={{display:"flex", position:"absolute", flexDirection:"row"}}>
                <input type="checkbox" id='checkbox' style={{height: "2rem", width:"2rem", border:0}}></input> 
                <div style={{alignSelf:"center", marginLeft: 10}}><p>{title}</p></div>
            </div>
      </>
    )
}