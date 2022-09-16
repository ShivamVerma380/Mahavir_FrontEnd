import React from "react";
import { Card, Row, Col, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './MiniPoster.css';
import ProductRating from "../Items/ProductRating";
const MiniPostersBottom = ({MiniPosters}) => {
    const navigate = useNavigate();

    const handleMiniPosteronClick=(product)=>{
      localStorage.setItem("offerPostersModelNumber",product.modelNumbers)
      navigate("/offers")
    }
    
    var coll=[]
    var len=MiniPosters.length;
    var grid_len;
    if(len%2===0){
      grid_len=len/2;
    }
    else{
      grid_len=parseInt(len/2)+1;
    }
    
     
    return (
        
        <div style={{marginLeft:'10px'}}>
          
          <div class="image-container" style={{gridTemplateColumns: 'repeat(+5, 1fr)',}}>

            {
              
              MiniPosters.slice(5,len).map((product,index) => {
                
                return(
                    <div class="image_p">
                    <img src={product.imageUrl} onClick={()=>handleMiniPosteronClick(product)}/>
                  </div>
                
                )
                
              })
            }
            </div>             
        </div>

        
        
    )

}
export default MiniPostersBottom;