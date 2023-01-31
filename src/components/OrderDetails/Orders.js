import axios from "axios";
import React, { useEffect, useState }  from "react";
import {Row,Col,Form,Button,Image} from 'react-bootstrap';
import Header from "../Header";
import {setCookie,getCookie} from '../Cookies';
import url from "../../Uri";
import { useNavigate } from "react-router-dom";
import './orders.css';


const Orders=()=>{

    var date = new Date();

    const [orders,setOrders]=useState([]);
    const [isOrdersFetched,SetIsOrdersFetched] = useState(false);

    const [fitleredOrders,setFilteredOrders]=useState([]);

    const navigate = useNavigate();

    // console.log("orders "+productBoughtbyUser[0]);
    // console.log("orders type"+typeof productBoughtbyUser);

    
   

    useEffect(()=>{
        if(!isOrdersFetched){
            axios.get(url+"/my-orders",{
                headers:{
                    "Authorization":"Bearer "+getCookie("jwtToken")
                }
            }).then(function(response){
                if(response.status==200){
                    // console.log("Success",response.data);
                    setOrders([...response.data].reverse());
                    setFilteredOrders([...response.data].reverse());
                    SetIsOrdersFetched(true);
                }
            }).catch(function(error){
                console.log("Error in /my-orders");
            })
        }

    })

    function handleFormCheck(){
        var arr=[]
        if(document.getElementById("on-the-way").checked){
            orders.map(o=>{
                if(o.deliveryDate==null){
                    arr.push(o);
                }
            })

        }
        if(document.getElementById("delivered").checked){
            orders.map(o=>{
                if(o.deliveryDate!=null){
                    arr.push(o);
                }
            })
        }

        if(document.getElementById("on-the-way").checked==false && document.getElementById("delivered").checked==false){
            arr = orders
        }

        // console.log(date.getFullYear(),document.getElementById(date.getFullYear()).checked);
        // console.log(date.getFullYear()-1,document.getElementById(date.getFullYear()-1).checked);
        // console.log("Older",document.getElementById("Older").checked);

        var final_arr=[];

        if(document.getElementById(date.getFullYear()).checked){
            // console.log("orderDate",o.buyDate.substring(5));
            arr.map(o=>{
                if(o.buyDate.substring(5)==date.getFullYear()){
                    final_arr.push(o);
                }
            })
        }

        if(document.getElementById(date.getFullYear()-1).checked){
            // console.log("orderDate",o.buyDate.substring(5));
            arr.map(o=>{
                if(o.buyDate.substring(5)==(date.getFullYear()-1)){
                    final_arr.push(o);
                }
            })
        }

        if(document.getElementById("Older").checked){
            // console.log("orderDate",o.buyDate.substring(5));
            arr.map(o=>{
                if(o.buyDate.substring(5)<(date.getFullYear()-1)){
                    final_arr.push(o);
                }
            })
        }

        if(document.getElementById(date.getFullYear()).checked==false && document.getElementById(date.getFullYear()-1).checked==false && document.getElementById("Older").checked==false){
            final_arr = arr;
        }

        setFilteredOrders([]);
        setFilteredOrders([...final_arr]);
        // console.log("On The way",document.getElementById("on-the-way").checked)
        // console.log("Delivered",document.getElementById("delivered").checked)
    }

    function rateProduct(order){
        // console.log("Rate rating",order);
        localStorage.setItem("rateProduct",JSON.stringify(order));
        navigate("/ratereview")
    }

    function editRating(order){
        // console.log("Edit Rating",order);
    }

    function generateInvoice(order){
        // console.log("Generate Invoice",JSON.stringify(order));
        localStorage.setItem("Generate Invoice",JSON.stringify(order));
        navigate("/invoice")
    }

    return(
        <div>
            <Header/>
            <Row className="orders">
            <Col style={{    backgroundColor: '#fff',
                            borderRadius: '2px',
                            boxShadow: '0 2px 4px 0 rgb(0 0 0 / 8%)'}} sm={2}>
                        <h3 style={{margin: '10px'}}>Filter</h3>
                        <div className="orderfilter">
                            <div className="orderfiltertitle" >Order Status</div>
                            <Form className="orderfiltercheck">
                        <Form.Check type="checkbox" label="On The Way" id="on-the-way" onChange={handleFormCheck}/>
                        <Form.Check type="checkbox" label="Delivered" id="delivered" onChange={handleFormCheck}/>
                    </Form>
                    </div>
                        <div className="orderfilter">
                            <div className="orderfiltertitle">Order Time</div>

                            <Form className="orderfiltercheck">
                        <Form.Check type="checkbox" id={date.getFullYear()} label= {date.getFullYear()} onChange={handleFormCheck} />
                        <Form.Check type="checkbox" id={date.getFullYear()-1} label= {date.getFullYear()-1} onChange={handleFormCheck}/>
                        <Form.Check type="checkbox" id="Older" label= "Older" onChange={handleFormCheck}/>
                    </Form>
                    </div>
                </Col>
                <Col md={10}>
                {
                    (isOrdersFetched)?(
                        fitleredOrders.map(order=>{
                            return(


                                    <Row className="ordersbox">
                                        <Col md={2} style={{display:'flex',justifyContent:'center'}}>
                                        <Image thumbnail="true" src={order.productImage1}/>
                                        </Col>
                                        <Col md={4}>
                                            <h5>{order.productName}
                                            
                                            </h5>
                                            {
                                            (order.productRated==true)?(
                                                    
                                                    // <p>Product is already rated</p>
                                                    <Button className="buttonn" onClick={()=>editRating(order)}>Already rated</Button>
                                                
                                            ):(
                                                
                                                    <Button className="buttonn"  onClick={()=>rateProduct(order)}>Rate & Review</Button>            
                                                    
                                            )
                                        }
                                        {/* <Button className="buttonn" style={{marginLeft:"15px"}} onClick={()=>generateInvoice(order)}>Invoice</Button> */}

                                        </Col>
                                        <Col md={2}>
                                            
                                        <h5 style={{marginTop:'10px'}}> MSP: <b style={{color:"rgb(255,98,98)"}}>₹{order.productPrice} </b> </h5> 
                    
                                        </Col>
                                        <Col md={4}>

                                        <h5>Quantity:{order.quantity}
                                        <br></br>Ordered On: {order.buyDate}
                                        <br></br>Delivery Date:{order.deliveryDate}
                                        <br></br>Payment Mode:{order.paymentMode}</h5>
                                        
                                        
                                        </Col>
                                    </Row>

                                        
                                // <Row>
                                //     <Col md={2}>
                                //         <img style={{height:"275px" ,width:"275px"}} src={order.productImage1}></img>
                                //     </Col>
                                //     <Col md={9}>
                                //         <h5 style={{marginTop:"25px"}}>{order.productName}</h5>   
                                //         {/* <p>MRP:<s>{order.productPrice}</s> <b style={{marginLeft:"20px"}}>MSP:{order.offerPrice}</b></p> */}
                                //         <h6>Quantity:{order.quantity}</h6>
                                //         <p>Buy Date:{order.buyDate}</p>
                                //         <p>Delivery Date:{order.deliveryDate}</p>
                                //         <p>Payment Mode:{order.paymentMode}</p>
                                //         {
                                //             (order.productRated==true)?(
                                                    
                                //                     // <p>Product is already rated</p>
                                //                     <Button onClick={()=>editRating(order)}>Already rated</Button>
                                                
                                //             ):(
                                                
                                //                     <Button onClick={()=>rateProduct(order)}>Rate & Review</Button>            
                                                    
                                //             )
                                //         }
                                        
                                //         <Button  style={{marginLeft:"15px"}} onClick={()=>generateInvoice(order)}>Invoice</Button>
                                //     </Col>
                                // </Row>
                            )
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


export default Orders;
