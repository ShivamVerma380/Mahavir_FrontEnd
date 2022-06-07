import { Component,useState ,useEffect} from "react";
import { Button, Container, Form, FormGroup, Row,Col } from "react-bootstrap";
import {Input,Label} from 'reactstrap';

import Header from "../Header";

import React from 'react';
import { ToastContainer, toast,position } from 'react-toastify';
import ReactDOM from 'react-dom';
import {  useNavigate } from "react-router-dom";
import "./SignIn.css"

var email = "";
var inputOTP = "";
var otp = "";

var firstName = "";
var lastName = "";
var phoneNo = "";
var password = "";
var confirmPassword = "";

var isUserRegistered = false;



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
                
                        <Form className="OTPform">
                        <Form.Group className="mb-3" >
                            <Form.Label htmlFor="otp">Enter OTP</Form.Label>
                            <Form.Control id="otp" name="otp" placeholder="Enter OTP" type="otp" onChange={inputOtpEvent} />
                            
                        </Form.Group>
                        <Button type="submit" variant="flat" size="1" onClick = {props.clickFunc}>
                            Verify OTP
                        </Button>
                        </Form>
                    
                
            </div>
            

        );
    }
	else{
        return(
            <div>
                <Header/> 
             
                        <Form className="OTPform">
                        <Form.Group className="mb-3" >
                            <Form.Label id="email-input" htmlFor="email">Enter Email</Form.Label>
                            <Form.Control id="email" name="email" placeholder="Enter email" type="email" onChange={inputEmailEvent} />
                            
                        </Form.Group>
                        <Button type="submit" variant="flat" size="1" onClick = {props.clickFunc}>
            Send OTP
        </Button>
                        </Form>
                        
                    
                

            </div>
        );
    }
}

// Login Component
function SendOTP(props)
{
    
return(
    
    <Form className="OTPform">
                        <Form.Group className="mb-3" >
                        <Button type="submit" variant="flat" size="1" onClick = {props.clickFunc}>
            Send OTP
        </Button>
        </Form.Group>
        </Form>
    
 
	);
}

// Logout Component
function SubmitOTP(props)
{

	return(
        <Form className="OTPform">
        <Form.Group className="mb-3" >
        <Button type="submit" variant="flat" size="1" onClick = {props.clickFunc}>
                            Verify OTP
                        </Button>
                </Form.Group>
        </Form>
    
            
            
       
		
	);
}

function Register(props){
    const navigate = useNavigate();
    if(isUserRegistered){
        console.log("In is registered");
        <ToastContainer/>
        navigate("/");

    }else{
    

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
    
}

// Parent Homepage Component
class EmailAuth extends React.Component{  
	constructor(props)
	{
		super(props);

		this.state = {isOTPSent : false, isEmailVerified:false, isRegistered:false};

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
            this.setState({isOTPSent : true});
        }
		
	}

	ifSubmitOtpClicked()
	{
        if(inputOTP===""){
            console.log("Please enter valid otp");
            alert("Please enter OTP");
        }else if(inputOTP===otp){
            console.log("Login Successfull");
            this.setState({isOTPSent : false});
            this.setState({isEmailVerified:true});
        }else{
            console.log("Please enter correct OTP");
            alert("False OTP, please enter correct OTP")   
        }
		
	}

    ifRegisterBtnClicked(){
        
        

        console.log("Inside register btn");
        if(password!==confirmPassword){
            console.log("Passwords do not match!!");
            alert("incorrect password")
            return;
        }
        if(firstName==="" || lastName==="" || phoneNo==="" || password==="" || confirmPassword===""){
            console.log("Please enter all fields");
            alert("fill in all details")
            return;
        }
        if(password.length<6 || confirmPassword.length<6){
            console.log("Password length must be atleast 6 characters");
            alert("password must be atleast 6 characters long")
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
                localStorage.setItem("Name",firstName+lastName);
                console.log("token",localStorage.getItem("jwtToken"));

                // localStorage.setItem("isLoggedIn",true);
                //navigate("/")
                
                //redux();
            }else{
                console.log(response.data.message);
                return;
            }   
            
        }).catch(function(error){
            console.log(error);
            return;
        })
        isUserRegistered = true;
        this.setState({isRegistered:true});
        console.log(this.state.isRegistered);
        
        {
            return(
                toast.success("User Registered Successfully")
            );
        }
        
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
