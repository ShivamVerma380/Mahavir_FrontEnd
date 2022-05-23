import React from "react"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import Header from "../Header";
import { Button, Container, Form, FormGroup, Input, Label,Row,Col } from "reactstrap";
const EmailAuth=()=>{

    const [email,setEmail] = useState("");
    const [flag,setFlag] = useState(false);
    const [otp,setOtp] = useState("");
    const navigate = useNavigate();

    const inputEventEmail=(event)=>{
        setEmail(event.target.value);
    }

    const [inputOtp,SetinputOtp] = useState("");


    const inputEvent=(event)=>{
        SetinputOtp(event.target.value);
    }




    const getOtp=()=>{
        
        console.log(email);
        if(email==""){
            console.log("Email is empty");
        }else{
            axios({
                method:"get",
                url: "http://localhost:8080/verify-email"+email
            }).then(function(response){
                console.log(response.data);
                setOtp(response.data.otp);
                setFlag("true");
                console.log("otp",otp);
                console.log("flag",flag);
            }).catch(function(response){
                console.log(response);
            })
        }
    }


    const verifyOtp=()=>{
        if(inputOtp===otp){
            console.log("Login Successfull");
            navigate("/sign-up");
        }else{
            console.log("inputOtp:",inputOtp);
            console.log("otp:",otp);
        }
    }

    return(
        <>
        <div>
            <Header/>
                <Row>
                    <Col md={4}></Col>
                    <Col md={4}>
                        <Form style = {{display:!flag? "block":"none"}}>
                        <FormGroup>
                            <Label id="email-input" 
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
                            onChange={inputEventEmail}
                            />
                        </FormGroup>
                        </Form>
                    </Col>
                </Row>
                
            <Row>
                <Col md={4}></Col>
                <Col md={4}>
                <Button onClick={getOtp} style = {{display:!flag? "block":"none"}} >
                    Send OTP
                </Button >
                </Col>
            </Row>
                {/* VerifyOTP code */}
                <Row>
                    <Col md={4}></Col>
                    <Col md={4}>
                    <Form style = {{display: flag? "block":"none"}} >
                        <FormGroup>
                            <Label for="otp">
                            Enter OTP
                            </Label>
                            
                            <Input
                            id="otp"
                            name="otp"
                            placeholder="Enter OTP"
                            type="otp"
                            onChange={inputEvent}
                            />
                        </FormGroup>
                        </Form>
                    </Col>
                </Row>
                <Row>
                <Col md={4}></Col>
                    <Col md={4}>
                    <Button onClick={verifyOtp} style = {{display:flag? "block":"none"}} >
                        Submit OTP
                    </Button>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}></Col>
                    <Col md={4}>
                        <a href="/otp">Resend OTP</a>
                    </Col>
                </Row>
        </div>
        </>
    );
};

export default EmailAuth;