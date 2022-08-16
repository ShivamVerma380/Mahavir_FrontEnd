

import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Card, Button, Container, CardGroup, Form } from "react-bootstrap";

import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../../App.css"
import { AiOutlineHeart, AiTwotoneHeart,AiFillHeart } from "react-icons/ai";
import {useLocation} from 'react-router-dom';
import Header from "../Header";
import {setCookie,getCookie} from '../Cookies';
import { ToastContainer, toast } from 'react-toastify';
import url from "../../Uri";

function OfferItems() {
    var token=getCookie("jwtToken");
    var cart=getCookie("CartModels").split(',');
    const navigate = useNavigate();
    const location = useLocation();
    const [products, setProduct] = useState([]);
    const [filterProducts,setFilterProducts] = useState([]);
    const [isProductsFetched, setIsProductsFetched] = useState(false);
    const [isTimeout, setIsTimeOut] = useState(false);

    const [categories,SetCategories] = useState([]);
    const [isCategoriesFetched,SetIsCategoriesFetched] = useState(false);

    const [filters,setFilters] = useState([]);
    const [isFiltersFetched,SetIsFiltersFetched] = useState(false);

    const [keySet, setKeyState] = useState([]); //To Store filters name

    var productsArray = [];
    var flag = false;
    useEffect(() => {
        if (!isProductsFetched && !isCategoriesFetched) {
            var modelNumbers = localStorage.getItem("offerPostersModelNumber");
            var modelNumbersArray = modelNumbers.split(",");
            console.log("modelNumbersArray: ", modelNumbersArray)
            var urls = []
            var arr= new Set();
            modelNumbersArray.map(index => {
                if (index !== "")
                    urls.push(axios.get(url+"/get-products/" + index));
            })
            axios.all(urls).then(axios.spread((...response) => {
                console.log("response: ", response)
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
                            console.log("Filters fetched",response.data)
                            for(var key in response.data.filterCriterias){
                                keySet.push(key);
                            }
                            setFilters(response.data.filterCriterias);
                            SetIsFiltersFetched(true);
                        }
                    }).catch(function(error){
                        console.log(url+"/filtercriterias/"+localStorage.getItem("CategoryOffers"),error);
                    })
                setFilterProducts(filterArr);
                setProduct(productsArray);
                SetCategories([...arr]);
                SetIsCategoriesFetched(true);
                setIsProductsFetched(true);
            }
            )).catch(function (error) {
                console.log("error", error);
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
            alert("Item is already present in cart")
        }
        else{
            console.log("adddd"+model);
            cart.push(model);
            setCookie("CartModels",cart,20);
            alert("Added to cart"+model);
        }  
    }  

    function callProductDetails(index) {
        //alert(index);
        console.log("Index", index);
        localStorage.setItem("productSelected", index.modelNumber);
        console.log("Product Selected", localStorage.getItem("productSelected"))
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
              toast.success(<b>Added to wishlist successfully</b>)  
            //   console.log("Added to wishlist successfully");
              
              console.log(response.data)
              // navigate("/");
            }
          }).catch(function (error) {
            if(error.response.status==406) {
                toast.warn(<b>Item already present in Wishlist</b>)
            //   alert("Item already present in wishlist")
            }
            else {
              console.log("Error", error);
            }
            
          })
     
      }


    var cards = <div>
        <img className="logo_mahavir" src={require('../../assets/images.jpg')} alt="God" />
    </div>

    function handleCategoryClick(c){
        var arr=[]
        if(document.getElementById(c).checked){
            localStorage.setItem("CategoryOffers",c);
            // window.location.reload();
            axios.get(url+"/filtercriterias/"+c)
                .then(function(response){   
                    if(response.status==200){
                        console.log("Filters fetched",response.data)
                        var arr=[]
                        for(var key in response.data.filterCriterias){
                            arr.push(key);
                        }
                        setKeyState(arr)
                        setFilters(response.data.filterCriterias);
                        SetIsFiltersFetched(true);
                    }
                }).catch(function(error){
                    console.log(url+"/filtercriterias/"+localStorage.getItem("CategoryOffers"),error);
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

    return (
        <Row>
            <Col md={2}>
                <Form>
                {
                    (isCategoriesFetched) ?(
                        categories.map(c=>{
                            return(
                                <Form.Check id={c} name="category" defaultChecked={(c===localStorage.getItem("CategoryOffers"))?(true):(false)}  type="radio" label={c} onClick={()=>handleCategoryClick(c)}/>
                            )
                        })
                    ):(
                        null
                    )
                }
                </Form>
                <br></br>
                {
                    (isFiltersFetched)?(
                        keySet.map(key=>{
                            return(
                                <>
                                <h4>{key}</h4>
                                <Form>
                                {
                                    filters[key].map(f=>{
                                        return(
                                            <Form.Check type="checkbox" label={f}/>
                                        )
                                    })
                                }
                                </Form>
                                </>
                            )
                        })
                    ):(
                        null
                    )   
                }
            </Col>
            <Col md={10}>
            {
                (isProductsFetched)?(
                    filterProducts.map((index) => {
                        return(
                            <Row>
                                <Col md={2}>
                                    <img style={{height:"275px",width:"275px"}} className="logo_mahavir" src={index.productImage1} alt="God" />
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

export default OfferItems;