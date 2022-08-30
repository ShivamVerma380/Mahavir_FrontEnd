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
        <img className="logo_mahavir" src={require('../../assets/images.jpg')} alt="God" />
    </div>
    products.push(location.state.index.products)
    console.log("products",products);
    products.map(i=>{
        console.log("index",i);
        console.log("model",i.modelNumber)
        i.map(index=>{
            console.log("models",index.modelNumber)
        })

    })

    useEffect(()=>{
        window.scrollTo(0,0)
    })


    // function WishlistHandler(index) {
    //     // alert("Item added successfully to wishlist");
    //     console.log(index.modelNumber)
    //     // if (localStorage.getItem("wishlistproduct") == null) {
    //     //     localStorage.setItem("wishlistproduct", index.modelNumber)
    //     // } else {
    //     //     var arr = localStorage.getItem("wishlistproduct").split(',')
    //     //     var flag = true;
    //     //     arr.map(i => {

    //     //         console.log("i: ", i)
    //     //         if (i === index.modelNumber) {
    //     //             arr.splice(arr.indexOf(i), 1)
    //     //             localStorage.setItem("wishlistproduct", arr)
    //     //             console.log('del arr: ' + arr)
    //     //             console.log('del ls: ' + localStorage.getItem("wishlistproduct"))
    //     //             console.log("in if")
    //     //             flag = false;
    //     //         }
    //     //     })
    //     //     if (flag)
    //     //         localStorage.setItem("wishlistproduct", localStorage.getItem("wishlistproduct") + "," + index.modelNumber)
    //     //     //navigate('/categoryProductsall')
    //     //     ProductsByDeal(location.state.name)

    //     // }

    //     console.log("Wishlist clicked")

      
    //     var formdata = {
    //       "modelNumber": index.modelNumber
  
    //     }
  
    //     axios.post(url+"/wishlist", formdata, {
    //       headers: {
    //         "Authorization": "Bearer "+token,
    //         "Content-Type": "multipart/form-data"
    //       }
    //     }).then(function (response) {
    //       if (response.status == 200) {
    //         // console.log("Added to wishlist successfully");
    //         toast.success(<b>Added to wishlist successfully</b>)
            
    //         console.log(response.data)
    //         // navigate("/");
    //       }
    //     }).catch(function (error) {
    //       if(error.response.status==406) {
    //         toast.warn(<b>Item already present in Wishlist</b>)
    //         // alert("Item already present in wishlist")
    //       }
    //       else {
    //         console.log("Error", error);
    //       }
          
    //     })

    // }

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
            alert("Item already present in wishlist")
            console.log(response.data)
          }
        }).catch(function (error) {
            alert("Item already present in wishlist")
            console.log("Error", error);
          
        })
      }
    
      }

      function handleAddToCompare(index){

        console.log("inside add to compare");
        
        var element = document.getElementById(index.modelNumber);
        
        
        var length=0;
        
        comparemodels.map(index=>{
            if(index!==""){
                length++;
            }
        })
        // if(length==0){
        //     console.log("Category...",index.category)
        //     localStorage.setItem("AddToCompareCategory",localStorage.getItem(index.category));
        // }
        // var length = comparemodels.length;
        console.log("Length...",length)
        
        
        if(element.checked){
            var flag = true;
            if(index.category!==localStorage.getItem("AddToCompareCategory") && localStorage.getItem("AddToCompareCategory")!==null){
                flag = false;
                document.getElementById(index.modelNumber).checked = false;
                alert("Please select products from same category");
            }
            if(length==4){
                flag = false;
                document.getElementById(index.modelNumber).checked=false;
                alert("You can compare only 4 products");
            }
            if(flag){
                console.log("adddd"+index.modelNumber);
                comparemodels.push(index.modelNumber);
                setCookie("addToCompare",comparemodels,20);
                setLen(getCookie("addToCompare").split(',').length)
                console.log(comparemodels);
                console.log("checked "+index.modelNumber);
            }
        }
        else {
          for (var i = 0; i < comparemodels.length; i++) {
            if (comparemodels[i] === index.modelNumber) {
              comparemodels.splice(i, 1);
                console.log(comparemodels);
                setCookie("addToCompare",comparemodels,20);
                setLen(getCookie("addToCompare").split(',').length)
                // window.location.reload();
                break;
            }
        }
          console.log("unchecked "+index.modelNumber);

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
      console.log("Get",localStorage.getItem("comparecount"))

    function callProductDetails(index) {
        //alert(index);
        console.log("Index", index);
        localStorage.setItem("productId",index.productId);
        localStorage.setItem("productSelected", index.modelNumber);
        console.log("Product Selected", localStorage.getItem("productSelected"))
        navigate("/productDetails")
    }


    // const handleAddToCompare = event => {
    //     if (event.target.checked) {

    //         console.log('✅ Checkbox is checked');
    //         setChange(change + 1)



    //     } else {
    //         console.log('⛔️ Checkbox is NOT checked');
    //         setChange(change - 1)
    //     }
    //     setisAddCompareClicked(current => !current);
    //     // alert("Added To Compare");

    // }

    // localStorage.setItem("comparecount", change)
    // console.log("Get", localStorage.getItem("comparecount"))

    function SortByLowPrice(){
        console.log("in sort function")
        var arr=[]; 
        setProducts([]);
        arr = products;
        console.log("Before sorting",products)
        arr.map(index=>{
            console.log("indexOfferPrice",index.offerPrice)
        })
        arr.sort((a,b)=>a.offerPrice-b.offerPrice);
        console.log("After sorting",products)
        arr.map(index=>{
            console.log("indexOfferPrice--",index.offerPrice)
        })
        setProducts([...arr])
    }
    
    function SortByHighPrice(){
        console.log("in sort function")
        var arr=[]; 
        setProducts([]);
        arr = products;
        console.log("Before sorting",products)
        arr.map(index=>{
            console.log("indexOfferPrice",index.offerPrice)
        })
        arr.sort((a,b)=>b.offerPrice-a.offerPrice);
        console.log("After sorting",products)
        arr.map(index=>{
            console.log("indexOfferPrice--",index.offerPrice)
        })
        setProducts([...arr])
    }

    function SortByTopRated(){
        console.log("in sort function")
        var arr=[]; 
        setProducts([]);
        arr = products;
        console.log("Before sorting",products)
        arr.map(index=>{
            console.log("indexAverageRating",index.averageRating)
        })
        arr.sort((a,b)=>b.averageRating-a.averageRating);
        console.log("After sorting",products)
        arr.map(index=>{
            console.log("indexAverageRating--",index.averageRating)
        })
        setProducts([...arr])
    }

    function SortByDiscount(){
        console.log("in sort function")
        var arr=[]; 
        setProducts([]);
        arr = products;
        console.log("Before sorting",products)
        arr.map(index=>{
            console.log("difference",((index.productPrice-index.offerPrice)*100/index.productPrice))
        })
        arr.sort((a,b)=>((b.productPrice-b.offerPrice)*100/b.productPrice)-((a.productPrice-a.offerPrice)*100/a.productPrice));
        console.log("After sorting",products)
        arr.map(index=>{
            console.log("indexAverageRating--",index.averageRating)
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
        //   (((len-1)>0) ? <Button id="comparebtn" style={{position:'fixed'}} onClick={()=>navigate('/compareProducts')}>Compare: {len-1}</Button> : (null))
          
          }
            <Row className="mainpage" style={{marginTop:"120px"}}>
                <Col md={1}></Col>
                <Col md={10} style={{background:"white"}}>
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
                        <Row className="filterproductsrow">
                            <Col md={1}></Col>
                            <Col md={2} className="imagecol">
                                {/* <img onClick={() => callProductDetails(index)} style={{ height: '60%', width: '100%', cursor: 'pointer', justifySelf: 'center' }} src={"data:image/png;base64," + index.productImage1.data} /> */}
                                {/* <img onClick={() => callProductDetails(index)} style={{ height: '60%', width: '100%', cursor: 'pointer', justifySelf: 'center' }} src={index.productImage1} /> */}
                                <Image fluid="true" className="filterproductImage"  onClick={() => callProductDetails(index)}  src={index.productImage1} />

                            </Col>
                            <Col md={4}>
                                <Row className="innerrow" onClick={() => callProductDetails(index)}>
                                    <Col md={1}></Col>
                                    <Col md={12}>
                                    <h4 className="multipleproduct_title" onClick={() => callProductDetails(index)} style={{ cursor: 'pointer' }}>{index.productName}</h4>
                                    </Col>
                                </Row>

                                {/* <Row> */}
                                                {/* <Col md={11} style={{    paddingBottom: '40px',width: '10%'}} className="star">
                                                {Math.round(index.averageRating * 10) / 10} <span> </span><AiFillStar />
=======
                                {/* <Row>
>>>>>>> c0487a6602f7d443adf779576a8923d447849b5a
                                                

                                                   
                                                

                                            {/* </Row> */}

                                            

                                            <Row className="innerrow">
                                                <Col md={1}></Col>
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
                                            </Col>
                                <Col md={3}>
                                <Row >
                                                <Col >
                                                    {
                                                        (index.offerPrice==null) ? (
                                                            <h4 style={{fontSize:'24px'}}>MRP: <b>₹{index.productPrice}</b></h4>
                                                        ) : (
                                                            // <><h5 style={{fontSize:'24px',fontWeight:'600',fontFamily:'Roboto',lineHeight:'26px',letterSpacing:'0.01em'}}><p style={{fontSize:'24px',color:'#c10000',fontWeight:'600',fontFamily:'Roboto',lineHeight:'26px',letterSpacing:'0.01em'}}>MSP: ₹{index.offerPrice}</p> | MRP: <b style={{ textDecorationLine: "line-through", textDecorationStyle: "solid" }}>₹{index.productPrice}</b></h5></>
                                                            <><h5 style={{fontSize:'24px',fontWeight:'600',fontFamily:'Roboto',lineHeight:'26px',letterSpacing:'0.01em'}}><b style={{fontSize:'24px',color:'#FA0000',fontWeight:'600',fontFamily:'Roboto',lineHeight:'26px',letterSpacing:'0.01em'}}>MSP: ₹{index.offerPrice}</b><br></br>
                                                            <b style={{fontWeight:500,fontSize:"18px",color:"#565959" }}>MRP: <b style={{ textDecorationLine: "line-through", textDecorationStyle: "solid",fontWeight:500,fontSize:"18px",color:"#565959"}}>₹{index.productPrice}  </b></b>  <b style={{color:"green",fontSize:"18px",marginLeft:"10px"}}>  {Math.round((index.productPrice-index.offerPrice)*100/index.productPrice)}% off</b></h5></>  
                                                        )
                                                    }
                                                </Col>
                                            </Row>
                                            <Row className="checkboxx">
                                                <Form className="check">

                                                    <Form.Check style={{
                                                        '@media screen and(min-width: 480px)': {
                                                            display: 'none'
                                                    },fontSize:"18px"}} defaultChecked={(comparemodels.includes( index.modelNumber))?(true):(false)} type="checkbox" id={index.modelNumber} label = "Add To Compare" onChange={()=>handleAddToCompare(index)}/>


                                                </Form>
                                            </Row>
                                            <br></br>

                                            <Row>
                                            
                                            
                                            <Button style={{width:"max-content", height:"max-content", fontSize:"18px"}} className="filterproductBtn" variant="outline-primary" onClick={()=>WishlistHandler(index)}>Add to wishlist</Button>
                                            
                                            </Row>
                                </Col>
                                <Col md={1}></Col>

                                {/* <Row>
                                    <Col md={11}>
                                        <h3 onClick={() => callProductDetails(index)} style={{ cursor: 'pointer' }}>{index.productName}</h3>
                                    </Col>
                                    <Col md={1}>
                                        {(localStorage.getItem("wishlistproduct").includes(index.modelNumber)) ?
                                            <AiFillHeart style={{ marginTop: "10px", marginLeft: "10px", fill: 'rgb(255, 88, 88)' }} className="wishlisticon" size={50} onClick={() => WishlistHandler(index)} /> :
                                            <AiOutlineHeart style={{ marginTop: "10px", marginLeft: "10px" }} className="wishlisticon" size={50} onClick={() => WishlistHandler(index)} />
                                        }
                                    </Col>

                                </Row> */}
                                
                                

                                

                                <br></br>
                            


                        </Row>
                        <hr></hr>
                        <br></br>
                        </>


                    )
                })}
                    
                </Col>
            </Row>



            <Footer/>


            




        </div>
        </body>
        </>
    )
}
export default ProductsByDeal;