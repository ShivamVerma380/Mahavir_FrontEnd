import React, { useEffect, useState } from "react";
import { Col, Row, Button, Form, Card, Container ,Image} from "react-bootstrap";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { AiOutlineHeart, AiTwotoneHeart, AiFillHeart } from "react-icons/ai";
import {setCookie,getCookie} from '../Cookies';
import { ToastContainer, toast } from 'react-toastify';

function TestFilterProduct(){
    
    var category = localStorage.getItem("Category");
    const navigate = useNavigate();

    //To save selected products
    const[selectedProducts,SetSelectedProducts] = useState([]);
    const[isSelectedProductsFetched,SetIsSelectedProductsFetched] = useState(false);

    //To save all products
    const[products,SetProducts] = useState([]);
    const[isProductsFetched,SetIsProductsFetched] = useState(false);

    

    //For  filter criterias
    const [filters, SetFilters] = useState();
    const [isFiltersFetched, SetIsFiltersFetched] = useState(false);

    const [keySet, setKeyState] = useState(["category"]); //To Store filters name

    var token=getCookie("jwtToken");

    var cart=getCookie("CartModels").split(',');
     //For Add To Compare
     const [isAddCompareClicked, setisAddCompareClicked] = useState(false);
     const [change, setChange] = useState(0);


    useEffect(()=>{
        if(!isFiltersFetched && !isProductsFetched && !isSelectedProductsFetched){
            axios.get("http://localhost:8080/categories")
            .then(res=>{
                // setKeyState("category");
                SetFilters(res.data);
                
                SetIsFiltersFetched(true);
            }).catch(err=>{
                console.log(err);
            }).finally(()=>{
                console.log("Filters Fetched");
            }
            )
        }
    })

    function callProductDetails(index) {
        //alert(index);
        // console.log("Index",index);
        localStorage.setItem("productSelected", index.modelNumber);
        // console.log("Product Selected",localStorage.getItem("productSelected"))
        navigate("/productDetails")
    }

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

    function WishlistHandler(index) {
        // alert("Item added successfully to wishlist");
        // console.log(index.modelNumber)
        // if (localStorage.getItem("wishlistproduct") == null) {
        //     localStorage.setItem("wishlistproduct", index.modelNumber)
        // } else {
        //     var arr = localStorage.getItem("wishlistproduct").split(',')
        //     var flag = true;
        //     arr.map(i => {

        //         console.log("i: ", i)
        //         if (i === index.modelNumber) {
        //             arr.splice(arr.indexOf(i), 1)
        //             localStorage.setItem("wishlistproduct", arr)
        //             console.log('del arr: ' + arr)
        //             console.log('del ls: ' + localStorage.getItem("wishlistproduct"))
        //             console.log("in if")
        //             flag = false;
        //         }
        //     })
        //       if(flag)
        //         localStorage.setItem("wishlistproduct",localStorage.getItem("wishlistproduct")+","+index.modelNumber)
        //         navigate('/filterproducts')

        // }

        console.log("Wishlist clicked")

      
        var formdata = {
          "modelNumber": index.modelNumber
  
        }
  
        axios.post("http://localhost:8080/wishlist", formdata, {
          headers: {
            "Authorization": "Bearer "+token,
            "Content-Type": "multipart/form-data"
          }
        }).then(function (response) {
          if (response.status == 200) {
            // console.log("Added to wishlist successfully");
            toast.success(<b>Added to wishlist successfully</b>)
            
            console.log(response.data)
            // navigate("/");
          }
        }).catch(function (error) {
          if(error.response.status==406) {
            // alert("Item already present in wishlist")
            toast.warn(<b>Item already present in Wishlist</b>)
          }
          else {
            console.log("Error", error);
          }
          
        })

    }


    const handleAddToCompare = event => {
        if (event.target.checked) {
  
          console.log('✅ Checkbox is checked');
          setChange(change+1)
          
          
          
        } else {
          console.log('⛔ Checkbox is NOT checked');
          setChange(change-1)
        }
        setisAddCompareClicked(current => !current);
        // alert("Added To Compare");
    }

    const handleFormCheck=(event)=>{
    
    }

    
    return(
        <Row className="filterproductsContainer">
            <Col md = {1}></Col>
            <Col md={2}>
                <h5>FilterProduct</h5>
                <br></br>
                {
                    (isFiltersFetched)?
                    (
                        <div>
                            <h6>category</h6>
                            {
                                filters.categories.map((item,index)=>{
                                    return(
                                        <Form>
                                            <Form.Check type="checkbox" id={item} value={item}  label={item} />
                                        </Form>
                                    )
                                })
                            }
                        </div>
                        
                    ):(
                        null
                    )
                }
                
                {/* {
                    (isFiltersFetched)?(
                        keySet.map(index=>{
                            return(
                                <div>
                                    <h6>{index}</h6>
                                    {
                                        filters[index].map(f=>{
                                            return(
                                                <Form>
                                                    <Form.Check type="checkbox" id={f} value={f}  label={f} defaultChecked={(f===localStorage.getItem("SubSubCategory") && index===localStorage.getItem("SubCategory"))?(true):(false)} onChange={()=>handleFormCheck(index,f)} />
                                                </Form>
                                            )
                                        
                                            
                                        })
                                    }
                                </div>
                            )
                        })
                    ):(
                        null
                    )
                } */}
            </Col>
            
            <Col md={9}>
                {
                    
                    (isSelectedProductsFetched)?(
                    
                        selectedProducts.map(index => {
                            return (

                                // <Card  style={{ width: '20rem'}} 
                                // className="mb-2">
                                //      <AiOutlineHeart style={{marginTop:"10px",marginLeft:"5px"}} className="wishlisticon" size={30} onClick={()=>WishlistHandler(index)}/>
                                //     <Card.Img  variant="top" style={{width:200,height:175,alignSelf:"center"}} src={"data:image/png;base64," + index.productImage1.data} onClick={()=>callProductDetails(index)}/>
                                //     <Card.Body>
                                //     <Card.Title as="h6" onClick={()=>callProductDetails(index)}>{index.productName}</Card.Title>
                                //     <Card.Text onClick={()=>callProductDetails(index)}>
                                //     <s>₹{index.productPrice}</s>  
                                //     <strong style={{marginLeft:20}}>₹{index.offerPrice}</strong>
                                //     <br></br>
                                //     {
                                //         index.productHighlights.split(';').map(highlight=>{
                                //             return(
                                //                 <span>{highlight}<br></br></span>
                                //             );  
                                //         })
                                //     }
                                //     </Card.Text>

                                //     <br></br>
                                //     <Button variant="flat" size="1">Buy</Button>
                                //     </Card.Body>

                                // </Card>

                                <Row className="filterproductsRow">
                                    <Col md={2}>
                                        <Image className="filterproductImage" fluid='true' onClick={() => callProductDetails(index)}  src={index.productImage1} />
                                        <br></br>
                                        <p>{index.modelNumber}</p>
                                    </Col>
                                    <Col md={10} >
                                        <Row className="innerrow">
                                            <Col md={11}>
                                                <h4 onClick={() => callProductDetails(index)} style={{ cursor: 'pointer' }}>{index.productName}</h4>
                                            </Col>
                                            <Col md={1} >
                                                {/* {(localStorage.getItem("wishlistproduct")!=null) && (localStorage.getItem("wishlistproduct").includes(index.modelNumber)) ?
                                                    <AiFillHeart className="innerrow_wishlist" style={{  fill: 'rgb(255, 88, 88)' }}  size={30} onClick={() => WishlistHandler(index)} /> :
                                                    <AiOutlineHeart className="innerrow_wishlist" style={{  }}  size={30} onClick={() => WishlistHandler(index)} />
                                                } */}
                                            </Col>

                                        </Row>
                                        <Row className="innerrow">
                                            <Col md={11}>
                                                {
                                                    index.productHighlights.split(';').map(highlight => {
                                                        return (
                                                            <h6 style={{color:'GrayText'}}>•{highlight}<br></br></h6>
                                                        );
                                                    })
                                                }
                                                {/* <h6 style={{color:'GrayText'}}>{index.productHighlights.split}</h6> */}
                                            </Col>

                                        </Row>
                                        <Row className="innerrow">
                                            <Col md={10}>
                                                <h5>MSP: <b style={{ marginRight: "20px", color: "rgb(255,98,98)" }}>₹{index.offerPrice}</b> MRP: <b style={{ textDecorationLine: "line-through", textDecorationStyle: "solid" }}>₹{index.productPrice}</b></h5>

                                            </Col>

                                        </Row>

                                        <Row className="innerrow">
                                            <Form style={{
                                                fontWeight: '500',
                                                fontSize: '120%'
                                            }}>
                                                <Form.Check type="checkbox" label="Add To Compare" onChange={handleAddToCompare} />
                                            </Form>

                                        </Row>

                                        <Row className="innerrow">
                                            <Col><Button className="filterproductBtn"  variant="outline-primary" size="1" onClick={()=>addtocart(index.modelNumber)}>Add To Cart</Button></Col>
                                            <Col><Button className="filterproductBtn" variant="outline-primary"  >Buy Now</Button></Col>
                                           

                                        </Row>
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
        
    )
}

export default TestFilterProduct;