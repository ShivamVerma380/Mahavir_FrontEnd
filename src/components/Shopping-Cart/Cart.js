import React, { useEffect, useState } from 'react';
import Header from "../Header";
import { Card, CardHeader, CardText, CardBody,Row,
  CardTitle, CardFooter, Button, Col,Container ,Table} from 'reactstrap';
  import {FormControl,Form} from 'react-bootstrap';
  import { QuantityPicker } from 'react-qty-picker';
import axios from 'axios';
import CartItem from './CartItem';

function Cart() {

    var token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhQGIuY2NjY2NjY2NqaGRoZCxzaGl2YW1AdmVybWEuY29tIiwiZXhwIjoxNjU0MDA1OTkwLCJpYXQiOjE2NTM5MTk1OTB9.zbu5U0nrqPNSilthy3IrmwqYi0n4FoEyKIi6S_yn0sc"
    
    const [cartDetails,setCartDetails] = useState();
    useEffect(()=>{
        axios({
            method:"get",
            url: "http://localhost:8080/get-cart-details",
            headers:{
                "Authorization": "Bearer "+token
            }
        }).then(function(response){
            console.log("Response",response);
            if(response.status==200){
                console.log("Data",response.data);
                setCartDetails(response.data);
                console.log("Cart Details",cartDetails)
                
            }else{
                console.log(response.data.message);
            }
        }).catch(function(error){
            console.log(error);
        })
        
    },[cartDetails]);
    
    
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
        {/* <CartItem/> */}
            

            {/* <CartItem/> */}
            {
                console.log("cartDetails",cartDetails)
            }
            {
                cartDetails.map(index=>{
                    console.log("Model Number:",index.modelNumber)
                    return(
                    <CartItem item={index}/>
                    );
                })
            }
            

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