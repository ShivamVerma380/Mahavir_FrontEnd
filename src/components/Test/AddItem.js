import React, { useEffect, useState } from "react";
import {Navbar,FormControl,Button,Form,NavDropdown, Nav, FormCheck} from 'react-bootstrap';
import { Col, Row } from "reactstrap";
import axios from "axios";


function AddItem(){

    const [products,setProducts] = React.useState([]);
    const [isProductsFetched,setIsProductsFetched] = React.useState(false);

    useEffect(()=>{
        if(!isProductsFetched){
            axios.get("http://localhost:8080/get-products").then(function(response){     
            if(response.status==200){
              console.log("Products",response.data);
              setProducts(response.data);
              setIsProductsFetched(true);
              console.log("Products set",products)
            }
            
            }).catch(function(error){
              console.log(error);
            })
          }   

    });
         

    function getMap(){

    }
    

    return(
        
        
        (isProductsFetched)?(
            products.map(index=>{
                //var subCategoryMap =  new Map(index.subCategoryMap);
                console.log(index.productInformation)
                // console.log(subCategoryMap);
                
                for(var key in index.productInformation){
                    
                    // <p>{key}:{index.subCategoryMap[key]}</p>
                    console.log(key,"     ",index.productInformation[key]);    
                    for(var subItems in index.productInformation[key]){
                        console.log(subItems,"    ",index.productInformation[key][subItems])
                    }
                    
                }
                
                 
            })
            
            
        ):(
            
                <h1>Product Not Fetched</h1>
        
        )
            
    );

}

export default AddItem;