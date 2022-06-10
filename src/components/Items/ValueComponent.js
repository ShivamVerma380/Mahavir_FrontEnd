import React from "react";
import { Col } from "react-bootstrap";

function ValueComponent({value}){
    return(
        <Col md={2}>
            <p>{value}</p>
        </Col>
    );
}

export default ValueComponent;