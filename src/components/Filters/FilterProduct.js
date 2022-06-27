import React, { useEffect, useState } from "react";
import { Col,Row,Button ,Form,Card, Container} from "react-bootstrap";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import MultiRangeSlider from "./multiRangeSlider/MultiRangeSlider";
import { AiOutlineHeart, AiTwotoneHeart,AiFillHeart } from "react-icons/ai";

function FilterProduct() {
    var category = localStorage.getItem("Category");
    const navigate = useNavigate();

    const [products,SetProducts] = useState([]);
    const [areProductsFetched,SetAreProductsFetched] = useState(false);

    const [filterSubCat,SetFilterSubCat] = useState([]);
    const [areSubCatFetched,SetAreSubCatFetched] = useState(false);

    const [productsByCat,SetProductsByCat] = useState([]);
    const [areProductsByCatFetched,SetAreProductsByCatFetched] = useState(false);

    const[keySet,setKeyState] = useState(new Set()); //To Store subSubCategories name
    const[isKeySetUpdated,setKeyStateUpdated] = useState(false);


    var min= Number.MAX_VALUE ,max = Number.MIN_VALUE;
    const [minPrice,SetMinPrice] = useState();
    const [maxPrice,SetMaxPrice] = useState();
    const [isRangeSet,SetIsRangeSet] = useState(false);
    

    useEffect(() => {
        if(!areProductsFetched && !areSubCatFetched && !areProductsByCatFetched && !isKeySetUpdated){
            var modelNumbers = localStorage.getItem("Model Number").split(',');
            var urls=[];
            modelNumbers.map(modelNum=>{
                urls.push(axios.get("http://localhost:8080/get-products/"+modelNum));
            })
            axios.all(urls).then(
                axios.spread((...res)=>{
                    res.map(index=>{
                        
                        products.push(index.data);
                        // filteredProducts.push(index.data);


                    })

                    console.log("products",products);
                    SetAreProductsFetched(true);

                })
            )

            axios.get("http://localhost:8080/get-sub-categories-detail/"+category)
                .then(function(response){
                    if(response.status==200){
                        // console.log("response",response.data);

                        SetFilterSubCat(response.data);
                        
                        SetAreSubCatFetched(true);
                    }
                }).catch(function(error){
                    console.log(error);

                })

                axios.get("http://localhost:8080/get-products-by-category/"+category)
                .then(function(response){
                    if(response.status==200){
                        // console.log("GetProductsByCategory",response.data);
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
                    setKeyState(prev=> new Set(prev.add(localStorage.getItem("SubSubCategory"))));
                    setKeyStateUpdated(true);
                }).catch(function(error){
                    console.log("error",error);
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

    


    return(
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
                                                <Form.Check type="checkbox"  value={subSubCategories.subSubCategoryName}  label = {subSubCategories.subSubCategoryName} defaultChecked={(subSubCategories.subSubCategoryName===localStorage.getItem("SubSubCategory"))?(true):(false)} onChange={handleFormCheck}/>
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
            (areProductsFetched)?
            (
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
        </Col>
        
        </Row>
    );
}

export default FilterProduct;