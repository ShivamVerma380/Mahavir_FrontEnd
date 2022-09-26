
import React from "react";
import "./DeveloperPage.css"
import {Row, Col, Card} from "react-bootstrap";
import { Icon } from '@iconify/react';
import {HiOutlineMail} from "react-icons/hi";
import {FaLinkedinIn} from "react-icons/fa";
import {BsGithub} from "react-icons/bs";
import {BsFillTelephoneOutboundFill} from "react-icons/bs";
import { black } from "material-ui/styles/colors";




const DeveloperPage = () => {
    return(
       <html lang="en">
        <h4 style={{marginTop:"30px", fontSize:"24px",fontWeight:600, textAlign:"center",fontFamily: "Open Sans"}}>Brewing Java Team</h4>
        <hr></hr>
        <body>
        
            <center>
                {/* <p>We are Team Brewing Java. We are a team of 6 Full Stack Developers. We 
                    deliver web based and app based solutions as freelancers.</p> */}
            
            <p><b>For Details- </b>  Contact us at: <BsFillTelephoneOutboundFill/>  <a>+91 8237345685</a> or Email us at: <a style={{color:"black"}} href="mailto:teambrewingjava@gmail.com"><HiOutlineMail size={25}/></a>  <a style={{color:"blue"}} href="mailto:teambrewingjava@gmail.com"> teambrewingjava@gmail.com</a></p>

            </center>
            
        
        <hr></hr>
        <section>
        <div  class="container1">
            <Row>
            <div style={{backgroundImage:"linear-gradient(#b3f6d8,#52a7c1)"}} class = "card">
                <div class="content">
                    <div class="imgBx">
                        <img  src="https://github.com/ShivamVerma380/MahavirImages/blob/main/developers/Omkar_img.jpg?raw=true"/>
                    </div>
                    <div class="contentBx">
                        <h3 style={{fontSize:"16px",color:"black"}}>Omkar Khare</h3>
                    </div>
                </div>
                <ul class="sci">
                    <li>
                        <a style={{color:"black"}} href="mailto:omkar.22010490@viit.ac.in"><HiOutlineMail /></a>
                    </li>
                    <li>
                        <a style={{color:"black"}} href="https://www.linkedin.com/in/omkar-khare-6a012b206/"><FaLinkedinIn/></a>
                    </li>
                    <li> 
                        <a style={{color:"black"}} href="https://github.com/Omkar2402"><BsGithub/></a>
                    </li>
                </ul>
            </div>
            <div style={{backgroundImage:"linear-gradient(#b3f6d8,#52a7c1)"}} class = "card">
                <div class="content">
                    <div class="imgBx">
                        <img src="https://github.com/ShivamVerma380/MahavirImages/blob/main/developers/Aditi_img.jpg?raw=true"/>
                    </div>
                    <div class="contentBx">
                    <h3 style={{fontSize:"16px",color:"black"}}>Aditi Nikam</h3>
                    </div>
                </div>
                <ul class="sci">
                    <li >
                        <a style={{color:"black"}} href="mailto:aditi.21910513@viit.ac.in"><HiOutlineMail/></a>
                    </li>
                    <li >
                        <a style={{color:"black"}} href="https://www.linkedin.com/in/aditi-nikam21/"><FaLinkedinIn/></a>
                    </li>
                    <li > 
                        <a style={{color:"black"}} href="https://github.com/aditinikam"><BsGithub/></a>
                    </li>
                </ul>
            </div>
            
            <div style={{backgroundImage:"linear-gradient(#b3f6d8,#52a7c1)"}} class = "card">
                <div class="content">
                    <div class="imgBx">
                        <img  src="https://github.com/ShivamVerma380/MahavirImages/blob/main/developers/Shivam_img.jpg?raw=true"/>
                    </div>
                    <div class="contentBx">
                        <h3 style={{fontSize:"16px",color:"black"}}>Shivam Verma</h3>
                    </div>
                </div>
                <ul class="sci">
                    <li>
                        <a style={{color:"black"}} href="mailto:shivam.21910478@viit.ac.in"><HiOutlineMail/></a>
                    </li>
                    <li>
                        <a style={{color:"black"}} href="https://www.linkedin.com/in/shivam-verma-4859111a8/"><FaLinkedinIn/></a>
                    </li>
                    <li> 
                        <a style={{color:"black"}} href="https://github.com/ShivamVerma380"><BsGithub/></a>
                    </li>
                </ul>
            </div>
            </Row>

            <Row>
            <div style={{backgroundImage:"linear-gradient(#b3f6d8,#52a7c1)"}} class = "card">
                <div class="content">
                    <div class="imgBx">
                        <img  src="https://github.com/ShivamVerma380/MahavirImages/blob/main/developers/Ketaki_img.jpg?raw=true"/>
                    </div>
                    <div class="contentBx">
                    <h3 style={{fontSize:"16px",color:"black"}}>Ketaki Hadnurkar</h3>
                    </div>
                </div>
                <ul class="sci">
                    <li>
                        <a style={{color:"black"}} href="mailto:ketaki.21910480@viit.ac.in"><HiOutlineMail/></a>
                    </li>
                    <li>
                        <a style={{color:"black"}} href="https://www.linkedin.com/in/ketaki-hadnurkar/"><FaLinkedinIn/></a>
                    </li>
                    <li> 
                        <a  style={{color:"black"}} href="https://github.com/Ketaki1806"><BsGithub/></a>
                    </li>
                </ul>
            </div>
            
            <div style={{backgroundImage:"linear-gradient(#b3f6d8,#52a7c1)"}} class = "card">
                <div class="content">
                    <div class="imgBx">
                        <img  src="https://github.com/ShivamVerma380/MahavirImages/blob/main/developers/Siddhant_img.jpg?raw=true"/>
                    </div>
                    <div class="contentBx">
                        <h3 style={{fontSize:"16px",color:"black"}}>Siddhant Jain</h3>
                    </div>
                </div>
                <ul class="sci">
                    <li>
                        <a style={{color:"black"}} href="mailto:siddhant.21910811@viit.ac.in"><HiOutlineMail/></a>
                    </li>
                    <li>
                        <a style={{color:"black"}} href="https://www.linkedin.com/in/siddhant-jain-8a3b3a198/"><FaLinkedinIn/></a>
                    </li>
                    <li> 
                        <a style={{color:"black"}} href="https://github.com/Sidj26"><BsGithub/></a>
                    </li>
                </ul>
            </div>
            <div style={{backgroundImage:"linear-gradient(#b3f6d8,#52a7c1)"}} class = "card">
                <div class="content">
                    <div class="imgBx">
                        <img  src="https://github.com/ShivamVerma380/MahavirImages/blob/main/developers/Shraddha_img.jpg?raw=true"/>
                    </div>
                    <div class="contentBx">
                        <h3 style={{fontSize:"16px",color:"black"}}>Shraddha Mulay</h3>
                    </div>
                </div>
                <ul class="sci">
                    <li>
                        <a style={{color:"black"}} href="mailto:shraddha.22020260@viit.ac.in"><HiOutlineMail/></a>
                    </li>
                    <li>
                        <a style={{color:"black"}} href="https://www.linkedin.com/in/shraddha-mulay-0708b9171/"><FaLinkedinIn/></a>
                    </li>
                    <li> 
                        <a style={{color:"black"}} href="https://github.com/shraddhamulay09"><BsGithub/></a>
                    </li>
                </ul>
            </div>
            </Row>
       </div>
       </section>
       </body>
       </html>
    )
}
export default DeveloperPage;