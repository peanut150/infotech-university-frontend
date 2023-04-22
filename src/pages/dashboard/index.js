import logoUni from "./logoUni.png";
import "./dashboard.css";
import { useState } from "react";
import SelectYear from "./../SelectYear/SelectYear.js";
import StudMonitor from "./StudMonitor";
import Confirmation from "./Confirmation";
import StudInfo from "./StudInfo";


export default function Dashboard() {

    const [selectYear, setSelectYear] = useState (false)
    const [confirm, setConfirm] = useState (false)
    const [studInfo, setStudInfo] = useState (false)
    const [studMonitor, setStudMonitor] = useState (false)
  
    return (
        <section className='hero'>

        {studInfo ? (
            <div style={{display:"flex", zIndex:2, position:"absolute", width:"100%", marginTop:"-18rem"}}>
                <StudInfo back={() => setStudInfo(!studInfo)} next={() => setSelectYear(!selectYear)}></StudInfo>
            </div>
             
        ) : null}

        {selectYear ? (
            <>
                <div style={{display:"flex", zIndex:2, position:"absolute", width:"100%", marginTop:"-18rem"}}>
                    <SelectYear back={() => setSelectYear(!selectYear)} next={() => setConfirm(!confirm)}></SelectYear>
                </div>
            </>
        ) : null}

        {confirm ? (
            <div style={{display:"flex", zIndex:2, position:"absolute", width:"100%", marginTop:"-18rem"}}>
                <Confirmation back={() => setConfirm(!confirm)} next={() => setSelectYear(!selectYear) & setStudInfo(!studInfo) & setConfirm(!confirm)}></Confirmation>
            </div>
        ) : null}

        {studMonitor ? (
            <div style={{display:"flex", zIndex:2, position:"absolute", width:"100%", marginTop:"-18rem"}}>
                <StudMonitor back={() => setStudMonitor(!studMonitor)}></StudMonitor>
            </div>
        ):null}

        

        

        

            <img src={logoUni} alt="logoUni" className="logoUni"/>

            <h1 style={{fontSize: '50px', fontWeight: 'bold', marginTop: '-9vh'}}>Welcome, Admin!</h1>

            <div style={{display:"flex", flexDirection:"column"}}>
                <div>
                    <button className="studentEnrollButton" onClick={() => setStudMonitor(!studMonitor)}>View Student Enrollment</button>
                </div>
                <div>
                    <button className="studentEnrollButton" onClick={() => setStudInfo(!studInfo)}>Enroll A Student</button>
                </div>
            
            
            </div>


        </section>
    )
}
