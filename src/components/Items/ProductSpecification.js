import React, { useEffect, useState } from "react";
import {Table} from 'react-bootstrap';

function ProductSpecification({title,product}){
    console.log("productInfo",product.productInformation);
    console.log("title",title)
    
    const [key,SetKeys]= useState([]);
    const [value,SetValues]= useState([]);
    const [isKeysFetched,SetIsKeysFetched] = useState(false); 
    useEffect(()=>{
        if(!isKeysFetched){
            for(var k in product.productInformation[title]){
                key.push(k);
            }
            SetIsKeysFetched(true);
        }
    })

    return(
        <div>
            <h4 className="infotitle">{title}</h4>
            <Table className="infotable" >
            {
                (isKeysFetched)?(
                    key.map((k)=>{
                       
                            return(
                                <>
                                
                                  
                                        <tr>
                                            <td style={{width:'30%'}}>
                                            <h5>{k}</h5>
                                            </td>
                                            <td>
                                            {product.productInformation[title][k]}
                                            </td>
                                        </tr>
                                        
                                
                                
                                {/* <p><b>{k}<span> </span></b>:<span> </span>{product.productInformation[title][k]}</p> */}
                                </>
                            );
                    })
                ):(
                    null
                )
            }
            </Table>
        </div>
    );
}

export default ProductSpecification;