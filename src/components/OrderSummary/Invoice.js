import React from "react";
import { render } from "react-dom";
import {Col,Row,Container,Card,Button} from 'react-bootstrap';
import { Divider, Table } from 'antd';
import 'antd/dist/antd.css';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Preview, print } from 'react-html2pdf';
import { Tab } from "material-ui";
import {setCookie,getCookie} from '../Cookies'; 
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
    console.log("Cookie: ",getCookie("CartModels"))

    var cartmodels = [];
    var modelnums = [];
    var modelquantity = [];
    cartmodels = getCookie("CartModels").split(",");
    console.log("Models: ",cartmodels)
    cartmodels.map(index=>{
      modelnums.push(index.slice(0,-2));
    })
    console.log("Model Nums: ",modelnums);

    cartmodels.map(index=>{
      modelquantity.push(index.charAt(index.length-1));
      
    })
    console.log("Model Quantity: ",modelquantity);

    var products=[
      {
        
        "productId": "1",
        "productName": "Product 1",
        "quantity": "2",
        "price": "3000",
      },{
        "productId": "2",
        "productName": "Product 2",
        "quantity": "1",
        "price": "6000",
      }
    ]

    const dataSource = [

      
     
      {
        
        key: '1',
        productName: 'fefefefef thththt tjyjyjy    efefefefwfwfw grgrgrgr',
        quantity: 32,
        price: 9000,
      },
      {
        key: '2',
        productName: 'John',
        quantity: 42,
        price: 10000,
      },
      {
        key: '3',
        productName: 'John',
        quantity: 42,
        price: 10000,
      },
      // {
      //   key: '4',
      //   productName: 'John',
      //   quantity: 42,
      //   price: 10000,
      // },
      // {
      //   key: '5',
      //   productName: 'John',
      //   quantity: 42,
      //   price: 10000,
      // },
      // {
      //   key: '6',
      //   productName: 'John',
      //   quantity: 42,
      //   price: 10000,
      // },
      // {
      //   key: '7',
      //   productName: 'John',
      //   quantity: 42,
      //   price: 10000,
      // },
      // {
      //   key: '8',
      //   productName: 'John',
      //   quantity: 42,
      //   price: 10000,
      // },
      // {
      //   key: '9',
      //   productName: 'John',
      //   quantity: 42,
      //   price: 10000,
      // },
      // {
      //   key: '10',
      //   productName: 'John',
      //   quantity: 42,
      //   price: 10000,
      // },
      // {
      //   key: '11',
      //   productName: 'John',
      //   quantity: 42,
      //   price: 10000,
      // },
      // {
      //   key: '12',
      //   productName: 'John',
      //   quantity: 42,
      //   price: 10000,
      // },
    ];
    
    const columns = [
      {
        title: 'Items',
        dataIndex: 'productName',
        key: 'productName',
      },
      {
        title: 'Quantity',
        dataIndex: 'quantity',
        key: 'quantity',
      },
      {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
      },
    ];

    
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
              
              
               
                 
                
              
            {/* <Table dataSource={[{
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
                
                
                
                </Table> */}

                
                {
                  (dataSource.length>4) ? (
                    <Table dataSource={dataSource} columns={columns} pagination={true}/>
                    
                  ) : (<Table dataSource={dataSource} columns={columns} pagination={false}/>)
                }

                <h5>Total: {buyproducts.offerPrice*parseInt(localStorage.getItem("quantity"))}</h5>
            </Preview>
            <Button onClick={()=>print('a', 'jsx-template')}> print</Button>
          </div>
             );
};

export default Invoice;
