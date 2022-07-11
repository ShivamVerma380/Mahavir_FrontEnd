import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Button ,Container} from "react-bootstrap";
import * as AiIcons from 'react-icons/ai';
import { Navigate, useNavigate } from "react-router-dom";
import Header from "./Header";

const WishlistProducts = () => {
  var modelnums = [];
  var urls = [];
  const [isWishlistFetched, setIsWishlistFetched] = useState(false);
  const [wish, setWish] = useState([]);
  const [product, setProduct] = useState([]);
  const [isProductFetched, setIsProductFetched] = useState(false);

  const navigate = useNavigate();
  function callProductDetails(index){
    //alert(index);
    console.log("Index",index);
    localStorage.setItem("productSelected",index.modelNumber);
    console.log("Product Selected",localStorage.getItem("productSelected"))
    navigate("/productDetails")
  }

  useEffect(() => {
    if (!isWishlistFetched && !isProductFetched) {
      axios({
        method: "get",
        url: "http://localhost:8080/wishlist",
        headers: {
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJraGFyZW9ta2FyOTlAZ21haWwuY29tbW0iLCJleHAiOjE2NTc2MTc5MDgsImlhdCI6MTY1NzUxNzkwOH0.v_DeVJD4Cc77EZ_Kk0heR8tV0G4_vgFjZhvq87kOg3s"
        }
      }).then(function (response) {
        console.log("Response", response);
        if (response.status == 200) {
          console.log("Wishlist response", response.data);
          wish.push(response.data);
          setIsWishlistFetched(true);
          console.log("Wish ", wish);
          // setAddress(response.data);
          // console.log("Address: ", address)
          // setIsAddressFetched(true);

        } else {
          console.log(response.data.message);
        }
      }).catch(function (error) {
        console.log(error);
      })



      //   wish.map(index=>{
      //     console.log("In wish map")
      //     if (index != '') {
      //             urls.push(axios.get("http://localhost:8080/get-products/" + index));
      //           }
      //         })
      //         axios.all(urls).then(
      //           axios.spread((...res) => {
      //             res.map((response) => {
      //               console.log("response", response);
      //               product.push(response.data)

      //             })
      //             // SetLength(product.length);
      //             setIsProductFetched(true);
      //             console.log("Products: ",product);
      // }))
    }

  })

  const RemoveFromWishList=(index)=>{
    var formdata = {
      "modelNumber": index.modelNumber
    }
    
    console.log("Model Num: ",index.modelNumber)
    console.log("Form Data: ",formdata);
  //   const headers = { 
  //     "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJraGFyZW9ta2FyOTlAZ21haWwuY29tbW0iLCJleHAiOjE2NTc2MTc5MDgsImlhdCI6MTY1NzUxNzkwOH0.v_DeVJD4Cc77EZ_Kk0heR8tV0G4_vgFjZhvq87kOg3s"
      
  // };
    axios.delete("http://localhost:8080/wishlist",  {
      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJraGFyZW9ta2FyOTlAZ21haWwuY29tbW0iLCJleHAiOjE2NTc2MTc5MDgsImlhdCI6MTY1NzUxNzkwOH0.v_DeVJD4Cc77EZ_Kk0heR8tV0G4_vgFjZhvq87kOg3s"
        
      }, formdata
    } 
      
      // data: {
      //   "modelNumber": index.modelNumber
      // }
    ).then(function(response){
      if (response.status == 200) {
        console.log("Deleted successfully");
        console.log(response.data)
        // navigate("/");
      }
    }).catch(function (error) {
      console.log("Error", error);
    });

  }


  return (
    <>
      <Header />

      <Container style={{ width: '80%' }}>
        <h1 style={{ color: "rgb(255,98,98)", margin: '2%', padding: '2%' }}><i>My WishList</i></h1>
        {
          (isWishlistFetched) ? (


            wish[0].map(index => {
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
                      <Button variant="flat" size="1" name={index.modelNumber} onClick={()=>RemoveFromWishList(index)} style={{ marginBottom: '10px', width: 150, height: 50 }}>Remove</Button>
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