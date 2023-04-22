import { FormControlLabel, FormGroup } from "@mui/material";
import React, { useState } from "react";
import BackBtn from "./BackBtn";
import {Checkbox} from "@mui/material";
import CheckBox from "./CheckBox";
import SemBtn from "../../../buttonprops/SemBtn";

function SAM({onClickBack, onClickNext, title}) {
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
                <h4 style={{fontWeight:"bold", fontSize: 30}}>SUBJECT: IT412 - Systems Administration and Maintenance</h4>
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
                    <h1 style={{fontSize: 25, fontWeight:"normal"}}>Instructor 1: Mrs. Dianalyn Villalobos</h1>
                </div>
                
                <div style={{marginTop: "1rem", marginLeft:"40rem"}}>
                    <CheckBox value="M 9:00AM-11:00AM" title="M 9:00AM-11:00AM"></CheckBox>
                    <CheckBox value="W 10:00AM-12:00PM" title="W 10:00AM-12:00PM"></CheckBox>
                    <CheckBox value="F 1:30PM-3:30PM" title="F 1:30PM-3:30PM"></CheckBox>
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
                        <h1 style={{fontSize: 25, fontWeight:"normal"}}>Instructor 2: Mrs. Clotilde Bacayawan</h1>
                    </div>
                    
                    <div style={{marginTop: "1rem", marginLeft:"40rem"}}>
                        <CheckBox value="M 1:00PM- 3:00PM" title="M 1:00PM- 3:00PM"></CheckBox>
                        <CheckBox value="W 1:30PM- 3:30PM" title="W 1:30PM- 3:30PM"></CheckBox>
                        <CheckBox value="TH 11:00AM- 1:00PM" title="TH 11:00AM- 1:00PM"></CheckBox>
                    </div>

                </div>
             </div>
             <div style={{display:"flex", position:"absolute", marginTop: "30rem"}}>
                <div>
                    <BackBtn title="BACK" onClick={onClickBack}></BackBtn>
                </div>
                <div style={{marginLeft:"70rem"}}>
                    <BackBtn title="NEXT" onClick={onClickNext}></BackBtn>
                </div>
             </div>
            
             
             
      </div>
      </>
        
  );
}

export default SAM;