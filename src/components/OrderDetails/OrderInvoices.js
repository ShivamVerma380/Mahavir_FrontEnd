import axios from "axios";
import React,{useState,useEffect} from "react";
import { Table, Row, Col } from "react-bootstrap";
import {Button} from "reactstrap"
import { useNavigate } from "react-router-dom";
import url from "../../Uri";
import { getCookie } from "../Cookies";
import Footer from "../Footer/Footer";
import Header from "../Header";

function OrderInvoices(){

    const [orders,setOrders] = useState([]);
    const [isOrdersFetched,setIsOrdersFetched] = useState(false);

    const navigate = useNavigate();


    // console.log("Token....",getCookie("jwtToken"));
    useEffect(()=>{
        if(!isOrdersFetched){
            axios.get(url+"/my-invoice",{
                headers:{
                    "Authorization": "Bearer "+getCookie("jwtToken")
                }
            }).then(function(response){
                if(response.status==200){
                    // console.log("Response....",response.data);
                    setOrders(response.data);
                    setIsOrdersFetched(true);
                }
            }).catch(function(error){
                // console.log(url+"/my-invoice",error);
            })
        }
    })

    function handleInvoiceClick(order){
        // console.log("Order clicked",order);
        localStorage.setItem("Invoice",JSON.stringify(order));
        navigate("/invoice")
    }

    const handleContinue=()=>{
        navigate("/")
    }

    return(
        <>
        <body style={{background:"whitesmoke"}}><Header/>
        <div style={{marginTop:"150px"}}>
            {(isOrdersFetched) ? (
                <>
                <Row>
                    <Col md={2}></Col>
                    <Col md={8} style={{background:"white"}}>
                        <h3>Your Order Invoices:</h3>
                        <br></br>
                        <Table striped hover border>
                            <thead>
                                <tr>
                                    <th>Order Id</th>
                                    <th>Buy Date</th>
                                    <th>Delivery Date</th>
                                    <th>Payment Amount</th>
                                    <th>Transaction Id</th>
                                    <th>Address</th>
                                    <th>Invoice</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map(order => {
                                    return (
                                        <tr>
                                            <td>#MAV{order.orderId}</td>
                                            <td>{order.buyDate}</td>
                                            {(order.deliveryDate != null) ? (
                                                <td>{order.deliveryDate}</td>
                                            ) : (
                                                <td>-</td>
                                            )}

                                            <td>{order.paymentAmount}</td>
                                            {(order.paymentId != null) ? (
                                                <td>{order.paymentId}</td>
                                            ) : (
                                                <td>Cash On Delivery</td>
                                            )}

                                            <td>{order.userAddress.address + "," + order.userAddress.city + "," + order.userAddress.state + "-" + order.userAddress.pincode}</td>
                                            <td onClick={() => handleInvoiceClick(order)} style={{cursor:"pointer"}}>📅</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </Table>
                        <br></br>
                        <h6 style={{fontWeight:300}}><i>* Please click on the invoice icon to view your order invoice!</i></h6>
                        </Col>
                        <Col md={2}></Col>
                </Row>
                <br></br>
                <br></br>
                <Row>
                <center>
                    <Button style={{background:"#C10000",border:"none"}} onClick={handleContinue}>Continue Shopping</Button>
                </center>
                </Row>
                </>
            ) : (
                null
            )}
        </div>
        
       
        </body></>
    );
}

export default OrderInvoices;