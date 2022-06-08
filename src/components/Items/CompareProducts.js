import { Checkbox } from "material-ui";
import React from "react";
import { Row, Col, NavDropdown, Form, Button } from "react-bootstrap";
import Header from "../Header";
import "./CompareProducts.css"
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";



    const CompareProducts = () => {
        const navigate = useNavigate();
        const buyHandler = () => {
            navigate("/AddressForm")
    }
    const CompareImgHandler = () => {
        navigate("/productDetails")
    }

    return (
        <div>
            <Header />
            
            <Row style={{ marginTop: "30px" }}>
                <Col md={1}>
                </Col>
                <Col md={2}>
                    <h4>Redmi Note 11T 5G (8 GB RAM, 128 GB ROM, Stardust White) vs others</h4>
                </Col>
                <Col md={2}>
                    <img style={{ width: "10rem", alignContent: "center" }} onClick={CompareImgHandler} src="https://d2xamzlzrdbdbn.cloudfront.net/products/7d54e926-1b54-4e1c-8a5e-3041b01bbd9a22211119.jpg"></img>

                </Col>
                <Col md={2}>
                    <img style={{ width: "10rem" }} onClick={CompareImgHandler} src="https://d2xamzlzrdbdbn.cloudfront.net/products/13a5ea0f-9755-4451-a1c9-3d3ac19a9ae922240846.jpg"></img>
                </Col>
                <Col md={2}>
                    <img style={{ background: "green" }} onClick={CompareImgHandler}></img>
                </Col>
                <Col md={2}>
                    <img onClick={CompareImgHandler}></img>
                </Col>
                <Col md={1}>
                </Col>
            </Row>
            <Row>
                <Col md={1}></Col>
                <Col md={2}>

                </Col>
                <Col md={2}>
                    <h6 style={{ marginTop: "20px" }} onClick={CompareImgHandler}>Redmi Note 11T 5G (8 GB RAM, 128 GB ROM, Stardust White)</h6>
                </Col>
                <Col md={2}>
                    <h6 style={{ marginTop: "20px" }} onClick={CompareImgHandler}>Realme 9i (6 GB RAM, 128 GB ROM, Prism Blue)</h6>
                </Col>
                <Col md={2}>
                    <h6 style={{ marginTop: "20px" }} onClick={CompareImgHandler}>Add a product</h6>
                </Col>
                <Col md={2}>
                    <h6 style={{ marginTop: "20px" }} onClick={CompareImgHandler}>Add a product</h6>
                </Col>
                <Col md={1}></Col>
            </Row>
        


            <Row>
                <Col md={1}></Col>
                <Col md={2}>
                    <Form>
                        <Form.Check type="checkbox" id="default-checkbox" label="Show Only Differences" />
                    </Form>
                </Col>
                <Col md={2}>
                    <h6 style={{}}>₹17,990</h6>
                </Col>
                <Col md={2}>
                    <h6>₹15,999</h6>
                </Col>
                <Col md={2}>
                    <NavDropdown title="Choose Brand"></NavDropdown>

                    <NavDropdown title="Choose Product"></NavDropdown>
                </Col>
                <Col md={2}>
                    <NavDropdown title="Choose Brand"></NavDropdown>

                    <NavDropdown title="Choose Product"></NavDropdown>
                </Col>
                <Col md={1}></Col>

            </Row>
            
           
            <Row>
                <Col md={1}></Col>
                <Col md={10}>
                    <hr></hr>
                </Col>
            </Row>
            <Row>
                <Col md={1}>
                </Col>
                <Col md={2}>
                    <h6>Exchange Offer</h6>
                </Col>
                <Col md={2}>
                    <p>-------</p>

                </Col>
                <Col md={2}>
                    <p>₹3499 after Exchange</p>
                </Col>
                <Col md={2}>
                    <img style={{ background: "green" }}></img>
                </Col>
                <Col md={2}>
                    <img></img>
                </Col>
                <Col md={1}>
                </Col>
            </Row>
            <Row>
                <Col md={1}>
                </Col>
                <Col md={2}>
                    <h6>Ratings and Reviews</h6>
                </Col>
                <Col md={2}>
                    <p className="ratingstar">3.5<AiFillStar /></p>
                    <p>2,039 Ratings & 169 Reviews</p>
                    <a href="onlyreviews">All 169 Reviews</a>
                </Col>
                <Col md={2}>
                    <p className="ratingstar">4.5<AiFillStar /></p>
                    <p>1,675 Ratings & 140 Reviews</p>
                    <a href="onlyreviews">All 140 Reviews</a>
                </Col>
                <Col md={2}>
                    <img style={{ background: "green" }}></img>
                </Col>
                <Col md={2}>
                    <img></img>
                </Col>
                <Col md={1}>
                </Col>
            </Row>
            <Row style={{ marginTop: "15px" }}>
                <Col md={1}>
                </Col>
                <Col md={2}>
                    <h6>Highlights</h6>
                </Col>
                <Col md={2}>
                    <p>6 GB RAM | 128 GB ROM</p>
                    <p>16.76 cm (6.6 inch) Display</p>
                    <p>50MP + 2MP + 2MP | 16MP Front Camera</p>
                    <p>5000 mAh Lithium ion Battery</p>
                    <p>Qualcomm Snapdragon 680 (SM6225)</p>
                    <p>Processor</p>
                    <p>Warranty: 1 Year Manufacturer Warranty for Phone and 6 Months Warranty for in the Box Accessories</p>
                    <p>Returns: 7 Days Replacement Policy</p>

                </Col>
                <Col md={2}>
                    <p>6 GB RAM | 128 GB ROM | Expandable Upto 1 TB</p>
                    <p>16.76 cm (6.6 inch) Full HD+ Display</p>
                    <p>50MP Rear Camera</p>
                    <p>5000 mAh Battery</p>
                    <p>Octa Core Processor</p>
                    <p>Warranty: 12 months</p>
                    <p>Returns: 7 Days Replacement Policy</p>


                </Col>
                <Col md={2}>

                </Col>
                <Col md={2}>

                </Col>
                <Col md={1}>
                </Col>
            </Row>
            <Row>
                <Col md={1}>
                </Col>
                <Col md={2}>

                </Col>
                <Col md={2}>
                    <Button onClick={buyHandler}>BUY NOW</Button>

                </Col>
                <Col md={2}>
                    <Button onClick={buyHandler}>BUY NOW</Button>

                </Col>
                <Col md={2}>

                </Col>
                <Col md={2}>

                </Col>
                <Col md={1}>
                </Col>
            </Row>
            <Row style={{ marginTop: "15px" }}>
                <Col md={1}>
                </Col>
                <Col md={2}>
                    <h6>Delivery</h6>
                </Col>
                <Col md={2}>
                    <p>8 Jun, Wednesday for Free</p>

                </Col>
                <Col md={2}>
                    <p>8 Jun, Wednesday for Free</p>

                </Col>
                <Col md={2}>

                </Col>
                <Col md={2}>

                </Col>
                <Col md={1}>
                </Col>
            </Row>

            <Row>
                <Col md={1}>
                </Col>
                <Col md={2}>
                    <h6>Variants</h6>
                </Col>
                <Col md={2}>
                    <h6>Color(3)</h6>
                    <p>Aquamarine Blue, Matte black, Stardust White</p>
                    <h6>RAM(2)</h6>
                    <p>6 GB, 8 GB</p>

                </Col>
                <Col md={2}>
                    <h6>Color(2)</h6>
                    <p>Prism Black, Prism Blue</p>
                    <h6>Storage(2)</h6>
                    <p>64 GB, 128 GB</p>
                    <h6>RAM(2)</h6>
                    <p>4 GB, 6 GB</p>

                </Col>
                <Col md={2}>

                </Col>
                <Col md={2}>

                </Col>
                <Col md={1}>
                </Col>
            </Row>
            <Row>
                <Col md={1}></Col>
                <Col md={10}>
                    <hr></hr>
                </Col>
            </Row>

            <Row>
                <Col md={1}>
                </Col>
                <Col md={2}>
                    <h5>GENERAL FEATURES</h5>
                </Col>

            </Row>
            <Row>
                <Col md={1}>
                </Col>
                <Col md={2}>
                    <h6>SIM Size</h6>
                </Col>
                <Col md={2}>
                    

                </Col>
                <Col md={2}>
                

                </Col>
                <Col md={2}>

                </Col>
                <Col md={2}>

                </Col>
                <Col md={1}>
                </Col>
            </Row>
            <Row>
                <Col md={1}>
                </Col>
                <Col md={2}>
                    <h6>SIM Type</h6>
                </Col>
                <Col md={2}>
                

                </Col>
                <Col md={2}>
                

                </Col>
                <Col md={2}>

                </Col>
                <Col md={2}>

                </Col>
                <Col md={1}>
                </Col>
            </Row>
            <Row>
                <Col md={1}>
                </Col>
                <Col md={2}>
                    <h6>Network Type</h6>
                </Col>
                <Col md={2}>
                    

                </Col>
                <Col md={2}>
                    

                </Col>
                <Col md={2}>

                </Col>
                <Col md={2}>

                </Col>
                <Col md={1}>
                </Col>
            </Row>
            <Row>
                <Col md={1}>
                </Col>
                <Col md={2}>
                    <h6>Battery Capacity</h6>
                </Col>
                <Col md={2}>
                    

                </Col>
                <Col md={2}>
                    

                </Col>
                <Col md={2}>

                </Col>
                <Col md={2}>
                </Col>
                <Col md={1}>
                </Col>
            </Row>
            <Row>
                <Col md={1}>
                </Col>
                <Col md={2}>
                    <h6>Sensors</h6>
                    <br></br>
                </Col>

                <Col md={2}>
                    

                </Col>
                <Col md={2}>
                    

                </Col>
                <Col md={2}>

                </Col>
                <Col md={2}>

                </Col>
                <Col md={1}>
                </Col>
            </Row>
            <Row>
                <Col md={1}>
                </Col>
                <Col md={2}>
                    <h5>PLATFORM & PERFORMANCE</h5>
                </Col>

            </Row>
            <Row>
                <Col md={1}>
                </Col>
                <Col md={2}>
                    <h6>OS</h6>
                </Col>
                <Col md={2}>
                    

                </Col>
                <Col md={2}>
                

                </Col>
                <Col md={2}>

                </Col>
                <Col md={2}>

                </Col>
                <Col md={1}>
                </Col>
            </Row>
            <Row>
                <Col md={1}>
                </Col>
                <Col md={2}>
                    <h6>Processor</h6>
                </Col>
                <Col md={2}>
                

                </Col>
                <Col md={2}>
                

                </Col>
                <Col md={2}>

                </Col>
                <Col md={2}>

                </Col>
                <Col md={1}>
                </Col>
            </Row>
            <Row>
                <Col md={1}>
                </Col>
                <Col md={2}>
                    <h6>RAM</h6>
                </Col>
                <Col md={2}>
                    

                </Col>
                <Col md={2}>
                    

                </Col>
                <Col md={2}>

                </Col>
                <Col md={2}>

                </Col>
                <Col md={1}>
                </Col>
            </Row>
            <Row>
                <Col md={1}>
                </Col>
                <Col md={2}>
                    <h6>Graphics</h6>
                </Col>
                <Col md={2}>
                    

                </Col>
                <Col md={2}>
                    

                </Col>
                <Col md={2}>

                </Col>
                <Col md={2}>

                </Col>
                <Col md={1}>
                </Col>
            </Row>
            <Row>
                <Col md={1}>
                </Col>
                <Col md={2}>
                    <h6>Sensors</h6>
                    <br></br>
                </Col>
                <Col md={2}>
                    

                </Col>
                <Col md={2}>
                    

                </Col>
                <Col md={2}>

                </Col>
                <Col md={2}>

                </Col>
                <Col md={1}>
                </Col>
            </Row>

            <Row>
                <Col md={1}>
                </Col>
                <Col md={2}>
                    <h5>CAMERA</h5>
                </Col>

            </Row>
            <Row>
                <Col md={1}>
                </Col>
                <Col md={2}>
                    <h6>Primary Camera</h6>
                </Col>
                <Col md={2}>
                    

                </Col>
                <Col md={2}>
                

                </Col>
                <Col md={2}>

                </Col>
                <Col md={2}>

                </Col>
                <Col md={1}>
                </Col>
            </Row>
            <Row>
                <Col md={1}>
                </Col>
                <Col md={2}>
                    <h6>Front Camera</h6>
                </Col>
                <Col md={2}>
                

                </Col>
                <Col md={2}>
                

                </Col>
                <Col md={2}>

                </Col>
                <Col md={2}>

                </Col>
                <Col md={1}>
                </Col>
            </Row>
            <Row>
                <Col md={1}>
                </Col>
                <Col md={2}>
                    <h6>Flash</h6>
                </Col>
                <Col md={2}>
                    

                </Col>
                <Col md={2}>
                    

                </Col>
                <Col md={2}>

                </Col>
                <Col md={2}>

                </Col>
                <Col md={1}>
                </Col>
            </Row>
            <Row>
                <Col md={1}>
                </Col>
                <Col md={2}>
                    <h6>Zoom</h6>
                </Col>
                <Col md={2}>
                    

                </Col>
                <Col md={2}>
                    

                </Col>
                <Col md={2}>

                </Col>
                <Col md={2}>

                </Col>
                <Col md={1}>
                </Col>
            </Row>
            <Row>
                <Col md={1}>
                </Col>
                <Col md={2}>
                    <h6>Video Recording</h6>
                    <br></br>
                </Col>
                <Col md={2}>
                    

                </Col>
                <Col md={2}>
                    

                </Col>
                <Col md={2}>

                </Col>
                <Col md={2}>

                </Col>
                <Col md={1}>
                </Col>
            </Row>

            <Row>
                <Col md={1}>
                </Col>
                <Col md={2}>
                    <h5>DISPLAY</h5>
                </Col>

            </Row>
            <Row>
                <Col md={1}>
                </Col>
                <Col md={2}>
                    <h6>Resolution</h6>
                </Col>
                <Col md={2}>
                    

                </Col>
                <Col md={2}>
                

                </Col>
                <Col md={2}>

                </Col>
                <Col md={2}>

                </Col>
                <Col md={1}>
                </Col>
            </Row>
            <Row>
                <Col md={1}>
                </Col>
                <Col md={2}>
                    <h6>Features</h6>
                </Col>
                <Col md={2}>
                

                </Col>
                <Col md={2}>
                

                </Col>
                <Col md={2}>

                </Col>
                <Col md={2}>

                </Col>
                <Col md={1}>
                </Col>
            </Row>
            <Row>
                <Col md={1}>
                </Col>
                <Col md={2}>
                    <h6>RAM</h6>
                </Col>
                <Col md={2}>
                    

                </Col>
                <Col md={2}>
                    

                </Col>
                <Col md={2}>

                </Col>
                <Col md={2}>

                </Col>
                <Col md={1}>
                </Col>
            </Row>
            <Row>
                <Col md={1}>
                </Col>
                <Col md={2}>
                    <h6>Graphics</h6>
                </Col>
                <Col md={2}>
                    

                </Col>
                <Col md={2}>
                    

                </Col>
                <Col md={2}>

                </Col>
                <Col md={2}>

                </Col>
                <Col md={1}>
                </Col>
            </Row>
            <Row>
                <Col md={1}>
                </Col>
                <Col md={2}>
                    <h6>Sensors</h6>
                    <br></br>
                </Col>
                <Col md={2}>
                    

                </Col>
                <Col md={2}>
                    

                </Col>
                <Col md={2}>

                </Col>
                <Col md={2}>

                </Col>
                <Col md={1}>
                </Col>
            </Row>

            <Row>
                <Col md={1}>
                </Col>
                <Col md={2}>
                    <h5>STORAGE</h5>
                </Col>

            </Row>
            <Row>
                <Col md={1}>
                </Col>
                <Col md={2}>
                    <h6>Internal Memory</h6>
                </Col>
                <Col md={2}>
                    

                </Col>
                <Col md={2}>
                

                </Col>
                <Col md={2}>

                </Col>
                <Col md={2}>

                </Col>
                <Col md={1}>
                </Col>
            </Row>
            <Row>
                <Col md={1}>
                </Col>
                <Col md={2}>
                    <h6>Expandable Memory</h6>
                </Col>
                <Col md={2}>
                

                </Col>
                <Col md={2}>
                

                </Col>
                <Col md={2}>

                </Col>
                <Col md={2}>

                </Col>
                <Col md={1}>
                </Col>
            </Row>
            <Row>
                <Col md={1}>
                </Col>
                <Col md={2}>
                    <h6>RAM</h6>
                </Col>
                <Col md={2}>
                    

                </Col>
                <Col md={2}>
                    

                </Col>
                <Col md={2}>

                </Col>
                <Col md={2}>

                </Col>
                <Col md={1}>
                </Col>
            </Row>
            <Row>
                <Col md={1}>
                </Col>
                <Col md={2}>
                    <h6>Graphics</h6>
                </Col>
                <Col md={2}>
                    

                </Col>
                <Col md={2}>
                    

                </Col>
                <Col md={2}>

                </Col>
                <Col md={2}>

                </Col>
                <Col md={1}>
                </Col>
            </Row>
            <Row>
                <Col md={1}>
                </Col>
                <Col md={2}>
                    <h6>Sensors</h6>
                    <br></br>
                </Col>
                <Col md={2}>
                    

                </Col>
                <Col md={2}>
                    

                </Col>
                <Col md={2}>

                </Col>
                <Col md={2}>

                </Col>
                <Col md={1}>
                </Col>
            </Row>

            <Row>
                <Col md={1}>
                </Col>
                <Col md={2}>
                    <h5>CONNECTIVITY FEATURES</h5>
                </Col>

            </Row>
            <Row>
                <Col md={1}>
                </Col>
                <Col md={2}>
                    <h6>USB</h6>
                </Col>
                <Col md={2}>
                    

                </Col>
                <Col md={2}>
                

                </Col>
                <Col md={2}>

                </Col>
                <Col md={2}>

                </Col>
                <Col md={1}>
                </Col>
            </Row>
            <Row>
                <Col md={1}>
                </Col>
                <Col md={2}>
                    <h6>WiFi</h6>
                </Col>
                <Col md={2}>
                

                </Col>
                <Col md={2}>
                

                </Col>
                <Col md={2}>

                </Col>
                <Col md={2}>

                </Col>
                <Col md={1}>
                </Col>
            </Row>
            <Row>
                <Col md={1}>
                </Col>
                <Col md={2}>
                    <h6>Bluetooth</h6>
                </Col>
                <Col md={2}>
                    

                </Col>
                <Col md={2}>
                    

                </Col>
                <Col md={2}>

                </Col>
                <Col md={2}>

                </Col>
                <Col md={1}>
                </Col>
            </Row>
            <Row>
                <Col md={1}>
                </Col>
                <Col md={2}>
                    <h6>Graphics</h6>
                </Col>
                <Col md={2}>
                    

                </Col>
                <Col md={2}>
                    

                </Col>
                <Col md={2}>

                </Col>
                <Col md={2}>

                </Col>
                <Col md={1}>
                </Col>
            </Row>
            <Row>
                <Col md={1}>
                </Col>
                <Col md={2}>
                    <h6>Sensors</h6>
                    <br></br>
                </Col>
                <Col md={2}>
                    

                </Col>
                <Col md={2}>
                    

                </Col>
                <Col md={2}>

                </Col>
                <Col md={2}>

                </Col>
                <Col md={1}>
                </Col>
            </Row>

            
            {/* <Row>
                <Col md={1}>
                </Col>
                <Col md={2}>
                    
                    
                </Col>
                <Col md={2}>
                    <img src="https://rukminim1.flixcart.com/image/182/182/kwv0djk0/mobile/g/h/4/note-11t-21091116ai-mzb0a8qin-redmi-original-imag9g37hzxggjgg.jpeg?q=90"></img>

                </Col>
                <Col md={2}>
                

                </Col>
                <Col md={2}>

                </Col>
                <Col md={2}>

                </Col>
                <Col md={1}>
                </Col>
            </Row>
            <Row>
                <Col md={1}>
                </Col>
                <Col md={2}>
                    
                </Col>
                <Col md={2}>
                    <p>REDMI Note 11T 5G (Stardust White, 128 GB)  (6 GB RAM)</p>

                </Col>
                <Col md={2}>
                

                </Col>
                <Col md={2}>

                </Col>
                <Col md={2}>

                </Col>
                <Col md={1}>
                </Col>
            </Row>
            <Row>
                <Col md={1}>
                </Col>
                <Col md={2}>
                    
                </Col>
                <Col md={2}>
                    

                </Col>
                <Col md={2}>
                    

                </Col>
                <Col md={2}>

                </Col>
                <Col md={2}>

                </Col>
                <Col md={1}>
                </Col>
            </Row>
            <Row>
                <Col md={1}>
                </Col>
                <Col md={2}>
                    
                </Col>
                <Col md={2}>
                    

                </Col>
                <Col md={2}>
                    

                </Col>
                <Col md={2}>

                </Col>
                <Col md={2}>

                </Col>
                <Col md={1}>
                </Col>
            </Row>
            <Row>
                <Col md={1}>
                </Col>
                <Col md={2}>
                    
                    
                </Col>
                <Col md={2}>
                    

                </Col>
                <Col md={2}>
                    

                </Col>
                <Col md={2}>

                </Col>
                <Col md={2}>

                </Col>
                <Col md={1}>
                </Col>
            </Row> */}



            


        </div>
    )
}
export default CompareProducts;