import React from "react";
import Header from "../Header";
import { Button, Container, Form, FormGroup, Row,Col } from "react-bootstrap";
import {Input,Label} from 'reactstrap';
import { useNavigate } from "react-router-dom";

import "./SignIn.css"
import EmailAuth from "./EmailAuth";
import { useState } from "react";


const axios = require('axios');


var email = "";
var password = "";
var otp = "123456";
var inputOtpByUser ="";
var isUserLoggedIn = false;
localStorage.setItem("isUserLoggedIn",isUserLoggedIn);

function Login(){  
    const navigate = useNavigate();
    
    const [isOTPSent,setIsOTPSent] = useState(true);
    const [isOTPVerified,setIsOTPVerified] = useState(false);
    const [isUserRegistered,setIsUserRegistered] = useState(false);
    let token = localStorage.getItem("jwtToken");
    console.log("token",token); 
 
    const inputEmailEvent=(event)=>{
        email = event.target.value;
        // console.log("email",email);
    }

    const inputOTPEvent=(event)=>{
        inputOtpByUser = event.target.value;
        // console.log("email",email);
    }
    const inputPasswordEvent=(event)=>{
        password = event.target.value;
        // console.log("Password",password);
    }

    


    const homepage=()=>{
    let token = localStorage.getItem("jwtToken");

    console.log("token",token);
    if(email===""){
        console.log("Email is empty");
        alert("enter email")
        return;
    }
    if(password===""){
        console.log("Password is empty");
        alert("enter password")
        return;
    }

    var form_data_body={
        Email: email,
        Password: password
    }
    var authorization = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzaGl2YW1AZ21haWwuY29tbW1zc2RzIiwiZXhwIjoxNjU0NjE4ODgwLCJpYXQiOjE2NTQ1MTg4ODB9.kDTGQbDIDVTXqtEkm_35VqXzpWwJ8wUxOw8Cd8Wrgi0";
    console.log(authorization);

    axios.post("http://localhost:8080/login-user",form_data_body,{
        headers:{
            "Content-Type": "multipart/form-data",
            "Authorization": authorization
        },
    }).then(function(response){
        console.log(response);
        if(response.status==200){
            console.log(response.data.message);
            navigate("/");
        }
        console.log(response.data.message);
    }).catch(function(error){
        console.log(error);
    })
    isUserLoggedIn=true;
    alert("login successful")

    
    }

    
    const switchForm = (form) => {
        const formContainer = document.querySelector(".form-body");
    const loginForm = document.querySelector("#sign-in-form");
    const registerForm = document.querySelector("#sign-up-form");
        console.log(form);
        if(form === 'register'){
            if(window.innerWidth > 800){
                formContainer.style.left = '50%';
            }
            loginForm.style.marginLeft = '-150%';
            registerForm.style.marginLeft = '-100%';
        }
        else{
            if(window.innerWidth > 800){
                formContainer.style.left = '0%';
            }
            loginForm.style.marginLeft = '0%';
            registerForm.style.marginLeft = '0%';
        }
    }
    
    const sendOTP =() => {
        // alert(email);
        
        if(email===""){
            console.log("Email is empty")
            alert("Please Enter Email")
        }else{
            console.log("Email",email);
            axios({
                method:"get",
                url:"http://localhost:8080/verify-email/"+email
            }).then(function (response){
                console.log(response.data);
                otp = response.data.otp;
                console.log("otp:",otp);
            }).catch(function(response){
                console.log(response);
                return;
            })
            setIsOTPSent(false);
            setIsOTPVerified(true);
        }

    }
   const verifyOTP=()=>{
    //    alert(otp);
       if(otp === inputOtpByUser){
           alert('Correct input otp');
           setIsOTPVerified(false);
        //    setIsOTPSent(false);
        setIsUserRegistered(true);
        //    setIsEmailVerified(false);
       }
       else{
           alert('incorrect')
       }

   }
   
return(
    <div>
        
        <Header />
        <br></br>
        <br></br>
        
            <div className="form-parent">
            
            <div className="sign-in-img"></div>
            <div className="sign-up-img"></div>
            <div className="form-body">
                <div className="form" id="sign-in-form">
                    <h1 className="title">SignIn</h1>
                    <div className="fields">
                        <FormGroup>
                            <Label
                            for="email"
                            >
                            </Label>
                            <Input
                            id="email"
                            name="email"
                            placeholder="Enter Email"
                            type="email" className="input"
                            onChange={inputEmailEvent}
                            />
                        </FormGroup>
                        <FormGroup >
                            <Label
                            for="password"
                            >
                            </Label>
                            <br></br>
                            <Input
                            id="password"
                            name="password"
                            placeholder="Enter Password"
                            type="password" className="input"
                            onChange={inputPasswordEvent}
                            />
                        </FormGroup>
                    </div>
                    <div className="submit-container">
                        <Button className="btn" onClick={homepage}>
                            Login
                        </Button><br></br><br></br>
                        <h6>
                        <p className="link" onClick={() => switchForm('register')}>New user? Sign up</p>
                        </h6>
                    </div>
                </div>
            {
                (isOTPSent)?(
                        <div className="form" id="sign-up-form">
                        <h1 className="title">Sign up</h1>
                        <div className="fields">
                            <h1>Enter your Email</h1>
                                <FormGroup>
                                    <Label id="email-input" for="email">Email</Label>
                                    <br></br>
                                    <Input id="email" name="email" placeholder="Enter email" type="email" onChange={inputEmailEvent}/>
                                </FormGroup>
        
                        </div>
                        <button className="send-email" onClick={sendOTP}>Send OTP on Email</button>
                        <br></br><br></br>
                        <h6>
                        <p className="link" onClick={() => switchForm('login')}>Already have an account? Sign in</p>
                        </h6>
                        </div>
                    ):(
                        null
                    )
                    }
                    {
                (isOTPVerified)?(
                    <div className="form" id="sign-up-form">
                    <h1 className="title">Verify your OTP</h1>
                    <div className="fields">
                        <h1>Enter your Email</h1>
                            <FormGroup>
                                <Label for="otp" id="Enter-otp-input">Enter OTP</Label>
                                <br></br>
                                <Input  id="otp" name="otp" placeholder="Enter OTP" type="number" onChange={inputOTPEvent}/>
                            </FormGroup>

                    </div>
                    <button className="send-email" onClick={verifyOTP}>Verify OTP</button>
                    <br></br><br></br>
                    </div>
                ):(
                    null
                )
                }
            
            
                </div>
            </div>
       
        </div>
        
                        
    );

// login page -> login pass, new user signup btn
// signup btn onclick -> email verification -> verify otp/ resend otp
// signup page -> full name, address, pincode, phone no -> home page
}

export default Login;