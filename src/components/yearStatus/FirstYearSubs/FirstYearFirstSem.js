import React, { useState } from "react";
import BackBtn from "../../buttonprops/BackBtn";
import Comprog1 from "./Component/ComprogProf";
import MMW from "./Component/MMWProf";
import NSTP1 from "./Component/NSTP1Prof";
import PE1 from "./Component/PE1Prof";
import Purcom from "./Component/PurcomProf";
import Rph from "./Component/RPHProf";
import Tcw from "./Component/TCWProf";
import IntroToComputing from './Component/IntroProf';
import SubjectBtn from "./SubjectBtn"

function FirstYearFirstSem({onClickBack, title, onClickNext}) {
const [showNSTP101, setShowNSTP101] = useState(false)
const [showPE101d, setShowPE101d] = useState(false)
const [showEng101, setShowEng101] = useState(false)
const [showMath101, setShowMath101] = useState(false)
const [showSS103, setShowSS103] = useState(false)
const [showSS102, setShowSS102] = useState(false)
const [showIT112, setShowIT112] = useState(false)
const [showIT111, setShowIT111] = useState(false)
const [show, setShow] = useState(true)
  return (

    <>
    
        <div style={{ backgroundColor: "#F6F6F6", height: "100%", width:"100%", display:"flex", position:"absolute"}}>

          {showNSTP101 ? (
            <>
              <NSTP1 onClickBack={() => setShow(!show) & setShowNSTP101(!showNSTP101)} onClickNext={() => setShow(!show) & setShowNSTP101(!showNSTP101)}></NSTP1>
            </>
          ) : null}

          {showPE101d ? (
            <>
              <PE1 onClickBack={() => setShow(!show) & setShowPE101d(!showPE101d)} onClickNext={() => setShow(!show) & setShowPE101d(!showPE101d)}></PE1>
            </>
          ) : null}

          {showEng101 ? (
            <>
              <Purcom onClickBack={() =>setShow(!show) & setShowEng101(!showEng101)} onClickNext={() =>setShow(!show) & setShowEng101(!showEng101)}></Purcom>
            </>
          ) : null}

          {showMath101 ? (
            <>
              <MMW onClickBack={() => setShow(!show) & setShowMath101(!showMath101)} onClickNext={() => setShow(!show) & setShowMath101(!showMath101)}></MMW>
            </>
          ) : null}

          {showSS103 ? (
            <>
              <Tcw onClickBack={() => setShow(!show) & setShowSS103(!showSS103)} onClickNext={() => setShow(!show) & setShowSS103(!showSS103)}></Tcw>
            </>
          ) : null}

          {showSS102 ? (
            <>
              <Rph onClickBack={() => setShow(!show) & setShowSS102(!showSS102)} onClickNext={() => setShow(!show) & setShowSS102(!showSS102)}></Rph>
            </>
          ) : null}

          {showIT112 ? (
            <>
              <Comprog1 onClickBack={() => setShow(!show) & setShowIT112(!showIT112)} onClickNext={() => setShow(!show) & setShowIT112(!showIT112)}></Comprog1>
            </>
          ) : null}

          {showIT111 ? (
            <>
              <IntroToComputing onClickBack={() => setShow(!show) & setShowIT111(!showIT111)} onClickNext={() => setShow(!show) & setShowIT111(!showIT111)}></IntroToComputing>
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
                <SubjectBtn onClick={() => setShow(!show) & setShowNSTP101(!showNSTP101)} code="NSTP101" title="ROTC/CWTS/LTS 1"></SubjectBtn>
              </div>
              <div>
                <SubjectBtn onClick={() => setShow(!show) & setShowPE101d(!showPE101d)} code="PE101d" title="Physical Activity Towards Health and Fitness 1"></SubjectBtn>
              </div>
              <div>
                <SubjectBtn onClick={() => setShow(!show) & setShowEng101(!showEng101)} code="Eng101" title="Purposive Communication"></SubjectBtn>
              </div>
              <div>
                <SubjectBtn onClick={() => setShow(!show) & setShowMath101(!showMath101)} code="Math101" title="Mathematics in Modern World"></SubjectBtn>
              </div>
              <div>
                <SubjectBtn onClick={() => setShow(!show) & setShowSS103(!showSS103)} code="SS103" title="The Contemporary World"></SubjectBtn>
              </div>
              <div>
                <SubjectBtn onClick={() => setShow(!show) & setShowSS102(!showSS102)} code="SS102" title="Reading in Philippine History"></SubjectBtn>
              </div>
              <div>
                <SubjectBtn onClick={() => setShow(!show) & setShowIT112(!showIT112)} code="IT112" title="Computer Programming 1"></SubjectBtn>
              </div>
              <div>
                <SubjectBtn onClick={() => setShow(!show) & setShowIT111(!showIT111)} code="IT111" title="Introduction to Computing"></SubjectBtn>
              </div>
             </div>
             <div style={{ display: 'flex', marginTop: "40rem", position:"absolute"}}>
              <button className='backbtn' onClick={onClickBack}>BACK</button>
              <button className='nextbtn' onClick={onClickNext} style={{marginLeft:"70rem"}}>NEXT</button>
          </div>
            </>
          ):null}
             
             
      </div>
      </>
        
  );
}

export default FirstYearFirstSem;