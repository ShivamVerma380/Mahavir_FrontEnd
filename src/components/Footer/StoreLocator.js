import React, { useState } from 'react';
import { Card, Row, Col, Container } from "react-bootstrap";

import iframe from 'react-iframe';

import Footer from './Footer';
import Header from '../../components/Header'
import './Footer.css';
const StoreLocator = () => {
    return (
        <>
        <Header/>

        <div className="footer_section" >
      

        <Row style={{padding:'3%'}} xs={1} md={2} className="g-4">
      

      <Col>
        <Card>
          <Card.Body>
            <Card.Title>Main Office</Card.Title>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.1053156761295!2d73.85979961484207!3d18.47888818743333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eaa17bee014f%3A0x2f9294243a7e1db5!2sMahavir%20Electronics%20And%20Furniture!5e0!3m2!1sen!2sin!4v1655450542718!5m2!1sen!2sin"  style={{border:"0",height:'300px',width:'100%'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
 
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card>
          <Card.Body>
            <Card.Title>Kothrud Branch</Card.Title>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.6073010091873!2d73.81143561484238!3d18.50143878742012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfb9e8856c31%3A0x4fc0deb9696b246b!2sMahavir%20Electronics%20And%20Furniture!5e0!3m2!1sen!2sin!4v1655451984553!5m2!1sen!2sin"  style={{border:"0",height:'300px',width:'100%'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card>
          <Card.Body>
            <Card.Title>Sinhagad Road Branch</Card.Title>
 
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121075.44275074886!2d73.74358378230382!3d18.50142589210692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2959cb4bd507b%3A0x13db5e4981429c!2sMahavir%20Electronics%20And%20Furniture!5e0!3m2!1sen!2sin!4v1655452088365!5m2!1sen!2sin"  style={{border:"0",height:'300px',width:'100%'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
 
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card>
          <Card.Body>
            <Card.Title>Camp Branch</Card.Title>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.3649797647163!2d73.87536842414914!3d18.51240174715649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1960c54d753%3A0xae06dde178088cca!2sSamsung%20SmartPlaza%20-%20Mahavir%20Electronics%20%26%20Furniture!5e0!3m2!1sen!2sin!4v1655452158465!5m2!1sen!2sin"  style={{border:"0",height:'300px',width:'100%'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

          </Card.Body>
        </Card>
      </Col>
  </Row>
        {/* <Header/> */}
        
        
        
        
        {/* <Row >
            <Col md={1}></Col>
            <Col md={4}>
            <h1>Main Office</h1>
            </Col>
            <Col md={1}></Col>
            <Col md={4}>
            <h1>Kothrud Branch</h1>
            </Col>
            
        
        </Row> */}
{/* 
        <Row >
            <Col md={1}></Col> 
            <Col md={4}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.1053156761295!2d73.85979961484207!3d18.47888818743333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eaa17bee014f%3A0x2f9294243a7e1db5!2sMahavir%20Electronics%20And%20Furniture!5e0!3m2!1sen!2sin!4v1655450542718!5m2!1sen!2sin" width="600" height="450" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </Col>
            <Col md={1}></Col>
            <Col md={4}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.6073010091873!2d73.81143561484238!3d18.50143878742012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfb9e8856c31%3A0x4fc0deb9696b246b!2sMahavir%20Electronics%20And%20Furniture!5e0!3m2!1sen!2sin!4v1655451984553!5m2!1sen!2sin" width="600" height="450" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </Col>
        </Row>
        <br></br>
        <br></br>

        <Row >
            <Col md={1}></Col>
            <Col md={4}>
            <h1>Sinhagad Road Branch</h1>
            </Col>
            <Col md={1}></Col>
            <Col md={4}>
            <h1>Camp Branch</h1>
            </Col>
            
        
        </Row>

        <Row >
        <Col md={1}></Col> 
            <Col md={4}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121075.44275074886!2d73.74358378230382!3d18.50142589210692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2959cb4bd507b%3A0x13db5e4981429c!2sMahavir%20Electronics%20And%20Furniture!5e0!3m2!1sen!2sin!4v1655452088365!5m2!1sen!2sin" width="600" height="450" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </Col>
            <Col md={1}></Col>
            <Col md={4}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.3649797647163!2d73.87536842414914!3d18.51240174715649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1960c54d753%3A0xae06dde178088cca!2sSamsung%20SmartPlaza%20-%20Mahavir%20Electronics%20%26%20Furniture!5e0!3m2!1sen!2sin!4v1655452158465!5m2!1sen!2sin" width="600" height="450" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </Col>
        </Row>
         */}
        
       
        <Footer/>
        
        </div>
        </>
    )
    
}

export default StoreLocator;



// const [center, setCenter] = useState({lat: 18.479213808329792, lng: 73.8619668401811 });
//     const [zoom, setZoom] = useState(11);
//     return (
//         <div style={{ height: '100vh', width: '100%' }}>
//         <GoogleMapReact
//           bootstrapURLKeys={{ key: 'AIzaSyBRdfutqbOkN77M7O1vtLftgE-7Inxm2fo' }}
//           defaultCenter={center}
//           defaultZoom={zoom}
//         >
//           <Marker
//             lat={18.479213808329792}   
//             lng={73.8619668401811}
//             text="My Marker"
//           />
//         </GoogleMapReact>
//       </div>
//     )