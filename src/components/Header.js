import React  from "react";
import { Row,Col, Container } from "reactstrap";
import '../App.css';
import {BsPinMapFill,BsFillPersonFill,BsFillCartPlusFill,BsSearch} from "react-icons/bs";

const Header = () => {
    return(
        <div>
            <Container>
                <Row className="mt-4">
                <Col ms="1" ><img className="logo_mahavir" src = {require ('../assets/images.jpg')}/></Col>
                <Col  ms="2" style={{fontFamily:"Tapestry"}}>MAHAVIR</Col>
                <Col  ms="2"> <BsPinMapFill /><b>Pune</b></Col>
                <Col  md="4" class="inline"><input type="search" placeholder="Search"></input><i class="fa fa-search icon" style={{margin:"10px"}}></i></Col>
                <Col  ms="1"> <BsFillPersonFill/></Col>
                <Col  ms="1"> <BsFillCartPlusFill/></Col>
                </Row>
            </Container>
        </div>
    );
    
}

export default Header;