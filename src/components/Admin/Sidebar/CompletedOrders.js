import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container ,Table} from 'react-bootstrap';
function CompletedOrders(){
    const [completedOrders,SetCompletedOrders] = useState([]);
    const [isCompletedOrdersFetched,SetIsCompletedOrdersFetched] = useState(false);
    
    useEffect(()=>{
        if(!isCompletedOrdersFetched){
            axios.get("http://localhost:8080/completed-orders")
                .then(function(response){
                    if(response.status==200){
                        console.log("Response success:",response.data);
                        SetCompletedOrders(response.data);
                        SetIsCompletedOrdersFetched(true);
                    }else{
                        console.log("Response error:",response);
                    }
                }).catch(function(error){
                    console.log("Error",error);
                })
        }
    })

    return(
        <div>
            <h4 style={{margin:20,textAlign:"center"}}>Completed Orders</h4>
            <Container>
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
        </div>
    );
}

export default CompletedOrders;