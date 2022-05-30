import axios from "axios";
import React, { useEffect, useState }  from "react";
import OrderItem from "./OrderItem";

const MyOrders=()=>{
    var token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZGl0aXJuaWthbTIxQGdtYWlsLmNvbSIsImV4cCI6MTY1NDAxNDkzNywiaWF0IjoxNjUzOTI4NTM3fQ._DBvi2b9nGOb0hOt-Th-Ii0zXZ1lwVgPfdZeRMud7dw"
    const [orderDetails,setOrderDetails] = useState();
    const [isOrderDetailsSet,setIsOrderDetailsSet] = useState(false);
    useEffect(()=>{
        axios({
            method:"get",
            url: "http://localhost:8080/get-bought-products",
            headers:{
                "Authorization":"Bearer "+token
            }
        }).then(function(response){
            console.log(response);
            if(response.status==200){
                console.log(response.data);
                setOrderDetails(response.data);
                setIsOrderDetailsSet(true);
            }else{
                console.log(response.data.message);
            }
        }).catch(function(error){
            console.log(error);
        })
    },[]);

    return(
        <div>
            <h1>MyOrders</h1>
            {
                (isOrderDetailsSet)?(
                orderDetails.map(index=>{
                    console.log("Model Number:",index.modelNumber)
                    return(
                    <OrderItem item={index}/>
                    );
                })
                ):(null)
            }
        </div>
    );
}

export default MyOrders;