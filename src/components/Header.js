import React, { useEffect, useState }  from "react";
import { Row,Col  } from "reactstrap";
import '../App.css';
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Container,NavDropdown, Nav,Offcanvas} from 'react-bootstrap';
import axios from "axios";
import Search from "./SearchBar/Search";
import './Header.css';
import './styles.css';
import {AiOutlineHeart} from "react-icons/ai";
import {FaUserAlt} from "react-icons/fa"
import {BiMap} from "react-icons/bi"
import {MdOutlineLocalShipping} from "react-icons/md"
import 'typeface-roboto';
import {RiArrowDropDownLine} from "react-icons/ri"
import {HiOutlineShoppingCart} from "react-icons/hi"
import url from "../Uri";


const Header = ({productList}) => {
      
  const [categoryDisplay,setcategoryDisplay] = useState([]);
  const [isCategoryDisplayFetched,setIsCategoryDisplayFetched]=useState(false);


      
  useEffect(()=>{
    if(!isCategoryDisplayFetched){
    axios.get(url+"/get-categories").then(function(response){
      if(response.status===200){
          setcategoryDisplay(response.data);
          setIsCategoryDisplayFetched(true);
      }
    }).catch(function(error){
        console.log("error");
    })
  }
  });

  var count = 0;
  getCookie("CartModels").split(',').map(m=>{
    
    if(m!==""){
      count++;
    }
  })
    

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


    const callLogin=()=>{
        navigate("/login")
    }
    const Cart=()=>{
        navigate("/cart")
    }


    const handleMyOrders=()=>{
        navigate("/rate-products")
    }

    const handleInvoice=()=>{
        navigate("/my-orders")
      }

    const handleLogout=()=>{
        localStorage.removeItem("Wishlist");
        setCookie("jwtToken",false,20)
        setCookie("isLoggedIn",false,20)
        navigate('/')
        window.location.reload();

        
        
    }

    const handleWishlist=()=>{
        navigate("/wishlistproducts")
    }

    function handleDevelopersPage(){
        navigate("/developerpage")
    }
    
    return(
      <>
        
      
      <div className="Header">
          
      <div className="top-header" >
        
        <Row>
          <Col md={3} style={{marginLeft:"0px"}}>
            <p style={{color:"white",fontSize:"13px",marginTop:"6px",fontWeight:500,fontFamily:"Roboto",marginLeft:"20px"}}><MdOutlineLocalShipping style={{color:"white",height:"25px",width:"25px"}}/> FREE Express Shipping On All Orders</p>
          </Col>
          <Col md={4}></Col>
          <Col md={1} style={{marginLeft:"00px"}}>
          <NavDropdown style={{color:'white',marginTop:"-6px"}} title={<p style={{color:"white",fontSize:"13px",marginTop:"4px",fontWeight:500,fontFamily:"Roboto"}}><BiMap style={{color:"white",height:"25px",width:"25px"}}/> Store<RiArrowDropDownLine style={{color:"white"}} size={25}/></p>} >
                    <NavDropdown.Item style={{color:'black',fontSize:"13px",fontWeight:500}} href="https://g.page/mahavir-electronics-and-furnitur?share" target="_blank">Bibvewadi</NavDropdown.Item>
                    <NavDropdown.Item style={{color:'black',fontSize:"13px",fontWeight:500}} href="https://goo.gl/maps/Ukw2xUZkrXfjz25g8" target="_blank">Sinhagad Rd</NavDropdown.Item>
                    <NavDropdown.Item style={{color:'black',fontSize:"13px",fontWeight:500}} href="https://goo.gl/maps/eLmvYz7aLYgTuiSa7" target="_blank">Kothrud</NavDropdown.Item>
          </NavDropdown>
          </Col>
          <Col md={1} >
            <p className="wishlist_" style={{color:"white",fontSize:"13px",marginTop:"6px",fontWeight:500,fontFamily:"Roboto",cursor:"pointer"}}  onClick={()=>handleWishlist()}><AiOutlineHeart style={{color:"white",height:"25px",width:"25px"}}/> Wishlist</p>
          </Col>
          <Col md={2}>

            <p style={{color:"white",marginTop:"6px",cursor:"pointer"}} onClick={handleDevelopersPage}>Developer Team</p>

          </Col>
         
        </Row>
        
      </div>
      
  {['md'].map((expand) => (
    <Navbar className="header" key={expand} bg="light" expand={expand} >
       {/* fixed="top"  */}
      <Container fluid>
        <Navbar.Brand href="/" style={{color:'rgb(237, 28, 36)'}} className="mahavirtitle"><img className="logo_mahavir" src = {require ('../assets/mahavirlogo.jpg')}/><span style={{marginLeft:'10px'}}></span>Mahavir</Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
            <h1 className="mahavir">Mahavir </h1>
            
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            
            <Nav className="justify-content-end flex-grow-1 pe-3" >
            <Search />
                            
                {
                  (isUserLoggedIn==="true")?(
                    <NavDropdown style={{color:'#04001d'}} title={<><b style={{color:"#04001d",fontSize:"18px"}}><FaUserAlt style={{color:"#04001d"}} size={30}/> Hi, {name}<RiArrowDropDownLine style={{color:"#04001d"}} size={25} /></b></>} id="collasible-nav-dropdown">
                      <NavDropdown.Item style={{color:'black'}} onClick={()=>handleMyOrders()}>Rate & Review</NavDropdown.Item>
                      <NavDropdown.Item style={{color:'black'}} onClick={()=>handleInvoice()}>My Orders</NavDropdown.Item>
                      <NavDropdown.Item style={{color:'black'}} target="_blank" onClick={()=>handleLogout()}>Logout</NavDropdown.Item>
                    </NavDropdown>
                  ):(
                    <Nav.Link style={{color:'#04001d'}} onClick={callLogin}><b style={{color:"Black",fontSize:"18px",fontWeight:600,fontFamily:"Roboto"}}><FaUserAlt size={30}/> SignIn / Register</b></Nav.Link>
                  )
                }
                <Nav.Link style={{color:'#04001d', marginTop:'-10px'}}><HiOutlineShoppingCart style={{fontSize:"30px"}} onClick={Cart} /><b style={{verticalAlign: "super", color:"#C10000"}}>{count}</b></Nav.Link>
     
                    
            </Nav>
            
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  ))}

         
        </div>
        </>
        
        
    );
    
}

export default Header;