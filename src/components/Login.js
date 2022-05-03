import React from "react";
import Header from "./Header";
import { Button, Container, Form, FormGroup, Input, Label,Row,Col } from "reactstrap";
import { useNavigate } from "react-router-dom";
function Login(){  
    const navigate = useNavigate(); 
const homepage=()=>{
    navigate('/')
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
                            <Input
                            id="email"
                            name="email"
                            placeholder="Enter Email"
                            type="email"
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
            <Col md={4}></Col>
                <Col md={4}>
                    New User?
                    <a href="/sign-up">SignUp</a>
                </Col>
            </Row>
            
        </div>
    );

// login page -> login pass, new user signup btn
// signup btn onclick -> email verification -> verify otp/ resend otp
// signup page -> full name, address, pincode, phone no -> home page
}

export default Login;