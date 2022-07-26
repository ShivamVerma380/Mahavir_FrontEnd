import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import { Card, CardHeader, CardText, CardBody,Row,
  CardTitle, CardFooter, Button, Col,Container ,Image} from 'react-bootstrap';
  import {FormControl,Form} from 'react-bootstrap';
  import { QuantityPicker } from 'react-qty-picker';
import axios from 'axios';
import CartItem from './CartItem';
import {setCookie,getCookie} from '../Cookies';
import { Table } from 'reactstrap';
// var price=0;
// var discount = 0;
// var amount=0;

function Cart() {

    var price=0;
    var discount=0;
    var amount=0;
    
    const[cartModels,SetCartModels] = useState(new Map());
    var qty=[];
    

    const [cartItems,SetCartItems] = useState([]);
    const [isCartItemsFetched,SetIsCartItemsFetched] = useState(false);

    useEffect(()=>{
      if(!isCartItemsFetched){
        if(getCookie("CartModels")!=null){
            var arr = getCookie("CartModels").split(",");
            arr.map(item=>{
              if(item!=""){
                  var pair = item.split("=")
                  // if(pair[0])
                  cartModels.set(pair[0].trim(),parseInt(pair[1]));
              }
            })
          }
      
        console.log("Cart Models",cartModels)
        var urls=[];
        arr.map(item=>{
            if(item!=""){
                console.log("item",item)
                urls.push(axios.get("http://localhost:8080/get-products/"+item.split("=")[0]));
            }
        })
            
        
        
    
        axios.all(urls).then(
          axios.spread((...res) => {
              res.map(index => {

                  cartItems.push(index.data);
                  
                  // filteredProducts.push(index.data);


              })
              console.log("Cart Items",cartItems)
              console.log("Cart models ...",cartModels)
              SetIsCartItemsFetched(true);

          })
        )
      }
    })

    return(
      <div >   
        <Header/> 
        <div className="Cart">
        <Row>

        <Col sm={8}>
        {
            (isCartItemsFetched)?(
                <Table>
                <thead>
                    <tr>
                    <th> MyCart ({cartItems.length} items)</th>
                    </tr>
                </thead>
                </Table>
            ):(
                null
            )
        }
        

        {/* <CartItem/> */}
        {
            console.log("cartDetails",cartItems)
        }
        {
            (isCartItemsFetched)?(
                cartItems.map((index,pos)=>{
                console.log("CartModel in map",cartModels)
                console.log("cart model quantity",index.modelNumber,":",cartModels.get(index.modelNumber))
                console.log("Model Number:",index.modelNumber)
                return(
                <CartItem item={index} quantity={cartModels.get(index.modelNumber)}/>
                );
            })
            ):(null)
        }
        
        </Col>
        {
            (isCartItemsFetched)?(
                <Col sm={4}>
                <Table style={{margin_top:"50px", color:'black'}} >
                <thead>
                    <tr>
                    <th> Price Details</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Price ({cartItems.length} Item)</td>
                    <td>
                        {
                            
                            cartItems.map(index=>{
                                {
                                    (index.freeItem) ? (price+=(parseInt(index.productPrice)+parseInt(index.freeItem.price))*parseInt(cartModels.get(index.modelNumber))) : (price+=parseInt(index.productPrice)*parseInt(cartModels.get(index.modelNumber)))
                                }
                                
                                
                                
                            })
                        }
                        ₹ {price}
                        {/* ₹ 37,480 */}
                    </td>
                    
                    </tr>
                    <tr>
                        <td>Discount</td>
                        <td>
                            {
                                cartItems.map(index=>{
                                    {
                                        (index.freeItem) ? (discount+=((parseInt(index.freeItem.price)+(parseInt(index.productPrice)-parseInt(index.offerPrice)))*parseInt(cartModels.get(index.modelNumber)))) : (discount+=((parseInt(index.productPrice)-parseInt(index.offerPrice))*parseInt(cartModels.get(index.modelNumber))))
                                    }
                                      
                                })
                            }
                            - ₹ {discount}
                        </td>
                    </tr>
                    <tr>
                    <td>Delivery Charges</td>
                    <td>Free</td>
                    </tr>
                    
                    <tr>
                    <td> Total Amount</td>
                    <td>
                    ₹ {
                            
                            amount = parseInt(price)-parseInt(discount)

                        }
                        
                        {/* ₹ 37,480 */}
                    </td>
                    </tr>
                        
                </tbody>
                </Table>
                <br></br>
                <br></br>
                <Row>
                    <center>
                    <Button style={{width:"300px"}}className="btn-flat">Check Out</Button>
                    </center>
                </Row>
                </Col>
            ):(
                null
            )
        }
        
        </Row>
        {/* <Row>
            <Col md={7}>
            </Col>
            <Col >
            <Button style={{width:"300px"}}className="btn-flat">Place Order</Button>
            </Col>
        </Row> */}
        </div>

  </div>
    );
  }
  export default Cart;