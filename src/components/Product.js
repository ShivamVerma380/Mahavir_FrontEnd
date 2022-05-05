import React from "react";
import { Row,Col,Card,CardImg, CardBody, CardTitle,CardSubtitle, CardText, Container } from "reactstrap";
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import Arrow from 'react-arrows';
import Carousel from 'react-bootstrap/Carousel';
import { Button } from "bootstrap";


function Product({title,productList}){
    var cards=<div>
        <img className="logo_mahavir" src={require ('../assets/images.jpg')} alt="God" />
    </div>



    
    const leftScroll=()=>{
      console.log("Left scroll");
      const conent = document.querySelector('#content');
      conent.scrollLeft += 300;
    }


    const rightScroll=()=>{
      console.log("Right scroll");
      const conent = document.querySelector('#content');
      conent.scrollLeft -= 300;
    }
    
    return(
        <div>
            <h3 style={{textAlign:"left",margin:10 ,padding:5}}>{title}</h3>
            <Row>
              <Col md={1}>
              <button style={{marginTop:175}} onClick={leftScroll}>
                Left
              </button>
              </Col>
              <Col md={10}>
              <Container>
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
                </Container>
                </Col>
              <Col md={1}>
                <button style={{marginTop:175}} onClick={rightScroll}>
                  Right
                </button>
              </Col>
            </Row>
            
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
