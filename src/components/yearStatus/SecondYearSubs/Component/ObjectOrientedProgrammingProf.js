import { FormControlLabel, FormGroup } from "@mui/material";
import React, { useState } from "react";
import BackBtn from "../../../buttonprops/BackBtn";
import {Checkbox} from "@mui/material";
import CheckBox from "./CheckBox";
import SemBtn from "../../../buttonprops/SemBtn";

function ObjectOrientedProgramming({onClickBack, onClickNext, title}) {
const [show, setShow] = useState(true)
  return (

    <>
    
        <div style={{ backgroundColor: "#F6F6F6", height: "100%", width:"100%", display:"flex", position:"absolute"}}>
             <div style=
                {
                  {
                    textAlign:"center",
                    position:"absolute",
                    left: "19rem",
                    top: 70
                  }
                }>
              <div style={{marginLeft: "-10rem", marginTop: "-3rem"}}>
                <h4 style={{fontWeight:"bold", fontSize: 30}}>SUBJECT: IT214 - Object Oriented Programming</h4>
              </div>              
             </div>


             <div>
                <div
                    style={{
                        marginLeft: "20rem",
                        marginTop: "7rem",
                        width: 800,
                        height: 41,
                        border:"none",
                        background: "linear-gradient(to right, #18ABDA, #49C5EC, #7EE0FF)",
                        borderRadius: 5,
                        boxShadow:"5px 10px 15px #A9E1F2",
                        color: "white",
                        textAlign:"left",
                        paddingLeft: 20

                    }}
                >
                    <h1 style={{fontSize: 25, fontWeight:"normal"}}>Instructor 1: Mrs. Jocelyn Garrido</h1>
                </div>
                
                <div style={{marginTop: "1rem", marginLeft:"40rem"}}>
                    <CheckBox value="M 7:00AM-9:00AM" title="M 9:00AM-11:00AM"></CheckBox>
                    <CheckBox value="W 11:00AM-1:00PM" title="W 10:00AM-12:00PM"></CheckBox>
                    <CheckBox value="S 10:30AM-12:30PM" title="F 1:30PM-3:30PM"></CheckBox>
                </div>

                <div style={{marginTop:"-6rem"}}>

                    <div
                        style={{
                            marginLeft: "20rem",
                            marginTop: "7rem",
                            width: 800,
                            height: 41,
                            border:"none",
                            background: "linear-gradient(to right, #18ABDA, #49C5EC, #7EE0FF)",
                            borderRadius: 5,
                            boxShadow:"5px 10px 15px #A9E1F2",
                            color: "white",
                            textAlign:"left",
                            paddingLeft: 20

                        }}
                    >
                        <h1 style={{fontSize: 25, fontWeight:"normal"}}>Instructor 2: Mrs. Marivic Damalan</h1>
                    </div>
                    
                    <div style={{marginTop: "1rem", marginLeft:"40rem"}}>
                        <CheckBox value="T 1:00PM- 3:00PM" title="T 1:00PM- 3:00PM"></CheckBox>
                        <CheckBox value="W 11:00AM- 1:00PM" title="W 11:00AM- 1:00PM"></CheckBox>
                        <CheckBox value="TH 7:00AM- 9:00PM" title="TH 7:00AM- 9:00PM"></CheckBox>
                    </div>

                </div>
             </div>
             <div style={{ display: 'flex', marginTop: "35rem", position:"absolute"}}>
              <button className='backbtn' onClick={onClickBack}>BACK</button>
              <button className='nextbtn' onClick={onClickNext} style={{marginLeft:"70rem"}}>NEXT</button>
          </div>
            
             
             
      </div>
      </>
        
  );
}

export default ObjectOrientedProgramming;