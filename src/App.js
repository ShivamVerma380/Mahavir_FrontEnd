import './App.css';
import Header from './components/Header';
import CategoriesToDisplay from './components/DisplayCategories/CategoriesToDisplay';
import Slideshow from './components/offers/Slideshow';
import Product from './components/Items/Product';
import { Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import {useState, useEffect} from "react";
import axios from "axios";
import AdminHeader from './components/Admin/AdminHeader';
import ShowSearchResults from './components/ShowSearchResults';
import Test from './components/Test';
import { Button } from 'react-bootstrap';
import Footer from './components/Footer/Footer'
import FeatureBrands from './components/Items/FeatureBrands';
import MiniPosters from './components/offers/MiniPosters';
import DeveloperPage from './components/DeveloperPage';
import Deals from './components/Items/Deals';
import CategoryProductsSwiper from './components/Items/CategoryProductsSwiper';
import ShopByBrands from './components/Items/ShopByBrands';
import { getCookie, setCookie } from "./components/Cookies";

import {Helmet} from 'react-helmet';
import { RiCompassDiscoverLine } from 'react-icons/ri';
import MiniPostersBottom from './components/offers/MiniPostersBottom';
import HomeBottom from './components/Items/HomeBottom';

var count = 0;
function App() {

  localStorage.setItem("quantity",1);

  const [offerPosters,setOfferPosters] = useState([]);
  const [isOfferPostersFetched,setIsOfferPostersFetched] = useState(false);

  const [categoryDisplay,setcategoryDisplay] = useState([]);
  const [isCategoryDisplayFetched,setIsCategoryDisplayFetched] = useState(false);

  const [Products,setProducts] = useState([]);
  const [isProductsFetched,setIsProductsFetched] = useState(false);

  const [CategoryProducts,setCategoryProducts] = useState([]);

  const [Posters, setPosters] = useState([]);
  const [isPostersFetched, setIsPostersFetched] = useState(false);

  const [deals,setDeals] = useState([]);
  const [isDealsFetched,SetIsDealsFetched] = useState(false);

  const [MegaPoster,setMegaPoster] = useState([]);
  const [MiniPoster,setMiniPoster] = useState([]);
  const [catProducts,setCatProducts] = useState([]);
  const [isCatProductFetched, setIsCatProductFetched] = useState(false);
  
  if (localStorage.getItem("comparecount")==null || localStorage.getItem("comparecount")==undefined) {
    count = 0;
  } else {
    count = localStorage.getItem("comparecount")
  }
  const [countc,setCountc] = useState(count);
  
  // while (true) {
  //   if (localStorage.getItem("comparecount")!=countc) {
  //     setCountc(localStorage.getItem("comparecount"))
  //   }
  // }

  
  
  // localStorage.setItem("comparecount",0)

  
 
  // console.log("Count comp: ",getCookie("countcompare"))

  var element = <div></div>;

  //const[cookies,SetCookie] = useCookies(["modelNumsToCompare"])

  console.log("CompareModels",localStorage.getItem("CompareModels"))
  console.log(localStorage.getItem("dealproduct"))
  console.log("Index",localStorage.getItem("dealindex"))
  console.log("Count C: ",countc)
  // console.log("Cookies size",cookies.CompareModelsLength)

  //SetCookie("CompareModels","IPH287373");



  // console.log("CompareModes",localStorage.getItem("CompareModels"));


  var Auth = "Bearer "+localStorage.getItem("jwtToken");
  // var Auth= "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhQGIuYyIsImV4cCI6MTY1MzY2NDkwOSwiaWF0IjoxNjUzNTc4NTA5fQ.p5sCDqAIwKBC4cxYR2Mkt1o5USCOgKz6lFMJvgZ_IIQ";

  //localStorage.setItem("product",JSON.stringify(products));

  var uri = "http://mahavirbackend-env.eba-bkwmcbpz.us-east-1.elasticbeanstalk.com";
  // var uri = "http://localhost:8080";
  
  useEffect(() => {
    
    // setCountc(getCookie("countcompare"));
    


    // var token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzaHJhZGRoYTA5QGdtYWlsLmNvbSIsImV4cCI6MTY1NDY4NDk0MCwiaWF0IjoxNjU0NTg0OTQwfQ.XuIhXTFQYRmsr68C9vElKXsb4VeN3fqW3OoJH7QFJFY4i8DSHtR0u9BdogUAP6KySxYCmB0rI6cQ3ZjaV8BqMA"
    if(!isOfferPostersFetched && !isCategoryDisplayFetched && !isProductsFetched  && !isPostersFetched && !isCatProductFetched && !isDealsFetched){
      
      console.log("InventoryToken is null")
      var form_data_body={
        "UserName":"MahaStock",
        "password":"abcd@123"
      }
      if(localStorage.getItem("InventoryToken")==null){
        axios.post("http://116.72.253.118:9896/Login/chkUserLogin",form_data_body)
        .then(function(response){
          localStorage.setItem("InventoryToken",response.data.status);
          console.log("InventoryToken",localStorage.getItem("InventoryToken"));
        }).catch(function(error){
          console.log("error",error);
        })
      }
      

      axios({
        method:"get",
        url:uri+"/get-offers"
      }).then(function(response){
        console.log(response);
        console.log("Poster response: ",response.data)
        if(response.status==200){
          response.data.map(index=>{
            if(index.isMegaPoster==="YES") {
              console.log("in if ")
              MegaPoster.push(index)
            }
            else {
              console.log("in else ")
              MiniPoster.push(index);

            }
            
          })
          
          setOfferPosters(response.data);
          
          console.log("OfferPosters",offerPosters);
          console.log("Mini Posters: ",MiniPoster)
          setIsOfferPostersFetched(true);
        }
        
      }).catch(function(error){
        console.log("error",error);
      })

      axios.get(uri+"/refresh-token",{
        headers:{
          "Authorization":"Bearer "+getCookie("jwtToken"),
          "isRefreshToken":"true"
        }
      }).then(function(response){
        if(response.status==200){
          console.log("In refresh token")
          setCookie("jwtToken",response.data.token,20);
          // setIsCategoryDisplayFetched(true);
          console.log("Token",response.data.token);
      }
      
    }).catch(function(error){
        console.log(error);
    
      })


      axios.get(uri+"/get-categories").then(function(response){
        console.log(response);
        if(response.status==200){
            setcategoryDisplay(response.data);
            setIsCategoryDisplayFetched(true);
            console.log(response.data);
        }
        console.log(response.data);
      }).catch(function(error){
          console.log(error);
      })

      axios.get(uri+"/deals").then(
            function(response){
              if(response.status==200){
                console.log(response.data);
                setDeals(response.data);
                SetIsDealsFetched(true);
                console.log("Deals: ",deals);
              }
            }).catch(function(error){
              console.log("error",error);
            }
          )

      axios.get(uri+"/hybrid-posters").then(function(response){     
      if(response.status==200){
        console.log("Products",response.data);
        setProducts(response.data);
        setIsProductsFetched(true);
        console.log("Products set",Products)
      }
      
      }).catch(function(error){
        console.log(error);
      })

      axios.get(uri+"/get-posters").then(function(response){     
      if(response.status==200){
        console.log("Posters",response.data);
        setPosters(response.data);
        setIsPostersFetched(true);
        console.log("Posters set",Posters)
      }
      
      }).catch(function(error){
        console.log(error);
      })

      var urls=[];
            categoryDisplay.map(index => {
                urls.push(axios.get(uri+"/get-products-by-category/"+index.category));
            })
            axios.all(urls).then(
                axios.spread((...res)=>{
                    res.map(index=>{
                        
                        catProducts.push(index.data);
                        // filteredProducts.push(index.data);


                    })

                    console.log("products",catProducts);
                    setIsCatProductFetched(true);

                })
            )
      

      // axios.get("http://localhost:8080/get-products-by-category/MOBILES").then(function(response){
      //   console.log(response);
      //   if(response.status==200){
      //       setCategoryProducts(response.data);
      //       console.log("Products By Cat: ",response.data);
      //   }
        
      // }).catch(function(error){
      //     console.log(error);
      // })

    }
    
        
  },[]);
  console.log("deals..",deals);

  function fetchSlideshow(){
    if(MegaPoster.length===0){
      return( 
        null
      );
    }else{
      return( 
        <Slideshow offerPosters={MegaPoster}/>
      );
    }
  }

  // function fetchMiniPoster(){
  //   if(MiniPoster.length===0){
  //     return( 
  //       null
  //     );
  //   }
  //   else if(MiniPoster.length>6){
  //     // var array = MiniPoster.slice(0,6)
  //     // var miniarr = MiniPoster.slice(6)
  //     // setMiniPoster(miniarr)
  //     count+=6;
  //     console.log("Mini: ",MiniPoster.slice(6))
  //     return( 

        
  //       <MiniPosters MiniPosters={MiniPoster.slice(count-6,count)}/>
  //     );
  //   }

  //   else if(MiniPoster.length<=6) {
  //     return (
  //       <MiniPosters MiniPosters={MiniPoster}/>
  //     );
      
  //   }
    
  // }

  function HandleCompareClick() {
    
  }

  // function fetchMiniPosterTwo(){
  //   if(MiniPoster.length===0){
  //     return( 
  //       null
  //     );
  //   }
  //   else if(MiniPoster.length>6){
  //     // var array = MiniPoster.slice(0,6)
  //     // var miniarr = MiniPoster.slice(6)
  //     // setMiniPoster(miniarr)
  //     // while(count<=MiniPoster.length) {
        
  //     //   count+=6;
  //     //   element=<MiniPosters MiniPosters={MiniPoster.slice(count-6,count)}/>
  //     //   console.log("Mini: ",MiniPoster.slice(6))
  //     return( 
        
  //       <MiniPosters MiniPosters={MiniPoster.slice(count)}/>
  //     );
      
      
  //   }

  //   else if(MiniPoster.length<=6) {
  //     return (
  //       <MiniPosters MiniPosters={MiniPoster}/>
  //     );
      
  //   }
    
  // }

  

  function getCompareBtn(){
    var modelNumsToCompare = localStorage.getItem("CompareModels");
    //var size = cookies.CompareModelsLength;
    
      return(
        <Button id="comparebtn">Compare {localStorage.getItem("comparecount")}</Button>
      )
    
  }

  console.log("Compare count: ",localStorage.getItem("comparecount"))

  return (

    <div className="App" >
      
      {/* <-------------------Header/> */}
      {
        (isProductsFetched)?(
            <Header/>
        ):(
          null
        )
      }
     <Header/>
     
      
      {/* <AddItem/> */}

      <CategoriesToDisplay categoryDetail={categoryDisplay}/>
      <div>
     {
        fetchSlideshow()
      
      } 
      {
        (isDealsFetched)?(
          deals.map(index=>{
            console.log("Index ",index);
            localStorage.setItem("dealindex",index)
            const dealproducts = JSON.stringify(index.products);
            localStorage.setItem("dealproduct", dealproducts);
            console.log("Deal products: ",dealproducts)
            // localStorage.setItem("dealproduct",index.products)
            return(
              <Deals deals={index}/>
            )
          })

        ):(null)
      }
      
      <MiniPosters MiniPosters={MiniPoster}/>
      
      
      {/* <Deals/> */}
    
    {
      (isCategoryDisplayFetched)? ( 
        categoryDisplay.map(index=>{
          
          return(
          <div>
          <CategoryProductsSwiper cattitle={index.category}/> 
          <br></br>
          </div>
          )
        })
      ) : (null)
    }
    
     

      
      
      {/* {
        (isOfferPostersFetched)?(
          fetchMiniPoster()
        ) : (null)
        
      } */}

      

      {/* <MiniPosters MiniPosters={MiniPoster}/> */}
      
      {/* <Product title="Mahavir Special" className="title" productList={Products}/>
      <Product title="Deals Of The Day" className="title" productList={Products}/> */}
      {/* {
        fetchMiniPosterTwo()
      } */}
      
      <ShopByBrands/>
      <MiniPostersBottom MiniPosters={MiniPoster}/>

      {/* <MiniPosters/> */}
      {/* <Test productList={Products} /> */}
      {/* <FeatureBrands posterList={Posters}/> */}
       
      {/* <Button id="comparebtn">Compare{localStorage.getItem("comparecount")}</Button> */}
      {/* {
        getCompareBtn()
     } */}

     <HomeBottom/>

    
     <Footer/>
     </div>
     {/* <DeveloperPage/> */}
    </div>
    
     
  );
}

export default App;