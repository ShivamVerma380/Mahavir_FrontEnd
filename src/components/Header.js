import React  from "react";
import { Row,Col  } from "reactstrap";
import '../App.css';
// import {BsPinMapFill,BsFillPersonFill,BsFillCartPlusFill,BsSearch} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,FormControl,Container,NavLink,Button,Form,NavDropdown, Nav,Offcanvas} from 'react-bootstrap';
import SearchBar from "./SearchBar"
// import 'bootstrap/dist/css/bootstrap.min.css';
import FormData from "form-data"; 
import axios from "axios";
import Login from "./Login-Signup/Login";
import Search from "./SearchBar/Search";
import '../assets/fonts/Olive Compact MN Regular.ttf'
import './Header.css';
const Header = ({productList}) => {

    
      function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
      }

      function setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    var name = getCookie("Name");
    var isUserLoggedIn=getCookie("isLoggedIn");
    const navigate = useNavigate();
    // var loginStatus = localStorage.getItem("isLoggedIn");
    // var flag= false;
    // if(localStorage.getItem("isLoggedIn")==="true"){
    //     flag = true;
    // }
    // const[isUserLoggedIn,setIsUserLoggedIn] = React.useState(flag);
    // console.log("logged:",isUserLoggedIn);
    // if(loginStatus=="true"){
    //     console.log("In login status")
    //     setIsUserLoggedIn(true);
    // }
      
    
    //const [isLogoutClicked,setIsLogoutClicked] = React.useState(true);
    const EmailVerification = () => {
        navigate("/email-verification");
        console.log("In email verification");

        
          
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
        // setIsUserLoggedIn(true);
        navigate("/login")
    }
    const Cart=()=>{
        // setIsUserLoggedIn(true);
        navigate("/cart")
    }

    const callAdmin=()=>{
        navigate("/admin")
    }

    const handleMyOrders=()=>{
        navigate("/my-orders")
    }

    const handleLogout=()=>{
        console.log("logout clicked");
        
        setCookie("isLoggedIn",false,20)
        navigate('/')
        
        
    }

    const handleWishlist=()=>{
        alert("Wishlist clicked")
        navigate("/wishlist")
    }
    
    return(
        <div className="Header">

  {['md'].map((expand) => (
    <Navbar  key={expand} bg="dark" expand={expand} >
      <Container fluid>
        <Navbar.Brand href="/" style={{fontFamily:"Olive Compact MN Regular", fontSize:'42px',color:' #d72419'}}><img className="logo_mahavir" src = {require ('../assets/mahavirlogo.jpg')}/><span style={{marginLeft:'10px'}}></span>Mahavir</Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              MAHAVIR
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
          
            <Nav className="justify-content-end flex-grow-1 pe-3" >
            <Search/>
            {/* <SearchBar  productList={productList}/> */}
            {/* <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Nav.Link href="#action1"><i class="fa fa-search icon" ></i></Nav.Link> 
                </Form> */}
                {/* <NavLink style={{color:'black'}}><i class="fa fa-user"  onClick={callAdmin}>Admin</i></NavLink> */}
                {/* <Nav.Link><i  class="fa fa-map-marker" >Pune</i></Nav.Link> */}
                {/* {(isUserLoggedIn)?() :(null)}   
                {(isUserLoggedIn) ? (null):( 
                        
                   )}                        */}
                {/* {
                    (isUserLoggedIn)?(
                        <NavDropdown renderMenuOnMount={false} title={"Hi, "+(name)} id="collasible-nav-dropdown" >
                        <NavDropdown.Item onClick={()=>handleWishlist()}>WishList</NavDropdown.Item>  
                        <NavDropdown.Item  onClick={()=>handleMyOrders()}>My Orders</NavDropdown.Item>
                        <NavDropdown.Item target="_blank" onClick={()=>handleLogout()}>Logout</NavDropdown.Item>
                        </NavDropdown>
                        
                    ):(
                        <Nav.Link  onClick={callLogin}>Hi, Sign In</Nav.Link>
                    )
                } */}
                <Nav.Link style={{color:'white'}}><i  class="fa fa-shopping-cart fa-lg"  onClick={Cart} ></i></Nav.Link>
                <NavDropdown className="location" renderMenuOnMount={false} title="Our Location" id={`offcanvasNavbarDropdown-expand-${expand}`} >
                    <NavDropdown.Item style={{color:'black',fontSize:"20px",fontWeight:'bold'}} href="https://g.page/mahavir-electronics-and-furnitur?share" target="_blank">Bibvewadi</NavDropdown.Item>
                    <NavDropdown.Item style={{color:'black',fontSize:"20px",fontWeight:'bold'}} href="https://goo.gl/maps/Ukw2xUZkrXfjz25g8" target="_blank">Sinhagad Rd</NavDropdown.Item>
                    <NavDropdown.Item style={{color:'black',fontSize:"20px",fontWeight:'bold'}} href="https://goo.gl/maps/eLmvYz7aLYgTuiSa7" target="_blank">Kothrud</NavDropdown.Item>
                </NavDropdown>
                {
                    
                    (isUserLoggedIn==="true")?(
                        <NavDropdown style={{backgroundImage:'linear-gradient(135deg, rgb(255, 51, 66) 0%, rgb(255, 48, 64) 0.01%, rgb(255, 125, 102) 100%)',borderRadius:'12px',fontWeight:'900',paddingLeft:'20px',paddingRight:'20px'}} renderMenuOnMount={false} title={"Hi, "+(name)} id="collasible-nav-dropdown" >
                        <NavDropdown.Item style={{color:'black',fontSize:"20px",fontWeight:'bold'}} onClick={()=>handleWishlist()}>WishList</NavDropdown.Item>  
                        <NavDropdown.Item  style={{color:'black',fontSize:"20px",fontWeight:'bold'}} onClick={()=>handleMyOrders()}>My Orders</NavDropdown.Item>
                        <NavDropdown.Item style={{color:'black',fontSize:"20px",fontWeight:'bold'}} target="_blank" onClick={()=>handleLogout()}>Logout</NavDropdown.Item>
                        </NavDropdown>
                    ):(<Nav.Link style={{backgroundImage:'linear-gradient(135deg, rgb(255, 51, 66) 0%, rgb(255, 48, 64) 0.01%, rgb(255, 125, 102) 100%)',borderRadius:'12px',fontWeight:'900',paddingLeft:'20px',paddingRight:'20px'}} onClick={callLogin}>Hi, Sign In</Nav.Link>)
                }
                {/* <NavDropdown style={{backgroundImage:'linear-gradient(135deg, rgb(255, 51, 66) 0%, rgb(255, 48, 64) 0.01%, rgb(255, 125, 102) 100%)',borderRadius:'12px',fontWeight:'900',paddingLeft:'20px',paddingRight:'20px'}} renderMenuOnMount={false} title={"Hi, "+(name)} id="collasible-nav-dropdown" >
                        <NavDropdown.Item style={{color:'black',fontSize:"20px",fontWeight:'bold'}} onClick={()=>handleWishlist()}>WishList</NavDropdown.Item>  
                        <NavDropdown.Item  style={{color:'black',fontSize:"20px",fontWeight:'bold'}} onClick={()=>handleMyOrders()}>My Orders</NavDropdown.Item>
                        <NavDropdown.Item style={{color:'black',fontSize:"20px",fontWeight:'bold'}} target="_blank" onClick={()=>handleLogout()}>Logout</NavDropdown.Item>
                        </NavDropdown> */}
                
                
                        

                    
            </Nav>
            
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  ))}

         {/* <Navbar bg="light" expand="lg">
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
                <NavLink><i class="fa fa-user" style={{paddingLeft:"10px" , paddingRight:"10px"}} onClick={callAdmin}>Admin</i></NavLink>
                <Nav.Link><i  class="fa fa-map-marker" style={{paddingLeft:"20px" , paddingRight:"10px"}}>Pune</i></Nav.Link>
                {(isUserLoggedIn)?null:(<Nav.Link><i class="fa fa-user" style={{paddingLeft:"10px" , paddingRight:"10px"}} onClick={callLogin}></i></Nav.Link>)}   
                {isUserLoggedIn ?(<NavDropdown title={"Hi, "+(name)} id="collasible-nav-dropdown" style={{marginRight:"25px"}}>
                        <NavDropdown.Item  onClick={handleMyOrders}>My Orders</NavDropdown.Item>
                        <NavDropdown.Item target="_blank" onClick={handleLogout}>Logout</NavDropdown.Item> 
                    </NavDropdown>):null}                       
                    <Nav.Link ><i  class="fa fa-shopping-cart"  onClick={Cart} style={{paddingLeft:"10px" , paddingRight:"20px"}}></i></Nav.Link>
                    <NavDropdown title="Our Location" id="collasible-nav-dropdown" style={{marginRight:"25px"}}>
                        <NavDropdown.Item href="https://g.page/mahavir-electronics-and-furnitur?share" target="_blank">Bibvewadi</NavDropdown.Item>
                        <NavDropdown.Item href="https://goo.gl/maps/Ukw2xUZkrXfjz25g8" target="_blank">Sinhagad Rd</NavDropdown.Item>
                        <NavDropdown.Item href="https://goo.gl/maps/eLmvYz7aLYgTuiSa7" target="_blank">Kothrud</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
  </Navbar>*/}
        </div>
    );
    
}

export default Header;