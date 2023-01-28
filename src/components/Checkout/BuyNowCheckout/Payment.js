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
import Header from "../../Header";
import Footer from "../../Footer/Footer";
import { toast, ToastContainer } from "react-toastify";


function Payment(){

    try{
        console.log("Buy Product",localStorage.getItem("buyProduct"))
        var product = localStorage.getItem("buyProduct");
    }catch(error){
        console.log(error)
    }
    const [cartModels,SetCartModels] = useState(new Map());
    // const [paymentType, SetPaymentType] = useState("");
    var paymentType = "";
    var arr=[];
    console.log("product",product)
    arr.push(product);
    // console.log("arr",arr)
    
    if(product!=null){
        var arr= product.split(",");
        arr.map(a=>{
            var item = a.split("=")
            cartModels.set(item[0],item[1])
        })
        // cartModels.set(product.modelNumber,1);
    }
    

    const navigate = useNavigate();

    // console.log("CartModels",cartModels)

    // console.log("Buy Amount",localStorage.getItem("Amount"));

    var products = Object.fromEntries(cartModels);

    var address = JSON.parse(localStorage.getItem("selectedaddress"));
    // console.log("Address",address)

    const[isPaymentDone,SetIsPaymentDone] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [isActive1, setIsActive1] = useState(false);

    let date = new Date()


    // localStorage.setItem("paymentType","");
    

    const PayAmount=(e)=>{
        e.preventDefault();
        // console.log("Payment Type",localStorage.getItem("paymentType"));
        if(localStorage.getItem("Amount")===""){
            // alert("Please enter amount");
            toast.warn("Please enter amount");
        }else if(localStorage.getItem("paymentType")!=="cashOnDelivery"){
            // alert("Please select payment type")
            toast.warn(<b>Please select payment type</b>)
        }
        else{
            if(localStorage.getItem("paymentType")==="cashOnDelivery"){

                // document.getElementById("payment_nextbtn").setDis
                toast.info(<b>Processing your order...</b>)
                e.currentTarget.disabled = true;

                localStorage.setItem("paymentmode",'cashOnDelivery');

                console.log("Products",products);

                if(products.size===0){
                    toast.error(<b>Please add products to cart</b>)
                    return;
                }

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
                // console.log("Form Data Body",form_data_body)
                axios.post(url+"/order",form_data_body,{
                headers:{
                    "Authorization":"Bearer "+getCookie("jwtToken"),
                    "Content-Type":"application/json"
                }
                }).then(res=>{
                    if(res.status==200){
                        // console.log("response",res)
                        toast.success(<b>Order Placed Successfully</b>)
                        SetIsPaymentDone(true)
                        SetIsPaymentDone(true)
                        navigate("/paymentsuccess")
                        localStorage.removeItem("buyProduct");
                        localStorage.removeItem("paymentType");
                        e.currentTarget.disabled = false;
                        // navigate("/invoice")
                        // localStorage.setItem("BuyProductInvoice",cartModels);
                    }else{
                        // console.log("Error",res)
                        toast.error(<b>{res.data.message}</b>)
                        e.currentTarget.disabled = false;
                    }
                }).catch(err=>{
                    toast.error(<b>{err.response.data.message}</b>)
                    console.log("Error",err.response)
                    e.currentTarget.disabled = false;
                })
            }else{
                const options={
                    key:"rzp_live_HD5qU0zoy9Ntd2",
                    key_secret:"GXZHI3xZnA6BFaCZHEYQt2De",
                    amount:localStorage.getItem("Amount")*100,
                    // amount:parseInt(localStorage.getItem("price"))*100,
                    currency:"INR",
                    name:"Mahavir Electronics",
                    description:"Payment for products",
                    handler:function(response){
                        // alert(response.razorpay_payment_id);
                        // console.log("error in sending payment:",response);
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
                            // console.log("Form Data Body",form_data_body)
                                axios.post(url+"/order",form_data_body,{
                                headers:{
                                    "Authorization":"Bearer "+getCookie("jwtToken"),
                                    "Content-Type":"application/json"
                                }
                                }).then(res=>{
                                    if(res.status==200){
                                        // console.log("response",res)
                                        SetIsPaymentDone(true)
                                        SetIsPaymentDone(true)
                                        localStorage.removeItem("paymentType");
                                        navigate("/paymentsuccess")
                                        // navigate("/invoice")
                                        // localStorage.setItem("BuyProductInvoice",cartModels);
                                    }
                                }).catch(err=>{
                                    console.log("Error",err.response)
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
            <ToastContainer position="top-center"/>
            {
                (isPaymentDone)?(
                    <h1>Payment Done</h1>
                ):(
                    <>
                    <body style={{background:"whitesmoke"}}>
                    <Header />
                    <Row style={{ height: "100%", width: "100%",marginTop:"70px" ,background:"white"}}>
                            <Col md={4}></Col>
                            <center>
                            <Col md={8} className="payment">
                                <h3>Payment</h3>
                                <p style={{ fontSize: "16px", marginTop: "20px" }}>Choose payment method below</p>
                                <Row>
                                    {/* <Col md={8}>
                                        <Card style={{ width: "200px", height: "100px", border: "1px solid black", margin: "10px", backgroundColor: isActive ? 'lightblue' : '' }}>
                                            <Card.Img id="razorpay" onClick={() => { localStorage.setItem("paymentType",'razorpay'); setIsActive(true); setIsActive1(false); } } style={{ padding: "35px", width: "200px", height: "100px" }} variant="top" src="https://upload.wikimedia.org/wikipedia/en/8/89/Razorpay_logo.svg" />
                                        
                                        </Card>
                                    </Col> */}
                                    <Col md={12}>
                                        <Card style={{ width: "150px", height: "100px", border: "1px solid black", margin: "10px", backgroundColor: isActive1 ? 'lightblue' : '' }} onClick={() => { localStorage.setItem("paymentType","cashOnDelivery"); paymentType = 'cashOnDelivery'; setIsActive1(true); setIsActive(false); } }>
                                            <Card.Img id="cashOnDelivery" onClick={() => { localStorage.setItem("paymentType",'cashOnDelivery'); setIsActive1(true); setIsActive(false); } } style={{ padding: "10px", width: "100px", height: "100px", marginLeft: "20px" }} variant="top" src="https://cdn-icons-png.flaticon.com/512/1019/1019607.png" />
                                            {/* onClick={SetPaymentType("cashOnDelivery")} */}
                                        </Card>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={12}>
                                        <h3>Cash On Delivery</h3>
                                    </Col>
                                </Row>

                                {/* <Form >
        <Form.Check type="radio" id="cashOnDelivery" name="paymentoption" value="Cash On Delivery" label="Cash On Delivery"/>
        <Form.Check type="radio" id="razorpay" name="paymentoption" value="Pay Online" label="Pay Online"/>
    </Form>
    <Button onClick={PayAmount}>Next</Button> */}
                                <Row>
                                    <Col md={3}></Col>
                                    <Col md={6}>
                                <Button id="payment_nextbtn" className="payment_nextbtn" onClick={PayAmount}>Next</Button>
                                </Col>
                                </Row>
                            </Col>
                            </center>
                            
                        </Row>
                        <Footer/>
                        </body></>
                    
                    
                )
            }
            
        </div>
        
    );

}

export default Payment;