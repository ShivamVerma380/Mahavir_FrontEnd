import React from "react";
import { Card, Carousel ,Button, Row, Col, Form, CardGroup, Container, Image } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { AiOutlineHeart, AiTwotoneHeart, AiFillHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { getCookie, setCookie } from "../Cookies";
import { ToastContainer, toast } from 'react-toastify';
import { MDBCarousel,MDBCol,MDBCarouselInner,MDBCarouselItem,MDBCarouselElement,MDBCardHeader,MDBCardFooter,MDBBtn,MDBRow,MDBCard, MDBCardBody, MDBCardTitle, MDBCardSubTitle, MDBCardText, MDBCardLink, MDBCardImage ,MDBContainer } from 'mdb-react-ui-kit';
//import SimpleImageSlider from "react-simple-image-slider";

import './Categoryproducts.css';
function CategoryProductsSwiper({ cattitle }) {
  var token = getCookie("jwtToken");
  

  const [isAddCompareClicked, setisAddCompareClicked] = useState(false);
  const [change, setChange] = useState(0);

  const [iswishlistclicked, setIsWishlistClicked] = useState(false);
  const [isWishlistFetched, setIsWishlistFetched] = useState(false);

  const [Products, setProducts] = useState([]);
  const [isProductsFetched, setIsProductsFetched] = useState(false);

  const navigate = useNavigate();
  var cards = <div>
    <img className="logo_mahavir" src={require('../../assets/images.jpg')} alt="God" />
  </div>

  // const callProductDetails=()=>{
  //   navigate("/productDetails")
  //   //console.log("Product selected ",index);
  // }

  useEffect(() => {
    if (!isProductsFetched) {
      axios.get("http://localhost:8080/get-products-by-category/" + cattitle).then(function (response) {
        console.log(response);
        if (response.status == 200) {
          setProducts(response.data);
          console.log("Products By Cat: ", response.data);
          setIsProductsFetched(true);
        }

      }).catch(function (error) {
        console.log(error);
      })

      //  var formdata = {
      //   "modelNumber": index.modelNumber

      // }

      // axios.post("http://localhost:8080/wishlist", formdata, {
      //   headers: {
      //     "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJraGFyZW9ta2FyOTlAZ21haWwuY29tbW0iLCJleHAiOjE2NTc2MTc5MDgsImlhdCI6MTY1NzUxNzkwOH0.v_DeVJD4Cc77EZ_Kk0heR8tV0G4_vgFjZhvq87kOg3s",
      //     "Content-Type": "multipart/form-data"
      //   }
      // }).then(function (response) {
      //   if (response.status == 200) {
      //     console.log("Added to wishlist successfully");
      //     console.log(response.data)
      //     // navigate("/");
      //   }
      // }).catch(function (error) {
      //   console.log("Error", error);
      // })
    }
  })


  function callProductDetails(index) {
    //alert(index);
    console.log("Index", index);
    localStorage.setItem("productSelected", index.modelNumber);
    console.log("Product Selected", localStorage.getItem("productSelected"))
    navigate("/productDetails")
  }

  const CompareHandler = () => {
    navigate("/compareproducts")
  }

  function CategoryProducts(cattitle) {


    navigate("/categoryProductsall", { state: { id: 1, name: cattitle } })
  }


  function fetchOfferAvailableBtn(offerPrice, productPrice) {
    if (offerPrice !== productPrice) {
      return <MDBCardText className="text">Offer Available</MDBCardText>
    }
    else{
      return <MDBCardText className="text">No Offer Available</MDBCardText>
    }
    
  }

  function handleAddToCompare (index) {
    var element = document.getElementById(index.modelNumber);
    console.log("Element: ",element)
    if (element.checked) {

      console.log('✅ Checkbox is checked');
      setChange(change + 1)



    } else {
      console.log('⛔️ Checkbox is NOT checked');
      setChange(change - 1)
    }
    setisAddCompareClicked(current => !current);
    console.log("Current: ",isAddCompareClicked)
    
    // alert("Added To Compare");
    localStorage.setItem("modeltocompare",index.modelNumber);

  }
  console.log("Model: ",localStorage.getItem("modeltocompare"))

  localStorage.setItem("comparecount", change)
  setCookie("countcompare",change,20);
  
  console.log("Get", localStorage.getItem("comparecount"))


  function WishlistHandler(index) {
    // alert("Item added successfully to wishlist");
    // console.log(index.modelNumber)
    // if (localStorage.getItem("wishlistproduct")==null) {
    //   localStorage.setItem("wishlistproduct",index.modelNumber)
    // }else {
    //   var arr = localStorage.getItem("wishlistproduct").split(',')
    //   var flag = true;
    //   arr.map(i=>{

    //     console.log("i: ",i)
    //     if( i=== index.modelNumber) {
    //         arr.splice(arr.indexOf(i),1)
    //         localStorage.setItem("wishlistproduct",arr)
    //         console.log('del arr: ' + arr)
    //         console.log('del ls: ' + localStorage.getItem("wishlistproduct"))
    //        console.log("in if")
    //       flag = false;
    //     } 
    //   }) 
    //   if(flag)
    //     localStorage.setItem("wishlistproduct",localStorage.getItem("wishlistproduct")+","+index.modelNumber)
    //     navigate('/')

    // }
    console.log("Wishlist clicked")


    var formdata = {
      "modelNumber": index.modelNumber

    }

    axios.post("http://localhost:8080/wishlist", formdata, {
      headers: {
        "Authorization": "Bearer " + token,
        "Content-Type": "multipart/form-data"
      }
    }).then(function (response) {
      if (response.status == 200) {
        // console.log("Added to wishlist successfully");
        toast.success(<b>Added to wishlist successfully</b>) 

        console.log(response.data)
        // navigate("/");
      }
    }).catch(function (error) {
      if (error.response.status == 406) {
        toast.warn(<b>Item already present in Wishlist</b>)
        // alert("Item already present in wishlist")
      }
      else {
        console.log("Error", error);
      }

    })

  }
  const firstfourproducts = Products.slice(0, 4);


  return (
   

    (isProductsFetched) ?
      (
        <>
          <div className="categoryproductswiper">

          
          
          <MDBContainer className="categoryproductscontainer">
            <Row style={{padding: '10px',margin: '10px'}}>
              <Col md={6} >
              <svg className="svgtitle" xmlns="http://www.w3.org/2000/svg">


              <filter id="motion-blur-filter" filterUnits="userSpaceOnUse">


                <feGaussianBlur stdDeviation="100 0"></feGaussianBlur>
              </filter>
              </svg>
              <span className="categorytitle" filter-content="S">{cattitle}</span>
              
              </Col>
              <Col cd={6}>
              <button onClick={() => CategoryProducts(cattitle)} class="explore">View More<span class="icon-right after"></span></button>

              </Col>
            </Row>
          
          
          <MDBRow style={{justifyContent: 'left',padding: '10px'}} className='row-cols-1 row-cols-md-3 g-4'>
            {
              firstfourproducts.map(index=>{
                const images = [
                  { url: index.productImage1,
                    url: index.productImage1 ,
                    url: index.productImage1  }
                ];
                return(
                <MDBCard className="categoryproductscard" >
                  <MDBCardImage className="cardimage" src={index.productImage1} alt='...' position='top' />
                  {
                    (index.productImage1!==null && index.productImage2!==null && index.productImage3!==null)?
                    <Carousel interval={1000} className="cardimage2" indicators=''   variant="dark">
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
                  
                  
                  {
                    (localStorage.getItem("wishlistproduct") != null && localStorage.getItem("wishlistproduct").includes(index.modelNumber)) ?
                            <AiFillHeart style={{ marginLeft:'0px',marginTop:'10px',marginRight:'10px',alignSelf:'end', fill: 'rgb(255, 88, 88)' }} className="wishlisticon" size={30} onClick={() => WishlistHandler(index)} /> :
                            <AiOutlineHeart style={{  marginLeft:'0px',marginTop:'10px',marginRight:'10px',alignSelf:'end'}} className="wishlisticon" size={30} onClick={() => WishlistHandler(index)} />
                    }
                  <MDBCardBody className="categoryproductscardbody">
                    <MDBCardTitle className="cardtitle">{index.productName} </MDBCardTitle>
                    <MDBCardSubTitle style={{    marginTop: '5px',marginBottom: '5px',fontSize: '18px'}}>Rs. {index.offerPrice}</MDBCardSubTitle>
                    
                    {
                      fetchOfferAvailableBtn(index.offerPrice, index.productPrice)
                    }
                  </MDBCardBody>
                  <MDBCardBody className="categoryproductscardbodyonhover">
                  <MDBCardTitle className="cardtitle">{index.productName} </MDBCardTitle>
                  <MDBCardSubTitle style={{    marginTop: '5px',marginBottom: '5px', fontSize: '18px'}}>Rs. {index.offerPrice}</MDBCardSubTitle>
                  
                  <MDBCardText className="text" onClick={()=>callProductDetails(index)}>
                    View Details
                  </MDBCardText>
                  
                  </MDBCardBody>
                </MDBCard>
                )
              })
            }

            
            </MDBRow>
            </MDBContainer >
          
         
            
          </div></>) : (null)
          

  )
}
export default CategoryProductsSwiper;