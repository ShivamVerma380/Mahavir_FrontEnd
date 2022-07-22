import {React,useState} from "react";

import { Row,Col, Container } from "react-bootstrap";
function ComparisonProductInformation({title,product}){
    //title,
    console.log("product",product)
    // console.log(product[0].productInformation[title]);
    
    var key =[];
    var values = [];
    function fetchArray(productInformationFeature){
        key=[];
        values=[];
        for(var k in productInformationFeature){
            key.push(k);
            values.push(productInformationFeature[k]);
        }
        
    }

    const[isKeysFetched,SetIsKeysFetched] = useState(false);


    function fetchKeys(){
        if(!isKeysFetched){
            key=[];
            console.log("product",product[0])
            for(var k in product[0].productInformation){
                key.push(k);
            }
            console.log("key",key)
            SetIsKeysFetched(true)
        }
        

    }


    function fetchDifferences(k){
        console.log("Inside fetch ")
        var valuesPos=[]
        // product[0].productInformation[k].map((index,pos)=>{
        //     // if(index!==product[1].productInformation[k][pos]){
        //     //     valuesPos.push(pos)
        //     // }
        //     console.log("index",index)
        // })
        console.log("position 0",product[0].productInformation[k])
        var keyArray=[];
        for(var item in product[0].productInformation[k]){
            console.log("item",item,"   values",product[0].productInformation[k][item])
            // if(product[0].productInformation[k][item]!==product[2].productInformation[k][item]){
            //     keyArray.push(item);
            // }
            if(product.length==1){
                keyArray.push(item);
            }
            else if(product.length==2){
                if(product[0].productInformation[k][item]!==product[1].productInformation[k][item]){
                    keyArray.push(item);
                }
            }
            else if(product.length==3){
                if(product[0].productInformation[k][item]!==product[1].productInformation[k][item] || product[0].productInformation[k][item]!==product[2].productInformation[k][item]){
                    keyArray.push(item);
                }
            }
            else if(product.length==4){
                if(product[0].productInformation[k][item]!==product[1].productInformation[k][item] || product[0].productInformation[k][item]!==product[2].productInformation[k][item] || product[0].productInformation[k][item]!==product[3].productInformation[k][item] || product[1].productInformation[k][item]!==product[2].productInformation[k][item] ||product[1].productInformation[k][item]!== product[3].productInformation[k][item] || product[2].productInformation[k][item]!==product[3].productInformation[k][item]){
                    keyArray.push(item);
                }
            }
        }
        console.log("keyArray",keyArray)
        console.log(".....",product[0].productInformation[k][keyArray[0]])
        var i=0;
        // for(var k1 in product[0].productInformation[k]){
        //     console.log("product[0].productInformation[k][k1]",product[0].productInformation[k][k1])
        //     if(product[0].productInformation[k1]===product[1].productInformation[k][k1]){
        //         valuesPos.push(k1)
        //     }
        //     i++;
        //     console.log("k1",k1)
        // }
        // console.log("valuesPos",valuesPos)
        return(
            (keyArray.length>0)?(
                <Row>
                    <hr></hr>
                    <Col md={1}></Col>
                    <Col md={2}>
                        <h5>{title}</h5>
                    </Col>
                    {
                        product.map(p=>{
                            return(
                                <Col md={2}>
                                    {
                                        keyArray.map(k1=>{
                                            console.log("k1",k1)
                                            return(
                                                <p>{k1}{p.productInformation[k][k1]}</p>
                                                // <p>{p.productInformation[k][k1]}</p>
                                            )
                                        })
                                    }
                                </Col>
                            )
                        })
                    }   
                </Row>
            ):(
                null
            )
        )
    }

    return(
        (localStorage.getItem("isChecked"))?(
            <Row>
            <Row>
                {/* <Col md={1}></Col> */}
                
                {/* <Col md={12}> */}
                {
                    fetchKeys()
                }
                {
                    // (isKeysFetched)?(
                    //     key.map(k=>{
                    //         fetchDifferences(k)
                    //     })
                    // ):(
                    //     null
                    // ) 
                    fetchDifferences(title)
                }
                {/* </Col> */}
            </Row>
            </Row>
        ):(
            <Row>
            <Row>
                <Col md={1}></Col>
                <Col md={10}>
                    <hr></hr>
                </Col>
            </Row>
            <Row>
                <Col md={1}></Col>
                
                <Col md={2}>
                    <h5>{title}</h5>
                </Col>
                {
                    product.map(index=>{
                        {
                            fetchArray(index.productInformation[title])
                        }
                        return(
                            <Col md={2}>
                                {
                                    key.map((k,pos)=>{
                                        return(
                                            <p>{k}{values[pos]}</p>
                                        );
                                    })
                                }                                
                            </Col>
                        );
                    })   
                }
            
            </Row>
            </Row>
        )
    );
}

export default ComparisonProductInformation;