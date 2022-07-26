import React from "react";
import { render } from "react-dom";
import {Col,Row,Container,Card,Button} from 'react-bootstrap';
import { Divider, Table } from 'antd';
import 'antd/dist/antd.css';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Preview, print } from 'react-html2pdf';
const Invoice = () => {

    var selectedaddress=localStorage.getItem("selectedaddress");
    console.log(localStorage.getItem("buyProduct"));
    var buyproducts=localStorage.getItem("buyProduct");
    var d = new Date();
    console.log("date "+d)
    console.log("test "+buyproducts);
    selectedaddress=JSON.parse(selectedaddress);
    buyproducts=JSON.parse(buyproducts);
    console.log("test "+buyproducts);
    console.log("address: "+ selectedaddress);

    var products=[
      {
        "productId": "1",
        "productName": "Product 1",
      },{
        "productId": "2",
        "productName": "Product 2",
      }
    ]

    
  return (
    <div>
        
            <Preview id={'jsx-template'} style={{padding:'1%'}} >
            <center><h3>Invoice</h3></center>
            <Card >
                <Card.Body>
                  <Card.Text>
                  <h6>Invoice Date and Time: {d.toISOString()}</h6>
                    <p><b>{selectedaddress.name}</b> <br></br>
                    <b>{selectedaddress.mobileNumber}</b> </p> 
                    <p>{selectedaddress.address}<br></br> {selectedaddress.city}<br></br> {selectedaddress.state} <b>- {selectedaddress.pincode}</b> <br></br>Alternate Mobile Number: <b>{selectedaddress.alternateMobile}</b></p> 
                    
                  </Card.Text>
                </Card.Body>

              </Card>
            <Table dataSource={[{
                    id: buyproducts.modelNumber,
                    name: buyproducts.productName,
                    
                    price: buyproducts.offerPrice*parseInt(localStorage.getItem("quantity")),
                    quantity: parseInt(localStorage.getItem("quantity"))
                }]}
                pagination={false}
                >
                <Table.Column title="Items" dataIndex='name' />
                <Table.Column title="Quantity" dataIndex='quantity' />
                <Table.Column title="Price" dataIndex='price' />
                
                
                </Table>
                <h5>Total: {buyproducts.offerPrice*parseInt(localStorage.getItem("quantity"))}</h5>
            </Preview>
            <Button onClick={()=>print('a', 'jsx-template')}> print</Button>
          </div>
             );
};

export default Invoice;
