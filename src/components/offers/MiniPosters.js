import React from "react";
import { Card, Row, Col, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import MiniPosterHelper from "./MiniPosterHelper";

const MiniPosters = ({MiniPosters}) => {
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
    
     
    return (
        
        <div>
          <Row>
            <Row md={3} xs={1}>
              {
                MiniPosters.map((product,index) => {
                    return (
                        <div key={index}> {/*refer you key in within a div*/}
                  <Col>
                    
                    
                    <img style={{width:400,height:400}} variant="top" src={'data:image/jpg;base64,' +product.image.data} onClick={()=>handleMiniPosteronClick(product)}/>
                    
                   
                  </Col>
                  <br></br>
                </div>
                    )
                })
                
                
              }
            </Row>  
            
          </Row>               
        </div>

        // <Row>
            
        // {
        // MiniPosters.map((index,pos)=>{
        //     array = MiniPosters.slice(pos,pos+3)
        //     pos = pos+3;
        //     return (
        //         <Row>
        //             {
        //                 array.map(i=>{
        //                     return (
        //                         <Col md={3}>
        //                         <img src={'data:image/jpg;base64,' +i.image.data}></img>
        //                     </Col>
        //                     )
        //                 })
        //             }
        //         </Row>
        //     )
        //     })
        // }


           

        
           
            
        
       
        // </Row>
        
        
    )

}
export default MiniPosters;