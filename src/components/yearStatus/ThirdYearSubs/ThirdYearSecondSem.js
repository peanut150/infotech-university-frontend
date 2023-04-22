import React from "react";
import { useState } from "react";
import BackBtn from "../../buttonprops/BackBtn";
import SubjectBtn from "./SubjectBtn";
import CheckBox from "./Component/CheckBox";
import AppDev from "./Component/AppDevProf"
import Capstone1 from "./Component/Capstone1Prof";
import IPT from "./Component/IPTProf";
import Quanti from "./Component/QuantiProf";
import ITElect2 from "./Component/ITElect2Prof";
import PICPE from "./Component/PICPEProf";
import ForeignLang from "./Component/FLProf";

function ThirdYearSecondSem({onClickBack, onClickNext, title}) {
const [showIT321, setShowIT321] = useState(false)
const [showIT322, setShowIT322] = useState(false)
const [showIT323, setShowIT323] = useState(false)
const [showIT324, setShowIT324] = useState(false)
const [showIT325, setShowIT325] = useState(false)
const [showPICPE, setShowPICPE] = useState(false)
const [showFreeElec, setShowFreeElec] = useState(false)
const [show, setShow] = useState(true)
  return (
  <>
    
    <div style={{ backgroundColor: "#F6F6F6", height: "100%", width:"100%", display:"flex", position:"absolute"}}>

      {showIT321 ? (
        <>
          <Capstone1 onClickBack={() => setShow(!show) & setShowIT321(!showIT321)} onClickNext={() => setShow(!show) & setShowIT321(!showIT321)}></Capstone1>
        </>
      ) : null}

      {showIT322 ? (
        <>
          <IPT onClickBack={() => setShow(!show) & setShowIT322(!showIT322)} onClickNext={() => setShow(!show) & setShowIT322(!showIT322)}></IPT>
        </>
      ) : null}

      {showIT323 ? (
        <>
          <AppDev onClickBack={() =>setShow(!show) & setShowIT323(!showIT323)} onClickNext={() =>setShow(!show) & setShowIT323(!showIT323)}></AppDev>
        </>
      ) : null}

      {showIT324 ? (
        <>
          <Quanti onClickBack={() => setShow(!show) & setShowIT324(!showIT324)} onClickNext={() => setShow(!show) & setShowIT324(!showIT324)}></Quanti>
        </>
      ) : null}

      {showIT325 ? (
        <>
          <ITElect2 onClickBack={() => setShow(!show) & setShowIT325(!showIT325)} onClickNext={() => setShow(!show) & setShowIT325(!showIT325)}></ITElect2>
        </>
      ) : null}

      {showPICPE ? (
        <>
          <PICPE onClickBack={() => setShow(!show) & setShowPICPE(!showPICPE)} onClickNext={() => setShow(!show) & setShowPICPE(!showPICPE)}></PICPE>
        </>
      ) : null}

      {showFreeElec ? (
        <>
          <ForeignLang onClickBack={() => setShow(!show) & setShowFreeElec(!showFreeElec)} onClickNext={() => setShow(!show) & setShowFreeElec(!showFreeElec)}></ForeignLang>
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
          <div style={{marginLeft: "-40rem", marginTop: "-4rem"}}>
            <h1 style={{fontWeight:"bold", fontSize: 60}}>LIST OF SUBJECTS</h1>
          </div>
          <div>
            <h3>{title}</h3>
          </div>
         </div>
         <div style={{display:"flex", flexDirection:"column", marginLeft: 55, marginTop: "6rem"}}>
          <div>
            <SubjectBtn onClick={() => setShow(!show) & setShowIT321(!showIT321)} code="IT321" title="Capstone Project and Research 1"></SubjectBtn>
          </div>
          <div>
            <SubjectBtn onClick={() => setShow(!show) & setShowIT322(!showIT322)} code="IT322" title="Integrative Programming and Technologies"></SubjectBtn>
          </div>
          <div>
            <SubjectBtn onClick={() => setShow(!show) & setShowIT323(!showIT323)} code="IT323" title="Applications Development and Emerging"></SubjectBtn>
          </div>
          <div>
            <SubjectBtn onClick={() => setShow(!show) & setShowIT324(!showIT324)} code="IT324" title="Quantitative Methods"></SubjectBtn>
          </div>
          <div>
            <SubjectBtn onClick={() => setShow(!show) & setShowIT325(!showIT325)} code="IT325" title="IT Elective 2"></SubjectBtn>
          </div>
          <div>
            <SubjectBtn onClick={() => setShow(!show) & setShowPICPE(!showPICPE)} code="PICPE" title="Philippine Indigenous and Peace Education"></SubjectBtn>
          </div>
          <div>
            <SubjectBtn onClick={() => setShow(!show) & setShowFreeElec(!showFreeElec)} code="FreeElec" title="Foreign Language"></SubjectBtn>
          </div>
         </div>
         <div style={{ display: 'flex', marginTop: "35rem", position:"absolute"}}>
          <button className='backbtn' onClick={onClickBack}>BACK</button>
          <button className='nextbtn' onClick={onClickNext} style={{marginLeft:"70rem"}}>NEXT</button>
      </div>
        </>
      ):null}
         
         
  </div>
  </>
    
);
}

export default ThirdYearSecondSem;