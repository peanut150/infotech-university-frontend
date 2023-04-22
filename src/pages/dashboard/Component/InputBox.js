import React from "react"

export default function InputProps ({text}){
    return(
        <div>
                <div style={{justifyContent:"left", alignContent:"left", display:"flex", flexDirection:"column"}}>
                    <div style={{}}><h4 style={{fontWeight:"normal", textAlign:"left", marginLeft: "5rem"}}>{text}</h4></div>
                    <div style={{marginLeft: "5rem"}}><input required style={{height: 40, border: 0, backgroundColor:"#D9D9D9", width:"15rem", padding: 5}}></input></div>
                </div>
        </div>
  )
}
