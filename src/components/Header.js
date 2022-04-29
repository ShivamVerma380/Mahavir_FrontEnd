import React  from "react";
import { Row,Col, Container } from "reactstrap";
import '../App.css';



const Header = () => {
    return(
        <div>
            <Container>
                <Row xs="6">
                    <Col md={4}><img style={{textAlign:"left"}} src = {require ('../assets/images.jpg')}/></Col>
                    <Col md={8}><h1 style={{textAlign:"left",marginLeft:100 , fontFamily:"Tapestry"}}>MAHAVIR</h1></Col>
                </Row>

            </Container>
            
        </div>
           
            
        /* </div>
        <header>
        <img style={{marginLeft:30, marginTop:30}} src = {require ('../assets/images.jpg')} width={75} height={75} />
        <h3 style={{textAlign:"left",marginLeft:150 ,fontFamily:"Tapestry"}}>MAHAVIR</h3>
        </header>
     */
    );
    
}

export default Header;