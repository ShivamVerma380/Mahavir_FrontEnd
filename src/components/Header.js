import React  from "react";
import { Row,Col, Container } from "reactstrap";
import '../App.css';
// import {BsPinMapFill,BsFillPersonFill,BsFillCartPlusFill,BsSearch} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,FormControl,Button,Form,NavDropdown, Nav} from 'react-bootstrap';

// import 'bootstrap/dist/css/bootstrap.min.css';
import FormData from "form-data"; 
import axios from "axios";

const Header = () => {

    const navigate = useNavigate();

    const EmailVerification = () => {
        navigate("/email-verification");
        console.log("In email verification");

        // var bodyFormData = new FormData();
        // bodyFormData.append("email","siddhant.21910811@viit.ac.in")
        // axios({
        //     method: "get",
        //     url: "http://localhost:8080/verify-email/siddhant.21910811@viit.ac.in"
        //   })
        //     .then(function (response) {
        //       //handle success
        //       console.log(response.data);
        //     })
        //     .catch(function (response) {
        //       //handle error
        //       console.log(response);
        //     });
          
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

    const callEmailAuth=()=>{
        navigate("/email-auth");
    }
    return(
        <div>
           <Navbar bg="light" expand="lg">
            <Container fluid>
            <Navbar.Brand href="/" style={{fontFamily:"Tapestry"}}><img className="logo_mahavir" src = {require ('../assets/logo.jpg')}/>MAHAVIR</Navbar.Brand>
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
                <Nav.Link><i  class="fa fa-map-marker" style={{paddingLeft:"20px" , paddingRight:"10px"}}>Pune</i></Nav.Link>
                    <Nav.Link><i class="fa fa-user" style={{paddingLeft:"10px" , paddingRight:"10px"}} onClick={callEmailAuth}></i></Nav.Link>
                    <Nav.Link ><i  class="fa fa-shopping-cart" style={{paddingLeft:"10px" , paddingRight:"20px"}} onClick={verifyOTP}></i></Nav.Link>
                    <NavDropdown title="Our Location" id="collasible-nav-dropdown" style={{marginRight:"25px"}}>
                        <NavDropdown.Item href="https://g.page/mahavir-electronics-and-furnitur?share" target="_blank">Bibvewadi</NavDropdown.Item>
                        <NavDropdown.Item href="https://goo.gl/maps/Ukw2xUZkrXfjz25g8" target="_blank">Sinhagad Rd</NavDropdown.Item>
                        <NavDropdown.Item href="https://goo.gl/maps/eLmvYz7aLYgTuiSa7" target="_blank">Kothrud</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
    
}

export default Header;