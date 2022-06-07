import React from "react";
import Header from "../Header";
import { Button, Container, Form, FormGroup, Row,Col } from "react-bootstrap";
import {Input,Label} from 'reactstrap';
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
        <div className="Login">
        <Header />
         <Form className="Loginform">
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={inputEmailEvent} />
            
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onChange={inputPasswordEvent} type="password" placeholder="Password" />
        </Form.Group>
        
        <Button onClick={homepage} variant="flat" size="1" type="submit">
            Login
        </Button> <br></br>
        <a href="/email-auth">New User?   Signup</a>
        </Form>
       
        
        </div>
    );

// login page -> login pass, new user signup btn
// signup btn onclick -> email verification -> verify otp/ resend otp
// signup page -> full name, address, pincode, phone no -> home page
}

export default Login;