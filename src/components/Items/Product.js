import React from "react";
import { Row,Col,Card,CardImg, CardBody, CardTitle,CardSubtitle, CardText, Container } from "reactstrap";
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import Arrow from 'react-arrows';
import Carousel from 'react-bootstrap/Carousel';
import { Button } from "bootstrap";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../styles.css"
import { useNavigate } from "react-router-dom";

// import required modules
import { Pagination, Navigation } from "swiper";

function Product({title,productList}){
    const navigate = useNavigate();
    var cards=<div>
        <img className="logo_mahavir" src={require ('../../assets/images.jpg')} alt="God" />
    </div>

    const callProductDetails=()=>{
      navigate("/productDetails")
    }

    return(
      <div>
        <h3 style={{textAlign:"left",margin:10 ,padding:5}}>{title}</h3>
      <>
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
          cards = productList.map(index=>{
            return(
              <SwiperSlide >
              <Card className="card" onClick={callProductDetails}>
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
    </>
    </div>
    );
}

export default Product;
