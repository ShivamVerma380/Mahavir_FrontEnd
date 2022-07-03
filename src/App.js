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




function App() {

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

  
  
  localStorage.setItem("comparecount",0)

  var count = 0;

  var element = <div></div>;

  //const[cookies,SetCookie] = useCookies(["modelNumsToCompare"])

  console.log("CompareModels",localStorage.getItem("CompareModels"))
  // console.log("Cookies size",cookies.CompareModelsLength)

  //SetCookie("CompareModels","IPH287373");



  // console.log("CompareModes",localStorage.getItem("CompareModels"));


  var Auth = "Bearer "+localStorage.getItem("jwtToken");
  // var Auth= "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhQGIuYyIsImV4cCI6MTY1MzY2NDkwOSwiaWF0IjoxNjUzNTc4NTA5fQ.p5sCDqAIwKBC4cxYR2Mkt1o5USCOgKz6lFMJvgZ_IIQ";

  //localStorage.setItem("product",JSON.stringify(products));

  
  
  useEffect(() => {

    
    // var token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzaHJhZGRoYTA5QGdtYWlsLmNvbSIsImV4cCI6MTY1NDY4NDk0MCwiaWF0IjoxNjU0NTg0OTQwfQ.XuIhXTFQYRmsr68C9vElKXsb4VeN3fqW3OoJH7QFJFY4i8DSHtR0u9BdogUAP6KySxYCmB0rI6cQ3ZjaV8BqMA"
    if(!isOfferPostersFetched && !isCategoryDisplayFetched && !isProductsFetched  && !isPostersFetched && !isCatProductFetched && !isDealsFetched){
      axios({
        method:"get",
        url:"http://localhost:8080/get-offers"
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
      axios.get("http://localhost:8080/get-categories").then(function(response){
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

      axios.get("http://localhost:8080/deals").then(
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

      axios.get("http://localhost:8080/hybrid-posters").then(function(response){     
      if(response.status==200){
        console.log("Products",response.data);
        setProducts(response.data);
        setIsProductsFetched(true);
        console.log("Products set",Products)
      }
      
      }).catch(function(error){
        console.log(error);
      })

      axios.get("http://localhost:8080/get-posters").then(function(response){     
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
                urls.push(axios.get("http://localhost:8080/get-products-by-category/"+index.category));
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

  function fetchMiniPoster(){
    if(MiniPoster.length===0){
      return( 
        null
      );
    }
    else if(MiniPoster.length>6){
      // var array = MiniPoster.slice(0,6)
      // var miniarr = MiniPoster.slice(6)
      // setMiniPoster(miniarr)
      count+=6;
      console.log("Mini: ",MiniPoster.slice(6))
      return( 

        
        <MiniPosters MiniPosters={MiniPoster.slice(count-6,count)}/>
      );
    }

    else if(MiniPoster.length<=6) {
      return (
        <MiniPosters MiniPosters={MiniPoster}/>
      );
      
    }
    
  }

  function fetchMiniPosterTwo(){
    if(MiniPoster.length===0){
      return( 
        null
      );
    }
    else if(MiniPoster.length>6){
      // var array = MiniPoster.slice(0,6)
      // var miniarr = MiniPoster.slice(6)
      // setMiniPoster(miniarr)
      // while(count<=MiniPoster.length) {
        
      //   count+=6;
      //   element=<MiniPosters MiniPosters={MiniPoster.slice(count-6,count)}/>
      //   console.log("Mini: ",MiniPoster.slice(6))
      return( 
        
        <MiniPosters MiniPosters={MiniPoster.slice(count)}/>
      );
      
      
    }

    else if(MiniPoster.length<=6) {
      return (
        <MiniPosters MiniPosters={MiniPoster}/>
      );
      
    }
    
  }

  

  function getCompareBtn(){
    var modelNumsToCompare = localStorage.getItem("CompareModels");
    //var size = cookies.CompareModelsLength;
    
      return(
        <Button id="comparebtn">Compare</Button>
      )
    
  }

  return (

    <div className="App" >
      <Header/>
      {
        (isProductsFetched)?(
            <Header/>
        ):(
          null
        )
      }
    

      {/* <AddItem/> */}

      <CategoriesToDisplay categoryDetail={categoryDisplay}/>
      {
        fetchSlideshow()
      
      }
      <br></br>
      <br></br>
      {
        (isDealsFetched)?(
          deals.map(index=>{
            return(
              <Deals title={index.title}/>
            )
          })
        ):(null)
      }
      
      <Deals/>
    
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
    <br></br>
    <br></br>
    
     

      
      
      {
        (isOfferPostersFetched)?(
          fetchMiniPoster()
        ) : (null)
        
      }

      

      {/* <MiniPosters MiniPosters={MiniPoster}/> */}
      
      {/* <Product title="Mahavir Special" className="title" productList={Products}/>
      <Product title="Deals Of The Day" className="title" productList={Products}/> */}
      {
        fetchMiniPosterTwo()
      }
      <ShopByBrands/>
      {/* <MiniPosters/> */}
      {/* <Test productList={Products} /> */}
      {/* <FeatureBrands posterList={Posters}/> */}
       
      {/* <Button id="comparebtn">Compare{localStorage.getItem("comparecount")}</Button> */}
      {
        getCompareBtn()
     }

    
     <Footer/>
     <DeveloperPage/>
    </div>
    
     
  );
}

export default App;