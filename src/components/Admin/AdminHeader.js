import React  from "react";
import { Row,Col, Container } from "reactstrap";
// import '../App.css';
// import {BsPinMapFill,BsFillPersonFill,BsFillCartPlusFill,BsSearch} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,FormControl,Button,Form,NavDropdown, Nav} from 'react-bootstrap';
import SideNav, { Toggle, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// import 'bootstrap/dist/css/bootstrap.min.css';


const AdminHeader = () => {

    let name = localStorage.getItem("Name")
   // let isUserLoggedIn = localStorage.getItem("isUserLoggedIn")
    const navigate = useNavigate();
    var loginStatus = localStorage.getItem("isLoggedIn");
    const [isUserLoggedIn,setIsUserLoggedIn] = React.useState(localStorage.getItem("isLoggedIn"));
    if(loginStatus=="true"){
        console.log("In login status")
        setIsUserLoggedIn(true);
    }
      
    
    //const [isLogoutClicked,setIsLogoutClicked] = React.useState(true);
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

    const callLogin=()=>{
        setIsUserLoggedIn(true);
        navigate("/login")
    }

    const callAdmin=()=>{
        navigate("/admin")
    }

    const handleLogout=()=>{
        setIsUserLoggedIn(false);
        alert(localStorage.getItem("isLoggedIn"));
        localStorage.setItem("isLoggedIn",false);
        alert(localStorage.getItem("isLoggedIn"));
        

        
    }

    
    return(
        <div>

            

           <Navbar bg="light" expand="lg">
            <Container fluid>
            <Navbar.Brand href="/" style={{fontFamily:"Tapestry", marginLeft:"100px"}}><img className="logo_mahavir" src = {require ('../../assets/logo.jpg')}/>MAHAVIR</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                </Nav>
                <Nav>
                
                     
               
                <Nav.Link><i  class="fa fa-map-marker" style={{paddingLeft:"20px" , paddingRight:"10px"}} onClick={callAdmin}>Pune</i></Nav.Link>
                {(isUserLoggedIn)?null:(<Nav.Link><i class="fa fa-user" style={{paddingLeft:"10px" , paddingRight:"10px"}} onClick={callLogin}></i></Nav.Link>)}   
                {isUserLoggedIn ?(<NavDropdown title={"Hi, "+(name)} id="collasible-nav-dropdown" style={{marginRight:"25px"}}>
                        <NavDropdown.Item target="_blank" onClick={handleLogout}>Logout</NavDropdown.Item> 
                    </NavDropdown>):null}                       
                    <NavDropdown title="Our Location" id="collasible-nav-dropdown" style={{marginRight:"200px"}}>
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

export default AdminHeader;