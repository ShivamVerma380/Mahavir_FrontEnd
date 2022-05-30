import React from "react";
import { Card, CardHeader, CardText, CardBody,Row,
    CardTitle, CardFooter, Button, Col,Container ,Table} from 'reactstrap';
    import {FormControl,Form} from 'react-bootstrap';
    import { QuantityPicker } from 'react-qty-picker';

const OrderItem=()=>{
    return(
        <Table>
        <tbody>
            <tr>
            <td style={{textAlign:"center"}}><img  style={{height:"150px", width:"300px"}} src = {require ('../../assets/logo.jpg')}/>
            </td>
            <tr> 
            <td>TV</td>
            </tr>
            <tr>
            <td>83746326</td>
            </tr>
            <tr>
            <td>72653</td>
            </tr>
            <td><table>
                <tr>
                    <td>Delivery Date=09-02-22</td>
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