import logo from "../../logo.png"
import year from "../../components/year/year"
import YearPage from "../../components/YearPage/YearPage";

function YearLevels() {
  
  return (

    

    <div style={{ backgroundColor: '#F6F6F6', width: '100%', height: '100vh', resize: 'none',}}>
      <div style={{backgroundColor: 'white', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <img src={logo} style={{height: 39, width: 'auto', marginLeft: 20,}}/>
        <h3 style={{color: '#2AB5E1'}}>INFOTECH UNIVERSITY</h3>

      <div style={{ margin: '0 auto', textAlign: 'center', marginBottom: 30 }}>
        
        <button style={{backgroundColor: '#2AB5E1', borderRadius: 5, width: '70%', maxWidth: 390, height: 41, marginBottom:10}}>First Semester</button>
        <br/>
        <button style={{backgroundColor: '#2AB5E1', borderRadius: 5, width: '70%', maxWidth: 390, height: 41, marginBottom:10}}>Second Semester</button>
        <br/>        
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 30 }}>
          <button style={{backgroundColor: '#2AB5E1', borderRadius: 5, width: '30%', maxWidth: 100, height: 41, marginLeft: 100}}>Back</button>
        </div>
      </div>
    </div>
  </div>
  );
}

export default YearLevels;
