import React  from "react";
import { Row,Col, Container } from "reactstrap";
import '../App.css';
// import {BsPinMapFill,BsFillPersonFill,BsFillCartPlusFill,BsSearch} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,FormControl,Button,Form,NavDropdown, Nav} from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
const Header = () => {

    const navigate = useNavigate();

    const EmailVerification = () => {
        navigate("/email-verification");
    }
    const verifyOTP=()=>{
        navigate('/otp');
    }
    // const login =() =>{
    //     navigate('/login')
    // }
    const signup=()=>{
        navigate("/sign-up");
    }
    return(
        <div>
           <Navbar bg="light" expand="lg">
            <Container fluid>
            <Navbar.Brand href="#" style={{fontFamily:"Tapestry"}}><img className="logo_mahavir" src = {require ('../assets/logo.jpg')}/>MAHAVIR</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                </Nav>
                <Nav>
                <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Nav.Link href="#action1"><i class="fa fa-search icon" ></i></Nav.Link> 
                </Form>
                <Nav.Link><i  class="fa fa-map-marker" style={{paddingLeft:"20px" , paddingRight:"20px"}}>Pune</i></Nav.Link>
                    <Nav.Link><i class="fa fa-user" style={{paddingLeft:"20px" , paddingRight:"20px"}} onClick={EmailVerification}></i></Nav.Link>
                    <Nav.Link ><i  class="fa fa-shopping-cart" style={{paddingLeft:"20px" , paddingRight:"20px"}} onClick={verifyOTP}></i></Nav.Link>
                
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
    
}

export default Header;