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

    useEffect(()=>{
        if(!isProductFetched){
            var modelNumbers = getCookie("addToCompare").split(",")
            console.log("modelNumbers",modelNumbers)
            var urls = []
            modelNumbers.map(index=>{
                if(index!=="")
                    urls.push(axios.get("http://localhost:8080/get-products/"+index))
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


    return(
        <Row>
            {
                (isProductFetched)?(
                    <div>
                    <ComparisonHeader product={product}/>
                    <hr></hr>
                    <RatingandReview review={product}/>
                    <hr></hr>
                    
                    <ComparisonHighlights product={product}/>
                    <br></br>
                    <Row>
                    <Col md={1}></Col>
                    <Col md={2}></Col>
                    {
                        product.map(index=>{
                            return(
                                <Col md={2}>
                                    <Button  className="flat">Buy Now</Button>
                                    <br></br>
                                    <br></br>
                                </Col>
                                
                            )
                        })
                    }
                    </Row>
                    {
                        getProductInformationKeys(product[0].productInformation)
                    }
                    {
                        keys.map(   k=>{
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
    )
}

export default AddToCompareProducts;