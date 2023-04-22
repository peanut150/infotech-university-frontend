import { useState } from 'react';
import logo from "./../dashboard/logoUni.png";
import year from "../../components/year/year";
import "./../../styles/styles.css";
import InputProps from './Component/InputBox';
import { border } from '@mui/system';
import './dashboard.css'
import Check from './Check';
import { AddStudent } from '../../components/api/api';
import { useHistory } from "react-router-dom";
function StudInfo({back, next}) {
  //const [yearStatus, setYearStatus] = useState('');
  const [firstYear, setFirstYear] = useState(false);
  const [secondYear, setSecondYear] = useState(false);
  const [thirdYear, setThirdYear] = useState(false);
  const [fourthYear, setFourthYear] = useState(false);
  const [main, setMain] = useState(true)
  const history = useHistory();
  const [student, setStudent] = useState({
    "first_name": "",
    "middle_name": "",
    "last_name": "",
    "age": "",
    "sex": "",
    "birthdate": "",
    "address": "",
    "birthplace": "",
    "mother_name": "",
    "father_name": "",
    "registrar_done": false,
    "clearance_done": false,
    "pta_done": false,
    "year_level":"", 
  })
  const [error, setError] = useState('')
  return (
    <div style={{ backgroundColor: '#F6F6F6', width: '100%', height: '100vh', resize: 'none',}}>
      <div style={{backgroundColor: 'white', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <img src={logo} style={{height: 39, width: 'auto', marginLeft: 20}}/>
        <h3 style={{color: '#2AB5E1'}}>INFOTECH UNIVERSITY</h3>
      </div>


        <div>

          <div>
            <h1 style={{marginLeft: 100, fontSize: 50, alignItems:"flex-start", display:"flex", paddingTop: 30}}>Student Information</h1>
          </div>

          <div>

          <div style={{display:"flex", flexDirection:"row", marginLeft:"15rem"}}>
          <div style={{justifyContent:"left", alignContent:"left", display:"flex", flexDirection:"column"}}>
                    <div style={{}}><h4 style={{fontWeight:"normal", textAlign:"left", marginLeft: "5rem"}}>First Name</h4></div>
                    <div style={{marginLeft: "5rem"}}><input value={student.first_name} onChange={(e) => setStudent({...student, first_name: e.target.value})} required style={{height: 40, border: 0, backgroundColor:"#D9D9D9", width:"15rem", padding: 5}}></input></div>
                </div>
                <div style={{justifyContent:"left", alignContent:"left", display:"flex", flexDirection:"column"}}>
                    <div style={{}}><h4 style={{fontWeight:"normal", textAlign:"left", marginLeft: "5rem"}}>Middle Name</h4></div>
                    <div style={{marginLeft: "5rem"}}><input value={student.middle_name} onChange={(e) => setStudent({...student, middle_name: e.target.value})} required style={{height: 40, border: 0, backgroundColor:"#D9D9D9", width:"15rem", padding: 5}}></input></div>
                </div>
                <div style={{justifyContent:"left", alignContent:"left", display:"flex", flexDirection:"column"}}>
                    <div style={{}}><h4 style={{fontWeight:"normal", textAlign:"left", marginLeft: "5rem"}}>Last Name</h4></div>
                    <div style={{marginLeft: "5rem"}}><input value={student.last_name} onChange={(e) => setStudent({...student, last_name: e.target.value})} required style={{height: 40, border: 0, backgroundColor:"#D9D9D9", width:"15rem", padding: 5}}></input></div>
                </div>
          </div>

          <div style={{display:"flex", flexDirection:"row", marginLeft:"15rem", marginTop: "3rem"}}>
          <div style={{justifyContent:"left", alignContent:"left", display:"flex", flexDirection:"column"}}>
                    <div style={{}}><h4 style={{fontWeight:"normal", textAlign:"left", marginLeft: "5rem"}}>Age</h4></div>
                    <div style={{marginLeft: "5rem"}}><input value={student.age} onChange={(e) => setStudent({...student, age: e.target.value})} required style={{height: 40, border: 0, backgroundColor:"#D9D9D9", width:"15rem", padding: 5}}></input></div>
                </div>
                <div style={{justifyContent:"left", alignContent:"left", display:"flex", flexDirection:"column"}}>
                    <div style={{}}><h4 style={{fontWeight:"normal", textAlign:"left", marginLeft: "5rem"}}>Sex</h4></div>
                    <div style={{marginLeft: "5rem"}}><input value={student.sex} onChange={(e) => setStudent({...student, sex: e.target.value})} required style={{height: 40, border: 0, backgroundColor:"#D9D9D9", width:"15rem", padding: 5}}></input></div>
                </div>
                <div style={{justifyContent:"left", alignContent:"left", display:"flex", flexDirection:"column"}}>
                    <div style={{}}><h4 style={{fontWeight:"normal", textAlign:"left", marginLeft: "5rem"}}>Birthdate</h4></div>
                    <div style={{marginLeft: "5rem"}}><input value={student.birthdate} onChange={(e) => setStudent({...student, birthdate: e.target.value})} required style={{height: 40, border: 0, backgroundColor:"#D9D9D9", width:"15rem", padding: 5}}></input></div>
                </div>
          </div>

          <div style={{display:"flex", flexDirection:"row", marginLeft:"15rem", marginTop: "3rem"}}>
                <div style={{justifyContent:"left", alignContent:"left", display:"flex", flexDirection:"column"}}>
                    <div style={{}}><h4 style={{fontWeight:"normal", textAlign:"left", marginLeft: "5rem"}}>Address</h4></div>
                    <div style={{marginLeft: "5rem"}}><input value={student.address} onChange={(e)=>setStudent({...student, address: e.target.value})} style={{height: 40, border: 0, backgroundColor:"#D9D9D9", width:"35rem", padding:5}}></input></div>
                </div>
                <div style={{justifyContent:"left", alignContent:"left", display:"flex", flexDirection:"column"}}>
                    <div style={{}}><h4 style={{fontWeight:"normal", textAlign:"left", marginLeft: "5rem"}}>Birthplace</h4></div>
                    <div style={{marginLeft: "5rem"}}><input value={student.birthplace} onChange={(e) => setStudent({...student, birthplace: e.target.value})} required style={{height: 40, border: 0, backgroundColor:"#D9D9D9", width:"15rem", padding: 5}}></input></div>
                </div>
          </div>

          <div style={{display:"flex", flexDirection:"row", marginLeft:"15rem", marginTop: "3rem"}}>
          <div style={{justifyContent:"left", alignContent:"left", display:"flex", flexDirection:"column"}}>
                    <div style={{}}><h4 style={{fontWeight:"normal", textAlign:"left", marginLeft: "5rem"}}>Father's Name</h4></div>
                    <div style={{marginLeft: "5rem"}}><input value={student.father_name} onChange={(e) => setStudent({...student, father_name: e.target.value})} required style={{height: 40, border: 0, backgroundColor:"#D9D9D9", width:"15rem", padding: 5}}></input></div>
                </div>
                <div style={{justifyContent:"left", alignContent:"left", display:"flex", flexDirection:"column"}}>
                    <div style={{}}><h4 style={{fontWeight:"normal", textAlign:"left", marginLeft: "5rem"}}>Mother's Name</h4></div>
                    <div style={{marginLeft: "5rem"}}><input value={student.mother_name} onChange={(e) => setStudent({...student, mother_name: e.target.value})} required style={{height: 40, border: 0, backgroundColor:"#D9D9D9", width:"15rem", padding: 5}}></input></div>
                </div>
                <div style={{}}><h4 style={{fontWeight:"normal", textAlign:"left", marginLeft: "5rem"}}>Year Level</h4></div>
                    <div style={{marginLeft: "5rem"}}><input value={student.year_level} onChange={(e) => setStudent({...student, year_level: e.target.value})} required style={{height: 40, border: 0, backgroundColor:"#D9D9D9", width:"15rem", padding: 5}}></input></div>
          </div>

          <div style={{display:"flex",  flexDirection:"row", width:"20rem", backgroundColor:"red", marginLeft:"25rem", marginTop:"2rem", marginBottom: "2rem"}}>
            <div style={{marginRight: "20rem"}}>            <div style={{display:"flex", position:"absolute", flexDirection:"row"}}>
                <input value={student.registrar_done} onChange={(e) => setStudent({...student, registrar_done: e.target.value})} type="checkbox" id='checkbox' style={{height: "2rem", width:"2rem", border:0}}></input> 
                <div style={{alignSelf:"center", marginLeft: 10}}><p>Registrar (Forms)</p></div>
            </div></div>
            <div style={{marginRight: "20rem"}}><div style={{display:"flex", position:"absolute", flexDirection:"row"}}>
                <input value={student.clearance_done} onChange={(e) => setStudent({...student, clearance_done: e.target.value})} type="checkbox" id='checkbox' style={{height: "2rem", width:"2rem", border:0}}></input> 
                <div style={{alignSelf:"center", marginLeft: 10}}><p>Clearance</p></div>
            </div></div>
            <div><div style={{display:"flex", position:"absolute", flexDirection:"row"}}>
                <input value={student.pta_done} onChange={(e) => setStudent({...student, pta_done: e.target.value})} type="checkbox" id='checkbox' style={{height: "2rem", width:"2rem", border:0}}></input> 
                <div style={{alignSelf:"center", marginLeft: 10}}><p>PTA</p></div>
            </div></div>

          </div>
          
            
          </div>
        <div>

          </div>
        <h4 style={{paddingTop: 8, color:'red'}}>{error}</h4>
          <div style={{display:"flex", flexDirection:"column"}}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 30 }}>
            <button className='backbtn' onClick={back}>BACK</button>
            <button className='nextbtn' onClick={async () => {
              if(await AddStudent(student)){
                console.log('Add success!')
                history.push('/select_year')
                setError('')
              }else{
                setError('Invalid details specified. Please recheck')
              }
              }}>NEXT</button>
                          <button className='nextbtn' onClick={()=> history.push('/select_year')}>PLACEHOLDER NEXT</button>
          </div>
          </div>
          
      </div>
    

      
    </div>
  );
}

export default StudInfo;
