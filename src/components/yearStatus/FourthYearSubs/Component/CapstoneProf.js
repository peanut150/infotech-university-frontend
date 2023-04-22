import { FormControlLabel, FormGroup } from "@mui/material";
import React, { useState } from "react";
import BackBtn from "./BackBtn";
import {Checkbox} from "@mui/material";
import CheckBox from "./CheckBox";
import SemBtn from "../../../buttonprops/SemBtn";

function Capstone({onClickBack, onClickNext, title}) {
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
                <h4 style={{fontWeight:"bold", fontSize: 30}}>SUBJECT: IT411 - Capstone Project and Research 2</h4>
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
                        <h1 style={{fontSize: 25, fontWeight:"normal"}}>Instructor 1: Mr. Dwight Feliciano</h1>
                </div>

                <div style={{marginTop: "1rem", marginLeft:"40rem"}}>
                    <CheckBox value="M 11:00AM-1:00PM" title="M 11:00AM-1:00PM"></CheckBox>
                    <CheckBox value="W 1:00PM-3:00PM" title="W 1:00PM-3:00PM"></CheckBox>
                    <CheckBox value="TH 10:30AM-12:30PM" title="TH 10:30AM-12:30PM"></CheckBox>
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
                        <h1 style={{fontSize: 25, fontWeight:"normal"}}>Instructor 2: Ms. Jelian Buco</h1>
                    </div>
                    
                    <div style={{marginTop: "1rem", marginLeft:"40rem"}}>
                        <CheckBox value="T 4:00PM- 6:00PM" title="T 4:00PM- 6:00PM"></CheckBox>
                        <CheckBox value="W 9:00AM- 11:00AM" title="W 9:00AM- 11:00AM"></CheckBox>
                        <CheckBox value="F 7:30AM-9:30AM" title="F 7:30AM-9:30AM"></CheckBox>
                    </div>
                    <div style={{display:"flex", flexDirection:"row"}}>
                        <div >
                        <BackBtn title="BACK" onClick={onClickBack}></BackBtn>
                        </div>
                        <div style={{marginLeft:"74rem"}}>
                            <BackBtn title="NEXT" onClick={onClickNext}></BackBtn>
                        </div>
                    </div>
                    
                        


                </div>
                

                


             </div>
      </div>
      </>
        
  );
}

export default Capstone;