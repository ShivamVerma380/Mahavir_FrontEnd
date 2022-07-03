import React, { useEffect, useState } from "react";
import { Row, Col } from "reactstrap";
import axios from "axios";
import BrandDetails from "./BrandDetails";
import { Navigate, useNavigate } from "react-router-dom";



const ShopByBrands = () => {

    const navigate = useNavigate();

    const [brands,setBrands] = useState([]);
    const [isBrandsFetched,setIsBrandsFetched] = useState(false);

    useEffect (()=>{
        if (!isBrandsFetched) {
            axios.get("http://localhost:8080/excel/shopByBrands").then(
            function(response){
              if(response.status==200){
                console.log(response.data);
                setBrands(response.data);
                setIsBrandsFetched(true);
              }
            }).catch(function(error){
              console.log("error",error);
            }
          );
        }
        
    })

    

    function BrandClickHandler(index) {
        localStorage.setItem("Index:",index)
        localStorage.setItem("brandName",index.brandName)
        localStorage.setItem("brandLogo",index.brandLogo.data)
        localStorage.setItem("brandCategories",index.brandCategories)
        localStorage.setItem("brandOfferPosters",index.brandOfferPosters)
        localStorage.setItem("brandVideoLinks",index.videoLinks)
        

        const jsonArr = JSON.stringify(index.brandCategories);
        const jsonArray = JSON.stringify(index.brandOfferPosters)

        // save to localStorage
        localStorage.setItem("array", jsonArr);
        localStorage.setItem("jsonarray",jsonArray);
        
        // get the string
        // from localStorage
        // const str = localStorage.getItem("array");
        
        // // convert string to valid object
        // const parsedArr = JSON.parse(str);
        
        // console.log("stringify: ",parsedArr);
        
        
        
        console.log("BrandName: ",localStorage.getItem("brandName"))
        console.log("Brandlogo: ",localStorage.getItem("brandLogo"))
        console.log("BrandCategories: ",localStorage.getItem("brandCategories"))
        console.log("BrandOfferPosters: ",localStorage.getItem("brandOfferPosters"))
        console.log("BrandVideoLink: ",localStorage.getItem("brandVideoLinks"))
       
        console.log("On click")
        navigate("/branddetails")
        
    }

    return (
        <div>
        {
            (isBrandsFetched) ? (
                <div>
                <h3 className="hometitle" style={{textAlign:"left",margin:10 ,padding:5}}>SHOP BY BRANDS</h3>
                
                    <Row>
                    {    
                    brands.map(index=>{
                        return (
                            
                                <Col md={2}>
                                <img style={{height:200,width:150,borderRadius:"50px"}} src={'data:image/jpg;base64,' + index.brandLogo.data} onClick={()=>BrandClickHandler(index)}/>
                                </Col>
                                
                            
                        );
                    
                    
                })
                }
                </Row>
                
                </div>
                
               
                
            ) : (null)
        }
    </div>
    )
}
export default ShopByBrands;