import React, { useEffect, useState } from "react";
import { Row, Col } from "reactstrap";
import axios from "axios";
import { Container } from 'react-bootstrap';
import BrandDetails from "./BrandDetails";
import { Navigate, useNavigate } from "react-router-dom";
import './ShopByBrands.css';
import { Pagination, Navigation } from "swiper";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import url from "../../Uri";
import '../Items/Categoryproducts.css';

const ShopByBrands = () => {

  const navigate = useNavigate();

  const [brands, setBrands] = useState([]);
  const [isBrandsFetched, setIsBrandsFetched] = useState(false);

  // var url = "http://mahavirbackend-env.eba-bkwmcbpz.us-east-1.elasticbeanstalk.com";
  useEffect(() => {
    if (!isBrandsFetched) {
      axios.get(url+"/excel/shopByBrands").then(
        function (response) {
          if (response.status == 200) {
            // console.log(response.data);
            setBrands(response.data);
            setIsBrandsFetched(true);
          }
        }).catch(function (error) {
          console.log("error", error);
        }
        );
    }

  })
  var cards = <div>
    <img className="logo_mahavir" alt="God" />
  </div>


  function BrandClickHandler(index) {
    localStorage.setItem("Index:", index)
    localStorage.setItem("brandName", index.brandName)
    localStorage.setItem("brandLogo", index.brandLogo)
    localStorage.setItem("brandCategories", index.brandCategories)
    localStorage.setItem("brandOfferPosters", index.brandOfferPosters)
    localStorage.setItem("brandVideoLinks", index.videoLinks)

    const jsonArr = JSON.stringify(index.brandCategories);
    const jsonArray = JSON.stringify(index.brandOfferPosters);

    // save to localStorage
    localStorage.setItem("array", jsonArr);
    localStorage.setItem("jsonarray", jsonArray);

    // get the string
    // from localStorage
    // const str = localStorage.getItem("array");

    // // convert string to valid object
    // const parsedArr = JSON.parse(str);

    // console.log("stringify: ",parsedArr);



    // console.log("BrandName: ", localStorage.getItem("brandName"))
    // console.log("Brandlogo: ", localStorage.getItem("brandLogo"))
    // console.log("BrandCategories: ", localStorage.getItem("brandCategories"))
    // console.log("BrandOfferPosters: ", localStorage.getItem("brandOfferPosters"))
    // console.log("BrandVideoLink: ", localStorage.getItem("brandVideoLinks"))

    // console.log("On click")
    navigate("/branddetails")

  }

  return (
    <div>
      <Container style={{ marginBottom: '70px', backgroundColor: "white" }}>
        
        {
          (isBrandsFetched) ? (
            <>
            <h3 className="brand_title" style={{marginLeft:"30px",paddingTop:"20px"}}>Shop by brands</h3>
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
                style={{zIndex:0}}
              > 
                {
                  brands.map(index => {

                    return (
                      <SwiperSlide>                     
                            <img className="brandlogo" style={{cursor:"pointer"}} onClick={() => BrandClickHandler(index)} src={index.brandLogo} />                       
                      </SwiperSlide>
                    )
                  })
                }
              </Swiper>


              
            </>

            // <div>

          //   <Carousel cols={5} rows={1} gap={0} loop>

          //   {
          //     brands.map(index => {
          //       return (
          //         <Carousel.Item>
          //           <div className="promo" onClick={() => BrandClickHandler(index)} style={{ width: '100%', overlayColor: 'hotpink' }}>
          //             <img style={{ height: "126px", width: "126px" }} src={index.brandLogo} />
          //             {/* <h2 className="brandtitle">{index.brandName}</h2> */}
          //           </div>
          //           {/* <img style={{width:'100%'}} src={"https://picsum.photos/800/600?random=3"} /> */}
          //         </Carousel.Item>
          //       )
          //     })
          //   }

          // </Carousel>


            // <h3 className="hometitle" style={{textAlign:"left",margin:10 ,padding:5}}>SHOP BY BRANDS</h3>



            //     <Row thumbnail='true' roundedCircle='true' className="shopbybrandsrow">
            //     {    
            //     brands.map(index=>{
            //         return (

            //                 <Col sm={2}>

            //                  <Image thumbnail='true' className="shopbybrandsimg"  src={index.brandLogo} onClick={()=>BrandClickHandler(index)}/>
            //                  {/* <Image thumbnail='true' className="shopbybrandsimg"  src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-family-hero?wid=940&hei=1112&fmt=png-alpha&.v=1645036276543" onClick={()=>BrandClickHandler(index)}/> */}

            //                 </Col>


            //         );


            // })
            // }
            // </Row>

            // </div>



          ) : (null)
        }
      </Container>
    </div>
  )
}
export default ShopByBrands;