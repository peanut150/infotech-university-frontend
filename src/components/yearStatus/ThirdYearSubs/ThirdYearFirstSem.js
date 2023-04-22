import React, { useState } from "react";
import BackBtn from "../../buttonprops/BackBtn";
import SubjectBtn from "./SubjectBtn";
import IAS from "../ThirdYearSubs/Component/IASProf";
import ITElect1 from "../ThirdYearSubs/Component/ITElect1Prof";
import Mobprog from "../ThirdYearSubs/Component/MobProgProf";
import Net2 from "../ThirdYearSubs/Component/Net2Prof";
import SoftEng from "../ThirdYearSubs/Component/SoftEngProf";
import Techno from "../ThirdYearSubs/Component/TechnoProf";


function ThirdYearFirstSem({onClickBack, onClickNext, title}) {
const [showIT311, setShowIT311] = useState(false)
const [showIT312, setShowIT312] = useState(false)
const [showIT313, setShowIT313] = useState(false)
const [showIT314, setShowIT314] = useState(false)
const [showIT315, setShowIT315] = useState(false)
const [showES211A, setShowES211A] = useState(false)
const [show, setShow] = useState(true)
  return (

    <>
    
        <div style={{ backgroundColor: "#F6F6F6", height: "100%", width:"100%", display:"flex", position:"absolute"}}>

          {showIT311 ? (
            <>
            <IAS onClickBack={() => setShow(!show) & setShowIT311(!showIT311)} onClickNext={() => setShow(!show) & setShowIT311(!showIT311)}></IAS>
            </>
          ) : null}

          {showIT312 ? (
            <>
            <Net2 onClickBack={() => setShow(!show) & setShowIT312(!showIT312)} onClickNext={() => setShow(!show) & setShowIT312(!showIT312)}></Net2>
            </>
          ) : null}

          {showIT313 ? (
             <>
             <Mobprog onClickBack={() => setShow(!show) & setShowIT313(!showIT313)} onClickNext={() => setShow(!show) & setShowIT313(!showIT313)}></Mobprog>
             </>
          ) : null}

          {showIT314 ? (
             <>
             <SoftEng onClickBack={() => setShow(!show) & setShowIT314(!showIT314)} onClickNext={() => setShow(!show) & setShowIT314(!showIT314)}></SoftEng>
             </>
          ) : null}

          {showIT315 ? (
              <>
              <ITElect1 onClickBack={() => setShow(!show) & setShowIT315(!showIT315)} onClickNext={() => setShow(!show) & setShowIT315(!showIT315)}></ITElect1>
              </>
          ) : null}

          {showES211A ? (
              <>
              <Techno onClickBack={() => setShow(!show) & setShowES211A(!showES211A)} onClickNext={() => setShow(!show) & setShowES211A(!showES211A)}></Techno>
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
                <SubjectBtn onClick={() => setShow(!show) & setShowIT311(!showIT311)} code="IT311" title="Information Assurance and Security"></SubjectBtn>
              </div>
              <div>
                <SubjectBtn onClick={() => setShow(!show) & setShowIT312(!showIT312)} code="IT312" title="Networking 2"></SubjectBtn>
              </div>
              <div>
                <SubjectBtn onClick={() => setShow(!show) & setShowIT313(!showIT313)} code="IT313" title="Mobile Programming"></SubjectBtn>
              </div>
              <div>
                <SubjectBtn onClick={() => setShow(!show) & setShowIT314(!showIT314)} code="IT314" title="Software Engineering"></SubjectBtn>
              </div>
              <div>
                <SubjectBtn onClick={() => setShow(!show) & setShowIT315(!showIT315)} code="IT315" title="IT Elective 1"></SubjectBtn>
              </div>
              <div>
                <SubjectBtn onClick={() => setShow(!show) & setShowES211A(!showES211A)} code="ES211A" title="Technopreneurship"></SubjectBtn>
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

export default ThirdYearFirstSem;