import React from "react";
import { Row,Col,Container } from "react-bootstrap";

function ComparisonVariants({product}){

    var keyCol=[];
    var str;
    function getProductVariants(variants){
        keyCol=[];
        str="";
        for(var k in variants){
            keyCol.push(k);
        }
    }

    

    return(
        <Row style={{marginTop:20}}>
            <Col md={1}></Col>
            <Col md={2}>
                <h5 style={{marginTop:10}}>Variants</h5>
            </Col>
            {
                product.map(index=>{
                    return(
                        <Col md={2}>
                            {
                                getProductVariants(index.variants)
                            }

                            {
                                
                                
                                keyCol.map(key=>{
                                    {
                                        str=""
                                    }
                                    return(
                                        <Row>
                                        <p style={{marginTop:10}}><b>{key}({index.variants[key].length})</b></p>
                                        {   

                                            index.variants[key].map(value=>{
                                                str+=" "+value+","
                                                
                                            }) 
                                        }
                                        {
                                            str= str.substr(0,str.length-1)
                                        }    
                                        
                                        
                                        
                                        </Row>
                                    );
                                    <p>{str}</p>
                                    
                                })

                                
                            }
                            
                            
                            
                        </Col>
                    );
                })
            }
        </Row>
    );
}

export default ComparisonVariants;