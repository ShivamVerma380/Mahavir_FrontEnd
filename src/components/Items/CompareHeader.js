import { MenuItem } from "material-ui";
import React from "react";
import { Row, Col, NavDropdown, Form, Button, Container, NavItem } from "react-bootstrap";
import { useNavigate } from "react-router-dom";






function CompareHeader({ isModelNumPresent, name, image, price }) {


    const navigate = useNavigate();

    const CompareImgHandler = () => {
        navigate("/productDetails")
    }
    return (
        (isModelNumPresent === "true") ? (

            <Col md={2}>
                <img style={{ width: "10rem", alignContent: "center" }} onClick={CompareImgHandler} src={'data:image/jpg;base64,' + image}></img>
                <br></br>
                <h6 style={{ marginTop: "20px" }} onClick={CompareImgHandler}>{name}</h6>
                <br></br>
                <h6 style={{}}>{price}</h6>
            </Col>

        ) : (
            <Col md={2}>
                <img style={{ width: "10rem", alignContent: "center", visibility: "hidden" }}></img>
                <br></br>
                <h6 style={{ marginTop: "20px" }} >Add a Product</h6>
                <br></br>
                <NavDropdown title="Choose Brand" id="">
                    <NavItem>Iphone 12</NavItem>
                   
                </NavDropdown>
                
                <NavDropdown title="Choose Product"></NavDropdown>
            </Col>
        )
    );
}

export default CompareHeader;