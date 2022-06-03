import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

const SelCatProducts=()=>{

    const [products,setProduct]= useState([]);
    const [isProductsFetched,setIsProductsFetched] = useState(false);
    
    var productsArray=[];
    useEffect(()=>{
        if(!isProductsFetched){
            var modelNumbers = localStorage.getItem("Model Number").split(',');
        console.log("Model Number",modelNumbers);
        var token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhMkJWY2RAZmRlZmUiLCJleHAiOjE2NTQzMzY5ODUsImlhdCI6MTY1NDI1MDU4NX0.D9mBqXow48LegJBjCZfrRk7jWnmU8P715w-eM-GI_kE"
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
                        products.map((index)=>{
                            return(
                                <h1>{index.productName}</h1>
                            )
                        })
                    }
                </div>
            ):(
                <h1>Product Not Fetched</h1>
            )
        
        
    );

}

export default SelCatProducts;