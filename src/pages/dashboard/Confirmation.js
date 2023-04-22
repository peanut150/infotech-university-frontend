import { useState } from 'react';
import logo from "./../dashboard/logoUni.png";
import year from "../../components/year/year";
import YearLevelPage from '../../components/FourthLevelPage';
import FirstLevelPage from '../../components/FirstLevelPage';
import SecondLevelPage from '../../components/SecondLevelPage';
import ThirdLevelPage from '../../components/ThirdLevelPage';
import StudInfo from '../dashboard/StudInfo';
import InputProps from './Component/InputBox';
import { useHistory } from "react-router-dom";
import { useQuery } from "react-query";
import { GetStudent } from '../../components/api/api';
function Confirmation({back, next}) {
  const history = useHistory();
  const {
    data,
    isLoading,
    error,
  } = useQuery("student_info", GetStudent, { retry: 0 });
  if(isLoading){
    return(
    <div style={{ backgroundColor: '#F6F6F6', width: '100%', height: '100vh', resize: 'none',}}>
    <div style={{backgroundColor: 'white', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
      <img src={logo} style={{height: 39, width: 'auto', marginLeft: 20}}/>
      <h3 style={{color: '#2AB5E1'}}>INFOTECH UNIVERSITY</h3>
    </div>
  <div>
      <h2>Loading...</h2>
  </div>
  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: "25rem" }}>
        <button className='backbtn' onClick={back}><h1 style={{fontSize: 15}}>BACK</h1></button>
    </div>
    </div>
    )
}
else if(error || data.length===0){
    return(
    <div style={{ backgroundColor: '#F6F6F6', width: '100%', height: '100vh', resize: 'none',}}>
    <div style={{backgroundColor: 'white', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
      <img src={logo} style={{height: 39, width: 'auto', marginLeft: 20}}/>
      <h3 style={{color: '#2AB5E1'}}>INFOTECH UNIVERSITY</h3>
    </div>

  <div>
      <h2 style={{textAlign:'center', color: 'red'}}>Error confirming</h2>
  </div>
  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: "25rem" }}>
        <button className='backbtn' onClick={back}><h1 style={{fontSize: 15}}>BACK</h1></button>
    </div>
    </div>
    )
}
  return (
    <div style={{ backgroundColor: '#F6F6F6', width: '100%', height: '100vh', resize: 'none',}}>
      <div style={{backgroundColor: 'white', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <img src={logo} style={{height: 39, width: 'auto', marginLeft: 20}}/>
        <h3 style={{color: '#2AB5E1'}}>INFOTECH UNIVERSITY</h3>
      </div>
      

        <div>
            <div>
                <h1 style={{marginLeft: 100, fontSize: 50, display:"flex", paddingTop: 30, paddingBottom: 30}}>Confirmation</h1>
            </div>
        </div>
        <div style={{marginLeft:"15rem"}}>
                <div style={{justifyContent:"left", alignContent:"left", display:"flex", flexDirection:"row", alignItems:'center'}}>
                  <h4 style={{fontWeight:"normal", textAlign:"left", marginLeft: "5rem"}}>Address</h4>
                    <input value={data.address} disabled style={{height: 40, border: 0, backgroundColor:"#D9D9D9", width:"35rem", padding:5}}></input>
                </div>
                <div style={{justifyContent:"left", alignContent:"left", display:"flex", flexDirection:"row", marginTop: 30, alignItems:'center'}}>
                    <h4 style={{fontWeight:"normal", textAlign:"left", marginLeft: "5rem"}}>Year Level</h4>
                    <div ><input value={data.year_level} disabled style={{height: 40, border: 0, backgroundColor:"#D9D9D9", width:"17rem", padding:5}}></input></div>
                </div>
            
          </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: "7rem" }}>
          <div style={{marginRight: 30}}><button onClick={() => history.push('/dashboard')} style={{width:"20rem", fontWeight:"inherit", fontSize: 15, marginLeft: "25rem"}} className='backbtn'>Confirm Enrollment</button></div>
            <div style={{marginLeft: 30}}><button style={{width:"20rem", fontWeight:"inherit", fontSize: 15, marginRight: "25rem"}} className='nextbtn'>Print COR</button></div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 50 }}>
            <button className='backbtn' onClick={back}>BACK</button>
            <button style={{width:"10rem"}}  className='nextbtn'  onClick={() => history.push('/dashboard')}>DASHBOARD</button>
        </div>
    </div>
  );
}

export default Confirmation;
