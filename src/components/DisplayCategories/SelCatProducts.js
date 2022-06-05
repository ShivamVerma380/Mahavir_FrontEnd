import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import {Card,Button} from "react-bootstrap";
import { CardGroup } from "reactstrap";

const SelCatProducts=()=>{

    const [products,setProduct]= useState([]);
    const [isProductsFetched,setIsProductsFetched] = useState(false);
    const [isTimeout,setIsTimeOut] = useState(false);
    var productsArray=[];
    useEffect(()=>{
        if(!isProductsFetched){
            var modelNumbers = localStorage.getItem("Model Number").split(',');
        console.log("Model Number",modelNumbers);
        var token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhMkJWY2RAZmRlZmVkczUiLCJleHAiOjE2NTQ0OTM1MzIsImlhdCI6MTY1NDQwNzEzMn0.JGhrTWsQydPivuLV8tUuk6Ak3G94PceelttxEmKLc0s"
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

    var cards=<div>
        <img className="logo_mahavir" src={require ('../../assets/images.jpg')} alt="God" />
    </div>

    return(
            
            (isProductsFetched)?(
                
                <div>
                    {
                        setTimeout
                    }
                    {
                        (isTimeout)?
                            cards = products.map(index=>{
                                return(
                                  <Card  style={{ width: '25rem' }}
                                      className="mb-2"
                                       >
                                        <Card.Img  variant="top" src={"data:image/png;base64," + index.productImage1.data}/>
                                   
                                        <Card.Body >
                                        <Card.Title as="h6">{index.productName}</Card.Title>
                                        <Card.Text >
                                        {index.productDescription}
                                        <br></br>Rs {index.productPrice}
                                        </Card.Text>
                                        <Button variant="flat" size="l" >Buy</Button>
                                      </Card.Body>
                    
                                      
                                  </Card>
                                   
                                )
                              }):(null)
                    }
                </div>
            ):(
                <h1>Product Not Fetched</h1>
            )
            
        
    );

}

export default SelCatProducts;