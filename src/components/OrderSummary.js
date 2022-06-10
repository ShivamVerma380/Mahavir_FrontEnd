import React from "react";
import { Card, CardHeader, CardText, CardBody,Row,
    CardTitle, CardFooter, Button, Col,Container ,Table} from 'reactstrap';
import { useNavigate } from "react-router-dom";
 
const OrderSummary = () => {
    const navigate = useNavigate();
    const PaymentHandler=()=>{
         
        navigate("/PaymentOption")
    }

    return (
        <div>
            <h1 style={{textAlign:"center",marginTop:"40px"}}>Order Summary</h1>
     {/* <Table style={{marginLeft:"400px",marginTop:"100px"}}>
                <tbody>
                    <tr>
                    <td style={{textAlign:"center"}}><img  style={{height:"200px", width:"200px"}} src = {"https://m.media-amazon.com/images/I/61YVqHdFRxL._AC_SL1322_.jpg"}/>
                    </td>
                    
                    <tr> 
                    <td style={{paddingRight:"200px",paddingBottom:"20px",paddingTop:"50px"}}>iPhone 11</td>
                    </tr>
                    
                    <tr>
                    <td style={{paddingTop:"5px"}}>Rs.20000</td>
                    </tr>
                    
                    
                    <td><table>
                        <tr>
                            <td style={{paddingRight:"400px",paddingTop:"50px"}}>Deliver by: 23/05/2022</td>
                        </tr>
                        </table>
                    </td>
                    </tr>
                    <tr>
                    <td><table>
                        
                        </table>
                    </td>
                    <td></td>
                    </tr>
                </tbody>
        </Table> */}
        <Row>
            <Col md={4}></Col>
            <Col md={2}><img style={{height:"200px", width:"200px", marginTop:50}} src = {"https://m.media-amazon.com/images/I/61YVqHdFRxL._AC_SL1322_.jpg"}></img></Col>
            <Col md={2} style={{marginTop:50}}>
                <h4>Iphone11 Pro Max 64GB</h4>
                <h3 style={{marginTop:20}}>Rs.20,000</h3>
                <h6 style={{marginTop:30}}>Deliver by Friday 10/06/2022</h6>

            </Col>
            
        </Row>
        
        <center>
        <Button onClick={PaymentHandler} style={{marginTop:50}}>Proceed</Button>
        </center>
        
        </div>
        
    )
}
export default OrderSummary