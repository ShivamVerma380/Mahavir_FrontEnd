import React  from "react";
import { Row,Col, Container } from "reactstrap";
import '../App.css';



const Header = () => {
    return(
        <div>
            <Container>
                <Row>
                    <Col md={4}>
                        <img style={{textAlign:"left"}} src="/assets/images.jpg" width={100} height={50}/>
                    </Col>
                    <Col md={8}>
                        <h1 style={{textAlign:"left",marginLeft:100 , fontFamily:"Tapestry"}}>MAHAVIR</h1>
                    </Col>
                </Row>

            </Container>
            
            
           
            
        </div>
    );
}

export default Header;