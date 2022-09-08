import React from "react";
import { Card, Carousel, Button, Row, Col, Form, CardGroup, Container, Image } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { AiOutlineHeart, AiTwotoneHeart, AiFillHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { getCookie, setCookie } from "../Cookies";
import { ToastContainer, toast } from 'react-toastify';
import { MDBRow, MDBCard, MDBCardBody, MDBCardTitle, MDBCardSubTitle, MDBCardText, MDBCardImage, MDBContainer } from 'mdb-react-ui-kit';
//import SimpleImageSlider from "react-simple-image-slider";
import MovingComponent from 'react-moving-text'


import './Categoryproducts.css';
import url from "../../Uri";
function CategoryProductsSwiper({ cattitle }) {
  var token = getCookie("jwtToken");


  const [isAddCompareClicked, setisAddCompareClicked] = useState(false);
  const [change, setChange] = useState(0);

  const[animation,setAnimation] = useState(false);



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
    window.addEventListener('scroll', () => { if (window.scrollY > 700) { setAnimation(true); } else { setAnimation(false); } });


    
    if (!isProductsFetched) {
      axios.get(url+"/get-products-by-category/" + cattitle).then(function (response) { 
        // console.log(response);
        if (response.status == 200) {
          setProducts(response.data);
          // console.log("Products By Cat: ", response.data);
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
    console.log("Index",index);
    localStorage.setItem("productId",index.productId);
    localStorage.setItem("productSelected", index.modelNumber);
    localStorage.setItem("Category",index.category)
    localStorage.setItem("SubCategory","Brand")
    localStorage.setItem("SubSubCategory",index.subCategoryMap.Brand)
    // localStorage.setItem("SubSubCategory","Whirlpool")
    // console.log(index.subCategoryMap.Brand);
    // console.log("Cat",localStorage.getItem("Category"))
    // console.log("SubCat",localStorage.getItem("SubCategory"))
    // console.log("SubSubCat",localStorage.getItem("SubSubCategory"))
    // localStorage.removeItem("SubCategory")
    // localStorage.removeItem("SubSubCategory")
    // console.log("Product Selected",localStorage.getItem("productSelected"))
    navigate("/productDetails")
  }

  const CompareHandler = () => {
    navigate("/compareproducts")
  }

  function CategoryProducts(cattitle) {
    // console.log("Category",cattitle)
    localStorage.setItem("Category", cattitle)
    localStorage.removeItem("SubCategory")
    localStorage.removeItem("SubSubCategory")
    navigate("/categoryProductsall")
  }


  function fetchOfferAvailableBtn(offerPrice, productPrice) {
    if (offerPrice !== productPrice) {
      return <MDBCardText className="text">Offer Available</MDBCardText>
    }
    else {
      return <MDBCardText className="text">No Offer Available</MDBCardText>
    }

  }

  function handleAddToCompare(index) {
    var element = document.getElementById(index.modelNumber);
    // console.log("Element: ", element)
    if (element.checked) {

      // console.log('✅ Checkbox is checked');
      setChange(change + 1)



    } else {
      // console.log('⛔️ Checkbox is NOT checked');
      setChange(change - 1)
    }
    setisAddCompareClicked(current => !current);
    // console.log("Current: ", isAddCompareClicked)

    // alert("Added To Compare");
    localStorage.setItem("modeltocompare", index.modelNumber);

  }
  // console.log("Model: ", localStorage.getItem("modeltocompare"))

  localStorage.setItem("comparecount", change)
  setCookie("countcompare", change, 20);

  // console.log("Get", localStorage.getItem("comparecount"))

  function RemoveWishlist(index){

    // console.log("Wishlist",localStorage.getItem("Wishlist"))

    console.log("Wishlist",localStorage.getItem("Wishlist"))
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
        // console.log("Removed from wishlist successfully");
        // console.log(response.data)
        // var arr = localStorage. 
        var arr = localStorage.getItem("Wishlist").split(",")
        var finalWishlist=[];
        arr.map(a=>{
          if( a!=="" && a!==index.modelNumber){
            finalWishlist.push(a)
          }
        })
        localStorage.setItem("Wishlist",finalWishlist)
        window.location.reload();
        // navigate("/");
      }
    }).catch(function (error) {
      console.log("Error", error);
    })
  }

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
    // console.log("Wishlist clicked")
    if(getCookie("isLoggedIn")!=='true'){
      navigate("/login")
    }else{
      
    

    var formdata = {
      "modelNumber": index.modelNumber

    }

    axios.post(url+"/wishlist", formdata, {
      headers: {
        "Authorization": "Bearer " + token,
        "Content-Type": "multipart/form-data"
      }
    }).then(function (response) {
      if (response.status == 200) {
        // console.log("Added to wishlist successfully");
        // toast.success(<b>Added to wishlist successfully</b>)
        // alert("Item added to wishlist successfully")
        var arr = localStorage.getItem("Wishlist").split(",")
        arr.push(index.modelNumber)
        localStorage.setItem("Wishlist", arr)
        window.location.reload();
        toast.success(<b>Item Added to Wishlist successfully</b>)
        // console.log(response.data)
        // navigate("/");
      }
      else{
        toast.warn(<b>Item already present in wishlist</b>)
        // console.log(response.data)
      }
    }).catch(function (error) {
        toast.warn(<b>Item already present in wishlist</b>)
        console.log("Error", error);
      
    })
  }

  }
  const firstfourproducts = Products.slice(0, 4);


  return (


    (isProductsFetched) ?
      (
        <>
        <ToastContainer position="top-center"/>
          <div className="categoryproductswiper">



            <MDBContainer className="categoryproductscontainer">
              <Row className="categoryproductsrow">
                <Col md={8} >
                  <svg className="svgtitle" xmlns="http://www.w3.org/2000/svg">


                    <filter id="motion-blur-filter" filterUnits="userSpaceOnUse">


                      <feGaussianBlur stdDeviation="100 0"></feGaussianBlur>
                    </filter>
                  </svg>
                  
                  {
                    (animation) ? (
                      <MovingComponent
                    type="fadeInFromLeft"
                    duration="1000ms"
                    delay="0s"
                    direction="normal"
                    timing="ease"
                    iteration="1"
                    fillMode="none">
                    <span className="categorytitle"  filter-content="S">{cattitle}</span>
                    
                  </MovingComponent>
                   
                   ) : (null)
                  }
                  


                </Col>
                <Col md={4} style={{display:'flex',justifyContent:'end'}}>
                  <button onClick={() => CategoryProducts(cattitle)} class="explore">View More<span class="icon-right after"></span></button>

                </Col>

              </Row>


              

              <MDBRow style={{ justifyContent: 'center', padding: '10px' }} className='row-cols-1 row-cols-md-3 g-4'>
                {
                  firstfourproducts.map(index => {
                    const images = [
                      {
                        url: index.productImage1,
                        url: index.productImage1,
                        url: index.productImage1
                      }
                    ];
                    return (
                      <MDBCard className="categoryproductscard">
                        <div className="cardimg">
                        <MDBCardImage className="cardimage" src={index.productImage1}  alt='...' position='top' />
                        {/* {
                          ( index.productImage2 !== null && index.productImage3 !== null) ? 
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


                        } */}
                            <MDBCardImage className="cardimage2" src={index.productImage1} alt='...' position='top' />

</div>
                        {
                          (localStorage.getItem("Wishlist") != null && localStorage.getItem("Wishlist").includes(index.modelNumber)) ?
                            <AiFillHeart style={{ marginLeft: '0px', marginTop: '10px', marginRight: '10px', alignSelf: 'end', fill: 'rgb(255, 88, 88)' }} className="wishlisticon" size={30} onClick={() => RemoveWishlist(index)} /> :
                            <AiOutlineHeart style={{ marginLeft: '0px', marginTop: '10px', marginRight: '10px', alignSelf: 'end' }} className="wishlisticon" size={30} onClick={() => WishlistHandler(index)} />
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
            </MDBContainer >



          </div></>) : (null)


  )
}

export default CategoryProductsSwiper;