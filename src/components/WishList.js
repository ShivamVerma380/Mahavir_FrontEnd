import React, { useEffect, useState } from "react";
import axios from "axios";
import {Row, Col} from "react-bootstrap";

const WishList = () => {
    var arr = localStorage.getItem("wishlistproduct").split(',')
    console.log("array: ",arr)
    const [product,setProduct] = useState([]);
    const [isProductFetched,setIsProductFetched] = useState(false);
    
    useEffect(()=>{
        if(!isProductFetched) {
            {arr.map(index=>{
                console.log("Index: ",index)
                axios({
                    method:"get",
                    url:"http://localhost:8080/get-products/"+index
                  }).then(function(response){
                    console.log(response);
                    if(response.status==200) {
                      console.log("Response",response.data);
                      setProduct(response.data);
                      
                      console.log("Products: ",product)
                      setIsProductFetched(true);
                      
                      
                    }
                  }).catch(function(error){
                    console.log("error",error);
                  }) 
            })}
        }
        
    })

    return (
        <div>
        <h1>WishList</h1>
        {
        (isProductFetched)?(
          
            
            <Row>
              {arr.map(index => <h2>{index}</h2>)}
            <Col md={1}></Col>
            <Col md={2}>
              <img src={'data:image/jpg;base64,' + product.productImage1.data} style={{width:200,height:200}}></img>
            </Col>
            <Col md={3}>
            <h4>{product.productName}</h4>
            <br></br>
            <Row>
              <h4>₹{product.productPrice}</h4>
            </Row>
            </Col>
          </Row>
           
          
          
          
        ):(null)
        
        }
        
        </div>
    )
}
export default WishList;