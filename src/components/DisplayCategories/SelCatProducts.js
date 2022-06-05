import { margin } from "@mui/system";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import {Card,Button, Container, CardGroup} from "react-bootstrap";

import { Row,Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../../App.css"

const SelCatProducts=()=>{

    const navigate = useNavigate();

    const [products,setProduct]= useState([]);
    const [isProductsFetched,setIsProductsFetched] = useState(false);
    const [isTimeout,setIsTimeOut] = useState(false);
    var productsArray=[];
    useEffect(()=>{
        if(!isProductsFetched){
            var modelNumbers = localStorage.getItem("Model Number").split(',');
        console.log("Model Number",modelNumbers);
        //var token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhQGIuY2NjY2NjY2NqaGRoZGJiIiwiZXhwIjoxNjU0NDkxNDM5LCJpYXQiOjE2NTQ0MDUwMzl9.3flBid8HVAumobtPRhR65GSvnTpTMNCZ0GEeMAa3FAY"
        var token = localStorage.getItem("jwtToken");
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

    function callProductDetails(index){
        //alert(index);
        console.log("Index",index);
        localStorage.setItem("productSelected",index.modelNumber);
        console.log("Product Selected",localStorage.getItem("productSelected"))
        navigate("/productDetails")
      }
  

    var cards=<div>
        <img className="logo_mahavir" src={require ('../../assets/images.jpg')} alt="God" />
    </div>

    return(
            
            (isProductsFetched)?(
                
                <div>
                    {
                        setTimeout
                    }
                    <div className="grid-container">
                    {
                        (isTimeout)?
                            cards = products.map(index=>{
                                return(
                                    
                                    <Card  style={{ width: '25rem'}} onClick={()=>callProductDetails(index)}
                                      className="mb-2">
                                        <Card.Img  variant="top" style={{width:200,height:200,alignSelf:"center"}} src={"data:image/png;base64," + index.productImage1.data}/>
                                        <Card.Body>
                                        <Card.Title as="h6">{index.productName}</Card.Title>
                                        <Card.Text>
                                        {index.productDescription}
                                        <br></br>Rs {index.productPrice}
                                        </Card.Text>
                                        <Button variant="flat" size="1">Buy</Button>
                                      </Card.Body>
                                  </Card>
                                  
                                )
                              }):(null)
                    }
                    </div>
                </div>
            ):(
                <h1>Product Not Fetched</h1>
            )
            
        
    );

}

export default SelCatProducts;