import axios from "axios";
import React, { useEffect, useState } from "react";
import { Row,Col,Button } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";



const RatingandReview = ({review}) => {

    const[reviews,setReviews] = useState([]);
    const[isReviewsFetched,setIsReviewsFetched] = useState(false);

    useEffect(()=>{
        if(!isReviewsFetched){
        // axios.get("http://localhost:8080/get-reviews/"+review.modelNumber)
        //     .then(function(response){
        //         if(response.status==200){
        //             // product.push(response.data);
                    
        //             setReviews(response.data);
        //             setIsReviewsFetched(true);
                    
        //         }
        //     }).catch(function(error){
        //         console.log(error);
        //     })

            var urls = []
            review.map(index=>{
                if(index!=="")
                    urls.push(axios.get("http://localhost:8080/get-reviews/"+index.modelNumber))
            })
            axios.all(urls).then(axios.spread((...response) => {
                console.log("response",response)
                response.map(p=>{
                    reviews.push(p.data)
                })
                console.log("Review",reviews)
                setIsReviewsFetched(true);
            })).catch(function(error){
                console.log("error",error);
            })
}})


    return (
        
            (isReviewsFetched)?(
                <div>
                    <Row>
                    <Col md={1}></Col>
                    <Col md={2}>
                        <h5>Rating & Reviews</h5>
                    </Col>
                    
                    {
                        reviews.map(index=>{
                            return(
                                <Col md={2}>
                                <Row>
                                    <h6 className="star" style={{padding:5}}>{index.averageRatings} <AiFillStar /></h6>
                                </Row>
                                <Row>  
                                    <h6>{index.totalReviews} Reviews & {index.totalRatings} Ratings</h6>
                                </Row>
                                
                                </Col>
                            )
                        })
                    }
                    </Row>
                </div>
                
                
            ):(null)
        
        
        
    )
}
export default RatingandReview;