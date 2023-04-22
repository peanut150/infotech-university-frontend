import React, { useState } from "react";
import BackBtn from "../../buttonprops/BackBtn";
import PhysicalActivityTowardsHealthandFitness2 from "./Component/PhysicalActivityTowardsHealthandFitness2Prof";
import SubjectBtn from "./SubjectBtn";
import InformationManagement from "./Component/InformationManagementProf";
import Networking1 from "./Component/Networking1Prof";
import WebSystemsandTechnologies from "./Component/WebSystemsandTechnologiesProf";
import SystemsIntegrationandArchitecture from "./Component/SystemsIntegrationandArchitectureProf";
import Ethics from "./Component/EthicsProf";
import LifeandWorksofRizal from "./Component/LifeandWorksofRizalProf";

function SecondYearSecondSem({onClickBack, onClickNext, title}) {
const [showPATHFIT4, setShowPATHFIT4] = useState(false)
const [showIT221, setShowIT221] = useState(false)
const [showIT222, setShowIT222] = useState(false)
const [showIT223, setShowIT223] = useState(false)
const [showIT224, setShowIT224] = useState(false)
const [showEthc, setShowEthc] = useState(false)
const [showRizal, setShowRizal ] = useState(false)
const [show, setShow] = useState(true)
  return (

    <>
    
        <div style={{ backgroundColor: "#F6F6F6", height: "100%", width:"100%", display:"flex", position:"absolute"}}>

          {showPATHFIT4 ? (
            <>
            <PhysicalActivityTowardsHealthandFitness2 onClickBack={() => setShow(!show) & setShowPATHFIT4(!showPATHFIT4)} onClickNext={() => setShow(!show) & setShowPATHFIT4(!showPATHFIT4)}></PhysicalActivityTowardsHealthandFitness2>
            </>
          ) : null}

          {showIT221 ? (
            <>
            <InformationManagement onClickBack={() => setShow(!show) & setShowIT221(!showIT221)} onClickNext={() => setShow(!show) & setShowIT221(!showIT221)}></InformationManagement>
            </>
          ) : null}

          {showIT222 ? (
             <>
             <Networking1 onClickBack={() => setShow(!show) & setShowIT222(!showIT222)} onClickNext={() => setShow(!show) & setShowIT222(!showIT222)}></Networking1>
             </>
          ) : null}

          {showIT223 ? (
             <>
             <WebSystemsandTechnologies onClickBack={() => setShow(!show) & setShowIT223(!showIT223)} onClickNext={() => setShow(!show) & setShowIT223(!showIT223)}></WebSystemsandTechnologies>
             </>
          ) : null}

          {showIT224 ? (
              <>
              <SystemsIntegrationandArchitecture onClickBack={() => setShow(!show) & setShowIT224(!showIT224)} onClickNext={() => setShow(!show) & setShowIT224(!showIT224)}></SystemsIntegrationandArchitecture>
              </>
          ) : null}

          {showEthc ? (
              <>
              <Ethics onClickBack={() => setShow(!show) & setShowEthc(!showEthc)} onClickNext={() => setShow(!show) & setShowEthc(!showEthc)}></Ethics>
              </>
          ) : null}

          {showRizal ? (
              <>
              <LifeandWorksofRizal onClickBack={() => setShow(!show) & setShowRizal(!showRizal)} onClickNext={() => setShow(!show) & setShowRizal(!showRizal)}></LifeandWorksofRizal>
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
                <SubjectBtn onClick={() => setShow(!show) & setShowPATHFIT4(!showPATHFIT4)} code="PATHFIT4" title="Physical Activity Towards Health and Fitness 2"></SubjectBtn>
              </div>
              <div>
                <SubjectBtn onClick={() => setShow(!show) & setShowIT221(!showIT221)} code="IT221" title="Information Management"></SubjectBtn>
              </div>
              <div>
                <SubjectBtn onClick={() => setShow(!show) & setShowIT222(!showIT222)} code="IT222" title="Networking 1"></SubjectBtn>
              </div>
              <div>
                <SubjectBtn onClick={() => setShow(!show) & setShowIT223(!showIT223)} code="IT223" title="Web Systems and Technologies"></SubjectBtn>
              </div>
              <div>
                <SubjectBtn onClick={() => setShow(!show) & setShowIT224(!showIT224)} code="IT224" title="Systems Integration and Architecture"></SubjectBtn>
              </div>
              <div>
                <SubjectBtn onClick={() => setShow(!show) & setShowEthc(!showEthc)} code="Ethc" title="Ethics"></SubjectBtn>
              </div>
              <div>
                <SubjectBtn onClick={() => setShow(!show) & setShowRizal(!showRizal)} code="Rizal" title="Life and Works of Rizal"></SubjectBtn>
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

export default SecondYearSecondSem;