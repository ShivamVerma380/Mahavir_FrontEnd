import React from "react";
import { Card, CardHeader, CardText, CardBody,Row,
    CardTitle, CardFooter, Button, Col,Container ,Table} from 'reactstrap';
    import {FormControl,Form} from 'react-bootstrap';
    import { QuantityPicker } from 'react-qty-picker';
const CartItem=({item})=>{
    return(
        <Table>
            <tbody>
                <tr>
                <td><img  style={{height:"150px", width:"300px"}} src = {"data:image/png;base64,"+item.productImage1.data}/>
                </td>
                
                <td><QuantityPicker smooth/></td>
                <td><table>
                    <tr>
                        <td>FREE DELIVERY</td>
                        </tr>
                        <tr>
                        <td>Delivery in 1-3 Days</td>
                        </tr>
                        <tr>
                        <td>( T&C apply)</td>
                        </tr>
                    </table>
                </td>
                </tr>
                <tr>
                <td><table>
                    <tr>
                        <td>{item.productName}</td>
                        </tr>
                        <tr>
                        <td>{item.modelNumber}</td>
                        </tr>
                        <tr>
                        <td>{item.productPrice}</td>
                        </tr>
                    </table>
                </td>
                <td></td>
                <td><Button style={{height:"100%", width:"200px"}} variant="info">Proceed to Buy</Button></td>
                </tr>
                </tbody>
            </Table>
    );
}

export default CartItem;