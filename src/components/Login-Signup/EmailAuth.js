import React from "react";
import { Component,useState } from "react";
import axios from "axios";
import { Button, Container, Form, FormGroup, Input, Label,Row,Col } from "reactstrap";
import Header from "../Header";
// Message Component   
function Message(props)   
{   
    if (props.isOTPSent)   
        return <h1>Please enter your otp!!!</h1>;   
    else  
        return <h1>Please enter your email!!!</h1>;   
}   
// Login Component   
function SendOTP(props)   
{   

    // var o = "";
    //var email = "";
    // const handleChange=()=>{
    //     setEmail(document.getElementById("email-input"));
    //     console.log("In Handle change");
    //     //email = document.getElementById("email-input");
    // }

   
    
    const inputEvent=(event)=>{
        //setEmail(event.target.value);

        this.setState({email:event.target.value});
    }

    return(   
        //    <button onClick = {props.clickInfo}> Login </button>
        <div>
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
                <Button onClick={props.clickInfo}>
                    Get OTP
                </Button >
                </Col>
            </Row>
            
        </div>   
       );   
}    
// Logout Component   
function VerifyOTP(props)   
{   
    const inputOTPEvent=(event)=>{
        this.setState({inputOTP:event.target.value});
    }

    return(   
        <div>
            <Row>
                <Col md={4}></Col>
                <Col md={4}>
                <Form>
                    <FormGroup>
                        <Label for="otp">
                        Enter OTP
                        </Label>
                        
                        <Input
                        id="otp"
                        name="otp"
                        placeholder="Enter OTP"
                        type="otp"
                        onChange={inputOTPEvent}
                        />
                    </FormGroup>
                    </Form>
                </Col>
            </Row>
            <Row>
            <Col md={4}></Col>
                <Col md={4}>
                <Button onClick={props.clickInfo}>
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
       );   
}   


class EmailAuth extends Component{

    constructor(props){
        super(props);
        this.OTPHandler = this.OTPHandler.bind(this);  
        this.OTPVerificationHandler = this.OTPVerificationHandler.bind(this);   
        this.state = {isOTPSent : false , otp : null,email:null, inputOTP:null};
    }
    OTPHandler()   
    {   
        //write code for axios
        const axios = require("axios");

        console.log(this.state.email);
        if(this.state.email===""){
            console.log("Email is empty");
        }else{
            axios({
                method: "get",
                url: "http://localhost:8080/verify-email/"+this.state.email,
              })
                .then(function (response) {
                  //handle success 
                  console.log(response.data);
                //   o = response.data.otp;
                  //(response.data.otp);
                  this.setState({isOTPSent : true});
                  this.setState({otp:response.data.otp});
                })
                .catch(function (response) {
                  //handle error
                  console.log(response);

                });
        
            //return  <VerifyOTP otp={otp}/>;
        }

           
    }   
    OTPVerificationHandler()   
    {   
        var otp = this.state.otp;
        var inputOTP = this.state.inputOTP;
        if(inputOTP===otp){
            console.log("Logged In");
        }else{
            console.log("Input OTP:",inputOTP);
            console.log("OTP:",otp);
        }
    }   
    render() {
        return(   
            <div>   
        <h1> Conditional Rendering Example </h1>  
                <Message isOTPSent = {this.state.isOTPSent}/>               
                {   
                    (this.state.isOTPSent)?(   
                    <VerifyOTP clickInfo = {this.OTPVerificationHandler} />   
                    ) : (   
                    <SendOTP clickInfo = {this.OTPHandler} />   
                    )   
                }   
            </div>         
            );   
    }
}

export default EmailAuth;