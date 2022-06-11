import React, { useState } from "react";
import { Row,Col } from "react-bootstrap";

function ComparisonHighlights({product}){
    // const[highlight1,SetHighlight1] = useState([]);
    // const[highlight2,SetHighlight2] = useState([]);
    // const[highlight3,SetHighlight3] = useState([]);
    // const[highlight4,SetHighlight4] = useState([]);

    var highlight1=[];
    var highlight2=[];
    var highlight3=[];
    var highlight4=[];


    // var length = product.length;
    // if(length===1){
    //     highlight1= product[0].productHighlights.split(';');

    // }else if(length===2){
    //     highlight2= product[1].productHighlights.split(';');
    // }else if(length===3){
    //     highlight3= product[2].productHighlights.split(';');
    // }else if(length===4){
    //     highlight4= product[3].productHighlights.split(';');
    // }

    return(
        <Row>
            <Col md={1}>
            </Col> 
            <Col md={2}>
                <h5>Product Highlights</h5>
            </Col>
            {
                product.map(index=>{
                    return(
                        <Col md={2}>
                            {
                                index.productHighlights.split(';').map(str=><p>•{str}</p>)
                            }
                        </Col>
                    );
                })
            }

        </Row>
    );
}

export default ComparisonHighlights;