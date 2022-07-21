import { ComboBox } from "@progress/kendo-react-dropdowns";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Row,Col ,NavItem ,NavDropdown,Form} from "react-bootstrap";


function ComparisonHeader({product}){
    const[length,SetLength] = useState(product.length); 
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
    
    const [Brands,SetBrands] = useState([]);
    const [isBrandsFetched,SetIsBrandsFetched] = useState(false);

    const [brand,SetBrand] = useState("Choose Brand...")


    const [Models,SetModels] = useState();
    const [isBrandSelected,SetIsBrandSelected] = useState(false);
    
    const [model,SetModel] = useState("Choose Model....")

    const [productArr,SetProductArr] = useState(product);
    const [isProductArrUpdated,SetIsProductArrUpdated] = useState(true);
    
    

    useEffect(()=>{
        if(length<4 && !isBrandsFetched){
            axios.get("http://localhost:8080/get-add-to-compare-subcat/"+localStorage.getItem("Category")+"/Brand")
                .then(function(response){
                    if(response.status==200){
                        console.log("Add To Compare SubCat",response.data);
                        SetBrands(response.data);
                    }
                    SetIsBrandsFetched(true);
                }).catch(function(error){
                    console.log("error");
                })

        }
    })
   
        
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

    function handleModelClick(modelName,modelNumber){

        console.log("model number",modelNumber);
        axios.get("http://localhost:8080/get-products/"+modelNumber)
            .then(function(response){
                if(response.status==200){
                    // product.push(response.data);
                    
                    SetProductArr([...productArr,response.data])
                    SetModel(modelName);
                    SetLength(length+1);
                }
            }).catch(function(error){
                console.log(error);
            })
        
        SetModel(modelName);
    }

    console.log("length",length);
    return(
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
                (isProductArrUpdated)?(
                productArr.map(index=>{
                    return(
                        <Col md={2}>
                            <img style={{ width: "10rem", alignContent: "center" }}  src={'data:image/jpg;base64,' + index.productImage1.data}></img>
                            <br></br>
                            <h6 style={{ marginTop: "20px" }}>{index.productName}</h6>
                            <h6 style={{}}>₹{index.productPrice}</h6>
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
                        <Col md={2}>
                            <img style={{ width: "10rem", alignContent: "center", visibility: "hidden" }}></img>
                            <br></br>
                            <h6 style={{ marginTop: "20px" }} >Add a Product</h6>
                            <br></br>
                            {
                                (isBrandsFetched)?(
                                    <div>
                                    <NavDropdown title = {brand} id="brand">
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
    );
}

export default ComparisonHeader;