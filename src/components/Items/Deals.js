import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { AiOutlineHeart, AiTwotoneHeart,AiFillHeart } from "react-icons/ai";
import {Card,Button,Row,Col, Form,CardGroup, Container} from "react-bootstrap";
import {getCookie} from "../Cookies";
import { ToastContainer, toast } from 'react-toastify';

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

    function fetchOfferAvailableBtn(offerPrice,productPrice){
      if(offerPrice===productPrice){
        return <Button variant="flat" size="m" style={{visibility:"hidden"}}>Offer Available</Button>
      }
      return <Button variant="flat" size="m">Offer, Free Gift Available</Button>
    }

    return(
        <div>
          <ToastContainer position="top-center"/>
           
              <div>
              {/* <h3 className="hometitle" style={{textAlign:"left",margin:10 ,padding:5}}>{deals.title}</h3> */}

              <Row style={{marginBottom:'20px '}}>
                <Col md={10}>
                <h3 className="hometitle" style={{textAlign:"left",marginLeft:'20px'}}>{deals.title}</h3> 
                </Col>
                <Col md={2}>
                <Button style={{width:'70%'}} variant="flat" size="m" onClick={()=>CategoryProducts(title,deals)}>View More</Button>
                </Col>
            </Row>
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
              cards = deals.products.map(index=>{
                return(
                  <div>

                  <SwiperSlide>
                   
                  <Card  style={{ width: '20rem' }}
                      className="mb-2"
                       >
                    
                        {(localStorage.getItem("wishlistproduct")!=null && localStorage.getItem("wishlistproduct").includes(index.modelNumber)) ? 
                          <AiFillHeart style={{marginTop:"10px",marginLeft:"10px", fill:'rgb(255, 88, 88)'}} className="wishlisticon" size={30} onClick={()=>WishlistHandler(index)}/>:
                          <AiOutlineHeart style={{marginTop:"10px",marginLeft:"10px"}} className="wishlisticon" size={30} onClick={()=>WishlistHandler(index)}/>
                          }
                        {/* <AiOutlineHeart style={{marginTop:"10px",marginLeft:"5px"}} className="wishlisticon" size={30} onClick={()=>WishlistHandler(index)}/> */}
                        <Card.Img  variant="top" src={index.productImage1} onClick={()=>callProductDetails(index)}/>
                   
                        <Card.Body >
                        <Card.Title as="h6"  onClick={()=>callProductDetails(index)}>{index.productName}</Card.Title>
                        <Card.Text onClick={()=>callProductDetails(index)} >
                        {index.productHighlights}
                        <br></br><b style={{fontWeight:"bolder",color:"rgb(255, 88, 88)", fontSize:20}}>Rs {index.productPrice}</b>
                        </Card.Text>
                        <Form>
                          <Form.Check type="checkbox"  label = "Add To Compare" onChange={handleAddToCompare}/>
                        </Form>
                        
                          <br></br>
                          {
                            fetchOfferAvailableBtn(index.offerPrice,index.productPrice)
                          }                    
                        
                      </Card.Body>
    
                      
                  </Card>
    
    
                   
                  </SwiperSlide>
                  <br></br>
                  </div>
                )
              })
            }
            
          </Swiper>
    
          
          
          
        
        </div>
                
               
            
        
        </div>
    );
}
export default Deals;