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
import url from "../../Uri";
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

    
    useEffect(()=>{
        if(!isProductFetched){
            var modelNumbers = getCookie("addToCompare").split(",")
            // console.log("modelNumbers",modelNumbers)
            var urls = []
            modelNumbers.map(index=>{
                if(index!=="")
                    urls.push(axios.get(url+"/get-products/"+index))
            })
            axios.all(urls).then(axios.spread((...response) => {
                // console.log("response",response)
                response.map(p=>{
                    product.push(p.data)
                })
                // console.log("Product",product)
                SetIsProductFetched(true)
            })).catch(function(error){
                console.log("error in /get-products/");
            })
        }
    })

    function buyNow(index){
        if(getCookie("isLoggedIn")!=='true'){
            navigate("/login")
        }else{
            localStorage.setItem("buyProduct",JSON.stringify(index));
            navigate('/checkout')
        }
        
        
      }

      function blankspace(){
        var dif=4-product.length;
        var d=[];
        for (var index = 0; index < dif; index++) {
            // alert(index);
            d.push(0);    
        }
        // console.log("d"+d)
        return d;
        }
    return(
        <>
        <body style={{background:"whitesmoke"}}>
        <Row>
        <Header/>
        </Row>
        <Container style={{background:"white",paddingLeft:"0px",paddingRight:"0px"}}>
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
                    <Col style={{marginLeft:"1px"}} md={2} className="colll"></Col>
                    {
                        product.map(index=>{
                            return(
                                <Col md={2} className="colll">
                                    <button className="buynow" onClick={()=>buyNow(index)}>Buy Now</button>

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
        </Container>
        </body>
        </>
    )
}

export default AddToCompareProducts;