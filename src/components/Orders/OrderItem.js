import React from "react";
import { Card, CardHeader, CardText, CardBody,Row,
    CardTitle, CardFooter, Button, Col,Container ,Table} from 'react-bootstrap';
    import {FormControl,Form} from 'react-bootstrap';
    import { QuantityPicker } from 'react-qty-picker';

const OrderItem=({item})=>{
    return(

        <>
        
               
                        <Row className="ordersbox">
                            <Col md={2}>
                            <img  style={{height:"100%", width:"100%"}} src = {"data:image/png;base64,"+item.productImage.data}/>
                            </Col>
                            <Col md={4}>
                                <h5><br></br>Order ID: {item.orderId}<br></br><br></br>{item.modelNumber}
                                
                                </h5>
                            </Col>
                            <Col md={2}>
                                
                            <h5> <br></br>MSP: <b style={{marginRight:"20px",color:"rgb(255,98,98)"}}>₹{item.productPrice}</b> </h5> 
          
                            </Col>
                            <Col md={4}>
                            <h5><br></br>Ordered On: {item.buyDate}
                            <br></br><br></br>Delivery Date: {item.dateOfDelivery}</h5>
                            </Col>
                        </Row>
                  
                    
     
       
      
        </>
    );
}

export default OrderItem;