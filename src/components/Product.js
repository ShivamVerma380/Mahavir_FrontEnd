import React from "react";
import { Row,Col,Card,CardImg, CardBody, CardTitle,CardSubtitle, CardText } from "reactstrap";
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import Arrow from 'react-arrows';
import Carousel from 'react-bootstrap/Carousel';

function Product({title,productList}){
    var cards=<div>
        <img className="logo_mahavir" src={require ('../assets/images.jpg')} alt="God" />
    </div>
    return(
        <div>
            <h3 style={{textAlign:"left",margin:10 ,padding:5}}>{title}</h3>
            <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
                {
                    cards = productList.map(index=>{
                        return(
            
                            <Card className="product" style={{height:350 ,margin:10, padding:2}}>
                               <CardImg
                                   src={index.src}
                                 />
                                 <CardBody>
                                   <CardTitle>
                                        <h5>{index.title}</h5>
                                    </CardTitle>
                                    <CardSubtitle>
                                        <h6>Rs {index.price}</h6>
                                    </CardSubtitle>
                                    <CardText>
                                        <p>{index.description}</p>
                                   </CardText>
                                    
                                </CardBody>

                            </Card>
                        )
                    })
                }
            </ScrollMenu>
        </div>
        // <div>
        // <h2 style={{textAlign:"left" , padding:10}}>{title}</h2>
        //     <Row>
        //         {
        //             cards = productList.map(index=>{
        //                 return(
        //                     <Col md={2}>
        //                     <Card className="product">
        //                         <CardImg
        //                             src={index.src}
        //                         />
        //                         <CardBody>
        //                             <CardTitle>
        //                                 <h5>{index.title}</h5>
        //                             </CardTitle>
        //                             <CardSubtitle>
        //                                 <h6>Rs {index.price}</h6>
        //                             </CardSubtitle>
        //                             <CardText>
        //                                 <p>{index.description}</p>
        //                             </CardText>
                                    
        //                         </CardBody>

        //                     </Card>
        //                     </Col>
        //                 )
        //             })
        //         }
        //     </Row>
        // </div> 
    );
}



function LeftArrow() {
    const { isFirstItemVisible, scrollPrev } =
      React.useContext(VisibilityContext);
  
    return (
      <Arrow disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
        Left
      </Arrow>
    );
  }
  
  function RightArrow() {
    const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);
  
    return (
      <Arrow disabled={isLastItemVisible} onClick={() => scrollNext()}>
        Right
      </Arrow>
    );
  }
  

export default Product;