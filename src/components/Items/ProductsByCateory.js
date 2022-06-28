import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col,Row,Button ,Form,Card, Container} from "react-bootstrap";
import { AiOutlineHeart, AiTwotoneHeart,AiFillHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Header from "../Header";

function ProductsByCategory(){

    const [products,SetProducts] = useState([]);
    const [isProductsFetched,setIsProductsFetched] = useState(false);

    const navigate = useNavigate();

    function WishlistHandler(index) {
        // alert("Item added successfully to wishlist");
        console.log(index.modelNumber)
        if (localStorage.getItem("wishlistproduct")==null) {
          localStorage.setItem("wishlistproduct",index.modelNumber)
        }else {
          var arr = localStorage.getItem("wishlistproduct").split(',')
          var flag = true;
          arr.map(i=>{
           
            console.log("i: ",i)
            if( i=== index.modelNumber) {
                arr.splice(arr.indexOf(i),1)
                localStorage.setItem("wishlistproduct",arr)
                console.log('del arr: ' + arr)
                console.log('del ls: ' + localStorage.getItem("wishlistproduct"))
               console.log("in if")
              flag = false;
            } 
          }) 
        //   if(flag)
        //     localStorage.setItem("wishlistproduct",localStorage.getItem("wishlistproduct")+","+index.modelNumber)
        //     navigate('/')
          
        }
        
      }

    useEffect(()=>{
        if(!isProductsFetched){
            axios.get("http://localhost:8080/products/"+localStorage.getItem("Category"))
            .then(function(response){
                if(response.status==200){
                    console.log(response.data);
                    SetProducts(response.data);
                    setIsProductsFetched(true);
                }
            }).catch(function(error){
                console.log(error);
            })
        }
    })

    function callProductDetails(index){
        //alert(index);
        // console.log("Index",index);
        localStorage.setItem("productSelected",index.modelNumber);
        // console.log("Product Selected",localStorage.getItem("productSelected"))
        navigate("/productDetails")
    }

    return(
        <div>
            <Header/>
            <Row>
            {

                (isProductsFetched)?(
                    products.map(index=>{            
                        return(
                            
                            <Card  style={{ width: '20rem'}} 
                            className="mb-2">
                                 <AiOutlineHeart style={{marginTop:"10px",marginLeft:"5px"}} className="wishlisticon" size={30} onClick={()=>WishlistHandler(index)}/>
                                <Card.Img  variant="top" style={{width:200,height:175,alignSelf:"center"}} src={"data:image/png;base64," + index.productImage1.data} onClick={()=>callProductDetails(index)}/>
                                <Card.Body>
                                <Card.Title as="h6" onClick={()=>callProductDetails(index)}>{index.productName}</Card.Title>
                                <Card.Text onClick={()=>callProductDetails(index)}>
                                <s>₹{index.productPrice}</s>  
                                <strong style={{marginLeft:20}}>₹{index.offerPrice}</strong>
                                <br></br>
                                {
                                    index.productHighlights.split(';').map(highlight=>{
                                        return(
                                            <span>{highlight}<br></br></span>
                                        );  
                                    })
                                }
                                </Card.Text>
                                
                                <br></br>
                                <Button variant="flat" size="1">Buy</Button>
                                </Card.Body>
                                
                            </Card>
                    
                    
                    
                         )
                    
                    
                    })

                
                
                
                     
                ):(
                    null
                )
            }
            </Row>
        </div>
    );
}

export default ProductsByCategory;