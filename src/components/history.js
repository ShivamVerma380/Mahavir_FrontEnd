import {useState, useEffect} from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
// const searchResults = [];

  function GetSearchResults(searchTerm) {
    const [initialHistory,setProducts] = useState([]);
    const [isProductsFetched,setIsProductsFetched] = useState(false);
    // localStorage.setItem("comparecount",0)


    var Auth = "Bearer "+localStorage.getItem("jwtToken");
    useEffect(() => {
    
        var token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJrZXRha2loQGdtYWlsLmNvbSIsImV4cCI6MTY1NDk0NzU2NiwiaWF0IjoxNjU0ODQ3NTY2fQ.C3pKuEQ9LmVTA0odzSJDUrrYJUX5iKUEnGEQ4vXNXPM"
    
        if(!isProductsFetched){
          axios.get("http://localhost:8080/get-products").then(function(response){     
          if(response.status==200){
            console.log("in history.js",response.data);
            setProducts(response.data);
            setIsProductsFetched(true);
            console.log("Products set in history.js",initialHistory)
          }
          
          }).catch(function(error){
            console.log(error);
          })
        }    
      },[]);
      // for(i in initialHistory){

      // }
    
    //   return (
    //       <>
    //       <SearchBar InitialHistory={InitialHistory}/>
    //       </>
    //   );
  }
    const searchResults =[
    {
      text: "macbook air",
      description: "macbook air is a laptop",
      highlights: ["macbook air", "laptop"],
      price:"$1000",
      modelno:1001
    },
    {
      text: "macbook pro",
      description: "macbook pro is best laptop",
      highlights: ["macbook pro", "laptop"],
      price:"$2000",
      modelno:1002
      },
    {
      text: "t shirt",
      description: "t shirt is a cloth",
      highlights: ["t shirt", "cloth"],
      price:"$100",
      modelno:1003
    },
    {
        text: "macbook air",
        description: "macbook air is a laptop",
        highlights: ["macbook air", "laptop"],
        price:"$1000",
        modelno:1004
      },
      {
        text: "macbook pro",
        description: "macbook pro is best laptop",
        highlights: ["macbook pro", "laptop"],
        price:"$2000",
        modelno:1005
      },
      {
        text: "t shirt",
        description: "t shirt is a cloth",
        highlights: ["t shirt", "cloth"],
        price:"$100",
        modelno:1006
        }
      ];

  //search-server-icon "https://rukminim1.flixcart.com/www/100/100/promos/19/07/2018/cc6daa23-e09c-40d8-a4e1-ead447bf80fa.png?q=90"
  
  export default searchResults;
  export {GetSearchResults};