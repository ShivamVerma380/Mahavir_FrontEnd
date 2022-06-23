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
                <td><img  style={{height:"250px", width:"300px"}} src = {"data:image/png;base64,"+item.productImage1.data}/>
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
                        <td><b>{item.productName}</b></td>
                        </tr>
                        <tr>
                        <td>{item.modelNumber}</td>
                        </tr>
                        <tr>
                        <td><b>{item.productPrice}</b></td>
                        </tr>
                    </table>
                </td>
                <td></td>
                <td><Button className="btn-flat">Remove</Button></td>
                </tr>
                </tbody>
            </Table>
    );
}

export default CartItem;