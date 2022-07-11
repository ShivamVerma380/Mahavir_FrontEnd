import React, { useEffect, useState } from "react";
import { Col, Row, Button, Form, Card, Container ,Image} from "react-bootstrap";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { AiOutlineHeart, AiTwotoneHeart, AiFillHeart } from "react-icons/ai";
import e from "cors";
import {setCookie,getCookie} from '../Cookies';

function FilterProduct() {
    var category = localStorage.getItem("Category");
    const navigate = useNavigate();

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


    //For  filter criterias
    const [filters, SetFilters] = useState();
    const [isFiltersFetched, SetIsFiltersFetched] = useState(false);

    const [keySet, setKeyState] = useState([]); //To Store filters name

    
    // const[filtersSelected,SetFiltersSelected] = useState([]);

    const[filterselected,SetFilterSelected] = useState([])

    useEffect(()=>{
        // console.log("category", category);
        if(!isSelectedProductsFetched && !isProductsFetched && !isFiltersFetched){
            axios.get("http://localhost:8080/get-products-by-category/"+category)
                .then(function(response){
                    SetProducts(response.data);
                    SetSelectedProducts(response.data);
                    console.log("products", products);
                    console.log("selected products",selectedProducts);
                    SetIsProductsFetched(true);
                    SetIsSelectedProductsFetched(true);
                }).catch(function(error){
                    console.log(error);
                })
        
            axios.get("http://localhost:8080/filtercriterias/"+category)
                .then(function(response){
                    console.log("response",response.data.filterCriterias)
                    SetFilters(response.data.filterCriterias);
                    for(var key in response.data.filterCriterias){
                        keySet.push(key);
                    }
                    console.log("keySet",keySet)
                    SetIsFiltersFetched(true)
                }).catch(function(error){
                    console.log("error in filtercriterias:"+error);
                })
        
        }
    })

    function callProductDetails(index) {
        //alert(index);
        // console.log("Index",index);
        localStorage.setItem("productSelected", index.modelNumber);
        // console.log("Product Selected",localStorage.getItem("productSelected"))
        navigate("/productDetails")
    }

    function WishlistHandler(index) {
        // alert("Item added successfully to wishlist");
        console.log(index.modelNumber)
        if (localStorage.getItem("wishlistproduct") == null) {
            localStorage.setItem("wishlistproduct", index.modelNumber)
        } else {
            var arr = localStorage.getItem("wishlistproduct").split(',')
            var flag = true;
            arr.map(i => {

                console.log("i: ", i)
                if (i === index.modelNumber) {
                    arr.splice(arr.indexOf(i), 1)
                    localStorage.setItem("wishlistproduct", arr)
                    console.log('del arr: ' + arr)
                    console.log('del ls: ' + localStorage.getItem("wishlistproduct"))
                    console.log("in if")
                    flag = false;
                }
            })
              if(flag)
                localStorage.setItem("wishlistproduct",localStorage.getItem("wishlistproduct")+","+index.modelNumber)
                navigate('/filterproducts')

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

    const handleFormCheck=(index,f)=>{

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
            console.log("products",products)
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
                    console.log("values",values)
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
        
        /*
        if(element.checked){

            var arr = filterselected
            arr.push(index+"-"+f)
            var productsArray = [];
            console.log("arr",arr)
            products.map(product=>{
                var flag = true;
                // arr.map(a=>{
                //     var pair= a.split("-")
                //     var key = pair[0]
                //     var value = pair[1]
                //     console.log("key",key)
                //     console.log("value",value)
                //     // var key = a.split("-")[0] 
                //     // var value = a.split("-")[1]
                //     // console.log("filterKey",product.filtercriterias[key])
                //     // if(product.filtercriterias[key] !== value){
                //     //     flag = false;
                //     // }
                // })
                if(flag){
                    productsArray.push(product)
                }
            })
            console.log("productsarray",productsArray)
            SetSelectedProducts(productsArray)
            SetFilterSelected(arr)
        }
        */
    }

    //Add to cart function
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
   
    return(
        <Row className="filterproductsContainer">
            <Col md={2}>
                <h5>FilterProduct</h5>
                <br></br>
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
                                                    <Form.Check type="checkbox" id={f} value={f} label={f} onChange={()=>handleFormCheck(index,f)}/>
                                                </Form>
                                            );
                                        })
                                    }
                                </div>
                            )
                        })
                    ):(
                        null
                    )
                }
                {/* {
                    (areSubCatFetched) ?(
                        filterSubCat.map((subCat,index)=>{
                            return(
                                <div>
                                    <h6>{subCat.subCategoryName}</h6>
                                    {
                                        subCat.subSubCategories.map(subSubCategories=>{
                                            return(
                                                <Form>
                                                    <Form.Check type="checkbox" value={subSubCategories.subSubCategoryName} label={subSubCategories.subSubCategoryName} defaultChecked={(subSubCategories.subSubCategoryName === localStorage.getItem("SubSubCategory")) ? (true) : (false)} onChange={handleFormCheck}  />
                                                </Form>
                                            );
                                        })
                                    }
                                </div>
                            )
                        })
                    ):(
                        null
                    )
                } */}
            </Col>
            <Col md={10}>
                {
                    (isSelectedProductsFetched)?(
                        selectedProducts.map(index => {
                            return (

                                // <Card  style={{ width: '20rem'}} 
                                // className="mb-2">
                                //      <AiOutlineHeart style={{marginTop:"10px",marginLeft:"5px"}} className="wishlisticon" size={30} onClick={()=>WishlistHandler(index)}/>
                                //     <Card.Img  variant="top" style={{width:200,height:175,alignSelf:"center"}} src={"data:image/png;base64," + index.productImage1.data} onClick={()=>callProductDetails(index)}/>
                                //     <Card.Body>
                                //     <Card.Title as="h6" onClick={()=>callProductDetails(index)}>{index.productName}</Card.Title>
                                //     <Card.Text onClick={()=>callProductDetails(index)}>
                                //     <s>₹{index.productPrice}</s>  
                                //     <strong style={{marginLeft:20}}>₹{index.offerPrice}</strong>
                                //     <br></br>
                                //     {
                                //         index.productHighlights.split(';').map(highlight=>{
                                //             return(
                                //                 <span>{highlight}<br></br></span>
                                //             );  
                                //         })
                                //     }
                                //     </Card.Text>

                                //     <br></br>
                                //     <Button variant="flat" size="1">Buy</Button>
                                //     </Card.Body>

                                // </Card>

                                <Row className="filterproductsRow">
                                    <Col md={2}>
                                        <Image className="filterproductImage" fluid='true' onClick={() => callProductDetails(index)}  src={index.productImage1} />

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
                                                    index.productHighlights.split(';').map(highlight => {
                                                        return (
                                                            <h6 style={{color:'GrayText'}}>•{highlight}<br></br></h6>
                                                        );
                                                    })
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
                                            <Col><Button className="filterproductBtn" variant="outline-primary"  >Buy Now</Button></Col>
                                           

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
    );


}

export default FilterProduct;