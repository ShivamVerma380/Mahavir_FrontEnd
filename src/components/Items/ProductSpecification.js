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
            <h5>{title}</h5>
            {
                (isKeysFetched)?(
                    key.map((k)=>{
                       
                            return(
                                <>
                                <table >
                                  
                                        <tr>
                                            <td style={{width:'150px'}}>
                                            {k}
                                            </td>
                                            <td>
                                            {product.productInformation[title][k]}
                                            </td>
                                        </tr>
                                        
                                </table>
                                
                                {/* <p><b>{k}<span> </span></b>:<span> </span>{product.productInformation[title][k]}</p> */}
                                </>
                            );
                    })
                ):(
                    null
                )
            }
        </div>
    );
}

export default ProductSpecification;