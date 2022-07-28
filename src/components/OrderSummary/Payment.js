import react, { useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import {setCookie,getCookie} from '../Cookies';
import axios from "axios";
const Payment=()=>
{

    var arr = getCookie("CartModels").split(",");
    const [cartModels,SetCartModels] = useState(new Map());
    arr.map(item=>{
        if(item!=""){
            var pair = item.split("=")
            // if(pair[0])
            cartModels.set(pair[0].trim(),parseInt(pair[1]));
        }
    })

    console.log("CartModels",cartModels)

    var products = Object.fromEntries(cartModels);

    var address = JSON.parse(localStorage.getItem("selectedaddress"));
    console.log("Address",address)
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
        "paymentMode":"Cash On Delivery",
        "paymentAmount":"177000"
    }
    console.log("Form Data Body",form_data_body)

    function PayAmount(){
        axios.post("http://localhost:8080/order",form_data_body,{
            headers:{
                "Authorization":"Bearer "+getCookie("jwtToken"),
                "Content-Type":"application/json"
            }
        }).then(res=>{
            if(res.status==200){
                console.log("response",res)
            }
        }).catch(err=>{
            console.log("Error",err)
        })
    }

    return(
        <div>
            <h2>Payment</h2>
            <Button onClick={PayAmount}>Pay Now</Button>
        </div>
        
    );
}
export default Payment;