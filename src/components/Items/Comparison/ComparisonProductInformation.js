import React from "react";

import { Row,Col, Container } from "react-bootstrap";
function ComparisonProductInformation({title,product}){

    console.log(product[0].productInformation[title]);
    
    var key =[];
    var values = [];
    function fetchArray(productInformationFeature){
        key=[];
        values=[];
        for(var k in productInformationFeature){
            key.push(k);
            values.push(productInformationFeature[k]);
        }
        
    }
    return(
        <Row>
        <Row>
            <Col md={1}></Col>
            <Col md={10}>
                <hr></hr>
            </Col>
        </Row>
        <Row>
            <Col md={1}></Col>
            
            <Col md={2}>
                <h5>{title.substring(0,title.length-1)}</h5>
            </Col>
            {
                product.map(index=>{
                    {
                        fetchArray(index.productInformation[title])
                    }
                    return(
                        <Col md={2}>
                            {
                                key.map((k,pos)=>{
                                    return(
                                        <p>{k}:{values[pos]}</p>
                                    );
                                })
                            }                                
                        </Col>
                    );
                })   
            }
           
        </Row>
        </Row>
    );
}

export default ComparisonProductInformation;