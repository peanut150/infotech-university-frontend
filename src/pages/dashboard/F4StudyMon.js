import { useState } from 'react';
import logo from "./../dashboard/logoUni.png";
import year from "../../components/year/year";
import "./../../styles/styles.css";
import './table.css'

import { GetFourthYearSchedules } from '../../components/api/api';
import { useQuery } from "react-query";

function F2StudMon({back, next}) {
    /* const data =[
        {subject: "Electives 1", name: "20" + "/" + 60},
        {subject: "Electives 2", name: "25" + "/" + 60}
    ]*/
    const {
        data,
        isLoading,
        error,
      } = useQuery("fourth_year_schedules", GetFourthYearSchedules, { retry: 0 });

if(isLoading){
    return(
    <div style={{ backgroundColor: '#F6F6F6', width: '100%', height: '100vh', resize: 'none',}}>
    <div style={{backgroundColor: 'white', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
      <img src={logo} style={{height: 39, width: 'auto', marginLeft: 20}}/>
      <h3 style={{color: '#2AB5E1'}}>INFOTECH UNIVERSITY</h3>
    </div>


  <div>
      <h1>Fourth Year Student Monitoring</h1>
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
else if(error){
    return(
    <div style={{ backgroundColor: '#F6F6F6', width: '100%', height: '100vh', resize: 'none',}}>
    <div style={{backgroundColor: 'white', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
      <img src={logo} style={{height: 39, width: 'auto', marginLeft: 20}}/>
      <h3 style={{color: '#2AB5E1'}}>INFOTECH UNIVERSITY</h3>
    </div>


  <div>
      <h1>Fourth Year Student Monitoring</h1>
  </div>
  <div>
      <h2 style={{color: 'red'}}>Error loading schedules</h2>
  </div>
  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: "25rem" }}>
        <button className='backbtn' onClick={back}><h1 style={{fontSize: 15}}>BACK</h1></button>
    </div>
    </div>
    )
}
else if(data.length ===0){
    return(
        <div style={{ backgroundColor: '#F6F6F6', width: '100%', height: '100vh', resize: 'none',}}>
        <div style={{backgroundColor: 'white', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          <img src={logo} style={{height: 39, width: 'auto', marginLeft: 20}}/>
          <h3 style={{color: '#2AB5E1'}}>INFOTECH UNIVERSITY</h3>
        </div>
    
    
      <div>
          <h1>Fourth Year Student Monitoring</h1>
      </div>
      <div>
          <h2 style={{color: 'orange'}}>No schedules available</h2>
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
        <h1>Fourth Year Student Monitoring</h1>
    </div>
    <div className='App' style={{display:"flex", position:"absolute"}}>
        <table>
            <tr>
                <th>Subjects</th>
                <th>Number of Students</th>
            </tr>
            {data.map((val, key) =>{
                return(
                    <tr key={key}>
                        <td style={{paddingLeft:100, paddingRight: 100}} >{val.subject}</td>
                        <td>{val.students_assigned.length}/{val.max_slots}</td>
                    </tr>
                )
            })}
            
        </table>
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: "25rem" }}>
        <button className='backbtn' onClick={back}><h1 style={{fontSize: 15}}>BACK</h1></button>
    </div>
    

      
    </div>
  );
}

export default F2StudMon;
