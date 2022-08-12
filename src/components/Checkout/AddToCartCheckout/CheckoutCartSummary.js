import {React,useState,useEffect} from 'react';
import { Navigate, useNavigate } from "react-router-dom";
import Header from "../../Header";
import { Card, CardHeader, CardText, CardBody,Row,
  CardTitle, CardFooter, Button, Col,Container ,Image} from 'react-bootstrap';
  import {FormControl,Form} from 'react-bootstrap';
  import { QuantityPicker } from 'react-qty-picker';
import axios from 'axios';
import CartItem from '../../Shopping-Cart/CartItem';
import {setCookie,getCookie} from '../../Cookies';
import { Table } from 'reactstrap';
import '../../Shopping-Cart/Cart.css';
import 'typeface-roboto'
import '../../OrderSummary/Summary.css'
import url from '../../../Uri';

function CheckoutCartSummary(){

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
            if(localStorage.getItem("type")!=null &&  localStorage.getItem("type")==="buyNow"){
                console.log("buyNow",localStorage.getItem("buyProduct"));
                var product = JSON.parse(localStorage.getItem("buyProduct"));
                console.log("product",product.modelNumber);
                var arr = [];
                arr.push(product.modelNumber+"=1");
                console.log('arr',arr)
                cartModels.set(product.modelNumber,1);
            }else{
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
                console.log("Cart Items",cartItems)
                console.log("Cart models ...",cartModels)
                SetIsCartItemsFetched(true);
  
            })
          )
        }
      })

      function handleProceedToPaymentClick(){
        localStorage.setItem("Amount",parseInt(amount));
        navigate("/cart-payment")
      }

    // console.log("Address",localStorage.getItem("selectedaddress"))

    return(
        <div  className="cartpage">   
            {/* <Header/>  */}
            <div className="Cart" style={{boxSizing:"border-box"}}>
            <Row>
    
            <Col sm={8} className='summaryTable'>
            {
                (isCartItemsFetched)?(
                    <Table >
                    <thead className='cartTitle'>
                        <tr >
                        <th className='cartTitle' style={{fontFamily:"typeface-roboto",borderBottom:"1px solid #E2E2E2"}}>ORDER SUMMARY</th>
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
                    <Col sm={4} className="summarypriceTable">
                    <Table style={{margin_top:"50px", color:'black',width:"470px"}} >
                    <thead>
                        <tr>
                        <th  className='cartTitle' style={{fontFamily:"typeface-roboto",borderBottom:"1px solid #E2E2E2"}}> Price Details</th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td  style={{fontFamily:"typeface-roboto",borderBottom:"1px solid #E2E2E2"}}>Price ({cartItems.length} Item)</td>
                        <td  style={{fontFamily:"typeface-roboto",borderBottom:"1px solid #E2E2E2",textAlign:"end",paddingRight:"50px"}}>
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
                            <td  style={{fontFamily:"typeface-roboto",borderBottom:"1px solid #E2E2E2"}}>Discount</td>
                            <td  style={{fontFamily:"typeface-roboto",borderBottom:"1px solid #E2E2E2",textAlign:"end",paddingRight:"50px"}} >
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
                        <td  style={{fontFamily:"typeface-roboto",borderBottom:"1px solid #E2E2E2"}}>Delivery Charges</td>
                        <td  style={{fontFamily:"typeface-roboto",borderBottom:"1px solid #E2E2E2" ,textAlign:"end",paddingRight:"50px",color:"rgba(52,184,58,1)"}}>Free</td>
                        </tr>
                        
                        <tr>
                        <td  style={{fontFamily:"typeface-roboto",borderBottom:"1px solid #E2E2E2"}}> Total Amount</td>
                        <td  style={{fontFamily:"typeface-roboto",borderBottom:"1px solid #E2E2E2" ,textAlign:"end",paddingRight:"50px"}}>
                        ₹ {
                                
                                amount = parseInt(price)-parseInt(discount)
    
                            }
                            
                            {/* ₹ 37,480 */}
                        </td>
                        </tr>
                        <p style={{color:"rgba(52,184,58,1)",fontFamily:"typeface-roboto",fontSize:"20px",fontWeight:500,marginTop:"20px",marginLeft:"0.4rem"}}>
                            You will save ₹{discount} on this order
                        </p>
                            
                    </tbody>
                    </Table>
                    <br></br>
                    <br></br>
                    <Button style={{backgroundColor:"#C10000",border:"none"}} onClick={handleProceedToPaymentClick}>Proceed To Payment</Button>
                    {/* <Row>
                        <center>
                        <Button style={{height:"50px",width:"250px",background:"#C10000", fontFamily:"typeface-roboto",letterSpacing:"1px"}} className="btn-flat" onClick={handleCheckout}>CHECK OUT</Button>
                        </center>
                    </Row> */}
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

export default CheckoutCartSummary;