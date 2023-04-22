import React from 'react';
import logo from './logoUni.png';

export default function Contact() {
  return (
    <div className='hero'>
      <div style={{backgroundColor: 'white', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <img src={logo} style={{height: 500, width: 'auto', marginLeft: 530, marginTop: -270}}/>
        <div style={{color: 'black', fontSize: '70px', fontWeight: 'bold', marginTop: '160px', marginLeft:"-40rem" }}><h1>Contact Us Directly</h1></div>
      </div>

      <p>
      <div>
        <div><strong>Facebook Page:</strong> InfoTech University</div>
        <div><strong>Email:</strong> infotechuniversity@infouniv.com</div>
        <div><strong>Contact Number:</strong> 09090114021</div>
      </div>
      </p>
  </div>
  )
}


