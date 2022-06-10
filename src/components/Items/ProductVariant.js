import { Row,Col,Button } from "react-bootstrap";
import React from "react";
import axios from "axios";


function ProductVariant({variantName,product}){

    function handleBtnClick(variantName){
        // console.log("Variant Btn Clicked",variantName.index);
        axios({
            method:"get",
            url:"http://localhost:8080/get-products/"+localStorage.getItem("productSelected")+"/"+variantName.index
        }).then(function(response){
            if(response.status==200){
                console.log("response data",response.data);
            }
        }).catch(function(error){
            console.log("error",error);
        })
        
    }

    return(
        <Row style={{margin:15}}>
        <Col md={2}>
            <h5>{variantName}</h5>
        </Col>
        
        {
            product.variants[variantName].map(index=>{
                return(
                    <Col md={3}>
                    <Button id={index}  variant="flat" style={{marginLeft:10}} onClick={()=>handleBtnClick({index})}>{index}</Button>
                    </Col>
                );
            })
        }
        </Row>
    );
}

export default ProductVariant;