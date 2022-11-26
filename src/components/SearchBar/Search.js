import axios from "axios";
import React, { useEffect, useState } from "react";
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { useNavigate } from "react-router-dom";
import { AiFillWindows } from "react-icons/ai";
import "./Search.css";
import url from "../../Uri";
function Search(){
    // console.log("inside search");
    const[products,SetProducts] = useState([]);
    const[isProductsFetched,setIsProductsFetched] = useState(false);

    const navigate = useNavigate();

    

    useEffect(()=>{
        if(!isProductsFetched){
            axios.get(url+"/get-search-products")
                .then(function(response){
                    if(response.status==200) {
                        // response.data.map(index=>{
                        //   if(!index.productHighlights==null && !index.productName==null){
                        //     products.push(index);
                        //   }
                        // })
                        SetProducts(response.data);
                        setIsProductsFetched(true);
                    }
                }).catch(function(error){
                    console.log("error /get-search-products");
                })
        }
    })
    
      const handleOnSelect = (item) => {
        // the item selected
        // console.log(item.name)
        localStorage.setItem("productSelected",item.id);
        localStorage.setItem("Category",item.category);
        localStorage.setItem("SubCategory",item.subCategory);
        localStorage.setItem("SubSubCategory",item.subSubCategory);
        // console.log("Sub: ",localStorage.getItem("SubCategory"))
        if(item.type==="category"){
          localStorage.setItem("Category",item.name);
          localStorage.removeItem("SubCategory")
          localStorage.removeItem("SubSubCategory")
          var arr = window.location.href.split("/")
          // console.log("Arr: ",arr)
          if(arr.length==5) {
            navigate("/categoryProductsall");
            window.location.reload()
            
          }
          else {
            navigate("/categoryProductsall");
          }
          
        }else if(item.type==="subSubCategory"){
          localStorage.setItem("Model Number", item.modelNumbers);
          // alert(item.name);
          //navigate to Select Category Products
          // navigate("")
          // console.log("window.location.href",window.location.href);
          var str = window.location.href.slice(18);
          var arr = str.split("/");

          // console.log("item......",item)
          // localStorage.setItem("Category",item.category)
          // localStorage.setItem("SubCategory",item.subCategory)
          // localStorage.setItem("SubSubCategory",item.subSubCategory)
          // // localStorage.setItem("SubSubCategory",item.)
          // navigate("/"+item.category+"/"+"Brand"+"/"+item.subSubCategory);
          // window.location.reload()

          // console.log("arr",arr);
          if(arr.length==5){
            localStorage.setItem("Category",item.category)
            localStorage.setItem("SubCategory",item.subCategory)
            localStorage.setItem("SubSubCategory",item.subSubCategory)
            navigate("/"+item.category+"/"+item.subCategory+"/"+item.subSubCategory); 
            window.location.reload();
          }else{
            localStorage.setItem("Category",item.category)
            localStorage.setItem("SubCategory",item.subCategory)
            localStorage.setItem("SubSubCategory",item.subSubCategory)
            navigate("/"+item.category+"/"+item.subCategory+"/"+item.subSubCategory);  
            // window.location.reload();
          } 
        }else{
          if(window.location.href.includes("productDetails"))
            window.location.reload();
          else
            navigate("/productDetails");
        }
      }
    
      
    
      const formatResult = (item) => {
        return (
          <>
            <span style={{ display: 'block', textAlign: 'left', color:"white" }}>{item.name}</span>
          </>
        )
      }
    
      return (
        (isProductsFetched)?(
            <div  className="search">
              <ReactSearchAutocomplete 
                styling={
                  {
                    backgroundColor: "black",
                    // hoverBackgroundColor:"white",
                    hoverBackgroundColor:"grey",
                    placeholderColor: "grey",
                    iconColor: "grey",
                    color: "white",
                  }
                }
                items={products}
                fuseOptions={{keys:["name","price","highlights","category","subSubCategory","subSubCategory"]}}
                resultStringKeyName="name"
                onSelect={handleOnSelect}
                formatResult={formatResult}
                placeholder="Search"
              />
        </div>
        ):(
            null
        )
      )
}

export default Search;