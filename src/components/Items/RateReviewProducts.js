import React from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import { Input } from "reactstrap";
import './ProductDetails.css'
import axios from "axios";
import url from "../../Uri";
import { getCookie } from "../Cookies";
import { useNavigate } from "react-router-dom";

const RateReviewProducts = () => {

    const navigate = useNavigate();

    console.log("Product Rate",localStorage.getItem("rateProduct"));

    var product = JSON.parse(localStorage.getItem("rateProduct"));

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

        if (userrating === "" || reviewdate === "" || userreview === "") {
            alert("Please enter all details");
        }
        else {
            var form_data_body = {
                "Review":""+userreview,
                "Rating":""+userrating,
                "Date":""+reviewdate     
            }
            console.log("FormData",form_data_body)
            axios.post(url+"/review/"+product.modelNumber+"/"+product.orderId, form_data_body, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": "Bearer "+getCookie("jwtToken")
                },
            }).then(function (response) {
                console.log(response);
                if (response.status == 200) {
                    console.log("response", response);
                    console.log("Review Added");
                    navigate("/my-orders");
                    
                }
                else {
                    console.log("In else");
                    alert(response.data.message);
                    console.log(response.data.message);
                    return;
                }
    
    
    
            }).catch(function (error) {
                // console.log(error);
                
                    console.log("Product Not Bought")
                    // alert("Product Not Bought")
                    alert("You have already rated the product or not buyed it")
                return;
            })
        }
        
        
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
                    <img src={product.productImage1} style={{ width: 100, height: 100 }}></img>
                </Col>
                <Col md={4}>
                    <h6>{product.productName}</h6>
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
                <h5>Description</h5>
                <Input placeholder="Description of product here....." type="textarea" style={{ width: 600, height: 100 }} onChange={ReviewHandler}></Input>
            </Row>

            <Button style={{ marginTop: 20, backgroundColor:"rgb(255, 88, 88)" }} onClick={HandleSubmit}>SUBMIT</Button>


        </Container>





    )


}
export default RateReviewProducts;