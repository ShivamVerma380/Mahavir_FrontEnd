import React from "react"
import {Row,Col} from "react-bootstrap"
import { Icon } from '@iconify/react';
function Footer(){
    
    return(
        <div class="footer-clean">
            <hr></hr>
            <footer>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-sm-4 col-md-3 item">
                            <h3>About</h3>
                            <ul>
                                <li><a href="/aboutcompany">About Us</a></li>
                                <li><a href="/contactus">Contact Us</a></li>
                                <li><a href="#">Store Locator</a></li>
                                <li><a href="#">Hear it from the Owners</a></li>
                            </ul>
                        </div>
                        <div class="col-sm-4 col-md-3 item">
                            <h3>Policy</h3>
                            <ul>
                                <li><a href="#">Return Policy</a></li>
                                <li><a href="#">Terms of Use</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div class="col-sm-4 col-md-3 item">
                            <h3>Help</h3>
                            <ul>
                                <li><a href="/faq">FAQ</a></li>
                                <li><a href="#">Career</a></li>
                                <li><a href="#">Shipping Areas</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-3 item social">
                            <a href="#"><Icon className="social" icon="bi:facebook" /></a>
                            <a href="#"><Icon icon="bi:twitter" /></a>
                            <a href="#"><Icon icon="bi:instagram" /></a>
                            <a href="#"><Icon icon="bi:plus-square-dotted" /></a>
                            <p class="copyright">Company Name © 2018</p>
                        </div>
                    </div>
                </div>
            </footer>
            <hr></hr>
        </div>
    );
};

export default Footer;