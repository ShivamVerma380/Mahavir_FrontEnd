import React, { useState } from "react";
import { Row,Col ,NavItem ,NavDropdown,Form} from "react-bootstrap";


function ComparisonHeader({product}){
    var length = product.length; 
    var arr=[];
    if(length===1){
        arr.push("God");
        arr.push("God");
        arr.push("God");
    }else if(length===2){
        arr.push("God");
        arr.push("God");
    }else if(length===3){
        arr.push("God");
    }
    
   
        
    const handleFormCheck=event=>{
        alert(event.target.value)
    }

    console.log("length",length);
    return(
            <Row style={{marginTop:15}}>
            <Col md={1}>  
            </Col>
            <Col md={2}>
                <h5>{product[0].productName} vs others</h5>
                <br></br>
                <Form>
                    <Form.Check type="checkbox"   label = "Show Only Differences" onChange={handleFormCheck}/>
                </Form>
            </Col>
            {
                product.map(index=>{
                    return(
                        <Col md={2}>
                            <img style={{ width: "10rem", alignContent: "center" }}  src={'data:image/jpg;base64,' + index.productImage1.data}></img>
                            <br></br>
                            <h6 style={{ marginTop: "20px" }}>{index.productName}</h6>
                            <h6 style={{}}>₹{index.productPrice}</h6>
                        </Col>
                    );
                })

            }
           
            
            {
                arr.map(index=>{
                    return(
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
                    );
                })
            }
        </Row>
    );
}

export default ComparisonHeader;