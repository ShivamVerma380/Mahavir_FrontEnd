import { margin } from "@mui/system";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import {Card,Button, Container, CardGroup,Form} from "react-bootstrap";

import { Row,Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../styles.css"

import Carousel from 'react-bootstrap/Carousel';
import Header from "../Header";
import NavbarOffcanvas from "react-bootstrap/esm/NavbarOffcanvas";


var modelNumsToCompare = new Set();

const SelCatProducts=()=>{

    const navigate = useNavigate();

    const [products,setProduct]= useState([]);
    const [isProductsFetched,setIsProductsFetched] = useState(false);
    const [isTimeout,setIsTimeOut] = useState(false);
    var productsArray=[];

    const [offerPosters,setOfferPosters] = useState([]);
    const [isOfferPostersFetched,setIsOfferPostersFetched] = useState(false);

    console.log(localStorage.getItem("Category"));


    const [isAddCompareClicked, setisAddCompareClicked] = useState(false);
    const [change, setChange] = useState(0);
    
   


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

    const CompareHandler=()=> {
        
        

        //navigate("/compareproducts")
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

    const handleAddToCompare=event=>{
        if (event.target.checked) {

            //console.log('✅ Checkbox is checked');
            setChange(change+1)
            
            console.log("Value",event.target.value);
            modelNumsToCompare.add(event.target.value);
            alert(event.target.value)
            console.log("ModelNumbers",modelNumsToCompare)
          } else {
            console.log('⛔️ Checkbox is NOT checked');
            setChange(change-1)
            modelNumsToCompare.delete(event.target.value);

            console.log("ModelNumbers",modelNumsToCompare)
          }

        var str="";
        modelNumsToCompare.forEach(element=>{
            //console.log(element);
            str +=  element + ",";
        })
        str = str.slice(0,str.length-1);
        console.log(str);
        localStorage.setItem("CompareModels",str);
        setisAddCompareClicked(current => !current);
    }

    return(


            
            (isProductsFetched)?(
                
                <div>
                    <Header/>
                    
                    <Carousel>
                    {
                        (isOfferPostersFetched)?(
                            offerPoster= offerPosters.map(index=>{
                                //let Base64string = Buffer.from(index.image.data,"base64").toString();
                                
                                //console.log("image",index.image.data);
                                // var imgsrc = String.format("data:image/jpg;base64,{0}",index.image.data);
                                return(
                                    <Carousel.Item interval={1000} onClick={()=>handleOfferPosterOnClick(index.modelNumber)}>
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
                                    
                                    <Card  style={{ width: '15rem'}} 
                                      className="mb-2">
                                        <Card.Img  variant="top" style={{width:200,height:150,alignSelf:"center"}} src={"data:image/png;base64," + index.productImage1.data} onClick={()=>callProductDetails(index)}/>
                                        <Card.Body>
                                        <Card.Title as="h6" onClick={()=>callProductDetails(index)}>{index.productName}</Card.Title>
                                        <Card.Text onClick={()=>callProductDetails(index)}>
                                        {index.productDescription}
                                        <br></br><br></br><strong>Rs {index.productPrice}</strong>
                                        </Card.Text>
                                        
                                        <Form>
                                            <Form.Check type="checkbox" label = "Add To Compare" value={index.modelNumber} onChange={handleAddToCompare}/>
                                        </Form>
                                        <br></br>
                                        <Button variant="flat" size="1">Buy</Button>
                                      </Card.Body>
                                  </Card>
                                  
                                )
                              }):(null)
                    }
                    {
                        
                            (change>0)?(
                             
                                <Button id="comparebtn" onClick={CompareHandler}>Compare{change}</Button>
                              
                              
                            ):(
                              <Button id="comparebtn" style={{visibility:"hidden"}}>Compare{change}</Button>
                              
                              
                            )
                          
                    }
                    </Row>  
                    </div>
                    </center>
                </div>
            ):(
                <h1>Product Not Fetched</h1>
            )
            
                // (change>0)?(
                 
                //     <Button id="comparebtn" onClick={CompareHandler}>Compare{change}</Button>
                  
                  
                // ):(
                //   <Button id="comparebtn" style={{visibility:"hidden"}}>Compare{change}</Button>
                  
                  
                // )
        
            
        
    );

}

export default SelCatProducts;