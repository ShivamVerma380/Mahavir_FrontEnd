import React, { useState } from "react";
import { Input, Label } from 'reactstrap';
import { Button, Container, Form, FormGroup, Row, Col } from "react-bootstrap";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

var email = "";
var adminotp = "";
var admininputotp = "";
var inputsecretkey = "";


const AdminLogin = () => {
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [isNewOtpSent, setIsNewOtpSent] = useState(false)
    const [isOtpVerified,setIsOtpVerified] = useState(false);
    const [isSecretKeyVerified,setIsSecretKeyVerified] = useState(false);
    
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
                url: "http://localhost:8080/verify-email/" + email
            }).then(function (response) {
                console.log(response.data);
                adminotp = response.data.otp;
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
        //    alert(otp);
        if (adminotp === admininputotp) {
            alert('Correct input otp');
            setIsOtpVerified(true);
            //    navigate('/email-auth');
            //    setIsOTPSent(false);
            // setIsUserRegistered(true);
            // setIsNewOtpVerified(true);
            //    setIsEmailVerified(false);
        }
        else {
            alert('incorrect')
        }



    }
    const navigate = useNavigate();

    const verifySecretKey = () => {
        if (inputsecretkey==="123456") {
            alert("Correct key");
            setIsSecretKeyVerified(true);
            navigate("/admindetail")
        }
        else {
            alert("Wrong Key");
        }
    }

    

    return (



        <div>
            <center>

                
                {
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
                }

            </center>

        </div>

    )
}
export default AdminLogin