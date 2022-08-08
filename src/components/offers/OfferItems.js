

import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Card, Button, Container, CardGroup, Form } from "react-bootstrap";

import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../../App.css"
import { AiOutlineHeart, AiTwotoneHeart,AiFillHeart } from "react-icons/ai";
import {useLocation} from 'react-router-dom';
import Header from "../Header";
import {setCookie,getCookie} from '../Cookies';
import { ToastContainer, toast } from 'react-toastify';
import url from "../../Uri";

function OfferItems() {
    var token=getCookie("jwtToken");
    var cart=getCookie("CartModels").split(',');
    const navigate = useNavigate();
    const location = useLocation();
    const [products, setProduct] = useState([]);
    const [isProductsFetched, setIsProductsFetched] = useState(false);
    const [isTimeout, setIsTimeOut] = useState(false);
    var productsArray = [];
    useEffect(() => {
        if (!isProductsFetched) {
            var modelNumbers = localStorage.getItem("offerPostersModelNumber");
            var modelNumbersArray = modelNumbers.split(",");
            console.log("modelNumbersArray: ", modelNumbersArray)
            var urls = []
            modelNumbersArray.map(index => {
                if (index !== "")
                    urls.push(axios.get(url+"/get-products/" + index));
            })
            axios.all(urls).then(axios.spread((...response) => {
                console.log("response: ", response)
                response.map(index => {
                    productsArray.push(index.data);
                }
                )
                setProduct(productsArray);
                setIsProductsFetched(true);
            }
            )).catch(function (error) {
                console.log("error", error);
            }
            )

        }

    }, []);

    const addtocart=(model)=>{
        if(cart.includes(model)){
            alert("Item is already present in cart")
        }
        else{
            console.log("adddd"+model);
            cart.push(model);
            setCookie("CartModels",cart,20);
            alert("Added to cart"+model);
        }  
    }  

    function callProductDetails(index) {
        //alert(index);
        console.log("Index", index);
        localStorage.setItem("productSelected", index.modelNumber);
        console.log("Product Selected", localStorage.getItem("productSelected"))
        navigate("/productDetails")
    }

    function WishlistHandler(index) {
        // alert("Item added successfully to wishlist");
        // console.log(index.modelNumber)
        // if (localStorage.getItem("wishlistproduct")==null) {
        //   localStorage.setItem("wishlistproduct",index.modelNumber)
        // }else {
        //   var arr = localStorage.getItem("wishlistproduct").split(',')
        //   var flag = true;
        //   arr.map(i=>{
           
        //     console.log("i: ",i)
        //     if( i=== index.modelNumber) {
        //         arr.splice(arr.indexOf(i),1)
        //         localStorage.setItem("wishlistproduct",arr)
        //         console.log('del arr: ' + arr)
        //         console.log('del ls: ' + localStorage.getItem("wishlistproduct"))
        //        console.log("in if")
        //       flag = false;
        //     } 
        //   }) 
        //   if(flag)
        //     localStorage.setItem("wishlistproduct",localStorage.getItem("wishlistproduct")+","+index.modelNumber)
        //     navigate('/')
          
        // }
        console.log("Wishlist clicked")
  
        
          var formdata = {
            "modelNumber": index.modelNumber
    
          }
    
          axios.post(url+"/wishlist", formdata, {
            headers: {
              "Authorization": "Bearer "+token,
              "Content-Type": "multipart/form-data"
            }
          }).then(function (response) {
            if (response.status == 200) {
              toast.success(<b>Added to wishlist successfully</b>)  
            //   console.log("Added to wishlist successfully");
              
              console.log(response.data)
              // navigate("/");
            }
          }).catch(function (error) {
            if(error.response.status==406) {
                toast.warn(<b>Item already present in Wishlist</b>)
            //   alert("Item already present in wishlist")
            }
            else {
              console.log("Error", error);
            }
            
          })
     
      }


    var cards = <div>
        <img className="logo_mahavir" src={require('../../assets/images.jpg')} alt="God" />
    </div>

    return (
        <>
       <Header/>
       {
    

        (isProductsFetched) ? (
            <>
            <div>
            <ToastContainer position="top-center"/>
                
                <div className="grid-container">
                {
                    (isTimeout)?
                        cards = products.map(index=>{
                            return(

                                <Card  style={{ width: '25rem'}} onClick={()=>callProductDetails(index)}
                                  className="mb-2">
                                    <Card.Img  variant="top" style={{width:200,height:200,alignSelf:"center"}} src={index.productImage1}/>
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

            <div style={{ fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif ' }}>




                {/* <h1 style={{ color: "rgb(255,98,98", marginLeft: '2%', marginTop: '2%' }}><i>{location.state.name}</i></h1> */}


                {
                    cards = products.map(index => {
                        return (


                            <Row style={{
                                padding: '2%', margin: '2%', backgroundColor: '#fff',
                                borderRadius: '2px',
                                boxShadow: '0 2px 4px 0 rgb(0 0 0 / 8%)'
                            }}>
                                <Col md={2}>
                                    {/* <img  onClick={()=>callProductDetails(index)} style={{height:'80%',width:'100%',cursor:'pointer',justifySelf:'center'}} src={"data:image/png;base64," + index.productImage1.data} /> */}
                                    <img onClick={() => callProductDetails(index)} style={{ height: '80%', width: '100%', cursor: 'pointer', justifySelf: 'center' }} src={index.productImage1} />


                                </Col>
                                <Col md={10} style={{ padding: '2%' }}>
                                    <Row style={{ marginBottom: '1%' }}>
                                        <Col md={11}>
                                            <h3 onClick={() => callProductDetails(index)} style={{ cursor: 'pointer' }}>{index.productName}</h3>
                                        </Col>
                                        <Col md={1}>
                                            {(localStorage.getItem("wishlistproduct") != null && localStorage.getItem("wishlistproduct").includes(index.modelNumber)) ?
                                                <AiFillHeart style={{ marginTop: "10px", marginLeft: "10px", fill: 'rgb(255, 88, 88)' }} className="wishlisticon" size={30} onClick={() => WishlistHandler(index)} /> :
                                                <AiOutlineHeart style={{ marginTop: "10px", marginLeft: "10px" }} className="wishlisticon" size={30} onClick={() => WishlistHandler(index)} />
                                            }
                                        </Col>

                                    </Row>
                                    <Row style={{ marginBottom: '1%' }}>
                                        <Col md={11}>
                                            <h5 >{index.productHighlights}</h5>
                                        </Col>

                                    </Row>
                                    <Row style={{ marginBottom: '1%' }}>
                                        <Col md={10}>
                                            <h4>MSP: <b style={{ marginRight: "20px", color: "rgb(255,98,98)" }}>₹{index.offerPrice}</b> MRP: <b style={{ textDecorationLine: "line-through", textDecorationStyle: "solid" }}>₹{index.productPrice}</b></h4>

                                        </Col>

                                    </Row>

                                    <Row style={{ marginBottom: '2%' }}>
                                        <Form style={{
                                            fontWeight: '700',
                                            fontSize: '150%'
                                        }}>
                                            {/* <Form.Check type="checkbox" label="Add To Compare" onChange={handleAddToCompare} /> */}
                                        </Form>

                                    </Row>

                                    <Row style={{ marginTop: '2%' }}>
                                        <Button onClick={()=>addtocart(index.modelNumber)} style={{ width: '30%', height: '60px', marginLeft: '1%', fontSize: '140%' }} variant="flat" size="1" >Add To Cart</Button>
                                        <Button style={{ width: '30%', height: '60px', marginLeft: '5%', fontSize: '140%' }} variant="flat" size="1"  >Buy Now</Button>

                                    </Row>
                                </Col>


                            </Row>


                        )
                    })}







            </div>
            </>
            
           
        ) : (
            null
        )}

        </>    
    );
}

export default OfferItems;