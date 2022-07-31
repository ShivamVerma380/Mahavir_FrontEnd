import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { AiOutlineHeart, AiTwotoneHeart,AiFillHeart } from "react-icons/ai";
import {Carousel,Card,Button,Row,Col, Form,CardGroup, Container} from "react-bootstrap";
import {getCookie} from "../Cookies";
import { ToastContainer, toast } from 'react-toastify';
import MovingComponent from 'react-moving-text'
import { MDBCarousel,MDBCol,MDBCarouselInner,MDBCarouselItem,MDBCarouselElement,MDBCardHeader,MDBCardFooter,MDBBtn,MDBRow,MDBCard, MDBCardBody, MDBCardTitle, MDBCardSubTitle, MDBCardText, MDBCardLink, MDBCardImage ,MDBContainer } from 'mdb-react-ui-kit';

function Deals({deals}) {
    // var product = [];
    var token=getCookie("jwtToken");
    console.log("inside deals");
    const navigate = useNavigate();
    const [deal,setDeal]=useState([]);
    const [isDealFetched,SetIsDealFetched] = useState(false);
    // console.log(localStorage.getItem("dealproduct"))
    // product = localStorage.getItem("dealproduct")
    const [isAddCompareClicked, setisAddCompareClicked] = useState(false);
    const [change, setChange] = useState(0);

    const[animation,setAnimation] = useState(false);

    const str = localStorage.getItem("dealproduct");
    const product = JSON.parse(str);
    
    console.log("Products: ", product);

    var title = deals.title;
    console.log("Title: ",title);


    var cards=<div>
        <img className="logo_mahavir" src={require ('../../assets/images.jpg')} alt="God" />
    </div>
    // useEffect(()=>{
    //     if(!isDealFetched)
    //     {
    //         axios.get("http://localhost:8080/deals").then(
    //         function(response){
    //           if(response.status==200){
    //             console.log(response.data);
    //             setDeal(response.data);
    //             SetIsDealFetched(true);
                
    //           }
    //         }).catch(function(error){
    //           console.log("error",error);
    //         }
    //       );
    //     }
          
        
        
    // })

    useEffect(()=>{
      window.addEventListener('scroll', () => { if (window.scrollY > 120) { setAnimation(true); } else { setAnimation(false); } });
    })

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
            "Authorization": "Bearer "+token,
            "Content-Type": "multipart/form-data"
          }
        }).then(function (response) {
          if (response.status == 200) {
            toast.success(<b>Added to wishlist successfully</b>)
            // console.log("Added to wishlist successfully");
            
            console.log(response.data)
            // navigate("/");
          }
        }).catch(function (error) {
          if(error.response.status==406) {
            toast.warn(<b>Item already present in Wishlist</b>)
            // alert("Item already present in wishlist")
          }
          else {
            console.log("Error", error);
          }
          
        })
      
    }

    function callProductDetails(index){
      //alert(index);
      console.log("Index",index);
      localStorage.setItem("productSelected",index.modelNumber);
      console.log("Product Selected",localStorage.getItem("productSelected"))
      navigate("/productDetails")
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
    
    localStorage.setItem("comparecount",change)
    console.log("Get",localStorage.getItem("comparecount"))

    function CategoryProducts(title,deals){
     

      navigate("/productsbydeal",{state:{id:1,name: title,index:deals}})

    }

    function fetchOfferAvailableBtn(offerPrice, productPrice) {
      if (offerPrice !== productPrice) {
        return <MDBCardText className="text">Offer Available</MDBCardText>
      }
      else{
        return <MDBCardText className="text">No Offer Available</MDBCardText>
      }
      
    }

    const firstfourproducts = deals.products.slice(0, 4);


    return(
        <div>

          
          <ToastContainer position="top-center"/>
          
          
              
              <MDBContainer className="categoryproductscontainer">
            <Row style={{paddingTop:"10px",marginBottom:"15px"}}>
              <Col md={6} >
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
                    <span className="categorytitle" filter-content="S">{deals.title}</span>
                  </MovingComponent>
                ) : (null)
              }
              
              
              </Col>
              <Col cd={6}>
              <button class="explore" onClick={()=>CategoryProducts(title,deals)}>View More<span class="icon-right after"></span></button>

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
                    
                    <MDBCardSubTitle style={{    marginTop: '5px',marginBottom: '5px',fontSize:'18px'}}>
                    {
                                                        (index.offerPrice==null) ? (
                                                            <h4><b style={{fontSize:"17px"}}>₹{index.productPrice}</b></h4>
                                                        ) : (
                                                            <><h5><b style={{ color: "#ED1C24", fontSize:"16px", fontWeight:600, lineHeight:"16px" }}>₹{index.offerPrice}</b> <b style={{ textDecorationLine: "line-through", textDecorationStyle: "solid", marginLeft:20, color:"rgba(45,45,45,0.8)", fontSize:"15px", fontWeight:600, lineHeight:"16px"}}>₹{index.productPrice}</b></h5></>
                                                        )
                                                    }
                    </MDBCardSubTitle>
                    
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
          
              
            
              
                
               
            
        
        </div>
    );
}
export default Deals;