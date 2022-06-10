import React, { useEffect, useState } from "react";

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
                                
                                <p>{k}:{product.productInformation[title][k]}</p>
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