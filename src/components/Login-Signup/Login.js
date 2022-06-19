import React from "react";
import Header from "../Header";
import { Button, Container, Form, FormGroup, Row,Col } from "react-bootstrap";
import {Input,Label} from 'reactstrap';
import { useNavigate } from "react-router-dom";

import "./SignIn.css"
import EmailAuth from "./EmailAuth";
import { useState } from "react";
import { IoMdLogOut } from "react-icons/io";


const axios = require('axios');


var email = "";
var password = "";
var otp = "123456";
var inputOtpByUser ="";
var isUserLoggedIn = false;
var name = ""
var firstName = "";
var lastName = "";
var phoneNo = "";
var confirmPassword = "";

localStorage.setItem("isUserLoggedIn",isUserLoggedIn);

function Login(){  
    const navigate = useNavigate();
    
    const [isOTPSent,setIsOTPSent] = useState(true);
    const [isOTPNotVerified,setIsOTPNotVerified] = useState(true);
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
    // const inputPasswordEvent=(event)=>{
    //     password = event.target.value;
    //     // console.log("Password",password);
    // }

    const inputNameEvent=(event)=>{
        name = event.target.value;
    }

    const inputFirstNameEvent=(event)=>{
        console.log("In input first name event");
        firstName = event.target.value;
        console.log("First Name:",firstName);
    }

    const inputLastNameEvent=(event)=>{
        console.log("In input last name event");
        lastName = event.target.value;
        console.log("Last Name:",lastName);
    }
    const inputPhoneNumberEvent=(event)=>{
        console.log("In input phone Number event");
        phoneNo = event.target.value;
        console.log("Phone Number:",phoneNo);
    }
    const inputPasswordEvent=(event)=>{
        console.log("In input password event");
        password = event.target.value;
        console.log("Password:",password);
    }
    const inputConfirmPasswordEvent=(event)=>{
        console.log("In input confirm password event");
        confirmPassword = event.target.value;
        console.log("Confirm Password:",confirmPassword);
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
    var authorization = "Bearer "+localStorage.getItem("jwtToken");
    console.log(authorization);

    axios.post("http://localhost:8080/login-user",form_data_body,{
        headers:{
            "Content-Type": "multipart/form-data",
            "Authorization": authorization
        },
    }).then(function(response){
        console.log(response);
        if(response.status==200){
            localStorage.setItem("isLoggedIn","true");
            console.log(response.data.message);
            navigate("/");
        }
        console.log(response.data.message);
    }).catch(function(error){
        console.log(error);
    })
    isUserLoggedIn=true;
    // alert("login successful")

    
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
            //setIsOTPVerified(true);
            console.log("isOTPSent",isOTPSent);
            console.log("isOTPVerified",isOTPNotVerified);
        }

    }
   const verifyOTP=()=>{
    //    alert(otp);
       if(otp === inputOtpByUser){
           alert('Correct input otp');
           setIsOTPNotVerified(false);
        //    setIsOTPSent(false);
        //setIsUserRegistered(true);
        //    setIsEmailVerified(false);
       }
       else{
           alert('incorrect')
       }

   }

   const registerUser=()=>{
        if(firstName===""){
           alert("Please enter first name")
        }else if(lastName===""){
           alert("Please enter last name")
        }else if(phoneNo.length!=10){
        alert("Please enter correct mobile number")
        }
        else if(password.length<6){
            alert("Password must be of minimum 6 characters")
        }
        else if(confirmPassword.length<6){
            alert("Confirm Password must be of minimum 6 characters")
        }
        else if(password!==confirmPassword){
            alert("Passwords do not match")
        }
        else{
            var form_data_body={
                "Email": email,
                "Password": password,
                "first_name": firstName,
                "last_name": lastName,
                "PhoneNo": phoneNo
            }
            axios.post("http://localhost:8080/add-user",form_data_body,{
                headers:{
                    "Content-Type":"multipart/form-data"
                }
            }).then(function(response){
                if(response.status==200){
                    console.log("User Registered successfully");
                    localStorage.setItem("isLoggedIn",true);
                    localStorage.setItem("Name",firstName+" "+lastName);
                    localStorage.setItem("jwtToken",response.data.token);
                    navigate("/");
                }
            }).catch(function(error){
                console.log("Error",error);
            })
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
                        <Button className="login-button" onClick={homepage}>
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
                        {/* <p style={{color:"white"}}>Enter your Email</p> */}
                        <div className="fields">
                                <FormGroup>
                                    <Label id="email-input" for="email"></Label>
                                    <br></br>
                                    <Input id="email" name="email" placeholder="Enter email" type="email" className="input" onChange={inputEmailEvent}/>
                                </FormGroup>
        
                        </div>
                        <div className="submit-container">
                            <Button className="login-button" onClick={()=>sendOTP()}>Send OTP on Email</Button>
                            <br></br><br></br>
                            <h6>
                            <p className="link" onClick={() => switchForm('login')}>Already have an account? Sign in</p>
                            </h6>
                        </div>
                        </div>
                    ):(
                        
                        (isOTPNotVerified)?(
                        <div className="form" id="sign-up-form">
                        <h1 className="title">Verify your OTP</h1>
                        <div className="fields">
                            <h1>Enter your OTP</h1>
                                <FormGroup>
                                    <Label for="otp-input" id="Enter-otp-input">Enter OTP</Label>
                                    <br></br>
                                    <Input  id="otp" name="otp" placeholder="Enter OTP"  className="input" onChange={inputOTPEvent}/>
                                </FormGroup>

                        </div>
                            <div className="submit-container">
                                <Button className="login-button" onClick={()=>verifyOTP()}>Verify OTP</Button>
                            <br></br><br></br>
                            
                            <h6>
                            <p className="link" onClick={() => switchForm('login')}>Already have an account? Sign in</p>
                            </h6>
                            </div>
                        </div>
                        ):(
                            <div className="form" id="sign-up-form">
                            <h1 className="title">User Registration</h1>
                            <div className="fields">
                                    <FormGroup>
                                        <Input id="firstName" name="firstName" placeholder="First name" defaultValue="" type="name" className ="input" onChange={inputFirstNameEvent}/>
                                        <Input id="lastName" name="lastName" placeholder="Last name" defaultValue="" type="name" className ="input" onChange={inputLastNameEvent}/>
                                        <Input id="mobileNumber" name="mobileNumber" placeholder="Mobile Number" defaultValue="" type="name" className ="input" onChange={inputPhoneNumberEvent}/>
                                        <Input id="password" name="password" placeholder="Password" defaultValue="" type="password" className ="input" onChange={inputPasswordEvent}/>
                                        <Input id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" defaultValue="" type="password" className ="input" onChange={inputConfirmPasswordEvent}/>
                                    </FormGroup>
            
                            </div>
                                <div className="submit-container">
                                <Button className="login-button" onClick={()=>registerUser()}>Register User</Button>
                                <br></br><br></br>
                                <h6>
                                <p className="link" onClick={() => switchForm('login')}>Already have an account? Sign in</p>
                                </h6>
                                </div>
                            </div>

                        )
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