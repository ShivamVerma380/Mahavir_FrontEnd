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
        window.scrollTo(0, 0)
        if (!isBrandsFetched) {
            axios.get("http://localhost:8080/excel/shopByBrands").then(
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




    return (
        <div>
            {/* <Header /> */}
            <br></br>
            <Row className="brandheading">
                <center>
                    <Image className="brandimg" src={localStorage.getItem("brandLogo")} />
                </center>
            </Row>
            {/* <center>
                <img style={{ height: 100, width: 150, borderRadius: "50px" }} src={'data:image/jpg;base64,' + localStorage.getItem("brandLogo")} />
            </center> */}

            <Row>

                <Carousel>
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
                <h3 style={{ color: "rgb(255,98,98", margin: '2%' }}><i>FEATURED CATEGORIES</i></h3>

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
                            slidesPerView: 3,
                        },
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                    style={{ height: '180px' }}
                >


                    {
                        cards = parsedArr.map(index => {
                            console.log("Cat Img: ", index.catImage)
                            return (
                                <div className="container">

                                    <SwiperSlide>
                                        <Container onClick={() => handleScroll(index.category)}>
                                         <center>   
                                        <Image src={index.catImage} style={{ width: 100, margin: 5, height: 100 }} />

                                        <h3>{index.category}</h3>
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
            <br></br>
            <br></br>

            {
                parsedArr.map(index => {
                    return (
                            <>
                            <Row>
                                <Row>

                                
                                    <Col md={3}>
                                    <h3 id={index.category} style={{ color: "rgb(255,98,98", margin: '2%' }}><i>{index.category}</i></h3>
                                    
                                    </Col>
                                    <Col md={7}>
                                    
                                    </Col>
                                    <Col md={2}>
                                        <button onClick={() => handleClick(index.category)} class="explore">View More<span class="icon-right after"></span></button>
                                    </Col>
                                </Row>
                                
                                {
                                            // console.log("Cat Img: ", index.catImage)
                                            
                                            
                                                
                                                
                                                    
                                                    <Swiper
                                                    slidesPerView={1}
                                                    spaceBetween={5}
                                                    slidesPerGroup={4}
                                                    loop={false}
                                                    loopFillGroupWithBlank={true}
                                                    breakpoints={{
                                                        700: {
                                                            slidesPerView: 4,
                                                        },
                                                        400: {
                                                            slidesPerView: 4,
                                                        },
                                                    }}
                                                    pagination={{
                                                        clickable: true,
                                                    }}
                                                    navigation={true}
                                                    modules={[Pagination, Navigation]}
                                                    className="mySwiper"
                                                    style={{ height: '350px' }}
                                                >
                
                
                                                    {
                                                            index.products.map(i=>{
                                                                console.log("inside products")
                                                                console.log("in pro",i.productName)
                                                                return(
                                                                
                                                                   
                                                                    <SwiperSlide>
                                                                        <Container onClick={()=>callProductDetails(i)}>
                                                                        <center> 
                                                                        <Image src={i.productImage1} style={{ width: 100, margin: 5, height:250, cursor:"pointer" }} />
                                                                        </center>  
                                                                        <h6>{i.productName}</h6>
                                                                        </Container>
                                                                        

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
                                                        
                                                    }
                
                                                </Swiper>   
                                               
                                            
                                            
                                        
                                    }
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
                            <br></br>
                            </>
                       
                    )

                })
            }
            







            <Row>
                <h3 style={{ color: "rgb(255,98,98", margin: '2%' }}><i>FEATURED VIDEOS</i></h3>


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
                    className="mySwiper"
                >


                    {
                        cards = videoLinks.map(index => {
                            return (
                                <div>
                                    <SwiperSlide>
                                        <iframe width="70%" height="500px" src={index} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </SwiperSlide>
                                    <br></br>
                                </div>
                            )
                        })
                    }

                </Swiper>

            </Row>


        </div>


    )
}
export default BrandDetails;