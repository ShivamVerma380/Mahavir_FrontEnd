import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FiTruck } from "react-icons/fi";
import { MdOutlineAssignmentReturn } from "react-icons/md"
const HomeBottom=()=>{
    return (
        <center>
        <Container style={{backgroundColor:"white",paddingTop:40,paddingBottom:40}}>
            <Row>
                <Col md={4}>
                <h4 style={{fontSize:"17px",fontFamily:"typeface-Roboto"}}><RiCustomerService2Fill size={34} color={"#ED1C24"}/> Help & Support</h4>
                </Col>
                <Col md={4}>
                    <h4 style={{fontSize:"17px",fontFamily:"typeface-Roboto"}}><MdOutlineAssignmentReturn size={34} color={"#ED1C24"}/> Return Policy</h4>
                </Col>
                <Col md={4}>
                    <h4 style={{fontSize:"17px",fontFamily:"typeface-Roboto"}}><FiTruck size={34} color={"#ED1C24"}/> Fast Delivery</h4>
                </Col>
            </Row>
        </Container>
        </center>
    )
}
export default HomeBottom;