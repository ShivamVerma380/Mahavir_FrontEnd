import React from "react";
import {Card,Button,Row,Col, Form,CardGroup, Container} from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { AiOutlineHeart, AiTwotoneHeart,AiFillHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import {setCookie,getCookie} from '../Cookies'
import {useLocation} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Header from "../Header";
import TestFilterProducts from "../Filters/TestFilterProducts";
import url from "../../Uri";
// import {getCookie,setCookie} from '../Cookies';


function CategoryProducts(){
    var token=getCookie("jwtToken");
    var cart=getCookie("CartModels").split(',');
    var comparemodels=getCookie("addToCompare").split(',');
    const[len,setLen]=useState(getCookie("addToCompare").split(',').length);
    const location = useLocation();
    const [isAddCompareClicked, setisAddCompareClicked] = useState(false);
    const [change, setChange] = useState(0);
//  var token=getCookie("jwtToken");
    const [Products,setProducts] = useState([]);
    const [isProductsFetched,setIsProductsFetched] = useState(false);
    const navigate = useNavigate();
    var cards=<div>
        <img className="logo_mahavir" src={require ('../../assets/images.jpg')} alt="God" />
    </div>
    const [isWishlistFetched, setIsWishlistFetched] = useState(false);
    


  const [isProductFetched, setIsProductFetched] = useState(false);
    const [wish, setWish] = useState([]);
   
   
    useEffect(()=>{
        if(!isProductsFetched ){
        axios.get(url+"/get-products-by-category/"+localStorage.getItem("Category")).then(function(response){
        // console.log(response);
        if(response.status==200){
            setProducts(response.data);
            // console.log("Products By Cat: ",response.data);
            setIsProductsFetched(true);
        }
        
        }).catch(function(error){
            console.log(error.response);
        })


    }

    if (!isWishlistFetched && !isProductFetched) {
      axios({
        method: "get",
        url: url+"/wishlist",
        headers: {
          "Authorization": "Bearer "+token
        }
      }).then(function (response) {
        // console.log("Response", response);
        if (response.status == 200) {
          // console.log("Wishlist response", response.data);
          setWish(response.data);
          setIsWishlistFetched(true);
          // console.log("...."+wishlist);
          // setAddress(response.data);
          // console.log("Address: ", address)
          // setIsAddressFetched(true);

        } else {
          // console.log(response.data.message);
        }
      }).catch(function (error) {
        console.log(error.response);
      })
    }
    })

    function fetchOfferAvailableBtn(offerPrice,productPrice){
        if(offerPrice===productPrice){
          return <Button variant="flat" size="m" style={{visibility:"hidden"}}>Offer Available</Button>
        }
        return <Button variant="flat" size="m">Offer, Free Gift Available</Button>
      }

    function callProductDetails(index){
        //alert(index);
        // console.log("Index",index);
        localStorage.setItem("productSelected",index.modelNumber);
        localStorage.setItem("productId", index.productId);
        // console.log("Product Id",localStorage.getItem("productId"));
        // console.log("Product Selected",localStorage.getItem("productSelected"))
        navigate("/productDetails")
      }

    
      function handleAddToCompare(modelNumber){
        
        var element = document.getElementById(modelNumber);
        
        if(element.checked){
          
          
            // console.log("adddd"+modelNumber);
            comparemodels.push(modelNumber);
            setCookie("addToCompare",comparemodels,20);
            setLen(getCookie("addToCompare").split(',').length)
          // console.log(comparemodels);
          // console.log("checked "+modelNumber);
            
            
        
          
        }
        else {
          for (var i = 0; i < comparemodels.length; i++) {
            if (comparemodels[i] === modelNumber) {
              comparemodels.splice(i, 1);
                // console.log(comparemodels);
                setCookie("addToCompare",comparemodels,20);
                setLen(getCookie("addToCompare").split(',').length)
                // window.location.reload();
                break;
            }
        }
          // console.log("unchecked "+modelNumber);

        }
        // if (event.target.checked) {
  
        //   console.log('✅ Checkbox is checked');
        //   setChange(change+1)
          
          
          
        // } else {
        //   console.log('⛔️ Checkbox is NOT checked');
        //   setChange(change-1)
        // }
        // setisAddCompareClicked(current => !current);
        // // alert("Added To Compare");
        
    }
      
      localStorage.setItem("comparecount",change)
      // console.log("Get",localStorage.getItem("comparecount"))
  
      
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
        //     //navigate('/categoryProductsall')
        //     CategoryProducts(location.state.name)
          
        // }

        // console.log("Wishlist clicked")

      
        var formdata = {
          "modelNumber": index.modelNumber
  
        }
  
        axios.post("/wishlist", formdata, {
          headers: {
            "Authorization": "Bearer "+token,
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
          if(error.response.status==406) {
            toast.warn(<b>Item already present in Wishlist</b>)
            // alert("Item already present in wishlist")
          }
          else {
            console.log("Error", error.response);
          }
          
        })

        window.location.reload();
        
    }

    const RemoveFromWishList = (modelnum) => {
      var arr= [];
      // console.log("Wish ",wish)
          wish.map(pro=>{
            if(pro.modelNumber!==modelnum) {
              arr.push(pro);
            }
            // console.log("i Modelnum ",pro.modelNumber, "Index Modelnum ",modelnum)
          })
          setWish(arr);
          // console.log("Arr ",arr)
         
      // localStorage.setItem("RemoveIndex",index.modelNumber);
  
      // setRemoveClicked(true);
      // var formdata = {
      //   "modelNumber": index.modelNumber
      // }
  
      // console.log("Model Num: ", index.modelNumber)
      
      // console.log("Form Data: ", formdata);
      //   const headers = { 
      //     "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJraGFyZW9ta2FyOTlAZ21haWwuY29tbW0iLCJleHAiOjE2NTc2MTc5MDgsImlhdCI6MTY1NzUxNzkwOH0.v_DeVJD4Cc77EZ_Kk0heR8tV0G4_vgFjZhvq87kOg3s"
  
      // };
      axios.delete("/wishlist/" + modelnum, {
        headers: {
          "Authorization": "Bearer "+token,
        }
      }
  
        // data: {
        //   "modelNumber": index.modelNumber
        // }
      ).then(function (response) {
        if (response.status == 200) {
          // console.log("Deleted successfully");
          // console.log(response.data)
          // setRemoveClicked(true)
          
          // window.location.reload();
          
          // navigate("/");
        }
      }).catch(function (error) {
        console.log("Error", error.response);
      });
      
      // setWish((products) => products.filter((i) => i !== index.modelNumber));
  
    }

    function buyNow(index){
      localStorage.setItem("buyProduct",JSON.stringify(index));
      navigate('/checkout')
      
    }

    function CategoryProducts(cattitle){
     

        navigate("/categoryProductsall")
      }
      const addtocart=(model)=>{
        if(cart.includes(model)){
            // alert("Item is already present in cart")
            toast.warn(<b>Item is already present in cart</b>)
        }
        else{
            // console.log("adddd"+model);
            cart.push(model);
            setCookie("CartModels",cart,20);
            // alert("Added to cart"+model);
        }  
    }  
    
    //var wish = JSON.stringify(wishlist);
    var wishlist=[];
    wish.map(i=>{
      wishlist.push(i.modelNumber);
    })
    // console.log("wish "+wishlist)

   

    return(
        
       
        
      (isProductsFetched)?
      (
        <>
        <ToastContainer position="top-center"/>
<Header/>
        <div >
          
          {
          (((len-1)>0) ? <Button id="comparebtn" style={{position:'fixed'}} onClick={()=>navigate('/compareProducts')}>Compare: {len-1}</Button> : (null))
          
          }
          <ToastContainer position="top-center"/>


  <Row style={{marginTop:"100px"}}>
  <svg className="svgtitle" xmlns="http://www.w3.org/2000/svg">


<filter id="motion-blur-filter" filterUnits="userSpaceOnUse">


  <feGaussianBlur stdDeviation="100 0"></feGaussianBlur>
</filter>
</svg>
{/* <span className="categorytitle" filter-content="S">{localStorage.getItem("Category")}</span> */}
  </Row>
          
              
            {/* <h1 style={{color:"rgb(255,98,98", marginLeft:'2%',marginTop:'2%'}}><i>{location.state.name}</i></h1> */}

            <TestFilterProducts/>
            
        
        
      
    </div>
    </>):(null)
    
    )

}

export default CategoryProducts;