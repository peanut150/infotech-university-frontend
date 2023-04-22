import './styles.css';
import pic1 from'./pic1.svg';
import logo from './logo.png';
import Dashboard from '../../dashboard';
import { useState } from 'react';
import axios from 'axios';

export default function Login() {
  const [user, setUser] = useState({
    username: '',
    password: ''
  })
  const [error, setError] = useState('')
  return (
    <div className="container">
        <div className="rectangle">
            <div className='header'>
                <div className='headerSchool'>
                    <img src={logo} alt="logo" className="logo"/>
                    <span>INFOTECH UNIVERSITY</span>
                </div>
                <div className='headerButton'>
                    <button className="loginButton">Login</button>
                    <button className="signupButton">Sign Up</button>
                </div>
                
            </div>
          <div className='form'>
              <div className='formHeader'>
                <h1 className="headerSignin">SIGN IN</h1>
                <p className="text">Sign in to continue to our application</p>
              </div>
              <div className='inputs'>
                <input type="text" placeholder="Username" className="inputEmail" onChange={(e) => setUser({ ...user, username: e.target.value })}></input>
                <input type="password" placeholder="Password" className="inputPass" onChange={(e) => setUser({ ...user, password: e.target.value })}></input>
              </div>
              <h5 style={{color:'red'}} className="headerSignin">{error}</h5>
              <button className="forgotpassButton">Forgot Password ?</button>
              <button className="signinButton" onClick={() => {
                axios.post('http://127.0.0.1:8000/api/v1/accounts/token/login', user).then(response => {
                  console.log(response.data)
                  setError('')
                  window.location.href='../../dashboard'
                }).catch(error => {
                  setError('Invalid login. Please try again')
                })
                }}>Sign In</button>
          </div>

        </div>

      <div className="rectangleRight">

          <img src={pic1} alt="pic1" className="Pic" />

      </div>
    </div>
  );
}
