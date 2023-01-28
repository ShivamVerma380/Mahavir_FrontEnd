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
            <Container id="invoice">
                {
                    (areProductsFetched) ? (
                        <>
                            <div style={{ border: "1px solid gray", marginTop: "150px" }}>
                                <h2 style={{ textAlign: "center", marginTop: "10px", textDecorationLine: "underline" }}>Invoice</h2>
                                <br></br>
                                <br></br>
                                <Row>
                                    <Col sm={1}></Col>
                                    <Col md={5}>

                                        <h4 style={{ color: "blue" }}>Sold By: </h4>
                                        <h4>Mahavir Electronics and Furniture</h4>
                                        <h4 style={{ color: "blue" }}>Shipped From Address:</h4>
                                        <p>Mahavir Electronics, Bibwewadi, Pune, Maharashtra-411037.</p>
                                        <br></br>
                                        <h5><b style={{ color: "blue" }}>GSTIN:</b> 27AAAPO6914H1ZO</h5>

                                        <p>"Keep this invoice and manufacturer box for warranty purposes."</p>
                                    </Col>
                                    <Col md={1}></Col>
                                    <Col md={4}>
                                        <p><b>Order Id:</b>#MAV{invoice.orderId}</p>
                                        <p><b>Order Date:</b>{invoice.buyDate}</p>
                                        <p><b>Invoice Date:</b>{invoice.buyDate}</p>
                                    </Col>
                                </Row>

                                <hr></hr>
                                <Row>
                                    <Col sm={1}></Col>
                                    <Col md={6} >
                                        <p><b>Bill/Ship To: </b>{invoice.userAddress.name}</p>
                                        <p>Your address: {invoice.userAddress.address}</p>
                                        <p>Shipping address: {invoice.userAddress.city}, {invoice.userAddress.state}. </p>
                                        <p>Pincode: {invoice.userAddress.pincode}</p>
                                        <p>Contact number: {invoice.userAddress.mobileNumber}</p>
                                    </Col>

                                </Row>
                                <hr></hr>
                                <br></br>

                                <Row>
                                    <Col sm={2}></Col>
                                    <Col md={8}>
                                        <p style={{ textAlign: "center" }}>Order Details</p>
                                        <Table striped bordered hover style={{ width: "100%", tableLayout: "fixed" }}>
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
                                                        return (
                                                            <tr>
                                                                <td>{product.modelNumber}</td>
                                                                <td>{product.productName}</td>
                                                                <td>{invoice.products[product.modelNumber]}</td>
                                                            </tr>
                                                        )
                                                    })
                                                }

                                                <br></br>
                                                <tr>
                                                    <td colSpan={2}><b>Grand Total:</b></td>
                                                    <td>{invoice.paymentAmount}</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Col>
                                </Row>

                            </div>
                            <br></br>

                        </>
                    ) : (
                        null
                    )
                }
                
            </Container>
            <center>
                    <Button onClick={printInvoice}>PRINT INVOICE</Button>
            </center>
        </>

    )
}

export default Invoice;