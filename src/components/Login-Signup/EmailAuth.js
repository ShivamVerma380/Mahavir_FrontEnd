import { Component,useState ,useEffect} from "react";

import { Button, Container, Form, FormGroup, Input, Label,Row,Col } from "reactstrap";
import Header from "../Header";

import React from 'react';
import ReactDOM from 'react-dom';

var email = "";
var inputOTP = "";
var otp = "";

const axios = require('axios');
// Message Component
function Message(props)
{
    const inputEmailEvent=(event)=>{
        email = event.target.value;
        console.log(email);
    }

    const inputOtpEvent=(event)=>{
        inputOTP = event.target.value;
        console.log(inputOTP);
    }

	if (props.isOTPSent){
		return(
            <div>
                <Header/>
                <Row>
                    <Col md={4}></Col>
                    <Col md={4}>
                        <h1>Enter OTP</h1>
                        <Form>
                            <FormGroup>
                                <Label for="otp">
                                    Enter OTP
                                </Label>
                                <Input id="otp" name="otp" placeholder="Enter OTP" type="otp" onChange={inputOtpEvent}/>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </div>
            

        );
    }
	else{
        return(
            <div>
                <Header/> 
                <Row>
                    <Col md={4}></Col>
                    <Col md={4}>
                        <h1>Enter your Email</h1>
                        <Form>
                            <FormGroup>
                                <Label id="email-input" for="email">Email</Label>
                                <br></br>
                                <Input id="email" name="email" placeholder="Enter email" type="email" onChange={inputEmailEvent}/>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>

            </div>
        );
    }
}

// Login Component
function SendOTP(props)
{
return(
    <Row>
    <Col md={4}></Col>
    <Col md={4}>
        <button onClick = {props.clickFunc}>
            Send OTP
        </button>
    </Col>
    
</Row>
	);
}

// Logout Component
function SubmitOTP(props)
{
	return(
        <Row>
            <Col md={4}></Col>
            <Col md={4}>
                <button onClick = {props.clickFunc}>
			        Verify OTP
		        </button>
            </Col>
            
        </Row>
		
	);
}

// Parent Homepage Component
class EmailAuth extends React.Component{  
	constructor(props)
	{
		super(props);

		this.state = {isOTPSent : false};

		this.ifSendOtpClicked = this.ifSendOtpClicked.bind(this);
		this.ifSubmitOtpClicked = this.ifSubmitOtpClicked.bind(this);
	}

	ifSendOtpClicked()
	{
        console.log("Inside Send OTP");
        
        if(email===""){
            console.log("Email is empty")
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
            this.setState({isOTPSent : true});
        }
		
	}

	ifSubmitOtpClicked()
	{
        if(inputOTP===""){
            console.log("Please enter valid otp");
        }else if(inputOTP===otp){
            console.log("Login Successfull");
            this.setState({isOTPSent : false});
        }else{
            console.log("Please enter correct OTP");   
        }
		
	}

	render(){

		return(

			<div>

				<Message isOTPSent = {this.state.isOTPSent}/>
				
				{
					(this.state.isOTPSent)?(
					<SubmitOTP clickFunc = {this.ifSubmitOtpClicked} />
					) : (
					<SendOTP clickFunc = {this.ifSendOtpClicked} />
					)
				}

			</div>
				
			);
	}
}

export default EmailAuth;
