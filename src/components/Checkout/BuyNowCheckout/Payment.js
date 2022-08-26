import React,{useState,useEffect} from "react";
import { Button, Col } from 'reactstrap';
import {setCookie,getCookie} from '../../Cookies';
import axios from "axios";
import url from '../../../Uri';
import { Navigate, useNavigate } from 'react-router-dom';
import { Form, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import './Payment.css';
function Payment(){

    var product = JSON.parse(localStorage.getItem("buyProduct"));
    const [cartModels,SetCartModels] = useState(new Map());
    // const [paymentType, SetPaymentType] = useState("");
    var paymentType = "";
    var arr=[];
    arr.push(product);

    cartModels.set(product.modelNumber,1);

    const navigate = useNavigate();

    console.log("CartModels",cartModels)

    console.log("Buy Amount",localStorage.getItem("Amount"));

    var products = Object.fromEntries(cartModels);

    var address = JSON.parse(localStorage.getItem("selectedaddress"));
    console.log("Address",address)

    const[isPaymentDone,SetIsPaymentDone] = useState(false);


    let date = new Date()

    

    const PayAmount=(e)=>{
        e.preventDefault();
        console.log("Payment Type",paymentType);
        if(localStorage.getItem("Amount")===""){
            alert("Please enter amount");
        }else{
            if(paymentType==="cashOnDelivery"){
                const form_data_body={
                    products,
                    "userAddress":{
                    "name":address.name,
                    "mobileNumber":address.mobileNumber,
                    "pincode":address.pincode,
                    "locality":address.locality,
                    "address":address.address,
                    "city":address.city,
                    "state":address.state,
                    "addressType":"home"
                    },
                    "buyDate":date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear(),
                    "paymentMode":"Cash On Delivery",
                    "paymentAmount":localStorage.getItem("Amount")
                }
                console.log("Form Data Body",form_data_body)
                axios.post(url+"/order",form_data_body,{
                headers:{
                    "Authorization":"Bearer "+getCookie("jwtToken"),
                    "Content-Type":"application/json"
                }
                }).then(res=>{
                    if(res.status==200){
                        console.log("response",res)
                        SetIsPaymentDone(true)
                        SetIsPaymentDone(true)
                        navigate("/my-orders")
                        // navigate("/invoice")
                        // localStorage.setItem("BuyProductInvoice",cartModels);
                    }
                }).catch(err=>{
                    console.log("Error",err)
                })
            }else{
                const options={
                    key:"rzp_test_EDuD7FGqkmNkHy",
                    key_secret:"m5T0MuDnYZJeZKvdTSHZjyBK",
                    amount:1*100,
                    // amount:parseInt(localStorage.getItem("price"))*100,
                    currency:"INR",
                    name:"Mahavir Electronics",
                    description:"Payment for products",
                    handler:function(response){
                        alert(response.razorpay_payment_id);
                        console.log("error in sending payment:",response);
                        if(localStorage.getItem("Amount")!=null){
                                const form_data_body={
                                    products,
                                    "userAddress":{
                                    "name":address.name,
                                    "mobileNumber":address.mobileNumber,
                                    "pincode":address.pincode,
                                    "locality":address.locality,
                                    "address":address.address,
                                    "city":address.city,
                                    "state":address.state,
                                    "addressType":"home"
                                    },
                                    "buyDate":date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear(),
                                    "paymentMode":"razorpay",
                                    "paymentAmount":localStorage.getItem("Amount"),
                                    "paymentId":response.razorpay_payment_id
                                }
                            console.log("Form Data Body",form_data_body)
                                axios.post(url+"/order",form_data_body,{
                                headers:{
                                    "Authorization":"Bearer "+getCookie("jwtToken"),
                                    "Content-Type":"application/json"
                                }
                                }).then(res=>{
                                    if(res.status==200){
                                        console.log("response",res)
                                        SetIsPaymentDone(true)
                                        SetIsPaymentDone(true)
                                        navigate("/my-orders")
                                        // navigate("/invoice")
                                        // localStorage.setItem("BuyProductInvoice",cartModels);
                                    }
                                }).catch(err=>{
                                    console.log("Error",err)
                                })
                                
                            } 
                        
                            
                        
                    },
                    prefill:{
                        name:address.name,
                        contact:address.mobileNumber,
                        email:"shivam380.testing@gmail.com"
                    },
                    notes:{
                        address:address.address
                    },
                    theme: {
                        color: "#F37254"
                    }
                };
                var rzp1 = new window.Razorpay(options);
                rzp1.open();
            }
            // alert(localStorage.getItem("price"))
            
        }
        }
        
        
    

    return(
        <div>
            {
                (isPaymentDone)?(
                    <h1>Payment Done</h1>
                ):(
                    <Row style={{height:"100%", width:"100%"}}>
                        <Col md={2}></Col>
                        <Col md={8} className="payment">
                                <h5>Payment</h5>
                                <p style={{fontSize:"14px", marginTop:"20px"}}>Choose payment method below</p>
                                <Row>
                                    <Col md={6}>
                                        <Card style={{width:"140px",height:"100px", border:"1px solid black",  margin:"10px"}}>
                                            <Card.Img id="razorPay" onClick={()=>{paymentType = "razorPay"}} style={{padding:"10px",width:"140px",height:"100px"}} variant="top" src="https://upload.wikimedia.org/wikipedia/en/8/89/Razorpay_logo.svg" />
                                            {/*  */}
                                        </Card>
                                    </Col>
                                    <Col md={6}>
                                        <Card style={{width:"140px",height:"100px", border:"1px solid black",margin:"10px"}}>
                                            <Card.Img id="cashOnDelivery" onClick={()=>{paymentType = 'cashOnDelivery'}} style={{padding:"10px",width:"100px",height:"100px", marginLeft:"20px"}} variant="top" src="https://cdn-icons-png.flaticon.com/512/1019/1019607.png" />
                                            {/* onClick={SetPaymentType("cashOnDelivery")} */}
                                        </Card>
                                    </Col>
                                </Row>
                                
                                {/* <Form >
                                    <Form.Check type="radio" id="cashOnDelivery" name="paymentoption" value="Cash On Delivery" label="Cash On Delivery"/>
                                    <Form.Check type="radio" id="razorPay" name="paymentoption" value="Pay Online" label="Pay Online"/>
                                </Form>
                                <Button onClick={PayAmount}>Next</Button> */}
                        <Button onClick={PayAmount}>Next</Button>
                    
                        </Col>
                        <Col md={2}></Col>
                    </Row>
                    
                    
                )
            }
            
        </div>
        
    );

}

export default Payment;