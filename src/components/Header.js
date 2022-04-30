import React  from "react";
import { Row,Col, Container } from "reactstrap";
import '../App.css';
import {BsPinMapFill,BsFillPersonFill,BsFillCartPlusFill,BsSearch} from "react-icons/bs";

const Header = () => {
    return(
        <div>
            <Container>
                <Row className="mt-4">
                    <Col ><img className="logo_mahavir" src = {require ('../assets/images.jpg')}/></Col>
                    <Col style={{fontFamily:"Tapestry"}}>MAHAVIR</Col>
                    <Col sm="3" className="inline"><input type="search" placeholder="Search"></input><i class="fa fa-search icon" style={{margin:"10px"}}></i></Col>
                    <Col > <BsPinMapFill /><b>Pune</b></Col>
                    <Col> <BsFillPersonFill/></Col>
                    <Col > <BsFillCartPlusFill/></Col>
                </Row>
            </Container>
        </div>
    );
    
}

export default Header;