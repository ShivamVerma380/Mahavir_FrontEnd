import React from "react";
import Header from "./Header";
import { Button, Container, Form, FormGroup, Input, Label,Row,Col } from "reactstrap";
// import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function EmailVerification(){  
    const navigate = useNavigate(); 
const verifyOTP=()=>{
    navigate('/otp');
}
    return(
        <div>
            <Header/>
                <Row>
                    <Col md={4}></Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label
                            for="email"
                            >
                            Email
                            </Label>
                            <br></br>
                            <Input
                            id="email"
                            name="email"
                            placeholder="Enter Email"
                            type="email"
                            />
                        </FormGroup>
                    </Col>
                </Row>
                
            <Row>
                <Col md={4}></Col>
                <Col md={4}>
                <Button onClick={verifyOTP}>
                    Send OTP
                </Button >
                </Col>
            </Row>
            
        </div>
    );

// login page -> login pass, new user signup btn
// signup btn onclick -> email verification -> verify otp/ resend otp
// signup page -> full name, address, pincode, phone no -> home page
}

export default EmailVerification;