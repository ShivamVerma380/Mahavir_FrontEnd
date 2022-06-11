import {  Input } from "reactstrap";
import { ProgressBar ,Button,Col, Container,Row} from "react-bootstrap";
import Header from "../Header";
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
import { QuantityPicker } from 'react-qty-picker';  

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../styles.css"

import axios from "axios";


// import required modules
import { Pagination, Navigation } from "swiper";
import { Card,CardImg, CardBody, CardTitle,CardSubtitle, CardText } from "reactstrap";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
import { Toast,ToastBody,ToastHeader } from "reactstrap";
 


import ProductRating from "./ProductRating";
import UserReviewRating from "./UserReviewRating";
import ComparisonProductInformation from "../ProductsComparison/ComparisonProductInformation";
import ProductSpecification from "./ProductSpecification";


// toast-configuration method,
 // it is compulsory method.
//  toast.configure()

function ProductDetails(){
  // let name = localStorage.getItem("Name")
  // var storedProduct = JSON.parse(localStorage.getItem("product"))
  // var id = storedProduct[0].id
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
}]

  var quantity = 0;
  var flag = false;

  //var product = [];
  var productImg1;
  const [isProductFetched,setIsProductFetched]= useState(false);
  const [product,setProduct] = useState([]);

  const [imglinkfinal, setimage] = React.useState();
  const [isImgLinkfinalSet,setIsImgLinkFinal] = React.useState(false);
  var imglink;

  const [keys,SetKeys]=useState([]);
  const [isKeysFetched,SetIsKeysFetched]= useState(false);

  const [variantKeys,SetVariantKeys] = useState([]);
  const [isVariantKeysFetched,SetIsVariantKeysFetched] = useState(false);
  

  //const[productInformation,SetProductInformation] = useState();
  const[isProductInformationSet,SetIsProductInformationSet] = useState(false);
  var productInformation;
  useEffect(()=>{
    //var token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhQGIuY2NjY2NjY2NqaGRoZGIiLCJleHAiOjE2NTQ0NDU2MzQsImlhdCI6MTY1NDM1OTIzNH0.fgpAQXcaaNruyanPxU2Xrkfe1AnsrUjf25boDfZhm8Q"
    var token = localStorage.getItem("jwtToken");
    if(localStorage.getItem("productSelected")!=null && !isImgLinkfinalSet && !isProductInformationSet && !isKeysFetched && !isVariantKeysFetched){
      axios({
        method:"get",
        url:"http://localhost:8080/get-products/"+localStorage.getItem("productSelected")
      }).then(function(response){
        console.log(response);
        if(response.status==200){
          console.log("response data",response.data);
          //product= response.data;
          setProduct(response.data);
          setIsProductFetched(true);
          imglink = product.productImage1;
          console.log("Product Detail",product);
          //setimage(imglink);
          //productImg1 = 'data:image/jpg;base64,'+ product.productImage1.data;
          //console.log("Product Image 1:",productImg1);
          setimage('data:image/jpg;base64,'+response.data.productImage1.data);
          console.log(response.data.productInformation);
          productInformation = response.data.productInformation;
          for(var k in response.data.productInformation){
            keys.push(k);
          }

          for(var k in response.data.variants){
            variantKeys.push(k);
          }
          
          console.log("keys",keys);
          //productInformation= response.data.productInformation;
          //getProductInformationKeys(productInformation)
          // ImgHandler('data:image/jpg;base64,' +product.productImage1.data);
          //setimage('data:image/jpg;base64,'+product.productImage1.data);
          setIsImgLinkFinal(true);
          SetIsProductInformationSet(true);
          SetIsKeysFetched(true);
          SetIsVariantKeysFetched(true);
        }
      }).catch(function(error){
        console.log("error",error);
        toast("Item already present in cart")
      })
    }
  },[]);

  

  function getProductInformationKeys(productInformation){
    if(isProductInformationSet && !isKeysFetched){
      
    }
    
}
 
  
  const notify=()=>{
    return(
      <Toast>
      <ToastHeader>
        Reactstrap
      </ToastHeader>
      <ToastBody>
        This is a toast on a primary background — check it out!
      </ToastBody>
    </Toast>
    );
  }
  
  
  const inputQuantityEvent = (event) => {
    flag = true;
    quantity = event.target.value;
    console.log(quantity);
  }
  const navigate = useNavigate();

  const handleAddToCart = () => {
    //toast.configure();  

    var form_data_body={
      modelNumber: product.modelNumber,
    }
    axios.post("http://localhost:8080/add-to-cart", form_data_body, {
      headers: {
        "Content-Type": "multipart/form-data",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzaGl2YW1AZ21haWwuY29tbW1zc2RzIiwiZXhwIjoxNjU0NjE4ODgwLCJpYXQiOjE2NTQ1MTg4ODB9.kDTGQbDIDVTXqtEkm_35VqXzpWwJ8wUxOw8Cd8Wrgi0"
      },
    }).then(function(response){
      console.log(response);
      if(response.status==200){
          console.log("response",response);
          console.log("Item added to cart successfully");
          //alert("Item added to cart ")

          if (flag == false) {
            alert("Add To Cart:1");
          } else if (quantity <= 0) {
            alert("Please enter a positive number");
          } else {
            alert("Quantity:" + quantity);
          }

          navigate("/cart")

          // localStorage.setItem("isLoggedIn",true);
          //navigate("/")
          
          //redux();
      }else{
          console.log("In else");
          alert("Item already present in cart")
          console.log(response.data.message);
          return;
      }  

      
      
  }).catch(function(error){
      console.log(error);
      alert("Item already present in cart")
      return;
  })




    
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
    console.log("imglink.e",imglink.e);
    console.log("Img Final:", imglinkfinal);
    console.log("Image: ", imglink)
  }

  function handleBtnClick(variantName){
    // console.log("Variant Btn Clicked",variantName.index);
    axios({
        method:"get",
        url:"http://localhost:8080/get-products/"+localStorage.getItem("productSelected")+"/"+variantName.index
    }).then(function(response){
        if(response.status==200){
            console.log("response data",response.data);
            setProduct(response.data);
            setimage('data:image/jpg;base64,'+response.data.productImage1.data);
        }
    }).catch(function(error){
        console.log("error",error);
    })
    
}

  return (
      
    (isProductFetched )?(
      <>
     {/* <Header/> */}
      <div className="container" style={{backgroudColor:'white'}}>
      <Row >
        <Col md={6}>
          <div >
          <Row >
            <Col md={2} >
              <img className="productdetailimg" src={'data:image/jpg;base64,' + product.productImage1.data} onClick={() => ImgHandler('data:image/jpg;base64,' +product.productImage1.data)}  style={{ width: "90px", height: "100px" }} />
              <img className="productdetailimg" src={'data:image/jpg;base64,' + product.productImage2.data} onClick={() => ImgHandler('data:image/jpg;base64,' +product.productImage2.data)} style={{ width: "90px", height: "100px", marginTop: "10px" }} />
              <img className="productdetailimg" src={'data:image/jpg;base64,' + product.productImage3.data} onClick={() => ImgHandler('data:image/jpg;base64,' +product.productImage3.data)} style={{ width: "90px", height: "100px", marginTop: "10px" }} />
              <img className="productdetailimg" src={'data:image/jpg;base64,' + product.productImage4.data} onClick={() => ImgHandler('data:image/jpg;base64,' +product.productImage4.data)} style={{ width: "90px", height: "100px", marginTop: "10px" }} />
              <img className="productdetailimg" src={'data:image/jpg;base64,' + product.productImage5.data} onClick={() => ImgHandler('data:image/jpg;base64,' +product.productImage5.data)} style={{ width: "90px", height: "100px", marginTop: "10px" }} />

            </Col>

            <Col className="imageproduct" md={4} style={{marginTop: "100px", justifyContent: "center"}}>
              <br></br>
              <br></br>

              <div style={{ width: '400px', height: '513px' }}>
                {/* width:'400px',height:'513px'      */}
                
                
                <ReactImageMagnify {...{
                  smallImage: {
                    alt: 'Wristwatch by Ted Baker London',
                    isFluidWidth: true,
                    src:  imglinkfinal,
                    
                    
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
          </Row >
          </div>
     
        </Col>
        <Col md={6} style={{
    height: '600px',
    overflowY: 'scroll'}}>
        
          <br></br>
          <br></br>

          <h2 className="text" >{product.productName}</h2>

          <br></br>
          <h4>Price: <b>₹{product.productPrice}</b></h4>
          <br></br>
          <h5><b><i>Product Highlights</i></b></h5>
          {
            product.productHighlights.split(';').map(index=>{
              return(
                <p>•<span> </span>{index}</p>
              );
              
            })
          }
          {/* <h6>{product.productHighlights}</h6> */}
          <br></br>
          <QuantityPicker className="quantitypicker" style={{ background: "red" }} min={0} smooth onChange={inputQuantityEvent} />
          {/* <Input id="Quantity"
            name="Quantity"
            placeholder="Enter Quantity"
            type="number"
            min={0}
            onChange={inputQuantityEvent}
            style={{ width: 300 }}>
          </Input> */}
          <br></br>
          {/* <Button onClick={handleAddToCart}>Add To Cart</Button> */}
          <Button  variant="flat" size="1" onClick={handleAddToCart}>Add To Cart</Button>
          <Button variant="flat" size="1" style={{marginLeft:30}} onClick={handleBuyNow}>Buy Now</Button>

          <br></br>
          <br></br>
          <h3><b>Variants</b></h3>
          {/* {
            (isVariantKeysFetched)?(
              variantKeys.map(variant=>{
                return(
                  <ProductVariant variantName={variant} product={product}/>
                );
              })
            ):(
              null
            )
          } */}
          {
            (isVariantKeysFetched)?(
              variantKeys.map(variantName=>{
                return(
                  <Row style={{marginTop:15}}>
                    <Col md={2}>
                      <h5>{variantName}</h5>
                    </Col>
                    {
                      product.variants[variantName].map(index=>{
                        return(
                          <Col md={3}>
                          <Button id={index}  variant="flat" style={{marginLeft:10}} onClick={()=>handleBtnClick({index})}>{index}</Button>
                          </Col>
                        );
                      })
                    }
                  </Row>
                )  
              })
            ):(
              null
            )
          }
          <h3 className="text" style={{ marginTop: "50px" }}>Product Description</h3>
          <hr></hr>

          <Row >
            <Col md={2}>

              <img src={'data:image/jpg;base64,'+product.productImage1.data }style={{ width: "130px" }}></img>

            </Col>
            <Col md={6}>

              <h5 style={{marginLeft:'50px'}} >{product.modelNumber}</h5>

              <p style={{marginLeft:'50px'}}>{product.productDescription}</p>
            </Col>
          </Row>
          <br></br>
          <Row>
            <Col md={6}>

              <h4>Take Your Photos </h4>
              <p>The iPhone 11 features dual 12 MP Ultra Wide (13mm) and Wide (26mm) cameras with 4K video recording up to 60 fps. The Ultra Wide camera provides 120° field of view, letting you capture four times more scene, and the Wide camera provides 100% Focus Pixels for up to three times faster autofocus in low light.</p>
            </Col>
            <Col md={2}>
              <img src={'data:image/jpg;base64,'+product.productImage1.data } style={{ width: "130px" }}></img>
            </Col>
          </Row>
          <br></br>
          <h3 className="text" style={{ marginTop: "10px" }}>Specifications</h3>
          <hr></hr>
          <Row>
         
          {
            (isKeysFetched)?(
              keys.map(k=>{
                return(
                  <ProductSpecification title={k} product={product}/> 
                );
              })
            
            ):(
              null
            )

          }
          
            {/* <h6>General</h6>

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
            </Row> */}
          </Row>
          <br></br>
          <h4 className="text">Ratings and Reviews</h4>
          <hr></hr>
          <Row>
            <Col md={1} style={{ display:"flex"}}>
              <h3>4.6</h3>
            </Col>
            <Col md={1} style={{ paddingLeft: "10px" , paddingTop:'5px'}}>
              <AiIcons.AiFillStar size={20}/>
            </Col>

            <Col md={1} style={{ paddingLeft: "5px" }}>
              <p >5⭐</p>
              <p >4⭐</p>
              <p >3⭐</p>
              <p >2⭐</p>
              <p>1⭐</p>
            </Col>


            <Col md={3}>

            <div>
            <ProgressBar style={{marginBottom:"2px"}}animated  striped variant="success" now={40} />
            <br></br>
            <ProgressBar style={{marginBottom:"2px"}}animated  striped variant="success" now={40} />
            <br></br>
            <ProgressBar style={{marginBottom:"2px"}} animated striped variant="info" now={20} />
            <br></br>
            <ProgressBar style={{marginBottom:"2px"}} animated striped variant="warning" now={60} />
            <br></br>
            <ProgressBar style={{marginBottom:"2px"}} animated striped variant="danger" now={80} />
          </div>
            </Col>
            <Col md={1}>
              <p >60,000</p>
              <p >22,000</p>
              <p >22,000</p>
              <p >22,000</p>
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
          <br></br>
          

        </Col>
      </Row>
      <Row>
          <br></br>
      <br></br>
      <br></br>
        
      
      <br></br>

    {/* </div> */}
    <h4 className="textsimilar" style={{marginLeft:"20px"}}>Similar Products</h4>
    <Row>
        
        <Swiper
          slidesPerView={1}
          spaceBetween={5}
          slidesPerGroup={3}
          loop={false}
          loopFillGroupWithBlank={true}
          breakpoints={{
            700: {
              slidesPerView: 3,
            },
            400: {
              slidesPerView: 1,
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
                    <CardTitle className="this.props.h6 change">
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

          </Row>
      
    </div>
    </>
    ):(null)
    
    

  );
  // <br></br>

  // </div>


}

export default ProductDetails;