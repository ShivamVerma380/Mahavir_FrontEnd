import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { Button } from "react-bootstrap";
import Header from "../Header";
import { Col, Row, Form, Card, Container } from "react-bootstrap";
import { Carousel, CarouselItem} from "reactstrap";



function BrandDetails() {
    const navigate = useNavigate();
    var offerPoster = <div>
        <img className="logo_mahavir" src={require ('../../assets/images.jpg')} alt="Mandala" />
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
        if (!isBrandsFetched) {
            axios.get("http://localhost:8080/excel/shopByBrands").then(
                function (response) {
                    if (response.status == 200) {
                        console.log(response.data);
                        setBrands(response.data);
                        setIsBrandsFetched(true);
                    }
                }).catch(function (error) {
                    console.log("error", error);
                }
                );
        }
    })

    function handleClick(index) {
        // parsedArr.map(index=>{
        //      models += index.modelNumbers;
        // })
        models += index.modelNumbers;
        localStorage.setItem("models", models);
        console.log("model", models);
        console.log("on cat click");
        navigate('/brandcatproducts')
    }

    const handleOfferPosterOnClick=(modelNumbers)=>{
        console("Item Clicked");
        
        offermodel = modelNumbers;
        localStorage.setItem("offermodels",offermodel);
        // navigate('/brandofferposterproducts')
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
            <Header />
            <br></br>
            <Container style={{justifyContent:'center',alignItems:'center',flex:1}}>
                <center>
                <img style={{ height: 100, width: 150, borderRadius: "30px"}} src={'data:image/jpg;base64,' + localStorage.getItem("brandLogo")} />
                </center>
            </Container>
            {/* <center>
                <img style={{ height: 100, width: 150, borderRadius: "50px" }} src={'data:image/jpg;base64,' + localStorage.getItem("brandLogo")} />
            </center> */}
            <br></br>
            <br></br>
        
            
    
        <Carousel>
        {
            offerPoster= parsedArray.map(index=>{
                //let Base64string = Buffer.from(index.image.data,"base64").toString();
                
                console.log("image",index.image.data);
                // var imgsrc = String.format("data:image/jpg;base64,{0}",index.image.data);
                return(
                    <Carousel.Item interval={1000} onClick={()=>handleOfferPosterOnClick(index.modelNumbers)}>
                    <img id = "classname" 
                    className="d-block w-100"
                    src={"data:image/png;base64," + index.image.data}
                    alt={index.alt}
                    height={500}
                    />                    
                    </Carousel.Item>
                  
                )

            })
        }
  
{/*   
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="https://cdn.dribbble.com/users/1803663/screenshots/11400179/media/25558ede8bcb553fd48d7ed339e136ee.png?compress=1&resize=400x300"
      alt="Second slide"
      height={300}
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://freerangestock.com/thumbnail/140669/baobab-tree-at-sunset--african-landscape--calm--relaxing--tr.jpg"
      alt="Third slide"
      height={300}
    />
  </Carousel.Item> */}
</Carousel>
            <br></br>
            <br></br>

            <h3 className="hometitle" style={{textAlign:"left",margin:10 ,padding:5}}>FEATURED CATEGORIES</h3>
            <br></br>

                

            <Swiper
                slidesPerView={4}
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
            >


                {
                    cards = parsedArr.map(index => {
                        return (
                            <div >
                                <SwiperSlide>
                                    
                                    <div>
                                        <Container style={{height:50, width:200, justifyContent:'center',alignItems:"center",flex:1}} onClick={() => handleClick(index)}>
                                         <h6>{index.category} </h6>
                                        </Container>
                                        
                                    </div>
                                </SwiperSlide>
                            </div>
                        )
                    })
                }

            </Swiper>
            <br></br>
            <br></br>
            {/* <Carousel style={{ zIndex: '-1' }}>
                {
                    offerPoster = localStorage.getItem("finalBrandCategories").map(index => {
                        return (
                            <Carousel.Item interval={1000} onClick={() => handleOfferPosterOnClick(index)}>
                                <img id="classname"
                                    className="d-block w-100"
                                    src={"data:image/png;base64," + index.image.data}
                                    alt={index.alt}
                                    height={500}
                                />
                            </Carousel.Item>

                        )

                    })
                }

            </Carousel> */}
            <br></br>
            <br></br>
            <h3 className="hometitle" style={{textAlign:"left",margin:10 ,padding:5}}>FEATURED VIDEOS</h3>
            <br></br>

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
                                    <iframe width="560" height="315" src={index} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </SwiperSlide>
                                <br></br>
                            </div>
                        )
                    })
                }

            </Swiper>




        </div>


    )
}
export default BrandDetails;