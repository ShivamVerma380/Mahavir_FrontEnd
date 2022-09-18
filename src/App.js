import './App.css';
import Header from './components/Header';
import CategoriesToDisplay from './components/DisplayCategories/CategoriesToDisplay';
import Slideshow from './components/offers/Slideshow';
import Product from './components/Items/Product';
import { Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import {useState, useEffect} from "react";
import axios from "axios";
import { Button, ButtonGroup } from 'react-bootstrap';
import Footer from './components/Footer/Footer'
import MiniPosters from './components/offers/MiniPosters';
import Deals from './components/Items/Deals';
import CategoryProductsSwiper from './components/Items/CategoryProductsSwiper';
import ShopByBrands from './components/Items/ShopByBrands';
import { getCookie, setCookie } from "./components/Cookies";

import { RiCompassDiscoverLine } from 'react-icons/ri';
import MiniPostersBottom from './components/offers/MiniPostersBottom';
import HomeBottom from './components/Items/HomeBottom';
import {BsArrowUp} from "react-icons/bs";
import Spinner from 'react-bootstrap/Spinner';


// import Url from url
import url from './Uri';
import LoadingSpinner from './components/LoadingSpinner';

var count = 0;

function App() {

  // console.log("Url",url)

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


  const [isLoading,SetIsLoading] = useState(true);


  // const[initialProducts,setInitialProducts] = useState([]);
  // const[isInitialProductsFetched,setIsInitialProductsFetched] = useState(false);
  
  if (localStorage.getItem("comparecount")==null || localStorage.getItem("comparecount")==undefined) {
    count = 0;
  } else {
    count = localStorage.getItem("comparecount")
  }
  const [countc,setCountc] = useState(count);

  var arr=[];
  
  


  var Auth = "Bearer "+localStorage.getItem("jwtToken");
  // var Auth= "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhQGIuYyIsImV4cCI6MTY1MzY2NDkwOSwiaWF0IjoxNjUzNTc4NTA5fQ.p5sCDqAIwKBC4cxYR2Mkt1o5USCOgKz6lFMJvgZ_IIQ";

  //localStorage.setItem("product",JSON.stringify(products));

  
  useEffect(() => {
    window.scrollTo(0, 0)
    
    // setCountc(getCookie("countcompare"));
    
    


    // var token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzaHJhZGRoYTA5QGdtYWlsLmNvbSIsImV4cCI6MTY1NDY4NDk0MCwiaWF0IjoxNjU0NTg0OTQwfQ.XuIhXTFQYRmsr68C9vElKXsb4VeN3fqW3OoJH7QFJFY4i8DSHtR0u9BdogUAP6KySxYCmB0rI6cQ3ZjaV8BqMA"
    if(!isOfferPostersFetched && !isCategoryDisplayFetched && !isProductsFetched  && !isPostersFetched && !isCatProductFetched && !isDealsFetched){
      
      // console.log("InventoryToken is null")
      
      if(localStorage.getItem("MegaMini")!=null){
        var arr = JSON.parse(localStorage.getItem("MegaMini"))
        arr.map(index=>{
          if(index.isMegaPoster==="YES") {
            // console.log("in if ")
            MegaPoster.push(index)
          }
          else {
            // console.log("in else ")
            MiniPoster.push(index);

          }

        })
        setOfferPosters(arr);
            
        // console.log("OfferPosters",offerPosters);
        // console.log("Mini Posters: ",MiniPoster)
        setIsOfferPostersFetched(true);
      }else{
        axios({
          method:"get",
          url:url+"/get-offers"
        }).then(function(response){
          // console.log(response);
          // console.log("Poster response: ",response.data)
          if(response.status==200){
            response.data.map(index=>{
              if(index.isMegaPoster==="YES") {
                // console.log("in if ")
                MegaPoster.push(index)
              }
              else {
                // console.log("in else ")
                MiniPoster.push(index);
  
              }
              
            })
            
            setOfferPosters(response.data);
            
            // console.log("OfferPosters",offerPosters);
            // console.log("Mini Posters: ",MiniPoster)
            setIsOfferPostersFetched(true);
            localStorage.setItem("MegaMini",JSON.stringify(response.data))
          }
          
        }).catch(function(error){
          console.log("error");
        })
  
      }

      
      axios.get(url+"/refresh-token",{
        headers:{
          "Authorization":"Bearer "+getCookie("jwtToken"),
          "isRefreshToken":"true"
        }
      }).then(function(response){
        if(response.status==200){
          // console.log("In refresh token")
          setCookie("jwtToken",response.data.token,20);
          // setIsCategoryDisplayFetched(true);
          // console.log("Token",response.data.token);
      }
      
    }).catch(function(error){
        console.log("error");
    
      })
      
      if(localStorage.getItem("categoryDisplay")!=null){
        // console.log("In category display cookie")
        var categoriesDisplay = JSON.parse(localStorage.getItem("categoryDisplay"));
        setcategoryDisplay(categoriesDisplay)
        setIsCategoryDisplayFetched(true);
        SetIsLoading(false);
      }else{
        axios.get(url+"/get-categories").then(function(response){
          // console.log(response);
          if(response.status==200){
              setcategoryDisplay(response.data);
              setIsCategoryDisplayFetched(true);
              localStorage.setItem("categoryDisplay",JSON.stringify(response.data),20);
              SetIsLoading(false);
              // console.log(response.data);
          }
          // console.log(response.data);
        }).catch(function(error){
            console.log("error in fetching categories");
            SetIsLoading(false);
        })

      }
     
      
      if(localStorage.getItem("Wishlist")!=null){
        axios.get(url+"/wishlist",{
          headers:{
            "Authorization":"Bearer "+getCookie("jwtToken")
          }
        }).then(
          function(response){
            if(response.status==200){
              response.data.map(index=>{
                  arr.push(index.modelNumber)
              })
              // console.log("Wishlist",arr)
              localStorage.setItem("Wishlist",arr);
              // console.log("Wishlist",response.data);
            }
          }
        ).catch(function(error){
          console.log("Error");
        })
      }
      
      if(localStorage.getItem("Deals")!=null){
        var deals = JSON.parse(localStorage.getItem("Deals"));
        setDeals(deals);
        SetIsDealsFetched(true);
      }else{
        axios.get(url+"/deals").then(
          function(response){
            if(response.status==200){
              // console.log(response.data);
              setDeals(response.data);
              SetIsDealsFetched(true);
              localStorage.setItem("Deals",JSON.stringify(response.data));
              // console.log("Deals: ",deals);
            }
          }).catch(function(error){
            console.log("error in deals");
          }
        )
      }
      
      if(localStorage.getItem("products")!=null){
        var products = JSON.parse(localStorage.getItem("products"));
        setProducts(products);
        setIsProductsFetched(true);
      }else{
        axios.get(url+"/hybrid-posters").then(function(response){     
          if(response.status==200){
            // console.log("Products",response.data);
            setProducts(response.data);
            setIsProductsFetched(true);
            // console.log("Products set",Products)
          }
          
          }).catch(function(error){
            console.log("error in hybrid posters");
          })
      }

      

      if(localStorage.getItem("Posters")!=null){
        var posters = JSON.parse(localStorage.getItem("Posters"));
        setPosters(posters);
        setIsPostersFetched(true);
      }else{
        axios.get(url+"/get-posters").then(function(response){     
          if(response.status==200){
            // console.log("Posters",response.data);
            setPosters(response.data);
            setIsPostersFetched(true);
            localStorage.setItem("Posters",JSON.stringify(response.data));
            // console.log("Posters set",Posters)
          }
          
          }).catch(function(error){
            console.log("error in get-posters");
          })
      }
      

      var urls=[];
            categoryDisplay.map(index => {
                urls.push(axios.get(url+"/get-products-by-category/"+index.category));
            })
            axios.all(urls).then(
                axios.spread((...res)=>{
                    res.map(index=>{
                        
                        catProducts.push(index.data);
                        // filteredProducts.push(index.data);


                    })

                    // console.log("products",catProducts);
                    setIsCatProductFetched(true);

                })
            )
      

      
   
    }
        
  },[]);
  // console.log("deals..",deals);

  function fetchSlideshow(){
    if(MegaPoster.length===0){
      return( 
        null
      );
    }else{
      // console.log("Mega Poster",MegaPoster)
      return( 
        
        <Slideshow offerPosters={MegaPoster}/>
      );
    }
  }


  var mybutton = document.getElementById("myBtn");

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        // console.log("In top Function")
        // document.body.scrollIntoView();
        // window.location.reload();
    }

  

  

  

  

  function getCompareBtn(){
    var modelNumsToCompare = localStorage.getItem("CompareModels");
    //var size = cookies.CompareModelsLength;
    
      return(
        <Button id="comparebtn">Compare {localStorage.getItem("comparecount")}</Button>
      )
    
  }

  // console.log("Compare count: ",localStorage.getItem("comparecount"))

  return (

    <div>
      {/* <button onclick={topFunction} id="myBtn" title="Go to top">Top</button> */}
      <Button  id="myBtn" title="Go to top"><BsArrowUp onClick={topFunction}/></Button>
      {/* {
        isLoading?(<LoadingSpinner/>):(null)
      }
       */}
      {/* <-------------------Header/> */}
      {
        (isProductsFetched)?(
            <Header/>
        ):(
          null
        )
      }
     <Header/>
      <div >
      {
        (isCategoryDisplayFetched)?(
          <CategoriesToDisplay categoryDetail={categoryDisplay}/>
        ):(
          // <Spinner animation="border" variant="warning" />
          <CategoriesToDisplay categoryDetail={[]}/>
        )
      }
      
{/* <Spinner animation="border" /> */}

     {
        fetchSlideshow()
      
      } 
      {
        (isDealsFetched)?(
          deals.map(index=>{
            localStorage.setItem("dealindex",index)
            const dealproducts = JSON.stringify(index.products);
            localStorage.setItem("dealproduct", dealproducts);
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
    
     

      
      
      
      
      <ShopByBrands/>
      <MiniPostersBottom MiniPosters={MiniPoster}/>

      

    
     <Footer/>
     </div>
     
    </div>
    
     
  );
}

export default App;