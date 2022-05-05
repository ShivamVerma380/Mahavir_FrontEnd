import React from "react";
import Header from "../Header";
import { Button, Container, Form, FormGroup, Input, Label,Row,Col } from "reactstrap";
// import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {useState,useEffect} from "react";
import {axios} from "axios";

function EmailVerification(){  
    const navigate = useNavigate(); 
    const verifyOTP=()=>{
        navigate('/otp');
    }

    const[otp,SetOtp] = useState(null);
    const axios = require('axios');
    //const FormData = require('form-data');
    const FormData = require('form-data');
    async function makeGetRequest(){
        //const form_data = FormData();
        const form_data = new FormData();
        form_data.append("email","shivamvermasv380@gmail.com");

        let res = await axios.get('http://localhost:8080/verify-email',form_data);
        
        let data = res.data;

        console.log(data);


    }

    makeGetRequest();

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