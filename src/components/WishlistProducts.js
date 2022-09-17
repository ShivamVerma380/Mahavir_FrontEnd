import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Button, Container ,Image} from "react-bootstrap";
import * as AiIcons from 'react-icons/ai';
import { Navigate, useNavigate } from "react-router-dom";
import Header from "./Header";
import {getCookie, setCookie} from "./Cookies";
import Footer from "./Footer/Footer";
import url from "../Uri";
import './Wishlist.css';
import { toast, ToastContainer } from "react-toastify";

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

  var cart = [];
  if(getCookie("CartModels")!=null){
    cart = getCookie("CartModels").split(',');
  }

  const AddToCart = (index) => {
    var flag = false;
    cart.map(i=>{
      if(i!=""){
        if(i.split("=")[0]===index.modelNumber){
          flag = true;
          toast.warn("Item is already present in cart")
        }
      }
    })
    // if (cart.has(model+"=1")) {
    //   alert("Item is already present in cart")
    // }
    if(!flag){
      // console.log("adddd" + index);
      cart.push(index.modelNumber+"=1");
      setCookie("CartModels", cart, 20);
      // console.log("Cart Models",cart)
      navigate("/cart")
      // alert("Added to cart" + model);
    }
  }


  // function callProductDetails(index) {
  //   //alert(index);
  //   console.log("Index", index);
  //   localStorage.setItem("productSelected", index.modelNumber);
  //   console.log("Product Selected", localStorage.getItem("productSelected"))
  //   navigate("/productDetails")
  // }

  function callProductDetails(index) {
    //alert(index);
    // console.log("Index",index);
    localStorage.setItem("productId",index.productId);
    localStorage.setItem("productSelected", index.modelNumber);
    localStorage.removeItem("SubCategory")
    localStorage.removeItem("SubSubCategory")
    // console.log("Product Selected",localStorage.getItem("productSelected"))
    navigate("/productDetails")
}

  useEffect(() => {
    window.scrollTo(0,0)
    if (!isWishlistFetched && !isProductFetched) {
      axios({
        method: "get",
        url: url+"/wishlist",
        headers: {
          "Authorization": "Bearer "+token
        }
      }).then(function (response) {
        // console.log("Response", response);
        if (response.status == 200) {
          // console.log("Wishlist response", response.data);
          setWish([...response.data].reverse()); 
          setIsWishlistFetched(true);

          
          // setAddress(response.data);
          // console.log("Address: ", address)
          // setIsAddressFetched(true);

        } else {
          console.log(response.data.message);
        }
      }).catch(function (error) {
        console.log("error");
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
  // console.log("Wish ", wish);

  const continueShoppingHandler=()=> {
    navigate("/")
  }

  const RemoveFromWishList = (modelnum) => {
    // var arr= [];
    // console.log("Wish ",wish)
    //     wish.map(pro=>{
    //       if(pro.modelNumber!==modelnum) {
    //         arr.push(pro);
    //       }
    //       console.log("i Modelnum ",pro.modelNumber, "Index Modelnum ",modelnum)
    //     })
    //     setWish(arr);
    //     console.log("Arr ",arr)
       
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
    var form_data_body={
      "modelNumber": modelnum
    }
    axios.post(url+"/delete-wishlist",form_data_body, {
      headers: {
        "Authorization": "Bearer "+token,
        "Content-Type": "multipart/form-data"

      }
    }

      // data: {
      //   "modelNumber": index.modelNumber
      // }
    ).then(function (response) {
      if (response.status == 200) {
        // console.log("Deleted successfully");
        // console.log(response.data)
        // setRemoveClicked(true)
        
        window.location.reload();
        
        // navigate("/");
      }
    }).catch(function (error) {
      console.log("Error");
    });
    
    // setWish((products) => products.filter((i) => i !== index.modelNumber));

  }



  return (
    <div>
      <ToastContainer position="top-center" />
      <body style={{background:"whitesmoke"}}>
      <Header />

      <Container className="wishlist_container" style={{background:"white"}}>
        
        
        {
          (isWishlistFetched) ? (

            (wish.length>0) ? (
              <>
              
              <h1 className="wishlist_heading">My Wishlist</h1>
              <hr></hr>
              <Container >
              {
              wish.map(index => {
                return (
                  <>
                  <Row className="wishlist_product_card">
                    {/* style={{ margin: '2%', padding: '2%' }} , boxShadow: ' 0 2px 10px #bdbdbd' */}
                    
                    <Col sm={2} style={{padding:'1%'}}>
                      <Image fluid='true' onClick={() => callProductDetails(index)} src={index.productImage1} style={{cursor:"pointer" }}></Image>
                    </Col>
                    <Col style={{ display:'flex',alignItems:'center' }} sm={8} >

                    <Row>
                    <h5 className="wishlist_product_title">{index.productName}</h5>

                    {
                      (index.productPrice === index.offerPrice) ? (<h4>₹ {index.productPrice}</h4>) : (
                          <h4><b className="wishlist_offerprice" >₹{index.offerPrice} </b> <b className="wishlist_productprice"> ₹ {index.productPrice}</b> <b className="wishlist_discount"> {Math.round((index.productPrice-index.offerPrice)*100/index.productPrice)}% off</b></h4>
                      )
                     }
                    </Row>
                    </Col>
  
                    <Col className="wishlist_lastcol" style={{ padding: '2%' }} sm={2} >
                      
                      <Row>
                        <Button  size="1" name={index.modelNumber} onClick={() => RemoveFromWishList(index.modelNumber)} >Remove</Button>
                      </Row>
                      <Row>
                        <Button  size="1"  onClick={()=>AddToCart(index)}>Add To Cart</Button>
                      </Row>
  
                    </Col>
                  </Row>
                  <hr></hr>
                  </>
                  
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
      </body>
    </div>

  )
}
export default WishlistProducts;