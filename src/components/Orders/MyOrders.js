import axios from "axios";
import React, { useEffect, useState }  from "react";
import {Row,Col,Form,Button} from 'react-bootstrap';
// import { Header } from "semantic-ui-react";
import Header from "../Header";
import OrderItem from "./OrderItem";

const MyOrders=()=>{
    //var token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhMkJWY2RAZmRlZmVkcyIsImV4cCI6MTY1NDQ0MzIwNSwiaWF0IjoxNjU0MzU2ODA1fQ.-6GCm7hIQrDj3U08zwPGe5rqEpDyVYAQrH69PHlcC14"
    //var token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhQGIuY2NjY2NjY2NqaGRoZCxzaGl2YW1AdmVybWEuY29tand3ZCIsImV4cCI6MTY1NDAxOTA1NywiaWF0IjoxNjUzOTMyNjU3fQ.Ma7RU2CHo-RfQ_uSBHn4zxKzlyz5X0I9ZClMXIaY0oc";
    var token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzaHJhZGRoYW11bGF5MUBnbWFpbC5jb20iLCJleHAiOjE2NTU5MjIxMTQsImlhdCI6MTY1NTgyMjExNH0.JE9_yHbEsElzquT7m8wMkpSXr61Wnpw1jg9vB6-QuzY";
    const [orderDetails,setOrderDetails] = useState();
    const [isOrderDetailsSet,setIsOrderDetailsSet] = useState(false);
    var MyOrders = false;
    
    useEffect(()=>{
        axios({
            method:"get",
            url: "http://localhost:8080/get-bought-products",
            headers:{
                "Authorization":"Bearer "+"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzaHJhZGRoYW11bGF5MUBnbWFpbC5jb20iLCJleHAiOjE2NTU5MjIxMTQsImlhdCI6MTY1NTgyMjExNH0.JE9_yHbEsElzquT7m8wMkpSXr61Wnpw1jg9vB6-QuzY",
                "Accept":"*/*",
                
            },
            mode:"no-cors"

           
            
        }).then(function(response){
            console.log(response);
            if(response.status==200){
                MyOrders=true
                console.log(response.data);
                setOrderDetails(response.data);
                setIsOrderDetailsSet(true);
            }else if(response.status==404){
                console.log("fail: ",MyOrders)
               MyOrders = false;
            }   
            else{
                // setMyOrders("No Products buyed yet");
                console.log(response.data.message);
            }
        }).catch(function(error){
            console.log(error);
        })
    },[]);

    return(
        // <div>
            
        //     {(MyOrders)?(<h1>No Products Buyed</h1>):(<h1>Products Buyed</h1>)}
            
        //     {
        //         (isOrderDetailsSet)?(

                    
                        
        //             orderDetails.map(index=>{
        //             console.log("Model Number:",index.modelNumber)
        //             return(    
        //                 <OrderItem item={index}/>
        //             );
        //         })
        //         ):(
        //             null
        //         )
        //     }
        // </div>
        <div>

            <Header/>
                    {
            (isOrderDetailsSet)?(
            (MyOrders)?(<h1 style={{color:"rgb(255,98,98",margin:'2%',padding:'2%'}}><i>No Products Bought</i></h1>):(<h1 style={{color:"rgb(255,98,98", marginLeft:'2%'}}><i>Products Bought</i></h1>)
            ):(
                <h1 style={{color:"rgb(255,98,98",margin:'2%',padding:'2%'}}><i>No Products Bought</i></h1>
            )}

            <Row style={{margin:'20px'}}>
                    <Col style={{    backgroundColor: '#fff',
                            borderRadius: '2px',
                            boxShadow: '0 2px 4px 0 rgb(0 0 0 / 8%)'}} sm={2}>
                        <h3 style={{margin: '10px'}}>Filter</h3>
                        <div className="orderfilter">
                            <div className="orderfiltertitle" >Order Status</div>
                            <Form className="orderfiltercheck">
                                <Form.Check type="checkbox"  value="On_the_Way"  label = "On the Way" />
                                
                                <Form.Check type="checkbox"  value="Delivered"  label = "Delivered" />
                                
                                <Form.Check type="checkbox"  value="Cancelled"  label = "Cancelled" />
                              
                                <Form.Check type="checkbox"  value="Returned"  label = "Returned" />
                            </Form>
                        </div>
                        <div className="orderfilter">
                            <div className="orderfiltertitle">Order Time</div>

                            <Form className="orderfiltercheck">
                                <Form.Check type="checkbox"  value="Last_30_days"  label = "Last 30 days" />
                                <Form.Check type="checkbox"  value="2022"  label = "2022" />
                                <Form.Check type="checkbox"  value="2021"  label = "2021" />
                                <Form.Check type="checkbox"  value="2020"  label = "2020" />
                                <Form.Check type="checkbox"  value="2019"  label = "2019" />
                                <Form.Check type="checkbox"  value="Older"  label = "Older" />
                            </Form>
                        </div>
                        
                    </Col>
                    
                    <Col  sm={10}>
                        <Row> 
                        <Form className="d-flex">
                        <Form.Control
                        style={{
                            height: '40px',
                            width: '100%',
                            border: '1px solid #dbdbdb',
                            padding:' 8px',
                            borderRadius: '4px 0 0 4px',
                            fontSize: '14px'
                                                }}
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        />
                        <Button variant="flat" size="1" style={{
                        
                        boxShadow: '0 2px 4px 0 rgb(0 0 0 / 20%)',
                        border: 'none',
                        width:'160px'
                        }}>
                            <svg width="16" height="16" viewBox="0 0 17 18" class="IgU6Js" xmlns="http://www.w3.org/2000/svg"><g fill="#fff" fill-rule="evenodd"><path class="" d="m11.618 9.897l4.225 4.212c.092.092.101.232.02.313l-1.465 1.46c-.081.081-.221.072-.314-.02l-4.216-4.203"></path><path class="" d="m6.486 10.901c-2.42 0-4.381-1.956-4.381-4.368 0-2.413 1.961-4.369 4.381-4.369 2.42 0 4.381 1.956 4.381 4.369 0 2.413-1.961 4.368-4.381 4.368m0-10.835c-3.582 0-6.486 2.895-6.486 6.467 0 3.572 2.904 6.467 6.486 6.467 3.582 0 6.486-2.895 6.486-6.467 0-3.572-2.904-6.467-6.486-6.467"></path></g></svg>
                            <span> </span>
                            Search</Button>
                    </Form>
                        </Row>
                   
            {
                (isOrderDetailsSet)?(


                        
                            orderDetails.map(index=>{
                            console.log("Model Number:",index.modelNumber)
                            return(    
                                <OrderItem item={index}/>
                            );
                        })
                   

                    
                        
                    
                ):(
                    null
                )
            }
                 </Col>
                    
                    </Row>   
            
        </div>
    );
}

export default MyOrders;