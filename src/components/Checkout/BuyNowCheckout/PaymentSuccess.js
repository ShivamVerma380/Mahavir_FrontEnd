import React,{useState,useEffect} from "react";
import Footer from "../../Footer/Footer";
import Header from "../../Header";
import {Row,Col,Container, Button} from 'react-bootstrap';
import {TiTick} from "react-icons/ti"
import {useNavigate} from "react-router-dom"

function PaymentSuccess(){
    const navigate = useNavigate();
    var paymentmode = localStorage.getItem("paymentmode");
    console.log("paid",localStorage.getItem("paymentmode"));
    console.log("pay",paymentmode)
    var paymentamount = localStorage.getItem("Amount")

    
    
    const handleOrders=()=>{
        navigate("/my-orders")
    }

    const handleContinue=()=>{
        navigate("/")
    }

    return(
        <>
        <body style={{background:"whitesmoke"}}>
        <Header/>
        <div style={{marginTop:"150px"}}>
        <Container style={{background:"white"}}>
            <center>
                <TiTick size={200}/>
                <br></br>
                <br></br>
                <h4>Yay! Your Order has been recieved </h4>
                <br></br>
                <br></br>
                {
                    (paymentmode === "cashOnDelivery")?(
                        <>
                        <h4>Payment mode: Cash On Delivery</h4>
                        <br></br>
                        <h4>Amount to be paid: {paymentamount}</h4>
                        </>
                    ):(
                        <>
                        <h4>Payment mode : Paid Online</h4>
                        </>
                    )
                }
                <br></br>
                <Row>
                    <Col md={4}></Col>
                    <Col md={2}>
                        <Button style={{background:"#C10000",border:"none"}} onClick={handleOrders}>View my Orders</Button>
                    </Col>
                    <Col md={2}>
                    <Button style={{background:"#C10000",border:"none"}} onClick={handleContinue}>Continue Shopping</Button>
                    </Col>
                </Row>
                <br></br>
                
            </center>
        </Container>
        </div>
        <br></br>
        <Footer/>
        
        </body>
        </>
    );
}
export default PaymentSuccess;