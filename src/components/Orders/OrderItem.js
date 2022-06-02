import React from "react";
import { Card, CardHeader, CardText, CardBody,Row,
    CardTitle, CardFooter, Button, Col,Container ,Table} from 'reactstrap';
    import {FormControl,Form} from 'react-bootstrap';
    import { QuantityPicker } from 'react-qty-picker';

const OrderItem=({item})=>{
    return(
        <Table>
        <tbody>
            <tr>
            <td style={{textAlign:"center"}}><img  style={{height:"150px", width:"300px"}} src = {"data:image/png;base64,"+item.productImage.data}/>
            </td>
            <tr> 
            <td>{item.orderId}</td>
            </tr>
            <tr>
            <td>{item.modelNumber}</td>
            </tr>
            <tr>
            <td>Rs. {item.productPrice}</td>
            </tr>
            <td><table>
                <tr>
                    <td>Delivery Date={item.buyDate}</td>
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
    );
}

export default OrderItem;