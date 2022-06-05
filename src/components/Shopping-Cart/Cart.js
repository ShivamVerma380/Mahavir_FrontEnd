import React, { useEffect, useState } from 'react';
import Header from "../Header";
import { Card, CardHeader, CardText, CardBody,Row,
  CardTitle, CardFooter, Button, Col,Container ,Table} from 'reactstrap';
  import {FormControl,Form} from 'react-bootstrap';
  import { QuantityPicker } from 'react-qty-picker';
import axios from 'axios';
import CartItem from './CartItem';

function Cart() {

    // var token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhQGIuY2NjY2NjY2NqaGRoZGIiLCJleHAiOjE2NTQ0NDU2MzQsImlhdCI6MTY1NDM1OTIzNH0.fgpAQXcaaNruyanPxU2Xrkfe1AnsrUjf25boDfZhm8Q"
    var token = localStorage.getItem("jwtToken");
    const [cartDetails,setCartDetails] = useState();
    // var isCartDetailsSet = false;
    const [isCartDetailsSet,setisCartDetailsSet] = React.useState(false);
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
                setisCartDetailsSet(true);
                
            }else{
                console.log(response.data.message);
            }
        }).catch(function(error){
            console.log(error);
        })
        
    },[]);
    
    
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
                (isCartDetailsSet)?(
                cartDetails.map(index=>{
                    console.log("Model Number:",index.modelNumber)
                    return(
                    <CartItem item={index}/>
                    );
                })
                ):(null)
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