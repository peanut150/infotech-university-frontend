import { useState } from 'react';
import BackBtn from './yearStatus/FourthYearSubs/Component/BackBtn';
import SemBtn from './buttonprops/SemBtn';
import year from './year/year';
import yearStatus from './yearStatus/yearStatus';
import FourthYearFirstSem from './yearStatus/FourthYearSubs/FourthYearFirstSem'
import FourthYearSecondSem from './yearStatus/FourthYearSubs/FourthYearSecondSem';
import Confirmation from '../pages/dashboard/Confirmation';


function YearLevelPage({onClickBack, onClickNext, title}) {

  const [show4FirstSem, setShow4FirstSem] = useState(false)
  const [showYearLevelPage, setShowYearLevelPage] = useState(true)
  const [show4SecondSem, setShow4SecondSem] = useState(false)
  const [showConfrm, setShowConfrm] = useState(false)

  return (

        <div style={{ backgroundColor: "#F6F6F6", height: "100%", width:"100%", display:"flex", position:"absolute"}}>
              {show4FirstSem ? (
                    <FourthYearFirstSem onClickBack={()=> setShow4FirstSem(!show4FirstSem) & setShowYearLevelPage(!showYearLevelPage)} onClickNext={()=> setShow4FirstSem(!show4FirstSem) & setShowConfrm(!showConfrm)}></FourthYearFirstSem>
                  ) : null}

              {show4SecondSem ? (
                    <FourthYearSecondSem onClickBack={()=> setShow4SecondSem(!show4SecondSem) & setShowYearLevelPage(!showYearLevelPage)} onClickNext={()=> setShow4SecondSem(!show4SecondSem) & setShowConfrm(!showConfrm)}></FourthYearSecondSem>
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
                <h1 style= {{fontSize:50, display:"flex", marginLeft:"-5rem"}}>ENROLL A STUDENT</h1>
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

export default YearLevelPage;