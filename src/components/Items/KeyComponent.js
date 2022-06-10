import React from "react";
import { Col } from "react-bootstrap";

function KeyComponent({keysStr}){
    return(
            <Col md={2}>
                <h5>{keysStr}</h5>
            </Col>
    );
}

export default KeyComponent;