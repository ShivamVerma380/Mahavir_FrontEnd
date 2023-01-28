import React, { useEffect, useState }  from "react";
import { Row,Button, Col,Container ,Table,Accordion} from 'react-bootstrap';
import {setCookie,getCookie} from '../../Cookies';
import axios from "axios";
import AdminHeader from "../../Admin/AdminHeader";
import AdminNavbar from "./AdminNavbar";
import { useNavigate } from "react-router-dom";
import './Navbar.css';
import Navbar from './Navbarrrr';
import url from "../../../Uri";
const PendingDelivery = () => {
    
    const [orders,SetOrders] = useState([]);
    const [isOrdersFetched,SetIsOrdersFetched] = useState(false);

    const navigate = useNavigate();
    
    useEffect(()=>{
        if(!isOrdersFetched){
            axios.get(url+"/pending-orders")
                .then(function(response){
                    if(response.status==200){
                        console.log("Success",response.data)
                        SetOrders([...response.data].reverse());
                        SetIsOrdersFetched(true);
                    }else{
                        console.log("response",response);
                    }
                }).catch(function(error){
                    console.log("Error In Fetching orders");

                })
        }
    })

    function handleOrderClick(order){
        console.log("Order clicked",order);
        let date = new Date();
        var token=getCookie("jwtToken");
        var form_data_body={
            "orderId":""+order.orderId,
            "deliveryDate":date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear()
        }
        console.log("form data body",form_data_body)
        axios.post(url+"/order-status",form_data_body,{
            headers:{
                "Authorization":"Bearer "+token,
                "Content-Type": "multipart/form-data"
            }
        }).then(function(response){
                if(response.status==200){
                    console.log("Success",response.data);
                    window.location.reload();
                }else{
                    console.log("Error",response);
                }
            }).catch(function(error){
                console.log("Error in order-status",error);
                // toast.warn("Error In Fetching orders",error)

            })
    }

    function handleGenerateInvoice(order){
        console.log("Invoice",order)
        console.log("Generate Invoice",JSON.stringify(order));
        localStorage.setItem("Invoice",JSON.stringify(order));
        navigate("/invoice")
    }

    return (
        <div>
            <AdminNavbar/>
        <Container className="pendingdeliveries">
            <h4 style={{margin:"20px",textAlign:"center"}}>Pending Orders</h4>

            <Table striped bordered hover >
                <thead>
                    <tr>
                    <th>Order Id</th>
                    <th>Email</th>
                    <th>Buy Date</th>
                    <th>Address</th>
                    <th>Mobile Number</th>
                    <th>Payment Amount</th>
                    <th>Payment Mode</th>
                    <th>Invoice</th>
                    <th>#</th>
                    </tr>
                </thead>
                <tbody>
                {
                (isOrdersFetched)?(
                    orders.map((order,index)=>{
                        return(
                            <tr>
                                <td>{order.orderId}</td>
                                <td>{order.buyerEmail}</td>
                                <td>{order.buyDate}</td>
                                <td>{order.userAddress.address+","+order.userAddress.city+"-"+order.userAddress.pincode}</td>
                                <td>{order.userAddress.mobileNumber}</td>
                                <td>{order.paymentAmount}</td>
                                <td>{order.paymentMode}</td>
                                <td><Button onClick={()=>handleGenerateInvoice(order)}>👁️‍🗨️</Button></td>
                                <td><Button onClick={()=>handleOrderClick(order)}>✅</Button></td>
                            </tr>
                        );
                    })
                ):(null)
            }
                </tbody>
            </Table>

            
        </Container>
        
      
          
        
      
    
        
        <Accordion flush className="mobileviewpendingorders">
             {
                        (isOrdersFetched)?(
                            orders.map((order,index)=>{
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
                                       <tr><td><b>Invoice: </b><Button onClick={()=>handleGenerateInvoice(order)}>👁️‍🗨️</Button></td></tr>
                                       <tr><td><b>#: </b><Button onClick={()=>handleOrderClick(order)}>✅</Button></td></tr>
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
    )

}
export default PendingDelivery;