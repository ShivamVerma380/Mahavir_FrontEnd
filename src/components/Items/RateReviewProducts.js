import React from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import { Input } from "reactstrap";
import './ProductDetails.css'
import axios from "axios";
import url from "../../Uri";
import { getCookie } from "../Cookies";
import { useNavigate } from "react-router-dom";
import "./RateReview.css"
import Header from "../Header";
import { toast, ToastContainer } from "react-toastify";

const RateReviewProducts = () => {

    const navigate = useNavigate();

    // console.log("Product Rate",localStorage.getItem("rateProduct"));

    var product = JSON.parse(localStorage.getItem("rateProduct"));

    var userrating = "";
    var reviewdate = "";
    var userreview = "";

    const ratingChanged = (newRating) => {
        console.log(newRating);
        userrating = newRating;
        console.log(userrating)
    };


    const ReviewHandler = (event) => {
        console.log(event.target.value)
        userreview = event.target.value;
        console.log(userreview);
    }

    const HandleSubmit = () => {
        let today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        reviewdate = mm + '/' + dd + '/' + yyyy;
        // console.log("Review Date",reviewdate.toString());
        if (userrating === "" || reviewdate === "" || userreview === "") {
            // alert("Please enter all details");
            toast.error(<b>Please enter all details</b>)
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
                    // console.log("response", response);
                    // console.log("Review Added");
                    navigate("/my-orders");
                    
                }
                else {
                    // console.log("In else");
                    alert(response.data.message);
                    // console.log(response.data.message);
                    return;
                }
    
    
    
            }).catch(function (error) {
                // console.log(error);
                
                    // console.log("Product Not Bought")
                    // alert("Product Not Bought")
                    // alert("You have already rated the product or not buyed it")
                    toast.error(<b>You have already rated the product or not buyed it</b>)
                return;
            })
        }
        
        
    }

    return (
        <><Header/>
        <ToastContainer position="top-center"/>
        <div style={{marginTop:"150px"}}>
        <Container style={{ marginTop: 50 }}>

            <Row>
            
                
                <Col >
                <h1>Rate this Product</h1>
                <br></br>
                    <img src={product.productImage1} style={{ width: "150px", height: "150px" }}></img>
                    <h4>{product.productName}</h4>

                    <br></br>
                    <h4>Rate the product</h4>
                    <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={30}
                        isHalf={false}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="red"

                    />
                    <h3>Add your review</h3>
                <Input placeholder="Review of product here " type="textarea" style={{ height: 100 ,fontSize:"16px"}} onChange={ReviewHandler}></Input>
                <Button style={{ marginTop: 20, backgroundColor:"rgb(255, 88, 88)" ,fontSize:"16px", alignContent:"center"}} onClick={HandleSubmit}>SUBMIT</Button>
                </Col>

            </Row>
 
        </Container>
        </div>
        </>

    )


}
export default RateReviewProducts;