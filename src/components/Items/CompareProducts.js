import { Checkbox } from "material-ui";
import React, { useEffect, useState } from "react";
import { Row, Col, NavDropdown, Form, Button, Container } from "react-bootstrap";
import Header from "../Header";
import "./CompareProducts.css"
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { propTypes } from "react-bootstrap/esm/Image";
import { SliderValueLabelUnstyled } from "@mui/base";
import RowComponent from "./RowComponent";
import CompareHeader from "./CompareHeader";
import url from "../../Uri";




const CompareProducts = () => {
    const navigate = useNavigate();
    const [products,setProducts] = useState([]);
    const [isProductsFetched,SetIsProductFetched] = useState(false);
   
    
    useEffect(()=>{
        if(!isProductsFetched){
            var productsArray = [];
            var modelNumbers = localStorage.getItem("comparecount").split(',');
            console.log("Model Numbers",modelNumbers);
            

            var urls = [];
            modelNumbers.map(index=>{
                if(index!=""){
                    urls.push(axios.get(url+"/get-products/"+index));
                }
            })
            
            axios.all(urls).then(
                axios.spread((res1,res2,res3,res4)=>{
                    console.log("res1",res1);
                    console.log("res2",res2);
                    console.log("res3",res3);
                    console.log("res4",res4);
                    if(res1!=undefined){
                        products.push(res1.data);
                    }
                    if(res2!=undefined){
                        products.push(res2.data);
                    }
                    if(res3!=undefined){
                        products.push(res3.data);
                    }
                    if(res4!=undefined){
                        products.push(res4.data);
                    }
                    console.log("Products",products);                    
                    SetIsProductFetched(true);
                })
            )
            
            
        }
    })


    const buyHandler = () => {
        navigate("/AddressForm")
    }
    

    const [productTitles,SetProductTitles]=useState([]);
    const [productSubTitles,SetProductSubTitles] = useState(new Map());

    const [isProductTitlesFetched,SetIsProductTitlesFetched] = useState(false)
    

    const [subItems,SetSubItems] = useState(new Map());

    const [indexes,SetIndexes] = useState([]);
    
    var productInformation;
    const getProductInformation=()=>{
        if(!isProductTitlesFetched){
            productInformation = products[0].productInformation;
            console.log("productInfo",productInformation);
            var i=0;
            for(var key in products[0].productInformation){
                console.log("key",key)
                productTitles.push(key);
                
                for(var k in products[0].productInformation[key]){
                    SetSubItems(new Map(subItems.set(k,products[0].productInformation[key][k])))
                    i++;
                }
                indexes.push(i);
            }
            console.log("ProductSubTitles",subItems);
            // console.log("NewArr",newArr);
            
            SetIsProductTitlesFetched(true);

            console.log("ProductTitles",productTitles);
        }
    }

    var productInformationone;
    const getProductInformationOne=()=>{
        if(!isProductTitlesFetched){
            productInformationone = products[1].productInformation;
            console.log("productInfo",productInformationone);
            var i=0;
            for(var key in products[1].productInformation){
                console.log("key",key)
                productTitles.push(key);
                
                for(var k in products[1].productInformation[key]){
                    SetSubItems(new Map(subItems.set(k,products[1].productInformation[key][k])))
                    i++;
                }
                indexes.push(i);
            }
            console.log("ProductSubTitles",subItems);
            // console.log("NewArr",newArr);
            
            SetIsProductTitlesFetched(true);

            console.log("ProductTitles",productTitles);
        }
    }

    var productInformationtwo;
    const getProductInformationTwo=()=>{
        if(!isProductTitlesFetched){
            productInformationtwo = products[2].productInformation;
            console.log("productInfo",productInformationtwo);
            var i=0;
            for(var key in products[2].productInformation){
                console.log("key",key)
                productTitles.push(key);
                
                for(var k in products[2].productInformation[key]){
                    SetSubItems(new Map(subItems.set(k,products[2].productInformation[key][k])))
                    i++;
                }
                indexes.push(i);
            }
            console.log("ProductSubTitles",subItems);
            // console.log("NewArr",newArr);
            
            SetIsProductTitlesFetched(true);

            console.log("ProductTitles",productTitles);
        }
    }

    var productInformationthree;
    const getProductInformationThree=()=>{
        if(!isProductTitlesFetched){
            productInformation = products[3].productInformation;
            console.log("productInfo",productInformationthree);
            var i=0;
            for(var key in products[3].productInformation){
                console.log("key",key)
                productTitles.push(key);
                
                for(var k in products[3].productInformation[key]){
                    SetSubItems(new Map(subItems.set(k,products[3].productInformation[key][k])))
                    i++;
                }
                indexes.push(i);
            }
            console.log("ProductSubTitles",subItems);
            // console.log("NewArr",newArr);
            
            SetIsProductTitlesFetched(true);

            console.log("ProductTitles",productTitles);
        }
    }

    const [keys,SetKey] = useState([]);
    const [value,SetValue] = useState([]);
    const [isKeysFetched,SetIsKeysFetched] = useState(false);
    
    const getSubItems=()=>{
        if(!isKeysFetched){

            // for(var k  of Object.keys(subItems)){
            //     console.log("key",k);
            //     keys.push(k);
            //     value.push(subItems[k]);
            // }
            
            [...subItems.keys()].map(index=>{
                keys.push(index);
                value.push(subItems.get(index))
                
            })
            console.log("Keys",keys);
            console.log("Value",value);
            SetIsKeysFetched(true);
        }
    }

    return (    
        
        (isProductsFetched)?(
        
        
        <div>
            
            

            <Row style={{ marginTop: "30px" }}>
                <Col md={1}>
                </Col>
                <Col md={2}>
                    {/* <h4>Redmi Note 11T 5G (8 GB RAM, 128 GB ROM, Stardust White) vs others</h4> */}
                    <h4>{products[0].productName} vs others</h4>
                </Col>
                <CompareHeader isModelNumPresent="true" name={products[0].productName} image={products[0].productImage1.data} price = {products[0].productPrice} />
                <CompareHeader isModelNumPresent="true" name={products[1].productName} image={products[1].productImage1.data} price = {products[1].productPrice}/>
                <CompareHeader isModelNumPresent="false" name="" image="" price = ""/>
                <CompareHeader isModelNumPresent="false" name="" image="" price = ""/> 
            
            </Row>
            

            <Row>
                <Col md={1}></Col>
                <Col md={10}>
                    <hr></hr>
                </Col>
            </Row>
            <Row>
                <Col md={1}>
                </Col>
                <Col md={2}>
                    <h6>Exchange Offer</h6>
                </Col>
                <Col md={2}>
                    <p>-------</p>

                </Col>
                <Col md={2}>
                    <p>₹3499 after Exchange</p>
                </Col>
                <Col md={2}>
                    <img style={{ background: "green" }}></img>
                </Col>
                <Col md={2}>
                    <img></img>
                </Col>
                <Col md={1}>
                </Col>
            </Row>
            <Row>
                <Col md={1}>
                </Col>
                <Col md={2}>
                    <h6>Ratings and Reviews</h6>
                </Col>
                <Col md={2}>
                    <p className="ratingstar">3.5<AiFillStar /></p>
                    <p>2,039 Ratings & 169 Reviews</p>
                    <a href="onlyreviews">All 169 Reviews</a>
                </Col>
                <Col md={2}>
                    <p className="ratingstar">4.5<AiFillStar /></p>
                    <p>1,675 Ratings & 140 Reviews</p>
                    <a href="onlyreviews">All 140 Reviews</a>
                </Col>
                <Col md={2}>
                    <img style={{ background: "green" }}></img>
                </Col>
                <Col md={2}>
                    <img></img>
                </Col>
                <Col md={1}>
                </Col>
            </Row>
            <Row style={{ marginTop: "15px" }}>
                <Col md={1}>
                </Col>
                <Col md={2}>
                    <h6>Highlights</h6>
                </Col>
                <Col md={2}>
                    {/* <p>6 GB RAM | 128 GB ROM</p>
                    <p>16.76 cm (6.6 inch) Display</p>
                    <p>50MP + 2MP + 2MP | 16MP Front Camera</p>
                    <p>5000 mAh Lithium ion Battery</p>
                    <p>Qualcomm Snapdragon 680 (SM6225)</p>
                    <p>Processor</p>
                    <p>Warranty: 1 Year Manufacturer Warranty for Phone and 6 Months Warranty for in the Box Accessories</p>
                    <p>Returns: 7 Days Replacement Policy</p> */}
                    <p>{products[0].productDescription}</p>   
                    {/* Highlights should be seperated by . and split here */}
                </Col>
                <Col md={2}>
                    {/* <p>6 GB RAM | 128 GB ROM | Expandable Upto 1 TB</p>
                    <p>16.76 cm (6.6 inch) Full HD+ Display</p>
                    <p>50MP Rear Camera</p>
                    <p>5000 mAh Battery</p>
                    <p>Octa Core Processor</p>
                    <p>Warranty: 12 months</p>
                    <p>Returns: 7 Days Replacement Policy</p> */}
                    <p>{products[1].productDescription}</p>
                    {/* Highlights should be seperated by . and split here */}
                </Col>
                <Col md={2}>

                </Col>
                <Col md={2}>

                </Col>
                <Col md={1}>
                </Col>
            </Row>
            <Row>
                <Col md={1}>
                </Col>
                <Col md={2}>

                </Col>
                <Col md={2}>
                    <Button onClick={buyHandler}>BUY NOW</Button>

                </Col>
                <Col md={2}>
                    <Button onClick={buyHandler}>BUY NOW</Button>

                </Col>
                <Col md={2}>

                </Col>
                <Col md={2}>

                </Col>
                <Col md={1}>
                </Col>
            </Row>
            <Row style={{ marginTop: "15px" }}>
                <Col md={1}>
                </Col>
                <Col md={2}>
                    <h6>Delivery</h6>
                </Col>
                <Col md={2}>
                    <p>8 Jun, Wednesday for Free</p>

                </Col>
                <Col md={2}>
                    <p>8 Jun, Wednesday for Free</p>

                </Col>
                <Col md={2}>

                </Col>
                <Col md={2}>

                </Col>
                <Col md={1}>
                </Col>
            </Row>

            <Row>
                <Col md={1}>
                </Col>
                <Col md={2}>
                    <h6>Variants</h6>
                </Col>
                <Col md={2}>
                    <h6>Color(3)</h6>
                    <p>Aquamarine Blue, Matte black, Stardust White</p>
                    <h6>RAM(2)</h6>
                    <p>6 GB, 8 GB</p>

                </Col>
                <Col md={2}>
                    <h6>Color(2)</h6>
                    <p>Prism Black, Prism Blue</p>
                    <h6>Storage(2)</h6>
                    <p>64 GB, 128 GB</p>
                    <h6>RAM(2)</h6>
                    <p>4 GB, 6 GB</p>

                </Col>
                <Col md={2}>

                </Col>
                <Col md={2}>

                </Col>
                <Col md={1}>
                </Col>
            </Row>
            <Row>
                <Col md={1}></Col>
                <Col md={10}>
                    <hr></hr>
                </Col>
            </Row>

            <Row>
                <Col md={1}>
                </Col>
            </Row>
            <Row>
                <Col md={1}>
                </Col>
                {
                    getProductInformation()
                    
                }
                
                
                    
                    <Col md={2}>
                        {/* {
                            productTitles.map(index=>{
                                return(
                                    <h5>{index}</h5>  
                                );                              
                            })

                        } */}
                    </Col>
                    <Col md={2}>

                        {
                            getSubItems()
                        }
                        
                        {/* {
                            
                            keys.map((v,index)=>{
                                return(
                                    <h6>{v}:{value[index]}</h6>
                                )
                                
                                // if(indexes<2){
                                //     return(
                                //         <h6>{v}:{value[index]}</h6>
                                //     )
                                // }
                                // else if(indexes<4){
                                //     return(
                                //         <div>
                                //             <br></br>
                                //             <h6 style={{color:"blue"}}>{v}:{value[index]}</h6>
                                            
                                //         </div>
                                //     )
                                // }
                                // else{
                                //     return(
                                //         <div>
                                //             <br></br>
                                //             <h6 style={{color:"red"}}>{v}:{value[index]}</h6>
                                //         </div>
                                //     )
                                // }
                            })
                        }
                         */}
                        
                        
                    </Col>
                
            </Row>
            {
            (isKeysFetched)?(
                <div>
                <RowComponent title={productTitles[0]} keys={keys} value={value} />
                <Container>
                    <hr></hr>
                </Container>
                <RowComponent title={productTitles[1]} keys={keys} value={value} />
                </div>
            ):(null)
            }

        </div>
        ):(
            <h1>Products Not Fetched yet</h1>
        )
    )
}
export default CompareProducts;