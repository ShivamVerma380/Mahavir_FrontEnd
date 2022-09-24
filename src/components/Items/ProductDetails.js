import { Input } from "reactstrap";
import { ProgressBar, Form, Button, Col, Container, Row, Card ,Modal,Image,Carousel} from "react-bootstrap";
import Header from "../Header";
import "./ProductDetails.css";
import { AiOutlineMinus } from "react-icons/fa"
import { useNavigate } from "react-router-dom";
import ReactImageMagnify from 'react-image-magnify';
import watchImg1200 from '../../assets/watch.jpg'
import watchImg300 from '../../assets/watch300.jpg'
import React, { useEffect, useState } from "react";
import * as AiIcons from 'react-icons/ai';
import { Swiper, SwiperSlide } from "swiper/react";
import { AiFillStar } from "react-icons/ai";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles.css"
import axios from "axios";

// import required modules
import { Pagination, Navigation } from "swiper";
import { CardImg, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";


import 'react-toastify/dist/ReactToastify.css';

import { Toast, ToastBody, ToastHeader } from "reactstrap";

import { AiOutlineHeart, AiTwotoneHeart, AiFillHeart } from "react-icons/ai";



import ProductRating from "./ProductRating";
import UserReviewRating from "./UserReviewRating";
import ComparisonProductInformation from "../ProductsComparison/ComparisonProductInformation";
import ProductSpecification from "./ProductSpecification";
import { setCookie, getCookie } from '../Cookies';
import { ToastContainer, toast } from 'react-toastify';
import url from "../../Uri";
import {HiOutlineShoppingCart} from "react-icons/hi";
import Footer from "../Footer/Footer";
import LoadingSpinner from "../LoadingSpinner";
// import './ProductDetails.css';
// toast-configuration method,
// it is compulsory method.
//  toast.configure()

var pin = "";
var i =0;

function ProductDetails() {
  // let name = localStorage.getItem("Name")
  // var storedProduct = JSON.parse(localStorage.getItem("product"))
  // var id = storedProduct[0].id
  const [isReviewFetched, setIsReviewFetched] = useState(false);
  const [isPincodeFetched, setIsPincodeFetched] = useState(false);


  const [productList, setProductList] = useState([]);
  const [isProductListFetched, SetIsProductListFetched] = useState(false);

  var quantity = 0;
  var flag = false;

  //var product = [];
  var productImg1;
  const [isProductFetched, setIsProductFetched] = useState(false);
  const [product, setProduct] = useState([]);
  const [Pincode, setPincode] = useState([]);
  const [review, setReview] = useState([]);

  const [imglinkfinal, setimage] = React.useState();
  const [isImgLinkfinalSet, setIsImgLinkFinal] = React.useState(false);
  var imglink;

  const [keys, SetKeys] = useState([]);
  const [isKeysFetched, SetIsKeysFetched] = useState(false);

  const [variantKeys, SetVariantKeys] = useState([]);
  const [isVariantKeysFetched, SetIsVariantKeysFetched] = useState(false);
  const [change, setChange] = useState(0);
  const [isAddCompareClicked, setisAddCompareClicked] = useState(false);
  //const[productInformation,SetProductInformation] = useState();
  const [isProductInformationSet, SetIsProductInformationSet] = useState(false);
  const [variantCount,setVariantCount]=useState(0);

  
  var cart = [];
  if(getCookie("CartModels")!=null){
    cart = getCookie("CartModels").split(',');
  }

  var productInformation;
  // var averagerate = 4;

  const[averagerate,SetAverageRate]= useState(0);
  const [isLoading,SetIsLoading] = useState(true);

  useEffect(() => {



    //var token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhQGIuY2NjY2NjY2NqaGRoZGIiLCJleHAiOjE2NTQ0NDU2MzQsImlhdCI6MTY1NDM1OTIzNH0.fgpAQXcaaNruyanPxU2Xrkfe1AnsrUjf25boDfZhm8Q"
    // var token = localStorage.getItem("jwtToken");
    if (localStorage.getItem("productSelected") != null  && !isImgLinkfinalSet && !isProductInformationSet && !isKeysFetched && !isVariantKeysFetched && !isPincodeFetched && localStorage.getItem("productSelected") != null && !isProductListFetched) {

      axios({
        method: "get",
        url: url+"/pincodes"
      }).then(function (response) {
        // console.log("Pincode response: ", response);
        if (response.status == 200) {

          response.data.map(index => {
            // setPincode(p=>new Set([...Pincode,index.pincode]))
            Pincode.push(index.pincode)
          })
          // console.log("Pincode Response: ", Pincode);
          // setPincode(response.data);
          setIsPincodeFetched(true);



        }
      }).catch(function (error) {
        console.log("error", error.response);
      })

      axios({
        method: "get",
        url: url+"/get-products/" + localStorage.getItem("productSelected")
      }).then(function (response) {
        // console.log(response);
        if (response.status == 200) {
          // console.log("response data", response.data);
          //product= response.data;
          setProduct(response.data);
          setIsProductFetched(true);
          imglink = product.productImage1;
          // console.log("Product Detail", product);
          //setimage(imglink);
          //productImg1 = 'data:image/jpg;base64,'+ product.productImage1.data;
          //console.log("Product Image 1:",productImg1);
          setimage(response.data.productImage1);
          // console.log(response.data.productInformation);
          productInformation = response.data.productInformation;
          for (var k in response.data.productInformation) {
            keys.push(k);
          }
          keys.sort();

          for (var k in response.data.variantTypes) {
            variantKeys.push(k);
          }

          variantKeys.sort()


          // console.log("keys", keys);
          //productInformation= response.data.productInformation;
          //getProductInformationKeys(productInformation)
          // ImgHandler('data:image/jpg;base64,' +product.productImage1.data);
          //setimage('data:image/jpg;base64,'+product.productImage1.data);
          setIsImgLinkFinal(true);
          SetIsProductInformationSet(true);
          SetIsKeysFetched(true);
          SetIsVariantKeysFetched(true);
          SetIsLoading(false);
        }
      }).catch(function (error) {
        // console.log("error", error.response);
        toast.warn("Item already present in cart")
      })

      axios({
        method: "get",
        url: url+"/get-reviews/" + localStorage.getItem("productSelected")
      }).then(function (reviewresponse) {
        // console.log(reviewresponse);
        if (reviewresponse.status == 200) {
          // console.log("Review Response", reviewresponse.data);
          setReview(reviewresponse.data);
          setIsReviewFetched(true);


          // console.log("Average rating: ", reviewresponse.data.averageRatings);
          // averagerate = parseInt(reviewresponse.data.averageRatings);
          SetAverageRate(parseInt(reviewresponse.data.averageRatings));
          // console.log("Average ", averagerate);
        }
      }).catch(function (error) {
        console.log("error");
      })
      // console.log("Url", url+"/similar-products/" + localStorage.getItem("productSelected") + "/" + localStorage.getItem("SubSubCategory") + "/"  + localStorage.getItem("Category"));
      
      // console.log("Url", url+"/similar-products/" + localStorage.getItem("productSelected") + "/" + localStorage.getItem("SubSubCategory") + "/"  + localStorage.getItem("Category"));
      if(localStorage.getItem("SubSubCategory") != null && localStorage.getItem("Category") != null){
        axios.get(url+"/similar-products/" + localStorage.getItem("productSelected") + "/" + localStorage.getItem("SubSubCategory") +  "/" + localStorage.getItem("Category")).then(
          function (response) {
            if (response.status == 200) {
              // console.log(response.data);
              // console.log("In similar products",response.data)
              setProductList(response.data);
              SetIsProductListFetched(true);
            }
          }).catch(function (error) {
            console.log("error", error.response);
          }
          );
      }
      

    }
  }, []);



  function getProductInformationKeys(productInformation) {
    if (isProductInformationSet && !isKeysFetched) { }

  }

  function callProductDetails(index) {
    //alert(index);
    // console.log("Index", index);
    localStorage.setItem("productSelected", index.modelNumber);
    // console.log("Product Selected", localStorage.getItem("productSelected"))
    localStorage.setItem("productId", index.productId);
    localStorage.setItem("SubSubCategory", index.subCategoryMap[localStorage.getItem("SubCategory")]);
    // navigate("/productDetails")
    window.location.reload();
  }

  const navigate = useNavigate();

  const handleAddToCart = () => {

    var items = localStorage.getItem("CartItems");
    if (items == null || items == undefined) {
      localStorage.setItem("CartItems", product.modelNumber);
    } else {
      items += product.modelNumber + ",";
      localStorage.setItem("CartItems", items);
    }

    var isLoggedIn = localStorage.getItem("isLoggedIn");
    // console.log("loggedIn", isLoggedIn);

    if (isLoggedIn === "true") {

      var form_data_body = {
        modelNumber: product.modelNumber,
      }

      axios.post(url+"/add-to-cart", form_data_body, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": "Bearer " + localStorage.getItem("jwtToken")
        },
      }).then(function (response) {
        // console.log(response);
        if (response.status == 200) {
          // console.log("response", response);
          // console.log("Item added to cart successfully");
          navigate("/cart");
        } else {
          // console.log("In else");
          toast.warn(<b>Item already present in cart</b>)
          // console.log(response.data.message);
          return;
        }
      }).catch(function (error) {
        // console.log(error);
        toast.warn(<b>Item already present in cart</b>)
        return;
      })

    } else {
      navigate("/cart");
    }



  }

  var cards = <div>
    <img className="logo_mahavir" src={require('../../assets/images.jpg')} alt="God" />
  </div>



  const handleBuyNow = (product) => {

    if(getCookie("isLoggedIn")==='true'){
      if (Pincode.includes(parseInt(pin))) {
        
        if (flag == false) {
          // alert("Buy Now ");
        } else if (quantity <= 0) {
          toast.error(<b>Please enter a positive number</b>);
        } else {
          // alert("Quantity:" + quantity);
        }
        // console.log("Product", product);
        localStorage.setItem("buyProduct",JSON.stringify(product));
        localStorage.setItem("type", "buyNow");
        var arr = [];
        arr.push(product.modelNumber+"=1");
        setCookie("models",arr,20);
        navigate("/checkout")
      } else {
        toast.error(<b>Please enter pincode</b>)
      }
   }
  else
  {
    navigate("/login")
  }
  }

  const InputPin = (e) => {
    pin = e.target.value
    // console.log("Pincode: ", pin)
  }

  const CheckPinHandler = () => {
    if (Pincode.includes(parseInt(pin))) {
      toast.success(<b>Delivery Available</b>)
    }
    else {
      toast.error(<b>Delivery Not available</b>)
    }
  }

  function fetchOfferAvailableBtn(offerPrice, productPrice) {
    if (offerPrice === productPrice) {
      return <Button variant="flat" size="m" style={{ visibility: "hidden" }}>Offer Available</Button>
    }
    return <Button variant="flat" size="m">Offer Available</Button>
  }

  const handleAddToCompare = event => {
    if (event.target.checked) {

      // console.log('✅ Checkbox is checked');

      setChange(change + 1)



    } else {
      // console.log('⛔️ Checkbox is NOT checked');
      setChange(change - 1)
    }
    setisAddCompareClicked(current => !current);

    // alert("Added To Compare");

  }


  function ImgHandler(e) {
    imglink = { e };

    setimage(imglink.e);
    // console.log("imglink.e", imglink.e);
    // console.log("Img Final:", imglinkfinal);
    // console.log("Image: ", imglink)
  }

  function handleBtnClick(variantName) {
    // console.log("Variant Btn Clicked", variantName.index);
    axios({
      method: "get",
      url: "http://localhost:8080/get-products/" + localStorage.getItem("productSelected") + "/" + variantName.index
    }).then(function (response) {
      if (response.status == 200) {
        // console.log("response data", response.data);
        setProduct(response.data);
        setimage(response.data.productImage1);
      }
    }).catch(function (error) {
      // console.log("error", error);
    })

  }
  var variantcolorone = "";
  var variantcolortwo = "";
  var variantcolorthree = "";
  var variantcolorfour = "";
  var variantcolorfive = "";
  // console.log("Percentage: ", (review.nosOfFiveStars / review.totalReviews) * 100);
  if ((review.nosOfFiveStars / review.totalReviews) * 100 >= 70) {
    variantcolorfive = "success";
  } else if ((review.nosOfFiveStars / review.totalReviews) * 100 >= 50 && (review.nosOfFiveStars / review.totalReviews) * 100 < 70) {
    variantcolorfive = "info";
  } else if ((review.nosOfFiveStars / review.totalReviews) * 100 >= 20 && (review.nosOfFiveStars / review.totalReviews) * 100 < 50) {
    variantcolorfive = "warning";
  } else {
    variantcolorfive = "danger";
  }

  if ((review.nosOfFourStars / review.totalReviews) * 100 >= 70) {
    variantcolorfour = "success";
  } else if ((review.nosOfFourStars / review.totalReviews) * 100 >= 50 && (review.nosOfFourStars / review.totalReviews) * 100 < 70) {
    variantcolorfour = "info";
  } else if ((review.nosOfFourStars / review.totalReviews) * 100 >= 20 && (review.nosOfFourStars / review.totalReviews) * 100 < 50) {
    variantcolorfour = "warning";
  } else {
    variantcolorfour = "danger";
  }

  if ((review.nosOfThreeStars / review.totalReviews) * 100 >= 70) {
    variantcolorthree = "success";
  } else if ((review.nosOfThreeStars / review.totalReviews) * 100 >= 50 && (review.nosOfThreeStars / review.totalReviews) * 100 < 70) {
    variantcolorthree = "info";
  } else if ((review.nosOfThreeStars / review.totalReviews) * 100 >= 20 && (review.nosOfThreeStars / review.totalReviews) * 100 < 50) {
    variantcolorthree = "warning";
  } else {
    variantcolorthree = "danger";
  }

  if ((review.nosOfTwoStars / review.totalReviews) * 100 >= 70) {
    variantcolortwo = "success";
  } else if ((review.nosOfTwoStars / review.totalReviews) * 100 >= 50 && (review.nosOfTwoStars / review.totalReviews) * 100 < 70) {
    variantcolortwo = "info";
  } else if ((review.nosOfTwoStars / review.totalReviews) * 100 >= 20 && (review.nosOfTwoStars / review.totalReviews) * 100 < 50) {
    variantcolortwo = "warning";
  } else {
    variantcolortwo = "danger";
  }

  if ((review.nosOfOneStars / review.totalReviews) * 100 >= 70) {
    variantcolorone = "success";
  } else if ((review.nosOfOneStars / review.totalReviews) * 100 >= 50 && (review.nosOfOneStars / review.totalReviews) * 100 < 70) {
    variantcolorone = "info";
  } else if ((review.nosOfOneStars / review.totalReviews) * 100 >= 20 && (review.nosOfOneStars / review.totalReviews) * 100 < 50) {
    variantcolorone = "warning";
  } else {
    variantcolorone = "danger";
  }


  function WishlistHandler(index) {
    // alert("Item added successfully to wishlist");
    // console.log(index.modelNumber)
    if (localStorage.getItem("wishlistproduct") == null) {
      localStorage.setItem("wishlistproduct", index.modelNumber)
    } else {
      var arr = localStorage.getItem("wishlistproduct").split(',')
      var flag = true;
      arr.map(i => {

        // console.log("i: ", i)
        if (i === index.modelNumber) {
          arr.splice(arr.indexOf(i), 1)
          localStorage.setItem("wishlistproduct", arr)
          // console.log('del arr: ' + arr)
          // console.log('del ls: ' + localStorage.getItem("wishlistproduct"))
          // console.log("in if")
          flag = false;
        }
      })
      // if(flag)
      //   localStorage.setItem("wishlistproduct",localStorage.getItem("wishlistproduct")+","+index.modelNumber)
      //   navigate('/')

    }

  }

  const getproductimg1 = (product) => {
    if (product.productImage1 != null) {
      return (
        <img className="productdetailimg" src={product.productImage1} onClick={() => ImgHandler(product.productImage1)} />
      )
    }
  }

  const getproductimg2 = (product) => {
    if (product.productImage2 != null) {
      return (
        <img className="productdetailimg" src={product.productImage2} onClick={() => ImgHandler(product.productImage2)} />
      )
    }
  }

  const getproductimg3 = (product) => {
    if (product.productImage3 != null) {
      return (
        <img className="productdetailimg" src={product.productImage3} onClick={() => ImgHandler(product.productImage3)} />
      )
    }
  }

  const getproductimg4 = (product) => {
    if (product.productImage4 != null) {
      return (
        <img className="productdetailimg" src={product.productImage4} onClick={() => ImgHandler(product.productImage4)} />
      )
    }
  }

  const getproductimg5 = (product) => {
    if (product.productImage5 != null) {
      return (
        <img className="productdetailimg" src={product.productImage5} onClick={() => ImgHandler(product.productImage5)} />
      )
    }
  }
  const addtocart = (model) => {
    var flag = false;
    cart.map(index=>{
      if(index!=""){
        if(index.split("=")[0]===model){
          flag = true;
          toast.warn(<b>Item is already present in cart</b>)
        }
      }
    })
    // if (cart.has(model+"=1")) {
    //   alert("Item is already present in cart")
    // }
    if(!flag){
      // console.log("adddd" + model);
      cart.push(model+"=1");
      setCookie("CartModels", cart, 20);
      // console.log("Cart Models",cart)
      navigate("/cart")
      // alert("Added to cart" + model);
    }
  }
  var count = 0;


  const handleVariantChange = (event) => {
    var string = "";
    var required = "";
    variantKeys.map(key => {
      product.variantTypes[key].map(index => {
        if (document.getElementById(index).checked) {
          string = string + index + " ";
          required = index;
          count++;
          setVariantCount(count);
        }
      })
    })
    console.log("count", count);
    if (count == variantKeys.length) {
      // console.log("string", string);
      // console.log("required", required);
      // console.log("model No", product.modelNumber)
      // console.log("url", url+"/variant" + product.modelNumber + "/" + string.trim() + "/" + required.trim());

      axios.get(url+"/variant/" + product.modelNumber + "/" + string.trim() + "/" + required.trim())
        .then(function (response) {
          if (response.status == 200) {
            // console.log("product", response)
            localStorage.setItem("productSelected", response.data.message)
            window.location.reload()

          }
        }).catch(function (error) {
          console.log(error);
          toast.error("Sorry No Product Found with this combination")
        })

    }
  }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };


  return (
    <>
    <ToastContainer position="top-center"/>
    <div>
      <Header />
      {/* {
        (isQuantitySet) ? (
          <div>
            <p>{Quantity}</p>
          </div>
        ) : (
          null
        )
      } */}

      {
        (isProductFetched) ? (
          <>


            <div className="productdetailrow">
              {
                isLoading?(<LoadingSpinner/>):(null)
              }  
              <Row className="row1">
                <Col md={6} style={{flex:'auto'}}>
                  <div className="innercol1">
                  <Row className="imageslider">
              <Carousel activeIndex={index} onSelect={handleSelect}>
                  <Carousel.Item>
                    {
                      getproductimg1(product)
                    }
                  </Carousel.Item>
                  <Carousel.Item>
                    {getproductimg2(product)}
                  </Carousel.Item>
                  <Carousel.Item>
                  {getproductimg3(product)}
                  </Carousel.Item>
                  <Carousel.Item>
                    {getproductimg4(product)}
                  </Carousel.Item>
                  <Carousel.Item>
                  {getproductimg5(product)}
                  </Carousel.Item>
                </Carousel>
              </Row>

                    
                    <Row className="laptopimg" >
                      <Col md={2} className='smallImg'>
                    
                
                {getproductimg1(product)}
                {getproductimg2(product)}
                {getproductimg3(product)}
                {getproductimg4(product)}
                {getproductimg5(product)}
                
                    
                  

                      </Col>

                      <Col className="imageproduct" md={10} >
                    

                        <div className="largeimg" >


                          <ReactImageMagnify className="imgg" {...{
                            smallImage: {
                              alt: 'Wristwatch by Ted Baker London',
                              isFluidWidth: true,
                              src: imglinkfinal,


                            },
                            largeImage: {
                              src: imglinkfinal,
                              width: 1000,
                              height: 1400,
                              border: 'solid 1px #0000'
                              // width: 1200, height: 1800
                            }
                          }} />

                        </div>
                      </Col>
                    </Row >

                    <Row>
                      <Col md={2}></Col>
                      <Col md={10}>
                        <Row>
                      <Col className="addtocartcol">
                      <Button className="addtocart"  onClick={() => addtocart(product.modelNumber)}>Add To Cart<span> </span><HiOutlineShoppingCart/></Button>
                      
                      </Col>
                      <Col className="buynowcol">
                      <Button className="addtocart" onClick={()=>handleBuyNow(product)}>Buy Now</Button>

                      </Col>
                      </Row>
                      </Col>

                    </Row>


                  </div>

                </Col>
                <Col md={6} className="innercol" style={{
                  padding: '2%',
                  height: '800px',
                  overflowY: 'scroll'
                }}>




                  <Row className="inerrow1">
                    <h2 className="productname">{product.productName}</h2>
                    
                      {/* {
                        (isReviewFetched)?(
                          <>
                          <StarRatings name="small-rating" size={20} totalStars={5} rating={averagerate}/>
                          
                         
                          </>
                        ):(
                          null
                        )
                      } */}
                      
                      
                      {/* <StarRating name="small-rating" caption="Small!" size={30} totalStars={5} rating={3} /> */}


                      </Row>
                      <br></br>
                      <Row className="innerrow1">
                      {
                      (product.offerPrice == null) ? (
                        <h4 className="productprice">MRP: <b>₹{product.productPrice}</b></h4>
                      ) : (
                        <h4 className="productprice"><b style={{fontSize:"22px"}}>MSP:</b> <b style={{ marginRight: "20px", color: "#ed1c24",fontSize:"22px"}}>₹{product.offerPrice}</b> <b style={{fontSize:"16px",color:"grey"}}>MRP:</b>  <b style={{ textDecorationLine: "line-through", textDecorationStyle: "solid",marginRight:40,fontSize:"15px",color:"grey" }}>₹{product.productPrice}</b> <b style={{color:"green",marginLeft:"-30px"}}>{Math.round((parseInt(product.productPrice.replace(',',''))-parseInt(product.offerPrice.replace(',','')))*100/parseInt(product.productPrice.replace(',','')))}% off</b></h4>
                      )
                    }
                  </Row>
                  <br></br>
                  
                  
                  <Row>
                    {/* <h4><b><i>Available Offers</i></b></h4> */}
                    
                  </Row>
                  <Row className="producthigh">
                    <h4 className="rowtitle">Product Highlights</h4>
                    <Col style={{display:'block'}}>

                      {
                        (product.productHighlights != null) ? (
                          product.productHighlights.split(';').map(index => {
                            return (
                              <Row>
                              <h5 style={{ marginLeft: '10px' }}>•<span style={{ marginLeft: '10px' }}> </span>{index}</h5>
                              </Row>
                            );

                          })
                        ) : (
                          null
                        )

                      }
                      {/* <h6>{product.productHighlights}</h6> */}
                    </Col>
                    {
                      (product.freeItem) ? (
                        <Col md={6}>
                          <h5 style={{ textAlign: "center", color: "rgb(255,98,98)" }}><b><i>Free Gift Worth {product.freeItem.price}</i></b></h5>
                          <Row style={{ marginTop: 20 }}>
                            <Col md={4}>
                              <img style={{ width: 120, height: 120 }} src={product.freeItem.image}></img>

                            </Col>
                            <Col md={8}>
                              <h5>{product.freeItem.name}</h5>
                            </Col>
                          </Row>

                        </Col>
                      ) : (null)
                    }

                  </Row>
                  <Row className="inerrow1">
                  {
                    (variantKeys.length > 0) ? (
                      <h4 className="rowtitle">Variants: {variantCount}/{variantKeys.length}</h4>
                    ) : (
                      null
                    )
                  }

                  {
                    (isVariantKeysFetched) ? (
                      variantKeys.map((key, pos) => {
                        return (
                          <Row style={{display:'flex'}} className="variants">
                            <Col md={2}>
                            <h4 className="infotitle">{key.substring(1)}</h4>

                            </Col>
                            <Col md={10} className="infovalues">
                            {
                              product.variantTypes[key].map((index) => {
                                return (
                                  <Form.Check
                                    type="radio"
                                    value={index}
                                    id={index}
                                    name={key}
                                    label={index}
                                    onChange={handleVariantChange}
                                    
                                  />
                                )
                              })
                            }
                            </Col>
                          </Row>

                        );
                      })
                    ) : (
                      null
                    )
                  }
</Row>
                  


                  <Row className="pincoderow">
                    <Col>
                      <h4 className="rowtitle">DELIVERY TO</h4>
                    </Col>
                    <Col>
                      <Input className="pininput" placeholder="Enter Pincode" type="number" onChange={InputPin}></Input>
                    </Col>
                    <Col>
                      <Button className="checkpinbtn" onClick={CheckPinHandler}>Check Pincode</Button>

                    </Col>
                  </Row>
                  <br></br>
                  
                  
                 
                  <Row className="specifications">
                  {/* <h4 className="rowtitle">Model Number: <b>{product.modelNumber}</b> </h4> */}
<Row style={{borderBottom:'1px solid #E2E2E2'}}>
<h4 className="rowtitlespec">Specifications</h4>

</Row>
                   <Row>
                    {
                      (isKeysFetched) ? (
                        keys.map(k => {
                          return (

                            <ProductSpecification title={k} product={product} />

                          );
                        })

                      ) : (
                        null
                      )
                      }
</Row>
                  </Row>
                  <Row className="specifications">
                    <Row style={{borderBottom:'1px solid #E2E2E2'}}>
                    <h4 className="rowtitle">Ratings and Reviews</h4>

                    </Row>
                  <Col md={2} style={{padding:'2%'}}>
                  <Row >
                  <h3>{Math.round(review.averageRatings * 10) / 10}<span style={{marginLeft:'20px'}}> </span><AiIcons.AiFillStar size={20} /></h3>
                                        
                  </Row>

                  </Col>
                      

                    <Col md={10} style={{padding:'2%'}}>
                    <table className="ratings">
                      <tr>
                        <td>5⭐<span> </span></td>
                        <td><ProgressBar style={{width:'180px',marginLeft:'10px'}} striped variant="success" now={review.nosOfFiveStars*100/(review.nosOfOneStars+review.nosOfTwoStars+review.nosOfThreeStars+review.nosOfFourStars+review.nosOfFiveStars)} /></td>
                        <td><span style={{marginLeft:'10px'}}> </span>{review.nosOfFiveStars}</td>
                      </tr>
                      <tr>
                        <td>4⭐<span> </span></td>
                        <td><ProgressBar style={{width:'180px',marginLeft:'10px'}} striped variant="success" now={review.nosOfFourStars*100/(review.nosOfOneStars+review.nosOfTwoStars+review.nosOfThreeStars+review.nosOfFourStars+review.nosOfFiveStars)} /></td>
                        <td><span style={{marginLeft:'10px'}}> </span>{review.nosOfFourStars}</td>
                      </tr>
                      <tr>
                        <td>3⭐<span> </span></td>
                        <td><ProgressBar style={{width:'180px',marginLeft:'10px'}} striped variant="success" now={review.nosOfThreeStars*100/(review.nosOfOneStars+review.nosOfTwoStars+review.nosOfThreeStars+review.nosOfFourStars+review.nosOfFiveStars)} /></td>
                        <td><span style={{marginLeft:'10px'}}> </span>{review.nosOfThreeStars}</td>
                      </tr>
                      <tr>
                        <td>2⭐<span> </span></td>
                        <td><ProgressBar style={{width:'180px',marginLeft:'10px'}} striped variant="success" now={review.nosOfTwoStars*100/(review.nosOfOneStars+review.nosOfTwoStars+review.nosOfThreeStars+review.nosOfFourStars+review.nosOfFiveStars)} /></td>
                        <td><span style={{marginLeft:'10px'}}> </span>{review.nosOfTwoStars}</td>
                      </tr>
                      <tr>
                        <td>1⭐<span> </span></td>
                        <td><ProgressBar style={{width:'180px',marginLeft:'10px'}} striped variant="success" now={review.nosOfOneStars*100/(review.nosOfOneStars+review.nosOfTwoStars+review.nosOfThreeStars+review.nosOfFourStars+review.nosOfFiveStars)} /></td>
                        <td><span style={{marginLeft:'10px'}}> </span>{review.nosOfOneStars}</td>
                      </tr>
                    
                    </table>
                    </Col>
                    
                  
                  </Row>
                  <Row>
                    <br></br>


                    {
                      (isReviewFetched) ? (

                        review.reviews.map((index) => {
                          return (
                            <Row>
                              <Row>
                                <Col md={1} style={{backgroundColor:"green",borderRadius:"20px",height:"fit-content"}}>

                                  {index.rating}<AiFillStar />
                                </Col>
                                <Col>
                                  <p>{index.reviewer_name}</p>
                                </Col>
                              </Row>
                              <Row>
                                <Col style={{ marginLeft: 70 }}>
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


            </div>
            <div style={{
              backgroundColor: 'rgb(255, 255, 255)',
              padding: '16px',
              borderRadius: '2px',
              boxShadow: 'rgb(0 0 0 / 8%) 0px 2px 4px 0px',
              backgroundColor: 'rgb(255 255 255)',
              padding: ' 16px',
              margin: ' 20px'
            }}>
              {
                (isProductListFetched && productList.length != 0) ? (
                  <h3 className="textsimilar" style={{ marginLeft: "20px" ,fontSize:"25px"}}>Similar Products</h3>
                ) : (
                  null
                )
              }
              <br></br>
              {
                (isProductListFetched) ? (
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
                  > 
                  {/* {console.log("Product List", productList)} */}
                    {
                      cards = productList.map(index => {

                      

                        return (
                          <SwiperSlide >
                            <Card style={{ width: '25rem' , cursor:'pointer' }} className="mb-2">
                              {/* <AiOutlineHeart style={{ marginTop: "10px", marginLeft: "5px" }} className="wishlisticon" size={30} onClick={() => WishlistHandler(index)} /> */}
                              <center>
                              <CardImg className="this.props.img" style={{height:"180px" , width:"160px"}} onClick={() => callProductDetails(index)}
                                src={index.productImage1} />
                              </center>
                              <CardBody>
                                <CardTitle className="this.props.h6 change" onClick={() => callProductDetails(index)}>
                                  <h6 className="similarproductname"><b>{index.productName}</b></h6>
                                </CardTitle>
                                <CardSubtitle onClick={() => callProductDetails(index)}>
                                  {/* <s>₹{index.productPrice}</s> */}
                                  <b style={{color:"#C10000"}} >₹{index.offerPrice}</b> 
                                  <b style={{ textDecorationLine: "line-through", textDecorationStyle: "solid",marginLeft:"10px",fontSize:"15px",color:"grey" }}>₹{product.productPrice}</b>
                                  <br></br>
                                </CardSubtitle>
                                
                              </CardBody>
                              <br></br>
                            </Card>
                          </SwiperSlide>
                        )
                      })
                    }
                  </Swiper>
                ) : (
                  null
                )
              }




            </div>
            <Footer/>
          </>
        ) : (null)
      }
    </div>
    </>
  );
  {/* // <br></br> */ }

  {/* // </div> */ }


}


export default ProductDetails;