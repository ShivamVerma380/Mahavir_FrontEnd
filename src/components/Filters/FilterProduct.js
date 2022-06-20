import React, { useEffect, useState } from "react";
import { Col,Row,Button ,Form,Card, Container} from "react-bootstrap";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import MultiRangeSlider from "./multiRangeSlider/MultiRangeSlider";


var modelNumsToCompare = new Set();
var flag = false;



function FilterProduct(){

    var category = localStorage.getItem("Category");
    // console.log("Category",category);

    const[products,setProducts] = useState([]);
    const[isProductsFetched,setIsProductsFetched] = useState(false);



    const[keySet,setKeyState] = useState(new Set()); //To Store subSubCategories name
    const[isKeySetUpdated,setKeyStateUpdated] = useState(false);
    //keySet.add(localStorage.getItem("SubSubCategoryName"));
        // console.log("keySet",keySet);

    const[filteredProducts,setFilteredProducts] = useState([]);

    const [isAddCompareClicked, setisAddCompareClicked] = useState(false);
    const [change, setChange] = useState(0);



    var cards=<div>
        <img className="logo_mahavir" src={require ('../../assets/images.jpg')} alt="God" />
    </div>

    if(localStorage.getItem("CompareModels")===null){
        var str="";
    }else{
        var str= localStorage.getItem("CompareModels")+",";
        var arr = str.split(",");
        arr.map(index=>{
            modelNumsToCompare.add(index);
        })
        
    }

    const navigate = useNavigate();

    function compareProducts(){
        if(localStorage.getItem("CompareModels")===null || localStorage.getItem("CompareModels")===""){
            alert("Please select products to compare");
        }
        else{
            navigate("/compareproducts")
        }
    }

    function getCompareBtn(){
       
       
        return(
          <Button id="comparebtn" onClick={compareProducts}>Compare</Button>
        )
      
    }

    const handleAddToCompare=event=>{
        
        if (event.target.checked) {

            //console.log('✅ Checkbox is checked');
            setChange(change+1)
            //document.getElementById(event.value).checked = "false"
            // console.log("Value",event.target.value);
            modelNumsToCompare.add(event.target.value);
            alert(event.target.value)
            // console.log("ModelNumbers",modelNumsToCompare)
          } else {
            // console.log('⛔ Checkbox is NOT checked');
            //document.getElementById(event.value).checked = "true"
            setChange(change-1)
            modelNumsToCompare.delete(event.target.value);

            // console.log("ModelNumbers",modelNumsToCompare)
          }

        str="";
        modelNumsToCompare.forEach(element=>{
            //console.log(element);
            str +=  element + ",";
        })
        str = str.slice(0,str.length-1);
        // console.log(str);
        //localStorage.setItem("CompareModels",str);
        // SetCookie('CompareModels',str,{path:'/'});
        //getCompareBtn();
        localStorage.setItem("CompareModels",str);
        // console.log('Compare Models',localStorage.getItem("CompareModels"))
        setisAddCompareClicked(current => !current);
    }


    function callProductDetails(index){
        //alert(index);
        // console.log("Index",index);
        localStorage.setItem("productSelected",index.modelNumber);
        // console.log("Product Selected",localStorage.getItem("productSelected"))
        navigate("/productDetails")
      }


      const callFormCheck=(modelNumber)=>{
        if(localStorage.getItem("CompareModels")===null || localStorage.getItem("CompareModels")===""){
            //SetCookie("CompareModels","",{path:"/"});
            return(
                <Form>    
                    <Form.Check id={modelNumber} type="checkbox" label = "Add To Compare" value={modelNumber} onChange={handleAddToCompare}/>
                </Form>
            );
        }else{
            var modelNums = localStorage.getItem("CompareModels").split(',');
            // console.log("Model Nums",modelNums)
        
            if(modelNums.includes(modelNumber)){
                return(
                    <Form>    
                        <Form.Check id={modelNumber} type="checkbox" label = "Add To Compare" value={modelNumber} onChange={handleAddToCompare} defaultChecked="true"/>
                    </Form>
                );
            }
            return(
                <Form>    
                    <Form.Check id={modelNumber} type="checkbox" label = "Add To Compare" value={modelNumber} onChange={handleAddToCompare}/>
                </Form>
            )

        }
    }
        

    //FilterProduct....
    const [FilterCriterias,SetFilterCriterias] = useState([]);
    const [isFilterCrieteriasFetched,SetIsFilterCriteriasFetched]= useState(false);
    const [isProductSorted, setIsProductSorted] = useState(false);
    const [ProductsByCategories,SetProductsByCategories] = useState([]);
    const [isProductsByCategoriesSet,SetIsProductsByCategoriesSet] = useState(false);
    const [SortedProducts, setSortedProducts] = useState([]);
    // console.log("SubSubCategory",localStorage.getItem("SubSubCategory")) 


    const [productInformationFilters,SetProductInformationFilters] = useState();
    const [productInformationKeys,SetProductInformationKeys] = useState([]);
    const [isProductInformationFiltersFetched,SetIsProductInformationFiltersFetched] = useState(false);
    
    
    var min= Number.MAX_VALUE ,max = Number.MIN_VALUE;
    const [minPrice,SetMinPrice] = useState();
    const [maxPrice,SetMaxPrice] = useState();
    const [isRangeSet,SetIsRangeSet] = useState(false);

 
    const[flag,SetFlag] = useState(false)
    useEffect(()=>{
        if(!flag){
            var modelNumbers = localStorage.getItem("Model Number").split(',');
            // console.log("Model Number",modelNumbers);
            var urls=[];
            modelNumbers.map(modelNum=>{
                urls.push(axios.get("http://localhost:8080/get-products/"+modelNum));
            })

            axios.all(urls).then(
                axios.spread((...res)=>{
                    res.map(index=>{
                        
                        products.push(index.data);
                        filteredProducts.push(index.data);


                    })

                    setIsProductsFetched(true);

                })
            )

            var Category = localStorage.getItem("Category");
            axios.get("http://localhost:8080/get-sub-categories-detail/"+Category)
                .then(function(response){
                    if(response.status==200){
                        // console.log("response",response.data);

                        SetFilterCriterias(response.data);
                        
                        SetIsFilterCriteriasFetched(true);
                    }
                }).catch(function(error){
                    // console.log(error);

                })
        

                axios.get("http://localhost:8080/get-categories/"+Category)
                .then(function(response){
                    if(response.status==200){
                        // console.log("productFilters",response.data.productFilters);
                        SetProductInformationFilters(response.data.productFilters);
                        for(var key in response.data.productFilters){
                            productInformationKeys.push(key);
                        } 
                    }
                }).catch(function(error){
                    // console.log(error);
                })

            axios.get("http://localhost:8080/get-products-by-category/"+Category)
                .then(function(response){
                    if(response.status==200){
                        // console.log("GetProductsByCategory",response.data);
                        ProductsByCategories.push(response.data);
                        ProductsByCategories[0].map(index=>{
                            // console.log(index);
                            var price = parseInt(index.productPrice);
                            if(min>price) min = price;
                            if(max<price) max=price;
                        })
                        // keySet.add(localStorage.getItem("SubSubCategoryName"));
                        setKeyState(prev=> new Set(prev.add(localStorage.getItem("SubSubCategory"))));
                        SetMinPrice(min);
                        SetMaxPrice(max);
                        SetIsRangeSet(true);
                        setKeyStateUpdated(true);
                        SetIsProductsByCategoriesSet(true);
                        SetIsProductInformationFiltersFetched(true);
                    }
                }).catch(function(error){
                    console.log("error",error);
                })
                SetFlag(true);
            }
                    
    })

    const handleFormCheck = event=>{
        if(event.target.checked){
            //alert(event.target.value+"on");
            
            ProductsByCategories[0].map(index=>{
                var flag = true;
                // console.log("Index",index);
                var subCategoryMap = index.subCategoryMap;
                for(var key in subCategoryMap){
                    // console.log("key",key);
                    if(subCategoryMap[key]===event.target.value){
                        // console.log("God Inside if");
                        //add product index here in set
                        
                        products.map(p=>{
                            if(p.modelNumber===index.modelNumber){
                                // console.log("P",p.modelNumber);
                                // console.log('index',index.modelNumber);
                                flag=false;
                            }
                        })
                        if(flag){
                            setProducts(arr=>[...arr,index]);
                            setFilteredProducts(arr=>[...arr,index]);
                            // setFilteredProducts(arr=>[...arr,])
                        }
                            
                    }
                }
                
            })
            setKeyState(prev=>new Set([...prev,event.target.value]))
            // console.log("KeySet",keySet);

        }else{
            var mySet = new Set(keySet);
            // mySet = new Set(prev=>new Set([...prev].filter(x=>x!==event.target.value)));
            mySet.delete(event.target.value);
            //setKeyState(prev=>new Set([...prev].filter(x=>x!==event.target.value)));
            // console.log("mySet",mySet);

            var arr=[];
           
            ProductsByCategories.map(pro=>{
                pro.map(index=>{  
                // console.log("Index",index);
                var subCategoryMap = index.subCategoryMap;
                for(var key in subCategoryMap){
                    // console.log("key",key);
                    var flag = true;
                    [...mySet].map(k=>{
                        if(subCategoryMap[key]===k){
                            // arr.push(index);
                            arr.map(a=>{
                                if(a.modelNumber===index.modelNumber){
                                    flag=false;
                                }
                            })
                            if(flag){
                                arr.push(index);
                                
                            }
                        }
                    })
                }
            })
            })
            setProducts(arr);
            setFilteredProducts(arr);
            setKeyState(mySet);

    }
    }

    function handlePriceRange({min,max}){
        // console.log("Min",{min});
        // console.log("Max",{max});
        //alert("Hello")
        // console.log("Min"+{min.min}+",Max"+{max.max});
        // console.log("Min  "+{min}.min+",Max  "+{max}.max);
        
        var arr =[];
        products.map(index=>{
            var price = parseInt(index.productPrice);
            if(price>={min}.min && price<={max}.max){
                arr.push(index);
            }
        })
        // console.log("price",arr);
        setFilteredProducts(arr);
         
        
    }
    function sortByPrice(event){
        var arr =[];
        
        if(event.target.value=="Price: Low to High"){
            console.log("before sort", filteredProducts);
            arr = filteredProducts.sort((a,b)=>{
               
                return parseInt(a.productPrice)-parseInt(b.productPrice);
            })
            // setFilteredProducts([]);
            console.log("Low to high",arr);
            setSortedProducts(arr);
            setIsProductSorted(true);
        }else if(event.target.value=="Price: High to Low"){
            console.log("before sort", filteredProducts);
            arr = filteredProducts.sort((a,b)=>{
                
                return parseInt(b.productPrice)-parseInt(a.productPrice);
            })
            // setFilteredProducts([]);
            console.log("High to low",arr);
            setSortedProducts(arr);
            setIsProductSorted(true);
        }
        
            // arr.sort(function(a,b){
            //     return a.offerPrice-b.offerPrice;
            // });
            // console.log("Sort By ",arr);
        //     setFilteredProducts(arr);
        // }
        // if(event.target.value=="Price: High to Low"){
        //     var arr=filteredProducts.slice(0);
        //     arr.sort(function(a,b){
        //         return b.offerPrice-a.offerPrice;
        //     });
        //     console.log("Sort By",arr);
        //     setFilteredProducts(arr);
        // }
    }

    return(
        <Row>
        <Col md={2}>
            <h5>FilterProduct</h5>
            <br></br>
            {
            (isFilterCrieteriasFetched && isProductsFetched)?(

                FilterCriterias.map(index=>{
                    
                    return(
                        <div>
                        <h4>{index.subCategoryName}</h4>
                        {
                            index.subSubCategories.map(subSubCategories=>{
                                return(
                                    <Form>
                                        <Form.Check type="checkbox"  value={subSubCategories.subSubCategoryName}  label = {subSubCategories.subSubCategoryName} defaultChecked={(subSubCategories.subSubCategoryName===localStorage.getItem("SubSubCategory"))?(true):(false)} onChange={handleFormCheck}/>
                                    </Form>
                                );
                            })
                        }
                        <br></br>
                        </div>
                    )
                })
                

            ):(
                
                null
            )
            }
            
            <br></br>
            <h4>Price Selector</h4>
            <br></br>
            {
                (isRangeSet)?(
                    
                        <MultiRangeSlider
                            
                            min={minPrice}
                            max={maxPrice}
                            // onChange={({ min, max }) =>  console.log(`min = ${min}, max = ${max}`)}
                            onChange={({min,max})=> {handlePriceRange({min,max})}}
                        />
                    
                ):(
                    null
                )
            }
            <br></br>
            <br></br>
            {
                (isProductInformationFiltersFetched)?(
                    productInformationKeys.map(key=>{
                        return(
                            <div>
                                <h5>{key}</h5>
                                {
                                    productInformationFilters[key].map(values=>{
                                        return(
                                            <Form>
                                                <Form.Check type="checkbox"  value={values}  label = {values}/>
                                            </Form>

                                        );
                                    })
                                }
                            </div>
                        );
                    })
                ):(
                    null
                )
            }
            
        </Col>
        <Col md={10}>
            <Row>
                <Col>
                <select onChange={sortByPrice}>
                        <option>SORT BY</option>
                        <option>Price: High to Low</option>
                        <option>Price: Low to High</option>
                    </select>
                </Col>
            </Row>
        <Row>
            {
                (isProductsFetched && !isProductSorted)?
                [...filteredProducts].map(index=>{
                    return(
                        
                        <Card  style={{ width: '15rem'}} 
                        className="mb-2">
                            <Card.Img  variant="top" style={{width:200,height:150,alignSelf:"center"}} src={"data:image/png;base64," + index.productImage1.data} onClick={()=>callProductDetails(index)}/>
                            <Card.Body>
                            <Card.Title as="h6" onClick={()=>callProductDetails(index)}>{index.productName}</Card.Title>
                            <Card.Text onClick={()=>callProductDetails(index)}>
                            {index.productDescription}
                            <br></br><br></br><strong>Rs {index.productPrice}</strong>
                        </Card.Text>
                            {
                                callFormCheck(index.modelNumber)
                            }
                            
                            
                            
                            <br></br>
                            <Button variant="flat" size="1">Buy</Button>
                            </Card.Body>
                            
                    </Card>
                    
                    
                    
                    )
                }):(
                    [...SortedProducts].map(index=>{
                        return(
                            
                            <Card  style={{ width: '15rem'}} 
                            className="mb-2">
                                <Card.Img  variant="top" style={{width:200,height:150,alignSelf:"center"}} src={"data:image/png;base64," + index.productImage1.data} onClick={()=>callProductDetails(index)}/>
                                <Card.Body>
                                <Card.Title as="h6" onClick={()=>callProductDetails(index)}>{index.productName}</Card.Title>
                                <Card.Text onClick={()=>callProductDetails(index)}>
                                {index.productDescription}
                                <br></br><br></br><strong>Rs {index.productPrice}</strong>
                            </Card.Text>
                                {
                                    callFormCheck(index.modelNumber)
                                }
                                
                                
                                
                                <br></br>
                                <Button variant="flat" size="1">Buy</Button>
                                </Card.Body>
                                
                        </Card>
                        
                        
                        
                        )
                    })
                )
            }
            
            </Row>
            </Col>
        
        {
            getCompareBtn()      
        }
        </Row>
    );
}

export default FilterProduct;