import React, { useState } from "react";
import { Input, Label } from 'reactstrap';
import { Button, Container, Form, FormGroup, Row, Col } from "react-bootstrap";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import Admin from './Admin';
import url from "../../Uri";





const AdminLogin = () => {
    var email = "";
    const[adminotp,Setadminotp]=useState();
    var admininputotp;
    var inputsecretkey = "";
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [isNewOtpSent, setIsNewOtpSent] = useState(false)
    const [isOtpVerified,setIsOtpVerified] = useState(false);
    const [isSecretKeyVerified,setIsSecretKeyVerified] = useState(false);
    const [isLoggedIn,setIsLoggedIn] = useState(false);
    
    const inputEmailEvent = (event) => {
        email = event.target.value;
    }

    const inputOTPEvent = (event) => {
        admininputotp = event.target.value;
        console.log("Input: ",admininputotp)

    }

    const inputSecretKeyEvent = (event) => {
        inputsecretkey = event.target.value;
        console.log("Secret Key: ",inputsecretkey)
    }

    const sendOTP = () => {
        alert(email);

        if (email === "") {
            console.log("Email is empty")
            alert("Please Enter Email")
        } else {
            console.log("Email", email);
            axios({
                method: "get",
                url: url+"/verify-email/" + email
            }).then(function (response) {
                console.log(response.data);
                Setadminotp(response.data.otp);
                
                console.log("otp:", adminotp);
            }).catch(function (response) {
                console.log(response);
                return;
            })


            setIsOtpSent(true);
            setIsNewOtpSent(true);
            //setIsOTPVerified(true);
            console.log("isOTPSent", isOtpSent);
            // console.log("isOTPVerified", isOTPNotVerified);
        }

    }

    
    const verifyOTP = () => {
        console.log(adminotp,":",admininputotp);
        //    alert(otp);
        if (adminotp === admininputotp ) {
            alert('Correct input otp');
            setIsOtpVerified(true);
            //    navigate('/email-auth');
            //    setIsOTPSent(false);
            // setIsUserRegistered(true);
            // setIsNewOtpVerified(true);
            //    setIsEmailVerified(false);
        }
        else {
            alert('incorrect otp')
        }



    }
    const navigate = useNavigate();

    const verifySecretKey = () => {
        if (inputsecretkey==="380002") {
            alert("Correct key");
            setIsSecretKeyVerified(true);
           // navigate("/admindetail")
            setIsLoggedIn(true);
        }
        else {
            alert("Wrong Key");
        }
    }

    

    return (
        <div>
            <center>
                {
                    (isLoggedIn) ? (<Admin/>):(
                    (!isOtpSent) ? (
                        <div>
                            <h1>Please Login First</h1>
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
                            <Button onClick={sendOTP}>Send OTP</Button>
                        </div>
                    ) : (
                        (!isOtpVerified) ? (
                            <div>
                            <h1>Enter your OTP</h1>
                            <FormGroup>
                                <Label for="otp-input" id="Enter-otp-input">Enter OTP</Label>
                                <br></br>
                                <Input id="otp" name="otp" placeholder="Enter OTP" className="input" onChange={inputOTPEvent} />
                            </FormGroup>
                            <Button onClick={() => verifyOTP()}>Submit OTP</Button>

                        </div>
                        ) : (
                            <div>
                            <h1>Enter Secret Key</h1>
                            <FormGroup>
                                
                                <br></br>
                                <Input id="otp" name="otp" placeholder="Enter Secret Key" className="input" onChange={inputSecretKeyEvent} />
                            </FormGroup>
                            <Button onClick={() => verifySecretKey()}>Submit Key</Button>

                        </div>
                        )

                        

                    )
                    )
                }

            </center>

        </div>

    )
}
export default AdminLogin