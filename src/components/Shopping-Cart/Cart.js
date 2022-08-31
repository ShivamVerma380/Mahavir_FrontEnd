import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from "react-router-dom";
import Header from "../Header";
import { Card, CardHeader, CardText, CardBody,Row,
  CardTitle, CardFooter, Button, Col,Container ,Image} from 'react-bootstrap';
  import {FormControl,Form} from 'react-bootstrap';
  import { QuantityPicker } from 'react-qty-picker';
import axios from 'axios';
import CartItem from './CartItem';
import {setCookie,getCookie} from '../Cookies';
import Footer from '../Footer/Footer';
import { Table } from 'react-bootstrap';
import './Cart.css';
import '../../components/Wishlist.css';
import url from '../../Uri';
import { toast } from 'react-toastify';
// var price=0;
// var discount = 0;
// var amount=0;

function Cart() {

    var price=0;
    var discount=0;
    var amount=0;

    const navigate = useNavigate();
    
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
                urls.push(axios.get(url+"/get-products/"+item.split("=")[0]));
            }
        })
            
        
        
    
        axios.all(urls).then(
          axios.spread((...res) => {
              res.map(index => {

                  cartItems.push(index.data);
                  
                  // filteredProducts.push(index.data);


              })
              cartItems.reverse();
              console.log("Cart Items",cartItems)
              console.log("Cart models ...",cartModels)
              SetIsCartItemsFetched(true);

          })
        )
      }
    })


    function handleCheckout(){
        if(getCookie("isLoggedIn")==='true'){
            localStorage.setItem("type","checkout");
            var arr = [];
            getCookie("CartModels").split(",").map(item=>{
                if(item!=""){
                    var pair = item.split("=")
                    // if(pair[0])
                    // cartModels.set(pair[0].trim(),parseInt(pair[1]));
                    arr.push(pair[0].trim()+"="+parseInt(pair[1]));
                }
            })
            setCookie("models",arr,20);
            console.log("Models",getCookie("models"));
            navigate("/checkout");
        }
        else{
            
            navigate("/login")
        }
        
    }   

    const continueShoppingHandler=()=> {
        navigate("/")
      }

    return(
        <>

        <Header/> 
      <div  className="cartpage">   
        
        {
            (isCartItemsFetched) ? (
                (cartItems.length>0) ? (
                    <div className="Cartbody" style={{boxSizing:"border-box"}}>
            <Row>
    
            <Col md={7} className='cartTable'>
            {
                (isCartItemsFetched)?(
                    <h1 className="cart_heading">Cart</h1>
                    
                    
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
                    <Col md={5} className="priceTable">
                    <Table style={{ color:'black'}} >
                    <thead>
                        <tr>
                        <th  className='cartTitle' style={{fontFamily:"Roboto",borderBottom:"1px solid #E2E2E2"}}> Price Details</th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td  style={{fontFamily:"Roboto",borderBottom:"1px solid #E2E2E2"}}>Price ({cartItems.length} Item)</td>
                        <td  style={{fontFamily:"Roboto",borderBottom:"1px solid #E2E2E2",textAlign:"end"}}>
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
                            <td  style={{fontFamily:"Roboto",borderBottom:"1px solid #E2E2E2"}}>Discount</td>
                            <td  style={{fontFamily:"Roboto",borderBottom:"1px solid #E2E2E2",textAlign:"end"}} >
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
                        <td  style={{fontFamily:"Roboto",borderBottom:"1px solid #E2E2E2"}}>Delivery Charges</td>
                        <td  style={{fontFamily:"Roboto",borderBottom:"1px solid #E2E2E2" ,textAlign:"end",color:"rgba(52,184,58,1)"}}>Free</td>
                        </tr>
                        
                        <tr>
                        <td  style={{fontFamily:"Roboto",borderBottom:"1px solid #E2E2E2"}}> Total Amount</td>
                        <td  style={{fontFamily:"Roboto",borderBottom:"1px solid #E2E2E2" ,textAlign:"end"}}>
                        ₹ {
                                
                                amount = parseInt(price)-parseInt(discount)
    
                            }
                            
                            {/* ₹ 37,480 */}
                        </td>
                        </tr>
                        <p style={{color:"rgba(52,184,58,1)",fontFamily:"Roboto",fontSize:"20px",fontWeight:500,marginTop:"20px",marginLeft:"0.4rem"}}>
                            You will save ₹{discount} on this order
                        </p>
                            
                    </tbody>
                    </Table>
                    
                    <Row>
                        <center>
                        <Button style={{height:"50px",width:"250px",background:"#C10000", fontFamily:"Roboto",letterSpacing:"1px",marginBottom:'2%'}} className="btn-flat" onClick={handleCheckout}>CHECK OUT</Button>
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
                ) : (
                    <center>
                    <img src="https://github.com/ShivamVerma380/MahavirImages/blob/main/VectorImg/emptywishlistvectorimg.png?raw=true" style={{height:"260px",width:"260px",marginTop:'100px'}}/>
                    <br></br>
                    <h5 style={{fontWeight:600, fontSize:"20px", lineHeight:"23px", letterSpacing:"0.02em"}}>Oops! Your cart looks empty</h5>
                    <Row>
                      <Col md={3}></Col>
                      <Col md={6}>
                      <p style={{fontWeight:500, fontSize:"18px", lineHeight:"23px", letterSpacing:"0.02em", color:"rgba(0,0,0,0.5)"}}>Add items to it now.</p>
                      </Col>
                    </Row>
                    <br></br>
                    <Button onClick={()=>continueShoppingHandler()} style={{background:"#C10000",border:"none",padding:"16px",fontSize:"14px",lineHeight:"14px",borderRadius:"5px",marginBottom:"20px"}}>CONTINUE SHOPPING</Button>
                    
                    
                    </center>
                )
            ) : (null)
            
        }
        
        <br></br>
        <br></br>
        
        
        

  </div>
  <Footer/>
  </>
    );
  }
  export default Cart;