import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../Header";
import { Button, Container, Row ,Col,NavItem ,NavDropdown,Form} from "react-bootstrap";
import ComparisonHeader from "./ComparisonHeader";
import ComparisonHighlights from "./ComparisonHighlights";
import ComparisonVariants from "./ComparisonVariants";
import ComparisonProductInformation from "./ComparisonProductInformation";
import { useNavigate } from "react-router-dom";
import RatingandReview from "./RatingandReview";
import {setCookie,getCookie} from '../Cookies';
function AddToCompareProducts(){

    const navigate = useNavigate();


    const [product,SetProduct] = useState([]);
    const [isProductFetched,SetIsProductFetched] = useState(false);
    var keys=[];

    function getProductInformationKeys(productInformation){
        
        for(var k in productInformation){
            keys.push(k);
        }
    }

    var uri = "http://mahavirbackend-env.eba-bkwmcbpz.us-east-1.elasticbeanstalk.com";
    //var uri = "http://localhost:8080"
    useEffect(()=>{
        if(!isProductFetched){
            var modelNumbers = getCookie("addToCompare").split(",")
            console.log("modelNumbers",modelNumbers)
            var urls = []
            modelNumbers.map(index=>{
                if(index!=="")
                    urls.push(axios.get(uri+"/get-products/"+index))
            })
            axios.all(urls).then(axios.spread((...response) => {
                console.log("response",response)
                response.map(p=>{
                    product.push(p.data)
                })
                console.log("Product",product)
                SetIsProductFetched(true)
            })).catch(function(error){
                console.log("error",error);
            })
        }
    })

    function buyNow(index){
        localStorage.setItem("buyProduct",JSON.stringify(index));
        navigate('/checkout')
        
      }

      function blankspace(){
        var dif=4-product.length;
        var d=[];
        for (var index = 0; index < dif; index++) {
            // alert(index);
            d.push(0);    
        }
        console.log("d"+d)
        return d;
        }
    return(
        <>
        <Row>
        <Header/>
        </Row>
       
        <Row>
            {
                (isProductFetched)?(
                    <div>
                    <ComparisonHeader product={product}/>
                   
                    {/* <hr></hr> */}
                    {
                        (product.length>0)?(
                            <RatingandReview review={product}/>
                        ):(
                            null
                        )
                    }
                    
                    {
                        (product.length>0)?(
                            <ComparisonHighlights product={product}/>
                        ):(
                            null
                        )
                    }
                    
                    
                    <Row className="ComparisonHeader">
                    
                    <Col md={2} className="colll"></Col>
                    {
                        product.map(index=>{
                            return(
                                <Col md={2} className="colll">
                                    <button style={{width:"180px"}} onClick={()=>buyNow(index)} class="explore">Buy Now<span class="icon-right after"></span></button>

                                    {/* <Button  className="explore" onClick={()=>buyNow(index)}>Buy Now</Button> */}
                                    
                                </Col>
                                
                            )
                        })
                    }

                    {
                    blankspace().map(m=>{
                        return(
                            <Col md={2}></Col>
                        )
                    })
                   }
                    </Row>
                    
                    {
                        (product.length>0)?(
                            getProductInformationKeys(product[0].productInformation)
                        ):(
                            null
                        )
                    }
                    {
                        keys.map(k=>{
                            return(
                                <ComparisonProductInformation title={k} product={product}/>
                            );
                        })
                    }
                    {/* <ComparisonProductInformation product={product}/> */}
                    </div>
                ):(
                    null
                )
                
            }
            
        </Row>
        </>
    )
}

export default AddToCompareProducts;