import React, { useEffect, useState } from "react";
import { Row, Col } from "reactstrap";
import axios from "axios";
import {Container} from 'react-bootstrap';
import BrandDetails from "./BrandDetails";
import { Navigate, useNavigate } from "react-router-dom";
import Carousel from "react-grid-carousel";
import './ShopByBrands.css';

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
        localStorage.setItem("brandLogo",index.brandLogo)
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
        <Container style={{marginBottom:'70px'}}>
        <h3 className="brand_title">Shop by brands</h3>
        {
            (isBrandsFetched) ? (
              <Carousel cols={6} rows={1} gap={10} loop>
                
                {
                  brands.map(index=>{
                    return(
                      <Carousel.Item>
                        <div className="promo" onClick={()=>BrandClickHandler(index)} style={{width:'100%',overlayColor: 'hotpink'}}>
                          <div className="image-wrapper"><img src={index.brandLogo}  /></div>
                          {/* <h2 className="brandtitle">{index.brandName}</h2> */}
                        </div>
                        {/* <img style={{width:'100%'}} src={"https://picsum.photos/800/600?random=3"} /> */}
                      </Carousel.Item>
                    )
                  })
                }

              </Carousel>
              
                // <div>




                // <h3 className="hometitle" style={{textAlign:"left",margin:10 ,padding:5}}>SHOP BY BRANDS</h3>
                

                
                //     <Row thumbnail='true' roundedCircle='true' className="shopbybrandsrow">
                //     {    
                //     brands.map(index=>{
                //         return (
                          
                //                 <Col sm={2}>
                             
                //                  <Image thumbnail='true' className="shopbybrandsimg"  src={index.brandLogo} onClick={()=>BrandClickHandler(index)}/>
                //                  {/* <Image thumbnail='true' className="shopbybrandsimg"  src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-family-hero?wid=940&hei=1112&fmt=png-alpha&.v=1645036276543" onClick={()=>BrandClickHandler(index)}/> */}
                           
                //                 </Col>
                                
                            
                //         );
                    
                    
                // })
                // }
                // </Row>
                
                // </div>
                
               
                
            ) : (null)
        }
        </Container>
    </div>
    )
}
export default ShopByBrands;