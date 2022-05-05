import React from "react";
import Header from "../Header";
import { Button, Container, Form, FormGroup, Input, Label,Row,Col } from "reactstrap";
import { useNavigate } from "react-router-dom";

const VerifyOTP=()=>{   
    const navigate = useNavigate();
const login=()=>{
    navigate('/login');
}
    return(
        <div>
            <Header/>
            
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
                            />
                        </FormGroup>
                        </Form>
                    </Col>
                </Row>
                <Row>
                <Col md={4}></Col>
                    <Col md={4}>
                    <Button onClick={login}>
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

// login page -> login pass, new user signup btn
// signup btn onclick -> email verification -> verify otp/ resend otp
// signup page -> full name, address, pincode, phone no -> home page
}

export default VerifyOTP;