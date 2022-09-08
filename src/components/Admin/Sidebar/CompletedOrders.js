import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container ,Table,Accordion,Button} from 'react-bootstrap';
import AdminNavbar from "./AdminNavbar";
import 'react-toastify/dist/ReactToastify.css';
import { Toast, ToastBody, ToastHeader } from "reactstrap";
import { ToastContainer, toast } from 'react-toastify';

function CompletedOrders(){
    const [completedOrders,SetCompletedOrders] = useState([]);
    const [isCompletedOrdersFetched,SetIsCompletedOrdersFetched] = useState(false);
    // var uri = "http://mahavirbackend-env.eba-bkwmcbpz.us-east-1.elasticbeanstalk.com";
    var uri="http://localhost:8080";
    useEffect(()=>{
        if(!isCompletedOrdersFetched){
            axios.get(uri+"/completed-orders")
                .then(function(response){
                    if(response.status==200){
                        console.log("Response success:",response.data);
                        SetCompletedOrders(response.data);
                        SetIsCompletedOrdersFetched(true);
                    }else{
                        console.log("Response error:",response);
                    }
                }).catch(function(error){
                    console.log("Error in completed-orders");

                })
        }
    })

    return(
        <div>
            <AdminNavbar/>
            <Container className="pendingdeliveries">
            <h4 style={{margin:20,textAlign:"center"}}>Completed Orders</h4>

                <Table striped bordered hover >
                    <thead>
                        <tr>
                        <th>Order Id</th>
                        <th>Email</th>
                        <th>Buy Date</th>
                        <th>Delivery Date</th>
                        <th>Address</th>
                        <th>Mobile Number</th>
                        <th>Payment Amount</th>
                        <th>Payment Mode</th>
                        <th>Invoice</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (isCompletedOrdersFetched)?(
                                completedOrders.map((order,index)=>{
                                    return(
                                        <tr>
                                            <td>{order.orderId}</td>
                                            <td>{order.buyerEmail}</td>
                                            <td>{order.buyDate}</td>
                                            <td>{order.deliveryDate}</td>
                                            <td>{order.userAddress.address+","+order.userAddress.city+"-"+order.userAddress.pincode}</td>
                                            <td>{order.userAddress.mobileNumber}</td>
                                            <td>{order.paymentAmount}</td>
                                            <td>{order.paymentMode}</td>
                                            <td>👁️‍🗨️</td>
                                        </tr>
                                    );
                                })
                            ):(
                                null
                            )
                        }
                        {/* <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr> */}
                    </tbody>
                </Table>
            </Container>

            <Accordion flush className="mobileviewpendingorders">
             {
                        (isCompletedOrdersFetched)?(
                            completedOrders.map((order,index)=>{
                                return(
                                    <>
                                    <Accordion.Item eventKey={ index}>
        <Accordion.Header>Order Id: {order.orderId}</Accordion.Header>
        <Accordion.Body>
        <Table>
            <tbody>
                                    <tr><td><b>Order Id: </b>{order.orderId}</td></tr>
                                        
                                       <tr><td><b>Email: </b>{order.buyerEmail}</td></tr>
                                       <tr><td><b>Buy Date: </b>{order.buyDate}</td></tr>
                                       <tr><td><b>Address: </b>{order.userAddress.address+","+order.userAddress.city+"-"+order.userAddress.pincode}</td></tr>
                                       <tr><td><b>Contact: </b>{order.userAddress.mobileNumber}</td></tr>
                                       <tr><td><b>Payment Amount: </b>{order.paymentAmount}</td></tr>
                                       <tr><td><b>Payment Mode: </b>{order.paymentMode}</td></tr>
                                       <tr><td><b>Invoice: </b><Button >👁️‍🗨️</Button></td></tr>
                                       </tbody>
        </Table>
                                       </Accordion.Body>
      </Accordion.Item>
                                       </>
                                );
                            })
                        ):(
                            null
                        )
                    }
                    </Accordion>
        </div>
    );
}

export default CompletedOrders;