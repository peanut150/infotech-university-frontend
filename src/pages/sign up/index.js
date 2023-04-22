import { useState } from "react";
import axios from "axios";

import './signup.css';
import pic2 from'./pic2.svg';
import logo4 from './logo4.png';


export default function SignUp() {

  const [data, setData] = useState({
    'email' : '',
    'username' : '',
    'password' : ''
  })

  const [errorPassword, setErrorPassword] = useState('')

  return (
    <div className="container">
        <div className="rectangle">
            <div className='header'>
                <div className='headerSchool'>
                    <img src={logo4} alt="logo4" className="logo4"/>
                    <span>INFOTECH UNIVERSITY</span>
                </div>
                <div className='headerButton'>
                    <button className="loginButtonSignup">Login</button>
                    <button className="signupButtonSignup">Sign Up</button>
                </div>
                
            </div>
          <div className='form'>
              <div className='formHeader'>
                <h1 className="headerSignin">SIGN UP</h1>
                <p className="text">Sign up to continue to our application</p>
              </div>
              <div className='inputs'>

                <input
                  type="text"
                  placeholder="Email"
                  className="inputEmail"
                  onChange={(event) => {
                    let d = data;
                    setData({...d, email: event.target.value});
                  }}
                />

                <input
                  type="text"
                  placeholder="Username"
                  className="inputPass"
                  onChange={(event) => {
                    let d = data;
                    setData({...d, username: event.target.value});
                  }}
                />
                  
                <input
                  type="password"
                  placeholder="Password"
                  className="inputConfirmPass"
                  onChange={(event) => {
                    let d = data;
                    setData({...d, password: event.target.value});
                  }}
                />

                <p>{ errorPassword }</p>

              </div>
              
              <button onClick={() => {
                axios.post('http://127.0.0.1:8000/api/v1/accounts/users/', data).then(response => {
                  console.log(response.data)
                }).catch(error => {
                  const errorMessage = error.response.data;
                  setErrorPassword(errorMessage.password)
                })
              }} className="signinButton">Create Account</button>
          </div>

        </div>

      <div className="rectangleRight">

          <img src={pic2} alt="pic2" className="pic2" />

      </div>
    </div>
  );
}
