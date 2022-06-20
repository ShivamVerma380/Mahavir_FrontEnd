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




function App() {

  const [offerPosters,setOfferPosters] = useState([]);
  const [isOfferPostersFetched,setIsOfferPostersFetched] = useState(false);

  const [categoryDisplay,setcategoryDisplay] = useState([]);
  const [isCategoryDisplayFetched,setIsCategoryDisplayFetched] = useState(false);

  const [Products,setProducts] = useState([]);
  const [isProductsFetched,setIsProductsFetched] = useState(false);

  localStorage.setItem("comparecount",0)

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
    if(!isOfferPostersFetched && !isCategoryDisplayFetched && !isProductsFetched){
      axios({
        method:"get",
        url:"http://localhost:8080/get-offers",
        headers:{
          "Authorization":"Bearer "+localStorage.getItem("jwtToken"),
        }
      }).then(function(response){
        console.log(response);
        if(response.status==200){
          setOfferPosters(response.data);
          setIsOfferPostersFetched(true);
          console.log("OfferPosters",offerPosters);
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

      axios.get("http://localhost:8080/get-products").then(function(response){     
      if(response.status==200){
        console.log("Products",response.data);
        setProducts(response.data);
        setIsProductsFetched(true);
        console.log("Products set",Products)
      }
      
      }).catch(function(error){
        console.log(error);
      })
    }
    
        
  },[]);

  function fetchSlideshow(){
    if(offerPosters.length===0){
      return( 
        null
      );
    }else{
      return( 
        <Slideshow offerPosters={offerPosters}/>
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
      {
        (isProductsFetched)?(
            <Header  productList={Products}/>
        ):(
          null
        )
      }
    

      {/* <AddItem/> */}

      <CategoriesToDisplay categoryDetail={categoryDisplay}/>
      {
        fetchSlideshow()
      
      }

      <MiniPosters/>
      {
        (isProductsFetched)?(
            <Product title="Mahavir Special" className="title" productList={Products}/>
        ):(
          null
        )
      }
      { 
        (isProductsFetched)?(
          <Product title="Deals Of The Day" className="title" productList={Products}/>
        ):(
          null
        )
      }
      

      
      <MiniPosters/>
      {/* <Test productList={Products} /> */}
      <FeatureBrands/>
       
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