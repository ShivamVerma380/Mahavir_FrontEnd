import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import { Button } from "react-bootstrap";

import './ShopByBrands.css';

import { Carousel, CarouselItem } from "react-bootstrap";
import Header from "../Header";
import { Col, Row, Form, Card, Container, Image } from "react-bootstrap";
import { MDBRow, MDBCard, MDBCardBody, MDBCardTitle, MDBCardSubTitle, MDBCardText, MDBCardLink, MDBCardImage, MDBContainer } from 'mdb-react-ui-kit';
import { AiOutlineHeart, AiTwotoneHeart, AiFillHeart } from "react-icons/ai";
import {useRef} from 'react';
import { white } from "material-ui/styles/colors";
import { fullWhite } from "material-ui/styles/colors";
import url from "../../Uri";
import Footer from "../Footer/Footer";
import {AiOutlineCaretRight} from "react-icons/ai"
import {FaAngleRight} from "react-icons/fa"
import { flexbox } from "@mui/system";
import { getCookie, setCookie } from "../Cookies";
import { ToastContainer, toast } from 'react-toastify';

function BrandDetails() {
    var token = getCookie("jwtToken");
    const iMac = useRef(null);
    const navigate = useNavigate();
    var offerPoster = <div>
        <img className="logo_mahavir" alt="Mandala" />
    </div>
    var models = [];
    var offermodel = [];
    // console.log("In Brand details")
    var cards = <div>
        <img className="logo_mahavir" alt="God" />
    </div>
    const [brands, setBrands] = useState([]);
    const [isBrandsFetched, setIsBrandsFetched] = useState(false);
    const[animation,setAnimation] = useState(false);

    var videoLinks = localStorage.getItem("brandVideoLinks").split(',');
    // var categories = localStorage.getItem("finalBrandCategories").split(',');
    
    const str = localStorage.getItem("array");
    const string = localStorage.getItem("jsonarray");

    // convert string to valid object
    const parsedArr = JSON.parse(str);
    const parsedArray = JSON.parse(string);

    // console.log("stringify: ", parsedArr);
    // console.log("Stringify 1:", parsedArray);

    // console.log("links:", videoLinks);
    // console.log("categories", categories);

    window.scrollTo(0,0)
    
    useEffect(() => {
        
    // window.addEventListener('scroll', () => { if (window.scrollY > 700) { setAnimation(true); } else { setAnimation(false); } });

        // window.scrollTo(0, 0)
        if (!isBrandsFetched) {
            axios.get(url+"/excel/shopByBrands").then(
                function (response) {
                    if (response.status == 200) {
                        // console.log("Response", response.data);
                        brands.push(response.data);

                        setIsBrandsFetched(true);
                        // console.log("Brands", brands);

                    }
                }).catch(function (error) {
                    console.log("error in shopByBrands");
                    
                }
                );


        }
    });

    // brands.map(index => {
    //     console.log("index", index)
    //     index.map(i => {
    //         console.log("i", i.brandCategories)

    //         i.brandCategories.map(f=>{
    //             console.log("title",f.category)
    //             f.products.map(d=>{
    //                 console.log("d",d.productImage1);
    //             })
    //         })
    //     })
    // })
    parsedArr.map(index => {
        // console.log("arr", index.category)
        index.products.map(i=>{
            // console.log("in",i.productImage1)
        })
    })

    function handleClick(index) {
        // parsedArr.map(index=>{
        //      models += index.modelNumbers;
        // })
        localStorage.setItem("shopbrandcat", index)
        localStorage.setItem("brandcatname",index.category)
        // console.log("Get cat: ", localStorage.getItem("shopbrandcat"))
        // console.log("Model Num: ",index.products.modelNumber)
        // models.push(index.products.modelNumber);
        // console.log("model", models);
        // localStorage.setItem("models", models);
        // console.log("Models: ",localStorage.getItem("models"));
        // console.log("model", models);
        // console.log("on cat click");
        navigate('/brandcatproducts')
    }


    parsedArr.map(index=>{
        // models+=index.category+",";
        models.push(index.category);
    })
    // console.log("Models: ",models)


    const handleScroll= async (index)=> {
        
        
        // let offset = 20;
        // window.scrollTo({
        //     behavior: "smooth",
        //     top:
        //     document.getElementById(index).getBoundingClientRect().top -
        //     document.body.getBoundingClientRect().top -
        //     offset
            
        // });
        document.getElementById(index).scrollIntoView();
        // console("Index: ",index)
        // console.log("on cat click");
        // ref.current?.scrollIntoView({behavior: 'smooth'});
        // console.log("Ref: ",ref.current)
        
    }

    const handleOfferPosterOnClick = (modelNumbers) => {
        // console.log("Item Clicked");

        offermodel = modelNumbers;
        localStorage.setItem("offermodels", offermodel);
        // console.log("Offer Models: ", localStorage.getItem("offermodels"));
        navigate('/brandofferposterproducts')
    }

    function callProductDetails(index) {
        //alert(index);
        // console.log("Index", index);
        localStorage.setItem("productSelected", index.modelNumber);
        localStorage.setItem("productId", index.productId);
        // console.log("Product Id",localStorage.getItem("productId"));
        // console.log("Product Selected", localStorage.getItem("productSelected"))
        navigate("/productDetails")
      }


    // const handleOfferPosterOnClick=(modelNumbers)=>{
    //     // alert("Offer Poster clicked");

    //     console.log(modelNumbers);
    //     localStorage.setItem("offerPostersModelNumber",modelNumbers)
    //     console.log(localStorage.getItem("offerPostersModelNumber"))
    //     navigate("/offers")
    //   }

    function RemoveWishlist(index){

        // console.log("Wishlist",localStorage.getItem("Wishlist"))
    
        console.log("Wishlist",localStorage.getItem("wishlistproduct"))
        console.log("in remove")
    
        var formdata = {
          "modelNumber": index.modelNumber
    
        }
        axios.post(url+"/delete-wishlist", formdata, {
          headers: {
            "Authorization": "Bearer "+getCookie("jwtToken"),
            "Content-Type": "multipart/form-data"
          }
        }).then(function (response) {
          if (response.status == 200) {
            var arr = localStorage.getItem("wishlistproduct").split(",")
            var finalWishlist=[];
            arr.map(a=>{
              if( a!=="" && a!==index.modelNumber){
                finalWishlist.push(a)
              }
            })
            localStorage.setItem("wishlistproduct",finalWishlist)
            window.location.reload();
            // navigate("/");
          }
        }).catch(function (error) {
          console.log("Error", error);
        })
      }

    function WishlistHandler(index) {
    

        if(getCookie("isLoggedIn")!=='true'){
          navigate("/login")
      } else {
      
      if (localStorage.getItem("wishlistproduct")==null) {
       localStorage.setItem("wishlistproduct",index.modelNumber)
      }else {
       var arr = localStorage.getItem("wishlistproduct").split(',')
       var flag = true;
       arr.map(i=>{
       
         
         if( i=== index.modelNumber) {
            arr.splice(arr.indexOf(i),1)
             localStorage.setItem("wishlistproduct",arr)
           
           flag = false;
         } 
       }) 
       if(flag)
        localStorage.setItem("wishlistproduct",localStorage.getItem("wishlistproduct")+","+index.modelNumber)
         navigate('/branddetails')
      
      }
      
      
      
      
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
          
         
        }
      }).catch(function (error) {
        if(error.response.status==406) {
          toast.warn(<b>Item already present in Wishlist</b>)
          
        }
        else {
          toast.error(<b>SignIn First</b>)
          console.log("Error", error);
        }
        
      })
      }
      
        }

    function fetchOfferAvailableBtn(offerPrice, productPrice) {
        if (offerPrice !== productPrice) {
          return <MDBCardText className="text">Offer Available</MDBCardText>
        }
        else {
          return <MDBCardText className="text">No Offer Available</MDBCardText>
        }
    
      }
    return (
        <div>
            <Header />
            <br></br>
            <Row className="brandheading">
            {/* style={{marginTop:'100px'}} */}
                <Container style={{width:"100%",backgroundColor: fullWhite}}>
                <center>
                    <Image className="brandimg" src={localStorage.getItem("brandLogo")} />
                </center>
                </Container>

            </Row>
            <br></br>
            {/* <center>
                <img style={{ height: 100, width: 150, borderRadius: "50px" }} src={'data:image/jpg;base64,' + localStorage.getItem("brandLogo")} />
            </center> */}

            <Row>

                <Carousel className="branddetails-slider" style={{margin:0 }}>
                    {
                        offerPoster = parsedArray.map(index => {
                            //let Base64string = Buffer.from(index.image.data,"base64").toString();

                            // console.log("image", index.offerPoster);
                            // var imgsrc = String.format("data:image/jpg;base64,{0}",index.image.data);
                            return (


                                <CarouselItem interval={1000} onClick={() => handleOfferPosterOnClick(index.modelNumbers)}>

                                    <Image className="brandsliderimage"
                                        src={index.offerPoster}
                                        alt={index.alt}




                                    />

                                </CarouselItem>


                            )


                        })
                    }


                </Carousel>
            </Row>




            <Row>
                <h3 className="brand_feature_category">Featured Categories</h3>


                
                <Swiper
                   
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
                    className="brand_category_swiper"
                    
                   
                >


                    {
                        cards = parsedArr.map(index => {
                            // console.log("Cat Img: ", index.catImage)
                            return (
                                <div className="container">

                                    <SwiperSlide>
                                        <Container onClick={() => handleScroll(index.category)}>
                                         <center>   
                                        <Image  src={index.catImage} style={{ width: 70,height: 70 }} />

                                        <p className="brand_category_title">{index.category}</p>
                                        </center>
                                        </Container>
                                    </SwiperSlide>
                                </div>
                            )
                        })
                    }

                </Swiper>
                
            </Row>
                    <br></br>
                    <br></br>
            {
                parsedArr.map(index => {
                    return (
                            <>
                            <Row>
                                <Row className="brand_feature">
                                    {/* <Col md={8}>
                  <svg className="svgtitle" xmlns="http://www.w3.org/2000/svg">


                    <filter id="motion-blur-filter" filterUnits="userSpaceOnUse">


                      <feGaussianBlur stdDeviation="100 0"></feGaussianBlur>
                    </filter>
                  </svg>
                  
                  {
                    (animation) ? (
                      <MovingComponent
                      id={index.category}
                    type="fadeInFromLeft"
                    duration="1000ms"
                    delay="0s"
                    direction="normal"
                    timing="ease"
                    iteration="1"
                    fillMode="none">
                    <span className="brand_feature_product_cat_title"  filter-content="S">{index.category}</span>
                    
                  </MovingComponent>
                   
                   ) : (null)
                  }
                  


                </Col>
                                    <Col md={4}>
                                        <button className="brand_feature_product_btn" onClick={() => handleClick(index.category)} >View More <AiOutlineCaretRight/></button>
                                    </Col>
                                </Row> */}
                                <Col md={10}>
                                    <h3 className="brand_feature_product_cat_title" id={index.category} >{index.category}</h3>
                                    
                                    </Col>
                                    <Col md={2}>
                                        <button className="brand_feature_product_btn" onClick={() => handleClick(index.category)} >View More <FaAngleRight/></button>
                                        {/* <i class="fa fa-angle-right" aria-hidden="true"></i> */}
                                    </Col>
                                </Row>
                                <Container style={{width:'90%',marginBottom:'20px'}}>
                                
                                {
                                            // console.log("Cat Img: ", index.catImage)
                                            
                                            <MDBRow style={{ justifyContent: 'center', padding: '10px' }} className='row-cols-1 row-cols-md-3 g-4'>
                {
                  index.products.slice(0, 4).map(index => {
                    const images = [
                      {
                        url: index.productImage1,
                        url: index.productImage1,
                        url: index.productImage1
                      }
                    ];
                    return (
                      <MDBCard style={{marginTop:'3%'}} className="categoryproductscard" >
                        {/* <center><MDBCardImage className="brand_category_product_cardimage" src={index.productImage1} alt='...' position='top' /></center> */}
                        <div className="cardimg">
                        <MDBCardImage className="cardimage" src={index.productImage1}  alt='...' position='top' />
                        {
                          (index.productImage1 !== null && index.productImage2 !== null && index.productImage3 !== null) ?
                            <Carousel interval={1000} className="cardimage2" indicators='' variant="dark">
                              <Carousel.Item>
                                <img
                                  className="d-block w-100"
                                  src={index.productImage1}
                                  
                                  alt="First slide"
                                />
                              </Carousel.Item>
                              <Carousel.Item>
                                <img
                                  className="d-block w-100"
                                  src={index.productImage2}
                                  
                                  alt="Second slide"
                                />
                              </Carousel.Item>
                              <Carousel.Item>
                                <img
                                  className="d-block w-100"
                                  src={index.productImage3}
                                  
                                  alt="Third slide"
                                />
                              </Carousel.Item>
                            </Carousel>
                            : <MDBCardImage className="cardimage2" src={index.productImage1} alt='...' position='top' />


                        }

</div>

                        {
                          (localStorage.getItem("wishlistproduct") != null && localStorage.getItem("wishlistproduct").includes(index.modelNumber)) ?
                            <AiFillHeart style={{ marginLeft: '0px', marginTop: '10px', marginRight: '10px', alignSelf: 'end', fill: 'rgb(255, 88, 88)' }} className="wishlisticon" size={30} onClick={() => RemoveWishlist(index)}/> :
                            <AiOutlineHeart style={{ marginLeft: '0px', marginTop: '10px', marginRight: '10px', alignSelf: 'end' }} className="wishlisticon" size={30} onClick={() => WishlistHandler(index)}/>
                        }
                        <MDBCardBody className="categoryproductscardbody">
                          <MDBCardTitle className="cardtitle">{index.productName} </MDBCardTitle>
                          <MDBCardSubTitle style={{ marginTop: '5px', marginBottom: '5px', fontSize: '18px' }}>Rs. {index.offerPrice}</MDBCardSubTitle>

                          {
                            fetchOfferAvailableBtn(index.offerPrice, index.productPrice)
                          }
                        </MDBCardBody>
                        <MDBCardBody className="categoryproductscardbodyonhover">
                          <MDBCardTitle className="cardtitle">{index.productName} </MDBCardTitle>
                          <MDBCardSubTitle style={{ marginTop: '5px', marginBottom: '5px', fontSize: '18px' }}>Rs. {index.offerPrice}</MDBCardSubTitle>

                          <MDBCardText className="text" onClick={() => callProductDetails(index)}>
                            View Details
                          </MDBCardText>

                        </MDBCardBody>
                      </MDBCard>
                    )
                  })
                }


              </MDBRow>
                                                
                                                                        
                                        
                                    }

</Container>
                                
                            </Row>
                            </>
                       
                    )

                })
            }
            






            <br></br>
            
            <Row>
                <center><h3 className="brand_feature_category" >Featured Videos</h3></center>

                
            </Row>
            <br></br>
            <Row>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={5}
                    slidesPerGroup={1}
                    loop={false}
                    loopFillGroupWithBlank={true}
                    breakpoints={{
                        700: {
                            slidesPerView: 1,
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
                    className="videoswiper"
                >


                    {
                        cards = videoLinks.map(index => {
                            return (
                                <div>
                                    <SwiperSlide className="brandvideo">
                                        <iframe className="videoframe" width="560" height="315" src={index} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </SwiperSlide>
                                </div>
                            )
                        })
                    }

                </Swiper>

            </Row>
            <br></br>
            <Footer/>

        </div>


    )
}
export default BrandDetails;