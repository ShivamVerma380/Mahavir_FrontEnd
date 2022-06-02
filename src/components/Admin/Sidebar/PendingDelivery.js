import React  from "react";
import { Card, CardHeader, CardText, CardBody,Row,
    CardTitle, CardFooter, Button, Col,Container ,Table} from 'reactstrap';

const PendingDelivery = () => {
    return (
        // <h1>Pending Deliveries</h1>
        <div>
            <h1 style={{textAlign:"center",marginTop:"20px"}}>Pending Deliveries</h1>
            <Table style={{margin:"100px"}}>
                <tbody>
                    <tr>
                    <td style={{textAlign:"center"}}><img  style={{height:"200px", width:"200px"}} src = {"https://m.media-amazon.com/images/I/61YVqHdFRxL._AC_SL1322_.jpg"}/>
                    </td>
                    
                    <tr> 
                    <td style={{paddingRight:"500px"}}>iPhone 11</td>
                    </tr>
                    
                    <tr style={{marginTop:"50px"}}>
                    <td>Ordered By: Shivam Verma</td>
                    </tr>
                    <tr>
                    <td>Phone No: 8756562321</td>
                    </tr>
                    <tr>
                    <td>Address: Bibwewadi Pune</td>
                    </tr>
                    <tr>
                    <td>Order Date: 22/05/2022</td>
                    </tr>
                    <tr>
                    <td>Delivery Date: 23/05/2022</td>
                    </tr>
                    <td><table>
                        <tr>
                            <td style={{paddingRight:"500px"}}><Button>Delivered</Button></td>
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
        <Table style={{margin:"100px"}}>
            <tbody>
                <tr>
                <td style={{textAlign:"center"}}><img  style={{height:"200px", width:"200px"}} src = {"https://m.media-amazon.com/images/I/61YVqHdFRxL._AC_SL1322_.jpg"}/>
                </td>
                
                <tr> 
                <td style={{paddingRight:"500px"}}>Macbook Pro</td>
                </tr>
                
                <tr style={{marginTop:"50px"}}>
                <td>Ordered By: Shivam Verma</td>
                </tr>
                <tr>
                <td>Phone No: 8756562321</td>
                </tr>
                <tr>
                <td>Address: Bibwewadi Pune</td>
                </tr>
                <tr>
                <td>Order Date: 22/05/2022</td>
                </tr>
                <tr>
                <td>Delivery Date: 23/05/2022</td>
                </tr>
                <td><table>
                    <tr>
                        <td style={{paddingRight:"500px"}}><Button>Delivered</Button></td>
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
        
        </div>
        
    )

}
export default PendingDelivery;