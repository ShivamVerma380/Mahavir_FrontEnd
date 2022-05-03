import React from "react";

import Header from "./Header";
import { Button, Container, Form, FormGroup, Input, Label,Row,Col } from "reactstrap";
import { useNavigate } from "react-router-dom";
function SignUp(){

    const navigate = useNavigate(); 
const homepage=()=>{
    navigate('/')
}
    return(
        <div>
            <Header></Header>
           <Form>
            <Row>
                <Col md={4}></Col>
                <Col md={6}>
                <FormGroup>
                    <Label for="Email">
                    Email
                    </Label>
                    <Input
                    id="Email"
                    name="email"
                    placeholder="Enter email"
                    type="email"
                    />
                </FormGroup>
                </Col>
                <Col md={4}></Col>
                <Col md={6}>
                <FormGroup>
                    <Label for="password">
                    Password
                    </Label>
                    <Input
                    id="password"
                    name="password"
                    placeholder="Enter password"
                    type="password"
                    />
                </FormGroup>
                </Col>
            </Row>
            <Row>
                
                <Col md={4}></Col>
                <Col md={6}>
                <FormGroup>
                    <Label for="phone">Phone Number</Label>
                    <Input id = "phoneNumber" placeholder="phone" type="number"></Input>
                </FormGroup>
                </Col>
            </Row>
            <Row>
            <Col md={4}></Col>
            <Col md = {8}>
            <FormGroup>
                <Label for="address">
                Address
                </Label>
                <Input
                id="address"
                name="address"
                placeholder="1234 Main St"
                />
            </FormGroup>
            </Col>
            

            </Row>
            
            <Row>
            <Col md={4}></Col>
                <Col md={3}>
                <FormGroup>
                    <Label for="city">
                    City
                    </Label>
                    <Input
                    id="city"
                    name="city"
                    />
                </FormGroup>
                </Col>
                <Col md={3}>
                <FormGroup>
                    <Label for="state">
                    State
                    </Label>
                    <Input
                    id="state"
                    name="state"
                    />
                </FormGroup>
                </Col>
                <Col md={2}>
                <FormGroup>
                    <Label for="Pincode">
                    Zip
                    </Label>
                    <Input
                    id="Pincode"
                    name="pincode"
                    />
                </FormGroup>
                </Col>
            </Row>
            
            <Row>
            <Col md={7}></Col>
            <Col md = {4}>
                <Button onClick={homepage}>
                    Sign in
                </Button>
            </Col>
            </Row>
            
            </Form> 
        </div>
    );
}

export default SignUp;