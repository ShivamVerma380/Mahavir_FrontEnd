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
function AddToCompareProducts(){

    const navigate = useNavigate();

    const [product,SetProduct] = useState([]);
    const [isProductFetched,SetIsProductFetched] = useState(false);

    const [filteredProduct,SetFilteredProduct] = useState([]);

    const[length,SetLength] = useState(); 
    const[reviewLength,SetReviewLength] = useState();

    const [Brands,SetBrands] = useState([]);
    const [isBrandsFetched,SetIsBrandsFetched] = useState(false);

    const [brand,SetBrand] = useState("Choose Brand...")


    const [Models,SetModels] = useState();
    const [isBrandSelected,SetIsBrandSelected] = useState(false);
    
    const [model,SetModel] = useState("Choose Model....")
    const [review,setReview] = useState([]);
    const [isReviewFetched,setIsReviewFetched] = useState(false);


    var keys=[];
    var value=[];


    const[showOnlyDiff,SetShowOnlyDiff] = useState(false);

    function getProductInformationKeys(productInformation){
        
        for(var k in productInformation){
            keys.push(k);
        }
    }

    useEffect(()=>{
        if(!isProductFetched && !isBrandsFetched && !isReviewFetched){
            var modelNumbers = localStorage.getItem("CompareModels").split(',');
            console.log("Model Numbers",modelNumbers);
            var urls = [];
            modelNumbers.map(index=>{
                if(index!=''){
                    urls.push(axios.get("http://localhost:8080/get-products/"+index));
                }
            })
            console.log("URL: ",urls)
            axios.all(urls).then(
                axios.spread((...res)=>{
                    res.map((response)=>{
                        console.log("response",response);
                        product.push(response.data);
                        filteredProduct.push(response.data);
                    })
                    SetLength(product.length);
                    SetIsProductFetched(true);
                    
                })
            )
            axios.get("http://localhost:8080/get-add-to-compare-subcat/"+localStorage.getItem("Category")+"/Brand")
                .then(function(response){
                    if(response.status==200){
                        console.log("Add To Compare SubCat",response.data);
                        SetBrands(response.data);
                        SetIsBrandsFetched(true);
                    }
                    
                }).catch(function(error){
                    console.log("error");
                })
            
                var reviewurls=[];
                modelNumbers.map(index=>{
                    if(index!=''){
                        reviewurls.push(axios.get("http://localhost:8080/get-reviews/"+index));
                    }
                })
                axios.all(reviewurls).then(
                    axios.spread((...res)=>{
                        res.map((reviewresponse)=>{
                            console.log("reviewresponse",reviewresponse);
                            review.push(reviewresponse.data);
                            console.log("review array: ",review);
                        })
                        SetReviewLength(review.length);
                        setIsReviewFetched(true);
                        
                    })
                )

                
        }
       
            
        
        

    })

    
    var arr=[];
    if(length===1){
        arr.push("God");
        arr.push("God");
        arr.push("God");
    }else if(length===2){
        arr.push("God");
        arr.push("God");
    }else if(length===3){
        arr.push("God");
    }

    const [modelNumberFiltered,SetModelNumberFiltered] = useState([]);
    

    const handleFormCheck=event=>{
        // console.log(event.target.value)
        console.log("Show Only Diff",showOnlyDiff);
        if(showOnlyDiff==false){
            alert("On")
            var arr = product;
            var modelNumber=[];
            modelNumber.push(arr[0].modelNumber);
            var modelNumberFlag = false;
            arr.map((index,pos)=>{
                if(pos!=0){
                    modelNumber.push(index.modelNumber);
                }
                if(index.modelNumber!==arr[0].modelNumber){
                    modelNumberFlag= true;
                }
            })
            if(modelNumberFlag){
                SetModelNumberFiltered(modelNumber);
            }

        }else{
            alert("Off")
        }
        SetShowOnlyDiff(!showOnlyDiff);
    }

    function handleBrandClick(brandName){
        Brands.map(brand=>{
            if(brand.subSubCategoryName===brandName){
                SetBrand(brandName)
                SetModel("Choose Model..")
                SetModels(brand.modelResponses);
                SetIsBrandSelected(true);
            }
        })
        console.log("BrandSelected",brandName);
    }



    function handleModelClick(modelName,modelNumber){

        console.log("model number",modelNumber);
        axios.get("http://localhost:8080/get-products/"+modelNumber)
            .then(function(response){
                if(response.status==200){
                    // product.push(response.data);
                    
                    SetProduct([...product,response.data])
                    SetModel(modelName);
                    SetLength(length+1);
                }
            }).catch(function(error){
                console.log(error);
            })
        
        SetModel(modelName);
    }

    const BuyNowHandler=()=> {
        navigate("/AddressForm")
    }

    const removeProduct=(event)=>{
        var arr=[];
        console.log("Model number",event.target.name);
        // product.map(p=>{
        //     if(p.modelNumber===event.target.name){
        //         console.log("Inside model num if");
        //     }
        // })

        if(product.length==1){
            
            navigate("/");
        }
        SetProduct(product.filter(item=>item.modelNumber!==event.target.name))
        SetLength(length-1);
    }

    function ImgOnClickHandler(index){
        localStorage.setItem("productSelected",index.modelNumber);
        console.log("Product Selected",localStorage.getItem("productSelected"))
        navigate("/productDetails")
    }

    return(
        <div>
        {/* <Header/> */}
            {
                (isProductFetched)?(
                    <div>
                    
                    <Row style={{marginTop:15}}>
                    <Col md={1}>  
                    </Col>
                    <Col md={2}>
                        <h5>{product[0].productName} vs others</h5>
                        <br></br>
                        <Form>
                            <Form.Check type="switch" id="Show Only Differences"   label = "Show Only Differences"  value={showOnlyDiff} onClick={handleFormCheck}/>
                        </Form>
                    </Col>
                    {
                        
                            product.map(index=>{
                                return(
                                    <Col md={2}>
                                        
                                    
                                        <img style={{ width: "10rem", alignContent: "center" }}  src={'data:image/jpg;base64,' + index.productImage1.data} onClick={()=>ImgOnClickHandler(index)}></img>
                                        <Button name={index.modelNumber} style={{marginBottom:"120px",marginLeft:"10px"}} onClick={removeProduct}>X</Button>
                                        <br></br>
                                        <h6 style={{ marginTop: "20px" }} onClick={()=>ImgOnClickHandler(index)}>{index.productName}</h6>
                                        <h6 style={{}}>₹{index.productPrice}</h6>
                                    </Col>
                                )
                            })
                       
                    }

                    {/* {
                        product.map(index=>{
                            return(
                                <Col md={2}>
                                    <Button name={index.modelNumber} onClick={removeProduct}>X</Button>
                                    
                                    <img style={{ width: "10rem", alignContent: "center" }}  src={'data:image/jpg;base64,' + index.productImage1.data}></img>
                                    <br></br>
                                    <h6 style={{ marginTop: "20px" }}>{index.productName}</h6>
                                    <h6 style={{}}>₹{index.productPrice}</h6>
                                </Col>
                            );
                        })
                    } */}

                    
           
            
            {
                (isProductFetched)?(
                    arr.map(index=>{
                    return(
                        <Col md={2}>
                        <img style={{ width: "10rem", alignContent: "center", visibility: "hidden" }}></img>
                        <br></br>
                        <h6 style={{ marginTop: "20px" }} >Add a Product</h6>
                        <br></br>
                        {
                            (isBrandsFetched)?(
                                <div>
                                
                                <NavDropdown title = {brand} id="brand" >
                                    {
                                    Brands.map(index=>{
                                        return(
                                            <NavItem onClick={()=>handleBrandClick(index.subSubCategoryName)}>{index.subSubCategoryName}</NavItem>
                                        );
                                    })
                                    }
                                </NavDropdown>
                                </div>
                            ):(
                                null
                            )
                            }
                            {

                                (isBrandSelected)?(
                                    <div>
                                    <NavDropdown title={model} id = "Models">
                                        {   
                                        Models.map(model=>{
                                            return(
                                                <NavItem onClick={()=>handleModelClick(model.modelName,model.modelNumber)}>{model.modelName}</NavItem>
                                            );
                                        })
                                        }
                                    </NavDropdown>
                                    </div>
                                ):(
                                    null
                                )
                          }
                                    </Col>
                                );
                            })):(null)
                        }
                        </Row>
                    <Container>
                    <hr></hr>
                    </Container>
                    <RatingandReview review={review}/>
                    <ComparisonHighlights product={product} showOnlyDiff={showOnlyDiff}/>
                    <br></br>
                    <Row>
                    <Col md={1}></Col>
                    <Col md={2}></Col>
                    {
                        
                        product.map(index=>{
                            return(
                                <Col md={2}>
                                    <Button id={index.modelNumber} className="btn-flat" onClick={BuyNowHandler}>Buy Now</Button>
                                </Col>
                            );
                        })
                    }
                    </Row>
                    <ComparisonVariants product={product} showOnlyDiff={showOnlyDiff}/>
                    <Row>

                        <Col md={1}></Col>
                        
                        <Col md={10}>
                        <hr></hr>
                        <h3>Product Information</h3>
                        <hr></hr>
                        </Col>
                        
                        
                    </Row>
                    
                    
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