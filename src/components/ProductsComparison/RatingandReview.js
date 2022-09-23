import axios from "axios";
import React, { useEffect, useState } from "react";
import { Row,Col,Button } from "react-bootstrap";
// import { AiFillStar } from "react-icons/ai";
import url from "../../Uri";
import ReactStars from 'react-stars';
import { render } from 'react-dom';

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
                    urls.push(axios.get(url+"/get-reviews/"+index.modelNumber))
            })
            axios.all(urls).then(axios.spread((...response) => {
                // console.log("response",response)
                response.map(p=>{
                    reviews.push(p.data)
                })
                // console.log("Review",reviews)
                setIsReviewsFetched(true);
            })).catch(function(error){
                console.log("error in get-reviews/");
            })
}})

function blankspace(){
    var dif=4-review.length;
        if(review.length==2 || review.length==4 )
            dif = 4 - review.length-1;
        if(review.length==1)
            dif = 4-review.length-2;
    var d=[];
    
    for (var index = 0; index < dif; index++) {
        // alert(index);
        d.push(0);    
    }
    // console.log("d"+d)
    return d;
    // d.map(m=>{
    //     return(
    //         <Col md={2}></Col>
    //     )
    // })
}

    return (
        
            (isReviewsFetched)?(
                <div>
                    <Row className="ComparisonHeader">
                    
                    <Col md={2} className="colll">
                        <h5>Rating & Reviews</h5>
                    </Col>
                    
                    {
                        reviews.map(index=>{
                            return(
                                <Col md={2} className="colll">
                                <Row>
                                    {/* <h6 className="star" >{index.averageRatings} <AiFillStar /></h6> */}
                                    <ReactStars
                                        count={5}
                                        value={index.averageRatings}
                                        size={28}
                                        edit={false}
                                        color2={'#198754'} />
                                    </Row>
                                <Row>  
                                    <h5 style={{fontSize:"16px"}}>{index.totalReviews} Reviews & {index.totalRatings} Ratings</h5>
                                </Row>
                                
                                </Col>
                            )
                        })
                    }
                   {
                    blankspace().map(m=>{
                        return(
                            <Col md={2}></Col>
                        )
                    })
                   }
                   
                    
                    </Row>
                </div>
                
                
            ):(null)
        
        
        
    )
}
export default RatingandReview;