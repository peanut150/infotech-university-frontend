import { FormControlLabel, FormGroup } from "@mui/material";
import React, { useState } from "react";
import BackBtn from "../../../buttonprops/BackBtn";
import {Checkbox} from "@mui/material";
import CheckBox from "./CheckBox";
import SemBtn from "../../../buttonprops/SemBtn";

function IPT({onClickBack, onClickNext, title}) {
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
                <h4 style={{fontWeight:"bold", fontSize: 30}}>SUBJECT: IT322 - Integrative Programming and Technologies</h4>
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
                    <h1 style={{fontSize: 25, fontWeight:"normal"}}>Instructor 1: Mr. Dario C. Miñoza Jr.</h1>
                </div>
                
                <div style={{marginTop: "1rem", marginLeft:"40rem"}}>
                    <CheckBox value="T 9:00AM-11:00AM" title="T 9:00AM-11:00AM"></CheckBox>
                    <CheckBox value="W 2:00PM-4:00PM" title="W 2:00PM-4:00PM"></CheckBox>
                    <CheckBox value="F 10:30AM-12:30PM" title="F 10:30AM-12:30PM"></CheckBox>
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
                        <h1 style={{fontSize: 25, fontWeight:"normal"}}>Instructor 2: Mrs. Marivic Villalobos</h1>
                    </div>
                    
                    <div style={{marginTop: "1rem", marginLeft:"40rem"}}>
                        <CheckBox value="M 7:00PM- 9:00PM" title="M 7:00PM- 9:00PM"></CheckBox>
                        <CheckBox value="TH 1:30PM- 3:30PM" title="TH 1:30PM- 3:30PM"></CheckBox>
                        <CheckBox value="S 9:00AM- 11:00AM" title="S 9:00AM- 11:00AM"></CheckBox>
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

export default IPT;