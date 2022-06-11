import React from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import { Input } from "reactstrap";

const UserComplaint = () => {
    return ( 
        <Container style={{ marginTop:50}}>
            
        <h1>Submit your Complaint here</h1>
        <hr></hr>
        <Row>
            <Col md={1}>
                <img src="https://d2xamzlzrdbdbn.cloudfront.net/products/2eb1eeb0-470e-48a0-9bcf-7d6f610a449521170554.jpg" style={{ width: 100, height: 100 }}></img>
            </Col>
            <Col md={4}>
                <h6>Apple iPhone 13 Pro Max (256 GB Storage, Gold)</h6>
            </Col>

        </Row>
       
        
        
        <Row style={{marginTop:20}}>
            <h5>Title</h5>
            <Input type="text" placeholder="Review Title" style={{width:600, height:30}}></Input>
        </Row>
        <Row style={{marginTop:20}}>
            <h5>Description</h5>
            <Input placeholder="Description of product here....." type="textarea" style={{width:600, height:100}}></Input>
        </Row>
        
        <Button style={{marginTop:20}}>SUBMIT</Button>

        
    </Container>
    )
} 
export default UserComplaint;