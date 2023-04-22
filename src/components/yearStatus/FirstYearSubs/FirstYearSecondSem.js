import React, { useState } from "react";
import BackBtn from "../../buttonprops/BackBtn";
import ArtApp from "../FirstYearSubs/Component/ArtAppProf"
import Comprog2 from "../FirstYearSubs/Component/Comprog2Prof"
import DiscreteMath from "../FirstYearSubs/Component/DiscreteMathProf"
import Dsalgo from "../FirstYearSubs/Component/DsalgoProf"
import NSTP2 from "../FirstYearSubs/Component/NSTP2Prof"
import PE2 from "../FirstYearSubs/Component/PE2Prof"
import STS from "../FirstYearSubs/Component/StsProf"
import UTS from "../FirstYearSubs/Component/UtsProf"
import SubjectBtn from "./SubjectBtn"

function FirstYearFirstSem({onClickBack, title, onClickNext}) {
const [showArtApp, setShowArtApp] = useState(false)
const [showPathFit2, setShowPathFit2] = useState(false)
const [showIT121, setShowIT121] = useState(false)
const [showIT123, setShowIT123] = useState(false)
const [showIT122, setShowIT122] = useState(false)
const [showNSTP102, setShowNSTP102] = useState(false)
const [showSTS, setShowSTS] = useState(false)
const [showUTS, setShowUTS] = useState(false)
const [show, setShow] = useState(true)
  return (

    <>
    
        <div style={{ backgroundColor: "#F6F6F6", height: "100%", width:"100%", display:"flex", position:"absolute"}}>

          {showNSTP102 ? (
            <>
              <NSTP2 onClickBack={() => setShow(!show) & setShowNSTP102(!showNSTP102)} onClickNext={() => setShow(!show) & setShowNSTP102(!showNSTP102)}></NSTP2>
            </>
          ) : null}

          {showPathFit2 ? (
            <>
              <PE2 onClickBack={() => setShow(!show) & setShowPathFit2(!showPathFit2)} onClickNext={() => setShow(!show) & setShowPathFit2(!showPathFit2)}></PE2>
            </>
          ) : null}

          {showIT121 ? (
            <>
              <Comprog2 onClickBack={() =>setShow(!show) & setShowIT121(!showIT121)} onClickNext={() =>setShow(!show) & setShowIT121(!showIT121)}></Comprog2>
            </>
          ) : null}

          {showIT123 ? (
            <>
              <DiscreteMath onClickBack={() => setShow(!show) & setShowIT123(!showIT123)} onClickNext={() => setShow(!show) & setShowIT123(!showIT123)}></DiscreteMath>
            </>
          ) : null}

          {showIT122 ? (
            <>
              <Dsalgo onClickBack={() => setShow(!show) & setShowIT122(!showIT122)} onClickNext={() => setShow(!show) & setShowIT122(!showIT122)}></Dsalgo>
            </>
          ) : null}

          {showArtApp ? (
            <>
              <ArtApp onClickBack={() => setShow(!show) & setShowArtApp(!showArtApp)} onClickNext={() => setShow(!show) & setShowArtApp(!showArtApp)}></ArtApp>
            </>
          ) : null}

          {showUTS ? (
            <>
              <UTS onClickBack={() => setShow(!show) & setShowUTS(!showUTS)} onClickNext={() => setShow(!show) & setShowUTS(!showUTS)}></UTS>
            </>
          ) : null}

          {showSTS ? (
            <>
              <STS onClickBack={() => setShow(!show) & setShowSTS(!showSTS)} onClickNext={() => setShow(!show) & setShowSTS(!showSTS)}></STS>
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
                <SubjectBtn onClick={() => setShow(!show) & setShowNSTP102(!showNSTP102)} code="NSTP102" title="ROTC/CWTS/LTS 2"></SubjectBtn>
              </div>
              <div>
                <SubjectBtn onClick={() => setShow(!show) & setShowPathFit2(!showPathFit2)} code="PathFit2" title="Fitness Activity and Exercises"></SubjectBtn>
              </div>
              <div>
                <SubjectBtn onClick={() => setShow(!show) & setShowIT121(!showIT121)} code="IT121" title="Computer Programming 2"></SubjectBtn>
              </div>
              <div>
                <SubjectBtn onClick={() => setShow(!show) & setShowIT123(!showIT123)} code="IT123" title="Discrete Mathematics"></SubjectBtn>
              </div>
              <div>
                <SubjectBtn onClick={() => setShow(!show) & setShowArtApp(!showArtApp)} code="ArtApp" title="Art Appreciation"></SubjectBtn>
              </div>
              <div>
                <SubjectBtn onClick={() => setShow(!show) & setShowUTS(!showUTS)} code="UTS" title="Understanding the Self"></SubjectBtn>
              </div>
              <div>
                <SubjectBtn onClick={() => setShow(!show) & setShowSTS(!showSTS)} code="STS" title="Science, Technology and Society"></SubjectBtn>
              </div>
              <div>
                <SubjectBtn onClick={() => setShow(!show) & setShowIT122(!showIT122)} code="IT122" title="Data Structures and Algorithms"></SubjectBtn>
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