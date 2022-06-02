import './App.css';
import Header from './components/Header';
import CategoriesToDisplay from './components/CategoriesToDisplay';
import Slideshow from './components/Slideshow';
import Product from './components/Items/Product';
import { Router, Routes, Route } from 'react-router-dom';
import {useState, useEffect} from "react";
import axios from "axios";
import AdminHeader from './components/Admin/AdminHeader';
import ShowSearchResults from './components/ShowSearchResults';
import Test from './components/Test';


function App() {

  const [offerPosters,setOfferPosters] = useState([]);
  const [isOfferPostersFetched,setIsOfferPostersFetched] = useState(false);

  const [categoryDisplay,setcategoryDisplay] = useState([]);
  const [isCategoryDisplayFetched,setIsCategoryDisplayFetched] = useState(false);

  const [Products,setProducts] = useState([]);
  const [isProductsFetched,setIsProductsFetched] = useState(false);


  var Auth = "Bearer "+localStorage.getItem("jwtToken");
  // var Auth= "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhQGIuYyIsImV4cCI6MTY1MzY2NDkwOSwiaWF0IjoxNjUzNTc4NTA5fQ.p5sCDqAIwKBC4cxYR2Mkt1o5USCOgKz6lFMJvgZ_IIQ";

  //localStorage.setItem("product",JSON.stringify(products));

  useEffect(() => {
    
    var token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhQGJjYWEiLCJleHAiOjE2NTQyNTU0NjEsImlhdCI6MTY1NDE2OTA2MX0.wp0ayBFKPvvEvK2umywWw8dD9-gRVQvAR_-f82nn1_0"
    if(!isOfferPostersFetched){
      axios({
        method:"get",
        url:"http://localhost:8080/get-offers",
        headers:{
          "Authorization":"Bearer "+token,
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
    }
    
    if(!isCategoryDisplayFetched){
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
    }

    if(!isProductsFetched){
      axios.get("http://localhost:8080/get-products").then(function(response){
      console.log("Products",response.data);
      if(response.status==200){
        setProducts(response.data);
        setIsProductsFetched(true);
        console.log("Products set",Products)
      }
      
      }).catch(function(error){
        console.log(error);
      })
    }    
  },[]);


  return (
    <div className="App" >
      
      <Header/>

      {/* {
        (isCategoryDisplayFetched)?(
          <CategoriesToDisplay categoryDetail={categoryDisplay}/>
        ):(console.log("Categories not fetched"))

        (isOfferPostersFetched)?(
          <Slideshow offerPosters={offerPosters}/>
        ):(console.log("Offers not fetched"))

        (isProductsFetched)?(
          <Product title="Mahavir Special" productList={Products}/>
        ):(console.log("Not products fetched"))

        (isProductsFetched)?(
          <Product title="Deals Of The Day" productList={Products}/>
        ):(console.log("Products not fetched"))
      } */}
      <CategoriesToDisplay categoryDetail={categoryDisplay}/>
      <Slideshow offerPosters={offerPosters}/>
      <Product title="Mahavir Special" productList={Products}/>
      <Product title="Deals Of The Day" productList={Products}/>
      <Test/>
       
      
    </div>
  );
}

export default App;
