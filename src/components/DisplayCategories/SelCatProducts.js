import { margin } from "@mui/system";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
<<<<<<< HEAD
import {Card,Button, Container, CardGroup} from "react-bootstrap";
import Header from "../Header";
import CategoriesToDisplay from "./CategoriesToDisplay";
=======
import {Card,Button, Container, CardGroup,Form} from "react-bootstrap";

>>>>>>> 06f552775bc0467b6d27db42be7aafbd65aad7a7
import { Row,Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../../App.css"

import Carousel from 'react-bootstrap/Carousel';
import NavbarOffcanvas from "react-bootstrap/esm/NavbarOffcanvas";

const SelCatProducts=()=>{

    const navigate = useNavigate();

    const [products,setProduct]= useState([]);
    const [isProductsFetched,setIsProductsFetched] = useState(false);
    const [isTimeout,setIsTimeOut] = useState(false);
    var productsArray=[];

    const [offerPosters,setOfferPosters] = useState([]);
    const [isOfferPostersFetched,setIsOfferPostersFetched] = useState(false);

    console.log(localStorage.getItem("Category"));

    //var token = localStorage.getItem("token");
    //var token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzaGl2YW1AZ21haWwuY29tbW1zc2QiLCJleHAiOjE2NTQ1ODYxNTgsImlhdCI6MTY1NDQ4NjE1OH0.BlxfpMI8rlFhna4lcqm_iZ6wyZlrX079KstVV8wv380";
    var offerPoster = <div>
        <img className="logo_mahavir" src={require ('../../assets/images.jpg')} alt="Mandala" />
      </div>

    
    
    const handleOfferPosterOnClick=(modelNumbers)=>{
      // alert("Offer Poster clicked");

      console.log(modelNumbers);
      localStorage.setItem("offerPostersModelNumber",modelNumbers)
      console.log(localStorage.getItem("offerPostersModelNumber"))
      navigate("/offers")
    }

    
    useEffect(()=>{
        if(!isOfferPostersFetched){
            axios({
              method:"get",
              url:"http://localhost:8080/get-offers-by-category/"+localStorage.getItem("Category"),
              
            }).then(function(response){
              console.log(response);
              if(response.status==200){
                setOfferPosters(response.data);
                setIsOfferPostersFetched(true);
                console.log("OfferPosters",offerPosters);
              }
            }).catch(function(error){
              console.log("error",error);
            })
          }

        if(!isProductsFetched){
            var modelNumbers = localStorage.getItem("Model Number").split(',');
        console.log("Model Number",modelNumbers);
        
        modelNumbers.map(modelNum=>{
            console.log("Model Num",modelNum);

            axios({
            method:"get",
            url:"http://localhost:8080/get-products/"+modelNum,
                
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
                    <Header/>
                    
                    <Carousel>
                    {
                        (isOfferPostersFetched)?(
                            offerPoster= offerPosters.map(index=>{
                                //let Base64string = Buffer.from(index.image.data,"base64").toString();
                                
                                console.log("image",index.image.data);
                                // var imgsrc = String.format("data:image/jpg;base64,{0}",index.image.data);
                                return(
                                    <Carousel.Item interval={1000} onClick={()=>handleOfferPosterOnClick(index.modelNumbers)}>
                                    <img id = "classname" 
                                    className="d-block w-100"
                                    src={"data:image/png;base64," + index.image.data}
                                    alt={index.alt}
                                    height={500}
                                    />                    
                                    </Carousel.Item>
                                  
                                )
                
                            })
                        ):(
                            
                            null
                            
                        )
                    }
                    </Carousel>
                    {
                        setTimeout
                    }
                    <center>
                    <div className="container">
                    
                                    <Row> 
                    {
                        (isTimeout)?
                            cards = products.map(index=>{
                                return(
                                    
                                    <Card  style={{ width: '15rem'}} onClick={()=>callProductDetails(index)}
                                      className="mb-2">
                                        <Card.Img  variant="top" style={{width:200,height:150,alignSelf:"center"}} src={"data:image/png;base64," + index.productImage1.data}/>
                                        <Card.Body>
                                        <Card.Title as="h6">{index.productName}</Card.Title>
                                        <Card.Text>
                                        {index.productDescription}
                                        <br></br><br></br><strong>Rs {index.productPrice}</strong>
                                        </Card.Text>
                                        
                                        <Form>
                                            <Form.Check type="checkbox" id = "default-checkbox" label = "Add To Compare"/>
                                        </Form>
                                        <Button variant="flat" size="1">Buy</Button>
                                      </Card.Body>
                                  </Card>
                                  
                                )
                              }):(null)
                    }
                    </Row>  
                    </div>
                    </center>
                </div>
            ):(
                <h1>Product Not Fetched</h1>
            )
            
        
    );

}

export default SelCatProducts;