import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../Header";
import { Button, Container, Row ,Col,NavItem ,NavDropdown,Form} from "react-bootstrap";
import ComparisonHeader from "./ComparisonHeader";
import ComparisonHighlights from "./ComparisonHighlights";
import ComparisonVariants from "./ComparisonVariants";
import ComparisonProductInformation from "./ComparisonProductInformation";
import { useNavigate } from "react-router-dom";
function AddToCompareProducts(){

    const navigate = useNavigate();

    const [product,SetProduct] = useState([]);
    const [modelNums,SetModelNums] = useState([]);
    const [isProductFetched,SetIsProductFetched] = useState(false);

    const[length,SetLength] = useState(); 

    const [Brands,SetBrands] = useState([]);
    const [isBrandsFetched,SetIsBrandsFetched] = useState(false);

    const [brand,SetBrand] = useState("Choose Brand...")


    const [Models,SetModels] = useState();
    const [isBrandSelected,SetIsBrandSelected] = useState(false);
    
    const [model,SetModel] = useState("Choose Model....")


    var keys=[];
    var value=[];


    function getProductInformationKeys(productInformation){
        
        for(var k in productInformation){
            keys.push(k);
        }
    }

    useEffect(()=>{
        if(!isProductFetched && !isBrandsFetched){
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
                        modelNums.push(response.data.modelNumber);
                    })
                    SetLength(product.length);
                    SetIsProductFetched(true);
                    
                })
            )
            
        
        }

        if(isProductFetched){

            axios.get("http://localhost:8080/get-add-to-compare-subcat/"+localStorage.getItem("Category")+"/Brand")
            .then(function(response){
                var arr=[];
                if(response.status==200){
                    console.log("Add To Compare SubCat",response.data);
                    arr = response.data;
                    console.log("Before filter",arr);
                    arr.map((index,p)=>{
                        index.modelResponses.map((model,pos)=>{
                            // modelNums.map(mNo=>{
                            //     if(model.modelNumber===mNo){
                            //         // SetProduct(product.filter(item=>item.modelNumber!==event.target.name))
                            //         arr.filter()
                            //     }
    
                            // })
                            
                            modelNums.map(mNo=>{
                                if(mNo===model.modelNumber){
                                    console.log("In if......")
                                    console.log("modelNum",index.modelResponses[pos].modelNumber)
                                    console.log("ModelNum",mNo)
                                    index.modelResponses.filter(item=>item.modelNumber!==mNo);
                                    console.log("index.modelResponses",index.modelResponses);
                                }
                            })
                            arr[p]=index.modelResponses;
                            
                        })
                        console.log("index",index);
                        arr[p]=index;
                    })
                    console.log("After filter",arr);
                    SetBrands(arr);
    
                    SetIsBrandsFetched(true);
                }
                
            }).catch(function(error){
                console.log(error);
            })
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

    

    const handleFormCheck=event=>{
        alert(event.target.value)
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

    // function getModel({modelNumber,modelName}){
    //     // product.map(pro=>{
    //     //     // if(pro.modelNumber==modelNumber){
    //     //     //     return null;
    //     //     // }
    //     // })
    //     return(
    //         <NavItem onClick={()=>handleModelClick(modelName,modelNumber)}>{modelName}</NavItem>
    //     );
    // }

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
                            <Form.Check type="checkbox"   label = "Show Only Differences" onChange={handleFormCheck}/>
                        </Form>
                    </Col>
                    {
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
                    }

                    
           
            
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
                                    <NavDropdown title={model} id = "Models" >
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