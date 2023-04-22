import React from "react";



export default function SemBtn ({title, onClick}){
    return(
        <div style={{marginTop: "15rem", marginLeft: "34rem", display:"flex", position:"relative"}}>
            <div>
            <button
            onClick={onClick}
            style={{
                display:"block",
                width: 390,
                height: 41,
                border:"none",
                background: "linear-gradient(to right, #18ABDA, #49C5EC, #7EE0FF)",
                borderRadius: 5,
                boxShadow:"5px 10px 15px #A9E1F2",
                color: "white",

            }}
            >{title}</button>
            </div>
            
        </div>
    )
}