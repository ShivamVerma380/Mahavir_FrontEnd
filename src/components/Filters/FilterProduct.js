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
    var count = localStorage.getItem("change");
    if (count==null || count==undefined) {
        count = 0;
    }
    else {
        count = parseInt(localStorage.getItem("change"));
    }
    const [change, setChange] = useState(count);




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
                (change!=0) ? (
                    <Button id="comparebtn" onClick={compareProducts}>Compare</Button>
                ) : (null)
                
            
          
        )
      
    }

    const handleAddToCompare=(event)=>{
        
        if (event.target.checked) {

            //console.log('✅ Checkbox is checked');
            setChange(change+1)
            console.log("change: ",change)
            var c = localStorage.getItem("change")
            if (c==null || c==undefined) {
                localStorage.setItem("change","1");
            }
            else {
                 
                localStorage.setItem("change",parseInt(c)+1);
            }
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

    const [isFilterSelected,SetIsFilterSelected] = useState(false);

 
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

                    console.log("products",products);
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
                    console.log(error);

                })
        
                // axios({
                //     method: 'get',
                //     url: "http://localhost:8080/filtercriterias/"+Category,
                //     mode: 'no-cors'
                // }).then(function(response){
                //     if(response.status==200){
                //         // console.log("productFilters",response.data.productFilters);
                //         SetProductInformationFilters(response.data.productFilters);
                //         for(var key in response.data.productFilters){
                //             productInformationKeys.push(key);
                //         } 
                //     }
                // }).catch(function(error){
                //     console.log(error);
                // });

                axios.get("http://localhost:8080/filtercriterias/"+Category)
                .then(function(response){
                    if(response.status==200){
                        // console.log("productFilters",response.data.productFilters);
                        SetProductInformationFilters(response.data.filterCriterias);
                        for(var key in response.data.filterCriterias){
                            productInformationKeys.push(key);
                        } 
                        console.log("productInformationKeys",productInformationKeys);
                        console.log("productInformationFilters",productInformationFilters);
                    }
                }).catch(function(error){
                    console.log(error);
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

    const handleFilterClick=event=>{
        // console.log("Filter Clicked");
        // console.log("Filter Clicked",event.target.value);
        // console.log("Filter Clicked",event.target.checked);
        if(event.target.checked){
            // setFilteredProducts([]);
            console.log("FilterClick on",event.target.id,":",event.target.value);
            var arr=[];
            products.map(index=>{
                    console.log("indexfiltercriterias",index.filtercriterias[event.target.id]);
                    if(index.filtercriterias[event.target.id]===event.target.value){
                        console.log("In if",index.productName);
                        // filteredProducts.push(index);4
                        setFilteredProducts(arr=>[...arr,index]);
                        // setFilteredProducts(index);
                    }
                
                
            })
            // setProducts(arr);
            // console.log("arr",arr);
            // setFilteredProducts(arr);
            console.log("filteredProducts",filteredProducts);
            SetIsFilterSelected(true);
        }
        else{
            console.log("FilterClick off",event.target.id,":",event.target.value);
            SetIsFilterSelected(false);
        }
    }

    function handlePriceRange({min,max}){
        
        var arr =[];
        products.map(index=>{
            var price = parseInt(index.productPrice);
            if(price>={min}.min && price<={max}.max){
                arr.push(index);
            }
        })
        // console.log("price",arr);
        // console.log("Array",arr);
        setFilteredProducts(arr);
        // console.log("Filtered products",filteredProducts);
         
        
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
                                                <Form.Check id={key} type="checkbox"  value={values}  label = {values} onChange={(e)=>handleFilterClick(e)}/>
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
                    
                    filteredProducts.map(index=>{
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
                                <Button style={{textAlign:"centre"}} variant="flat" size="1">Buy</Button>
                                </Card.Body>
                                
                        </Card>
                        
                        
                        
                        )
                    })
                )
            }
            
            </Row>
            </Col>
        
        {/* {
            getCompareBtn()      
        } */}
        {
            (change!=0) ? (
                <Button id="comparebtn" onClick={compareProducts}>Compare</Button>
                
            ) : (null)
        }
        
        
        </Row>
    );
}

export default FilterProduct;