import React from "react";
import { Card, Row, Col, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import MiniPosterHelper from "./MiniPosterHelper";
import './MiniPoster.css';
import { MDBRow, MDBCard, MDBCardBody, MDBCardTitle, MDBCardSubTitle, MDBCardText, MDBCardImage, MDBContainer } from 'mdb-react-ui-kit';
const MiniPosters = ({MiniPosters}) => {
    // console.log("MinPosters: ",MiniPosters)
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
      // console.log(localStorage.getItem("offerPostersModelNumber"))
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
        
        <div>
<MDBRow style={{padding:'1%', display:'flex',justifyContent: 'center'}} className='row-cols-1 row-cols-md-3 g-4'>
                {
                  MiniPosters.map((product,index) => {
                    
                    return (
                      <MDBCard className="minipostercard" >
                        <MDBCardImage style={{border: 'solid 1px gray', cursor:"pointer"}} src={product.imageUrl} onClick={()=>handleMiniPosteronClick(product)} alt='...' position='top' />
                        
                      </MDBCard>
                    )
                  })
                }


              </MDBRow>

          
                    {/* <div class="image-container" style={{gridTemplateColumns: 'repeat(+5, 1fr)',}}>

                      {
                        
                        MiniPosters.slice(0,5).map((product,index) => {
                          
                          return(
                              <div class="image_p">
                              <img src={product.imageUrl} onClick={()=>handleMiniPosteronClick(product)}/>
                            </div>
                          
                          )
                          
                        })
                      }
                      </div>              */}
        </div>
        

        
        
    )

}
export default MiniPosters;