import React from 'react';
import Header from "../Header";
import { Card, CardHeader, CardText, CardBody,Row,
  CardTitle, CardFooter, Button, Col,Container ,Table} from 'reactstrap';
  import {FormControl,Form} from 'react-bootstrap';
  import { QuantityPicker } from 'react-qty-picker';

function Cart() {
    
    return (
        
        
      
        <div >   
           <Header/> 
           <div className="Cart">
           <Row>
  
            <Col sm={8}>

            <Table>
            <thead>
                <tr>
                <th> Order Summary (1 Item)</th>
                <th><Form className="d-flex">
                            <FormControl
                            type="search"
                            placeholder="Pincode Search"
                        
                            aria-label="Search"
                            />
                            
                        </Form></th>
                </tr>
            </thead>

            </Table>
            <Table>
            <tbody>
                <tr>
                <td><img  style={{height:"150px", width:"300px"}} src = {require ('../../assets/logo.jpg')}/>
                </td>
                
                <td><QuantityPicker smooth/></td>
                <td><table>
                    <tr>
                        <td>FREE DELIVERY</td>
                        </tr>
                        <tr>
                        <td>Delivery in 1-3 Days</td>
                        </tr>
                        <tr>
                        <td>( T&C apply)</td>
                        </tr>
                    </table>
                </td>
                </tr>
                <tr>
                <td><table>
                    <tr>
                        <td>LG 1 Ton 5 Star Split Inverter Air Conditioner</td>
                        </tr>
                        <tr>
                        <td>(PSQ13ENZE)</td>
                        </tr>
                        <tr>
                        <td>₹ 37,480 ₹ 61,990 40% off</td>
                        </tr>
                    </table>
                </td>
                <td></td>
                <td><Button style={{height:"100%", width:"200px"}} variant="info">Proceed to Buy</Button></td>
                </tr>
                </tbody>
            </Table>
            

                </Col>
            <Col sm={4}>
            <Table style={{margin_top:"50px", color:'black'}} >
            <thead>
                <tr>
                <th> Price Details</th>
                <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>Price (1 Item)</td>
                <td>₹ 37,480</td>
                
                </tr>
                <tr>
                <td>Delivery Charges</td>
                <td>Free</td>
                </tr>
                <tr>
                <td> Total Amount</td>
                <td>₹ 37,480</td>
                </tr>
                
                
            </tbody>
            </Table>
            </Col>
            </Row>
           </div>
  
  

    </div>    



    );
  }
  export default Cart;