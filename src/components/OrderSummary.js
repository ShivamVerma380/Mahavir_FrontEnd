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
        <Table style={{marginLeft:"400px",marginTop:"100px"}}>
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
        </Table>
        <center>
        <Button onClick={PaymentHandler}>Proceed</Button>
        </center>
        
        </div>
        
    )
}
export default OrderSummary