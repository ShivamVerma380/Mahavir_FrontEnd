import { Button, Col, Container, Input, Row } from "reactstrap";

import Zoom from "react-img-zoom";
import "./ProductDetails.css"
import { AiOutlineMinus } from "react-icons/fa"
import { useNavigate } from "react-router-dom";
import ReactImageMagnify from 'react-image-magnify';
import watchImg1200 from '../../assets/watch.jpg'
import watchImg300 from '../../assets/watch300.jpg'
import React, { useEffect, useState } from "react";
import { ImageList, Slider } from "@mui/material";

import * as AiIcons from 'react-icons/ai';
import { CProgress, CProgressBar } from '@coreui/react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../styles.css"

import axios from "axios";


// import required modules
import { Pagination, Navigation } from "swiper";
import { Card,CardImg, CardBody, CardTitle,CardSubtitle, CardText } from "reactstrap";



import ProductRating from "./ProductRating";
import UserReviewRating from "./UserReviewRating";
const ProductDetails = () => {
  // let name = localStorage.getItem("Name")
  // var storedProduct = JSON.parse(localStorage.getItem("product"))
  // var id = storedProduct[0].id

  var quantity = 0;
  var flag = false;

  const [product,setProduct] = useState([]);
  const [isProductFetched,setIsProductFetched]= useState(false);

  useEffect(()=>{
    var token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhQGIuY2NjY2NjY2NqaGRoZCxzaGl2YW1AdmVybWEuY29tand3ZHNpc3MiLCJleHAiOjE2NTQyNTIzMTIsImlhdCI6MTY1NDE2NTkxMn0.Jml6S8bTMq7X1cfmvSKP7qW_Kv6yRkl1F-t-TopSyKI"
    axios({
      method:"get",
      url:"http://localhost:8080/get-products/"+localStorage.getItem("productSelected"),
      headers:{
        "Authorization":"Bearer "+token,
      }
    }).then(function(response){
      console.log(response);
      if(response.status==200){
        setProduct(response.data);
        setIsProductFetched(true);
        console.log("Product Detail",product);
      }
    }).catch(function(error){
      console.log("error",error);
    })
  },[]);


  var products =
  {
    "id": 1,
    // "src": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-11-pro-midnight-green-2019?wid=1360&hei=2000&fmt=jpeg&qlt=95&.v=1611101526000",
    // "imgone": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-11-pro-midnight-green-2019?wid=1360&hei=2000&fmt=jpeg&qlt=95&.v=1611101526000",
    "imgone": "https://d2xamzlzrdbdbn.cloudfront.net/products/4e7b28c3-4db3-4097-ab92-65d0166a651821170544.jpg",
    "imgtwo": "https://d2xamzlzrdbdbn.cloudfront.net/products/5f3944c6-f695-4c02-ab76-7b486cc95ef321170544.jpg",
    "imgthree": "https://d2xamzlzrdbdbn.cloudfront.net/products/84cae684-56d7-4136-b506-494f2e497a9421170544.jpg",
    "imgfour": "https://d2xamzlzrdbdbn.cloudfront.net/products/2ebe097c-f7d7-4f60-9d0d-541ea6a083b321170544.jpg",
    "imgfive": "https://d2xamzlzrdbdbn.cloudfront.net/products/77adc54b-83a8-44fd-9ed4-61eb87c86aad21170544.jpg",
    "alt": "Offer Name:1",
    "title": "Apple iPhone 13 Pro Max (128 GB Storage, Graphite)",
    "price": 120000,
    "description": "iOS 15 Operating System"
  }

  var productList = [
    {
      "id":1,
      "src":"https://m.media-amazon.com/images/I/61YVqHdFRxL._AC_SL1322_.jpg",
      "alt":"Offer Name:1",
      "title":"OnePlus Nord CE 2 Lite 5G (6 GB RAM, 128 GB ROM, Blue Tide)",
      "price":19999,
      "description":"OxygenOS based on Android™ 12"
  },{
    "id":2,
    "src":"https://m.media-amazon.com/images/I/61YVqHdFRxL._AC_SL1322_.jpg",
    "alt":"Offer Name:2",
    "title":"OnePlus 10 Pro 5G (8 GB RAM, 128 GB ROM, Volcanic Black",
    "price":65999,
    "description":"OxygenOS based on Android™ 12"
},{
  "id":3,
  "src":"https://m.media-amazon.com/images/I/61YVqHdFRxL._AC_SL1322_.jpg",
  "alt":"Offer Name:3",
  "title":"OnePlus Nord CE 2 Lite 5G (6 GB RAM, 128 GB ROM, Blue Tide)",
  "price":19999,
  "description":"OxygenOS based on Android™ 12"
}, {
  "id":4,
  "src":"https://m.media-amazon.com/images/I/61YVqHdFRxL._AC_SL1322_.jpg",
  "alt":"Offer Name:1",
  "title":"OnePlus Nord CE 2 Lite 5G (6 GB RAM, 128 GB ROM, Blue Tide)",
  "price":19999,
  "description":"OxygenOS based on Android™ 12"
},{
  "id":5,
  "src":"https://m.media-amazon.com/images/I/61YVqHdFRxL._AC_SL1322_.jpg",
  "alt":"Offer Name:2",
  "title":"OnePlus 10 Pro 5G (8 GB RAM, 128 GB ROM, Volcanic Black",
  "price":65999,
  "description":"OxygenOS based on Android™ 12"
},
{
  "id":6,
  "src":"https://m.media-amazon.com/images/I/61YVqHdFRxL._AC_SL1322_.jpg",
  "alt":"Offer Name:3",
  "title":"OnePlus Nord CE 2 Lite 5G (6 GB RAM, 128 GB ROM, Blue Tide)",
  "price":19999,
  "description":"OxygenOS based on Android™ 12"
}, {
  "id":7,
  "src":"https://m.media-amazon.com/images/I/61YVqHdFRxL._AC_SL1322_.jpg",
  "alt":"Offer Name:1",
  "title":"OnePlus Nord CE 2 Lite 5G (6 GB RAM, 128 GB ROM, Blue Tide)",
  "price":19999,
  "description":"OxygenOS based on Android™ 12"
},{
"id":8,
"src":"https://m.media-amazon.com/images/I/61YVqHdFRxL._AC_SL1322_.jpg",
"alt":"Offer Name:2",
"title":"OnePlus 10 Pro 5G (8 GB RAM, 128 GB ROM, Volcanic Black",
"price":65999,
"description":"OxygenOS based on Android™ 12"
},{
"id":9,
"src":"https://m.media-amazon.com/images/I/61YVqHdFRxL._AC_SL1322_.jpg",
"alt":"Offer Name:3",
"title":"OnePlus Nord CE 2 Lite 5G (6 GB RAM, 128 GB ROM, Blue Tide)",
"price":19999,
"description":"OxygenOS based on Android™ 12"
}

  ]

  
  var imglink = products.imgone;
  // var imglinkfinal= products.imgone;
  const [imglinkfinal, setimage] = React.useState(products.imgone);
  const inputQuantityEvent = (event) => {
    flag = true;
    quantity = event.target.value;
    console.log(quantity);
  }
  const navigate = useNavigate();

  const handleAddToCart = () => {
    navigate("/cart")
    if (flag == false) {
      alert("Add To Cart:1");
    } else if (quantity <= 0) {
      alert("Please enter a positive number");
    } else {
      alert("Quantity:" + quantity);
    }
  }

  var cards=<div>
        <img className="logo_mahavir" src={require ('../../assets/images.jpg')} alt="God" />
    </div>



  const handleBuyNow = () => {

    if (flag == false) {
      alert("Add To Cart:1");
    } else if (quantity <= 0) {
      alert("Please enter a positive number");
    } else {
      alert("Quantity:" + quantity);
    }
    navigate("/AddressForm")
  }


  function ImgHandler(e) {
    imglink = { e };
    setimage(imglink.e);
    console.log("Img Final:", imglinkfinal);
    console.log("Image: ", imglink)
  }

  return (
    
    <div>
      <Row >
        <Col md={2} style={{ paddingLeft: "100px", paddingTop: "45px" }}>
          <img src={products.imgone} onClick={() => ImgHandler(products.imgone)} style={{ width: "90px", height: "100px" }} />
          <img src={products.imgtwo} onClick={() => ImgHandler(products.imgtwo)} style={{ width: "90px", height: "100px", marginTop: "10px" }} />
          <img src={products.imgthree} onClick={() => ImgHandler(products.imgthree)} style={{ width: "90px", height: "100px", marginTop: "10px" }} />
          <img src={products.imgfour} onClick={() => ImgHandler(products.imgfour)} style={{ width: "90px", height: "100px", marginTop: "10px" }} />
          <img src={products.imgfive} onClick={() => ImgHandler(products.imgfive)} style={{ width: "90px", height: "100px", marginTop: "10px" }} />

        </Col>

        <Col md={4}>
          <br></br>
          <br></br>

          <div style={{ width: '400px', height: '513px' }}>
            {/* width:'400px',height:'513px'      */}
            <ReactImageMagnify {...{
              smallImage: {
                alt: 'Wristwatch by Ted Baker London',
                isFluidWidth: true,
                src: imglinkfinal,
              },
              largeImage: {
                src: imglinkfinal,
                width: 800,
                height: 800

                // width: 1200, height: 1800
              }
            }} />

          </div>

        </Col>
        <Col md={6}>
          <br></br>
          <br></br>

          <p className="text" >{products.title}</p>

          <br></br>
          <h6 >Price:{products.price}</h6>
          <br></br>
          <h6>{products.description}</h6>
          <br></br>
          <Input id="Quantity"
            name="Quantity"
            placeholder="Enter Quantity"
            type="number"
            min={0}
            onChange={inputQuantityEvent}
            style={{ width: 300 }}>
          </Input>
          <br></br>
          <Button onClick={handleAddToCart}>Add To Cart</Button>
          <Button style={{ marginLeft: 30 }} onClick={handleBuyNow}>Buy Now</Button>

          <br></br>

          <h1 className="text" style={{ marginTop: "50px" }}>Product Description</h1>
          <br></br>

          <Row>
            <Col md={2}>

              <img src="https://rukminim1.flixcart.com/image/200/200/cms-rpd-images/c1e168ff0ba0498d875fc8723c95f093_16d48598a68_image.jpeg?q=90" style={{ width: "130px" }}></img>

            </Col>
            <Col md={6}>
              <h4>Product</h4>

              <p>Featuring a 15.49-cm (6.1) all-screen Liquid Retina LCD and a glass and aluminum design, the iPhone 11 is as beautiful as it gets. Also, the IP68 rating ensures that is water-resistant up to 2 meters for 30 minutes.</p>
            </Col>
          </Row>
          <br></br>
          <Row>
            <Col md={6}>

              <h4>Take Your Photos Further. And Wider.</h4>
              <p>The iPhone 11 features dual 12 MP Ultra Wide (13mm) and Wide (26mm) cameras with 4K video recording up to 60 fps. The Ultra Wide camera provides 120° field of view, letting you capture four times more scene, and the Wide camera provides 100% Focus Pixels for up to three times faster autofocus in low light.</p>
            </Col>
            <Col md={2}>
              <img src="https://rukminim1.flixcart.com/image/200/200/cms-rpd-images/9490ec20393b496fa9f270d715bba3f9_16d4859a41c_image.jpeg?q=90"></img>
            </Col>
          </Row>
          <br></br>
          <h4 className="text" style={{ marginTop: "10px" }}>Specifications</h4>
          <br></br>
          <Row>

            <h6>General</h6>

            <Row style={{ marginTop: "10px" }}>

              <Col md={2}>
                <p>In The Box</p>
              </Col>
              <Col md={6}>
                <p>Handset, EarPods with Lightning Connector, Lightning to USB Cable, USB Power Adapter, Documentation</p>
              </Col>
            </Row>

            <Row>
              <Col md={2}>
                <p>Model Number</p>
              </Col>
              <Col md={6}>
                <p>MWLT2HN/A</p>
              </Col>
            </Row>
            <Row>
              <Col md={2}>
                <p>Color</p>
              </Col>
              <Col md={6}>
                <p>Graphite</p>
              </Col>
            </Row>
            <Row>
              <Col md={2}>
                <p>SIM Type</p>
              </Col>
              <Col md={6}>
                <p>Dual Sim</p>
              </Col>
            </Row>
            <Row>
              <Col md={2}>
                <p>Model Name</p>
              </Col>
              <Col md={6}>
                <p>iPhone 13 Pro Max</p>
              </Col>
            </Row>
          </Row>
          <br></br>
          <h4 className="text">Ratings and Reviews</h4>
          <br></br>
          <Row>
            <Col md={1} style={{ paddingLeft: "30px" }}>
              <h3>4.6</h3>
            </Col>
            <Col md={1} style={{ paddingLeft: "0px" }}>
              <AiIcons.AiFillStar />
            </Col>

            <Col md={1} style={{ paddingLeft: "5px" }}>
              <p style={{ marginBottom: "7px" }}>5⭐</p>
              <p style={{ marginBottom: "13px" }}>4⭐</p>
              <p style={{ marginBottom: "13px" }}>3⭐</p>
              <p style={{ marginBottom: "10px" }}>2⭐</p>
              <p>1⭐</p>
            </Col>


            <Col md={3}>

              <CProgress className="mb-3">
                <CProgressBar color="success" value={90} />
              </CProgress>
              <CProgress className="mb-3">
                <CProgressBar color="success" value={70} />
              </CProgress>
              <CProgress className="mb-3">
                <CProgressBar color="warning" value={30} />
              </CProgress>
              <CProgress className="mb-3">
                <CProgressBar color="danger" value={10} />
              </CProgress>
              <CProgress className="mb-3">
                <CProgressBar color="danger" value={5} />
              </CProgress>
            </Col>
            <Col md={1}>
              <p style={{ marginBottom: "7px" }}>60,000</p>
              <p style={{ marginBottom: "13px" }}>22,000</p>
              <p style={{ marginBottom: "13px" }}>22,000</p>
              <p style={{ marginBottom: "10px" }}>22,000</p>
              <p>22,000</p>
            </Col>
          </Row>
          <Row>
            <br></br>
            <UserReviewRating />
            <UserReviewRating />
            <UserReviewRating />
            <UserReviewRating />
          </Row>
        </Col>

      </Row>
      <br></br>
      <br></br>
      <br></br>
        <h4 className="text" style={{marginLeft:"20px"}}>Similar Products</h4>
      <Row>
        
        <Swiper
          slidesPerView={1}
          spaceBetween={5}
          slidesPerGroup={3}
          loop={false}
          loopFillGroupWithBlank={true}
          breakpoints={{
            700: {
              slidesPerView: 6,
            },
            400: {
              slidesPerView: 3,
            },
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {
            cards = productList.map(index => {
              return (
                <SwiperSlide >
              <Card className="card">
                <CardImg className="this.props.img"
                  src={index.src}/>
                  <CardBody>
                    <CardTitle className="this.props.h5 change">
                      <h5><b>{index.title}</b></h5>
                    </CardTitle>
                    <CardSubtitle>
                    <h6>Rs {index.price}</h6>
                    </CardSubtitle>
                    <CardText className="this.props.p change">
                     <p>{index.description}</p>
                  </CardText>
                  </CardBody>
              </Card>
              </SwiperSlide>
              )
            })
          }
        </Swiper>

      </Row>
      <br></br>
      {/* <Row>
        <Col>
          <h3 style={{ textAlign: "center" }}>Ratings And Reviews</h3>
        </Col>
      
      </Row> */}

      {/* <ProductRating rating="3.5" /> */}

      {/* <Row>
        <ReactImageMagnify {...{
          smallImage: {
            alt: 'Wristwatch by Ted Baker London',
            isFluidWidth: true,
            src: watchImg300
          },
          largeImage: {
            src: watchImg1200,
            width: 1200,
            height: 1800
          }
        }} />
      </Row> */}

    </div>

  );
  // <br></br>

  // </div>


}

export default ProductDetails;