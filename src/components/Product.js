import React from "react";
import { Row,Col,Card,CardImg, CardBody, CardTitle,CardSubtitle, CardText } from "reactstrap";

function Product({title,productList}){
    var cards=<div>
        <img className="logo_mahavir" src={require ('../assets/images.jpg')} alt="God" />
    </div>
    return(
        <div>
            <h2 style={{textAlign:"left" , padding:10}}>{title}</h2>
            <Row>
                {
                    cards = productList.map(index=>{
                        return(
                            <Col md={2}>
                            <Card className="product">
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
                            </Col>
                        )
                    })
                }
            </Row>
        </div>
    );
}

export default Product;