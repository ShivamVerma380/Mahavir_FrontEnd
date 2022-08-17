import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { Col,Row,Button ,Form,Card, Container, Image, NavDropdown} from "react-bootstrap";
import { AiOutlineHeart, AiTwotoneHeart,AiFillHeart, AiFillStar } from "react-icons/ai";
import {setCookie,getCookie} from '../Cookies';
import Header from "../Header";
import {FaArrowCircleUp} from 'react-icons/fa';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import url from "../../Uri";

const BrandCatProducts = () => {
    var comparemodels=getCookie("addToCompare").split(',');
    var cart=getCookie("CartModels").split(',');

    const [visible, setVisible] = useState(false)

    const [min,SetMin] = useState(0);
    const [max,SetMax] = useState(100);

    const [value,SetValue] = useState([]);

    const [filters, SetFilters] = useState();
    const [isFiltersFetched, SetIsFiltersFetched] = useState(false);

    const [keySet, setKeyState] = useState([]); //To Store filters name

    const [categories,SetCategories] = useState([]);
    const [isCategoriesFetched,SetIsCategoriesFetched] = useState(false);

    const [products, setProducts] = useState([]);
    const [areProductsFetched, SetAreProductsFetched] = useState(false);
    

    const[len,setLen]=useState(getCookie("addToCompare").split(',').length);
    const [change, setChange] = useState(0);

    const[showTopBtn,setShowTopBtn] = useState(false);

    const[filterselected,SetFilterSelected] = useState([])


    const navigate = useNavigate();
    //var models = localStorage.getItem("models").split(',');




    useEffect(() => {
        window.addEventListener('scroll', () => { if (window.scrollY > 400) { setShowTopBtn(true); } else { setShowTopBtn(false); } });
        if (!areProductsFetched && !isCategoriesFetched) {


            axios.get(url+"/excel/shopByBrands/"+ localStorage.getItem("brandName") + "/" + localStorage.getItem("shopbrandcat")).then(
                function (response) {
                    if (response.status == 200) {
                        console.log("Response",response.data);
                        setProducts(response.data);
                        SetAreProductsFetched(true);
                        var minPrice=Number.MAX_VALUE, maxPrice=Number.MIN_VALUE;
                    // var priceArr=[]
                    response.data.map((index,pos)=>{
                        console.log("In selected products map...")
                        if(minPrice>parseInt(index.productPrice)){
                            minPrice = index.productPrice
                        }
                        if(maxPrice<parseInt(index.productPrice)){
                            maxPrice = index.productPrice
                        }
                    })
                    console.log("min",minPrice,"max",maxPrice)
                    SetMin(minPrice);
                    SetMax(maxPrice);
                    SetValue([minPrice,maxPrice]);

                    }
                }).catch(function (error) {
                    console.log("error", error);
                }
            );

            if(!isCategoriesFetched){
                axios.get(url+"/get-categories")
                .then(function(response){
                    response.data.map(cat=>{
                        categories.push(cat.category);
                    })
                    SetIsCategoriesFetched(true);
                }).catch(function(error){
                    console.log("error",error);
                })
            }

            
            axios.get(url+"/"+localStorage.getItem("Category"))
                .then(function(response){
                    SetFilters(response.data.filterCriterias);
                    for(var key in response.data.filterCriterias){
                        keySet.push(key);
                    }
                    console.log("keySet",keySet)
                    if(localStorage.getItem("SubCategory")!=null && localStorage.getItem("SubSubCategory")!=null){
                        // filterselected.push(localStorage.getItem("SubCategory")+"-"+localStorage.getItem("SubSubCategory"))
                        SetFilterSelected([localStorage.getItem("SubCategory")+"-"+localStorage.getItem("SubSubCategory")])
                    }
                    SetIsFiltersFetched(true)
                    // SetFilters(response.data.filterCriterias)
                    // SetIsFiltersFetched(true)
                }).catch(function(error){
                    console.log("error",error)
                })
            // var urls = [];
            // models.map(modelNum => {
            //     urls.push(axios.get("http://localhost:8080/excel/shopByBrands/" + localStorage.getItem("brandName") + "/" + localStorage.getItem("shopbrandcat")));
            // })
            // axios.all(urls).then(
            //     axios.spread((...res) => {
            //         res.map(index => {

            //             products.push(index.data);
            //             // filteredProducts.push(index.data);


            //         })

            //         console.log("products", products);
            //         SetAreProductsFetched(true);

            //     })
            // )
        }
    })

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

      function callProductDetails(index){
        //alert(index);
        // console.log("Index",index);
        localStorage.setItem("productSelected",index.modelNumber);
        // console.log("Product Selected",localStorage.getItem("productSelected"))
        navigate("/productDetails")
    }

    const addtocart=(model)=>{
        
        // event.preventDefault();
        
        if(cart.includes(model)){
            alert("Item is already present in cart")
        }
        else{
            console.log("adddd"+model);
            cart.push(model);
            setCookie("CartModels",cart,20);
            alert("Added to cart"+model);
        }
    
        // Header.location.reload()
        
        
    }

    function SortByLowPrice(){
        console.log("in sort function")
        var arr=[]; 
        setProducts([]);
        arr = products;
        console.log("Before sorting",products)
        arr.map(index=>{
            console.log("indexProductPrice",index.productPrice)
        })
        arr.sort((a,b)=>a.productPrice-b.productPrice);
        console.log("After sorting",products)
        arr.map(index=>{
            console.log("indexProductPrice--",index.productPrice)
        })
        setProducts([...arr])
    }
    
    function SortByHighPrice(){
        console.log("in sort function")
        var arr=[]; 
        setProducts([]);
        arr = products;
        console.log("Before sorting",products)
        arr.map(index=>{
            console.log("indexProductPrice",index.productPrice)
        })
        arr.sort((a,b)=>b.productPrice-a.productPrice);
        console.log("After sorting",products)
        arr.map(index=>{
            console.log("indexProductPrice--",index.productPrice)
        })
        setProducts([...arr])
    }

    function SortByTopRated(){
        console.log("in sort function")
        var arr=[]; 
        setProducts([]);
        arr = products;
        console.log("Before sorting",products)
        arr.map(index=>{
            console.log("indexAverageRating",index.averageRating)
        })
        arr.sort((a,b)=>b.averageRating-a.averageRating);
        console.log("After sorting",products)
        arr.map(index=>{
            console.log("indexAverageRating--",index.averageRating)
        })
        setProducts([...arr])
    }

    function SortByDiscount(){
        console.log("in sort function")
        var arr=[]; 
        setProducts([]);
        arr = products;
        console.log("Before sorting",products)
        arr.map(index=>{
            console.log("difference",((index.productPrice-index.offerPrice)*100/index.productPrice))
        })
        arr.sort((a,b)=>((b.productPrice-b.offerPrice)*100/b.productPrice)-((a.productPrice-a.offerPrice)*100/a.productPrice));
        console.log("After sorting",products)
        arr.map(index=>{
            console.log("indexAverageRating--",index.averageRating)
        })
        setProducts([...arr])
    }

    function handleCategoryCheck(cat){
        var element = document.getElementById(cat)
        if(element.checked ==true){
            console.log(cat," is checked")
            localStorage.setItem("Category",cat);
            localStorage.removeItem("SubCategory")
            localStorage.removeItem("SubSubCategory")
            window.location.reload()
        }else{
            console.log(cat," is not checked")
        }
    }

    const rangeSelector = (event, newValue) => {
        SetValue([parseInt(newValue[0]), parseInt(newValue[1])]);
        var arr=[];
        products.map(index=>{
            var flag = true;
            filterselected.map(a=>{
                var pair = a.split("-");
                console.log("pair",pair)
                var key = pair[0];
                var values = pair[1].split(";");
                console.log("values",values)
                var valueflag= false;
                values.map(v=>{
                    console.log(index.filtercriterias[key])
                    if(index.filtercriterias[key].includes(v)){
                        valueflag=true;  
                    }
                })
                if(!valueflag){
                    flag = false;
                }
            })
            if(flag && index.productPrice>=parseInt(newValue[0]) && index.productPrice<=parseInt(newValue[1])){
                arr.push(index);
            }
        })
        setProducts(arr)

        console.log(newValue)
    };

    const handleFormCheck=(index,f)=>{
        console.log("index:",index,"    f:",f)

        var element = document.getElementById(f);
        if(element.checked){
            var  arr= filterselected;
            var flag = true;
            arr.map((i,pos)=>{
                var pair = i.split("-");
                if(index===pair[0]){
                    arr[pos]= index+"-"+pair[1]+";"+f;
                    flag = false;
                }
            })
            if(flag){
                arr.push(index+"-"+f);
            }
            SetFilterSelected(arr);
            var productsArray = [];
            // console.log("products",products)
            console.log("filterSelected",filterselected);
            products.map(index=>{
                var flag = true;
                filterselected.map(a=>{
                    var pair = a.split("-");
                    // console.log("pair",pair)
                    var key = pair[0];
                    var values = pair[1].split(";");
                    console.log("values",values)
                    var valueflag= false;
                    values.map(v=>{
                        console.log(index.filtercriterias[key])
                        if(index.filtercriterias[key].includes(v)){
                            valueflag=true;  
                        }
                    })
                    if(!valueflag){
                        flag = false;
                    }
                })
                if(flag){
                    productsArray.push(index);
                }
            })
            // console.log("Products Array",productsArray.length);
            
            setProducts(productsArray);

        }else{
            console.log("Filter selected",filterselected)
            var arr = filterselected;
            arr.map((i,pos)=>{
                var pair = i.split("-");
                if(index===pair[0]){
                    var values= pair[1].split(";");
                    if(values.length==1){
                        arr.splice(pos,1);
                    }
                    else{
                        var str=index+"-";
                        values.map(v=>{
                            if(v!==f){
                                str+=v+";";
                            }
                        })
                        str= str.slice(0,str.length-1);
                        arr[pos]=str;

                    }
                }
            })

            console.log("Array:",arr)

            // if(arr.length==0){
            //     console.log("In if")
            //     // localStorage.removeItem("SubCategory");
            //     // localStorage.removeItem("SubSubCategory");
            //     // window.location.reload();
            // }
            SetFilterSelected(arr);
            var productsArray = [];
            console.log("products",products)
            console.log("filterSelected",filterselected);
            products.map(index=>{
                var flag = true;
                filterselected.map(a=>{
                    var pair = a.split("-");
                    // console.log("pair",pair)
                    var key = pair[0];
                    var values = pair[1].split(";");
                    // console.log("values",values)
                    var valueflag= false;
                    values.map(v=>{
                        console.log(index.filtercriterias[key])
                        if(index.filtercriterias[key]===v){
                            valueflag=true;  
                        }
                    })
                    if(!valueflag){
                        flag = false;
                    }
                })
                if(flag){
                    productsArray.push(index);
                }
            })
            console.log("Products Array",productsArray.length);
            
            setProducts(productsArray);
        }
    }

    function handleAddToCompare(modelNumber){
        
        var element = document.getElementById(modelNumber);
        
        if(element.checked){
          
          
            console.log("adddd"+modelNumber);
            comparemodels.push(modelNumber);
            setCookie("addToCompare",comparemodels,20);
            setLen(getCookie("addToCompare").split(',').length)
          console.log(comparemodels);
          console.log("checked "+modelNumber);
            
            
        
          
        }
        else {
          for (var i = 0; i < comparemodels.length; i++) {
            if (comparemodels[i] === modelNumber) {
              comparemodels.splice(i, 1);
                console.log(comparemodels);
                setCookie("addToCompare",comparemodels,20);
                setLen(getCookie("addToCompare").split(',').length)
                // window.location.reload();
                break;
            }
        }
          console.log("unchecked "+modelNumber);

        }
        // if (event.target.checked) {
  
        //   console.log('✅ Checkbox is checked');
        //   setChange(change+1)
          
          
          
        // } else {
        //   console.log('⛔️ Checkbox is NOT checked');
        //   setChange(change-1)
        // }
        // setisAddCompareClicked(current => !current);
        // // alert("Added To Compare");
        
    }
      
      localStorage.setItem("comparecount",change)
      console.log("Get",localStorage.getItem("comparecount"))

      const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300){
          setVisible(true)
        } 
        else if (scrolled <= 300){
          setVisible(false)
        }
      };

      const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
          /* you can also use 'auto' behaviour
             in place of 'smooth' */
        });
      };
      
      window.addEventListener('scroll', toggleVisible);

    return (
        <div>
            <Header/>
             {
          (((len-1)>0) ? <Button id="comparebtn" style={{position:'fixed'}} onClick={()=>navigate('/compareProducts')}>Compare: {len-1}</Button> : (null))
          
          }
          {
            (showTopBtn)?(
                <Button className="scrolltopbtn">
            <FaArrowCircleUp onClick={scrollToTop} 
             />
        </Button>
            ):(null)
          }
        
        <Row>
           
            <Col md={1}></Col>
            <Col md={2}>
                <h3>Category</h3>
                {
                    (isCategoriesFetched)?(
                        categories.map(cat=>{
                            return(
                                <Form.Check type="radio" id={cat} value={cat}  label={cat} name="cat" defaultChecked={(cat===localStorage.getItem("Category"))?(true):(false)} onChange={()=>handleCategoryCheck(cat)}/>
                            )
                        })
                    ):(
                        null
                    )
                }
                <br></br>
                <React.Fragment>
                <Typography id="range-slider" gutterBottom>
                    Select Price Range:
                </Typography>
                
                <Slider
                    defaultValue={[parseInt(min),parseInt(max)]}
                    onChange={rangeSelector}
                    valueLabelDisplay="on"
                    min={parseInt(min)}
                    max={parseInt(max)}
                />
                </React.Fragment>
                Your range of Price is between {value[0]} /- and {value[1]} /-

                
                {
                //     <MultiRangeSlider
                //     min={0}
                //     max={100}
                //     step={5}
                //     ruler={true}
                //     label={true}
                //     preventWheel={false}
                //     minValue={minValue}
                //     maxValue={maxValue}
                //     onInput={(e) => {
                //       handleInput(e);
                //     }}
                //   />
                }
                <br></br>
                <h4>Filters</h4>
                {
                    (isFiltersFetched)?(
                        keySet.map(index=>{
                            return(
                                <div>
                                    
                                    
                                    <h6>{index}</h6>
                                    {
                                        filters[index].map(f=>{
                                            return(
                                                <Form>
                                                    <Form.Check type="checkbox" id={f} value={f}  label={f}     defaultChecked={(f===localStorage.getItem("SubSubCategory") && index===localStorage.getItem("SubCategory"))?(true):(false)} onChange={()=>handleFormCheck(index,f)} />
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
                }
            </Col>
            <Col>
            {
                // <h5 style={{textAlign:"end",marginRight:"25px"}}>God</h5>
                <Row>
                    <Col md={9}>
                        <NavDropdown title="Sort By">
                        <NavDropdown.Item style={{color:'black',fontSize:"20px",fontWeight:'bold'}}  target="_blank" onClick={SortByLowPrice}>Price: Low To High</NavDropdown.Item>
                        <NavDropdown.Item style={{color:'black',fontSize:"20px",fontWeight:'bold'}}  target="_blank" onClick={SortByHighPrice}>Price: High To Low</NavDropdown.Item>
                        <NavDropdown.Item style={{color:'black',fontSize:"20px",fontWeight:'bold'}}  target="_blank" onClick={SortByTopRated}>Top Rated</NavDropdown.Item>
                        <NavDropdown.Item style={{color:'black',fontSize:"20px",fontWeight:'bold'}}  target="_blank">Latest Arrival</NavDropdown.Item>
                        <NavDropdown.Item style={{color:'black',fontSize:"20px",fontWeight:'bold'}}  target="_blank" onClick={SortByDiscount}>Discount: More To Less</NavDropdown.Item>
                        </NavDropdown>
                    </Col> 
                    
                    <Col md={3}>
                        <br></br>
                    <p>{products.length} products found</p>
                    </Col> 
                
                    
                    
                </Row>
            }
            <br></br>

            
            {
                    
                    (areProductsFetched)?(
                        (products.length==0)?(
                            <h6>No Products Found</h6>
                        ):(
                    
                            products.map(index => {
                                return (
                                


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
                                                    {(localStorage.getItem("wishlistproduct")!=null) && (localStorage.getItem("wishlistproduct").includes(index.modelNumber)) ?
                                                        <AiFillHeart className="innerrow_wishlist" style={{  fill: 'rgb(255, 88, 88)' }}  size={30} onClick={() => WishlistHandler(index)} /> :
                                                        <AiOutlineHeart className="innerrow_wishlist" style={{  }}  size={30} onClick={() => WishlistHandler(index)} />
                                                    }
                                                </Col>

                                            </Row>
                                            <Row>
                                                <Col md={11} className="star">
                                                {Math.round(index.averageRating * 10) / 10}<AiFillStar />
                                                
                                                </Col>
                                                
                                            </Row>
                                            <br></br>
                                            <Row className="innerrow">
                                                <Col md={11}>
                                                    {
                                                        (index.productHighlights!=null)?(
                                                            index.productHighlights.split(';').map(highlight => {
                                                                return (
                                                                    <h6 style={{color:'GrayText'}}>•{highlight}<br></br></h6>
                                                                );
                                                            })
                                                        ):(
                                                            null
                                                        )
                                                        
                                                    }
                                                    {/* <h6 style={{color:'GrayText'}}>{index.productHighlights.split}</h6> */}
                                                </Col>

                                            </Row>
                                            <Row className="innerrow">
                                                <Col md={10}>
                                                    {
                                                        (index.offerPrice==null) ? (
                                                            <h5>MRP: <b>₹{index.productPrice}</b></h5>
                                                        ) : (
                                                            <h5>MSP: <b style={{ marginRight: "20px", color: "rgb(255,98,98)" }}>₹{index.offerPrice}</b> MRP: <b style={{ textDecorationLine: "line-through", textDecorationStyle: "solid" }}>₹{index.productPrice}</b></h5>
                                                        )
                                                    }
                                                    
                                                    

                                                </Col>

                                            </Row>

                                            <Row className="innerrow">
                                                <Form style={{
                                                    fontWeight: '500',
                                                    fontSize: '120%'
                                                }}>
                                                    <Form.Check defaultChecked={(comparemodels.includes( index.modelNumber))?(true):(false)} type="checkbox" id={index.modelNumber}  label = "Add To Compare" onChange={()=>handleAddToCompare(index.modelNumber)}/>
                                                </Form>

                                            </Row>

                                            <Row className="innerrow">
                                                <Col><Button className="filterproductBtn"  variant="outline-primary" size="1" onClick={()=>addtocart(index.modelNumber)}>Add To Cart</Button></Col>
                                                <Col><Button className="filterproductBtn" variant="outline-primary">Buy Now</Button></Col>
                                            

                                            </Row>
                                        </Col>


                                    </Row>



                                )
                            
                            })
                        )
                        
                    ):(
                        null
                    )
                }
            </Col>
        </Row>
        </div>
        // <div>
        //     <Header/>
        //     {
        //         <Row>
        //             <Col md={1}></Col>
        //             <Col md={2}>
                        
        //             </Col>
        //             <Col md={9}>

                    
                    
        //             {
        //             (areProductsFetched) ? (products.map(index => {
        //             return (
        //                 // <Col md={3}>
        //                 //     <Card  style={{ width: '20rem'}} 
        //                 // className="mb-2">
        //                 //      <AiOutlineHeart style={{marginTop:"10px",marginLeft:"5px"}} className="wishlisticon" size={30} onClick={()=>WishlistHandler(index)}/>
        //                 //     {/* <Card.Img  variant="top" style={{width:200,height:175,alignSelf:"center"}} src={"data:image/png;base64," + index.productImage1.data} onClick={()=>callProductDetails(index)}/> */}
        //                 //     <Card.Img  variant="top" style={{width:200,height:175,alignSelf:"center"}} src={index.productImage1} onClick={()=>callProductDetails(index)}/>
                            
        //                 //     <Card.Body>
        //                 //     <Card.Title as="h6" onClick={()=>callProductDetails(index)}>{index.productName}</Card.Title>
        //                 //     <Card.Text onClick={()=>callProductDetails(index)}>
        //                 //     <s>₹{index.productPrice}</s>  
        //                 //     <strong style={{marginLeft:20}}>₹{index.offerPrice}</strong>
        //                 //     <br></br>
        //                 //     {
        //                 //         index.productHighlights.split(';').map(highlight=>{
        //                 //             return(
        //                 //                 <span>{highlight}<br></br></span>
        //                 //             );  
        //                 //         })
        //                 //     }
        //                 //     </Card.Text>
                            
        //                 //     <br></br>
        //                 //     <Button variant="flat" size="1">Buy</Button>
        //                 //     </Card.Body>
                            
        //                 // </Card>
        //                 // </Col>

        //                 <Row className="filterproductsRow">
                                        
        //                                 <Col md={2}>
        //                                     <Image className="filterproductImage" fluid='true' onClick={() => callProductDetails(index)}  src={index.productImage1} />
        //                                     <br></br>
        //                                     <p>{index.modelNumber}</p>
        //                                 </Col>
        //                                 <Col md={10} >
        //                                     <Row className="innerrow">
        //                                         <Col md={11}>
        //                                             <h4 onClick={() => callProductDetails(index)} style={{ cursor: 'pointer' }}>{index.productName}</h4>
        //                                         </Col>
        //                                         <Col md={1} >
        //                                             {(localStorage.getItem("wishlistproduct")!=null) && (localStorage.getItem("wishlistproduct").includes(index.modelNumber)) ?
        //                                                 <AiFillHeart className="innerrow_wishlist" style={{  fill: 'rgb(255, 88, 88)' }}  size={30} onClick={() => WishlistHandler(index)} /> :
        //                                                 <AiOutlineHeart className="innerrow_wishlist" style={{  }}  size={30} onClick={() => WishlistHandler(index)} />
        //                                             }
        //                                         </Col>

        //                                     </Row>
        //                                     <Row>
        //                                         <Col md={11} className="star">
        //                                         {Math.round(index.averageRating * 10) / 10}<AiFillStar />
                                                
        //                                         </Col>
                                                
        //                                     </Row>
        //                                     <br></br>
        //                                     <Row className="innerrow">
        //                                         <Col md={11}>
        //                                             {
        //                                                 (index.productHighlights!=null)?(
        //                                                     index.productHighlights.split(';').map(highlight => {
        //                                                         return (
        //                                                             <h6 style={{color:'GrayText'}}>•{highlight}<br></br></h6>
        //                                                         );
        //                                                     })
        //                                                 ):(
        //                                                     null
        //                                                 )
                                                        
        //                                             }
        //                                             {/* <h6 style={{color:'GrayText'}}>{index.productHighlights.split}</h6> */}
        //                                         </Col>

        //                                     </Row>
        //                                     <Row className="innerrow">
        //                                         <Col md={10}>
        //                                             {
        //                                                 (index.offerPrice==null) ? (
        //                                                     <h5>MRP: <b>₹{index.productPrice}</b></h5>
        //                                                 ) : (
        //                                                     <h5>MSP: <b style={{ marginRight: "20px", color: "rgb(255,98,98)" }}>₹{index.offerPrice}</b> MRP: <b style={{ textDecorationLine: "line-through", textDecorationStyle: "solid" }}>₹{index.productPrice}</b></h5>
        //                                                 )
        //                                             }
                                                    
                                                    

        //                                         </Col>

        //                                     </Row>

        //                                     <Row className="innerrow">
        //                                         <Form style={{
        //                                             fontWeight: '500',
        //                                             fontSize: '120%'
        //                                         }}>
        //                                             <Form.Check defaultChecked={(comparemodels.includes( index.modelNumber))?(true):(false)} type="checkbox" id={index.modelNumber}  label = "Add To Compare" onChange={()=>handleAddToCompare(index.modelNumber)}/>
        //                                         </Form>

        //                                     </Row>

        //                                     <Row className="innerrow">
        //                                         <Col><Button className="filterproductBtn"  variant="outline-primary" size="1" onClick={()=>addtocart(index.modelNumber)}>Add To Cart</Button></Col>
        //                                         <Col><Button className="filterproductBtn" variant="outline-primary">Buy Now</Button></Col>
                                            

        //                                     </Row>
        //                                 </Col>


        //                             </Row>

                        
        //             )
        //         })) : (null)

        //     }
        //     </Col>
        //         </Row>
                

        //     }
        // </div>

    )
}
export default BrandCatProducts;