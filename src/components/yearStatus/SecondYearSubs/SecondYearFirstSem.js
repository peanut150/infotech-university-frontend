import React, { useState } from "react";
import BackBtn from "../../buttonprops/BackBtn";
import PhysicalActivityTowardsHealthandFitness1 from "./Component/PhysicalActivityTowardsHealthandFitness1Prof";
import SubjectBtn from "./SubjectBtn";
import ObjectOrientedProgramming from "./Component/ObjectOrientedProgrammingProf";
import AccountingPrinciples from "./Component/AccountingPrinciplesProf";
import FundamentalsofDatabaseSystems from "./Component/FundamentalsofDatabaseSystemsProf";
import PlatformTechnologies from "./Component/PlatformTechnologiesProf";
import IntrotoHumanComputerInteraction from "./Component/IntrotoHumanComputerInteractionProf";
import EnvironmentalScience from "./Component/EnvironemtalScienceProf";

function SecondYearFirstSem({onClickBack, onClickNext, title}) {
const [showPATHFIT3, setShowPATHFIT3] = useState(false)
const [showIT211, setShowIT211] = useState(false)
const [showIT212, setShowIT212] = useState(false)
const [showIT213, setShowIT213] = useState(false)
const [showIT214, setShowIT214] = useState(false)
const [showIT215, setShowIT215] = useState(false)
const [showEnviSci, setShowEnviSci] = useState(false)
const [show, setShow] = useState(true)
  return (

    <>
    
        <div style={{ backgroundColor: "#F6F6F6", height: "100%", width:"100%", display:"flex", position:"absolute"}}>

          {showPATHFIT3 ? (
            <>
            <PhysicalActivityTowardsHealthandFitness1 onClickBack={() => setShow(!show) & setShowPATHFIT3(!showPATHFIT3)} onClickNext={() => setShow(!show) & setShowPATHFIT3(!showPATHFIT3)}></PhysicalActivityTowardsHealthandFitness1>
            </>
          ) : null}

          {showIT211 ? (
            <>
            <IntrotoHumanComputerInteraction onClickBack={() => setShow(!show) & setShowIT211(!showIT211)} onClickNext={() => setShow(!show) & setShowIT211(!showIT211)}></IntrotoHumanComputerInteraction>
            </>
          ) : null}

          {showIT212 ? (
             <>
             <FundamentalsofDatabaseSystems onClickBack={() => setShow(!show) & setShowIT212(!showIT212)} onClickNext={() => setShow(!show) & setShowIT212(!showIT212)}></FundamentalsofDatabaseSystems>
             </>
          ) : null}

          {showIT213 ? (
             <>
             <PlatformTechnologies onClickBack={() => setShow(!show) & setShowIT213(!showIT213)} onClicNext={() => setShow(!show) & setShowIT213(!showIT213)}></PlatformTechnologies>
             </>
          ) : null}

          {showIT214 ? (
              <>
              <ObjectOrientedProgramming onClickBack={() => setShow(!show) & setShowIT214(!showIT214)} onClickNext={() => setShow(!show) & setShowIT214(!showIT214)}></ObjectOrientedProgramming>
              </>
          ) : null}

          {showIT215 ? (
              <>
              <AccountingPrinciples onClickBack={() => setShow(!show) & setShowIT215(!showIT215)} onClickNext={() => setShow(!show) & setShowIT215(!showIT215)}></AccountingPrinciples>
              </>
          ) : null}

          {showEnviSci ? (
              <>
              <EnvironmentalScience onClickBack={() => setShow(!show) & setShowEnviSci(!showEnviSci)} onClickNext={() => setShow(!show) & setShowEnviSci(!showEnviSci)}></EnvironmentalScience>
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
              <div style={{marginLeft: "-40rem", marginTop: "-3rem"}}>
                <h1 style={{fontWeight:"bold", fontSize: 60}}>LIST OF SUBJECTS</h1>
              </div>
              <div>
                <h3>{title}</h3>
              </div>
             </div>
             <div style={{display:"flex", flexDirection:"column", marginLeft: 55, marginTop: "8rem"}}>
              <div>
                <SubjectBtn onClick={() => setShow(!show) & setShowPATHFIT3(!showPATHFIT3)} code="PATHFIT3" title="Physical Activity Towards Health and Fitness 1"></SubjectBtn>
              </div>
              <div>
                <SubjectBtn onClick={() => setShow(!show) & setShowIT211(!showIT211)} code="IT211" title="Intro to Human Computer Interaction"></SubjectBtn>
              </div>
              <div>
                <SubjectBtn onClick={() => setShow(!show) & setShowIT212(!showIT212)} code="IT212" title="Fundamentals of Database Systems"></SubjectBtn>
              </div>
              <div>
                <SubjectBtn onClick={() => setShow(!show) & setShowIT213(!showIT213)} code="IT213" title="Platform Technologies"></SubjectBtn>
              </div>
              <div>
                <SubjectBtn onClick={() => setShow(!show) & setShowIT214(!showIT214)} code="IT214" title="Object Oriented Programming"></SubjectBtn>
              </div>
              <div>
                <SubjectBtn onClick={() => setShow(!show) & setShowIT215(!showIT215)} code="IT215" title="Accounting Principles"></SubjectBtn>
              </div>
              <div>
                <SubjectBtn onClick={() => setShow(!show) & setShowEnviSci(!showEnviSci)} code="EnviSci" title="Environmental Science"></SubjectBtn>
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

export default SecondYearFirstSem;