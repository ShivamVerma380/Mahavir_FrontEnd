import react, { useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import {setCookie,getCookie} from '../Cookies';
import axios from "axios";
import url from '../../Uri';
import { Navigate, useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';
const Payment=()=>
{

    var arr = getCookie("CartModels").split(",");
    const [cartModels,SetCartModels] = useState(new Map());
    
    const navigate = useNavigate();

    // var price,discount,amount;
    // const[price,SetPrice] = useState();

    arr.map(item=>{
        if(item!=""){
            var pair = item.split("=")
            // if(pair[0])
            if(pair[0]!=""){
                cartModels.set(pair[0].trim(),parseInt(pair[1]));
            }
        }
    })

    useEffect(()=>{

    })

    console.log("CartModels",cartModels)

    var products = Object.fromEntries(cartModels);

    var address = JSON.parse(localStorage.getItem("selectedaddress"));
    console.log("Address",address)

    const[isPaymentDone,SetIsPaymentDone] = useState(false);


    let date = new Date()

    

    const PayAmount=(e)=>{
        e.preventDefault();
        
        if(localStorage.getItem("price")===""){
            alert("Please enter amount");
        }else{
            if(document.getElementById("cashOnDelivery").checked){
                var form_data_body={
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
                    "paymentAmount":localStorage.getItem("price")
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
                        navigate("/")
                    }
                }).catch(err=>{
                    console.log("Error",err)
                })
            }else{
                var options={
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
                        if(localStorage.getItem("price")!=null){
                                var form_data_body={
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
                                    "paymentAmount":localStorage.getItem("price"),
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
                                        navigate("/")
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
        // if(localStorage.getItem("price")!=null){
        //     axios.post(url+"/order",form_data_body,{
        //     headers:{
        //         "Authorization":"Bearer "+getCookie("jwtToken"),
        //         "Content-Type":"application/json"
        //     }
        //     }).then(res=>{
        //         if(res.status==200){
        //             console.log("response",res)
        //             SetIsPaymentDone(true)
        //             SetIsPaymentDone(true)
        //         }
        //     }).catch(err=>{
        //         console.log("Error",err)
        //     })
            
        // } 
           
    

    return(
        <div>
            {
                (isPaymentDone)?(
                    <h1>Payment Done</h1>
                ):(
                    <div>
                        <h2>Payment</h2>
                        <Form>
                            <Form.Check type="radio" id="cashOnDelivery" name="paymentoption" value="Cash On Delivery" label="Cash On Delivery"/>
                            <Form.Check type="radio" id="razorPay" name="paymentoption" value="Pay Online" label="Pay Online"/>
                        </Form>
                        <Button onClick={PayAmount}>Next</Button>
                        {/* <Button onClick={Pay Amount}>Next</Button> */}
                    </div>
                )
            }
            
        </div>
        
    );
}

export default Payment;