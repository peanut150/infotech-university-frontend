import { FormControlLabel, FormGroup } from "@mui/material";
import React, { useState } from "react";
import BackBtn from "../../../buttonprops/BackBtn";
import {Checkbox} from "@mui/material";
import CheckBox from "./CheckBox";
import SemBtn from "../../../buttonprops/SemBtn";
import Confirmation from "../../../../pages/dashboard/Confirmation";

function NSTP1({onClickBack, onClickNext, title}) {
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

              <div style={{marginLeft: "-10rem", marginTop: "-5rem"}}>
                <h4 style={{fontWeight:"bold", fontSize: 30}}>SUBJECT: NSTP101 - ROTC/CWTS/LTS I </h4>
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
                    <h1 style={{fontSize: 25, fontWeight:"normal"}}>Instructor 1: Mr. Juanito Inot</h1>
                </div>
                
                <div style={{marginTop: "1rem", marginLeft:"40rem"}}>
                    <CheckBox value="M 8:00AM-11:00AM" title="M 8:00AM-11:00AM"></CheckBox>
                    <CheckBox value="W 3:00PM-6:00PM" title="W 3:00PM-6:00PM"></CheckBox>
                    <CheckBox value="S 1:00PM-4:00PM" title="S 1:00PM-4:00PM"></CheckBox>
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
                        <h1 style={{fontSize: 25, fontWeight:"normal"}}>Instructor 2: Ms. Mary Chris Tan</h1>
                    </div>
                    
                    <div style={{marginTop: "1rem", marginLeft:"40rem"}}>
                        <CheckBox value="T 11:00AM- 1:00PM" title="T 11:00AM- 1:00PM"></CheckBox>
                        <CheckBox value="W 1:00PM-4:00PM" title="W 1:00PM-4:00PM"></CheckBox>
                        <CheckBox value="S 9:00AM-12:00AM" title="S 9:00AM-12:00AM"></CheckBox>
                    </div>

                </div>
             </div>
                <div style={{marginTop: 90}}>
                    <BackBtn title="BACK" onClick={onClickBack}></BackBtn>
                </div>
                <div style={{marginLeft: "60rem", marginTop: 90}}>
                    <BackBtn title="NEXT" onClick={onClickNext}></BackBtn>
                </div>
                
            
             
             
      </div>
      </>
        
  );
}

export default NSTP1;