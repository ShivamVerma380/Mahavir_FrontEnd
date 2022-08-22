import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { Col,Row,Button ,Image,Form,Card,NavDropdown,Accordion, Container} from "react-bootstrap";
import { AiOutlineHeart, AiTwotoneHeart,AiFillHeart } from "react-icons/ai";
import Header from "../Header";
import url from "../../Uri";
import {setCookie,getCookie} from '../Cookies'
import {FaArrowCircleUp} from 'react-icons/fa';
import {RiArrowDropDownLine} from 'react-icons/ri'
import Footer from "../Footer/Footer";

const BrandOfferPosterProducts =()=>{
    console.log("Inside poster");
    var comparemodels=getCookie("addToCompare").split(',');
    var token=getCookie("jwtToken");
    const [visible, setVisible] = useState(false)
    const [products, setProducts] = useState([]);
    const [change, setChange] = useState(0);
    const [areProductsFetched, SetAreProductsFetched] = useState(false);
    const[showTopBtn,setShowTopBtn] = useState(false);
    const[len,setLen]=useState(getCookie("addToCompare").split(',').length);


    const navigate = useNavigate();
    var models = localStorage.getItem("offermodels").split(',');
    useEffect(() => {
        window.addEventListener('scroll', () => { if (window.scrollY > 400) { setShowTopBtn(true); } else { setShowTopBtn(false); } });
        if (!areProductsFetched) {


            var urls = [];
            models.map(modelNum => {
                urls.push(axios.get(url+"/get-products/" + modelNum));
            })
            axios.all(urls).then(
                axios.spread((...res) => {
                    res.map(index => {

                        products.push(index.data);
                        // filteredProducts.push(index.data);


                    })

                    console.log("products", products);
                    SetAreProductsFetched(true);

                })
            )
        }
    })

    const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
          /* you can also use 'auto' behaviour
             in place of 'smooth' */
        });
      };

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

      function callProductDetails(index){
        //alert(index);
        // console.log("Index",index);
        localStorage.setItem("productSelected",index.modelNumber);
        // console.log("Product Selected",localStorage.getItem("productSelected"))
        navigate("/productDetails")
    }

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

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300){
          setVisible(true)
        } 
        else if (scrolled <= 300){
          setVisible(false)
        }
      };

    window.addEventListener('scroll', toggleVisible);
      const [show, setShow] = useState(false);

      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);



    return (
        // <div>
        //     <Header/>
        //     {
        //         <Row>
        //             <Col md={2}></Col>
                    
        //             {
        //             (areProductsFetched) ? (products.map(index => {
        //             return (
        //                 <Col md={3}>
        //                     <Card  style={{ width: '20rem'}} 
        //                 className="mb-2">
        //                      <AiOutlineHeart style={{marginTop:"10px",marginLeft:"5px"}} className="wishlisticon" size={30} onClick={()=>WishlistHandler(index)}/>
        //                     <Card.Img  variant="top" style={{width:200,height:175,alignSelf:"center"}} src={index.productImage1} onClick={()=>callProductDetails(index)}/>
        //                     <Card.Body>
        //                     <Card.Title as="h6" onClick={()=>callProductDetails(index)}>{index.productName}</Card.Title>
        //                     <Card.Text onClick={()=>callProductDetails(index)}>
        //                     <s>₹{index.productPrice}</s>  
        //                     <strong style={{marginLeft:20}}>₹{index.offerPrice}</strong>
        //                     <br></br>
        //                     {
        //                         index.productHighlights.split(';').map(highlight=>{
        //                             return(
        //                                 <span>{highlight}<br></br></span>
        //                             );  
        //                         })
        //                     }
        //                     </Card.Text>
                            
        //                     <br></br>
        //                     <Button variant="flat" size="1">Buy</Button>
        //                     </Card.Body>
                            
        //                 </Card>
        //                 </Col>
                        
        //             )
        //         })) : (null)
        //     }
        //         </Row>
                

        //     }
        // </div>
        <>
        <Header/>
<body style={{background:"whitesmoke"}}>
             
           
            {
          (((len-1)>0) ? <Button id="comparebtn" style={{position:'fixed'}} onClick={()=>navigate('/compareProducts')}>Compare: {len-1}</Button> : (null))
          
          }
          {
            (showTopBtn)?(
                <Button className="scrolltopbtn" onClick={scrollToTop}>
            <FaArrowCircleUp  />
        </Button>
            ):(null)
          }
        <br></br>
        <Row className="mainpage">
            <Col md={1}></Col>
            <Col md={10} >
            {
                // <h5 style={{textAlign:"end",marginRight:"25px"}}>God</h5>
                <Row className="filterproductsRow">
                    
                    
                    <Col >
                    <h4 style={{fontWeight:600, fontSize:"24px", lineHeight:"21px",fontFamily:"Roboto"}}>{localStorage.getItem("Category")}</h4>

                    

                    <p className="products">(<b>{products.length}</b> Products Found )</p>
                    </Col> 
                
                    <Col  style={{display:'flex',justifyContent:'end'}}>
                        <NavDropdown title={<b>Sort By<RiArrowDropDownLine style={{color:"black"}} size={25}/></b>}>
                        <NavDropdown.Item style={{color:'black',fontSize:"20px",fontWeight:'bold'}}  target="_blank" onClick={SortByLowPrice}>Price: Low To High</NavDropdown.Item>
                        <NavDropdown.Item style={{color:'black',fontSize:"20px",fontWeight:'bold'}}  target="_blank" onClick={SortByHighPrice}>Price: High To Low</NavDropdown.Item>
                        <NavDropdown.Item style={{color:'black',fontSize:"20px",fontWeight:'bold'}}  target="_blank" onClick={SortByTopRated}>Top Rated</NavDropdown.Item>
                        <NavDropdown.Item style={{color:'black',fontSize:"20px",fontWeight:'bold'}}  target="_blank">Latest Arrival</NavDropdown.Item>
                        <NavDropdown.Item style={{color:'black',fontSize:"20px",fontWeight:'bold'}}  target="_blank" onClick={SortByDiscount}>Discount: More To Less</NavDropdown.Item>
                        </NavDropdown>
                    </Col>
                    
                </Row>
            }
           
            
            {
                    
                    (areProductsFetched)?(
                        (products.length==0)?(
                            <h6>No Products Found</h6>
                        ):(
                    
                            products.map(index => {
                                return (
                                


                                    <Row className="filterproductsRow">
             
             {/* <div className="d-flex justify-content-center row">
        <div className="col-md-10">
            <div className="row p-2 bg-white border rounded">
                <div className="col-md-3 mt-1"><img className="img-fluid img-responsive rounded product-image" src="https://i.imgur.com/QpjAiHq.jpg"/></div>
                <div className="col-md-6 mt-1">
                    <h5>Quant olap shirts</h5>
                    <div className="d-flex flex-row">
                        <div className="ratings mr-2"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></div><span>310</span>
                    </div>
                    <div className="mt-1 mb-1 spec-1"><span>100% cotton</span><span className="dot"></span><span>Light weight</span><span className="dot"></span><span>Best finish<br></br></span></div>
                    <div className="mt-1 mb-1 spec-1"><span>Unique design</span><span className="dot"></span><span>For men</span><span className="dot"></span><span>Casual<br></br></span></div>
                    <p className="text-justify text-truncate para mb-0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.<br></br><br></br></p>
                </div>
                <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                    <div className="d-flex flex-row align-items-center">
                        <h4 className="mr-1">$13.99</h4><span className="strike-text">$20.99</span>
                    </div>
                    <h6 className="text-success">Free shipping</h6>
                    <div className="d-flex flex-column mt-4"><button className="btn btn-primary btn-sm" type="button">Details</button><button className="btn btn-outline-primary btn-sm mt-2" type="button">Add to wishlist</button></div>
                </div>
            </div>
            </div>
            </div> */}
                                        <Col md={2} className="imagecol">
                                            <Image fluid="true" className="filterproductImage"  onClick={() => callProductDetails(index)}  src={index.productImage1} />
                                            {/* <br></br>
                                            <p>{index.modelNumber}</p> */}
                                        </Col>

                                        <Col md={7} >
                                            <Row className="innerrow" onClick={() => callProductDetails(index)} >
                                                
                                                    <h4 className="multipleproduct_title" onClick={() => callProductDetails(index)} style={{ cursor: 'pointer' }}>{index.productName}</h4>
                                                
                                                {/* <Col md={1} >
                                                    {(localStorage.getItem("wishlistproduct")!=null) && (localStorage.getItem("wishlistproduct").includes(index.modelNumber)) ?
                                                        <AiFillHeart className="innerrow_wishlist" style={{  fill: 'rgb(255, 88, 88)' }}  size={30} onClick={() => WishlistHandler(index)} /> :
                                                        <AiOutlineHeart className="innerrow_wishlist" style={{  }}  size={30} onClick={() => WishlistHandler(index)} />
                                                    }
                                                </Col> */}

                                            </Row>
                                            <Row>
                                                {/* <Col md={11} style={{    paddingBottom: '40px',width: '10%'}} className="star">
                                                {Math.round(index.averageRating * 10) / 10} <span> </span><AiFillStar />
                                                
                                                </Col> */}

                                                    <ul className="list-inline small">
                                                            <li className="list-inline-item m-0"><i className="fa fa-star text-success fa-lg" ></i></li>
                                                            <li className="list-inline-item m-0"><i className="fa fa-star text-success fa-lg"></i></li>
                                                            <li className="list-inline-item m-0"><i className="fa fa-star text-success fa-lg"></i></li>
                                                            <li className="list-inline-item m-0"><i className="fa fa-star text-success fa-lg"></i></li>
                                                            <li className="list-inline-item m-0"><i className="fa fa-star-o text-gray fa-lg"></i></li>
                                                            </ul>
                                                
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

                                                    <Form.Check defaultChecked={(comparemodels.includes( index.modelNumber))?(true):(false)} type="checkbox" id={index.modelNumber}  style={{fontSize:"18px"}} label = "Add To Compare" onChange={()=>handleAddToCompare(index.modelNumber)}/>


                                                </Form>
                                            </Row>
                                            <br></br>

                                            <Row>
                                            
                                            
                                            <Button className="filterproductBtn" variant="outline-primary" onClick={()=>WishlistHandler(index)}>Add to wishlist</Button>

                                            </Row>
                                             
                                            

                                        </Col>
                                        

                                    </Row>



                                )
                            
                            })
                        )
                        
                    ):(
                        null
                    )
                }
            </Col>
        </Row>
        </body>
        <Footer/>
        </>

    )
}
export default BrandOfferPosterProducts;