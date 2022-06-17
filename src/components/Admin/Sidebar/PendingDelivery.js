import React  from "react";
import { Row,Button, Col,Container ,Table,Accordion} from 'react-bootstrap';

import AdminHeader from "../../Admin/AdminHeader";
import AdminNavbar from "./AdminNavbar";
const PendingDelivery = () => {
    return (
        // <h1>Pending Deliveries</h1>
        <>
        <AdminHeader/>
        <AdminNavbar/>
        <Container>
            
            <h1 style={{textAlign:"center",marginTop:"20px"}}>Pending Deliveries</h1><hr></hr>
            <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>iPhone 11</Accordion.Header>
                <Accordion.Body>
                    <Row>
                    <Col sm={2}>
                    
                    <img  style={{height:"200px", width:"200px"}} src = {"https://m.media-amazon.com/images/I/61YVqHdFRxL._AC_SL1322_.jpg"}/>

                    </Col>
                    <Col sm={1}></Col>
                    <Col sm={6}>
                    <Table hover size="sm"  >
                                <thead>
                                    <tr>
                                        <th style={{textAlign:'center'}} colSpan={2}>iPhone 11</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Tracking Id:</td>
                                        <td>Track122</td>
                                    </tr>
                                    <tr>
                                        <td>Ordered By:</td>
                                        <td>Shivam Verma</td>
                                    </tr>
                                    <tr>
                                        <td>Phone No:</td>
                                        <td>9876543210</td>
                                    </tr>
                                    <tr>
                                        <td>Address:</td>
                                        <td>Bibwewadi Pune</td>
                                    </tr>
                                    <tr>
                                        <td>Order Date:</td>
                                        <td>22/05/2022</td>
                                    </tr>
                                    <tr>
                                        <td>Delivery Date:</td>
                                        <td>27/05/2022</td>
                                    </tr>
                                </tbody>

                            </Table>
                    </Col>
                    <Col sm={3}>
                    <Button style={{width: '140px', marginBottom:'10px', marginRight:'10px'}} variant="success" disabled >Delivered</Button>
                            <Button style={{width: '140px', marginBottom:'10px'}}variant="danger">Track Delivery</Button>

                    </Col>
                </Row>
                
                </Accordion.Body>
            </Accordion.Item>
            
            </Accordion>
            </Container>
            </>
        // <div>
        //     <h1 style={{textAlign:"center",marginTop:"20px"}}>Pending Deliveries</h1>
        //     <Table style={{margin:"100px"}}>
        //         <tbody>
        //             <tr>
        //             <td style={{textAlign:"center"}}><img  style={{height:"200px", width:"200px"}} src = {"https://m.media-amazon.com/images/I/61YVqHdFRxL._AC_SL1322_.jpg"}/>
        //             </td>
                    
        //             <tr> 
        //             <td style={{paddingRight:"500px"}}>iPhone 11</td>
        //             </tr>
                    
        //             <tr style={{marginTop:"50px"}}>
        //             <td>Ordered By: Shivam Verma</td>
        //             </tr>
        //             <tr>
        //             <td>Phone No: 8756562321</td>
        //             </tr>
        //             <tr>
        //             <td>Address: Bibwewadi Pune</td>
        //             </tr>
        //             <tr>
        //             <td>Order Date: 22/05/2022</td>
        //             </tr>
        //             <tr>
        //             <td>Delivery Date: 23/05/2022</td>
        //             </tr>
        //             <td><table>
        //                 <tr>
        //                     <td style={{paddingRight:"500px"}}><Button>Delivered</Button></td>
        //                 </tr>
        //                 </table>
        //             </td>
        //             </tr>
        //             <tr>
        //             <td><table>
                        
        //                 </table>
        //             </td>
        //             <td></td>
        //             </tr>
        //         </tbody>
        // </Table>
        // <Table style={{margin:"100px"}}>
        //     <tbody>
        //         <tr>
        //         <td style={{textAlign:"center"}}><img  style={{height:"200px", width:"200px"}} src = {"https://m.media-amazon.com/images/I/61YVqHdFRxL._AC_SL1322_.jpg"}/>
        //         </td>
                
        //         <tr> 
        //         <td style={{paddingRight:"500px"}}>Macbook Pro</td>
        //         </tr>
                
        //         <tr style={{marginTop:"50px"}}>
        //         <td>Ordered By: Shivam Verma</td>
        //         </tr>
        //         <tr>
        //         <td>Phone No: 8756562321</td>
        //         </tr>
        //         <tr>
        //         <td>Address: Bibwewadi Pune</td>
        //         </tr>
        //         <tr>
        //         <td>Order Date: 22/05/2022</td>
        //         </tr>
        //         <tr>
        //         <td>Delivery Date: 23/05/2022</td>
        //         </tr>
        //         <td><table>
        //             <tr>
        //                 <td style={{paddingRight:"500px"}}><Button>Delivered</Button></td>
        //             </tr>
        //             </table>
        //         </td>
        //         </tr>
        //         <tr>
        //         <td><table>
                    
        //             </table>
        //         </td>
        //         <td></td>
        //         </tr>
        //     </tbody>
        // </Table>
        
        // </div>
        
    )

}
export default PendingDelivery;