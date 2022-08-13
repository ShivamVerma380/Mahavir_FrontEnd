import axios from "axios";
import React, { useEffect, useState }  from "react";
import {Row,Col,Form,Button} from 'react-bootstrap';
// import { Header } from "semantic-ui-react";
import Header from "../Header";
import {setCookie,getCookie} from '../Cookies';
import url from "../../Uri";



const Orders=()=>{

    var date = new Date();

    const [orders,setOrders]=useState([]);
    const [isOrdersFetched,SetIsOrdersFetched] = useState(false);

    const [fitleredOrders,setFilteredOrders]=useState([]);

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
        setFilteredOrders([]);
        setFilteredOrders([...arr]);
        // console.log("On The way",document.getElementById("on-the-way").checked)
        // console.log("Delivered",document.getElementById("delivered").checked)
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
                        <Form.Check type="checkbox" id={date.getFullYear()} label= {date.getFullYear()} />
                        <Form.Check type="checkbox" id={date.getFullYear()-1} label= {date.getFullYear()-1}/>
                        <Form.Check type="checkbox" id="Older" label= "Older"/>
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
                                        <Button>Rate & Review</Button>
                                        <Button  style={{marginLeft:"15px"}}>Invoice</Button>
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
