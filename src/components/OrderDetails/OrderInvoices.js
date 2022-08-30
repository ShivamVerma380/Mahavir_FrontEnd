import axios from "axios";
import React,{useState,useEffect} from "react";
import { Table, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import url from "../../Uri";
import { getCookie } from "../Cookies";
import Header from "../Header";

function OrderInvoices(){

    const [orders,setOrders] = useState([]);
    const [isOrdersFetched,setIsOrdersFetched] = useState(false);

    const navigate = useNavigate();


    console.log("Token....",getCookie("jwtToken"));
    useEffect(()=>{
        if(!isOrdersFetched){
            axios.get(url+"/my-invoice",{
                headers:{
                    "Authorization": "Bearer "+getCookie("jwtToken")
                }
            }).then(function(response){
                if(response.status==200){
                    console.log("Response....",response.data);
                    setOrders(response.data);
                    setIsOrdersFetched(true);
                }
            }).catch(function(error){
                console.log(url+"/my-invoice",error);
            })
        }
    })

    function handleInvoiceClick(order){
        console.log("Order clicked",order);
        localStorage.setItem("Invoice",JSON.stringify(order));
        navigate("/invoice")
    }

    return(
        <><Header/>
        <div style={{marginTop:"150px"}}>
            {(isOrdersFetched) ? (
                <Row>
                    <Col md={2}></Col>
                    <Col md={8}>
                        <h3>Your Order Invoices:</h3>
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
                                            <td onClick={() => handleInvoiceClick(order)}>📅</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </Table>
                        </Col>
                        <Col md={2}></Col>
                </Row>
            ) : (
                null
            )}
        </div></>
    );
}

export default OrderInvoices;