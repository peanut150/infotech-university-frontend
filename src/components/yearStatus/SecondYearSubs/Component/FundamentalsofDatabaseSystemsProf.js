import { FormControlLabel, FormGroup } from "@mui/material";
import React, { useState } from "react";
import BackBtn from "../../../buttonprops/BackBtn";
import {Checkbox} from "@mui/material";
import CheckBox from "./CheckBox";
import SemBtn from "../../../buttonprops/SemBtn";

function FundamentalsofDatabaseSystems({onClickBack, onClickNext, title}) {
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
                <h4 style={{fontWeight:"bold", fontSize: 30}}>SUBJECT: IT212 - Fundamentals of Database Systems</h4>
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
                    <h1 style={{fontSize: 25, fontWeight:"normal"}}>Instructor 1: Ms. Geraldine A. Blanco</h1>
                </div>
                
                <div style={{marginTop: "1rem", marginLeft:"40rem"}}>
                    <CheckBox value="T 9:00AM-11:00AM" title="T 9:00AM-11:00AM"></CheckBox>
                    <CheckBox value="W 8:00AM-10:00AM" title="W 8:00AM-10:00AM"></CheckBox>
                    <CheckBox value="TH 5:00PM-8:00PM" title="TH 5:00PM-8:00PM"></CheckBox>
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
                        <h1 style={{fontSize: 25, fontWeight:"normal"}}>Instructor 2: Mrs. Petal May Dal</h1>
                    </div>
                    
                    <div style={{marginTop: "1rem", marginLeft:"40rem"}}>
                        <CheckBox value="M 9:00AM- 11:00AM" title="M 9:00AM- 11:00AM"></CheckBox>
                        <CheckBox value="T 6:00PM-8:00PM" title="T 6:00PM-8:00PM"></CheckBox>
                        <CheckBox value="W 1:00PM-3:00PM" title="W 1:00PM-3:00PM"></CheckBox>
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

export default FundamentalsofDatabaseSystems;