import { keys } from "@mui/system";
import React from "react";
import { Row,Col } from "react-bootstrap";
import "./ProductDetails.css"

function RowComponent({title,keys,value}){

    return(
        <Row>
            <Col md={1}>
            </Col>
            <Col md={2}>
                <h5>{title}</h5>
                
            </Col>
            <Col md={2}>
                {
                    keys.map((v,index)=>{
                        return(
                            
                            <p>{v}:{value[index]}</p>
                        );
                    })
                }
                
            </Col>
            <Col md={2}>
                {
                    keys.map((v,index)=>{
                        return(
                            <p>{v}:{value[index]}</p>
                        );
                    })
                }
            </Col>
            <Col md={2}>
                    {
                    keys.map((v,index)=>{
                        return(
                            <p>{v}:{value[index]}</p>
                        );
                    })
                }
            </Col>
            <Col md={2}>
                {
                    keys.map((v,index)=>{
                        return(
                            <p>{v}:{value[index]}</p>
                        );
                    })
                }
            </Col>
            
        </Row>
    );
}

export default RowComponent;