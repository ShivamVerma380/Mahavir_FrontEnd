import React from "react";
import { Col, Row } from "react-bootstrap";
import Header from "../Header";

const FAQ = () => {
    return (
        <div>
            
        <Header/>
        <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        <center>
            <h1 style={{marginTop:40, color:"rgb(255,98,98"}}><b><i>Frequently Asked Questions</i></b></h1>
        </center>
        <Row>
            <Col md={2}></Col>
            <Col md={8}>
            <p style={{marginTop:20, fontSize:20}}>1. What are the various mode of payment accepted here ?<br></br>
            You can make payment Via Cash, Master Card, Visa Card, Debit Cards, Cheques, Credit Card.</p>
            <br></br>
            
            <p style={{marginTop:20, fontSize:20}}>2. Which is the nearest landmark ?<br></br>
            You can easily locate the establishment as it is in close proximity to Near Sahyadri Hospital, Opposite Post Office</p>
            <br></br>

            <p style={{marginTop:20, fontSize:20}}>3. What are its hours of operation ?<br></br>
            The establishment is functional on<br></br>
            Monday:- Closed<br></br>
            Tuesday:- 10:30 Am - 9:00 Pm<br></br>
            Wednesday:- 10:30 Am - 9:00 Pm<br></br>
            Thursday:- 10:30 Am - 9:00 Pm<br></br>
            Friday:- 10:30 Am - 9:00 Pm<br></br>
            Saturday:- 10:30 Am - 9:00 Pm<br></br>
            Sunday:- 10:30 Am - 9:00 Pm</p>

            </Col>
            
        </Row>
        </div>
        
    )
}
export default FAQ;