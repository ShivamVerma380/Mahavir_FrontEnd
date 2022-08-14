import axios from "axios";
import React, { useEffect, useState }  from "react";
import {Row,Col,Form,Button} from 'react-bootstrap';
// import { Header } from "semantic-ui-react";
import Header from "../Header";
import {setCookie,getCookie} from '../Cookies';
import url from "../../Uri";
import { useNavigate } from "react-router-dom";



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
                    console.log("Success",response.data);
                    setOrders(response.data);
                    setFilteredOrders(response.data);
                    SetIsOrdersFetched(true);
                }
            }).catch(function(error){
                console.log("Error",error);
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

        console.log(date.getFullYear(),document.getElementById(date.getFullYear()).checked);
        console.log(date.getFullYear()-1,document.getElementById(date.getFullYear()-1).checked);
        console.log("Older",document.getElementById("Older").checked);

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
        console.log("Rate rating",order);
        localStorage.setItem("rateProduct",JSON.stringify(order));
        navigate("/ratereview")
    }

    function editRating(order){
        console.log("Edit Rating",order);
    }

    function generateInvoice(order){
        console.log("Generate Invoice",JSON.stringify(order));
        localStorage.setItem("Generate Invoice",JSON.stringify(order));
        navigate("/invoice")
    }

    return(
        <div>
            <Row>
                <Col md={2}>
                    <h5>Order Filters</h5>
                    <br></br>
                    <Form>
                        <Form.Check type="checkbox" label="On The Way" id="on-the-way" onChange={handleFormCheck}/>
                        <Form.Check type="checkbox" label="Delivered" id="delivered" onChange={handleFormCheck}/>
                    </Form>
                    <br></br>
                    <h6>Year</h6>
                    <Form>
                        <Form.Check type="checkbox" id={date.getFullYear()} label= {date.getFullYear()} onChange={handleFormCheck} />
                        <Form.Check type="checkbox" id={date.getFullYear()-1} label= {date.getFullYear()-1} onChange={handleFormCheck}/>
                        <Form.Check type="checkbox" id="Older" label= "Older" onChange={handleFormCheck}/>
                    </Form>
                </Col>
                <Col md={10}>
                {
                    (isOrdersFetched)?(
                        fitleredOrders.map(order=>{
                            return(
                                <Row>
                                    <Col md={2}>
                                        <img style={{height:"275px" ,width:"275px"}} src={order.productImage1}></img>
                                    </Col>
                                    <Col md={9}>
                                        <h5 style={{marginTop:"25px"}}>{order.productName}</h5>   
                                        {/* <p>MRP:<s>{order.productPrice}</s> <b style={{marginLeft:"20px"}}>MSP:{order.offerPrice}</b></p> */}
                                        <h6>Quantity:{order.quantity}</h6>
                                        <p>Buy Date:{order.buyDate}</p>
                                        <p>Delivery Date:{order.deliveryDate}</p>
                                        <p>Payment Mode:{order.paymentMode}</p>
                                        {
                                            (order.productRated==true)?(
                                                    
                                                    // <p>Product is already rated</p>
                                                    <Button onClick={()=>editRating(order)}>Already rated</Button>
                                                
                                            ):(
                                                
                                                    <Button onClick={()=>rateProduct(order)}>Rate & Review</Button>            
                                                    
                                            )
                                        }
                                        
                                        <Button  style={{marginLeft:"15px"}} onClick={()=>generateInvoice(order)}>Invoice</Button>
                                    </Col>
                                </Row>
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
