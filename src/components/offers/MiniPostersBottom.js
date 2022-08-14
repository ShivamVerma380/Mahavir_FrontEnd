import React from "react";
import { Card, Row, Col, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import MiniPosterHelper from "./MiniPosterHelper";
import './MiniPoster.css';
import ProductRating from "../Items/ProductRating";
const MiniPostersBottom = ({MiniPosters}) => {
    console.log("MinPosters: ",MiniPosters)
    // const element = MiniPosters.map((product,index) =>
    // <div key={index}> {/*refer you key in within a div*/}
    //   <Col md={3}>
        
    //     <Card style={{ width: '15rem' }}>
    //     <Card.Img variant="top" src={'data:image/jpg;base64,' +product.image.data} />
    //     <Card.Body>
    //     <Card.Title>{product.Description}</Card.Title>
    //     <Button variant="primary">Add {product.Price}</Button>
    //     </Card.Body>
    //     </Card>
    //   </Col>
    // </div>

    const navigate = useNavigate();

    const handleMiniPosteronClick=(product)=>{
      // alert("Offer Poster clicked");

      // console.log(modelNumbers);
      localStorage.setItem("offerPostersModelNumber",product.modelNumbers)
      console.log(localStorage.getItem("offerPostersModelNumber"))
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
                    {/* <img src={'data:image/jpg;base64,' +product.image.data}/> */}
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