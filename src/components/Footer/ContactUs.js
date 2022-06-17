import React from "react";
import { Card, Row, Col } from "react-bootstrap";


const ContactUs = () => {
    return (
        <div>
            <center>

                <img style={{ marginTop: 40 }} src="https://d2xamzlzrdbdbn.cloudfront.net/imagesrewamp/Faqs/CUSTOMER-CARE.png"></img>
                <h3>CUSTOMER CARE</h3>

            </center>
            <Row style={{ marginTop: 40 }}>
                <Col md={2}></Col>

                <Col md={8}>
                    <Row>
                        <Col md={3}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>
                                        Bibvewadi
                                    </Card.Title>
                                    <Card.Text>
                                        Email Id: mahavirelectronic@gmail.com
                                    </Card.Text>
                                    <Card.Text>
                                        Phone No: +91 7219318080
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={3}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>
                                        Sinhagad Road
                                    </Card.Title>
                                    <Card.Text>
                                        Email Id: mahavirelectronic@gmail.com
                                    </Card.Text>
                                    <Card.Text>
                                        Phone No: +91 9294929454
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={3}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>
                                        Kothrud
                                    </Card.Title>
                                    <Card.Text>
                                        Email Id: mahavirelectronic@gmail.com
                                    </Card.Text>
                                    <Card.Text>
                                        Phone No: +91 7028029494
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={3}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>
                                        Camp
                                    </Card.Title>
                                    <Card.Text>
                                        Email Id: mahavirelectronic@gmail.com
                                    </Card.Text>
                                    <Card.Text>
                                        Phone No: +91 7028029393
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>


                    </Row>

                </Col>
            </Row>

            <Row>
                <Col md={2}></Col>
                <Col md={8}>
                <center>
                <img style={{ marginTop: 40 }} src="https://d2xamzlzrdbdbn.cloudfront.net/imagesrewamp/Faqs/Corporate-queries.png"></img>
                <h3>ADDRESS</h3>


                <Card style={{ marginTop: 40, padding: 10 }}>
                    <Card.Title>
                        MAIN OFFICE

                    </Card.Title>
                    <Card.Text>
                        Opp. Post Office, nr. Sahyadri Hospital, Vasant Baug, Ramyanagari <br></br> Housing Society, Bibwewadi, Pune, Maharashtra 411037 <br></br>

                    </Card.Text>
                </Card>

                <Row>
                    <Col>
                        <Card style={{ marginTop: 40, padding: 10 }}>
                            <Card.Title>
                                Sinhagad Road

                            </Card.Title>
                            <Card.Text>
                            Shop No:- 1, Grand Horizon, Sinhgad Rd, nr. Htel Bramha Veg, Manik Baug, Pune, Maharashtra 411041 <br></br>

                            </Card.Text>
                        </Card>
                    </Col>
                    
                    <Col>
                    <Card style={{ marginTop: 40, padding: 10 }}>
                            <Card.Title>
                                Kothrud

                            </Card.Title>
                            <Card.Text>
                            217/220, 'Sobashilp', Near Chatrapati Shivaji Statue, Kothrud, Pune-411038 <br></br>

                            </Card.Text>
                        </Card>
                    </Col>

                    <Col>
                    <Card style={{ marginTop: 40, padding: 10 }}>
                            <Card.Title>
                                Camp

                            </Card.Title>
                            <Card.Text>
                            Shop No 4 & 5, Chetna Apartments, East St, opposite Kotak Mahindra Bank, Camp, Pune, Maharashtra 411001<br></br>

                            </Card.Text>
                        </Card>
                    </Col>
                </Row>







            </center>

                </Col>
            </Row>
            
        </div>

    )
}
export default ContactUs;