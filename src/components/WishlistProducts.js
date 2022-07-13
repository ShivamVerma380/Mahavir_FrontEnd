import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Button, Container } from "react-bootstrap";
import * as AiIcons from 'react-icons/ai';
import { Navigate, useNavigate } from "react-router-dom";
import Header from "./Header";
import {getCookie} from '../components/Cookies';
const WishlistProducts = () => {
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
        url: "/wishlist",
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
    axios.delete("/wishlist/" + modelnum, {
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
    <>
      <Header />

      <Container style={{ width: '80%' }}>
        <h1 style={{ color: "rgb(255,98,98)", margin: '2%', padding: '2%' }}><i>My WishList</i></h1>
        {
          (isWishlistFetched) ? (


            wish.map(index => {
              return (
                <Row style={{ margin: '2%', padding: '2%', border: "1px solid black", borderRadius: '5px', boxShadow: ' 0 2px 10px #bdbdbd' }}>
                  <Col sm={3}>
                    <img src={index.productImage1} style={{ width: '100%', height: '100%' }}></img>
                  </Col>
                  <Col style={{ marginTop: '2%' }} sm={6} >
                    <h3 style={{ cursor: 'pointer' }} onClick={() => callProductDetails(index)}>{index.productName}</h3>
                    <br></br>
                    <h5>MSP: <b style={{ marginRight: "20px", color: "rgb(255,98,98)" }}>₹{index.offerPrice}</b> MRP: <b style={{ textDecorationLine: "line-through", textDecorationStyle: "solid" }}>₹{index.productPrice}</b></h5>

                  </Col>
                  <Col style={{ padding: '3%' }} sm={3} >
                    <Row>
                      <Button variant="flat" size="1" name={index.modelNumber} onClick={() => RemoveFromWishList(index.modelNumber)} style={{ marginBottom: '10px', width: 150, height: 50 }}>Remove</Button>
                    </Row>
                    <Row>
                      <Button variant="flat" size="1" style={{ width: 150, height: 50 }}>Add To Cart</Button>
                    </Row>

                  </Col>
                </Row>
              );
            })

          ) : (null)

        }
      </Container>
    </>
  )
}
export default WishlistProducts;