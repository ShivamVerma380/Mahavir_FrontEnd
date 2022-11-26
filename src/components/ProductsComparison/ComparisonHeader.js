import axios from "axios";
import React, { useEffect, useState } from "react";
import { Row,Col ,NavItem ,NavDropdown,Form,Button,Image} from "react-bootstrap";
import url from "../../Uri";
import { useNavigate } from "react-router-dom";

import {setCookie,getCookie} from '../Cookies';
import './Compare.css';
function ComparisonHeader({product}){
    const navigate = useNavigate();


    const[length,SetLength] = useState(product.length); 
    var arr=[];
    if(length===1){
        arr.push("God");
        // arr.push("God");
        // arr.push("God");
    }else if(length===2){
        arr.push("God");
        // arr.push("God");
    }else if(length===3){
        arr.push("God");
    }else if(length===0){
        arr.push("God");
        // arr.push("God");
        // arr.push("God");
        // arr.push("God");
    }
    
    const [Brands,SetBrands] = useState([]);
    const [isBrandsFetched,SetIsBrandsFetched] = useState(false);

    const [brand,SetBrand] = useState("Choose Brand ▼")


    const [Models,SetModels] = useState();
    const [isBrandSelected,SetIsBrandSelected] = useState(false);
    
    const [model,SetModel] = useState("Choose Model ▼")

    const [productArr,SetProductArr] = useState(product);
    const [isProductArrUpdated,SetIsProductArrUpdated] = useState(true);
    
    

    useEffect(()=>{
        if(length<4 && !isBrandsFetched){
            axios.get(url+"/get-add-to-compare-subcat/"+localStorage.getItem("Category")+"/Brand")
                .then(function(response){
                    if(response.status==200){
                        // console.log("Add To Compare SubCat",response.data);
                        SetBrands(response.data);
                    }
                    SetIsBrandsFetched(true);
                }).catch(function(error){
                    console.log("error");
                })

        }
    })
   
        
    const handleFormCheck=(event)=>{
        if(event.target.checked){
            // console.log("checked")
            // setCookie("isChecked","true",20);
            localStorage.setItem("isChecked",true)
        }
        else{
            // console.log("unchecked")
            localStorage.removeItem("isChecked")
        }
        window.location.reload();
            
        
        // localStorage.setItem("showOnlyDiff",event.target.value);
        // alert(event.target.value)
        // console.log("event",localStorage.getItem("showOnlyDiff"));
    }

    function handleBrandClick(brandName){
        Brands.map(brand=>{
            if(brand.subSubCategoryName===brandName){
                SetBrand(brandName)
                SetModel("Choose Model ▼")
                SetModels(brand.modelResponses);
                SetIsBrandSelected(true);
            }
        })
        // console.log("BrandSelected",brandName);
    }

    function handleModelClick(modelName,modelNumber){
        var modelNumbers = getCookie("addToCompare").split(",")
        modelNumbers.push(modelNumber)
        setCookie("addToCompare",modelNumbers,20)
        window.location.reload();
        
    }

    function getDiscount(SP,CP){
        var discount = (SP-CP)/CP*100;
        return discount;
    }

    function handleRemoveProduct(modelNumber){
        var modelNumbers = getCookie("addToCompare").split(",")
        var flag = true;

        var arr=[]

        modelNumbers.map(model=>{
            if(flag){
                if(model===modelNumber){
                    flag = false;
                }
                if(flag){
                    arr.push(model)
                }
            }else{
                arr.push(model)
            }
        })
        // modelNumbers.splice(pos,1)
        setCookie("addToCompare",arr,20)
        window.location.reload();
    }

    function callProductDetails(index) {
        //alert(index);
        console.log("Index",index);
        localStorage.setItem("productId",index.productId);
        localStorage.setItem("productSelected", index.modelNumber);
        localStorage.setItem("Category",index.category)
        localStorage.setItem("SubCategory","Brand")
        localStorage.setItem("SubSubCategory",index.subCategoryMap.Brand)
        // localStorage.setItem("SubSubCategory","Whirlpool")
        // console.log(index.subCategoryMap.Brand);
        // console.log("Cat",localStorage.getItem("Category"))
        // console.log("SubCat",localStorage.getItem("SubCategory"))
        // console.log("SubSubCat",localStorage.getItem("SubSubCategory"))
        // localStorage.removeItem("SubCategory")
        // localStorage.removeItem("SubSubCategory")
        // console.log("Product Selected",localStorage.getItem("productSelected"))
        navigate("/productDetails")
      }

    localStorage.setItem("Arr",arr);

    // console.log("length",length);
    // console.log("isBrandsFetched",isBrandsFetched);
    return(
            <>
            <Row className="CompareHeader">
            
            <Col md={2} style={{justifyContent:'center', marginTop:"50px"}} className="colll">
                {
                    (product.length>0)?(
                        <>
                        <Row>
                            <p style={{fontSize:"18px"}}>Compare {product.length}</p>
                            
                        </Row>
                        <Row>
                        <h5 style={{fontSize:"18px"}}>{product[0].productName}</h5>
                        </Row>
                        <Row>
                            <p><i>VS</i></p>
                        </Row>
                        <Row>
                            <h5>Others</h5>
                        </Row>
                        
                        </>
                        
                    ):(
                        <br></br>
                    )
                }
                
                <br></br>
                {
                    (product.length>0)?(
                        <h6>
                        <Form>
                            <Form.Check type="checkbox"   label = "Show Only Differences" onChange={handleFormCheck} defaultChecked={(localStorage.getItem("isChecked"))?true:false}/>
                        </Form></h6>
                    ):(
                        <br></br>
                    )
                }
                
            </Col>
            {
            
                (isProductArrUpdated)?(
                productArr.map((index,pos)=>{
                    return(
                        
                        <Col md={2} className="colll">
            
                            <Row>
                            
                        <Image  style={{ height:'130px',width:'190px', alignContent: "center", marginTop:"50px", cursor:"pointer" }}  src={index.productImage1} onClick={() => callProductDetails(index)}/>
                        <Button className="cross" style={{height:'40px', width:'40px'}} onClick={()=>handleRemoveProduct(index.modelNumber)}>X</Button>
                        
                               
                                
                                
                            </Row>
                            
                            
                            <p style={{ marginTop: "20px", fontSize:"18px", cursor:"pointer" }} onClick={() => callProductDetails(index)}>{index.productName}</p>
                            <h6 style={{color:"red"}}>MSP ₹{index.offerPrice}</h6>
                            <h6 style={{fontSize:"15px",textDecorationLine:"line-through"}}>MRP ₹{index.productPrice}</h6>
                            <h6 style={{color:"red",fontSize:"15px"}}>
                                {parseInt(((index.productPrice.replace(',','')-index.offerPrice.replace(',',''))*100)/index.productPrice.replace(',',''))}% OFF  You save ₹{index.productPrice.replace(',','')-index.offerPrice.replace(',','')} 
                            </h6>
                        </Col>
                    );
                })
                ):(
                    null
                )

            }
           
            
            {
                arr.map(index=>{
                    return(
                        <Col md={2} className="colll">

                            <Image  thumbnail="true" height={130} width={190} style={{marginTop:"50px"}} />
                            
                            <h6 style={{ fontSize:'18px', marginTop: "20px", color: "red" }} >Add a Product</h6>
                            
                            {
                                (isBrandsFetched)?(
                                    <div className="choosebrand">
                                    <NavDropdown title = {brand} id="collasible-nav-dropdown" >
                                        
                                        {
                                            Brands.map(index=>{
                                                return(
                                                    
                                                    <><NavDropdown.Item onClick={() => handleBrandClick(index.subSubCategoryName)}>{index.subSubCategoryName}</NavDropdown.Item><NavDropdown.Divider /></>
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
                                    <div className="choosesubcat">
                                    <NavDropdown  title={model} id = "collasible-nav-dropdown">
                                        {   
                                            Models.map(model=>{
                                                return(
                                                    <><NavDropdown.Item onClick={() => handleModelClick(model.modelName, model.modelNumber)}>{model.modelName}</NavDropdown.Item><NavDropdown.Divider /></>
                                                )
                                            })
                                        }
                                    </NavDropdown>
                                    </div>
                                ):(
                                    null
                                )
                            }
                            
{/*                             
                                <NavItem>Iphone 12</NavItem>
                            
                            </NavDropdown> */}
                            
                            {/* <NavDropdown title="Choose Product"></NavDropdown> */}
                        </Col>
                    );
                })
            }
        </Row>
        
        </>
    );
}

export default ComparisonHeader;

