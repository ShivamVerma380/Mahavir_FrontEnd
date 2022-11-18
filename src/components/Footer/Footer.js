



import React from "react"
import {Row,Col, Button} from "react-bootstrap"
import { Icon } from '@iconify/react';
import { useNavigate } from "react-router-dom";
function Footer(){

    const navigate = useNavigate();

    function handleDevelopersPage(){
        navigate("/developerpage")
    }

    function handlePrivacyPolicy(){
        navigate("/privacypolicy")
    }
    function handleDevelopersPage(){
        navigate("/developerpage")
    }
    return(
        <div class="footer-clean">
            {/* <hr></hr> */}
            <footer>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-sm-4 col-md-3 item">
                            <h3 style={{color:"white"}}>About</h3>
                            <ul >
                                <li><a href="/#/aboutcompany">About Us</a></li>
                                <li><a href="/#/contactus">Contact Us</a></li>
                                <li><a href="/#/storelocator">Store Locator</a></li>
                                <li>
            <p style={{color:"white",marginTop:"6px",cursor:"pointer", fontSize:"14px"}} onClick={handleDevelopersPage}>Developer Team</p>

                                </li>
                                {/* <li><a href="#">Hear it from the Owners</a></li> */}
                            </ul>
                        </div>
                        <div class="col-sm-4 col-md-3 item">
                            <h3 style={{color:"white"}}>Policy</h3>
                            <ul>
                                <li><a href="/#/paymentreturns">Payments & Returns</a></li>
                                <li><a href="/#/terms-of-use">Terms of Use</a></li>
                                <li style={{cursor:"pointer"}}><p onClick={handlePrivacyPolicy}>Privacy Policy</p></li>
                            </ul>
                        </div>
                        <div class="col-sm-4 col-md-3 item">
                            <h3 style={{color:"white"}}>Help</h3>
                            <ul>
                                <li><a href="/#/faq">FAQ</a></li>
                                <li><a href="/#/shippingoptions">Shipping Options</a></li>
                                <li><a href="/#/developerpage">Developer Team</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-3 item social">
                            <a href="https://www.facebook.com/pages/category/Electronics/Mahavir-Electronics-Pune-106562364449114/"><Icon className="social" icon="bi:facebook" /></a>
                            <a href="https://www.instagram.com/mahavir.electronics.pune/?hl=en"><Icon icon="bi:instagram"/></a>
                            <a href="https://www.linkedin.com/company/mahavir-electronics-&-furniture/about/"><Icon icon="bi:linkedin"/></a>
                            
                        </div>
                    </div>
                </div>
            </footer>
            {/* <hr></hr> */}
        </div>
    );
};

export default Footer;





