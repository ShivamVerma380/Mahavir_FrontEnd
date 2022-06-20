import React, { useEffect, useState } from 'react';
import Header from "../Header";
import { Card, CardHeader, CardText, CardBody,Row,
  CardTitle, CardFooter, Button, Col,Container ,Table} from 'reactstrap';
  import {FormControl,Form} from 'react-bootstrap';
  import { QuantityPicker } from 'react-qty-picker';
import axios from 'axios';
import CartItem from './CartItem';

function Cart() {

    var token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzaGl2YW1AZ21haWwuY29tbW1zc2RzIiwiZXhwIjoxNjU0NjE4ODgwLCJpYXQiOjE2NTQ1MTg4ODB9.kDTGQbDIDVTXqtEkm_35VqXzpWwJ8wUxOw8Cd8Wrgi0"
    //var token = localStorage.getItem("jwtToken");
    const [cartDetails,setCartDetails] = useState();
    // var isCartDetailsSet = false;x
    const [isCartDetailsSet,setisCartDetailsSet] = React.useState(false);
    useEffect(()=>{
        if(!isCartDetailsSet){
            var isLoggedIn = localStorage.getItem("isLoggedIn");
            if(isLoggedIn==="true"){
                axios({
                    method:"get",
                    url: "http://localhost:8080/get-cart-details",
                    headers:{
                        "Authorization": "Bearer "+localStorage.getItem("jwtToken")
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
            }else{
                var modelNumbers = localStorage.getItem("CartItems").split(',');
                var urls=[];
                var urls=[];
                modelNumbers.map(modelNum=>{
                    urls.push(axios.get("http://localhost:8080/get-products/"+modelNum));
                })

                axios.all(urls).then(
                    axios.spread((...res)=>{
                        res.map(index=>{
                            cartDetails.push(index.data);
                        })

                        setisCartDetailsSet(true);

                    })
                )

            }
        }
        
    },[]);
    
    
    return (
        
        
      
        <div >   
           <Header/> 
           <div className="Cart">
           <Row>
  
            <Col sm={8}>
            {
                (isCartDetailsSet)?(
                    <Table>
                    <thead>
                        <tr>
                        <th> Order Summary ({cartDetails.length} items)</th>
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
                ):(
                    null
                )
            }
            

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