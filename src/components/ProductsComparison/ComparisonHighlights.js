import React, { useState } from "react";
import { Row,Col } from "react-bootstrap";
import { Container } from "reactstrap";
import { Flag } from "semantic-ui-react";

// var showOnlyDiff = localStorage.getItem("showOnlyDiff");
function ComparisonHighlights({product,showOnlyDiff}){
    // showOnlyDiff
    // console.log("diff",showOnlyDiff)

    var arr = product[0].productHighlights.split(';');
    const [ans,SetAns] = useState(new Set());
    const [isAnsFetched,SetIsAnsFetched] = useState(false);

    function getFilteredHighlights(){
            product.map((index,pos)=>{
                var flag = false;
                
                
                    index.productHighlights.split(';').map((h,pos)=>{
                        // console.log("h:",h,"....arr:",arr[pos]);
                        if(h!==arr[pos]){
                            ans.add(pos);
                        }
                    })
                    
                
            })
            // console.log("ans",ans);
    }

    function blankspace(){
        var dif=4-product.length;
        var d=[];
        for (var index = 0; index < dif; index++) {
            // alert(index);
            d.push(0);    
        }
        // console.log("d"+d)
        return d;
    }

    return(
        (localStorage.getItem("isChecked"))?(
            null
        ):(
            <Row className="ComparisonHeader">
            
            {
                (!showOnlyDiff)?(
                    
                    <Col md={2} className="colll">
                        <h5>Product Highlights</h5>
                    </Col>
                ):(null)
            }
            {

                (!showOnlyDiff)?(
                    
                        product.map(index=>{
                            return(
                                <Col md={2} className="colll">
                                    {
                                        index.productHighlights.split(';').map(str=><h6>• {str} </h6>)
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
                    
                    <Col md={2} className="colll">
                        <h5 >Product hightlights</h5>
                    </Col>
                    
                ):(
                    null
                )
            }
            {
                (showOnlyDiff)?(
                    product.map(p=>{
                        return(
                        <Col md={2} className="colll">
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
            {
                    blankspace().map(m=>{
                        return(
                            <Col md={2}></Col>
                        )
                    })
                   }

        </Row>
        )
        
    );
}

export default ComparisonHighlights;