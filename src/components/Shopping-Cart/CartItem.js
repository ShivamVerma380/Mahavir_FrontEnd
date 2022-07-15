import React from "react";
import {
    Card, CardHeader, CardText, CardBody, Row,
    CardTitle, CardFooter, Button, Col, Container, Table
} from 'reactstrap';
import { FormControl, Form } from 'react-bootstrap';
import {setCookie,getCookie} from '../Cookies';
import { QuantityPicker } from 'react-qty-picker';


const CartItem = ({item}) => {
    var cartmodelnums=new Array();
    cartmodelnums=getCookie("CartModels").split(',');

    function removefromcart(){
        console.log("Remove clicked")
       
        for (var i = 0; i < cartmodelnums.length; i++) {
            if (cartmodelnums[i] === item.modelNumber) {
                cartmodelnums.splice(i, 1);
                console.log(cartmodelnums);
                setCookie("CartModels",cartmodelnums,20);
                window.location.reload();
                break;
            }
        }
        
                
        
    }

   
    return (
        <div>
            {
                (!item.freeItem) ? (
                    <Container>
                    <Container>
                        <Row>
                            <Col md={12}>
                                <Row>
                                    <Col md={4}>
                                        <img style={{ height: "250px", width: "250px" }} src={item.productImage1} />
                                    </Col >
                                    <Col md={6}>
                                        <Row>
                                            <h4>{item.productName}</h4>
                                        </Row>
                                        <br></br>
                                        <Row>
                                            {
                                                (item.productPrice === item.offerPrice) ? (<h4>₹ {item.productPrice}</h4>) : (
                                                    <h4>MSP: <b style={{ marginRight: "20px", color: "rgb(255,98,98)" }}>₹{item.offerPrice}</b> MRP: <b style={{ textDecorationLine: "line-through", textDecorationStyle: "solid" }}>₹ {item.productPrice}</b></h4>
                                                )
                                            }

                                        </Row>
                                        <br></br>
                                        <br></br>
                                        <Row>
                                            
                                            <Col md={6} style={{ marginLeft: 50 }}>
                                                <QuantityPicker smooth />
                                            </Col>
                                            <Col md={3}>
                                                <Button className="btn-flat" onClick={removefromcart}>REMOVE</Button>
                                            </Col>
                                        </Row>
                                        <br></br>
                                        <br></br>

                                    </Col>
                                </Row >



                            </Col >
                        </Row >
                    </Container>
                        <br></br>
                    </Container>

                    
                    
                ) : (

                    <Container>
                        <Row>
                            <Col md={12}>
                                <Row>
                                    <Col md={4}>
                                        <img style={{ height: "250px", width: "250px" }} src={"data:image/png;base64," + item.productImage1.data} />
                                    </Col >
                                    <Col md={8}>
                                        <Row>
                                            <h4>{item.productName}</h4>
                                        </Row>
                                        <br></br>
                                        <Row>
                                            {
                                                (item.productPrice === item.offerPrice) ? (<h4>₹ {item.productPrice}</h4>) : (
                                                    <h4>MSP: <b style={{ marginRight: "20px", color: "rgb(255,98,98)" }}>₹{item.offerPrice}</b> MRP: <b style={{ textDecorationLine: "line-through", textDecorationStyle: "solid" }}>₹ {item.productPrice}</b></h4>
                                                )
                                            }

                                        </Row>
                                        <br></br>
                                        <Row>
                                            <Col md={2}>
                                                <img style={{ height: "100px", width: "100px" }} src={"data:image/png;base64," + item.freeItem.image.data} />
                                            </Col>
                                            <Col md={10}>
                                                <Row>
                                                    <h4>{item.freeItem.name}</h4>
                                                </Row>
                                                <br></br>
                                                <Row>
                                                    <Col md={5}>
                                                        <h4 style={{ color: "rgb(255,98,98)" }}><b>FREE GIFT WORTH </b></h4>
                                                    </Col>
                                                    <Col md={4}>
                                                        <h4 style={{ textDecorationLine: "line-through", textDecorationStyle: "solid" }}><b>₹ {item.freeItem.price}</b></h4>
                                                    </Col>
                                                    
                                                </Row>
                                            </Col>
                                        </Row>

                                    </Col>
                                </Row >




                                {/* <br></br>
                                <br></br>



                                <br></br>
                                <br></br> */}
                                <Row>
                                    <Col md={4}></Col>
                                    <Col md={3} style={{ marginLeft: 50 }}>
                                        <QuantityPicker smooth />
                                    </Col>
                                    <Col md={3}>
                                        <Button className="btn-flat" onClick={removefromcart}>REMOVE</Button>
                                    </Col>
                                </Row>
                            </Col >
                        </Row >
                        {/* <hr></hr> */}

                    </Container >
                    
                )
            }
        </div>


        //     {
        //     (item.freeItem) ? (
        //         <Row>
        //             <Col md={3} style={{ marginLeft: 80 }}>
        //                 <img style={{ height: "150px", width: "150px" }} src={"data:image/png;base64," + item.freeItem.image.data} />
        //             </Col>
        //             <Col md={6}>
        //                 <Row>
        //                     <h4>{item.freeItem.name}</h4>
        //                 </Row>
        //                 <br></br>
        //                 <Row>
        //                     <Col md={2}>
        //                         <h4 style={{ color: "rgb(255,98,98)" }}><b>₹ 0</b></h4>
        //                     </Col>
        //                     <Col md={4}>
        //                         <h4 style={{ textDecorationLine: "line-through", textDecorationStyle: "solid" }}><b>₹ {item.freeItem.price}</b></h4>
        //                     </Col>
        //                     <Col md={5}>
        //                         <h4 style={{ color: "rgb(255,98,98)" }}><b>FREE GIFT</b></h4>
        //                     </Col>
        //                 </Row>
        //             </Col>
        //         </Row>
        //     ) : (null)
        // }


        // <Table>
        //     <tbody>
        //         <tr>
        //         <td><img  style={{height:"250px", width:"300px"}} src = {"data:image/png;base64,"+item.productImage1.data}/>


        //         </td>
        //         <td>
        //         <b>{item.productName}</b>
        //         </td>

        //         <td><QuantityPicker smooth/></td>
        //         <td><table>
        //             <tr>
        //                 <td>FREE DELIVERY</td>
        //                 </tr>
        //                 <tr>
        //                 <td>Delivery in 1-3 Days</td>
        //                 </tr>
        //                 <tr>
        //                 <td>( T&C apply)</td>
        //                 </tr>
        //             </table>
        //         </td>


        //         </tr>
        //         <tr>
        //             <td>
        //             <img  style={{height:"250px", width:"300px"}} src = {"data:image/png;base64,"+item.freeItem.image.data}/>
        //             </td>
        //         </tr>

        //         <tr>
        //         <td><table>
        //             <tr>
        //                 <td><b>{item.productName}</b></td>
        //                 </tr>
        //                 <tr>
        //                 <td>{item.modelNumber}</td>
        //                 </tr>
        //                 <tr>
        //                 <td><b>{item.productPrice}</b></td>
        //                 </tr>
        //             </table>
        //         </td>
        //         <td></td>
        //         <td><Button className="btn-flat">Remove</Button></td>
        //         </tr>
        //         </tbody>
        //     </Table>
    );
}

export default CartItem;