import { useState } from 'react';
import logo from "./../dashboard/logoUni.png";
import year from "../../components/year/year";
import YearLevelPage from '../../components/FourthLevelPage';
import FirstLevelPage from '../../components/FirstLevelPage';
import SecondLevelPage from '../../components/SecondLevelPage';
import ThirdLevelPage from '../../components/ThirdLevelPage';
import StudInfo from '../dashboard/StudInfo';
import Confirmation from '../dashboard/Confirmation';

function SelectYear({back, next}) {
  //const [yearStatus, setYearStatus] = useState('');
  const [firstYear, setFirstYear] = useState(false);
  const [secondYear, setSecondYear] = useState(false);
  const [thirdYear, setThirdYear] = useState(false);
  const [fourthYear, setFourthYear] = useState(false);
  const [main, setMain] = useState(true)
  const [confirm, setConfirm] = useState(false)


  return (
    <div style={{ backgroundColor: '#F6F6F6', width: '100%', height: '100vh', resize: 'none',}}>
      <div style={{backgroundColor: 'white', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <img src={logo} style={{height: 39, width: 'auto', marginLeft: 20}}/>
        <h3 style={{color: '#2AB5E1'}}>INFOTECH UNIVERSITY</h3>
      </div>


      {firstYear ? (
        <FirstLevelPage title="(First Year)" onClickBack={() => setFirstYear(!firstYear)} onClick={() => setFirstYear(!firstYear)}></FirstLevelPage>
      ) : null}

      {secondYear ? (
        <SecondLevelPage title="(Second Year)" onClickBack={() => setSecondYear(!secondYear)} onClick={() => setSecondYear(!secondYear)}></SecondLevelPage>
      ) : null}
      
      {thirdYear ? (
        <ThirdLevelPage title="(Third Year)" onClickBack={() => setThirdYear(!thirdYear)} onClick={() => setThirdYear(!thirdYear)}></ThirdLevelPage>
      ) : null}
      
      {fourthYear ? (
        <YearLevelPage title="(Fourth Year)" onClickBack={() => setFourthYear(!fourthYear)} onClick={() => setFourthYear(!fourthYear)}></YearLevelPage>
      ) : null}

      

      {main ? (
        <div>
        <div>
          <h1 style={{marginLeft: 100, fontSize: 50, display:"flex", paddingTop: 30, paddingBottom: 30}}>Enroll A Student</h1>
        </div>

        <div style={{ margin: '0 auto', textAlign: 'center', marginBottom: 30 }}>
          <button className='longbtn' onClick={() => setFirstYear(!firstYear)}>{year[0]}</button>
          <br/>
          <button className='longbtn' onClick={() => setSecondYear(!secondYear)}>{year[1]}</button>
          <br/>
          <button className='longbtn' onClick={() => setThirdYear(!thirdYear)}>{year[2]}</button>
          <br/>
          <button className='longbtn' onClick={() => setFourthYear(!fourthYear)}>{year[3]}</button>
          <br/>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 30 }}>
            <button className='backbtn' onClick={back}>BACK</button>
            <button className='nextbtn' onClick={next}>NEXT</button>
          </div>
        </div>
      </div>
      ) : null}
      

      
    </div>
  );
}

export default SelectYear;
