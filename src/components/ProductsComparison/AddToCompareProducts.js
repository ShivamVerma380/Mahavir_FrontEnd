import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../Header";
import { Container, Row } from "react-bootstrap";
import ComparisonHeader from "./ComparisonHeader";
import ComparisonHighlights from "./ComparisonHighlights";

function AddToCompareProducts(){

    const [product,SetProduct] = useState([]);
    const [isProductFetched,SetIsProductFetched] = useState(false);

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
                    
                    </div>
                ):(null)
            
            }
        </div>
    );
}

export default AddToCompareProducts;