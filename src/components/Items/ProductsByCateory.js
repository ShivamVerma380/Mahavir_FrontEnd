import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col,Row,Button ,Form,Card, Container} from "react-bootstrap";
import { AiOutlineHeart, AiTwotoneHeart,AiFillHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import FilterProduct from "../Filters/FilterProduct";
import Header from "../Header";
import MultiRangeSlider from "../Filters/multiRangeSlider/MultiRangeSlider";

function ProductsByCategory(){

    const [products,SetProducts] = useState([]);
    const [isProductsFetched,setIsProductsFetched] = useState(false);

    const [areSubCatFetched,setAreSubCatFetched] = useState(false);
    const [filterSubCat,setFilterSubCat] = useState([]);
    const [productsByCat,SetProductsByCat] = useState([]);

    const [areProductsByCatFetched,SetAreProductsByCatFetched] = useState(false);

    const[keySet,setKeyState] = useState(new Set()); //To Store subSubCategories name
    const[isKeySetUpdated,setKeyStateUpdated] = useState(false);


    var min= Number.MAX_VALUE ,max = Number.MIN_VALUE;
    const [minPrice,SetMinPrice] = useState();
    const [maxPrice,SetMaxPrice] = useState();
    const [isRangeSet,SetIsRangeSet] = useState(false);

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
        if(!isProductsFetched && !areSubCatFetched && !areProductsByCatFetched && !isKeySetUpdated){
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

            axios.get("http://localhost:8080/get-sub-categories-detail/"+localStorage.getItem("Category"))
                .then(function(response){
                    if(response.status==200){
                        // console.log("response",response.data);

                        setFilterSubCat(response.data);
                        var set = new Set();
                        response.data.map(index=>{
                            console.log("index",index);
                            index.subSubCategories.map(i=>{
                                console.log("i: ",i.subSubCategoryName)
                                set.add(i.subSubCategoryName);
                            });
                        })
                        setKeyState(set);
                        console.log("set",set);
                        setKeyStateUpdated(true);
                        setAreSubCatFetched(true);
                    }
                }).catch(function(error){
                    console.log(error);

                })

                axios.get("http://localhost:8080/get-products-by-category/"+localStorage.getItem("Category"))
                .then(function(response){
                    if(response.status==200){
                        console.log("GetProductsByCategory",response.data);
                        SetProductsByCat(response.data);
                        response.data.map(pro=>{
                            var price = parseInt(pro.productPrice);
                            if(price>max) max=price;
                            if(price<min) min=price;
                        })
                        SetAreProductsByCatFetched(true);
                        SetMinPrice(min);
                        SetMaxPrice(max);
                        SetIsRangeSet(true);
                    }
                    
                    // setKeyState(prev=> new Set(prev.add(localStorage.getItem("SubSubCategory"))));
                    // setKeyStateUpdated(true);
                }).catch(function(error){
                    console.log("error",error);
                })

        }
    })

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
        // setFilteredProducts(arr);
        SetProducts(arr);
        // console.log("Filtered products",filteredProducts);
         
        
    }

    const handleFormCheck = event=>{
        if(event.target.checked){
            //alert(event.target.value+"on");
            
            productsByCat.map(index=>{
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
                            SetProducts(arr=>[...arr,index]);
                            // setFilteredProducts(arr=>[...arr,index]);
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
            console.log("mySet",mySet);
            mySet.delete(event.target.value);
            console.log("mySet",mySet);
            var arr=[];
           
            productsByCat.map(index=>{
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
            SetProducts(arr);
            setKeyState(mySet);
        }
    }

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
            <Col md={2}>
            <h5>FilterProduct</h5>
            <br></br>
            {
                (areSubCatFetched)?(
                    filterSubCat.map((subCat,index)=>{
                        return(
                            <div>

                                <h6>{subCat.subCategoryName}</h6>
                                {
                                    subCat.subSubCategories.map(subSubCategories=>{
                                        return(
                                            <Form>
                                                <Form.Check type="checkbox"  value={subSubCategories.subSubCategoryName}  label = {subSubCategories.subSubCategoryName} defaultChecked="true" onChange={handleFormCheck}/>
                                                {/* (subSubCategories.subSubCategoryName===localStorage.getItem("SubSubCategory"))?(true):(false) */}
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

        </Col>
        <Col md={10}>
            <Row>

        
           
            
            {
                
                (isProductsFetched)?(
                    
                    products.map(index=>{            
                        return(
                            
                            
                            <Card  style={{ width: '20rem'}} 
                            className="mb-2">
                                 <AiOutlineHeart style={{marginTop:"10px",marginLeft:"5px"}} className="wishlisticon" size={30} onClick={()=>WishlistHandler(index)}/>
                    <Card.Img  variant="top" style={{width:200,height:175,alignSelf:"center"}} src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-family-hero?wid=940&hei=1112&fmt=png-alpha&.v=1645036276543" onClick={()=>callProductDetails(index)}/>
                               
                                {/* <Card.Img  variant="top" style={{width:200,height:175,alignSelf:"center"}} src={"data:image/png;base64," + index.productImage1.data} onClick={()=>callProductDetails(index)}/> */}
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
            </Col>
            </Row>
        </div>
    );
}

export default ProductsByCategory;