import { useState } from 'react';
import BackBtn from './buttonprops/BackBtn';
import SemBtn from './buttonprops/SemBtn';
import year from './year/year';
import yearStatus from './yearStatus/yearStatus';
import SecondYearFirstSem from "./../components/yearStatus/SecondYearSubs/SecondYearFirstSem"
import SecondYearSecondSem from "./../components/yearStatus/SecondYearSubs/SecondYearSecondSem"
import Confirmation from '../pages/dashboard/Confirmation';



function SecondLevelPage({onClickBack, title}) {

  const [show4FirstSem, setShow4FirstSem] = useState(false)
  const [showYearLevelPage, setShowYearLevelPage] = useState(true)
  const [show4SecondSem, setShow4SecondSem] = useState(false)
  const [showConfrm, setShowConfrm] = useState(false)

  return (

       <div style={{ backgroundColor: "#F6F6F6", height: "100%", width:"100%", display:"flex", position:"absolute"}}>

              {show4FirstSem ? (
                    <><h1>SECOND YEAR: FIRST SEM SUBJECTS</h1>
                    <SecondYearFirstSem onClickBack={() => setShow4FirstSem(!show4FirstSem) & setShowYearLevelPage(!showYearLevelPage)} onClickNext={() => setShowConfrm(!showConfrm) & setShow4FirstSem(!show4FirstSem)}></SecondYearFirstSem></>
                  ) : null}

              {show4SecondSem ? (
                    <><h1>SECOND YEAR: SECOND SEM SUBJECTS</h1>
                    <SecondYearSecondSem onClickBack={() => setShow4SecondSem(!setShow4SecondSem) & setShowYearLevelPage(!showYearLevelPage)} onClickNext={() => setShowConfrm(!showConfrm) & setShow4SecondSem(!show4SecondSem)}></SecondYearSecondSem></>
                  ) : null}

              {showConfrm ? (
                <div style={{display:"flex", position:"absolute", zIndex: 1, marginTop: "-2rem"}}><Confirmation back={() => setShowConfrm(!showConfrm) & setShow4FirstSem(!show4FirstSem)}></Confirmation></div>
              ) : null}

              {showYearLevelPage ? (
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

                
              <div>
                <h1 style={{fontSize:50, display:"flex", marginLeft:"-5rem"}}>ENROLL A STUDENT</h1>
              </div>
              <div style={{display:"flex", marginLeft:"6rem"}}>
                <h3>{title}</h3>
              </div>
             </div>
             <div style={{display:"flex", flexDirection:"column", marginLeft: 55}}>
              <div>
                <SemBtn onClick={() => setShow4FirstSem(!show4FirstSem) & setShowYearLevelPage(!showYearLevelPage)} title="First Semester"></SemBtn>
              </div>
              <div style={{marginTop:"-13rem"}}>
                <SemBtn onClick={() => setShow4SecondSem(!show4SecondSem) & setShowYearLevelPage(!showYearLevelPage)} title="Second Semester"></SemBtn>
              </div>
             </div>
             <div style={{display:"flex", position:"absolute", marginTop:"30rem"}}>
                <div style={{marginRight: "65rem"}}>
                    <button className="backbtn"  onClick={onClickBack}>BACK</button>
                </div>
                <div>
                    <button className="backbtn"  onClick={onClickBack}>NEXT</button>
                </div>
            </div>
                </>
              ):null}
                
      </div>
        
  );
}

export default SecondLevelPage;