import React from "react";
import { useLocation } from 'react-router-dom';
import { Card, Button, Row, Col, Form,Image, NavDropdown,CardGroup, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import { AiOutlineHeart, AiTwotoneHeart, AiFillHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import {getCookie,setCookie} from "../Cookies";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import url from "../../Uri";
import { RiArrowDropDownLine } from "react-icons/ri";
import Footer from "../Footer/Footer";
import './Categoryproducts.css';
import "../Filters/FilterProducts.css"

const ProductsByDeal = () => {
    var token=getCookie("jwtToken");
    var comparemodels=getCookie("addToCompare").split(',');
    const location = useLocation();
    const [isAddCompareClicked, setisAddCompareClicked] = useState(false);
    const [change, setChange] = useState(0);
    const navigate = useNavigate();
    const [products,setProducts]=useState([])
    const[len,setLen]=useState(getCookie("addToCompare").split(',').length);
    var cards = <div>
        <img className="logo_mahavir"  alt="God" />
    </div>
    products.push(location.state.index.products)
    // console.log("products",products);
    products.map(i=>{
        // console.log("index",i);
        // console.log("model",i.modelNumber)
        i.map(index=>{
            // console.log("models",index.modelNumber)
        })

    })

    useEffect(()=>{
        window.scrollTo(0,0)
    })


    

    function WishlistHandler(index) {
        
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
            console.log(response.data)
            // navigate("/");
          }
          else{

            if(response.status==406){
                // alert("Item already present in wishlist")
                toast.success(<b>Item added to  wishlist</b>)
                console.log(response.data)
            }  
          }
        }).catch(function (error) {
            // alert("Item already present in wishlist")
            toast.success(<b>Item added to wishlist</b>)
            console.log("Error", error);
          
        })
      }
    
      }

      function handleAddToCompare(index){

        // console.log("inside add to compare");
        
        var element = document.getElementById(index.modelNumber);
        
        
        var length=0;
        
        comparemodels.map(index=>{
            if(index!==""){
                length++;
            }
        })
        
        
        
        if(element.checked){
            var flag = true;
            if(index.category!==localStorage.getItem("AddToCompareCategory") && localStorage.getItem("AddToCompareCategory")!==null){
                flag = false;
                document.getElementById(index.modelNumber).checked = false;
                // alert("Please select products from same category");
                toast.warn(<b>Please select products from same category</b>)
            }
            if(length==4){
                flag = false;
                document.getElementById(index.modelNumber).checked=false;
                // alert("You can compare only 4 products");
                toast.warn(<b>You can compare only 4 products</b>)
            }
            if(flag){
                // console.log("adddd"+index.modelNumber);
                comparemodels.push(index.modelNumber);
                setCookie("addToCompare",comparemodels,20);
                setLen(getCookie("addToCompare").split(',').length)
                // console.log(comparemodels);
                // console.log("checked "+index.modelNumber);
            }
        }
        else {
          for (var i = 0; i < comparemodels.length; i++) {
            if (comparemodels[i] === index.modelNumber) {
              comparemodels.splice(i, 1);
                // console.log(comparemodels);
                setCookie("addToCompare",comparemodels,20);
                setLen(getCookie("addToCompare").split(',').length)
                // window.location.reload();
                break;
            }
        }
        //   console.log("unchecked "+index.modelNumber);

        }

        var final_length = 0;
        comparemodels.map(index=>{
            if(index!==""){
                final_length++;
            }
        })
        if(final_length==0){
            localStorage.removeItem("AddToCompareCategory");
        }
        if(final_length==1){
            localStorage.setItem("AddToCompareCategory",index.category);
        }


       
    }
      
      localStorage.setItem("comparecount",change)
    //   console.log("Get",localStorage.getItem("comparecount"))

    function callProductDetails(index) {
        //alert(index);
        // console.log("Index", index);
        localStorage.setItem("productId",index.productId);
        localStorage.setItem("productSelected", index.modelNumber);
        // console.log("Product Selected", localStorage.getItem("productSelected"))
        navigate("/productDetails/"+index.modelNumber)
    }


    

    function SortByLowPrice(){
        // console.log("in sort function")
        var arr=[]; 
        setProducts([]);
        arr = products;
        // console.log("Before sorting",products)
        arr.map(index=>{
            // console.log("indexOfferPrice",index.offerPrice)
        })
        arr.sort((a,b)=>a.offerPrice.replace(',','')-b.offerPrice.replace(',',''));
        // console.log("After sorting",products)
        arr.map(index=>{
            // console.log("indexOfferPrice--",index.offerPrice)
        })
        setProducts([...arr])
    }
    
    function SortByHighPrice(){
        // console.log("in sort function")
        var arr=[]; 
        setProducts([]);
        arr = products;
        // console.log("Before sorting",products)
        arr.map(index=>{
            // console.log("indexOfferPrice",index.offerPrice)
        })
        arr.sort((a,b)=>b.offerPrice.replace(',','')-a.offerPrice.replace(',',''));
        // console.log("After sorting",products)
        arr.map(index=>{
            // console.log("indexOfferPrice--",index.offerPrice)
        })
        setProducts([...arr])
    }

    function SortByTopRated(){
        // console.log("in sort function")
        var arr=[]; 
        setProducts([]);
        arr = products;
        // console.log("Before sorting",products)
        arr.map(index=>{
            // console.log("indexAverageRating",index.averageRating)
        })
        arr.sort((a,b)=>b.averageRating.replace(',','')-a.averageRating.replace(',',''));
        // console.log("After sorting",products)
        arr.map(index=>{
            // console.log("indexAverageRating--",index.averageRating)
        })
        setProducts([...arr])
    }

    function SortByDiscount(){
        // console.log("in sort function")
        var arr=[]; 
        setProducts([]);
        arr = products;
        // console.log("Before sorting",products)
        arr.map(index=>{
            // console.log("difference",((index.productPrice-index.offerPrice)*100/index.productPrice))
        })
        arr.sort((a,b)=>((b.productPrice.replace(',','')-b.offerPrice.replace(',',''))*100/b.productPrice.replace(',',''))-((a.productPrice.replace(',','')-a.offerPrice.replace(',',''))*100/a.productPrice.replace(',','')));
        // console.log("After sorting",products)
        arr.map(index=>{
            // console.log("indexAverageRating--",index.averageRating)
        })
        setProducts([...arr])
    }



    return (
        <>
        
        <body style={{background:"whitesmoke"}}>



        <div style={{ fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif ' }}>
            <ToastContainer position="top-center"/>
            <Header/>
            
            {
          (((len-1)>0) ? <Button id="comparebtn" style={{position:'fixed'}} onClick={()=>navigate('/compareProducts')}>Compare: {len-1}</Button> : (null))
          
          }
          
          <Row className="mainpage" style={{marginTop:"120px"}}>
          <div className="dealsPage">
           <Col style={{background:"white"}}>
               {
                   <Row className="filterproductsRow">

                   <Col >
                   <h3 style={{fontWeight:600,  lineHeight:"21px",fontFamily:"Roboto", textAlign:"center"}}>{location.state.name}</h3>

                   

                   <p className="products" style={{textAlign:"center"}}>(<b>{location.state.index.products.length}</b> Products Found )</p>
                   </Col> 
                   

                   {/* <Col  style={{display:'flex',justifyContent:'end'}}>
                   <NavDropdown title={<b>Sort By<RiArrowDropDownLine style={{color:"black"}} size={25}/></b>}>
                   <NavDropdown.Item style={{color:'black',fontSize:"20px",fontWeight:'bold'}}  target="_blank" onClick={SortByLowPrice}>Price: Low To High</NavDropdown.Item>
                   <NavDropdown.Item style={{color:'black',fontSize:"20px",fontWeight:'bold'}}  target="_blank" onClick={SortByHighPrice}>Price: High To Low</NavDropdown.Item>
                   <NavDropdown.Item style={{color:'black',fontSize:"20px",fontWeight:'bold'}}  target="_blank" onClick={SortByTopRated}>Top Rated</NavDropdown.Item>
                   <NavDropdown.Item style={{color:'black',fontSize:"20px",fontWeight:'bold'}}  target="_blank">Latest Arrival</NavDropdown.Item>
                   <NavDropdown.Item style={{color:'black',fontSize:"20px",fontWeight:'bold'}}  target="_blank" onClick={SortByDiscount}>Discount: More To Less</NavDropdown.Item>
                   </NavDropdown>
                   </Col> */}
                   
               </Row>
           
               }
               <br></br>
               {
               location.state.index.products.map(index => {
               return (

                   <>
                   <Row className="filterproductsRow">
                                   <Col md={2} className="imagecol">
                                       <Image style={{border:'0', cursor:"pointer"}} thumbnail="true" className="filterproductImage"  onClick={() => callProductDetails(index)}  src={index.productImage1} />
                                   </Col>
                                   <Col md={7} >
                                       <Row className="innerrow" onClick={() => callProductDetails(index)} >
                                           
                                               <h4 className="multipleproduct_title" onClick={() => callProductDetails(index)} style={{ cursor: 'pointer' }}>{index.productName}</h4>
                                       </Row>
                                       <Row>
                                           {/* <Col md={11} style={{    paddingBottom: '40px',width: '10%'}} className="star">
                                           {Math.round(index.averageRating * 10) / 10} <span> </span><AiFillStar />
                                           
                                           </Col> */}
                                          

                                              
                                               {/* <StarRatings name="small-rating"  size={20} totalStars={5} rating={index.averageRating}/> */}
                                           
                                       </Row>
                                       
                                       <Row className="innerrow">
                                           <Col>
                                               {
                                                   (index.productHighlights!=null)?(
                                                       index.productHighlights.split(';').map(highlight => {
                                                           return (
                                                               <h6 className="multipleproduct_highlights">• {highlight}<br></br></h6>
                                                           );
                                                       })
                                                   ):(
                                                       null
                                                   )
                                                   
                                               }
                                               {/* <h6 style={{color:'GrayText'}}>{index.productHighlights.split}</h6> */}
                                           </Col>

                                       </Row>
                                       

                                       
{/* 
                                       <Row className="innerrow">
                                           <Col><Button className="filterproductBtn"  variant="outline-primary" size="1" onClick={()=>addtocart(index.modelNumber)}>Add To Cart</Button></Col>
                                           <Col><Button className="filterproductBtn" variant="outline-primary">Buy Now</Button></Col>
                                       

                                       </Row> */}
                                   </Col>

                                   <Col md={3} className="lastcol">

                                       

                                       <Row >
                                           <Col >
                                               {
                                                   (index.offerPrice==null) ? (
                                                       <h5 className="productprice">MRP: <b>₹{index.productPrice}</b></h5>
                                                   ) : (
                                                       <><h5 className="productprice"><b >MSP: ₹{index.offerPrice}</b></h5><br></br>
                                                       <h4 className="offerprice"><b >MRP: <b style={{ textDecorationLine: "line-through"}}>₹{index.productPrice}  </b></b>  <b style={{color:'green'}}>  {Math.round((parseInt(index.productPrice.replace(',',''))-parseInt(index.offerPrice.replace(',','')))*100/parseInt(index.productPrice.replace(',','')))}% off</b></h4></>
                                                   )
                                               }
                                           </Col>
                                       </Row>
                                       <Row className="checkboxx">
                                           <Form className="check">

                                               <Form.Check defaultChecked={(comparemodels.includes( index.modelNumber))?(true):(false)} type="checkbox" id={index.modelNumber} style={{fontSize:"18px"}} label = "Add To Compare" onChange={()=>handleAddToCompare(index)}/>
                                           </Form>
                                       </Row>
                                       <br></br>

                                       <Row >
                                        
                                            <Button className="filterproductBtn" variant="outline-primary" onClick={()=>WishlistHandler(index)}>Add to wishlist</Button>

                                       </Row>
                                        
                                       

                                   </Col>
                                   

                               </Row>
               
                   </>


               )
           })}
               
           </Col>
           </div>
       </Row>
          
            



            <Footer/>


            




        </div>
        </body>
        </>
    )
}
export default ProductsByDeal;