import React, { useEffect, useState }  from "react";
import { Row,Button, Col,Container ,Table,Accordion} from 'react-bootstrap';
import {setCookie,getCookie} from '../../Cookies';
import axios from "axios";
import AdminHeader from "../../Admin/AdminHeader";
import AdminNavbar from "./AdminNavbar";
const PendingDelivery = () => {
    
    const [orders,SetOrders] = useState([]);
    const [isOrdersFetched,SetIsOrdersFetched] = useState(false);


    useEffect(()=>{
        if(!isOrdersFetched){
            axios.get("http://localhost:8080/pending-orders")
                .then(function(response){
                    if(response.status==200){
                        console.log("Success",response.data)
                        SetOrders(response.data);
                        SetIsOrdersFetched(true);
                    }else{
                        console.log("response",response);
                    }
                }).catch(function(error){
                    console.log("Error In Fetching orders",error);
                })
        }
    })

    return (
        <div>
        <h4 style={{margin:"20px",textAlign:"center"}}>Pending Orders</h4>
        <Container>
            <Table striped bordered hover variant="dark">
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
                                        <td>👁️‍🗨️</td>
                                        <td>✅</td>
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
        </div>
    )

}
export default PendingDelivery;