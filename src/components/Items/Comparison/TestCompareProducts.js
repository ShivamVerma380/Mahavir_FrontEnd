import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Container, Row ,Col,NavItem ,NavDropdown,Form} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function TestCompareProducts() {

  const navigate = useNavigate();

  const [products,SetProducts] = useState([]);
  const [isProductsFetched,SetIsProductsFetched] = useState(false);


  const[showOnlyDiff,SetShowOnlyDiff] = useState(false);



  return (
    <div>
      <h1>TestCompareProducts</h1>
    </div>
  );
}

export default TestCompareProducts;