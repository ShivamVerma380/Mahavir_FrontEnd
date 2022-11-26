import React from "react";
import { Card, CardHeader, CardText, CardBody,Row,
    CardTitle, CardFooter, Button, Col,Container ,Table} from 'reactstrap';
import { useNavigate } from "react-router-dom";
 
const PaymentOption = () => {
    return (
        <div>
            <center>
            <h1 style={{marginTop:"100px"}}>Payment Option</h1>
            <Button href="https://razorpay.com/" style={{marginTop:"200px"}}>Go to RazorPay</Button>
            </center>
           

        </div>
        

    )
} 
export default PaymentOption;