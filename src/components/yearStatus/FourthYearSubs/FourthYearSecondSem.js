import React from "react";
import BackBtn from "../../buttonprops/BackBtn";
import SubjectBtn from "./SubjectBtn";
import CheckBox from "./Component/CheckBox";

function FourthYearSecondSem({onClickBack, onClickNext, title}) {

  return (

        <div style={{ backgroundColor: "#F6F6F6", height: "100%", width:"100%", display:"flex", position:"absolute"}}>
             <div style=
                {
                  {
                    textAlign:"center",
                    position:"absolute",
                    left: "40rem",
                    top: 70
                  }
                }>
              <div style={{marginLeft: "-40rem", marginTop: "-5rem"}}>
                <h1 style={{fontWeight:"bold", fontSize: 60}}>LIST OF SUBJECTS</h1>
              </div>
              <div>
                <h3>{title}</h3>
              </div>
             </div>
             <div style={{display:"flex", flexDirection:"column", marginLeft: 55, marginTop: "10rem"}}>
              <div>
                <SubjectBtn code="IT421" title="PRACTICUM (486hrs)"></SubjectBtn>
              </div>
              <div style={{marginTop: "1rem", marginLeft:"40rem"}}>
                    <CheckBox value="Mrs. Petal May Dal" title="Mrs. Petal May Dal"></CheckBox>
                    <CheckBox value="Ms. Geraldine Blanco" title="Ms. Geraldine Blanco"></CheckBox>
                    <CheckBox value="Mr. JB Castillo" title="Mr.JB Castillo"></CheckBox>
                </div>
             </div>
             <div style={{marginTop: 54, marginLeft: -255}}>
              <BackBtn title = "BACK" onClick={onClickBack}></BackBtn>
             </div>
             <div style={{marginTop: 50, marginLeft: 1270}}>
              <BackBtn title = "NEXT" onClick={onClickNext}></BackBtn>
             </div>
             
      </div>
        
  );
}

export default FourthYearSecondSem;