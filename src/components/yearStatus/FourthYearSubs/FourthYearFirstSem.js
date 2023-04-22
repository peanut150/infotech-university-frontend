import React, { useState } from "react";
import BackBtn from "./Component/BackBtn";
import Capstone from "./Component/CapstoneProf";
import SubjectBtn from "./SubjectBtn";
import SAM from "./Component/SAMProf";
import SocProf from "./Component/SocProfIssuesProf";
import ITElec3 from "./Component/ITElec3Prof";
import ITElect4 from "./Component/ITElec4Prof";
import GnS from "./Component/GnSProf";

function FourthYearFirstSem({onClickBack, onClickNext, title}) {
const [showIT411, setShowIT411] = useState(false)
const [showIT412, setShowIT412] = useState(false)
const [showIT413, setShowIT413] = useState(false)
const [showIT414, setShowIT414] = useState(false)
const [showIT415, setShowIT415] = useState(false)
const [showGnS, setShowGnS] = useState(false)
const [show, setShow] = useState(true)
  return (

    <>
    
        <div style={{ backgroundColor: "#F6F6F6", height: "100%", width:"100%", display:"flex", position:"absolute"}}>

          {showIT411 ? (
            <>
            <Capstone onClickBack={() => setShow(!show) & setShowIT411(!showIT411)} onClickNext={() => setShow(!show) & setShowIT411(!showIT411)}></Capstone>
            </>
          ) : null}

          {showIT412 ? (
            <>
            <SAM onClickBack={() => setShow(!show) & setShowIT412(!showIT412)} onClickNext={() => setShow(!show) & setShowIT412(!showIT412)}></SAM>
            </>
          ) : null}

          {showIT413 ? (
             <>
             <SocProf onClickBack={() => setShow(!show) & setShowIT413(!showIT413)} onClickNext={() => setShow(!show) & setShowIT413(!showIT413)}></SocProf>
             </>
          ) : null}

          {showIT414 ? (
             <>
             <ITElec3 onClickBack={() => setShow(!show) & setShowIT414(!showIT414)} onClickNext={() => setShow(!show) & setShowIT414(!showIT414)}></ITElec3>
             </>
          ) : null}

          {showIT415 ? (
              <>
              <ITElect4 onClickBack={() => setShow(!show) & setShowIT415(!showIT415)} onClickNext={() => setShow(!show) & setShowIT415(!showIT415)}></ITElect4>
              </>
          ) : null}

          {showGnS ? (
              <>
              <GnS onClickBack={() => setShow(!show) & setShowGnS(!showGnS)} onClickNext={() => setShow(!show) & setShowGnS(!showGnS)}></GnS>
              </>
          ) : null}

          {show ? (
            <>
            <div style=
                {
                  {
                    textAlign:"center",
                    position:"absolute",
                    left: "40rem",
                    top: 70
                  }
                }>
              <div style={{marginLeft: "-40rem", marginTop: "-5rem"}}>
                <h1 style={{fontWeight:"bold", fontSize: 60}}>LIST OF SUBJECTS</h1>
              </div>
              <div>
                <h3>{title}</h3>
              </div>
             </div>
             <div style={{display:"flex", flexDirection:"column", marginLeft: 55, marginTop: "8rem"}}>
              <div>
                <SubjectBtn onClick={() => setShow(!show) & setShowIT411(!showIT411)} code="IT411" title="Capstone Project and Research 2"></SubjectBtn>
              </div>
              <div>
                <SubjectBtn onClick={() => setShow(!show) & setShowIT412(!showIT412)} code="IT412" title="Systems Administration and Maintenance"></SubjectBtn>
              </div>
              <div>
                <SubjectBtn onClick={() => setShow(!show) & setShowIT413(!showIT413)} code="IT413" title="Social and Professional Issues"></SubjectBtn>
              </div>
              <div>
                <SubjectBtn onClick={() => setShow(!show) & setShowIT414(!showIT414)} code="IT414" title="IT Elective 3"></SubjectBtn>
              </div>
              <div>
                <SubjectBtn onClick={() => setShow(!show) & setShowIT415(!showIT415)} code="IT415" title="IT Elective 4"></SubjectBtn>
              </div>
              <div>
                <SubjectBtn onClick={() => setShow(!show) & setShowGnS(!showGnS)} code="GnS" title="Gender And Society"></SubjectBtn>
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
             
            </>
          ):null}
             
             
      </div>
      </>
        
  );
}

export default FourthYearFirstSem;