import React from "react";
import { AiFillStar } from "react-icons/ai";
import { Row,Col, Container } from "reactstrap";


const UserReviewRating=()=>{

    return(
        <div>
            <Row>
                <Col className="star" md={1} style={{textAlign:"right"}} >
                        
                        3.5<AiFillStar/>
                </Col>
                <Col>
                    <p>Shivam Verma</p>
                </Col>
            </Row>
            <Row>
                <Col style={{marginLeft:70}}>
                    <p>One Plus Nord is a very nice product.I am convinced with the quality</p>
                </Col>
            </Row>
        </div>
    );

}

export default UserReviewRating;