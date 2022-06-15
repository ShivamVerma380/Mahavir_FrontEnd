import React from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import { Input } from "reactstrap";
import  { useState } from 'react';

const UserComplaint = () => {
    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsFilePicked(true);
      };

    return (
        <Container style={{ marginTop: 50 }}>

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



            <Row style={{ marginTop: 20 }}>
                <h5>Complaint Title</h5>
                <Input type="text" placeholder="Review Title" style={{ width: 600, height: 30 }}></Input>
            </Row>
            <Row style={{marginTop: 20}}>
                <h5>Date</h5>
                <Input type="date" style={{ width: 150 }}></Input>
            </Row>
            <Row style={{ marginTop: 20 }}>
                <h5>Complaint Description</h5>
                <Input placeholder="Description of product here....." type="textarea" style={{ width: 600, height: 100 }}></Input>
            </Row>

            <Row style={{ marginTop: 20 }}>
                <Col md={3}>
                <h5>Upload Warranty Card</h5>
                </Col>
                <Col md={3}>
                    <Input type="file" onChange={changeHandler}></Input>
                </Col> 
                
            </Row>

            <Row style={{ marginTop: 20 }}>
                <Col md={3}>
                <h5>Upload Other Proofs</h5>
                </Col>
                <Col md={3}>
                    <Input type="file" onChange={changeHandler}></Input>
                </Col> 
                
            </Row>

            <Button style={{ marginTop: 20 }}>SUBMIT</Button>


        </Container>
    )
}
export default UserComplaint;