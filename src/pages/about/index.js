import React from 'react';
import logo from './logoUni.png';

export default function About() {
  return (
    <div className='hero'>
      <div style={{backgroundColor: 'white', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <img src={logo} style={{height: 500, width: 'auto', marginLeft: 530, marginTop: -270}}/>
        <div style={{color: 'black', fontSize: '70px', fontWeight: 'bold', marginTop: '160px', marginLeft:"-27rem"}}><h1>About Us</h1></div>
      </div>

      <p>
        <div style={{marginTop: '10px'}}>
        InfoTech University is an all Information Technology Course University in the Philippines. It was recently established, 
        on February 6, 2023, with the goal of creating a university that primarily focuses on technology, specifically information technology. It was established with the goal of fostering excellence in students and producing people of note on a national scale.
        </div>
      </p>
    </div>
  )
}
