import React, { useEffect, useState } from "react";
import { Col, Row, Button, Form, Card, Container ,Image, NavDropdown,Accordion,Offcanvas,Navbar } from "react-bootstrap";

import axios from "axios"
import { useNavigate } from "react-router-dom";
import { AiOutlineHeart, AiTwotoneHeart, AiFillHeart } from "react-icons/ai";
import {setCookie,getCookie} from '../Cookies';
import { ToastContainer, toast } from 'react-toastify';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Box from '@mui/material/Box';
import { sortBy } from "underscore";
import { AiFillStar } from "react-icons/ai";
import "./FilterProducts.css"
import {FaArrowCircleUp} from 'react-icons/fa';
import { Dropdown } from "reactstrap";
import url from "../../Uri";
import {RiArrowDropDownLine} from 'react-icons/ri'
import {FcFilledFilter} from "react-icons/fc"
import StarRatings from "react-star-ratings";
import {BsArrowUp} from "react-icons/bs"

function TestFilterProducts(){
    var comparemodels=getCookie("addToCompare").split(',');
    var category = localStorage.getItem("Category");
    const navigate = useNavigate();
    var token=getCookie("jwtToken");
    // console.log("min",min,"  max",max);

    var cart=getCookie("CartModels").split(',');
    //To save selected products
    const[selectedProducts,SetSelectedProducts] = useState([]);
    const[isSelectedProductsFetched,SetIsSelectedProductsFetched] = useState(false);

    const[showTopBtn,setShowTopBtn] = useState(false);

    const [visible, setVisible] = useState(false)

    const[len,setLen]=useState(getCookie("addToCompare").split(',').length);

    //To save all products
    const[products,SetProducts] = useState([]);
    const[isProductsFetched,SetIsProductsFetched] = useState(false);

    
    

    //For Add To Compare
    const [isAddCompareClicked, setisAddCompareClicked] = useState(false);
    const [change, setChange] = useState(0);

    const [categories,SetCategories] = useState([]);
    const [isCategoriesFetched,SetIsCategoriesFetched] = useState(false); 


    //For  filter criterias
    const [filters, SetFilters] = useState();
    const [isFiltersFetched, SetIsFiltersFetched] = useState(false);

    const [keySet, setKeyState] = useState([]); //To Store filters name

    const[filterselected,SetFilterSelected] = useState([])


    
    // if(localStorage.getItem("SubCategory")!=null && localStorage.getItem("SubSubCategory")!=null){
    //     filterselected.push(localStorage.getItem("SubCategory")+"-"+localStorage.getItem("SubSubCategory"))
    // }
    

    const [min,SetMin] = useState(0);
    const [max,SetMax] = useState(100);

    const [value,SetValue] = useState([]);

    const [vals,setVals]=useState([]);
    // vals.push(localStorage.getItem("SubSubCategory"));

    

    useEffect(()=>{
        window.addEventListener('scroll', () => { if (window.scrollY > 400) { setShowTopBtn(true); } else { setShowTopBtn(false); } });
        if(!isProductsFetched && !isSelectedProductsFetched && !isCategoriesFetched  ){
            axios.get(url+"/get-products-by-category/"+localStorage.getItem("Category"))
            .then(function(response){
                
                if(localStorage.getItem("SubCategory")==null || localStorage.getItem("SubSubCategory")==null){
                    SetSelectedProducts(response.data);
                    var minPrice=Number.MAX_VALUE, maxPrice=Number.MIN_VALUE;
                    // var priceArr=[]
                    response.data.map((index,pos)=>{
                        console.log("In selected products map...")
                        if(minPrice>parseInt(index.offerPrice)){
                            minPrice = index.offerPrice
                        }
                        if(maxPrice<parseInt(index.offerPrice)){
                            maxPrice = index.offerPrice
                        }
                        
                    })
                    SetProducts(response.data);

                }else{
                    response.data.map(product=>{
                        if(product.filtercriterias[localStorage.getItem("SubCategory")]===localStorage.getItem("SubSubCategory")){
                            selectedProducts.push(product);
                        }                  
                    })
                    var minPrice=Number.MAX_VALUE, maxPrice=Number.MIN_VALUE;
                    // var priceArr=[]
                    selectedProducts.map((index,pos)=>{
                        console.log("In selected products map...")
                        if(minPrice>parseInt(index.offerPrice)){
                            minPrice = index.offerPrice
                        }
                        if(maxPrice<parseInt(index.offerPrice)){
                            maxPrice = index.offerPrice
                        }
                        
                    })
                    SetProducts(response.data);
                }
                
                console.log("min ",minPrice,"  max",maxPrice);
                SetMin(minPrice);
                SetMax(maxPrice);
                SetValue([minPrice,maxPrice]);
                
                SetIsSelectedProductsFetched(true);
                SetIsProductsFetched(true);
                
            }).catch(function(error){
                console.log("error",error);
            })

            if(!isCategoriesFetched){
                axios.get(url+"/get-categories")
                .then(function(response){
                    response.data.map(cat=>{
                        categories.push(cat.category);
                    })
                    
                }).catch(function(error){
                    console.log("error",error);
                })

                SetIsCategoriesFetched(true);
            }
            
            
            
            axios.get(url+"/filtercriterias/"+localStorage.getItem("Category"))
                .then(function(response){
                    SetFilters(response.data.filterCriterias);
                    for(var key in response.data.filterCriterias){
                        keySet.push(key);
                    }
                    console.log("keySet",keySet)
                    if(localStorage.getItem("SubCategory")!=null && localStorage.getItem("SubSubCategory")!=null){
                        // filterselected.push(localStorage.getItem("SubCategory")+"-"+localStorage.getItem("SubSubCategory"))
                        SetFilterSelected([localStorage.getItem("SubCategory")+"-"+localStorage.getItem("SubSubCategory")])
                    }
                    SetIsFiltersFetched(true)
                    // SetFilters(response.data.filterCriterias)
                    // SetIsFiltersFetched(true)
                }).catch(function(error){
                    console.log("error",error)
                })

                
        }
        
    })

    

    // const addtocart = (model) => {
    //     var flag = false;
    //     cart.map(index=>{
    //       if(index!=""){
    //         if(index.split("=")[0]===model){
    //           flag = true;
    //           alert("Item is already present in cart")
    //         }
    //       }
    //     })
    //     // if (cart.has(model+"=1")) {
    //     //   alert("Item is already present in cart")
    //     // }
    //     if(!flag){
    //       console.log("adddd" + model);
    //       cart.push(model+"=1");
    //       setCookie("CartModels", cart, 20);
    //       console.log("Cart Models",cart)
    //       navigate("/cart")
    //       // alert("Added to cart" + model);
    //     }
    //   }

    function handleAddToCompare(index){
        
        var element = document.getElementById(index.modelNumber);
        console.log("element",element);
        
        
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
                console.log("in flag");
                console.log("adddd"+index.modelNumber);
                comparemodels.push(index.modelNumber);
                setCookie("addToCompare",comparemodels,20);
                setLen(getCookie("addToCompare").split(',').length)
                console.log(comparemodels);
                console.log("cookie",getCookie("addToCompare").split(',').length)
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

    function WishlistHandler(index) {
       

        console.log("Wishlist clicked")

      
        var formdata = {
          "modelNumber": index.modelNumber
  
        }
  
        axios.post(url+"/wishlist", formdata, {
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
            // alert("Item already present in wishlist")
            toast.warn(<b>Item already present in Wishlist</b>)
          }
          else {
            console.log("Error", error);
          }
          
        })

    }


    function callProductDetails(index) {
        //alert(index);
        // console.log("Index",index);
        localStorage.setItem("productId",index.productId);
        localStorage.setItem("productSelected", index.modelNumber);
        // localStorage.removeItem("SubCategory")
        // localStorage.removeItem("SubSubCategory")
        // console.log("Product Selected",localStorage.getItem("productSelected"))
        navigate("/productDetails")
    }


    function handleCategoryCheck(cat){
        // alert("hi")
        var element = document.getElementById(cat)
        if(element.checked ==true){
            console.log(cat," is checked")
            localStorage.setItem("Category",cat);
            localStorage.removeItem("SubCategory")
            localStorage.removeItem("SubSubCategory")
            window.location.reload()
        }else{
            console.log(cat," is not checked")
        }
    }

    const handleFormCheck2=(index,f)=>{
        // alert("hi")
        
        console.log("index:"+index+"    f:"+f)

        var element = document.getElementById(f+f);
        
        if(element.checked){
            // alert("here")

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
                // console.log("----"+f.slice())
                // var hl=f.length/2;
                // alert("-----"+hl)
                arr.push(index+"-"+ f);
            }
            SetFilterSelected(arr);
            var productsArray = [];
            // console.log("products",products)
            console.log("filterSelected",filterselected);

            filterselected.map(filter=>{
                var v = filter.split("-");
                var arr = v[1].split(";");
                arr.map(val=>{
                    if(vals.includes(val)){

                    }
                    else{
                        vals.push(val);

                    }
                })
                console.log("val "+vals);
            })
            products.map(index=>{
                var flag = true;
                filterselected.map(a=>{
                    var pair = a.split("-");
                    // console.log("pair",pair)
                    var key = pair[0];
                    var values = pair[1].split(";");
                    var valueflag= false;
                    values.map(v=>{
                        console.log(index.filtercriterias[key])
                        

                        if(index.filtercriterias[key].includes(v)){
                            valueflag=true;  
                        }
                    })
                    if(!valueflag){
                        flag = false;
                    }
                })

                if(flag){
                    productsArray.push(index);
                }
            })

            
            console.log("values",vals)

            // console.log("Products Array",productsArray.length);
            
            SetSelectedProducts(productsArray);

        }else{

            console.log("Filter selected",filterselected)
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

            console.log("Array:",arr)

            // if(arr.length==0){
            //     console.log("In if")
            //     // localStorage.removeItem("SubCategory");
            //     // localStorage.removeItem("SubSubCategory");
            //     // window.location.reload();
            // }
            SetFilterSelected(arr);
            var productsArray = [];
            console.log("products",products)
            console.log("filterSelected",filterselected);
            
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
                        console.log(index.filtercriterias[key])
                        if(index.filtercriterias[key]===v){
                            valueflag=true;  
                        }
                    })
                    if(!valueflag){
                        flag = false;
                    }
                })
                if(flag){
                    productsArray.push(index);
                }
            })
            vals.splice(0,vals.length);
            filterselected.map(filter=>{
                var v = filter.split("-");
                var arr = v[1].split(";");
                arr.map(val=>{
                    if(vals.includes(val)){

                    }
                    else{
                        vals.push(val);

                    }
                })
                // alert("val "+vals);
            })
            console.log("Products Array",productsArray.length);
            
            SetSelectedProducts(productsArray);
        }
    }


    const handleFormCheck=(index,f)=>{
        // alert("hi")
        
        console.log("index:"+index+"    f:"+f)

        var element = document.getElementById(f);
        
        if(element.checked){
            // alert("here")

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
            SetFilterSelected(arr);
            var productsArray = [];
            // console.log("products",products)
            console.log("filterSelected",filterselected);
            products.map(index=>{
                var flag = true;
                filterselected.map(a=>{
                    var pair = a.split("-");
                    // console.log("pair",pair)
                    var key = pair[0];
                    var values = pair[1].split(";");
                    console.log("values",values)
                    var valueflag= false;
                    values.map(v=>{
                        console.log(index.filtercriterias[key])
                        if(index.filtercriterias[key].includes(v)){
                            valueflag=true;  
                        }
                    })
                    if(!valueflag){
                        flag = false;
                    }
                })
                if(flag){
                    productsArray.push(index);
                }
            })
            // console.log("Products Array",productsArray.length);
            
            SetSelectedProducts(productsArray);

        }else{
            // alert("here")

            console.log("Filter selected",filterselected)
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

            console.log("Array:",arr)

            // if(arr.length==0){
            //     console.log("In if")
            //     // localStorage.removeItem("SubCategory");
            //     // localStorage.removeItem("SubSubCategory");
            //     // window.location.reload();
            // }
            SetFilterSelected(arr);
            var productsArray = [];
            console.log("products",products)
            console.log("filterSelected",filterselected);
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
                        console.log(index.filtercriterias[key])
                        if(index.filtercriterias[key]===v){
                            valueflag=true;  
                        }
                    })
                    if(!valueflag){
                        flag = false;
                    }
                })
                if(flag){
                    productsArray.push(index);
                }
            })
            console.log("Products Array",productsArray.length);
            
            SetSelectedProducts(productsArray);
        }
    }

    

    const rangeSelector = (event, newValue) => {
        SetValue([parseInt(newValue[0]), parseInt(newValue[1])]);
        var arr=[];
        products.map(index=>{
            var flag = true;
            filterselected.map(a=>{
                var pair = a.split("-");
                console.log("pair",pair)
                var key = pair[0];
                var values = pair[1].split(";");
                console.log("values",values)
                var valueflag= false;
                values.map(v=>{
                    console.log(index.filtercriterias[key])
                    if(index.filtercriterias[key].includes(v)){
                        valueflag=true;  
                    }
                })
                if(!valueflag){
                    flag = false;
                }
            })
            if(flag && index.offerPrice>=parseInt(newValue[0]) && index.offerPrice<=parseInt(newValue[1])){
                arr.push(index);
            }
        })
        SetSelectedProducts(arr)

        console.log(newValue)
    };
    
  
    function SortByLowPrice(){
        console.log("in sort function")
        var arr=[]; 
        SetSelectedProducts([]);
        arr = selectedProducts;
        console.log("Before sorting",selectedProducts)
        arr.map(index=>{
            console.log("indexOfferPrice",index.offerPrice)
        })
        arr.sort((a,b)=>a.offerPrice-b.offerPrice);
        console.log("After sorting",selectedProducts)
        arr.map(index=>{
            console.log("indexOfferPrice--",index.offerPrice)
        })
        SetSelectedProducts([...arr])
    }
    
    function SortByHighPrice(){
        console.log("in sort function")
        var arr=[]; 
        SetSelectedProducts([]);
        arr = selectedProducts;
        console.log("Before sorting",selectedProducts)
        arr.map(index=>{
            console.log("indexOfferPrice",index.offerPrice)
        })
        arr.sort((a,b)=>b.offerPrice-a.offerPrice);
        console.log("After sorting",selectedProducts)
        arr.map(index=>{
            console.log("indexOfferPrice--",index.offerPrice)
        })
        SetSelectedProducts([...arr])
    }

    function SortByTopRated(){
        console.log("in sort function")
        var arr=[]; 
        SetSelectedProducts([]);
        arr = selectedProducts;
        console.log("Before sorting",selectedProducts)
        arr.map(index=>{
            console.log("indexAverageRating",index.averageRating)
        })
        arr.sort((a,b)=>b.averageRating-a.averageRating);
        console.log("After sorting",selectedProducts)
        arr.map(index=>{
            console.log("indexAverageRating--",index.averageRating)
        })
        SetSelectedProducts([...arr])
    }

    function SortByDiscount(){
        console.log("in sort function")
        var arr=[]; 
        SetSelectedProducts([]);
        arr = selectedProducts;
        console.log("Before sorting",selectedProducts)
        arr.map(index=>{
            console.log("difference",((index.productPrice-index.offerPrice)*100/index.productPrice))
        })
        arr.sort((a,b)=>((b.productPrice-b.offerPrice)*100/b.productPrice)-((a.productPrice-a.offerPrice)*100/a.productPrice));
        console.log("After sorting",selectedProducts)
        arr.map(index=>{
            console.log("indexAverageRating--",index.averageRating)
        })
        SetSelectedProducts([...arr])
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
      var rating=new Array();
      rating=[1,1,1,1,1];
    return(
        <>
<body style={{background:"whitesmoke"}}>
             
           
            {
          (((len-1)>0) ? <Button id="comparebtn" style={{position:'fixed'}} onClick={()=>navigate('/compareProducts')}>Compare: {len-1}</Button> : (null))
          
          }
          {
            (showTopBtn)?(
                <Button className="scrolltopbtn" onClick={scrollToTop}>
            <BsArrowUp  />
        </Button>
            ):(null)
          }
        
        <Row className="mainpage">
            <Col md={2} className="filtercol" style={{paddingLeft:"0px",paddingRight:"0px"}} >
            <h4><FcFilledFilter/>Filters</h4>   
                <hr style={{}}></hr> 
                <h4 style={{marginBottom:"15px"}}>Categories</h4>
              
                {
                    (isCategoriesFetched)?(
                        categories.map(cat=>{
                            return(
                                <Form.Check style={{marginLeft:"25px",fontFamily:"Roboto",marginTop:"5px",fontWeight:400,fontHeight:"16px",fontSize:"14px",color:"rgba(0,0,0,0.7)"}} type="radio" id={cat} value={cat}  label={cat} name="cat" defaultChecked={(cat===localStorage.getItem("Category"))?(true):(false)} onChange={()=>handleCategoryCheck(cat)}/>
                            )
                        })
                    ):(
                        null
                    )
                }
                <hr></hr>
                <React.Fragment>
                <Typography id="range-slider" gutterBottom style={{fontWeight:500, fontSize:"18px", lineHeight:"21px", marginLeft:"14px",fontFamily:"Roboto",marginBottom:"15px"}}>
                    Select Price Range
                </Typography>
                <Slider
                    defaultValue={[parseInt(min),parseInt(max)]}
                    onChange={rangeSelector}
                    valueLabelDisplay="off"
                    min={parseInt(min)}
                    max={parseInt(max)}
                    style={{width:"230px",marginLeft:"14px"}}
                />
                </React.Fragment>
                <h4 style={{marginLeft:"14px",marginRight:"14px"}}>Your range of Price is between {value[0]} /- and {value[1]} /-</h4>
              
                
                
                <br></br>
                <hr></hr>
                
                {
                    (isFiltersFetched)?(
                        keySet.map((index,pos)=>{
                            return(
                                <div >
                                    
                                    <Accordion defaultActiveKey="0" flush style={{width:'100%'}}>
                                    <Accordion.Item eventKey={pos}>
                                                    <Accordion.Header style={{fontWeight:500, fontSize:"18px", lineHeight:"21px", marginLeft:"14px",marginRight:"14px",fontFamily:"Roboto",marginBottom:"15px"}}>{index}</Accordion.Header>
                                                    <Accordion.Body>
                                                                    
                                    {/* <h5>{index}</h5> */}
                                    {
                                        filters[index].map(f=>{
                                            return(
                                                <>
                                                
                                                    <Form>
                                                        <Form.Check style={{marginLeft:"25px",fontFamily:"Roboto",marginTop:"5px",fontWeight:400,fontHeight:"16px",fontSize:"14px",color:"rgba(0,0,0,0.7)"}} type="checkbox" id={f} value={f}  label={f}     defaultChecked={(f===localStorage.getItem("SubSubCategory") && index===localStorage.getItem("SubCategory"))?(true):(false)} onChange={()=>handleFormCheck(index,f)} />
                                                    </Form>
                                                     
                                                </>
                                                
                                                
                                            )
                                        
                                            
                                        })
                                    }
                                    </Accordion.Body>
                                    </Accordion.Item>
                                    </Accordion>
                                    <hr></hr>
                                </div>
                            )
                        })
                    ):(
                        null
                    )
                }
            </Col>
            <Col md={10} >
            {
                // <h5 style={{textAlign:"end",marginRight:"25px"}}>God</h5>
                <Row className="filterproductsRow">
                    
                    
                    <Col >
                    <h4 className="multipleproducts_cat_name" style={{fontWeight:600, fontSize:"24px", lineHeight:"21px",fontFamily:"Roboto"}}>{localStorage.getItem("Category")}</h4>

                    <div className="offcavasfilters">
                        <i class="fa fa-filter fa-3x" aria-hidden="true" onClick={handleShow}></i>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch
      </Button> */}

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title style={{fontWeight:600, fontSize:"22px", lineHeight:"21px", marginLeft:"14px",fontFamily:"Roboto"}}>Filters<br></br><br></br><b>{selectedProducts.length}</b> Products Found</Offcanvas.Title>
          

        </Offcanvas.Header>
        <Offcanvas.Body>
        {/* <Col md={2} className="filtercol"> */}
                <h5 style={{fontWeight:600, fontSize:"22px", lineHeight:"21px", marginLeft:"14px",fontFamily:"Roboto",marginBottom:"15px"}}>Category</h5>
                {
                    (isCategoriesFetched)?(
                        categories.map(cat=>{
                            return(
                                <Form.Check style={{marginLeft:"25px",fontFamily:"Roboto",marginTop:"5px",fontWeight:400,fontHeight:"16px",fontSize:"14px",color:"rgba(0,0,0,0.7)"}} type="radio" id={cat} value={cat}  label={cat} name="cat" defaultChecked={(cat===localStorage.getItem("Category"))?(true):(false)} onChange={()=>handleCategoryCheck(cat)}/>
                            )
                        })
                    ):(
                        null
                    )
                }
                <hr></hr><br></br>
                <React.Fragment>
                {/* <Typography id="range-slider" gutterBottom>
                    Select Price Range:
                </Typography> */}
                
                <Slider
                    defaultValue={[parseInt(min),parseInt(max)]}
                    onChange={rangeSelector}
                    valueLabelDisplay="off"
                    min={parseInt(min)}
                    max={parseInt(max)}
                    style={{width:"230px",marginLeft:"14px"}}
                />
                </React.Fragment>
                <h4 style={{marginLeft:"14px",marginRight:"14px"}}>Your range of Price is between {value[0]} /- and {value[1]} /-</h4>


        
                <br></br><br></br>
                {/* <h4>Filters</h4> */}
                {
                    (isFiltersFetched)?(
                        keySet.map((index,pos)=>{
                            return(
                                <div >
                                    
                                    <Accordion defaultActiveKey="0" flush style={{width:'100%'}}>
                                    <Accordion.Item style={{fontWeight:500, fontSize:"18px", lineHeight:"21px", marginLeft:"14px",marginRight:"14px",fontFamily:"Roboto",marginBottom:"15px"}} eventKey={pos}>
                                                    <Accordion.Header style={{fontWeight:500, fontSize:"18px", lineHeight:"21px", marginLeft:"14px",marginRight:"14px",fontFamily:"Roboto",marginBottom:"15px"}}>{index}</Accordion.Header>
                                                    <Accordion.Body>
                                                                    
                                    {/* <h5>{index}</h5> */}
                                    {
                                        filters[index].map(f=>{
                                            // console.log("i"+index+" f"+f)
                                            
                                            return(
                                                <>
                                                
                                                    <Form>
                                                        <Form.Check style={{fontSize:'18px',fontWeight:'600'}} type="checkbox" id={f+f} value={f}  label={f}     defaultChecked={(vals.includes(f))?(true):(false)} onChange={()=>handleFormCheck2(index,f)} />
                                                    </Form>
                                                     
                                                </>
                                                
                                                
                                            )
                                        
                                            
                                        })
                                    }
                                    </Accordion.Body>
                                    </Accordion.Item>
                                    </Accordion>
                                    <hr></hr>
                                </div>
                            )
                        })
                    ):(
                        null
                    )
                }
            {/* </Col> */}
        </Offcanvas.Body>
      </Offcanvas>
    </div>

                    <p className="products">(<b>{selectedProducts.length}</b> Products Found )</p>
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
                    
                    (isSelectedProductsFetched)?(
                        (selectedProducts.length==0)?(
                            <h6>No Products Found</h6>
                        ):(
                    
                            selectedProducts.map(index => {
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
                                            <Image style={{border:'0'}} thumbnail="true" className="filterproductImage"  onClick={() => callProductDetails(index)}  src={index.productImage1} />
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
                                                            <h4 className="offerprice"><b >MRP: <b style={{ textDecorationLine: "line-through"}}>₹{index.productPrice}  </b></b>  <b style={{color:'green'}}>  {Math.round((index.productPrice-index.offerPrice)*100/index.productPrice)}% off</b></h4></>
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
                                                {/* className="btnrow" */}
                                            
                                            
                                                 <Button className="filterproductBtn" variant="outline-primary" >Add to wishlist</Button>

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
        </>

        
        
    )
}

export default TestFilterProducts;