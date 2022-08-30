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
import { MDBCarousel, MDBCol, MDBCarouselInner, MDBCarouselItem, MDBCarouselElement, MDBCardHeader, MDBCardFooter, MDBBtn, MDBRow, MDBCard, MDBCardBody, MDBCardTitle, MDBCardSubTitle, MDBCardText, MDBCardLink, MDBCardImage, MDBContainer } from 'mdb-react-ui-kit';
import { AiOutlineHeart, AiTwotoneHeart, AiFillHeart } from "react-icons/ai";
import {useRef} from 'react';
import { white } from "material-ui/styles/colors";
import { fullWhite } from "material-ui/styles/colors";
import url from "../../Uri";
import Footer from "../Footer/Footer";
import MovingComponent from 'react-moving-text';
import {AiOutlineCaretRight} from "react-icons/ai"

function BrandDetails() {
    
    const iMac = useRef(null);
    const navigate = useNavigate();
    var offerPoster = <div>
        <img className="logo_mahavir" src={require('../../assets/images.jpg')} alt="Mandala" />
    </div>
    var models = [];
    var offermodel = [];
    console.log("In Brand details")
    var cards = <div>
        <img className="logo_mahavir" src={require('../../assets/images.jpg')} alt="God" />
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

    console.log("stringify: ", parsedArr);
    console.log("Stringify 1:", parsedArray);

    console.log("links:", videoLinks);
    // console.log("categories", categories);

    useEffect(() => {
    window.addEventListener('scroll', () => { if (window.scrollY > 700) { setAnimation(true); } else { setAnimation(false); } });

        window.scrollTo(0, 0)
        if (!isBrandsFetched) {
            axios.get(url+"/excel/shopByBrands").then(
                function (response) {
                    if (response.status == 200) {
                        console.log("Response", response.data);
                        brands.push(response.data);

                        setIsBrandsFetched(true);
                        console.log("Brands", brands);

                    }
                }).catch(function (error) {
                    console.log("error", error);
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
        console.log("arr", index.category)
        index.products.map(i=>{
            console.log("in",i.productImage1)
        })
    })

    function handleClick(index) {
        // parsedArr.map(index=>{
        //      models += index.modelNumbers;
        // })
        localStorage.setItem("shopbrandcat", index)
        localStorage.setItem("brandcatname",index.category)
        console.log("Get cat: ", localStorage.getItem("shopbrandcat"))
        // console.log("Model Num: ",index.products.modelNumber)
        // models.push(index.products.modelNumber);
        // console.log("model", models);
        // localStorage.setItem("models", models);
        // console.log("Models: ",localStorage.getItem("models"));
        // console.log("model", models);
        console.log("on cat click");
        navigate('/brandcatproducts')
    }


    parsedArr.map(index=>{
        // models+=index.category+",";
        models.push(index.category);
    })
    console.log("Models: ",models)


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
        console("Index: ",index)
        console.log("on cat click");
        // ref.current?.scrollIntoView({behavior: 'smooth'});
        // console.log("Ref: ",ref.current)
        
    }

    const handleOfferPosterOnClick = (modelNumbers) => {
        console.log("Item Clicked");

        offermodel = modelNumbers;
        localStorage.setItem("offermodels", offermodel);
        console.log("Offer Models: ", localStorage.getItem("offermodels"));
        navigate('/brandofferposterproducts')
    }

    function callProductDetails(index) {
        //alert(index);
        console.log("Index", index);
        localStorage.setItem("productSelected", index.modelNumber);
        localStorage.setItem("productId", index.productId);
        console.log("Product Id",localStorage.getItem("productId"));
        console.log("Product Selected", localStorage.getItem("productSelected"))
        navigate("/productDetails")
      }


    // const handleOfferPosterOnClick=(modelNumbers)=>{
    //     // alert("Offer Poster clicked");

    //     console.log(modelNumbers);
    //     localStorage.setItem("offerPostersModelNumber",modelNumbers)
    //     console.log(localStorage.getItem("offerPostersModelNumber"))
    //     navigate("/offers")
    //   }


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

                            console.log("image", index.offerPoster);
                            // var imgsrc = String.format("data:image/jpg;base64,{0}",index.image.data);
                            return (


                                <CarouselItem interval={1000} onClick={() => handleOfferPosterOnClick(index.modelNumbers)}>

                                    <Image id="classname"
                                        className="d-block w-100"
                                        src={index.offerPoster}
                                        alt={index.alt}
                                        height={500}




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
                            console.log("Cat Img: ", index.catImage)
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
                                    <Col md={8}>
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
                    <span className="categorytitle"  filter-content="S">{index.category}</span>
                    
                  </MovingComponent>
                   
                   ) : (null)
                  }
                  


                </Col>
                                    {/* <h3 className="brand_feature_product_cat_title" id={index.category} >{index.category}</h3> */}
                                    <Col md={4} style={{display:'flex',justifyContent:'end'}}>
                  <button onClick={() => handleClick(index.category)} class="explore">View More<span class="icon-right after"></span></button>

                </Col>
                                    {/* <Col md={2}>
                                        <button className="brand_feature_product_btn" onClick={() => handleClick(index.category)} >View More <AiOutlineCaretRight/></button>
                                    </Col> */}
                                </Row>
                                <Container style={{width:'90%',height: '429px'}}>
                                
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
                        <center><MDBCardImage className="brand_category_product_cardimage" src={index.productImage1} alt='...' position='top' /></center>
                       

                        {
                          (localStorage.getItem("Wishlist") != null && localStorage.getItem("Wishlist").includes(index.modelNumber)) ?
                            <AiFillHeart style={{ marginLeft: '0px', marginTop: '10px', marginRight: '10px', alignSelf: 'end', fill: 'rgb(255, 88, 88)' }} className="wishlisticon" size={30} /> :
                            <AiOutlineHeart style={{ marginLeft: '0px', marginTop: '10px', marginRight: '10px', alignSelf: 'end' }} className="wishlisticon" size={30} />
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
                                                
                                                
                                                    
                //                                     <div className="brand_category_products_swiper">
                //                                     <Row style={{marginTop:'10px'}} className='row-cols-1 row-cols-md-3 g-4'>
                
                
                //                                     {

                //                                     index.products.slice(0, 4).map(i=>{
                //                                                 console.log("inside products")
                //                                                 console.log("in pro",i.productName)
                //                                                 return(
                                                                
                //                                                     <Card className="brand_category_product_card" >
                //                                                     <Card.Img className="brand_category_product_img" variant="top" src={i.productImage1} />
                //                                                     <Card.Body>
                //                                                       <Card.Title>{i.productName}</Card.Title>
                //                                                       <Card.Text>
                //                                                     <b >₹{i.offerPrice}</b>

                //                                                       <s style={{ marginLeft: 10 }}>₹{i.productPrice}</s>
                //                                                       </Card.Text>
                //                                                     </Card.Body>
                //                                                   </Card>
                                                                    
                //                                                         // <Container onClick={()=>callProductDetails(i)}>
                //                                                         // <center> 
                //                                                         // <Image src={i.productImage1} style={{ width: 100, margin: 5, height:250, cursor:"pointer" }} />
                //                                                         // </center>  
                //                                                         // <h6>{i.productName}</h6>
                //                                                         // </Container>
                                                                        

                                                                    
                                                                    
                //                                                 )
                //                                             })
                //                                             // return (
                //                                             //     <div className="container">
                
                //                                             //         <SwiperSlide>
                //                                             //             <Image src={index.catImage} style={{ width: 100, margin: 5 }} />
                //                                             //             <Button onClick={() => handleClick(index.category)} variant="outline-primary" className="brandcategory">{index.category}</Button>
                //                                             //         </SwiperSlide>
                //                                             //     </div>
                //                                             // )
                                                        
                //                                     }
                // </Row>
                //                                 </div>   
                                               
                                            
                                            
                                        
                                    }

</Container>
                                {/* <Swiper
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
                                    className="mySwiper"
                                    style={{ height: '150px' }}
                                >


                                    {
                                        cards = parsedArr.map(index => {
                                            // console.log("Cat Img: ", index.catImage)
                                            console.log("insided parsedarr")
                                            index.products.map(i=>{
                                                console.log("inside products")
                                                console.log("in pro",i.productName)
                                                return(
                                                    <SwiperSlide>
                                                        <h6>{i.productName}</h6>
                                                    </SwiperSlide>
                                                    
                                                )
                                            })
                                            // return (
                                            //     <div className="container">

                                            //         <SwiperSlide>
                                            //             <Image src={index.catImage} style={{ width: 100, margin: 5 }} />
                                            //             <Button onClick={() => handleClick(index.category)} variant="outline-primary" className="brandcategory">{index.category}</Button>
                                            //         </SwiperSlide>
                                            //     </div>
                                            // )
                                        })
                                    }

                                </Swiper> */}
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
                                    <SwiperSlide>
                                        <iframe width="70%" height="500px" src={index} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </SwiperSlide>
                                </div>
                            )
                        })
                    }

                </Swiper>

            </Row>
            <Footer/>

        </div>


    )
}
export default BrandDetails;