import React, { useState } from "react";
import { Row,Col } from "react-bootstrap";
import { Container } from "reactstrap";
import { Flag } from "semantic-ui-react";

function ComparisonHighlights({product,showOnlyDiff}){

    var arr = product[0].productHighlights.split(';');
    const [ans,SetAns] = useState(new Set());
    const [isAnsFetched,SetIsAnsFetched] = useState(false);

    function getFilteredHighlights(){
            product.map((index,pos)=>{
                var flag = false;
                
                
                    index.productHighlights.split(';').map((h,pos)=>{
                        console.log("h:",h,"....arr:",arr[pos]);
                        if(h!==arr[pos]){
                            ans.add(pos);
                        }
                    })
                    
                
            })
            console.log("ans",ans);
    }

    return(
        <Row>
            <Col md={1}>
            </Col> 
            {
                (!showOnlyDiff)?(
                    
                    <Col md={2}>
                        <h5>Product Highlights</h5>
                    </Col>
                ):(null)
            }
            {

                (!showOnlyDiff)?(
                    
                        product.map(index=>{
                            return(
                                <Col md={2}>
                                    {
                                        index.productHighlights.split(';').map(str=><p>•{str}</p>)
                                    }
                                </Col>
                            );
                        })
                    
                ):(null)
                    
            }

            {
            (showOnlyDiff)?(   
                    
                getFilteredHighlights()

                    
            ):(
                null
            )
            }

            {
                (showOnlyDiff)?(
                    
                    <Col md={2}>
                        <h5>Product hightlights</h5>
                    </Col>
                    
                ):(
                    null
                )
            }
            {
                (showOnlyDiff)?(
                    product.map(p=>{
                        return(
                        <Col md={2}>
                            {
                                p.productHighlights.split(';').map((highlight,pos)=>{
                                    
                                    return(
                                        <Container>
                                        {
                                            (ans.has(pos))?(
                                                
                                                <p>{highlight}</p>
                                            
                                            ):(
                                                null
                                            )
                                        }
                                        </Container>
                                    )
                                    
                                })
                            }
                        </Col>
                        );
                    })
                ):(
                    null
                )
            }

        </Row>
    );
}

export default ComparisonHighlights;