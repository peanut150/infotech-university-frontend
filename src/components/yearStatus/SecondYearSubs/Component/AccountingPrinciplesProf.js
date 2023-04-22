import { FormControlLabel, FormGroup } from "@mui/material";
import React, { useState } from "react";
import BackBtn from "../../../buttonprops/BackBtn";
import {Checkbox} from "@mui/material";
import CheckBox from "./CheckBox";
import SemBtn from "../../../buttonprops/SemBtn";

function AccountingPrinciples({onClickBack, onClickNext, title}) {
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
                <h4 style={{fontWeight:"bold", fontSize: 30}}>SUBJECT: IT215 - Accounting Principles</h4>
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
                    <h1 style={{fontSize: 25, fontWeight:"normal"}}>Instructor 1: Mrs. Jacqueline J. Lucaban</h1>
                </div>
                
                <div style={{marginTop: "1rem", marginLeft:"40rem"}}>
                    <CheckBox value="M 1:00PM-3:00PM" title="M 1:00PM-3:00PM"></CheckBox>
                    <CheckBox value="T 10:00AM-12:00PM" title="T 10:00AM-12:00PM"></CheckBox>
                    <CheckBox value="TH 5:30PM-7:30PM" title="TH 5:30PM-7:30PM"></CheckBox>
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
                        <h1 style={{fontSize: 25, fontWeight:"normal"}}>Instructor 2: Mrs. Dianalyn Villalobos</h1>
                    </div>
                    
                    <div style={{marginTop: "1rem", marginLeft:"40rem"}}>
                        <CheckBox value="M 10:00AM- 12:00PM" title="M 10:00AM- 12:00PM"></CheckBox>
                        <CheckBox value="TH 7:00PM-9:00PM" title="TH 7:00PM-9:00PM"></CheckBox>
                        <CheckBox value="F 7:30PM-9:30PM" title="F 7:30PM-9:30PM"></CheckBox>
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

export default AccountingPrinciples;