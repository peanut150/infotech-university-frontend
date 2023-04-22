import { useState } from 'react';
import logo from "./../dashboard/logoUni.png";
import year from "../../components/year/year";
import "./../../styles/styles.css";
import F1StudyMon from './F1StudyMon'
import F2StudMon from './F2StudyMon';
import F3StudMon from './F3StudyMon';
import F4StudMon from './F4StudyMon';

function StudMonitor({back, next}) {
  //const [yearStatus, setYearStatus] = useState('');
  const [firstYear, setFirstYear] = useState(false);
  const [secondYear, setSecondYear] = useState(false);
  const [thirdYear, setThirdYear] = useState(false);
  const [fourthYear, setFourthYear] = useState(false);
  const [main, setMain] = useState(true)


  return (
    <div style={{ backgroundColor: '#F6F6F6', width: '100%', height: '100vh', resize: 'none',}}>
      <div style={{backgroundColor: 'white', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <img src={logo} style={{height: 39, width: 'auto', marginLeft: 20}}/>
        <h3 style={{color: '#2AB5E1'}}>INFOTECH UNIVERSITY</h3>
      </div>


        <div>
        <div>
          <h1 style={{marginLeft: 100}}>Student Monitoring</h1>
        </div>

        {firstYear ? (
            <div style={{display:"flex", zIndex:2, position:"absolute", width:"100%", marginTop:"-10rem"}}>
              <F1StudyMon back={() => setFirstYear(!firstYear)}></F1StudyMon>
            </div>
        ) : null}

        {secondYear ? (
            <div style={{display:"flex", zIndex:2, position:"absolute", width:"100%", marginTop:"-10rem"}}>
              <F2StudMon back={() => setSecondYear(!secondYear)}></F2StudMon>
            </div>
        ) : null}

        {thirdYear ? (
            <div style={{display:"flex", zIndex:2, position:"absolute", width:"100%", marginTop:"-10rem"}}>
              <F3StudMon back={() => setThirdYear(!thirdYear)}></F3StudMon>
            </div>
        ) : null}

        {fourthYear ? (
            <div style={{display:"flex", zIndex:2, position:"absolute", width:"100%", marginTop:"-10rem"}}>
              <F4StudMon back={() => setFourthYear(!fourthYear)}></F4StudMon>
            </div>
        ) : null}

        <div style={{ margin: '0 auto', textAlign: 'center', marginBottom: 30 }}>
          <button className='longbtn' onClick={() => setFirstYear(!firstYear)}><h1 style={{fontSize:17, fontWeight:"normal"}}>{year[0]}</h1></button>
          <br/>
          <button className='longbtn' onClick={() => setSecondYear(!secondYear)}><h1 style={{fontSize:17, fontWeight:"normal"}}>{year[1]}</h1></button>
          <br/>
          <button className='longbtn' onClick={() => setThirdYear(!thirdYear)}><h1 style={{fontSize:17, fontWeight:"normal"}}>{year[2]}</h1></button>
          <br/>
          <button className='longbtn' onClick={() => setFourthYear(!fourthYear)}><h1 style={{fontSize:17, fontWeight:"normal"}}>{year[3]}</h1></button>
          <br/>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 30 }}>
            <button className='backbtn' onClick={back}><h1 style={{fontSize: 15}}>BACK</h1></button>
          </div>
        </div>
      </div>
    

      
    </div>
  );
}

export default StudMonitor;
