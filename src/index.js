import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmailVerification from './components/Login-Signup/EmailVerification';
import SignUp from './components/Login-Signup/SignUp';
import Login from './components/Login-Signup/Login';
import VerifyOTP from './components/Login-Signup/VerifyOTP';
import EmailAuth from './components/Login-Signup/EmailAuth';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/email-verification' element={<EmailVerification/>}/>
      <Route path='/sign-up' element={<SignUp/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/otp' element={<VerifyOTP/>}/>
      <Route path='/email-auth' element = {<EmailAuth/>}/>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
