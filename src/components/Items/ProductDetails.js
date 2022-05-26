import { Button, Col, Container, Row } from "reactstrap";

import Zoom from "react-img-zoom";
import "./ProductDetails.css"
const ProductDetails = () => {
        // let name = localStorage.getItem("Name")
        // var storedProduct = JSON.parse(localStorage.getItem("product"))
        // var id = storedProduct[0].id


        var products=
            {
                "id":1,
                "src":"https://m.media-amazon.com/images/I/61YVqHdFRxL._AC_SL1322_.jpg",
                "alt":"Offer Name:1",
                "title":"OnePlus Nord CE 2 Lite 5G (6 GB RAM, 128 GB ROM, Blue Tide)",
                "price":19999,
                "description":"OxygenOS based on Android™ 12"
            }

    
    return(
        <div >
            <Row >
              <Col md={1}className="container"></Col>
              
              <Col md={5}className="container">
                <br></br>
                <br></br>
                <Zoom
                  img ={products.src}
                  height={500}
                  width={500}
                  zoomScale={2}
                />
                
              </Col>
              <Col className="container" md={5}>
                <br></br>
                <br></br>
                
                <p className="text" >{products.title}</p>
                
                <br></br>
                <h6 >Price:{products.price}</h6>
                <br></br>
                <h6>{products.description}</h6>
                <br></br>

                <Button>Add To Cart</Button>

                <Button style={{marginLeft:30}}>Buy Now</Button>

                </Col>
              
            </Row>
        </div>
        
    );
}

export default ProductDetails;