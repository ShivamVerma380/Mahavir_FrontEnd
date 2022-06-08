import {useState, useEffect} from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
const InitialHistory = [
    // const [InitialHistory,setProducts] = useState([]);
    // const [isProductsFetched,setIsProductsFetched] = useState(false);
    // localStorage.setItem("comparecount",0)


    // var Auth = "Bearer "+localStorage.getItem("jwtToken");
    // useEffect(() => {
    
    //     var token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzaGl2YW1AZ21haWwuY29tbW1zc2RzIiwiZXhwIjoxNjU0NjE4ODgwLCJpYXQiOjE2NTQ1MTg4ODB9.kDTGQbDIDVTXqtEkm_35VqXzpWwJ8wUxOw8Cd8Wrgi0"
    
    //     if(!isProductsFetched){
    //       axios.get("http://localhost:8080/get-products").then(function(response){     
    //       if(response.status==200){
    //         console.log("Products",response.data);
    //         setProducts(response.data);
    //         setIsProductsFetched(true);
    //         console.log("Products set",InitialHistory)
    //       }
          
    //       }).catch(function(error){
    //         console.log(error);
    //       })
    //     }    
    //   },[]);
    
    //   return (
    //       <>
    //       <SearchBar InitialHistory={InitialHistory}/>
    //       </>
    //   );
    
    {
      text: "macbook air",
      icon:
        "https://rukminim1.flixcart.com/image/100/100/kp5sya80/screen-guard/tempered-glass/o/v/n/apple-macbook-air-m1-13-3-inch-lightwings-original-imag3gh5xftgbpg3.jpeg?q=90"
    },
    {
      text: "macbook pro",
      icon:
        "https://rukminim1.flixcart.com/image/100/100/kp5sya80/screen-guard/tempered-glass/o/v/n/apple-macbook-air-m1-13-3-inch-lightwings-original-imag3gh5xftgbpg3.jpeg?q=90"
    },
    {
      text: "t shirt",
      icon:
        "https://rukminim1.flixcart.com/image/100/100/khmbafk0-0/t-shirt/w/j/s/xs-t322-blwh-seven-rocks-original-imafxhagtyj2xvpn.jpeg?q=90"
    },
    {
        text: "macbook air",
        icon:
          "https://rukminim1.flixcart.com/image/100/100/kp5sya80/screen-guard/tempered-glass/o/v/n/apple-macbook-air-m1-13-3-inch-lightwings-original-imag3gh5xftgbpg3.jpeg?q=90"
      },
      {
        text: "macbook pro",
        icon:
          "https://rukminim1.flixcart.com/image/100/100/kp5sya80/screen-guard/tempered-glass/o/v/n/apple-macbook-air-m1-13-3-inch-lightwings-original-imag3gh5xftgbpg3.jpeg?q=90"
      },
      {
        text: "t shirt",
        icon:
          "https://rukminim1.flixcart.com/image/100/100/khmbafk0-0/t-shirt/w/j/s/xs-t322-blwh-seven-rocks-original-imafxhagtyj2xvpn.jpeg?q=90"
      },
      {
        text: "macbook air",
        icon:
          "https://rukminim1.flixcart.com/image/100/100/kp5sya80/screen-guard/tempered-glass/o/v/n/apple-macbook-air-m1-13-3-inch-lightwings-original-imag3gh5xftgbpg3.jpeg?q=90"
      },
      {
        text: "macbook pro",
        icon:
          "https://rukminim1.flixcart.com/image/100/100/kp5sya80/screen-guard/tempered-glass/o/v/n/apple-macbook-air-m1-13-3-inch-lightwings-original-imag3gh5xftgbpg3.jpeg?q=90"
      },
      {
        text: "t shirt",
        icon:
          "https://rukminim1.flixcart.com/image/100/100/khmbafk0-0/t-shirt/w/j/s/xs-t322-blwh-seven-rocks-original-imafxhagtyj2xvpn.jpeg?q=90"
      },
      {
        text: "macbook air",
        icon:
          "https://rukminim1.flixcart.com/image/100/100/kp5sya80/screen-guard/tempered-glass/o/v/n/apple-macbook-air-m1-13-3-inch-lightwings-original-imag3gh5xftgbpg3.jpeg?q=90"
      },
      {
        text: "macbook pro",
        icon:
          "https://rukminim1.flixcart.com/image/100/100/kp5sya80/screen-guard/tempered-glass/o/v/n/apple-macbook-air-m1-13-3-inch-lightwings-original-imag3gh5xftgbpg3.jpeg?q=90"
      },
      {
        text: "t shirt",
        icon:
          "https://rukminim1.flixcart.com/image/100/100/khmbafk0-0/t-shirt/w/j/s/xs-t322-blwh-seven-rocks-original-imafxhagtyj2xvpn.jpeg?q=90"
      },
      {
        text: "macbook air",
        icon:
          "https://rukminim1.flixcart.com/image/100/100/kp5sya80/screen-guard/tempered-glass/o/v/n/apple-macbook-air-m1-13-3-inch-lightwings-original-imag3gh5xftgbpg3.jpeg?q=90"
      },
      {
        text: "macbook pro",
        icon:
          "https://rukminim1.flixcart.com/image/100/100/kp5sya80/screen-guard/tempered-glass/o/v/n/apple-macbook-air-m1-13-3-inch-lightwings-original-imag3gh5xftgbpg3.jpeg?q=90"
      },
      {
        text: "t shirt",
        icon:
          "https://rukminim1.flixcart.com/image/100/100/khmbafk0-0/t-shirt/w/j/s/xs-t322-blwh-seven-rocks-original-imafxhagtyj2xvpn.jpeg?q=90"
      },
      {
        text: "macbook air",
        icon:
          "https://rukminim1.flixcart.com/image/100/100/kp5sya80/screen-guard/tempered-glass/o/v/n/apple-macbook-air-m1-13-3-inch-lightwings-original-imag3gh5xftgbpg3.jpeg?q=90"
      },
      {
        text: "macbook pro",
        icon:
          "https://rukminim1.flixcart.com/image/100/100/kp5sya80/screen-guard/tempered-glass/o/v/n/apple-macbook-air-m1-13-3-inch-lightwings-original-imag3gh5xftgbpg3.jpeg?q=90"
      },
      {
        text: "t shirt",
        icon:
          "https://rukminim1.flixcart.com/image/100/100/khmbafk0-0/t-shirt/w/j/s/xs-t322-blwh-seven-rocks-original-imafxhagtyj2xvpn.jpeg?q=90"
      }
];
  //search-server-icon "https://rukminim1.flixcart.com/www/100/100/promos/19/07/2018/cc6daa23-e09c-40d8-a4e1-ead447bf80fa.png?q=90"
  
  export default InitialHistory;