import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../Header";
import { Button, Container, Row ,Col} from "react-bootstrap";
import ComparisonHeader from "./ComparisonHeader";
import ComparisonHighlights from "./ComparisonHighlights";
import ComparisonVariants from "./ComparisonVariants";
import ComparisonProductInformation from "./ComparisonProductInformation";

function AddToCompareProducts(){

    const [product,SetProduct] = useState([]);
    const [isProductFetched,SetIsProductFetched] = useState(false);


    var keys=[];
    var value=[];


    function getProductInformationKeys(productInformation){
        
        for(var k in productInformation){
            keys.push(k);
        }
    }

    useEffect(()=>{
        if(!isProductFetched){
            var modelNumbers = localStorage.getItem("CompareModels").split(',');
            console.log("Model Numbers",modelNumbers);
            var urls = [];
            modelNumbers.map(index=>{
                if(index!=''){
                    urls.push(axios.get("http://localhost:8080/get-products/"+index));
                }
            })
            axios.all(urls).then(
                axios.spread((...res)=>{
                    res.map((response)=>{
                        console.log("response",response);
                        product.push(response.data);
                    })
                    SetIsProductFetched(true);
                })
            )
        }
        

    })

    return(
        <div>
        <Header/>
            {
                (isProductFetched)?(
                    <div>
                    
                    <ComparisonHeader product={product}/>
                    <Container>
                    <hr></hr>
                    </Container>
                    <ComparisonHighlights product={product}/>
                    <br></br>
                    <Row>
                    <Col md={1}></Col>
                    <Col md={2}></Col>
                    {
                        
                        product.map(index=>{
                            return(
                                <Col md={2}>
                                    <Button id={index.modelNumber} className="btn-flat">Buy Now</Button>
                                </Col>
                            );
                        })
                    }
                    </Row>
                    <ComparisonVariants product={product}/>
                    <Container>
                        <hr></hr>
                        <h3>Product Information</h3>
                        <hr></hr>
                    </Container>
                    
                    
                    {
                        getProductInformationKeys(product[0].productInformation)
                    }
                    {
                        keys.map(k=>{
                            return(
                                <ComparisonProductInformation title={k} product={product}/>
                            );
                        })
                    }
                    
                    </div>
                ):(null)
            
            }
        </div>
    );
}

export default AddToCompareProducts;