import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../Header";
import { Button, Container, Row ,Col,NavItem ,NavDropdown,Form} from "react-bootstrap";
import ComparisonHeader from "./ComparisonHeader";
import ComparisonHighlights from "./ComparisonHighlights";
import ComparisonVariants from "./ComparisonVariants";
import ComparisonProductInformation from "./ComparisonProductInformation";
import { useNavigate } from "react-router-dom";
import RatingandReview from "./RatingandReview";


import {setCookie,getCookie} from '../../Cookies';

function AddToCompareProducts(){
    var modelnums=new Array();
    const navigate = useNavigate();

    const [product,SetProduct] = useState([]);
    const [isProductFetched,SetIsProductFetched] = useState(false);
    // modelnums=getCookie("addToCompare");
    // console.log("models to compare: "+modelnums);
    useEffect(()=>{
        // var modelNumbers = getCookie("addToCompare").split(",")
        // console.log("modelNumbers",modelNumbers)
    })
    return(
        <div>
            <p>Hello World</p>
        </div>
    )
}

export default AddToCompareProducts;