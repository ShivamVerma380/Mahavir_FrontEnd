import React,{useState,useEffect} from "react";
import Footer from "../../Footer/Footer";
import Header from "../../Header";
import {Row,Col,Container, Button} from 'react-bootstrap';
import {TiTick} from "react-icons/ti"
import {useNavigate} from "react-router-dom"

function PaymentSuccess(){
    const navigate = useNavigate();
    var paymentmode = localStorage.getItem("paymentmode");
    // console.log("paid",localStorage.getItem("paymentmode"));
    // console.log("pay",paymentmode)
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
       <Row>         
                <TiTick style={{color:"green"}} size={200}/>
                </Row>
   <Row>
   <center><h4>Yay! Your Order has been recieved </h4>
                    </center>
                
                </Row>
                <Row>
                    <center>
                {
                    (paymentmode === "cashOnDelivery")?(
                        <>
                        <h5>Payment mode: Cash On Delivery</h5>
                     
                        <h5>Amount to be paid: {paymentamount}</h5>
                        </>
                    ):(
                        <>
                        <h5>Payment mode : Paid Online</h5>
                        </>
                    )
                }
                </center>
                </Row>
                <Row>
                
                    <center>
                        <Button style={{background:"#C10000",border:"none",width:'fit-content',marginLeft:'10px',marginRight:'10px',marginBottom:'20px'}} onClick={handleOrders}>View my Orders</Button>
                    
                        <Button style={{background:"#C10000",border:"none",width:'fit-content',marginLeft:'10px',marginRight:'10px',marginBottom:'20px'}} onClick={handleContinue}>Continue Shopping</Button>
                        </center>
                    
                </Row>
               
                
            
        </Container>
        </div>
        <br></br>
        <Footer/>
        
        </body>
        </>
    );
}
export default PaymentSuccess;