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
                            <h3>Usefull Links</h3>
                            <ul>
                                <li><a href="#">Web design</a></li>
                                <li><a href="#">Development</a></li>
                                <li><a href="#">Hosting</a></li>
                            </ul>
                        </div>
                        <div class="col-sm-4 col-md-3 item">
                            <h3>About</h3>
                            <ul>
                                <li><a href="#">Company</a></li>
                                <li><a href="#">Team</a></li>
                                <li><a href="#">Legacy</a></li>
                            </ul>
                        </div>
                        <div class="col-sm-4 col-md-3 item">
                            <h3>Careers</h3>
                            <ul>
                                <li><a href="#">Job openings</a></li>
                                <li><a href="#">Employee success</a></li>
                                <li><a href="#">Benefits</a></li>
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