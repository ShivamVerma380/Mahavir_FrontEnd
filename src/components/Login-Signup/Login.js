import React from "react";
import Header from "../Header";
import { Button, Container, Form, FormGroup, Row, Col } from "react-bootstrap";
import { Input, Label } from 'reactstrap';
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import "./SignIn.css"
import { useState } from "react";
import { IoMdLogOut } from "react-icons/io";
import Timer from "otp-timer";
import OtpInput from "react-otp-input";
import Footer from "../Footer/Footer";
import {setCookie,getCookie} from '../Cookies'
import url from "../../Uri";
import { toast, ToastContainer } from "react-toastify";

const axios = require('axios');


var email = "";
var forgotemail = "";
var password = "";
var otp = "1234";
var inputOtpByUser = "";
var isUserLoggedIn = false;
var name = ""
var firstName = "";
var lastName = "";
var phoneNo = "";
var confirmPassword = "";
var newpassword="";
var confirmnewpassword="";
var newtoken="eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhMkJWY2RAZmRlZmVkczVyZGRkYXNxc2EiLCJleHAiOjE2NTY2NzM0MzAsImlhdCI6MTY1NjU3MzQzMH0.h4vfExQjQ-p0bQWCxvXKmBhwGACPHspDcWMNMed_ncc";

localStorage.setItem("isUserLoggedIn", isUserLoggedIn);

function Login() {
    var cookietoken=getCookie("jwtToken");
    
    

    const navigate = useNavigate();

    const [isOTPSent, setIsOTPSent] = useState(true);
    const [isOTPNotVerified, setIsOTPNotVerified] = useState(true);
    const [isUserRegistered, setIsUserRegistered] = useState(false);
    const [isForgotPasswordClicked, setIsForgotPasswordClicked] = useState(false);
    const [isNewOtpSent, setIsNewOtpSent] = useState(false);
    const [isNewOtpVerified, setIsNewOtpVerified] = useState(false);
    const [isForgotOtpSent,setIsForgotOtpSent] = useState(false);
    const [active,setActive] = useState(false);
    const [loginActive,setLoginActive] = useState(false);
    const [otpForgotEmailActive,setOtpForgotEmailActive] = useState(false);
    const [otpEmailActive,setOtpEmailActive] = useState(false);
    const [registerActive,setRegisterActive]= useState(false);
    const [forgotOtpActive,setForgotOtpActive]=useState(false);
    const [passwordactive,setPasswordActive] = useState(true);
    let token = localStorage.getItem("jwtToken");
    // console.log("token", token);
    const [code, setCode] = useState("");

    const handleChange = (code) => setCode(code);
    const inputEmailEvent = (event) => {
        email = event.target.value;
        // console.log("email",email);
    }

    const inputForgotEmailEvent = (event)=>{
        forgotemail = event.target.value;
    }

    const inputOTPEvent = (event) => {
        inputOtpByUser = event.target.value;
        // console.log("email",email);
    }
    // const inputPasswordEvent=(event)=>{
    //     password = event.target.value;
    //     // console.log("Password",password);
    // }

    const inputNameEvent = (event) => {
        name = event.target.value;
    }

    const inputFirstNameEvent = (event) => {
        // console.log("In input first name event");
        firstName = event.target.value;
        // console.log("First Name:", firstName);
    }

    const inputLastNameEvent = (event) => {
        // console.log("In input last name event");
        lastName = event.target.value;
        // console.log("Last Name:", lastName);
    }
    const inputPhoneNumberEvent = (event) => {
        // console.log("In input phone Number event");
        phoneNo = event.target.value;
        // console.log("Phone Number:", phoneNo);
    }
    const inputPasswordEvent = (event) => {
        // console.log("In input password event");
        password = event.target.value;
        // console.log("Password:", password);
    }

    const handlepassword = () => {
        setPasswordActive(true);
    }

    
    const inputConfirmPasswordEvent = (event) => {
        // console.log("In input confirm password event");
        confirmPassword = event.target.value;
        // console.log("Confirm Password:", confirmPassword);
    }

    function setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    const homepage = () => {
        
        setLoginActive(true);
        let tokenn = localStorage.getItem("jwtToken");

        // alert("token", localStorage.getItem("jwtToken"));
        if (email === "") {
            // console.log("Email is empty");
            toast.error(<b>Please enter email</b>)
            return;
        }
        if (password === "") {
            // console.log("Password is empty");
            toast.error(<b>Please enter password</b>)
            return;
        }

        var form_data_body = {
            Email: email.toLowerCase(),
            Password: password
        }
        var authorization = "Bearer "+{tokenn};
        // console.log(authorization);

        axios.post(url+"/login-user", form_data_body, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            mode: "no-cors"
        }).then(function (response) {
            // console.log(response);
            if (response.status == 200) {

                setCookie("jwtToken",response.data.token,20);
                setCookie("Name",response.data.message,20);
                setCookie("isLoggedIn",true,20);
                // alert("loginh11");
                toast.success(<b>Login successful</b>)
                navigate("/");
            }else{
                toast.error(<b>{response.data.message}</b>);
            }
            
            // console.log(response.data.message);
        }).catch(function (error) {
            console.log("error in login-user");
            toast.error(<b>{error.response.data.message}</b>);
        })
        isUserLoggedIn = true;
        // alert("login successful")


    }


    const switchForm = (form) => {
        const formContainer = document.querySelector(".form-body");
        const loginForm = document.querySelector("#sign-in-form");
        const registerForm = document.querySelector("#sign-up-form");
        // console.log(form);
        if (form === 'register') {
            if (window.innerWidth > 800) {
                formContainer.style.left = '50%';
            }
            loginForm.style.marginLeft = '-150%';
            registerForm.style.marginLeft = '-100%';
        }
        else {
            if (window.innerWidth > 800) {
                formContainer.style.left = '0%';
            }
            loginForm.style.marginLeft = '0%';
            registerForm.style.marginLeft = '0%';
        }
    }

    const sendOTP = () => {
        setOtpEmailActive(true);
        // alert(email);

        if (email === "") {
            // console.log("Email is empty")
            toast.error(<b>Please Enter Email</b>)
        } else {
            // console.log("Email", email);
            axios({
                method: "get",
                url: url+"/verify-email/" + email.toLowerCase()
            }).then(function (response) {
                // console.log(response.data);
                otp = response.data.otp;
                // console.log("otp:", otp);
            }).catch(function (response) {
                // console.log(response);
                return;
            })


            setIsOTPSent(false);
            setIsNewOtpSent(true);
            //setIsOTPVerified(true);
            // console.log("isOTPSent", isOTPSent);
            // console.log("isOTPVerified", isOTPNotVerified);
        }

    }

    const sendForgotOTP = () => {
        setOtpForgotEmailActive(true);
        // alert(email);

        if (forgotemail === "") {
            // console.log("Email is empty")
            toast.error(<b>Please Enter Email</b>)
        } else {
            // console.log("Email", email);
            axios({
                method: "get",
                url: url+"/forgotPassword/" + forgotemail.toLowerCase()
            }).then(function (response) {
                // console.log(response.data);
                otp = response.data.otp;
                // console.log("otp:", otp);
            }).catch(function (response) {
                // console.log(response);
                return;
            })


            // setIsOTPSent(false);
            setIsForgotOtpSent(true);
            //setIsOTPVerified(true);
            // console.log("isOTPSent", isOTPSent);
            // console.log("isOTPVerified", isOTPNotVerified);
        }

    }

    const verifyOTP = () => {
        //    alert(otp);
        setActive(true);
        setForgotOtpActive(true);
        if (otp === code) {
            // alert('Correct input otp');
            setIsOTPNotVerified(false);
            //    navigate('/email-auth');
            //    setIsOTPSent(false);
            setIsUserRegistered(true);
            setIsNewOtpVerified(true);
            //    setIsEmailVerified(false);
        }
        else {
            toast.error(<b>Incorrect otp</b>)
        }



    }

    const registerUser = () => {
        setRegisterActive(true);
        if (firstName === "") {
            toast.error(<b>Please enter first name</b>)
        } else if (lastName === "") {
            toast.error(<b>Please enter last name</b>)
        } else if (phoneNo.length != 10) {
            toast.error(<b>Please enter correct mobile number</b>)
        }
        else if (password.length < 6) {
            toast.warn(<b>Password must be of minimum 6 characters</b>)
        }
        else if (confirmPassword.length < 6) {
            toast.warn("Confirm Password must be of minimum 6 characters")
        }
        else if (password !== confirmPassword) {
            toast.error("Passwords do not match")
        }
        else {
            var form_data_body = {
                "Email": email.toLowerCase(),
                "Password": password,
                "first_name": firstName,
                "last_name": lastName,
                "PhoneNo": phoneNo
            }
            axios.post(url+"/add-user", form_data_body, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }).then(function (response) {
                if (response.status == 200) {
                    // console.log("User Registered successfully");
                    localStorage.setItem("isLoggedIn", true);
                    localStorage.setItem("Name", firstName + " " + lastName);
                    localStorage.setItem("jwtToken", response.data.token);
                    window.location.reload();
                    toast.success(<b>Registeration successful</b>)

                    // navigate("/");
                }else{
                    toast.error(<b>{response.data.message}</b>)
                }
            }).catch(function (error) {
                // console.log("Error in /add-user");
                toast.error(<b>{error.response.data.message}</b>)
            })
        }
    }

    const forgotPassword = () => {
        // console.log("Forgot pass")
        setIsForgotPasswordClicked(true);


    }

    const HandleResetPassword = () => {
        // alert("Reset Pass clicked")
        if (newpassword.length<6) {
            toast.warn(<b>Password length must be greater than 6</b>);
        }
        else if (confirmnewpassword.length < 6) {
            toast.warn(<b>Confirm Password must be of minimum 6 characters</b>)
        }
        else if (newpassword !== confirmnewpassword) {
            toast.error(<b>Passwords do not match</b>)
        }
        else {

            var form_data_bod = {
                "password": newpassword
            }
            const headers = { 
                
                "Content-Type": "multipart/form-data"
                
            };
            axios.post(url+'/updatePassword/'+forgotemail.toLowerCase(),form_data_bod,{headers})
            .then(function (response) {
                    if (response.status == 200) {
                        // console.log("Password Updated successfully");
                        toast.success(<b>Password Updated successfully</b>)
                        window.location.reload();
                        
                        // navigate("/login");
                    }
                }).catch(function (error) {
                    console.log("Error in updatePassword ");
                })

            

            // axios.put("http://localhost:8080/updatePassword/"+newpassword, {
            //     headers: {
            //        "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhMkJWY2RAZmRlZmVkczVyZGRkYXNxc2F3IiwiZXhwIjoxNjU3MTAwOTg5LCJpYXQiOjE2NTcwMDA5ODl9.VE0qs0oWdRInBUTHmKCKgMVEbBmlWnOMZzEtXPBXGKo"
            //     }
            // }).then(function (response) {
            //     if (response.status == 200) {
            //         console.log("Password Updated successfully");
            //         alert("Password Updated successfully")
            //         navigate("/login");
            //     }
            // }).catch(function (error) {
            //     console.log("Error", error);
            // })
        }
    }

    const inputNewPasswordEvent = (event) => {
        // console.log("In input password event");
        newpassword = event.target.value;
        // console.log("Password:", newpassword);
    }

    const inputNewConfirmPasswordEvent = (event) => {
        // console.log("In input password event");
        confirmnewpassword = event.target.value;
        // console.log("Password:", confirmnewpassword);
    }

    const handleResendClick = () => {
        toast.success(<b>Resend otp Clicked</b>)
        axios({
            method: "get",
            url: url+"/resend-otp/" + email.toLowerCase()
        }).then(function (response) {
            // console.log(response.data);
            otp = response.data.otp;
            // console.log("otp:", otp);
        }).catch(function (response) {
            // console.log(response);
            return;
        })

    }

    const login_ = useRef(null);
    const signup_ = useRef(null);
    const scrollDown = (ref) => {
        window.scrollTo({
          top: ref.current.offsetTop,
          behavior: "smooth",
        });
      };

    return (
        <div>
            <ToastContainer position="top-center"/>

            <Header />
            <center>

            <div className="form-parent">

                <div className="sign-in-img"></div>
                <div className="sign-up-img"></div>
                <div className="form-body">
                    {
                        (!isForgotPasswordClicked) ? (
                            <div className="form" id="sign-in-form">
                                {/* <center style={{marginTop:"30px"}}> */}
                                 <h1 className="title">Login</h1>
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
                                            
                                            style={{justifyContent:"left",backgroundColor:"white",color:"black",borderBottom:"1px Solid #E2E2E2",width:"100%",fontSize:"14px"}}
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
                                            onClick={handlepassword}
                                            style={{backgroundColor:"white",color:"black",borderBottom:"1px Solid #E2E2E2",width:"100%",fontSize:"14px"}}  
                                        />
                                    </FormGroup>
                                    
                                    <p style={{ color: "red" ,cursor:'pointer',textAlign:"right"}} onClick={forgotPassword}>Forgot Password?</p>
                                    {/* <p>By continuing,you agree to our <a href="http://www.google.com">Terms of use</a> and<a href="http://www.google.com"> Privacy Policy</a></p> */}
                                    {/* className="forgotpass" */}
                                </div>
                                <div className="submit-container">
                                    <Button className="login-button" onClick={homepage} style={{background: loginActive ? '#DA0606':'#DA0606'}}>
                                        Login
                                    </Button>
                                    <h5 style={{fontSize:"18px",color:"rgba(0,0,0,0.5)"}}>OR</h5>
                                    <br></br>
                                    <h5 style={{fontSize:"16px",color:"rgba(0,0,0,0.5)",fontWeight:"500",marginBottom:"20px",marginTop:"-10px"}}>New to Mahavir?</h5>
                                        <button style={{marginTop:"-10px"}} className="New-account-button" onClick={() => switchForm('register')}>Create an Account</button>  
                                </div>
                                {/* </center> */}

                            </div>
                        ) : (
                            (!isForgotOtpSent) ? (
                                <div className="form" id="sign-in-form">
                                    {/* <center> */}
                                    <h1 className="title">Forgot Password</h1>
                                    <div className="fields">
                                        <FormGroup>
                                            <Label id="email-input" for="email"></Label>
                                            <Input style={{borderRadius:'20px',justifyContent:"left",backgroundColor:"white",color:"black",borderBottom:"1px Solid #E2E2E2",width:"100%"}} id="email" name="email" placeholder="Enter email" type="email" className="input" onChange={inputForgotEmailEvent} />
                                        </FormGroup>

                                    </div>
                                    <br></br>
                                    <p>By continuing,you agree to our <a href="https://mahavirelectronics.net/#/terms-of-use">Terms of use</a> and<a href="https://mahavirelectronics.net/#/privacypolicy"> Privacy Policy</a></p>
                                    <br></br>
                                    <div className="submit-container">
                                        <Button className="login-button" onClick={() => sendForgotOTP()} style={{background: otpForgotEmailActive?'#DA0606':'#DA0606'}}>Send OTP</Button>
                                       

                                    </div>
                                    {/* </center> */}
                                </div>
                            ) : (

                                (!isNewOtpVerified) ? (
                                    <div className="form" id="sign-in-form">
                                        <h1 className="title">Verify your OTP</h1>
                                        <br></br>
                                        <br></br>
                                        <div className="fields">
                                            {/* <h1>Enter your OTP</h1> */}
                                            <OtpInput
                                                    value={code}
                                                    onChange={handleChange}
                                                    numInputs={6}
                                                    separator={<span style={{ width: "8px" }}></span>}
                                                    isInputNum={true}
                                                    shouldAutoFocus={true}
                                                    inputStyle={{
                                                    border: "1px solid black",
                                                    borderRadius: "8px",
                                                    width: "54px",
                                                    height: "54px",
                                                    fontSize: "12px",
                                                    color: "#000",
                                                    fontWeight: "400",
                                                    caretColor: "blue"
                                                    }}
                                                    focusStyle={{
                                                    border: "1px solid #CFD3DB",
                                                    outline: "none",
                                                    backgroundColor:'white',
                                                    }}
                                                />
                                            {/* <FormGroup>
                                                <Label for="otp-input" id="Enter-otp-input">Enter OTP</Label>
                                                <br></br>
                                                <Input id="otp" name="otp" placeholder="Enter OTP" className="input" onChange={inputOTPEvent} />
                                            </FormGroup> */}

                                        </div>
                                        <br></br>
                                        <div className="fields">
                                            <Timer ButtonText="RESEND OTP" background={"#0000"} style={{textDecorationLine:"underline"}} text="Resend OTP in: " seconds={5} minutes={0} resend={handleResendClick}/>
                                        </div>
                                        <br></br>
                                       

                                        <div className="submit-container">
                                            <Button className="login-button" onClick={() => verifyOTP() } style={{background: forgotOtpActive? '#DA0606':'#DA0606'}}>Verify OTP</Button>
                                            <br></br><br></br>


                                        </div>
                                    </div>
                                ) : (
                                    <div className="form" id="sign-in-form">
                                        <h1 className="title">Reset Password</h1>
                                        <br></br>
                                        <br></br>
                                        <div className="fields">

                                            <FormGroup>
                                                
                                                <Input
                                                    id="new-password"
                                                    name="new-password"
                                                    placeholder="Enter New Password"
                                                    type="password" className="input"
                                                    onChange={inputNewPasswordEvent}
                                                    
                                                    style={{borderRadius:'20px',color:"black",justifyContent:"left",backgroundColor:"white",borderBottom:"1px Solid #E2E2E2",width:"100%"}}
                                                />
                                            </FormGroup>
                                            

                                            <FormGroup >
                                                
                                                <br></br>
                                                <Input
                                                    id="confirm-password"
                                                    name="confirm-password"
                                                    placeholder="Confirm New Password"
                                                    type="password" className="input"
                                                    onChange={inputNewConfirmPasswordEvent}
                                                    
                                                    style={{borderRadius:'20px',color:"black",justifyContent:"left",backgroundColor:"white",borderBottom:"1px Solid #E2E2E2",width:"100%"}}
                                                />
                                            </FormGroup>

                                            {/* <FormGroup>
                                        <Label for="password"></Label>
                                        <br></br>
                                        <Input id="new-password" name="new-password" placeholder="Enter New Password" type="password" className="input" onChange={inputPasswordEvent} />
                                        </FormGroup>
                                        <FormGroup>
                                        <Label for="password"></Label>
                                        <br></br>
                                        <Input id="confirm-password" name="confirm-password" placeholder="Confirm New Password" type="password" className="input" onChange={inputConfirmPasswordEvent} />
                                        </FormGroup> */}

                                        </div>
                                        <br></br>
                                        <br></br>
                                        <div className="submit-container">
                                            <Button className="login-button" onClick={HandleResetPassword} style={{background: active? '#DA0606':'#DA0606'}}>Reset Password</Button>
                                            <br></br><br></br><br></br>

                                        </div>

                                    </div>
                                )
                            )
                        )
                    }

                    {
                        (isOTPSent) ? (
                            <div className="form" id="sign-up-form">
                                <center>
                                <h1 className="title">Sign up</h1>
                                {/* <p style={{color:"white"}}>Enter your Email</p> */}
                                <div className="fields">
                                    <FormGroup>
                                        <Label id="email-input" for="email"></Label>
                                        <br></br>
                                        <Input style={{borderRadius:'20px',justifyContent:"left",backgroundColor:"white",color:"black",borderBottom:"1px Solid #E2E2E2",width:"100%", fontSize:"14px"}} id="email" name="email" placeholder="Enter Email" type="email" className="input" onChange={inputEmailEvent} />
                                    </FormGroup>

                                </div>
                                <p>By continuing,you agree to our <a href="http://www.google.com">Terms of use</a> and<a href="http://www.google.com"> Privacy Policy</a></p>
                                <br></br>
                                <div className="submit-container">
                                    <Button className="login-button" onClick={() => sendOTP() } style={{background: otpEmailActive?'#DA0606':'#DA0606'}}>Send OTP on Email</Button>
                                    <h6>
                                    <h5 style={{fontSize:"18px",color:"rgba(0,0,0,0.5)"}}>OR</h5>
                                    <br></br>
                                    <h5 style={{fontSize:"16px",color:"rgba(0,0,0,0.5)",fontWeight:"500"}}>Already have an account?</h5>
                                    <button className="New-account-button" onClick={() => switchForm('login')}>Login</button>
                                        {/* <button className="link" onClick={() => switchForm('login')}> Sign in</button> */}
                                    </h6>
                                </div>
                                </center>
                            </div>
                        ) : (

                            (isOTPNotVerified) ? (
                                <div className="form" id="sign-up-form">
                                    <h1 className="title">Verify OTP</h1>
                                    <br></br>
                                    <div className="fields">
                                        {/* <h1>Enter your OTP</h1> */}
                                        <OtpInput
                                                    value={code}
                                                    onChange={handleChange}
                                                    numInputs={6}
                                                    separator={<span style={{ width: "8px" }}></span>}
                                                    isInputNum={true}
                                                    shouldAutoFocus={true}
                                                    inputStyle={{
                                                    border: "1px solid black",
                                                    borderRadius: "8px",
                                                    width: "54px",
                                                    height: "54px",
                                                    fontSize: "12px",
                                                    color: "#000",
                                                    fontWeight: "400",
                                                    caretColor: "blue"
                                                    }}
                                                    focusStyle={{
                                                    border: "1px solid #CFD3DB",
                                                    outline: "none",
                                                    backgroundColor:'white',
                                                    }}
                                                />
                                                <br></br>
                                                <p>By continuing,you agree to our <a href="http://www.google.com">Terms of use</a> and<a href="http://www.google.com"> Privacy Policy</a></p>
                                        {/* <FormGroup>
                                            <Label for="otp-input" id="Enter-otp-input">Enter OTP</Label>
                                            <br></br>
                                            <Input id="otp" name="otp" placeholder="Enter OTP" className="input" onChange={inputOTPEvent} />
                                        </FormGroup> */}
                                        


                                    </div>
                                    <br></br>
                                    <div className="submit-container">
                                        <Button className="verify-button" style={{background: active ? '#DA0606' : '#DA0606'}} onClick={() => verifyOTP()}>Verify OTP</Button>
                                        <h6>
                                    <h5 style={{fontSize:"18px",color:"rgba(0,0,0,0.5)"}}>OR</h5>
                                    <br></br>
                                    <h5 style={{fontSize:"16px",color:"rgba(0,0,0,0.5)",fontWeight:"500"}}>Already have an account?</h5>
                                    <button className="New-account-button" onClick={() => switchForm('login')}>Login</button>
                                        {/* <button className="link" onClick={() => switchForm('login')}> Sign in</button> */}
                                    </h6>

                                        {/* <h6>
                                            <p className="link" onClick={() => switchForm('login')}>Already have an account? Sign in</p>
                                        </h6> */}
                                    </div>
                                </div>
                            ) : (
                                <div className="form" id="sign-up-form">
                                    <center>                                    
                                    <h1 className="title">User Registration</h1>
                                    <br></br>

                                    <div className="fields">
                                        <FormGroup>
                                            <Input style={{borderRadius:'20px',color:"black",justifyContent:"left",backgroundColor:"white",borderBottom:"1px Solid #E2E2E2",width:"100%"}} id="firstName" name="firstName" placeholder="First name" defaultValue="" type="name" className="input" onChange={inputFirstNameEvent} />
                                            <Input style={{borderRadius:'20px',color:"black",justifyContent:"left",backgroundColor:"white",borderBottom:"1px Solid #E2E2E2",width:"100%"}} id="lastName" name="lastName" placeholder="Last name" defaultValue="" type="name" className="input" onChange={inputLastNameEvent} />
                                            <Input style={{borderRadius:'20px',color:"black",justifyContent:"left",backgroundColor:"white",borderBottom:"1px Solid #E2E2E2",width:"100%"}} id="mobileNumber" name="mobileNumber" placeholder="Mobile Number" defaultValue="" type="name" className="input" onChange={inputPhoneNumberEvent} />
                                            <Input style={{borderRadius:'20px',color:"black",justifyContent:"left",backgroundColor:"white",borderBottom:"1px Solid #E2E2E2",width:"100%"}} id="password" name="password" placeholder="Password" defaultValue="" type="password" className="input" onChange={inputPasswordEvent} />
                                            <Input style={{borderRadius:'20px',color:"black",justifyContent:"left",backgroundColor:"white",borderBottom:"1px Solid #E2E2E2",width:"100%"}} id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" defaultValue="" type="password" className="input" onChange={inputConfirmPasswordEvent} />
                                        </FormGroup>

                                    </div>
                                    <br></br>
                                    <div className="submit-container">
                                        <Button className="login-button" onClick={() => registerUser()} style={{background: registerActive? '#DA0606':'#DA0606'}}>Register User</Button>
                                       
                                        {/* <h6>
                                            <p className="link" onClick={() => switchForm('login')}>Already have an account? Sign in</p>
                                        </h6> */}
                                    </div>
                                    </center>
                                </div>

                            )
                        )
                    }



                </div>
            </div>
            </center>
            <div className="mobile_login">
{
    (!isForgotPasswordClicked) ? (
        <center>
        <div ref={login_} className="form" id="sign-in-form">
            {/* <center style={{marginTop:"30px"}}> */}
             <h1 className="title">Login</h1>
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
                        
                        style={{justifyContent:"left",backgroundColor:"white",color:"black",borderBottom:"1px Solid #E2E2E2",width:"100%",fontSize:"14px"}}
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
                        onClick={handlepassword}
                        style={{backgroundColor:"white",color:"black",borderBottom:"1px Solid #E2E2E2",width:"100%",fontSize:"14px"}}  
                    />
                </FormGroup>
                
                <p style={{ color: "red" ,cursor:'pointer',textAlign:"right"}} onClick={forgotPassword}>Forgot Password?</p>
                {/* <p>By continuing,you agree to our <a href="http://www.google.com">Terms of use</a> and<a href="http://www.google.com"> Privacy Policy</a></p> */}
                {/* className="forgotpass" */}
            </div>
            <div className="submit-container">
                <Button className="login-button" onClick={homepage} style={{background: loginActive ? '#DA0606':'#DA0606'}}>
                    Login
                </Button>
                <h5 style={{fontSize:"18px",color:"rgba(0,0,0,0.5)"}}>OR</h5>
                <br></br>
                <h5 style={{fontSize:"16px",color:"rgba(0,0,0,0.5)",fontWeight:"500",marginBottom:"20px",marginTop:"-10px"}}>New to Mahavir?</h5>
                    <button style={{marginTop:"-10px"}} className="New-account-button" onClick={() => scrollDown(signup_)}>Create an Account</button>  
            </div>
            {/* </center> */}

        </div>
        </center>
    ) : (
        (!isForgotOtpSent) ? (
            <div className="form" id="sign-in-form">
                <center>
                <h1 className="title">Forgot Password</h1>
                <div className="fields">
                    <FormGroup>
                        <Label id="email-input" for="email"></Label>
                        <Input style={{borderRadius:'20px',justifyContent:"left",backgroundColor:"white",color:"black",borderBottom:"1px Solid #E2E2E2",width:"100%"}} id="email" name="email" placeholder="Enter email" type="email" className="input" onChange={inputEmailEvent} />
                    </FormGroup>

                </div>
                <br></br>
                <p>By continuing,you agree to our <a href="http://www.google.com">Terms of use</a> and<a href="http://www.google.com"> Privacy Policy</a></p>
                <br></br>
                <div className="submit-container">
                    <Button className="login-button" onClick={() => sendForgotOTP()} style={{background: otpForgotEmailActive?'#DA0606':'#DA0606'}}>Send OTP</Button>
                   

                </div>
                </center>
            </div>
        ) : (

            (!isNewOtpVerified) ? (
                <div className="form" id="sign-in-form">
                    <h1 className="title">Verify your OTP</h1>
                    <br></br>
                    <br></br>
                    <div className="fields">
                        {/* <h1>Enter your OTP</h1> */}
                        <OtpInput
                                value={code}
                                onChange={handleChange}
                                numInputs={6}
                                separator={<span style={{ width: "8px" }}></span>}
                                isInputNum={true}
                                shouldAutoFocus={true}
                                inputStyle={{
                                border: "1px solid black",
                                borderRadius: "8px",
                                width: "54px",
                                height: "54px",
                                fontSize: "12px",
                                color: "#000",
                                fontWeight: "400",
                                caretColor: "blue"
                                }}
                                focusStyle={{
                                border: "1px solid #CFD3DB",
                                outline: "none",
                                backgroundColor:'white',
                                }}
                            />
                        {/* <FormGroup>
                            <Label for="otp-input" id="Enter-otp-input">Enter OTP</Label>
                            <br></br>
                            <Input id="otp" name="otp" placeholder="Enter OTP" className="input" onChange={inputOTPEvent} />
                        </FormGroup> */}

                    </div>
                    <br></br>
                    <div className="fields">
                        <Timer ButtonText="RESEND OTP" background={"#0000"} style={{textDecorationLine:"underline"}} text="Resend OTP in: " seconds={5} minutes={0} resend={handleResendClick}/>
                    </div>
                    <br></br>
                   

                    <div className="submit-container">
                        <Button className="login-button" onClick={() => verifyOTP() } style={{background: forgotOtpActive? '#DA0606':'#DA0606'}}>Verify OTP</Button>
                        <br></br><br></br>


                    </div>
                </div>
            ) : (
                <div className="form" id="sign-in-form">
                    <h1 className="title">Reset Password</h1>
                    <br></br>
                    <br></br>
                    <div className="fields">

                        <FormGroup>
                            
                            <Input
                                id="new-password"
                                name="new-password"
                                placeholder="Enter New Password"
                                type="password" className="input"
                                onChange={inputNewPasswordEvent}
                                
                                style={{borderRadius:'20px',color:"black",justifyContent:"left",backgroundColor:"white",borderBottom:"1px Solid #E2E2E2",width:"100%"}}
                            />
                        </FormGroup>
                        

                        <FormGroup >
                            
                            <br></br>
                            <Input
                                id="confirm-password"
                                name="confirm-password"
                                placeholder="Confirm New Password"
                                type="password" className="input"
                                onChange={inputNewConfirmPasswordEvent}
                                
                                style={{borderRadius:'20px',color:"black",justifyContent:"left",backgroundColor:"white",borderBottom:"1px Solid #E2E2E2",width:"100%"}}
                            />
                        </FormGroup>

                        {/* <FormGroup>
                    <Label for="password"></Label>
                    <br></br>
                    <Input id="new-password" name="new-password" placeholder="Enter New Password" type="password" className="input" onChange={inputPasswordEvent} />
                    </FormGroup>
                    <FormGroup>
                    <Label for="password"></Label>
                    <br></br>
                    <Input id="confirm-password" name="confirm-password" placeholder="Confirm New Password" type="password" className="input" onChange={inputConfirmPasswordEvent} />
                    </FormGroup> */}

                    </div>
                    <br></br>
                    <br></br>
                    <div className="submit-container">
                        <Button className="login-button" onClick={HandleResetPassword} style={{background: active? '#DA0606':'#DA0606'}}>Reset Password</Button>
                        <br></br><br></br><br></br>

                    </div>

                </div>
            )
        )
    )
}

{
    (isOTPSent) ? (
        <div ref={signup_} className="form" id="sign-up-form">
            <center>
            <h1 className="title">Sign up</h1>
            {/* <p style={{color:"white"}}>Enter your Email</p> */}
            <div className="fields">
                <FormGroup>
                    <Label id="email-input" for="email"></Label>
                    <br></br>
                    <Input style={{borderRadius:'20px',justifyContent:"left",backgroundColor:"white",color:"black",borderBottom:"1px Solid #E2E2E2",width:"100%", fontSize:"14px"}} id="email" name="email" placeholder="Enter Email" type="email" className="input" onChange={inputEmailEvent} />
                </FormGroup>

            </div>
            <p>By continuing,you agree to our <a href="http://www.google.com">Terms of use</a> and<a href="http://www.google.com"> Privacy Policy</a></p>
            <br></br>
            <div className="submit-container">
                <Button className="login-button" onClick={() => sendOTP() } style={{background: otpEmailActive?'#DA0606':'#DA0606'}}>Send OTP on Email</Button>
                <h6>
                <h5 style={{fontSize:"18px",color:"rgba(0,0,0,0.5)"}}>OR</h5>
                <br></br>
                <h5 style={{fontSize:"16px",color:"rgba(0,0,0,0.5)",fontWeight:"500"}}>Already have an account?</h5>
                <button className="New-account-button" onClick={() => scrollDown(login_)}>Login</button>
                    {/* <button className="link" onClick={() => switchForm('login')}> Sign in</button> */}
                </h6>
            </div>
            </center>
        </div>
    ) : (

        (isOTPNotVerified) ? (
            <div className="form" id="sign-up-form">
                <h1 className="title">Verify OTP</h1>
                <br></br>
                <div className="fields">
                    {/* <h1>Enter your OTP</h1> */}
                    <OtpInput
                                value={code}
                                onChange={handleChange}
                                numInputs={6}
                                separator={<span style={{ width: "8px" }}></span>}
                                isInputNum={true}
                                shouldAutoFocus={true}
                                inputStyle={{
                                border: "1px solid black",
                                borderRadius: "8px",
                                width: "54px",
                                height: "54px",
                                fontSize: "12px",
                                color: "#000",
                                fontWeight: "400",
                                caretColor: "blue"
                                }}
                                focusStyle={{
                                border: "1px solid #CFD3DB",
                                outline: "none",
                                backgroundColor:'white',
                                }}
                            />
                            <br></br>
                            <p>By continuing,you agree to our <a href="http://www.google.com">Terms of use</a> and<a href="http://www.google.com"> Privacy Policy</a></p>
                    {/* <FormGroup>
                        <Label for="otp-input" id="Enter-otp-input">Enter OTP</Label>
                        <br></br>
                        <Input id="otp" name="otp" placeholder="Enter OTP" className="input" onChange={inputOTPEvent} />
                    </FormGroup> */}
                    


                </div>
                <br></br>
                <div className="submit-container">
                    <Button className="verify-button" style={{background: active ? '#DA0606' : '#DA0606'}} onClick={() => verifyOTP()}>Verify OTP</Button>
                    <h6>
                <h5 style={{fontSize:"18px",color:"rgba(0,0,0,0.5)"}}>OR</h5>
                <br></br>
                <h5 style={{fontSize:"16px",color:"rgba(0,0,0,0.5)",fontWeight:"500"}}>Already have an account?</h5>
                <button className="New-account-button" onClick={() => switchForm('login')}>Login</button>
                    {/* <button className="link" onClick={() => switchForm('login')}> Sign in</button> */}
                </h6>

                    {/* <h6>
                        <p className="link" onClick={() => switchForm('login')}>Already have an account? Sign in</p>
                    </h6> */}
                </div>
            </div>
        ) : (
            <div className="form" id="sign-up-form">
                <center>                                    
                <h1 className="title">User Registration</h1>
                <br></br>

                <div className="fields">
                    <FormGroup>
                        <Input style={{borderRadius:'20px',color:"black",justifyContent:"left",backgroundColor:"white",borderBottom:"1px Solid #E2E2E2",width:"100%"}} id="firstName" name="firstName" placeholder="First name" defaultValue="" type="name" className="input" onChange={inputFirstNameEvent} />
                        <Input style={{borderRadius:'20px',color:"black",justifyContent:"left",backgroundColor:"white",borderBottom:"1px Solid #E2E2E2",width:"100%"}} id="lastName" name="lastName" placeholder="Last name" defaultValue="" type="name" className="input" onChange={inputLastNameEvent} />
                        <Input style={{borderRadius:'20px',color:"black",justifyContent:"left",backgroundColor:"white",borderBottom:"1px Solid #E2E2E2",width:"100%"}} id="mobileNumber" name="mobileNumber" placeholder="Mobile Number" defaultValue="" type="name" className="input" onChange={inputPhoneNumberEvent} />
                        <Input style={{borderRadius:'20px',color:"black",justifyContent:"left",backgroundColor:"white",borderBottom:"1px Solid #E2E2E2",width:"100%"}} id="password" name="password" placeholder="Password" defaultValue="" type="password" className="input" onChange={inputPasswordEvent} />
                        <Input style={{borderRadius:'20px',color:"black",justifyContent:"left",backgroundColor:"white",borderBottom:"1px Solid #E2E2E2",width:"100%"}} id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" defaultValue="" type="password" className="input" onChange={inputConfirmPasswordEvent} />
                    </FormGroup>

                </div>
                <br></br>
                <div className="submit-container">
                    <Button className="login-button" onClick={() => registerUser()} style={{background: registerActive? '#DA0606':'#DA0606'}}>Register User</Button>
                   
                    {/* <h6>
                        <p className="link" onClick={() => switchForm('login')}>Already have an account? Sign in</p>
                    </h6> */}
                </div>
                </center>
            </div>

        )
    )
}


</div>
            <Footer/>
        </div>


    );

    // login page -> login pass, new user signup btn
    // signup btn onclick -> email verification -> verify otp/ resend otp
    // signup page -> full name, address, pincode, phone no -> home page
}

export default Login;