import React, { useEffect } from "react";
import { Col } from "react-bootstrap";
import axios from "axios"

function FilterProduct(){


    // useEffect(()=>{
    //     axios({
    //         method:"get",
    //         url:"http://localhost:8080/get-products/"+localStorage.getItem("Category"),
    //     }).then(function(response){
    //         console.log(response);
    //         if(response.status==200){
    //           console.log("Got Products");
    //         }
    //       }).catch(function(error){
    //         console.log("error",error);
    //       })
    // })

    return(
        <Col md={2}>
            <h5>FilterProduct</h5>
        </Col>
    );
}

export default FilterProduct;