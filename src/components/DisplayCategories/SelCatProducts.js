import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

const SelCatProducts=()=>{

    const [products,setProduct]= useState([]);
    const [isProductsFetched,setIsProductsFetched] = useState(false);
    const [isTimeout,setIsTimeOut] = useState(false);
    var productsArray=[];
    useEffect(()=>{
        if(!isProductsFetched){
            var modelNumbers = localStorage.getItem("Model Number").split(',');
        console.log("Model Number",modelNumbers);
        var token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhQGIuY2NjY2NjY2NqaGRoZGJiIiwiZXhwIjoxNjU0NDkxNDM5LCJpYXQiOjE2NTQ0MDUwMzl9.3flBid8HVAumobtPRhR65GSvnTpTMNCZ0GEeMAa3FAY"
        modelNumbers.map(modelNum=>{
            console.log("Model Num",modelNum);

            axios({
            method:"get",
            url:"http://localhost:8080/get-products/"+modelNum,
            headers:{
            "Authorization":"Bearer "+token,
            }
            }).then(function(response){
                console.log(response);
                if(response.status==200){
                    //console.log("response data",response.data);
                    productsArray.push(response.data);
                    products.push(response.data);
                }
            }).catch(function(error){
                console.log("error",error);
            })
            console.log("Products array",productsArray);
            setProduct(productsArray);
            setIsProductsFetched(true);
            })
        }
        
    },[]);

    setTimeout(() => {
        console.log('Hello, World!')
        setIsTimeOut(true);
    },500)

    return(
        // (isProductsFetched)?(
        //     <div>
        //         <p>Hello World</p>
        //     </div>
        // ):(
        //     <h1>Products Not Fetched</h1>
        // )
        
            (isProductsFetched)?(
                
                <div>
                    {
                        setTimeout
                    }
                    {
                        (isTimeout)?
                        (products.map((index)=>{
                            return(
                                <h1>{index.productName}</h1>
                            )
                        })):(null)
                    }
                </div>
            ):(
                <h1>Product Not Fetched</h1>
            )
        
        
    );

}

export default SelCatProducts;