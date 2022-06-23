import axios from "axios";
import React, { useEffect, useState }  from "react";
import OrderItem from "./OrderItem";

const MyOrders=()=>{
    //var token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhMkJWY2RAZmRlZmVkcyIsImV4cCI6MTY1NDQ0MzIwNSwiaWF0IjoxNjU0MzU2ODA1fQ.-6GCm7hIQrDj3U08zwPGe5rqEpDyVYAQrH69PHlcC14"
    //var token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhQGIuY2NjY2NjY2NqaGRoZCxzaGl2YW1AdmVybWEuY29tand3ZCIsImV4cCI6MTY1NDAxOTA1NywiaWF0IjoxNjUzOTMyNjU3fQ.Ma7RU2CHo-RfQ_uSBHn4zxKzlyz5X0I9ZClMXIaY0oc";
    var token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhQGdtYWlsLmNvbW1ubSIsImV4cCI6MTY1NTg0MzIyMCwiaWF0IjoxNjU1NzQzMjIwfQ.HWDPYrA71R1jOeHhn2sOZjseFt-0fKW92CL1iZIzkvI";
    const [orderDetails,setOrderDetails] = useState();
    const [isOrderDetailsSet,setIsOrderDetailsSet] = useState(false);
    var MyOrders = false;
    useEffect(()=>{
        axios({
            method:"get",
            url: "http://localhost:8080/get-bought-products",
            headers:{
                "Authorization":"Bearer "+token
            },
            mode:"no-cors"
        }).then(function(response){
            console.log(response);
            if(response.status==200){
                MyOrders=true
                console.log(response.data);
                setOrderDetails(response.data);
                setIsOrderDetailsSet(true);
            }else if(response.status==404){
               MyOrders = false;
            }   
            else{
                // setMyOrders("No Products buyed yet");
                console.log(response.data.message);
            }
        }).catch(function(error){
            console.log(error);
        })
    },[]);

    return(
        // <div>
            
        //     {(MyOrders)?(<h1>No Products Buyed</h1>):(<h1>Products Buyed</h1>)}
            
        //     {
        //         (isOrderDetailsSet)?(

                    
                        
        //             orderDetails.map(index=>{
        //             console.log("Model Number:",index.modelNumber)
        //             return(    
        //                 <OrderItem item={index}/>
        //             );
        //         })
        //         ):(
        //             null
        //         )
        //     }
        // </div>
        <div>
            {/* {
            (isOrderDetailsSet)?(
            (MyOrders)?(<h1>No Products Buyed</h1>):(<h1>Products Buyed</h1>)
            ):(
                    <h1>No Products buyed</h1>
            )} */}
            {
                (isOrderDetailsSet)?(

                    
                        
                    orderDetails.map(index=>{
                    console.log("Model Number:",index.modelNumber)
                    return(    
                        <OrderItem item={index}/>
                    );
                })
                ):(
                    null
                )
            }
        </div>
    );
}

export default MyOrders;