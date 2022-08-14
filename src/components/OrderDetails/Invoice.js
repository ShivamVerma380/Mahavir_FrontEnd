import React,{useState,useEffect} from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';

function Invoice(){
    console.log("Order",JSON.parse(localStorage.getItem("Generate Invoice")))

    var order = JSON.parse(localStorage.getItem("Generate Invoice"));

    return(
        <Container style={{border:"2px solid #E2E2E2"}}>
            <h3 style={{textAlign:"center"}}>Invoice</h3>
            <h5>Sold By:<p>Mahavir Electronics and Furniture</p></h5>
            <h5>Ship From Address:</h5>
            <p> opp. Post Office, nr. Sahyadri Hospital, Vasant Baug, Ramyanagari Housing Society, Bibwewadi, Pune, Maharashtra 411037</p>
            <h5>GSTIN:</h5>
            <p>27AAAPO6914H1ZO</p>
            <hr></hr>
            <Row>
                <Col md={4}>
                    <p><b>Order Id:</b>#MAH{order.orderId}</p>
                    <p><b>Order Date:</b>{order.buyDate}</p>
                    <p><b>Invoice Date:</b>{order.buyDate}</p>
                </Col>
                <Col md={4}>
                    <p><b>Bill/Ship To:</b></p>
                    <p><b>{order.userAddress.name}</b></p>
                    <p>{order.userAddress.address},</p>
                    <p>{order.userAddress.city},{order.userAddress.state}-{order.userAddress.pincode}</p>
                    <p>Phone:{order.userAddress.mobileNumber}</p>
                </Col>
                <Col md={4}>
                    <p>"Keep this invoice and manufacturer box for warranty purposes."</p>
                </Col>
            </Row>
            <hr></hr>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Product</th>
                    <th>Title</th>
                    <th>Qty</th>
                    <th>Product Price</th>
                    <th>Discount</th>
                    <th>Offer Price</th>
                    <th>Total</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{order.modelNumber}</td>
                        <td>{order.productName}</td>
                        <td>{order.quantity}</td>
                        <td>{order.productPrice} X {order.quantity}</td>
                        <td>{order.productPrice-order.offerPrice} X {order.quantity}</td>
                        <td>{order.offerPrice} X {order.quantity}</td>
                        <td>{order.paymentAmount}</td>
                    </tr>
                    <br></br>
                    <tr>
                        <td></td>
                        <td><b>Grand Total:</b></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>{order.paymentAmount}</td>
                    </tr>
                </tbody>
            </Table>
            <hr></hr>
            <br></br>
            <br></br>
            <Row>
                <Col md={6}>
                {
                    (order.paymentId==null)?(
                        <p><b>Payment Mode:</b>Cash On Delivery</p>
                    ):(
                        <p><b>Transaction Id:</b>{order.paymentId}</p>
                    )
                }
                </Col>
                <Col md={6}>
                    <p style={{textAlign:"end"}}>Authorized Signature</p>
                </Col>
            </Row>
            <hr></hr>
            
            
        </Container>
        

    )
}

export default Invoice;