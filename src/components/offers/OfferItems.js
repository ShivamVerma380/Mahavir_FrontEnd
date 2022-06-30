

import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import {Card,Button, Container, CardGroup} from "react-bootstrap";

import { Row,Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../../App.css"

function OfferItems(){

    const navigate = useNavigate();

    const [products,setProduct]= useState([]);
    const [isProductsFetched,setIsProductsFetched] = useState(false);
    const [isTimeout,setIsTimeOut] = useState(false);
    var productsArray=[];
    useEffect(()=>{
        if(!isProductsFetched){
            var modelNumbers = localStorage.getItem("offerPostersModelNumber");
            var modelNumbersArray = modelNumbers.split(",");
            console.log("modelNumbersArray: ",modelNumbersArray)
            var urls=[]
            modelNumbersArray.map(index=>{
                if(index!=="")
                    urls.push(axios.get("http://localhost:8080/get-products/"+index));
            })
            axios.all(urls).then(axios.spread((...response) => {
                console.log("response: ",response)
                response.map(index=>{
                    productsArray.push(index.data);
                }
                )
                setProduct(productsArray);
                setIsProductsFetched(true);
            }
            )).catch(function(error){
                console.log("error",error);
            }
            )
       
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
                                        <Card.Img  variant="top" style={{width:200,height:200,alignSelf:"center"}} src={"data:image/jpg;base64," + index.productImage1.data}/>
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
                null
            )
            
        
    );
}

export default OfferItems;