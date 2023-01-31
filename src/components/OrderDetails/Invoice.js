import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';
import url from '../../Uri';
import Header from "../Header";
import "./orders.css";


function Invoice() {


    // console.log("Order",JSON.parse(localStorage.getItem("Generate Invoice")))

    const [products, setProducts] = useState([]);
    const [areProductsFetched, SetAreProductsFetched] = useState(false);

    const [keySet, SetKeySet] = useState([]);
    const [isKeySetFetched, SetIsKeySetFetched] = useState(false);

    var invoice = JSON.parse(localStorage.getItem("Invoice"))
    console.log("invoice", invoice)
    // var order = JSON.parse(localStorage.getItem("Generate Invoice"));
    useEffect(() => {
        if (!areProductsFetched && !isKeySetFetched) {
            console.log("Products", invoice.products)
            var urls = []
            for (var key in invoice.products) {
                keySet.push(key);
                urls.push(axios.get(url + "/get-products/" + key))
                // urls.push(axios.get(url+"/get-products/"+{key}))
            }

            console.log("Urls", urls)
            console.log("Key", keySet)
            axios.all(urls).then(
                axios.spread((...res) => {
                    res.map(index => {
                        products.push(index.data)
                    })
                    SetIsKeySetFetched(true)
                    SetAreProductsFetched(true)
                })
            ).catch(function (error) {
                console.log("Error in fetching products")
            })
            console.log("Products", products)

        }
    })
    const navigate = useNavigate();
    function printInvoice() {
        var printContents = document.getElementById("invoice").innerHTML;
        var originalContents = document.body.innerHTML;

        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents;
        window.location.reload();


    }

    return (
        <>
            <Header />
            <div style={{marginTop: "150px"}}>
            <Container id="invoice">
                {
                    (areProductsFetched) ? (
                        <>
                            <div style={{ border: "1px solid gray" }}>
                            <Container className='invoiceContainer'>
                                <h4 style={{ textAlign: "center" }}>Mahavir Electronics and Furniture</h4>
                           <hr></hr>
                          
                                <Row>
                                    
                                    <Col>
                                    <Table bordered hover>
                                        <tbody>
                                            <tr>
                                                <td>Sold By:</td>
                                                <td>Mahavir Electronics and Furniture</td>
                                            </tr>
                                            <tr>
                                                <td>Shipped From Address:</td>
                                                <td>Mahavir Electronics, Bibwewadi, Pune, Maharashtra-411037.</td>
                                            </tr>
                                            <tr>
                                                <td>GSTIN:</td>
                                                <td>27AAAPO6914H1ZO</td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>"Keep this invoice and manufacturer box for warranty purposes."</td>
                                            </tr>
                                        </tbody>

                                    </Table>
                                    </Col>
                                
                                    <Col>
                                    <Table bordered hover>
                                        <tbody>
                                            <tr>
                                                <td>Order Id:</td>
                                                <td><b>#MEF100{invoice.orderId}</b></td>
                                            </tr>
                                            <tr>
                                                <td>Order Date:</td>
                                                <td>{invoice.buyDate}</td>
                                            </tr>
                                            <tr>
                                                <td>Invoice Date:</td>
                                                <td>{invoice.buyDate}</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                        
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                    <Table bordered hover>
                                        <tbody>
                                            <tr>
                                            <td>Bill/Ship To:</td>
                                            <td>{invoice.userAddress.name}</td>
                                            </tr>
                                            <tr>
                                            <td>Your address:</td>
                                            <td>{invoice.userAddress.address}</td>
                                            </tr>
                                            <tr>
                                            <td>Shipping address:</td>
                                            <td>{invoice.userAddress.city}, {invoice.userAddress.state}.</td>
                                            </tr>
                                            <tr>
                                            <td>Pincode:</td>
                                            <td>{invoice.userAddress.pincode}</td>
                                            </tr>
                                            <tr>
                                            <td>Contact number:</td>
                                            <td>{invoice.userAddress.mobileNumber}</td>
                                            </tr>
                                            
                                        </tbody>
                                    </Table>
                                    </Col>
                                </Row>

                                <Row>
                                        <p style={{ textAlign: "center" }}>Order Details</p>
                                    <Col>
                                        <Table bordered hover style={{ width: "100%", tableLayout: "fixed" }}>
                                            <thead style={{ marginLeft: "0px", padding: "0px" }}>
                                                <tr>
                                                    <th>Product</th>
                                                    <th>Title</th>
                                                    <th>Qty</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    
                                                    products.map(product => {
                                                        console.log("p: "+JSON.stringify(product));
                                                        return (
                                                            <tr>
                                                                <td>{product.modelNumber}</td>
                                                                <td>{product.productName}</td>
                                                                <td>{invoice.products[product.modelNumber]}</td>
                                                            </tr>
                                                        )
                                                    })
                                                }

                                                <tr>
                                                    <td colSpan={2}><b>Grand Total:</b></td>
                                                    <td><b>₨ {invoice.paymentAmount}/-</b></td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Col>
                                </Row>
                                </Container>

                            </div>
                    
                        </>
                    ) : (
                        null
                    )
                }
                
            </Container>
            </div>
            <center>
                    <Button style={{marginTop:'10px'}} onClick={printInvoice}>PRINT INVOICE</Button>
            </center>
        </>

    )
}

export default Invoice;
