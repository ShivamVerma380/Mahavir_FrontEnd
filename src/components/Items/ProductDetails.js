import { Button, Col, Container, Input, Row } from "reactstrap";

import Zoom from "react-img-zoom";
import "./ProductDetails.css"
import {AiOutlineMinus} from "react-icons/fa"
import ProductRating from "./ProductRating";
import UserReviewRating from "./UserReviewRating";
const ProductDetails = () => {
        // let name = localStorage.getItem("Name")
        // var storedProduct = JSON.parse(localStorage.getItem("product"))
        // var id = storedProduct[0].id

    var quantity  = 0;
    var flag = false;

    var products=
            {
                "id":1,
                "src":"https://m.media-amazon.com/images/I/61YVqHdFRxL._AC_SL1322_.jpg",
                "alt":"Offer Name:1",
                "title":"OnePlus Nord CE 2 Lite 5G (6 GB RAM, 128 GB ROM, Blue Tide)",
                "price":19999,
                "description":"OxygenOS based on Android™ 12"
            }
    const inputQuantityEvent=(event)=>{
        flag = true;
        quantity = event.target.value;
        console.log(quantity);
    }
    
    const handleAddToCart=()=>{
      if(flag==false){
        alert("Add To Cart:1");
      }else if(quantity<=0){
        alert("Please enter a positive number");
      }else{
        alert("Quantity:"+quantity);
      }
    }

    

    const handleBuyNow=()=>{
      if(flag==false){
        alert("Add To Cart:1");
      }else if(quantity<=0){
        alert("Please enter a positive number");
      }else{
        alert("Quantity:"+quantity);
      }
    }
    return(
        <div >
            <Row >
              <Col md={1}></Col>
              
              <Col md={5}>
                <br></br>
                <br></br>
                <Zoom
                  img ={products.src}
                  height={500}
                  width={500}
                  zoomScale={2}
                />
                
              </Col>
              <Col  md={5}>
                <br></br>
                <br></br>
                
                <p className="text" >{products.title}</p>
                
                <br></br>
                <h6 >Price:{products.price}</h6>
                <br></br>
                <h6>{products.description}</h6>
                <br></br>
                <Input id="Quantity"
                      name="Quantity"
                      placeholder="Enter Quantity"
                      type="number"
                      min={0}
                      onChange={inputQuantityEvent}
                      style={{width:300}}>
                </Input>
                <br></br>
                <Button onClick={handleAddToCart}>Add To Cart</Button>
                <Button style={{marginLeft:30}} onClick={handleBuyNow}>Buy Now</Button>

                </Col>
              
            </Row>
            <br></br>
            <Row>
              <Col>
                <h3 style={{textAlign:"center"}}>Ratings And Reviews</h3>
              </Col>
              <br></br>
              <ProductRating rating="3.5"/>
              <UserReviewRating/>
              <UserReviewRating/>
              <UserReviewRating/>
              <UserReviewRating/>
              <UserReviewRating/>
              <UserReviewRating/>
              <UserReviewRating/>
            </Row>
        </div>
        
    );
}

export default ProductDetails;