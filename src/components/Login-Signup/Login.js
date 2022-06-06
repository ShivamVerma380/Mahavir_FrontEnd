import React from "react";
import Header from "../Header";
import { Button, Container, Form, FormGroup, Input, Label,Row,Col } from "reactstrap";
import { useNavigate } from "react-router-dom";

import "./SignIn.css"



const axios = require('axios');


var email = "";
var password = "";
var isUserLoggedIn = false;
localStorage.setItem("isUserLoggedIn",isUserLoggedIn);

function Login(){  
    const navigate = useNavigate();
    let token = localStorage.getItem("jwtToken");
    console.log("token",token); 
 
    const inputEmailEvent=(event)=>{
        email = event.target.value;
        console.log("email",email);
    }
    const inputPasswordEvent=(event)=>{
        password = event.target.value;
        console.log("Password",password);
    }

    

    const homepage=()=>{
    let token = localStorage.getItem("jwtToken");

    console.log("token",token);
    if(email===""){
        console.log("Email is empty");
        alert("enter email")
        return;
    }
    if(password===""){
        console.log("Password is empty");
        alert("enter password")
        return;
    }

    var form_data_body={
        Email: email,
        Password: password
    }
    var authorization = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzaGl2YW1AZ21haWwuY29tbW1zc2RzIiwiZXhwIjoxNjU0NjE4ODgwLCJpYXQiOjE2NTQ1MTg4ODB9.kDTGQbDIDVTXqtEkm_35VqXzpWwJ8wUxOw8Cd8Wrgi0";
    console.log(authorization);

    axios.post("http://localhost:8080/login-user",form_data_body,{
        headers:{
            "Content-Type": "multipart/form-data",
            "Authorization": authorization
        },
    }).then(function(response){
        console.log(response);
        if(response.status==200){
            console.log(response.data.message);
            navigate("/");
        }
        console.log(response.data.message);
    }).catch(function(error){
        console.log(error);
    })
    isUserLoggedIn=true;
    alert("login successful")

    
    }

    

   
    return(
        <div>
        <Header />
        <br></br>
        <br></br>
        <div className="form-parent">
            
                <Row>
                    <Col md={4}></Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label
                            for="email"
                            >
                            Email
                            </Label>
                            <Input
                            id="email"
                            name="email"
                            placeholder="Enter Email"
                            type="email"
                            onChange={inputEmailEvent}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row >
                    <Col md={4}></Col>
                    <Col md={4}>
                    <FormGroup >
                        <Label
                        for="password"
                        >
                        Password
                        </Label>
                        <br></br>
                        <Input
                        id="password"
                        name="password"
                        placeholder="Enter Password"
                        type="password"
                        onChange={inputPasswordEvent}
                        />
                    </FormGroup>
                    </Col>
                </Row>
            <Row>
                <Col md={4}></Col>
                <Col md={4}>
                <Button onClick={homepage}>
                    Login
                </Button >
                </Col>
            </Row>
            <Row>
            <br></br>
            <Col md={4}></Col>
                <Col md={4}>
                    <a href="/email-auth">New User?   Signup</a>
                
                </Col>
            </Row>
            
        </div>
        </div>
    );

// login page -> login pass, new user signup btn
// signup btn onclick -> email verification -> verify otp/ resend otp
// signup page -> full name, address, pincode, phone no -> home page
}

export default Login;