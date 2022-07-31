import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FiTruck } from "react-icons/fi";
import { MdOutlineAssignmentReturn } from "react-icons/md"
const HomeBottom=()=>{
    return (
        <Container style={{backgroundColor:"white",paddingTop:40,paddingBottom:40}}>
            <Row>
                <Col md={4}>
                <h4><RiCustomerService2Fill size={38} color={"#ED1C24"}/> Help & Support</h4>
                </Col>
                <Col md={4}>
                    <h4><MdOutlineAssignmentReturn size={38} color={"#ED1C24"}/> Return Policy</h4>
                </Col>
                <Col md={4}>
                    <h4><FiTruck size={38} color={"#ED1C24"}/> Fast Delivery</h4>
                </Col>
            </Row>
        </Container>
    )
}
export default HomeBottom;