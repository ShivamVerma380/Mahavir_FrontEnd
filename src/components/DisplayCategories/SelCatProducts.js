import { margin } from "@mui/system";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import CategoriesToDisplay from "./CategoriesToDisplay";
import {Card,Button, Container, CardGroup,Form} from "react-bootstrap";

import { Row,Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../styles.css"

import Carousel from 'react-bootstrap/Carousel';
import Header from "../Header";
import NavbarOffcanvas from "react-bootstrap/esm/NavbarOffcanvas";
import FilterProduct from "../Filters/FilterProduct";
import TestFilterProducts from "../Filters/TestFilterProducts";

import url from "../../Uri";
import Slideshow from "../offers/Slideshow";

import "../../App.css";

import {BsArrowUp} from "react-icons/bs";


var modelNumsToCompare = new Set();
var flag = false;

const SelCatProducts=()=>{

  
    const navigate = useNavigate();

    const [products,setProduct]= useState([]);
    const [isProductsFetched,setIsProductsFetched] = useState(false);
    const [isTimeout,setIsTimeOut] = useState(false);
    var productsArray=[];

    var productsToCompare=[];

    const [offerPosters,setOfferPosters] = useState([]);
    const [isOfferPostersFetched,setIsOfferPostersFetched] = useState(false);

    console.log(localStorage.getItem("Category"));

    // const [cookies,SetCookie] = useCookies(['modelNumsToCompare'])
    // const [isFormLoaded,SetIsFormLoaded] = useState(false)
    // const [isButtonNeeded,SetIsButtonNeeded] = useState(false);

    // console.log("Cookies",cookies.CompareModels)
    // console.log("Cookies size",cookies.CompareModelsLength)

    console.log("Models To Compare",localStorage.getItem("CompareModels"))
    const [isAddCompareClicked, setisAddCompareClicked] = useState(false);
    const [change, setChange] = useState(0);

    const [isCompareBtnClicked,SetIsCompareBtnClicked] = useState(false);

    const [isAddToCompareProductsFetched,SetIsAddToCompareProductsFetched] =  useState(false);
    const [addToCompareProducts,SetAddToCompareProducts] = useState([]);

    // const [Posters, setPosters] = useState([]);
    // const [isPostersFetched, setIsPostersFetched] = useState(false);

    const [MegaPoster,setMegaPoster] = useState([]);
    const [isMegaPosterFetched,setIsMegaPosterFetched] = useState(false);

    // const [MiniPoster,setMiniPoster] = useState([]);

    if(localStorage.getItem("CompareModels")===null){
        var str="";
    }else{
        var str= localStorage.getItem("CompareModels")+",";
        var arr = str.split(",");
        arr.map(index=>{
            modelNumsToCompare.add(index);
        })
        
    }
    
    useEffect(()=>{
        if( !isMegaPosterFetched ){
            axios({
                method:"get",
                url:url+"/get-offers"
              }).then(function(response){
                console.log(response);
                console.log("Poster response: ",response.data)
                if(response.status==200){
                  response.data.map(index=>{
                        if(index.isMegaPoster==="YES"&& index.category==localStorage.getItem("Category")) {
                            console.log("in if ")
                            MegaPoster.push(index)
                        }
                  })
                  
                //   setOfferPosters(response.data);
                  
                //   console.log("OfferPosters",offerPosters);
                //   console.log("Mini Posters: ",MiniPoster)
                //   setIsOfferPostersFetched(true);
                  setIsMegaPosterFetched(true);
                }
                
            }).catch(function(error){
            console.log("error",error);
            })
        }
    })

    
   
    

    var offerPoster = <div>
        <img className="logo_mahavir" src={require ('../../assets/images.jpg')} alt="Mandala" />
      </div>

    
    
    const handleOfferPosterOnClick=(modelNumbers)=>{
      // alert("Offer Poster clicked");

      console.log(modelNumbers);
      localStorage.setItem("offerPostersModelNumber",modelNumbers)
      console.log(localStorage.getItem("offerPostersModelNumber"))
      navigate("/offers")
    }

    function compareProducts(){
        if(localStorage.getItem("CompareModels")===null || localStorage.getItem("CompareModels")===""){
            alert("Please select products to compare");
        }
        else{
            navigate("/compareproducts")
        }
    }

    var mybutton = document.getElementById("myBtn");

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        console.log("In top Function")
        // document.body.scrollIntoView();
        // window.location.reload();
    }


    function getCompareBtn(){
       
       
          return(               
                (change>0) ? (
                    <Button id="comparebtn" onClick={compareProducts}>Compare</Button>
                ) : (null)
                
           
               
          )
        
    }



    function callProductDetails(index){
        //alert(index);
        console.log("Index",index);
        localStorage.setItem("productSelected",index.modelNumber);
        localStorage.setItem("productId",index.productId)
        console.log("Product Selected",localStorage.getItem("productSelected"))
        navigate("/productDetails")
      }
  

    var cards=<div>
        <img className="logo_mahavir" src={require ('../../assets/images.jpg')} alt="God" />
    </div>

    const handleAddToCompare=(event)=>{
        
        if (event.target.checked) {

            console.log('✅ Checkbox is checked');
            setChange(change+1)
            //document.getElementById(event.value).checked = "false"
            console.log("Value",event.target.value);
            modelNumsToCompare.add(event.target.value);
            alert(event.target.value)
            console.log("ModelNumbers",modelNumsToCompare)
          } else {
            console.log('⛔ Checkbox is NOT checked');
            //document.getElementById(event.value).checked = "true"
            setChange(change-1)
            modelNumsToCompare.delete(event.target.value);

            console.log("ModelNumbers",modelNumsToCompare)
          }

        str="";
        modelNumsToCompare.forEach(element=>{
            //console.log(element);
            str +=  element + ",";
        })
        str = str.slice(0,str.length-1);
        console.log(str);
        //localStorage.setItem("CompareModels",str);
        // SetCookie('CompareModels',str,{path:'/'});
        //getCompareBtn();
        localStorage.setItem("CompareModels",str);
        console.log('Compare Models',localStorage.getItem("CompareModels"))
        setisAddCompareClicked(current => !current);
    }

    // const setCheckboxes=()=>{
          

    // }

    const callFormCheck=(modelNumber)=>{
        if(localStorage.getItem("CompareModels")===null || localStorage.getItem("CompareModels")===""){
            //SetCookie("CompareModels","",{path:"/"});
            return(
                <Form>    
                    <Form.Check id={modelNumber} type="checkbox" label = "Add To Compare" value={modelNumber} onChange={handleAddToCompare}/>
                </Form>
            );
        }else{
            var modelNums = localStorage.getItem("CompareModels").split(',');
            console.log("Model Nums",modelNums)
        
            if(modelNums.includes(modelNumber)){
                return(
                    <Form>    
                        <Form.Check id={modelNumber} type="checkbox" label = "Add To Compare" value={modelNumber} onChange={handleAddToCompare} defaultChecked="true"/>
                    </Form>
                );
            }
            return(
                <Form>    
                    <Form.Check id={modelNumber} type="checkbox" label = "Add To Compare" value={modelNumber} onChange={handleAddToCompare}/>
                </Form>
            )

        }
        
        
        
    }

    var modelNums;
    return(
        <>
        <Header className="header" style={{position:"sticky"}} productList={products}/>
        <br></br>
        <br></br>
        {
            (isMegaPosterFetched)?(
                
                <Slideshow offerPosters={MegaPoster}/>
                
            ):(
                null
            )
        }
        <Button onclick={()=>topFunction()} id="myBtn" title="Go to top"><BsArrowUp/></Button>
        
                <div>
                    
                    
                        {/* <Header/> */}
                        
                        
{/*                         
                        <Carousel>
                        {
                            
                            (isOfferPostersFetched)?(
                                offerPoster= offerPosters.map(index=>{
                                    //let Base64string = Buffer.from(index.image.data,"base64").toString();
                                    
                                    //console.log("image",index.image.data);
                                    // var imgsrc = String.format("data:image/jpg;base64,{0}",index.image.data);
                                    return(
                                        <Carousel.Item interval={1000} onClick={()=>handleOfferPosterOnClick(index.modelNumber)}>
                                        <img id = "classname" 
                                        className="d-block w-100"
                                        src={"data:image/png;base64," + index.image.data}
                                        alt={index.alt}
                                        height={500}
                                        />                    
                                        </Carousel.Item>
                                    
                                    )
                    
                                })
                            ):(
                                
                                null
                                
                            )
                        }
                        </Carousel> */}
                        {/* <FilterProduct/> */}
                        <TestFilterProducts/>
                        {/* {

                            (change!=0) ? (
                                
                                    <Button id="comparebtn" onClick={compareProducts}>Compare</Button>  
                                
                                
                            ) : (null)
                        } */}
                        {/* <Row>
                        <Col md={2}>
                            <FilterProduct/>
                        </Col>
                        <Col>
                        <center>
                        <div >
                        
                        <Row> 
                            <Col sm={2} style={{backgroundColor: 'antiquewhite'}}>
                                Filters
                            </Col>
                            <Col sm={10}>
                        {
                            (isProductsFetched)?
                                cards = products.map(index=>{
                                    return(
                                        
                                        <Card  style={{ width: '12rem',display: 'inline-table'}} 
                                        className="mb-2">
                                            <Card.Img  variant="top" style={{width:200,height:150,alignSelf:"center"}} src={"data:image/png;base64," + index.productImage1.data} onClick={()=>callProductDetails(index)}/>
                                            <Card.Body>
                                            <Card.Title as="h6" onClick={()=>callProductDetails(index)}>{index.productName}</Card.Title>
                                            <Card.Text onClick={()=>callProductDetails(index)}>
                                            {index.productDescription}
                                            <br></br><br></br><strong>Rs {index.productPrice}</strong>
                                            </Card.Text>
                                            {
                                                callFormCheck(index.modelNumber)
                                            }
                                            
                                            
                                            
                                            <br></br>
                                            <Button variant="flat" size="1">Buy</Button>
                                            </Card.Body>
                                    </Card>
                                    
                                    
                                    )
                                }):(null)
                        }
                        {
                            getCompareBtn()      
                        }
                            </Col>
                        </Row>  
                        </div>
                        </center>
                        </Col>
                    </Row> */}
                    </div>
                    </>
    );

}

export default SelCatProducts;