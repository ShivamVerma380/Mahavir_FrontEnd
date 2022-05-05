import React from "react";
import Header from "../Header";
import { Button, Container, Form, FormGroup, Input, Label,Row,Col } from "reactstrap";
// import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {useState,useEffect} from "react";
import {axios} from "axios";

function EmailVerification(){  
    const [email,setEmail] = useState("");
    const [otp,setOtp] = useState("");
    // var o = "";
    //var email = "";
    // const handleChange=()=>{
    //     setEmail(document.getElementById("email-input"));
    //     console.log("In Handle change");
    //     //email = document.getElementById("email-input");
    // }

    const navigate = useNavigate(); 
    const sendOTP=()=>{
        //setEmail(document.getElementById("email-input"));
        console.log(email)
        if(email===""){
            console.log("Email is empty")
        }else{
            axios({
                    method: "get",
                    url: "http://localhost:8080/verify-email/"+email,
                  })
                    .then(function (response) {
                      //handle success
                      console.log(response.data);
                    //   o = response.data.otp;
                      setOtp(response.data.otp);
                      console.log(otp);
                    })
                    .catch(function (response) {
                      //handle error
                      console.log(response);

                    });
            
            // navigate('/otp');
        }
        
    }

    const inputEvent=(event)=>{
        console.log(event.target.value);
        setEmail(event.target.value);
    }

    const getOtp=()=>{
        console.log(otp);
    }


    const axios = require('axios');
    //const FormData = require('form-data');
    const FormData = require('form-data');
    async function makeGetRequest(){
        //const form_data = FormData();
        const form_data = new FormData();
        form_data.append("email","shivamvermasv380@gmail.com");

        let res = await axios.get('http://localhost:8080/welcome',form_data);
        
        let data = res.data;

        console.log(data);


    }

    //makeGetRequest();

    return(
        <div>
            <Header/>
                <Row>
                    <Col md={4}></Col>
                    <Col md={4}>
                        <Form>
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
                            onChange={inputEvent}
                            />
                        </FormGroup>
                        </Form>
                    </Col>
                </Row>
                
            <Row>
                <Col md={4}></Col>
                <Col md={4}>
                <Button onClick={sendOTP}>
                    Send OTP
                </Button >
                <Button onClick={getOtp}>Get Otp</Button>

                </Col>
            </Row>
            
        </div>
    );

// login page -> login pass, new user signup btn
// signup btn onclick -> email verification -> verify otp/ resend otp
// signup page -> full name, address, pincode, phone no -> home page
}

export default EmailVerification;