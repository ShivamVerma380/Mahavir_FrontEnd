import React from "react";
import {Card,Button,Row,Col, Form,CardGroup, Container} from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { AiOutlineHeart, AiTwotoneHeart,AiFillHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function CategoryProductsSwiper({cattitle}) {
    const [isAddCompareClicked, setisAddCompareClicked] = useState(false);
    const [change, setChange] = useState(0);
  
    const [Products,setProducts] = useState([]);
    const [isProductsFetched,setIsProductsFetched] = useState(false);

    const navigate = useNavigate();
    var cards=<div>
        <img className="logo_mahavir" src={require ('../../assets/images.jpg')} alt="God" />
    </div>

    // const callProductDetails=()=>{
    //   navigate("/productDetails")
    //   //console.log("Product selected ",index);
    // }

    useEffect(()=>{
      if(!isProductsFetched ){
      axios.get("http://localhost:8080/get-products-by-category/"+cattitle).then(function(response){
        console.log(response);
        if(response.status==200){
            setProducts(response.data);
            console.log("Products By Cat: ",response.data);
            setIsProductsFetched(true);
        }
        
      }).catch(function(error){
          console.log(error);
      })
    }
    })


    function callProductDetails(index){
      //alert(index);
      console.log("Index",index);
      localStorage.setItem("productSelected",index.modelNumber);
      console.log("Product Selected",localStorage.getItem("productSelected"))
      navigate("/productDetails")
    }

    const CompareHandler=()=> {
      navigate("/compareproducts")
    }

    function CategoryProducts(cattitle){
     

      navigate("/categoryProductsall",{state:{id:1,name: cattitle}})
    }


    function fetchOfferAvailableBtn(offerPrice,productPrice){
      if(offerPrice===productPrice){
        return <Button variant="flat" size="m" style={{visibility:"hidden"}}>Offer Available</Button>
      }
      return <Button variant="flat" size="m">Offer, Free Gift Available</Button>
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

    
    function WishlistHandler(index) {
      // alert("Item added successfully to wishlist");
      console.log(index.modelNumber)
      if (localStorage.getItem("wishlistproduct")==null) {
        localStorage.setItem("wishlistproduct",index.modelNumber)
      }else {
        var arr = localStorage.getItem("wishlistproduct").split(',')
        var flag = true;
        arr.map(i=>{
         
          console.log("i: ",i)
          if( i=== index.modelNumber) {
              arr.splice(arr.indexOf(i),1)
              localStorage.setItem("wishlistproduct",arr)
              console.log('del arr: ' + arr)
              console.log('del ls: ' + localStorage.getItem("wishlistproduct"))
             console.log("in if")
            flag = false;
          } 
        }) 
        if(flag)
          localStorage.setItem("wishlistproduct",localStorage.getItem("wishlistproduct")+","+index.modelNumber)
          navigate('/')
        
      }
      
    }
    const firstfourproducts = Products.slice(0, 6);


    return (
     
      
      (isProductsFetched)?
      (

        <div>

          <Row style={{marginBottom:'20px '}}>
            <Col md={10}>
            <h3  style={{textAlign:"left",marginLeft:'20px'}}>{cattitle}</h3> 
            </Col>
            <Col md={2}>
            <Button style={{width:'70%'}} variant="flat" size="m" onClick={()=>CategoryProducts(cattitle)}>View More</Button>
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
          cards = firstfourproducts.map(index=>{
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
                    {/* <Card.Img  variant="top" src={"data:image/png;base64," + index.productImage1.data} onClick={()=>callProductDetails(index)}/> */}
                    <Card.Img  variant="top" src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-family-hero?wid=940&hei=1112&fmt=png-alpha&.v=1645036276543" onClick={()=>callProductDetails(index)}/>
               
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

      
      
      
    
    </div>):(null)
    
    )
}
export default CategoryProductsSwiper;