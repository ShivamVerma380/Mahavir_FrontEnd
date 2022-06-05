import React from "react";
//import { Row,Card,Col,CardImg, CardBody, CardTitle,CardSubtitle, CardText, Container } from "reactstrap";
import {Card,Button, Form} from "react-bootstrap";
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import Arrow from 'react-arrows';
import Carousel from 'react-bootstrap/Carousel';
//import { Button } from "bootstrap";

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
import { useEffect, useState } from "react";


function Product({title,productList}){
    const [isAddCompareClicked, setisAddCompareClicked] = useState(false);
    const [change, setChange] = useState(0);
    const navigate = useNavigate();
    var cards=<div>
        <img className="logo_mahavir" src={require ('../../assets/images.jpg')} alt="God" />
    </div>

    // const callProductDetails=()=>{
    //   navigate("/productDetails")
    //   //console.log("Product selected ",index);
    // }

    function callProductDetails(index){
      //alert(index);
      console.log("Index",index);
      localStorage.setItem("productSelected",index.modelNumber);
      console.log("Product Selected",localStorage.getItem("productSelected"))
      navigate("/productDetails")
    }


    function fetchOfferAvailableBtn(offerPrice){
      if(offerPrice==="0"){
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
    function CheckHandler(){
      setChange(change+1)
    }
    return(
      <div>
        <h3 style={{textAlign:"left",margin:10 ,padding:5}}>{title}</h3>
      <span section-separator section-separator-dk-blue></span>
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
              <SwiperSlide>
              <Card  style={{ width: '25rem' }}
                  className="mb-2"
                   >
                    <Card.Img  variant="top" src={"data:image/png;base64," + index.productImage1.data} onClick={()=>callProductDetails(index)}/>
               
                    <Card.Body >
                    <Card.Title as="h6"  onClick={()=>callProductDetails(index)}>{index.productName}</Card.Title>
                    <Card.Text onClick={()=>callProductDetails(index)} >
                    {index.productDescription}
                    <br></br>Rs {index.productPrice}
                    </Card.Text>
                    <Form>
                      <Form.Check type="checkbox" id = "default-checkbox" label = "Add To Compare" onChange={handleAddToCompare}/>
                    </Form>
                      
                      {
                        fetchOfferAvailableBtn(index.offerPrice)
                      }                    
                    
                  </Card.Body>

                  
              </Card>


               
              </SwiperSlide>
            )
          })
        }
      </Swiper>
      {
      (change>0)?(
        <Button>Compare</Button>
      ):(
        <Button style={{visibility:"hidden"}}>Compare</Button>
      )
      }
      
      
    
    </div>
    
    );
}

export default Product;