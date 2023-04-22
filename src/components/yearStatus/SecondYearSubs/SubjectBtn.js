import React from "react";
import { Button } from "@mui/material";


export default function SubjectBtn ({title, onClick, code}){
    return(
        <div style={{fontWeight:"lighter", marginTop: "1rem", marginLeft: "19rem", display:"flex", position:"relative"}}>
            <div>
                <div>
                    <h4 style={{color: "white", marginLeft: 20, marginTop: 10, display:"flex", position:"absolute", zIndex: 1}}>{code}</h4>
                </div>
                
            <Button
            onClick={onClick}
            style={{
                display:"block",
                width: 847,
                height: 41,
                border:"none",
                background: "linear-gradient(to right, #18ABDA, #49C5EC, #7EE0FF)",
                borderRadius: 5,
                boxShadow:"9px 20px 15px #A9E1F2",
                color: "white",
                textAlign:"left",
                paddingLeft:150,

            }}
            >{title}</Button>
            </div>
            
        </div>
    )
}