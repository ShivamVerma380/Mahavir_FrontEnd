import {  Input } from "reactstrap";
import { ProgressBar ,Form,Button,Col, Container,Row, Card} from "react-bootstrap";
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
import { AiFillStar } from "react-icons/ai";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles.css"
import axios from "axios";

// import required modules
import { Pagination, Navigation } from "swiper";
import { CardImg, CardBody, CardTitle,CardSubtitle, CardText } from "reactstrap";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
import { Toast,ToastBody,ToastHeader } from "reactstrap";
 
import { AiOutlineHeart, AiTwotoneHeart,AiFillHeart } from "react-icons/ai";


import ProductRating from "./ProductRating";
import UserReviewRating from "./UserReviewRating";
import ComparisonProductInformation from "../ProductsComparison/ComparisonProductInformation";
import ProductSpecification from "./ProductSpecification";


// toast-configuration method,
 // it is compulsory method.
//  toast.configure()

var pin = "";

function ProductDetails(){
  // let name = localStorage.getItem("Name")
  // var storedProduct = JSON.parse(localStorage.getItem("product"))
  // var id = storedProduct[0].id
  const [isReviewFetched,setIsReviewFetched] = useState(false);
  const [isPincodeFetched,setIsPincodeFetched] = useState(false);


  const [productList,setProductList] = useState([]);
  const [isProductListFetched,SetIsProductListFetched] = useState(false);

  var quantity = 0;
  var flag = false;

  //var product = [];
  var productImg1;
  const [isProductFetched,setIsProductFetched]= useState(false);
  const [product,setProduct] = useState([]);
  const [Pincode, setPincode] = useState([]);
  const [review,setReview] = useState([]);

  const [imglinkfinal, setimage] = React.useState();
  const [isImgLinkfinalSet,setIsImgLinkFinal] = React.useState(false);
  var imglink;

  const [keys,SetKeys]=useState([]);
  const [isKeysFetched,SetIsKeysFetched]= useState(false);

  const [variantKeys,SetVariantKeys] = useState([]);
  const [isVariantKeysFetched,SetIsVariantKeysFetched] = useState(false);
  const [change, setChange] = useState(0);
  const [isAddCompareClicked, setisAddCompareClicked] = useState(false);
  //const[productInformation,SetProductInformation] = useState();
  const[isProductInformationSet,SetIsProductInformationSet] = useState(false);
  var productInformation;
  var averagerate;
  useEffect(()=>{
    //var token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhQGIuY2NjY2NjY2NqaGRoZGIiLCJleHAiOjE2NTQ0NDU2MzQsImlhdCI6MTY1NDM1OTIzNH0.fgpAQXcaaNruyanPxU2Xrkfe1AnsrUjf25boDfZhm8Q"
    var token = localStorage.getItem("jwtToken");
    if(localStorage.getItem("productSelected")!=null && !isImgLinkfinalSet && !isProductInformationSet && !isKeysFetched && !isVariantKeysFetched && !isPincodeFetched && localStorage.getItem("Model Number")!=null && !isProductListFetched){

      axios({
        method:"get",
        url:"http://localhost:8080/pincodes"
      }).then(function(response){
        console.log("Pincode response: ",response);
        if(response.status==200) {
         
          response.data.map(index=>{
            // setPincode(p=>new Set([...Pincode,index.pincode]))
            Pincode.push(index.pincode)
          })
          console.log("Pincode Response: ",Pincode);
          // setPincode(response.data);
          setIsPincodeFetched(true);
          
          
         
        }
      }).catch(function(error){
        console.log("error",error);
      })

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

      axios({
        method:"get",
        url:"http://localhost:8080/get-reviews/"+localStorage.getItem("productSelected")
      }).then(function(reviewresponse){
        console.log(reviewresponse);
        if(reviewresponse.status==200) {
          console.log("Review Response",reviewresponse.data);
          setReview(reviewresponse.data);
          setIsReviewFetched(true);
          
          
          console.log("Average rating: ",reviewresponse.data.averageRatings);
          averagerate = reviewresponse.data.averageRatings;
          console.log("Average ",averagerate);
        }
      }).catch(function(error){
        console.log("error",error);
      })

      
      // modelNumbers.map(modelNum=>{
      //     if(modelNum!==localStorage.getItem("productSelected"))
      //       urls.push(axios.get("http://localhost:8080/similar-products/"+localStorage.getItem("productSelected")+"/"+localStorage.getItem("SubSubCategory")+
      //       "/"+localStorage.getItem("SubCategory")+"/"+localStorage.getItem("Category")));
      // })
      // axios.all(urls).then(
      //     axios.spread((...res)=>{
      //         res.map(index=>{
                  
      //             productList.push(index.data);
      //             // filteredProducts.push(index.data);


      //         })

      //         console.log("products",productList);
      //         SetIsProductListFetched(true);

      //     })
      // )

      axios.get("http://localhost:8080/similar-products/"+localStorage.getItem("productSelected")+"/"+localStorage.getItem("SubSubCategory")+"/"+localStorage.getItem("SubCategory")+"/"+localStorage.getItem("Category")).then(
        function(response){
          if(response.status==200){
            console.log(response.data);
            setProductList(response.data);
            SetIsProductListFetched(true);
          }
        }).catch(function(error){
          console.log("error",error);
        }
      );
      
      
      

    }
  },[]);

  

  function getProductInformationKeys(productInformation){
    if(isProductInformationSet && !isKeysFetched){}
    
}



function callProductDetails(index){
  //alert(index);
  console.log("Index",index);
  localStorage.setItem("productSelected",index.modelNumber);
  console.log("Product Selected",localStorage.getItem("productSelected"))
  localStorage.setItem("SubSubCategory",index.subCategoryMap[localStorage.getItem("SubCategory")]);
  // navigate("/productDetails")
  window.location.reload();
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

    var items = localStorage.getItem("CartItems");
    if(items==null || items==undefined){
      localStorage.setItem("CartItems",product.modelNumber);
    }else{
      items+=product.modelNumber+",";
      localStorage.setItem("CartItems",items);
    }

    var isLoggedIn = localStorage.getItem("isLoggedIn");
    console.log("loggedIn",isLoggedIn);

    if(isLoggedIn==="true"){
      
      var form_data_body={
        modelNumber: product.modelNumber,
      }

      axios.post("http://localhost:8080/add-to-cart", form_data_body, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": "Bearer "+localStorage.getItem("jwtToken")
        },
      }).then(function(response){
        console.log(response);
        if(response.status==200){
            console.log("response",response);
            console.log("Item added to cart successfully");
            navigate("/cart");
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
  
    }else{
      navigate("/cart");
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

  const InputPin = (e) => {
    pin = e.target.value
    console.log("Pincode: ",pin)
  }

  const CheckPinHandler = () => {
    if(Pincode.includes(parseInt(pin))) {
      alert("Delivery Available")
    }
    else {
      alert("Delivery Not available")
    }
  }

  function fetchOfferAvailableBtn(offerPrice,productPrice){
    if(offerPrice===productPrice){
      return <Button variant="flat" size="m" style={{visibility:"hidden"}}>Offer Available</Button>
    }
    return <Button variant="flat" size="m">Offer Available</Button>
  }

  const handleAddToCompare = event => {
    if (event.target.checked) {

      console.log('✅ Checkbox is checked');
      
      setChange(change+1)
      
      
      
    } else {
      console.log('⛔️ Checkbox is NOT checked');
      setChange(change-1)
    }
    setisAddCompareClicked(current => !current);
    
    // alert("Added To Compare");
    
  }


  function ImgHandler(e) {
    imglink = { e };
    
    setimage(imglink.e);
    console.log("imglink.e",imglink.e);
    console.log("Img Final:", imglinkfinal);
    console.log("Image: ", imglink)
  }

  function handleBtnClick(variantName){
    console.log("Variant Btn Clicked",variantName.index);
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

var variantcolorone = "";
var variantcolortwo = "";
var variantcolorthree = "";
var variantcolorfour = "";
var variantcolorfive = "";
console.log("Percentage: ",(review.nosOfFiveStars/review.totalReviews)*100);
if((review.nosOfFiveStars/review.totalReviews)*100>=70) {
  variantcolorfive = "success";
} else if ((review.nosOfFiveStars/review.totalReviews)*100>=50 && (review.nosOfFiveStars/review.totalReviews)*100<70) {
  variantcolorfive = "info";
} else if ((review.nosOfFiveStars/review.totalReviews)*100>=20 && (review.nosOfFiveStars/review.totalReviews)*100<50) {
  variantcolorfive = "warning";
} else {
  variantcolorfive = "danger";
}

if((review.nosOfFourStars/review.totalReviews)*100>=70) {
  variantcolorfour = "success";
} else if ((review.nosOfFourStars/review.totalReviews)*100>=50 && (review.nosOfFourStars/review.totalReviews)*100<70) {
  variantcolorfour = "info";
} else if ((review.nosOfFourStars/review.totalReviews)*100>=20 && (review.nosOfFourStars/review.totalReviews)*100<50) {
  variantcolorfour = "warning";
} else {
  variantcolorfour = "danger";
}

if((review.nosOfThreeStars/review.totalReviews)*100>=70) {
  variantcolorthree = "success";
} else if ((review.nosOfThreeStars/review.totalReviews)*100>=50 && (review.nosOfThreeStars/review.totalReviews)*100<70) {
  variantcolorthree = "info";
} else if ((review.nosOfThreeStars/review.totalReviews)*100>=20 && (review.nosOfThreeStars/review.totalReviews)*100<50) {
  variantcolorthree = "warning";
} else {
  variantcolorthree = "danger";
}

if((review.nosOfTwoStars/review.totalReviews)*100>=70) {
  variantcolortwo = "success";
} else if ((review.nosOfTwoStars/review.totalReviews)*100>=50 && (review.nosOfTwoStars/review.totalReviews)*100<70) {
  variantcolortwo = "info";
} else if ((review.nosOfTwoStars/review.totalReviews)*100>=20 && (review.nosOfTwoStars/review.totalReviews)*100<50) {
  variantcolortwo = "warning";
} else {
  variantcolortwo = "danger";
}

if((review.nosOfOneStars/review.totalReviews)*100>=70) {
  variantcolorone = "success";
} else if ((review.nosOfOneStars/review.totalReviews)*100>=50 && (review.nosOfOneStars/review.totalReviews)*100<70) {
  variantcolorone = "info";
} else if ((review.nosOfOneStars/review.totalReviews)*100>=20 && (review.nosOfOneStars/review.totalReviews)*100<50) {
  variantcolorone = "warning";
} else {
  variantcolorone = "danger";
}


function WishlistHandler(index) {
  // alert("Item added successfully to wishlist");
  console.log(index.modelNumber)
  if (localStorage.getItem("wishlistproduct")==null) {
    localStorage.setItem("wishlistproduct",index.modelNumber)
  }else {
    var arr = localStorage.getItem("wishlistproduct").split(',')
    var flag = true;
    arr.map(i=>{
     
      console.log("i: ",i)
      if( i=== index.modelNumber) {
          arr.splice(arr.indexOf(i),1)
          localStorage.setItem("wishlistproduct",arr)
          console.log('del arr: ' + arr)
          console.log('del ls: ' + localStorage.getItem("wishlistproduct"))
         console.log("in if")
        flag = false;
      } 
    }) 
    // if(flag)
    //   localStorage.setItem("wishlistproduct",localStorage.getItem("wishlistproduct")+","+index.modelNumber)
    //   navigate('/')
    
  }
  
}


  return (
    <div> 
      <Header/> 
    {
    (isProductFetched )?(
      <>
     
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

            <Col className="imageproduct" md={4} style={{marginTop: "100px", justifyContent: "center", marginLeft:35}}>
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
          
          <Row>
            <Col className="star" md={1} style={{textAlign:"right"}} >
            {Math.round(review.averageRatings*10)/10}<AiFillStar/>
            </Col>
            <Col md={4}>
              {review.totalRatings} Ratings & {review.totalReviews} Reviews
            </Col>
          </Row>
          
          <br></br>
          <Row>
            
            {
              (product.offerPrice==product.productPrice) ? (<Col md={4}>
                <h4>Price: <b>₹{product.productPrice}</b></h4>
                </Col>):(<Col md={8}>
            <h6>MSP: <b style={{marginRight:"20px",color:"rgb(255,98,98)"}}>₹{product.offerPrice}</b> MRP: <b style={{textDecorationLine:"line-through", textDecorationStyle:"solid"}}>₹{product.productPrice}</b></h6> 
            </Col>)
            }
            
          </Row>
          <br></br>

          <h5><b><i>Available Offers</i></b></h5>
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

            <SwiperSlide>
              <Card style={{ width: '25rem' }} className="mb-2">
                <Card.Body>
                  <Card.Title>
                    "IDBI BANK"
                  </Card.Title>
                  <Card.Text>
                  Flat Cashback upto Rs. 2,500 on ICICI Credit card 
                  EMI for cart value above Rs.50,000. Select the offer from “View all offers ”on payment page T&C Apply.
                  </Card.Text>
                  <Card.Text style={{textAlign:"left"}}>
                    View More
                  </Card.Text>
                </Card.Body>
              </Card>
            </SwiperSlide>

            <SwiperSlide>
              <Card style={{ width: '25rem' }} className="mb-2">
                <Card.Body>
                  <Card.Title>
                    "ICICI BANK"
                  </Card.Title>
                  <Card.Text>
                  Flat Cashback upto Rs. 2,500 on ICICI Credit card 
                  EMI for cart value above Rs.50,000. Select the offer from “View all offers ”on payment page T&C Apply.
                  </Card.Text>
                  <Card.Text style={{textAlign:"left"}}>
                    View More
                  </Card.Text>
                </Card.Body>
              </Card>
            </SwiperSlide>

            <SwiperSlide>
              <Card style={{ width: '25rem' }} className="mb-2">
                <Card.Body>
                  <Card.Title>
                    "AXIS BANK"
                  </Card.Title>
                  <Card.Text>
                  Flat Cashback upto Rs. 2,500 on ICICI Credit card 
                  EMI for cart value above Rs.50,000. Select the offer from “View all offers ”on payment page T&C Apply.
                  </Card.Text>
                  <Card.Text style={{textAlign:"left"}}>
                    View More
                  </Card.Text>
                </Card.Body>
              </Card>
            </SwiperSlide>

            <SwiperSlide>
              <Card style={{ width: '25rem' }} className="mb-2">
                <Card.Body>
                  <Card.Title>
                    "SBI"
                  </Card.Title>
                  <Card.Text>
                  Flat Cashback upto Rs. 2,500 on ICICI Credit card 
                  EMI for cart value above Rs.50,000. Select the offer from “View all offers ”on payment page T&C Apply.
                  </Card.Text>
                  <Card.Text style={{textAlign:"left"}}>
                    View More
                  </Card.Text>
                </Card.Body>
              </Card>
            </SwiperSlide>

            </Swiper>
          </Row>
          
          <br></br>
          <Row>
          <Col md={5}>  
          <h5><b><i>Product Highlights</i></b></h5>
          {
            product.productHighlights.split(';').map(index=>{
              return(
                <p>•<span> </span>{index}</p>
              );
              
            })
          }       
          {/* <h6>{product.productHighlights}</h6> */}
          </Col>
          {
            (product.freeItem) ? (
              <Col md={6}>
              <h5 style={{textAlign:"center",color:"rgb(255,98,98)"}}><b><i>Free Gift Worth {product.freeItem.price}</i></b></h5>
              <Row style={{marginTop:20}}>
              <Col md={5}>
              <img style={{width:120, height:120}} src={'data:image/jpg;base64,' + product.freeItem.image.data}></img>
              
              </Col>
              <Col md={6}>
                <h5>{product.freeItem.name}</h5>
              </Col>
              </Row>
              
            </Col>
            ) : (null)
          }
          
          </Row>
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
          
          
          <h3 style={{marginTop:30}}><b>Variants</b></h3>
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
                          (variantName=="Color") ? (
                            <Col md={1} style={{marginRight:30}}>
                              <div class="color_img">
                                  <img src={'data:image/jpg;base64,' + product.productImage1.data} id={index}  variant="flat" style={{marginLeft:10, width:50, border:"1px solid black"}} onClick={()=>handleBtnClick({index})}></img>
                                  <div>{index}</div>
                              </div>
                          
                          </Col>
                          ) : (
                            <Col md={1} style={{marginRight:30}}>
                          <Button src={'data:image/jpg;base64,' + product.productImage1.data} id={index}  variant="flat" style={{marginLeft:10}} onClick={()=>handleBtnClick({index})}>{index}</Button>
                          </Col>
                          )
                          
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
          <br></br>

          <Row style={{marginTop:20}}>
            <Col md={3}>
            <h5 >Enter Pincode</h5>
            </Col>
            <Col md={4}>
              <Input type="number" style={{height:25}} onChange={InputPin}></Input>
            </Col>
            <Col md={3}>
              <button style={{borderRadius:"5px", padding:3}} onClick={CheckPinHandler}>Check Pincode</button>
            </Col>
          </Row>

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
          
          </Row>
          <br></br>
          <h4 className="text">Ratings and Reviews</h4>
          <hr></hr>
          <Row>
            <Col md={1} style={{ display:"flex"}}>
              
              <h3>{Math.round(review.averageRatings*10)/10}</h3>
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
            <ProgressBar style={{marginBottom:"2px"}}animated  striped variant={variantcolorfive} now={(review.nosOfFiveStars/review.totalReviews)*100} />
            <br></br>
            <ProgressBar style={{marginBottom:"2px"}}animated  striped variant={variantcolorfour} now={(review.nosOfFourStars/review.totalReviews)*100} />
            <br></br>
            <ProgressBar style={{marginBottom:"2px"}} animated striped variant={variantcolorthree} now={(review.nosOfThreeStars/review.totalReviews)*100} />
            <br></br>
            <ProgressBar style={{marginBottom:"2px"}} animated striped variant={variantcolortwo} now={(review.nosOfTwoStars/review.totalReviews)*100} />
            <br></br>
            <ProgressBar style={{marginBottom:"2px"}} animated striped variant={variantcolorone} now={(review.nosOfOneStars/review.totalReviews)*100} />
          </div>
            </Col>
            <Col md={1}>
              <p >{review.nosOfFiveStars}</p>
              <p >{review.nosOfFourStars}</p>
              <p >{review.nosOfThreeStars}</p>
              <p >{review.nosOfTwoStars}</p>
              <p>{review.nosOfOneStars}</p>
            </Col>
          </Row>
          <Row>
            <br></br>
            
            
            {
              (isReviewFetched)? (
                
                review.reviews.map((index)=>{
                  return (
                    <Row>
                    <Row>
                    <Col className="star" md={1} style={{textAlign:"right"}} >
                          
                          {index.rating}<AiFillStar/>
                  </Col>
                  <Col>
                      <p>{index.reviewer_name}</p>
                  </Col>
                  </Row>
                  <Row>
                  <Col style={{marginLeft:70}}>
                      <p>{index.review}</p>
                  </Col> 
              </Row>
              </Row>
                  ) 
                })
              ) : (null)
              
            }
            {/* <UserReviewRating/>
            <UserReviewRating />
            <UserReviewRating />
            <UserReviewRating /> */}
          </Row>
          <br></br>
          

        </Col>
      </Row>
     
        
    {/* </div> */}
    {
      (isProductListFetched && productList.length!=0)?(
        <h4 className="textsimilar" style={{marginLeft:"20px"}}>Similar Products</h4>
      ):(
        null
      )
    }   
    {
        (isProductListFetched)?(
        <Swiper
          slidesPerView={1}
          spaceBetween={5}
          slidesPerGroup={3}
          loop={false}
          loopFillGroupWithBlank={true}
          breakpoints={{
            700: {
              slidesPerView: 5,
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
        > {console.log("Product List",productList)}
          {
            cards = productList.map(index => {
              
              return (
                <SwiperSlide >
              <Card style={{ width: '13rem' }} className="mb-2">
                <AiOutlineHeart style={{marginTop:"10px",marginLeft:"5px"}} className="wishlisticon" size={30} onClick={()=>WishlistHandler(index)}/>
                <CardImg className="this.props.img" onClick={()=>callProductDetails(index)}
                  src={"data:image/png;base64," + index.productImage1.data}/>
                  <CardBody>
                    <CardTitle className="this.props.h6 change"  onClick={()=>callProductDetails(index)}> 
                      <h6  ><b>{index.productName}</b></h6>
                    </CardTitle>
                    <CardSubtitle onClick={()=>callProductDetails(index)}>
                    <s>₹{index.productPrice}</s>
                    <b style={{marginLeft:10}}>₹{index.offerPrice}</b>
                    </CardSubtitle>
                    <CardText className="this.props.p change" onClick={()=>callProductDetails(index)}>
                     <p>{index.productHighlights}</p>
                  </CardText>
                  <Form>
                    <Form.Check type="checkbox"  label = "Add To Compare" onChange={handleAddToCompare}/>
                  </Form>
                    <br></br>
                    {
                      fetchOfferAvailableBtn(index.offerPrice,index.productPrice)
                    }                    
                  </CardBody>
              </Card>
              </SwiperSlide>
              )
            })
          }
        </Swiper>
        ):(
          null
        )
      }
     

         
      
    </div>
    </>
    ):(null)
    }
    </div>

  );
  {/* // <br></br> */}

  {/* // </div> */}
    
      
}


export default ProductDetails;