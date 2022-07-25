import React, { useEffect, useState } from "react";
import { Col, Row, Button, Form, Card, Container ,Image} from "react-bootstrap";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { AiOutlineHeart, AiTwotoneHeart, AiFillHeart } from "react-icons/ai";
import {setCookie,getCookie} from '../Cookies';
import { ToastContainer, toast } from 'react-toastify';
import MultiRangeSlider from "./multiRangeSlider/MultiRangeSlider";
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';



function CatProductsFilter(){

    var min= Number.MAX_VALUE ,max = Number.MIN_VALUE;
    const [minPrice,SetMinPrice] = useState();
    const [maxPrice,SetMaxPrice] = useState();
    var category = localStorage.getItem("Category");
    const navigate = useNavigate();
    var token=getCookie("jwtToken");
    console.log("min",min,"  max",max);

    var cart=getCookie("CartModels").split(',');
    //To save selected products
    const[selectedProducts,SetSelectedProducts] = useState([]);
    const[isSelectedProductsFetched,SetIsSelectedProductsFetched] = useState(false);

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
    const [value, setValue] =  React.useState([0,100]);
    
    if(localStorage.getItem("SubCategory")!=null && localStorage.getItem("SubSubCategory")!=null){
        filterselected.push(localStorage.getItem("SubCategory")+"-"+localStorage.getItem("SubSubCategory"))
    }
    


    
    
    

    useEffect(()=>{
        if(!isProductsFetched && !isSelectedProductsFetched && !isCategoriesFetched){
            axios.get("http://localhost:8080/get-products-by-category/"+localStorage.getItem("Category"))
            .then(function(response){
                SetProducts(response.data);
                if(localStorage.getItem("SubCategory")==null || localStorage.getItem("SubSubCategory")==null){
                    SetSelectedProducts(response.data);

                }else{
                    response.data.map(product=>{
                        if(product.filtercriterias[localStorage.getItem("SubCategory")]===localStorage.getItem("SubSubCategory")){
                            selectedProducts.push(product);
                        }                  
                    })
                }
                console.log("Selected Products: ",selectedProducts)
                
                selectedProducts.map((index,pos)=>{
                    // if(pos==0){
                    //     min = index.productPrice
                    //     max = index.productPrice
                    // }else{
                    //     if(min<index.productPrice){
                    //         min = index.productPrice
                    //     }
                    //     if(max>index.productPrice){
                    //         max = index.productPrice
                    //     }
                    // }
                    var price = parseInt(index.productPrice);
                            if(min>price) min = price;
                            if(max<price) max=price;
                    })
                    // console.log("min ",min,"  max",max);
                    // setValue([min,max])
                    SetMinPrice(min);
                    SetMaxPrice(max);
                
                // SetSelectedProducts(response.data);
                SetIsSelectedProductsFetched(true);
                SetIsProductsFetched(true);
            }).catch(function(error){
                console.log("error",error);
            })

            axios.get("http://localhost:8080/get-categories")
                .then(function(response){
                    response.data.map(cat=>{
                        categories.push(cat.category);
                    })
                    SetIsCategoriesFetched(true);
                }).catch(function(error){
                    console.log("error",error);
                })
            
            
            axios.get("http://localhost:8080/filtercriterias/"+localStorage.getItem("Category"))
                .then(function(response){
                    SetFilters(response.data.filterCriterias);
                    for(var key in response.data.filterCriterias){
                        keySet.push(key);
                    }
                    console.log("keySet",keySet)
                    SetIsFiltersFetched(true)
                    // SetFilters(response.data.filterCriterias)
                    // SetIsFiltersFetched(true)
                }).catch(function(error){
                    console.log("error",error)
                })
        }
        
    })

    

    const addtocart=(model)=>{
        
        
        
        if(cart.includes(model)){
            alert("Item is already present in cart")
        }
        else{
            console.log("adddd"+model);
            cart.push(model);
            setCookie("CartModels",cart,20);
            alert("Added to cart"+model);
        }
    
        
        
    }

    const handleAddToCompare = event => {
        if (event.target.checked) {
  
          console.log('✅ Checkbox is checked');
          setChange(change+1)
          
          
          
        } else {
          console.log('⛔ Checkbox is NOT checked');
          setChange(change-1)
        }
        setisAddCompareClicked(current => !current);
        // alert("Added To Compare");
        
    }

    function WishlistHandler(index) {
       

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
        localStorage.setItem("productSelected", index.modelNumber);
        // console.log("Product Selected",localStorage.getItem("productSelected"))
        navigate("/productDetails")
    }


    function handleCategoryCheck(cat){
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

    const handleFormCheck=(index,f)=>{
        console.log("index:",index,"    f:",f)

        var element = document.getElementById(f);
        if(element.checked){
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

//     const [minValue, set_minValue] = useState(0);
//   const [maxValue, set_maxValue] = useState(9000);
    // const handleInput = (e) => {
    //     set_minValue(e.minValue);
    //     set_maxValue(e.maxValue);
    // };
  
  // Changing State when volume increases/decreases
  const rangeSelector = (event, newValue) => {
    setValue(newValue);
    console.log(newValue)
  };
  
  function handlePriceRange({min,max}){
    // console.log("Min",{min});
    // console.log("Max",{max});
    //alert("Hello")
    // console.log("Min"+{min.min}+",Max"+{max.max});
    console.log("Min  "+{min}.min+",Max  "+{max}.max);
    var arr =[];
    selectedProducts.map(index=>{
        var price = parseInt(index.productPrice);
        if(price>={min}.min && price<={max}.max){
            arr.push(index);
        }
    })
    SetSelectedProducts(arr);
}
    

    return(
        <Row>
            <Col md={1}></Col>
            <Col md={2}>
                {/* <h3>Category</h3>
                {
                    (isCategoriesFetched)?(
                        categories.map(cat=>{
                            return(
                                <Form.Check type="radio" id={cat} value={cat}  label={cat} name="cat" defaultChecked={(cat===localStorage.getItem("Category"))?(true):(false)} onChange={()=>handleCategoryCheck(cat)}/>
                            )
                        })
                    ):(
                        null
                    )
                } */}
                <br></br>
                
                {/* <Typography id="range-slider" gutterBottom>
                    Select Price Range:
                </Typography>
                <Slider
                    value={value}
                    onChange={rangeSelector}
                    valueLabelDisplay="auto"
                />
                Your range of Price is between {value[0]} /- and {value[1]} /- */}

                {
                    (isProductsFetched) ? (
                        <MultiRangeSlider
                        // min={0}
                        // max={100}
                        // step={5}
                        // ruler={true}
                        // label={true}
                        // preventWheel={false}
                        // minValue={minValue}
                        // maxValue={maxValue}
                        // onInput={(e) => {
                        //   handleInput(e);
                        // }}
                        min={minPrice}
                        max={maxPrice}
                        // onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
                        onChange={({min,max})=> {handlePriceRange({min,max})}}
                    />
                    ) : (null)
                }
                
                    
                
                <br></br>
                <h4>Filters</h4>
                {
                    (isFiltersFetched)?(
                        keySet.map(index=>{
                            return(
                                <div>
                                    <h6>{index}</h6>
                                    {
                                        filters[index].map(f=>{
                                            return(
                                                <Form>
                                                    <Form.Check type="checkbox" id={f} value={f}  label={f}     defaultChecked={(false)} onChange={()=>handleFormCheck(index,f)} />
                                                    {/* (f===localStorage.getItem("SubSubCategory") && index===localStorage.getItem("SubCategory"))?(true): */}
                                                </Form>
                                            )
                                        
                                            
                                        })
                                    }
                                </div>
                            )
                        })
                    ):(
                        null
                    )
                }
            </Col>
            <Col>
            {
                    
                    (isSelectedProductsFetched)?(
                    
                        selectedProducts.map(index => {
                            return (


                                <Row className="filterproductsRow">
                                    <Col md={2}>
                                        <Image className="filterproductImage" fluid='true' onClick={() => callProductDetails(index)}  src={index.productImage1} />
                                        <br></br>
                                        <p>{index.modelNumber}</p>
                                    </Col>
                                    <Col md={10} >
                                        <Row className="innerrow">
                                            <Col md={11}>
                                                <h4 onClick={() => callProductDetails(index)} style={{ cursor: 'pointer' }}>{index.productName}</h4>
                                            </Col>
                                            <Col md={1} >
                                                {(localStorage.getItem("wishlistproduct")!=null) && (localStorage.getItem("wishlistproduct").includes(index.modelNumber)) ?
                                                    <AiFillHeart className="innerrow_wishlist" style={{  fill: 'rgb(255, 88, 88)' }}  size={30} onClick={() => WishlistHandler(index)} /> :
                                                    <AiOutlineHeart className="innerrow_wishlist" style={{  }}  size={30} onClick={() => WishlistHandler(index)} />
                                                }
                                            </Col>

                                        </Row>
                                        <Row className="innerrow">
                                            <Col md={11}>
                                                {
                                                    (index.productHighlights!=null)?(
                                                        index.productHighlights.split(';').map(highlight => {
                                                            return (
                                                                <h6 style={{color:'GrayText'}}>•{highlight}<br></br></h6>
                                                            );
                                                        })
                                                    ):(
                                                        null
                                                    )
                                                    
                                                }
                                                {/* <h6 style={{color:'GrayText'}}>{index.productHighlights.split}</h6> */}
                                            </Col>

                                        </Row>
                                        <Row className="innerrow">
                                            <Col md={10}>
                                                <h5>MSP: <b style={{ marginRight: "20px", color: "rgb(255,98,98)" }}>₹{index.offerPrice}</b> MRP: <b style={{ textDecorationLine: "line-through", textDecorationStyle: "solid" }}>₹{index.productPrice}</b></h5>

                                            </Col>

                                        </Row>

                                        <Row className="innerrow">
                                            <Form style={{
                                                fontWeight: '500',
                                                fontSize: '120%'
                                            }}>
                                                <Form.Check type="checkbox" label="Add To Compare" onChange={handleAddToCompare} />
                                            </Form>

                                        </Row>

                                        <Row className="innerrow">
                                            <Col><Button className="filterproductBtn"  variant="outline-primary" size="1" onClick={()=>addtocart(index.modelNumber)}>Add To Cart</Button></Col>
                                            <Col><Button className="filterproductBtn" variant="outline-primary">Buy Now</Button></Col>
                                           

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
        
    )
}

export default CatProductsFilter;