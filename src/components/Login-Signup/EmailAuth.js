import { Component,useState ,useEffect} from "react";

import { Button, Container, Form, FormGroup, Input, Label,Row,Col, Toast, ToastHeader, ToastBody } from "reactstrap";
import Header from "../Header";

import React from 'react';
import { ToastContainer, toast,position } from 'react-toastify';
import ReactDOM from 'react-dom';
import { useNavigate } from "react-router-dom";


var email = "";
var inputOTP = "";
var otp = "";

var firstName = "";
var lastName = "";
var phoneNo = "";
var password = "";
var confirmPassword = "";



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
        <Button onClick = {props.clickFunc}>
            Send OTP
        </Button>
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
                <Button onClick = {props.clickFunc}>
			        Verify OTP
		        </Button>
            </Col>
            
        </Row>
		
	);
}

function Register(props){

    

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
    
    return(
            <div>
            <Header/>
            <Row>
                <Col md={4}>
                </Col>
                <Col md={4}>
                    <h4>Please Complete Registration</h4>
                    <br></br>
                    <Form>
                        <FormGroup>
                            <Label id="label-first-name" for="label-first-name">Enter your First Name</Label>
                            <br></br>
                            <Input id="first-name" name="first-name" placeholder="Omkar" type="name" onChange={inputFirstNameEvent}/>
                            <br></br>
                            <Label id="label-last-name" for="label-last-name">Enter your Last Name</Label>
                            <br></br>
                            <Input id="last-name" name="last-name" placeholder="Khare" type="name" onChange={inputLastNameEvent}/>
                            <br></br>
                            <Label id="label-phoneNo" for="label-phoneNo">Enter your Phone Number</Label>
                            <br></br>
                            <Input id="phoneNo" name="phoneNo" placeholder="92833824932" type="number" onChange={inputPhoneNumberEvent}/>
                            <br></br>
                            <Label id="label-password" for="label-password">Enter your Password</Label>
                            <br></br>
                            <Input id="password" name="password" placeholder="********" type="password" onChange={inputPasswordEvent}/>
                            <br></br>
                            <Label id="label-confirm-password" for="label-confirm-password">Confirm Password</Label>
                            <br></br>
                            <Input id="confirm-password" name="confirm-password" placeholder="******" type="password" onChange={inputConfirmPasswordEvent}/>
                        </FormGroup>
                    </Form>
                    <br></br>
                    <Button onClick={props.clickFunc}>Register</Button> 
                </Col>       
            </Row>
            </div>
    );
    
}

// Parent Homepage Component
class EmailAuth extends React.Component{  
	constructor(props)
	{
		super(props);

		this.state = {isOTPSent : false, isEmailVerified:false};

		this.ifSendOtpClicked = this.ifSendOtpClicked.bind(this);
		this.ifSubmitOtpClicked = this.ifSubmitOtpClicked.bind(this);
        this.ifRegisterBtnClicked = this.ifRegisterBtnClicked.bind(this);
	}

	ifSendOtpClicked()
	{
        
        const notify=()=>{
            toast.error("Email is empty",{position:"top-right"})
        }

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
            this.setState({isEmailVerified:true});
        }else{
            console.log("Please enter correct OTP");   
        }
		
	}

    ifRegisterBtnClicked(){

        

        console.log("Inside register btn");
        if(password!==confirmPassword){
            console.log("Passwords do not match!!");
            return;
        }
        if(firstName==="" || lastName==="" || phoneNo==="" || password==="" || confirmPassword===""){
            console.log("Please enter all fields");
            return;
        }
        if(password.length<6 || confirmPassword.length<6){
            console.log("Password length must be atleast 6 characters");
            return;
        }
        //Can add special characters validation in password
        console.log("Email:",email);
        console.log("First Name",firstName);
        console.log("LastName:",lastName);
        console.log("Phone Number:",phoneNo);
        console.log("Password:",password);

        var form_data_body={
            first_name:firstName,
            last_name: lastName,
            PhoneNo: phoneNo,
            Email: email,
            Password: password
        }
        axios.post("http://localhost:8080/add-user", form_data_body, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }).then(function(response){
            console.log(response);
            if(response.status==200){
                console.log("token",response.data.token);
                localStorage.setItem("jwtToken",response.data.token);
                console.log("token",localStorage.getItem("jwtToken"));
                //redux();
            }else{
                console.log(response.data.message);
            }
            
        }).catch(function(error){
            console.log(error);
        })
    }
	render(){

        if(this.state.isEmailVerified){
            //toast.success("Email Verified Successfully")
            return(
                <Register clickFunc={this.ifRegisterBtnClicked}/>
            );
        }

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
