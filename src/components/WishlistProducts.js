import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Button, Container } from "react-bootstrap";
import * as AiIcons from 'react-icons/ai';
import { Navigate, useNavigate } from "react-router-dom";
import Header from "./Header";
import {getCookie} from "./Cookies";
import Footer from "./Footer/Footer";
import url from "../Uri";


const WishlistProducts = () => {
  
  var token=getCookie("jwtToken");
  var modelnums = [];
  var urls = [];
  const [isWishlistFetched, setIsWishlistFetched] = useState(false);
  const [wish, setWish] = useState([]);
  const [product, setProduct] = useState([]);
  const [isProductFetched, setIsProductFetched] = useState(false);
  const [removeClicked,setRemoveClicked] = useState(false)
  var token=getCookie("jwtToken");
  const navigate = useNavigate();
  function callProductDetails(index) {
    //alert(index);
    console.log("Index", index);
    localStorage.setItem("productSelected", index.modelNumber);
    console.log("Product Selected", localStorage.getItem("productSelected"))
    navigate("/productDetails")
  }

  useEffect(() => {
    if (!isWishlistFetched && !isProductFetched) {
      axios({
        method: "get",
        url: url+"/wishlist",
        headers: {
          "Authorization": "Bearer "+token
        }
      }).then(function (response) {
        console.log("Response", response);
        if (response.status == 200) {
          console.log("Wishlist response", response.data);
          setWish(response.data);
          setIsWishlistFetched(true);
          
          // setAddress(response.data);
          // console.log("Address: ", address)
          // setIsAddressFetched(true);

        } else {
          console.log(response.data.message);
        }
      }).catch(function (error) {
        console.log(error);
      })
      

      


     
    }
    // if (removeClicked) {
    //   axios({
    //     method: "get",
    //     url: "http://localhost:8080/wishlist",
    //     headers: {
    //       "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJraGFyZW9ta2FyOTlAZ21haWwuY29tbW0iLCJleHAiOjE2NTc2MTc5MDgsImlhdCI6MTY1NzUxNzkwOH0.v_DeVJD4Cc77EZ_Kk0heR8tV0G4_vgFjZhvq87kOg3s"
    //     }
    //   }).then(function (response) {
    //     console.log("Response", response);
    //     if (response.status == 200) {
    //       console.log("Wishlist response", response.data);
    //       wish.push(response.data);
    //       setIsWishlistFetched(true);
    //       console.log("Wish ", wish);
    //       // setAddress(response.data);
    //       // console.log("Address: ", address)
    //       // setIsAddressFetched(true);

    //     } else {
    //       console.log(response.data.message);
    //     }
    //   }).catch(function (error) {
    //     console.log(error);
    //   })
    // }

    

  })
  console.log("Wish ", wish);

  const continueShoppingHandler=()=> {
    navigate("/")
  }

  const RemoveFromWishList = (modelnum) => {
    var arr= [];
    console.log("Wish ",wish)
        wish.map(pro=>{
          if(pro.modelNumber!==modelnum) {
            arr.push(pro);
          }
          console.log("i Modelnum ",pro.modelNumber, "Index Modelnum ",modelnum)
        })
        setWish(arr);
        console.log("Arr ",arr)
       
    // localStorage.setItem("RemoveIndex",index.modelNumber);

    // setRemoveClicked(true);
    // var formdata = {
    //   "modelNumber": index.modelNumber
    // }

    // console.log("Model Num: ", index.modelNumber)
    
    // console.log("Form Data: ", formdata);
    //   const headers = { 
    //     "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJraGFyZW9ta2FyOTlAZ21haWwuY29tbW0iLCJleHAiOjE2NTc2MTc5MDgsImlhdCI6MTY1NzUxNzkwOH0.v_DeVJD4Cc77EZ_Kk0heR8tV0G4_vgFjZhvq87kOg3s"

    // };
    axios.delete(url+"/wishlist/" + modelnum, {
      headers: {
        "Authorization": "Bearer "+token

      }
    }

      // data: {
      //   "modelNumber": index.modelNumber
      // }
    ).then(function (response) {
      if (response.status == 200) {
        console.log("Deleted successfully");
        console.log(response.data)
        // setRemoveClicked(true)
        
        // window.location.reload();
        
        // navigate("/");
      }
    }).catch(function (error) {
      console.log("Error", error);
    });
    
    // setWish((products) => products.filter((i) => i !== index.modelNumber));

  }


  return (
    <div>
      <Header />

      <Container style={{ width: '80%'}}>
        
        
        {
          (isWishlistFetched) ? (

            (wish.length>0) ? (
              <>
              <h1 style={{ color: "black", marginTop:"30px", marginBottom:"30px", fontFamily:"typeface-roboto", fontSize:"26px", fontWeight:600 }}>My Wishlist</h1>
              <Container style={{background:"white",paddingTop:"10px", paddingBottom:"10px",border: "2px solid #E2E2E2", borderRadius: '5px', marginBottom:"30px"}}>
              {
              wish.map(index => {
                return (
                  
                    <Col md={12}>
                  <Row style={{margin:"20px", border: "2px solid #E2E2E2", borderRadius: '5px'}}>
                    {/* style={{ margin: '2%', padding: '2%' }} , boxShadow: ' 0 2px 10px #bdbdbd' */}
                    
                    <Col sm={2}>
                      <img src={index.productImage1} style={{ width: '180px', height: '120px',marginTop:"25px" }}></img>
                    </Col>
                    <Col style={{ marginTop: '2%' }} sm={8} >
                    <h5 style={{marginLeft:"15px",letterSpacing: "0.02em",lineHeight:"19px",fontWeight: 500,color: "#000000",fontSize:"20px",marginTop:"34px",fontFamily:"typeface-roboto"}}>{index.productName}</h5>
                      {/* <br></br>
                      <h5>MSP: <b style={{ marginRight: "20px", color: "rgb(255,98,98)" }}>₹{index.offerPrice}</b> MRP: <b style={{ textDecorationLine: "line-through", textDecorationStyle: "solid" }}>₹{index.productPrice}</b></h5> */}
                      <br></br>
                    <Row>
                    {
                                                  (index.productPrice === index.offerPrice) ? (<h4>₹ {index.productPrice}</h4>) : (
                                                      <h4 style={{marginLeft:"15px",marginTop:"-15px"}}><b style={{ marginRight: "20px", color: "#C10000" , fontSize:"20px"}}>₹{index.offerPrice}</b><b style={{ color:"rgba(45, 45, 45, 0.8)",textDecorationLine: "line-through",fontSize:"16px", textDecorationStyle: "solid" }}>₹ {index.productPrice}</b> <b style={{color:"#C10000",fontSize:"15px",lineHeight:"15px",marginLeft:"8px"}}>{Math.round((index.productPrice-index.offerPrice)*100/index.productPrice)}% off</b></h4>
                                                  )
                                              }
                    </Row>
                    </Col>
  
                    <Col style={{ padding: '3%' }} sm={2} >
                      <Row>
                        <Button  size="1" name={index.modelNumber} onClick={() => RemoveFromWishList(index.modelNumber)} style={{ marginBottom: '10px', width: 150, height: 50, background:"#C10000", border:"none" }}>Remove</Button>
                      </Row>
                      <Row>
                        <Button  size="1" style={{ width: 150, height: 50, background:"#C10000", border:"none" }}>Add To Cart</Button>
                      </Row>
  
                    </Col>
                  </Row>
                  </Col>
                  
                );
              })
            }
            </Container>
            </>
            ) : (

                <center>
                <img src="https://github.com/ShivamVerma380/MahavirImages/blob/main/VectorImg/emptywishlistvectorimg.png?raw=true" style={{height:"260px",width:"260px"}}/>
                <br></br>
                <h5 style={{fontWeight:600, fontSize:"20px", lineHeight:"23px", letterSpacing:"0.02em"}}>Oops! Your wishlist looks empty</h5>
                <Row>
                  <Col md={3}></Col>
                  <Col md={6}>
                  <p style={{fontWeight:500, fontSize:"18px", lineHeight:"23px", letterSpacing:"0.02em", color:"rgba(0,0,0,0.5)"}}>Create your own wishlist with your favourites & share with your friends and loved ones!</p>
                  </Col>
                </Row>
                <br></br>
                <Button onClick={()=>continueShoppingHandler()} style={{background:"#C10000",border:"none",padding:"16px",fontSize:"14px",lineHeight:"14px",borderRadius:"5px",marginBottom:"20px"}}>CONTINUE SHOPPING</Button>
                
                
                </center>
                
            )
            
            
          ) : (null)

        }
        
      </Container>
    
      <Footer/>
    </div>

  )
}
export default WishlistProducts;