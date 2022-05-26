import React from 'react';
import { Card, CardHeader, CardText, CardBody,Row,
  CardTitle, CardFooter, Button, Col } from 'reactstrap';

  import { QuantityPicker } from 'react-qty-picker';

function Cart() {
    
    return (
        <div class="container">
            <Card>
    <Row>
        <Col>
        <CardBody>
       
        <img style={{height:"150px", width:"100%"}} src = {require ('https://www.nokia.com/shop/sites/default/files/styles/aspect_16_9_1200px/public/2020-12/2880X1620px-1_0.jpg?itok=dtn_TZqA')}/>
        <br></br>  <br></br>  <br></br>  <br></br>
        <hr></hr>
  <Button  outline>Proceed to Buy</Button>
       
        </CardBody>
        </Col>
        <Col>
        <CardBody>
        <CardTitle>LG 1 Ton 5 Star Split Inverter Air Conditioner (PSQ13ENZE)</CardTitle>
  <CardText>₹ 37,480 ₹ 61,990 40% off</CardText>
  <CardTitle><i  class="fa fa fa-trash-o" style={{paddingLeft:"20px" , paddingRight:"10px"}}>Remove</i></CardTitle>
        <center><QuantityPicker smooth/>

        <br></br>
        <CardText>FREE DELIVERY<br></br>Delivery in 1-3 Days</CardText></center>
        <br></br>  <br></br>
        
        </CardBody>
        </Col>
        
    </Row>
    
    </Card>

    </div>




    );
  }
  export default Cart;