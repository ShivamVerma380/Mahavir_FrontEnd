

import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Card, Button, Container,Image,Accordion, NavDropdown,CardGroup, Form } from "react-bootstrap";

import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../../App.css"
import { AiOutlineHeart, AiTwotoneHeart,AiFillHeart } from "react-icons/ai";
import {useLocation} from 'react-router-dom';
import Header from "../Header";
import {setCookie,getCookie} from '../Cookies';
import { ToastContainer, toast } from 'react-toastify';
import url from "../../Uri";

import Footer from "../Footer/Footer";
import {RiArrowDropDownLine} from 'react-icons/ri'
import {FaArrowCircleUp} from 'react-icons/fa'
import './MiniPoster.css';
function OfferItems() {
    var token=getCookie("jwtToken");
    var comparemodels=getCookie("addToCompare").split(',');
    var cart=getCookie("CartModels").split(',');
    const navigate = useNavigate();
    const location = useLocation();
    const [products, setProduct] = useState([]);
    const [filterProducts,setFilterProducts] = useState([]);
    const [isProductsFetched, setIsProductsFetched] = useState(false);
    const [isTimeout, setIsTimeOut] = useState(false);

    const[len,setLen]=useState(getCookie("addToCompare").split(',').length);
    const [change, setChange] = useState(0);

    const [categories,SetCategories] = useState([]);
    const [isCategoriesFetched,SetIsCategoriesFetched] = useState(false);

    const [filters,setFilters] = useState([]);
    const [isFiltersFetched,SetIsFiltersFetched] = useState(false);

    const [keySet, setKeyState] = useState([]); //To Store filters name

    const[filterselected,SetFilterSelected] = useState([])

    const[showTopBtn,setShowTopBtn] = useState(false);

    const [visible, setVisible] = useState(false)

    var productsArray = [];
    var flag = false;
    useEffect(() => {
        window.addEventListener('scroll', () => { if (window.scrollY > 400) { setShowTopBtn(true); } else { setShowTopBtn(false); } });
        if (!isProductsFetched && !isCategoriesFetched) {
            var modelNumbers = localStorage.getItem("offerPostersModelNumber");
            var modelNumbersArray = modelNumbers.split(",");
            // console.log("modelNumbersArray: ", modelNumbersArray)
            var urls = []
            var arr= new Set();
            modelNumbersArray.map(index => {
                if (index !== "")
                    urls.push(axios.get(url+"/get-products/" + index));
            })
            axios.all(urls).then(axios.spread((...response) => {
                // console.log("response: ", response)
                var i=0;
                response.map(index => {
                    productsArray.push(index.data);
                    arr.add(index.data.category);
                    if(i==0){
                        localStorage.setItem("CategoryOffers",index.data.category);
                        flag = true;
                    }
                    i++;
                }
                )
                var filterArr=[];
                productsArray.map(index=>{
                    if(index.category===localStorage.getItem("CategoryOffers")){
                        filterArr.push(index);
                    }
                })

                axios.get(url+"/filtercriterias/"+localStorage.getItem("CategoryOffers"))
                    .then(function(response){   
                        if(response.status==200){
                            // console.log("Filters fetched",response.data)
                            for(var key in response.data.filterCriterias){
                                keySet.push(key);
                            }
                            setFilters(response.data.filterCriterias);
                            SetIsFiltersFetched(true);
                        }
                    }).catch(function(error){
                        // console.log(url+"/filtercriterias/"+localStorage.getItem("CategoryOffers"),error);
                    })
                setFilterProducts(filterArr);
                setProduct(productsArray);
                SetCategories([...arr]);
                SetIsCategoriesFetched(true);
                setIsProductsFetched(true);
            }
            )).catch(function (error) {
                // console.log("error", error);
            }
            )

        }
        // if(!isFiltersFetched){
        //     console.log("inside axios");
        //     if(flag){
        //         console.log("In filter fetched");
                
        //     }
        // }

    }, []);

    const addtocart=(model)=>{
        if(cart.includes(model)){
            toast.warn("Item is already present in cart")
        }
        else{
            // console.log("adddd"+model);
            cart.push(model);
            setCookie("CartModels",cart,20);
            toast.success("Added to cart"+model);
        }  
    }  

    function handleAddToCompare(index){
        
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
        // console.log("Length...",length)
        
        
        if(element.checked){
            var flag = true;
            if(index.category!==localStorage.getItem("AddToCompareCategory") && localStorage.getItem("AddToCompareCategory")!==null){
                flag = false;
                document.getElementById(index.modelNumber).checked = false;
                toast.warn(<b>Please select products from same category</b>);
            }
            if(length==4){
                flag = false;
                document.getElementById(index.modelNumber).checked=false;
                toast.warn(<b>You can compare only 4 products</b>);
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
    //   console.log("Get",localStorage.getItem("comparecount"))

    function callProductDetails(index) {
        //alert(index);
        // console.log("Index", index);
        localStorage.setItem("productSelected", index.modelNumber);
        // console.log("Product Selected", localStorage.getItem("productSelected"))
        navigate("/productDetails")
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


    var cards = <div>
        <img className="logo_mahavir" alt="God" />
    </div>

    function handleCategoryClick(c){
        var arr=[]
        if(document.getElementById(c).checked){
            localStorage.setItem("CategoryOffers",c);
            // window.location.reload();
            axios.get(url+"/filtercriterias/"+c)
                .then(function(response){   
                    if(response.status==200){
                        // console.log("Filters fetched",response.data)
                        var arr=[]
                        for(var key in response.data.filterCriterias){
                            arr.push(key);
                        }
                        setKeyState(arr)
                        var p=[]
                        products.map(index=>{
                            if(index.category===c){
                                p.push(index);
                            }
                        })
                        setFilterProducts(p);
                        setFilters(response.data.filterCriterias);
                        SetIsFiltersFetched(true);
                    }
                }).catch(function(error){
                    // console.log(url+"/filtercriterias/"+localStorage.getItem("CategoryOffers"),error);
                })
            // console.log("Checked ",c)
            // products.map(index=>{
            //     console.log(index)
            //     if(index.category===c){
            //         arr.push(index)
            //     }
            // })
            // console.log("arr",arr)
            // // setFilterProducts([])
            // setFilterProducts([...arr])
        }
        
    }


    // const handleFormCheck=(index,f)=>{
    //     console.log("index:",index,"    f:",f)

    //     var element = document.getElementById(f);
    //     if(element.checked){
    //         var  arr= filterselected;
    //         var flag = true;
    //         arr.map((i,pos)=>{
    //             var pair = i.split("-");
    //             if(index===pair[0]){
    //                 arr[pos]= index+"-"+pair[1]+";"+f;
    //                 flag = false;
    //             }
    //         })
    //         if(flag){
    //             arr.push(index+"-"+f);
    //         }
    //         SetFilterSelected(arr);
    //         var productsArray = [];
    //         // console.log("products",products)
    //         console.log("filterSelected",filterselected);
    //         products.map(index=>{
    //             var flag = true;
    //             filterselected.map(a=>{
    //                 var pair = a.split("-");
    //                 // console.log("pair",pair)
    //                 var key = pair[0];
    //                 var values = pair[1].split(";");
    //                 console.log("values",values)
    //                 var valueflag= false;
    //                 values.map(v=>{
    //                     console.log(index.filtercriterias[key])
    //                     if(index.filtercriterias[key].includes(v)){
    //                         valueflag=true;  
    //                     }
    //                 })
    //                 if(!valueflag){
    //                     flag = false;
    //                 }
    //             })
    //             if(flag){
    //                 productsArray.push(index);
    //             }
    //         })
    //         // console.log("Products Array",productsArray.length);
            
    //         setFilterProducts(productsArray);

    //     }else{
    //         console.log("Filter selected",filterselected)
    //         var arr = filterselected;
    //         arr.map((i,pos)=>{
    //             var pair = i.split("-");
    //             if(index===pair[0]){
    //                 var values= pair[1].split(";");
    //                 if(values.length==1){
    //                     arr.splice(pos,1);
    //                 }
    //                 else{
    //                     var str=index+"-";
    //                     values.map(v=>{
    //                         if(v!==f){
    //                             str+=v+";";
    //                         }
    //                     })
    //                     str= str.slice(0,str.length-1);
    //                     arr[pos]=str;

    //                 }
    //             }
    //         })

    //         console.log("Array:",arr)

    //         // if(arr.length==0){
    //         //     console.log("In if")
    //         //     // localStorage.removeItem("SubCategory");
    //         //     // localStorage.removeItem("SubSubCategory");
    //         //     // window.location.reload();
    //         // }
    //         SetFilterSelected(arr);
    //         var productsArray = [];
    //         console.log("products",products)
    //         console.log("filterSelected",filterselected);
    //         products.map(index=>{
    //             var flag = true;
    //             filterselected.map(a=>{
    //                 var pair = a.split("-");
    //                 // console.log("pair",pair)
    //                 var key = pair[0];
    //                 var values = pair[1].split(";");
    //                 // console.log("values",values)
    //                 var valueflag= false;
    //                 values.map(v=>{
    //                     console.log(index.filtercriterias[key])
    //                     if(index.filtercriterias[key]===v){
    //                         valueflag=true;  
    //                     }
    //                 })
    //                 if(!valueflag){
    //                     flag = false;
    //                 }
    //             })
    //             if(flag){
    //                 productsArray.push(index);
    //             }
    //         })
    //         console.log("Products Array",productsArray.length);
            
    //         setFilterProducts(productsArray);
    //     }
    // }
    const handleFormCheck=(index,f)=>{
        // console.log("index:",index,"    f:",f)

        var element = document.getElementById(f);

        if(element.checked){
            // console.log("Check")
            var  arr= filterselected;
            var flag = true;
            arr.map((i,pos)=>{
                var pair = i.split("-");
                if(index===pair[0]){
                    arr[pos]= index+"-"+pair[1]+";"+f;
                    flag = false;
                }
            })
            if(flag){
                arr.push(index+"-"+f);
            }



            // SetFilterSelected(arr);

            // console.log("arr",arr);
            SetFilterSelected([...arr]);

            var productsArray = [];
            // console.log("products",products)
            // console.log("filterSelected",filterselected);
            products.map(index=>{
                var flag = true;
                filterselected.map(a=>{
                    var pair = a.split("-");
                    // console.log("pair",pair)
                    var key = pair[0];
                    var values = pair[1].split(";");
                    // console.log("values",values)
                    var valueflag= false;
                    values.map(v=>{
                        // console.log(index.filtercriterias[key])
                        if(index.filtercriterias[key].includes(v) ){
                            valueflag=true;  
                        }
                    })
                    if(!valueflag){
                        flag = false;
                    }
                })
                if(flag && index.category===localStorage.getItem("CategoryOffers")){
                    productsArray.push(index);
                }
            })
            // console.log("Products Array",productsArray.length);
            
            setFilterProducts(productsArray);

        }else{
            // console.log("Uncheck")
            // var arr = filterselected;
            var arr = filterselected;
            arr.map((i,pos)=>{
                var pair = i.split("-");
                if(index===pair[0]){
                    var values= pair[1].split(";");
                    if(values.length==1){
                        arr.splice(pos,1);
                    }
                    else{
                        var str=index+"-";
                        values.map(v=>{
                            if(v!==f){
                                str+=v+";";
                            }
                        })
                        str= str.slice(0,str.length-1);
                        arr[pos]=str;

                    }
                }
                })
            // console.log("Arr",arr)
            SetFilterSelected([...arr])
            
            var productsArray = [];
            // console.log("products",products)
            // console.log("filterSelected",filterselected);
            products.map(index=>{
                var flag = true;
                filterselected.map(a=>{
                    var pair = a.split("-");
                    // console.log("pair",pair)
                    var key = pair[0];
                    var values = pair[1].split(";");
                    // console.log("values",values)
                    var valueflag= false;
                    values.map(v=>{
                        // console.log(index.filtercriterias[key])
                        if(index.filtercriterias[key]===v && index.category===localStorage.getItem("CategoryOffers")){
                            valueflag=true;  
                        }
                    })
                    if(!valueflag){
                        flag = false;
                    }
                })
                if(flag && index.category===localStorage.getItem("CategoryOffers")){
                    productsArray.push(index);
                }
            })
            // console.log("Products Array",productsArray.length);
            
            setFilterProducts(productsArray);
        }
        
    }

    function SortByLowPrice(){
        // console.log("in sort function")
        var arr=[]; 
        setFilterProducts([]);
        arr = filterProducts;
        // console.log("Before sorting",filterProducts)
        arr.map(index=>{
            // console.log("indexOfferPrice",index.offerPrice)
        })
        arr.sort((a,b)=>a.offerPrice.replace(',','')-b.offerPrice.replace(',',''));
        // console.log("After sorting",filterProducts)
        arr.map(index=>{
            // console.log("indexOfferPrice--",index.offerPrice)
        })
        setFilterProducts([...arr])
    }
    
    function SortByHighPrice(){
        // console.log("in sort function")
        var arr=[]; 
        setFilterProducts([]);
        arr = filterProducts;
        // console.log("Before sorting",filterProducts)
        arr.map(index=>{
            // console.log("indexOfferPrice",index.offerPrice)
        })
        arr.sort((a,b)=>b.offerPrice.replace(',','')-a.offerPrice.replace(',',''));
        // console.log("After sorting",filterProducts)
        arr.map(index=>{
            // console.log("indexOfferPrice--",index.offerPrice)
        })
        setFilterProducts([...arr])
    }

    function SortByTopRated(){
        // console.log("in sort function")
        var arr=[]; 
        setFilterProducts([]);
        arr = filterProducts;
        // console.log("Before sorting",filterProducts)
        arr.map(index=>{
            // console.log("indexAverageRating",index.averageRating)
        })
        arr.sort((a,b)=>b.averageRating-a.averageRating);
        // console.log("After sorting",filterProducts)
        arr.map(index=>{
            // console.log("indexAverageRating--",index.averageRating)
        })
        setFilterProducts([...arr])
    }

    function SortByDiscount(){
        // console.log("in sort function")
        var arr=[]; 
        setFilterProducts([]);
        arr = filterProducts;
        // console.log("Before sorting",filterProducts)
        arr.map(index=>{
            // console.log("difference",((index.productPrice-index.offerPrice)*100/index.productPrice))
        })
        arr.sort((a,b)=>((b.productPrice.replace(',','')-b.offerPrice.replace(',',''))*100/b.productPrice.replace(',',''))-((a.productPrice.replace(',','')-a.offerPrice.replace(',',''))*100/a.productPrice.replace(',','')));
        // console.log("After sorting",filterProducts)
        arr.map(index=>{
            // console.log("indexAverageRating--",index.averageRating)
        })
        setFilterProducts([...arr])
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

    const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
          /* you can also use 'auto' behaviour
             in place of 'smooth' */
        });
      };
      
      window.addEventListener('scroll', toggleVisible);
      const [show, setShow] = useState(false);

      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);

    return (
        <>
        <ToastContainer position="top-center"/>
        <body style={{background:"whitesmoke"}}>
        <Header/>
        
             
           
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
        
        
        <Row className="offerproductpage">
            
            <Col >
            {
                <Row  style={{width:'90%',margin:'auto',marginBottom:'5px'}}>
                    
                    
                <Col >
                <h4  style={{fontWeight:600, fontSize:"24px", lineHeight:"21px",fontFamily:"Roboto"}}>{localStorage.getItem("Category")}</h4>

                

                <p className="offer_products">(<b>{filterProducts.length}</b> Products Found )</p>
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
                (isProductsFetched)?(
                    filterProducts.map((index) => {
                        return(
                            // <Row>
                            //     <Col md={2}>
                            //         <img style={{height:"275px",width:"275px"}} className="logo_mahavir" src={index.productImage1} alt="God" />
                            //     </Col>
                            // </Row>
                            <Row style={{width:'90%',margin:'auto ',marginBottom:'5px'}} className="filterproductsRow">
             
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
                                            <Image style={{cursor:"pointer"}} fluid="true" className="filterproductImage"  onClick={() => callProductDetails(index)}  src={index.productImage1} />
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

                                                    <Form.Check defaultChecked={(comparemodels.includes( index.modelNumber))?(true):(false)} type="checkbox" style={{fontSize:"18px"}} id={index.modelNumber}  label = "Add To Compare" onChange={()=>handleAddToCompare(index.modelNumber)}/>


                                                </Form>
                                            </Row>
                                            <br></br>

                                            <Row >
                                                {/* className="btnrow" */}
                                            
                                            
                                                 <Button className="filterproductBtn" variant="outline-primary" onClick={()=>WishlistHandler(index)}>Add to wishlist</Button>

                                            </Row>
                                             
                                            

                                        </Col>
                                        

                                    </Row>
                        )
                    })
                ):(
                    null
                )
            }
            </Col>
        </Row> 
        <Footer/>
        </body>
        </>
    );
}

export default OfferItems;