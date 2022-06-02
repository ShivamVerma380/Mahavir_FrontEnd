import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';    
import React from "react";
import {Row, Col, Progress } from 'reactstrap';


const ProductRating=({rating})=>{
    console.log("rating",rating)
    return(
        <Row>
        <Col md={2}>
        <Stack spacing={1}>
            <Rating name="half-rating-read"  defaultValue={rating} precision={0.5} size="large" readOnly />
        </Stack>
        <br></br>
        </Col>
        </Row>

    );

}

export default ProductRating;