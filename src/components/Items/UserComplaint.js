import React from "react";
import { Row, Col, Button, Container ,Form} from "react-bootstrap";
import { Input } from "reactstrap";
import  { useState } from 'react';

const UserComplaint = () => {
    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);

    const [validated, setValidated] = useState(false);
    // const [state, setState] = useState({chars_left: 5, max_char:5});
    

    // const handleWordCount = (event) => {
    // const charCount = event.target.value.length;
    // const maxChar = state.max_char;
    // const charLength = maxChar - charCount;
    // setState({ chars_left: charLength });
    // };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsFilePicked(true);
      };

    return (
        <Container >

            <h1 style={{color:"rgb(255,98,98",marginTop:'2%',padding:'2%'}}><i>Submit your complaint here</i></h1>
            <hr></hr>
            <Row style={{marginBottom:50}}> 
                <Col md={2}>
                    <img src="https://d2xamzlzrdbdbn.cloudfront.net/products/2eb1eeb0-470e-48a0-9bcf-7d6f610a449521170554.jpg" style={{ width: '70%', height: '100%' }}></img>
                </Col>
                <Col md={10}>
                    <h3>Apple iPhone 13 Pro Max (256 GB Storage, Gold)</h3>
                </Col>

            </Row>
<hr></hr>
            <Row className="justify-content-md-center">
             
                        <Col>
                                <Form style={{
                                    padding:'10px',
                                    width: '100%',
                                    fontSize: 18,
                                    
                                    
                                    }} noValidate validated={validated} onSubmit={handleSubmit}>
                        
                        <Form.Group className="mb-3" controlId="validationCustom01">
                            
                            <Form.Control
                            required
                            type="text"
                            placeholder="Complaint Title"
                            style={{
                                
                            
                                fontWeight: 500,
                                lineHeight: 2,
                                color: '#000000',
                                border: '1px solid #000000',
                                borderRadius: 0,
                                }}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide Complaint Title
                            </Form.Control.Feedback>
                        </Form.Group>
                        
                        <Form.Group className="mb-3" controlId="validationCustom02">
                        
                            <Form.Control
                            required
                            placeholder="Description of the complaint"
                            maxLength={250}
                            as="textarea"
                            style={{
                                
                                height:100,
                                fontWeight: 500,
                                lineHeight: 2,
                                color: '#000000',
                                border: '1px solid #000000',
                                borderRadius: 0,
                                }}
                                
                            />
                            
                            <Form.Control.Feedback type="invalid">
                                Please provide Complaint Description
                            </Form.Control.Feedback>
                        </Form.Group>
                        
                        <Form.Group className="mb-3" controlId="validationCustomUsername">
                        
                        <input style={{
                            border: '1px solid rgb(0 0 0)',
                            borderRadius: 0,
                            verticalAlign: 'middle'
                        }} required="" type="checkbox" id="validationCustomUsername" class="form-check-input"></input>
                        <label style={{
                            verticalAlign: 'middle',
                            marginLeft: '10px',
                            marginTop: '5px'
                        }} title="" for="validationCustomUsername" class="form-check-label">Check Warranty Card</label>
                        <div class="invalid-feedback">You want to check Warranty Card</div>
                        </Form.Group>
                    
                        <Form.Group className="mb-3" controlId="validationCustomUsername">
                            <Form.Label>Upload Other Proofs</Form.Label>
                            <Form.Control
                            onChange={changeHandler}
                            type="file" 
                            style={{
                                
                            
                                fontWeight: 500,
                                lineHeight: 2,
                                color: '#000000',
                                border: '1px solid #000000',
                                borderRadius: 0,
                                }}
                            />
                        </Form.Group>
                    
                        <Button variant="flat" size="1" type="submit"  style={{  width: 'fit-content',height:50}}>Submit Complaint</Button>
                
                    </Form>
             </Col>
            </Row>

            {/* <Row style={{ marginTop: 20 }}>
                <h5>Complaint Title</h5>
                <Input type="text" placeholder="Review Title" style={{ width: 600, height: 30 }} required></Input>
            </Row>
            
            <Row style={{ marginTop: 20 }}>
                <h5>Complaint Description</h5>
                <Input placeholder="Description of product here....." type="textarea" style={{ width: 600, height: 100 }} required></Input>
            </Row>

            <Row style={{ marginTop: 20 }}>
                    <Form.Check 
                type='checkbox'
                
                label='check'
            />

                
            </Row>

            <Row style={{ marginTop: 20 }}>
                <Col md={3}>
                <h5>Upload Other Proofs</h5>
                </Col>
                <Col md={3}>
                    <Input type="file" onChange={changeHandler}></Input>
                </Col> 
                
            </Row>

            <Button style={{ marginTop: 20 }}>SUBMIT</Button>
 */}

        </Container>
    )
}
export default UserComplaint;