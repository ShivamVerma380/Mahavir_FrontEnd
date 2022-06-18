
import React from "react";
import "./DeveloperPage.css"
import pic from "../assets/images.jpg"
import {Row, Col, Card} from "react-bootstrap";
import { Icon } from '@iconify/react';

const DeveloperPage = () => {
    return(

        <Row style={{backgroundColor:"black"}} className="profilecard">
            
            
            <Card>
                <Card.Body>
                    
                <Row>
                    
                <Col md={2}>
                  <Card>
                    <Card.Body>
                    <img style={{height:"8rem"}} src={pic}/>
                    
                    </Card.Body>
                </Card>          
                       
                </Col>
                
                
                </Row>
                <Card.Title>Aditi Nikam</Card.Title>
                <Row style={{marginLeft:5}}>
                    <Col md={2}></Col>
                    <Col md={2}>
                    <a href="#"><Icon className="social" icon="bi:linkedin" fontSize={25}/></a>
                    </Col>

                    <Col md={2}>
                    <a href="#"><Icon icon="bi:github" fontSize={25}/></a>
                    </Col>

                    <Col md={2}>
                    <a href="#"><Icon icon="bi:instagram" fontSize={25}/></a>
                    </Col>
               
                
                </Row>
                
                
                </Card.Body>
            </Card>

            <Card>
                <Card.Body>
                <Row>
                    
                <Col md={2}>
                  <Card>
                    <Card.Body>
                    <img style={{height:"8rem"}} src={pic}/>
                    </Card.Body>
                </Card>          
                       
                </Col>
                
                
                </Row>
                <Card.Title>Ketaki Hadnurkar</Card.Title>
                <Row style={{marginLeft:5}}>
                    <Col md={2}></Col>
                    <Col md={2}>
                    <a href="#"><Icon className="social" icon="bi:linkedin" fontSize={25}/></a>
                    </Col>

                    <Col md={2}>
                    <a href="#"><Icon icon="bi:github" fontSize={25}/></a>
                    </Col>

                    <Col md={2}>
                    <a href="#"><Icon icon="bi:instagram" fontSize={25}/></a>
                    </Col>
               
                
                </Row>
                </Card.Body>
            </Card>

            <Card>
                <Card.Body>
                <Row>
                    
                <Col md={2}>
                  <Card>
                    <Card.Body>
                    <img style={{height:"8rem"}} src={pic}/>
                    </Card.Body>
                </Card>          
                       
                </Col>
                
                
                </Row>
                <Card.Title>Omkar Khare</Card.Title>
                <Row style={{marginLeft:5}}>
                    <Col md={2}></Col>
                    <Col md={2}>
                    <a href="#"><Icon className="social" icon="bi:linkedin" fontSize={25}/></a>
                    </Col>

                    <Col md={2}>
                    <a href="#"><Icon icon="bi:github" fontSize={25}/></a>
                    </Col>

                    <Col md={2}>
                    <a href="#"><Icon icon="bi:instagram" fontSize={25}/></a>
                    </Col>
               
                
                </Row>
                </Card.Body>
            </Card>

            <Card>
                <Card.Body>
                <Row>
                    
                <Col md={2}>
                  <Card>
                    <Card.Body>
                    <img style={{height:"8rem"}} src={pic}/>
                    </Card.Body>
                </Card>          
                       
                </Col>
                
                
                </Row>
                <Card.Title>Shivam Verma</Card.Title>
                <Row style={{marginLeft:5}}>
                    <Col md={2}></Col>
                    <Col md={2}>
                    <a href="#"><Icon className="social" icon="bi:linkedin" fontSize={25}/></a>
                    </Col>

                    <Col md={2}>
                    <a href="#"><Icon icon="bi:github" fontSize={25}/></a>
                    </Col>

                    <Col md={2}>
                    <a href="#"><Icon icon="bi:instagram" fontSize={25}/></a>
                    </Col>
               
                
                </Row>
                </Card.Body>
            </Card>

            <Card>
                <Card.Body>
                <Row>
                    
                <Col md={2}>
                  <Card>
                    <Card.Body>
                    <img style={{height:"8rem"}} src={pic}/>
                    </Card.Body>
                </Card>          
                       
                </Col>
                
                
                </Row>
                <Card.Title>Shraddha Mulay</Card.Title>
                <Row style={{marginLeft:5}}>
                    <Col md={2}></Col>
                    <Col md={2}>
                    <a href="#"><Icon className="social" icon="bi:linkedin" fontSize={25}/></a>
                    </Col>

                    <Col md={2}>
                    <a href="#"><Icon icon="bi:github" fontSize={25}/></a>
                    </Col>

                    <Col md={2}>
                    <a href="#"><Icon icon="bi:instagram" fontSize={25}/></a>
                    </Col>
               
                
                </Row>
                </Card.Body>
            </Card>

            <Card className="profilecard">
                <Card.Body>
                <Row>
                    
                <Col md={2}>
                  <Card>
                    <Card.Body>
                    <img style={{height:"8rem"}} src={pic}/>
                    </Card.Body>
                </Card>          
                       
                </Col>
                
                
                </Row>
                <Card.Title>Siddhant Jain</Card.Title>
                <Row style={{marginLeft:5}}>
                    <Col md={2}></Col>
                    <Col md={2}>
                    <a href="#"><Icon className="social" icon="bi:linkedin" fontSize={25}/></a>
                    </Col>

                    <Col md={2}>
                    <a href="#"><Icon icon="bi:github" fontSize={25}/></a>
                    </Col>

                    <Col md={2}>
                    <a href="#"><Icon icon="bi:instagram" fontSize={25}/></a>
                    </Col>
               
                
                </Row>
                </Card.Body>
            </Card>
            
        </Row>
    )
}
export default DeveloperPage;