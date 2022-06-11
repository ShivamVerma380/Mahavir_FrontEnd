import React from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import { Input } from "reactstrap";
import './ProductDetails.css'
import axios from "axios";

const RateReviewProducts = () => {

    var userrating = "";
    var reviewdate = "";
    var userreview = "";

    const ratingChanged = (newRating) => {
        console.log(newRating);
        userrating = newRating;
        console.log(userrating)
    };

    const DateHandler = (event) => {
        console.log(event.target.value);
        reviewdate = event.target.value;
        console.log(reviewdate)
    }

    const ReviewHandler = (event) => {
        console.log(event.target.value)
        userreview = event.target.value;
        console.log(userreview);
    }

    const HandleSubmit = () => {
        
        var form_data_body = {
            "modelNumber": "IPH12123",
            "Review":""+userreview,
            "Rating":""+userrating,
            "Date":""+reviewdate     
        }
        console.log("FormData",form_data_body)
        axios.post("http://localhost:8080/add-review/IPH12123", form_data_body, {
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhMkJWY2RAZmRlZmVkczVyZGRkIiwiZXhwIjoxNjU1MDI5MzI1LCJpYXQiOjE2NTQ5MjkzMjV9.14H8_CqBGuVS_mTwLRKrzqvSue0q1nCNxD0lKId-F7E"
            },
        }).then(function (response) {
            console.log(response);
            if (response.status == 200) {
                console.log("response", response);
                console.log("Review Added");
                
            }
            else {
                console.log("In else");
                console.log(response.data.message);
                return;
            }



        }).catch(function (error) {
            // console.log(error);
            
                console.log("Product Not Bought")
            
            
            return;
        })
    }

    return (

        <Container style={{ marginTop: 50 }}>

            <h1>Rate this Product</h1>
            <Col md={1}></Col>
            <Col md={8}>
            <hr></hr>
            </Col>
            
            <Row>
                <Col md={1}>
                    <img src="https://d2xamzlzrdbdbn.cloudfront.net/products/2eb1eeb0-470e-48a0-9bcf-7d6f610a449521170554.jpg" style={{ width: 100, height: 100 }}></img>
                </Col>
                <Col md={4}>
                    <h6>Apple iPhone 13 Pro Max (256 GB Storage, Gold)</h6>
                </Col>

            </Row>

            <Row>
                <Col md={12}>
                    <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={30}
                        isHalf={true}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#ffd700"

                    />
                </Col>

                
            <Col md={8}>
            <hr></hr>
            </Col>
            </Row>

            <Row>
                <h5>Date</h5>
                <Input type="date" style={{ width: 150 }} onChange={DateHandler}></Input>
            </Row>

            <Row style={{ marginTop: 20 }}>
                <h5>Title</h5>
                <Input type="text" placeholder="Review Title" style={{ width: 600, height: 30 }}></Input>
            </Row>
            <Row style={{ marginTop: 20 }}>
                <h5>Description</h5>
                <Input placeholder="Description of product here....." type="textarea" style={{ width: 600, height: 100 }} onChange={ReviewHandler}></Input>
            </Row>

            <Button style={{ marginTop: 20, backgroundColor:"rgb(255, 88, 88)" }} onClick={HandleSubmit}>SUBMIT</Button>


        </Container>





    )


}
export default RateReviewProducts;