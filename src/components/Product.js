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
            <ScrollMenu 
                LeftArrow={LeftArrow}
                RightArrow={RightArrow}
            >
                {
                    cards = productList.map(index=>{
                        return(
            
                            <Card className="card" style={{height:350 ,margin:10, padding:2}}>
                               <CardImg className="this.props.img"
                                   src={index.src}
                                 />
                                 <CardBody>
                                   <CardTitle className="this.props.h5">
                                        <h5><b>{index.title}</b></h5>
                                    </CardTitle>
                                    <CardSubtitle>
                                        <h6>Rs {index.price}</h6>
                                    </CardSubtitle>
                                    <CardText className="this.props.p">
                                        <p>{index.description}</p>
                                   </CardText>
                                    
                                </CardBody>

                            </Card>
                        )
                    })
                }
            </ScrollMenu>
        </div>

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