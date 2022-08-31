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
import 'typeface-roboto';
import "./BuyNowCheckout.css";
import url from '../../../Uri';
import Footer from '../../Footer/Footer';
import CheckoutItem from '../CheckoutItem';


function BuyNowSummary(){

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
            
            if(getCookie("models")!=null){
                var arr = getCookie("models").split(",");
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
                console.log("Cart Items",cartItems)
                console.log("Cart models ...",cartModels)
                SetIsCartItemsFetched(true);
  
            })
          )
        }
      })

      function handleProceedToPaymentClick(){
        if(parseInt(amount)==0){
            alert("Please add items to purchase");
        }else{
            localStorage.setItem("Amount",parseInt(amount));
            navigate("/payment")
        }
      }

    // console.log("Address",localStorage.getItem("selectedaddress"))
      function handleAddNow(){
        navigate("/");
      }
    return(
        <>
        <Header/>
        
        <div  className="cartpage"> 
            <div className="Cart" style={{boxSizing:"border-box"}}>
            <Row>
    
            <Col sm={6} className='summaryTable'>
            {
                (isCartItemsFetched && cartItems.length > 0)?(
                   
                        <Table >
                    <thead className='cartTitle'>
                        <tr >
                        <th className='cartTitle' style={{fontFamily:"typeface-roboto",borderBottom:"1px solid #E2E2E2"}}>ORDER SUMMARY</th>
                        </tr>
                    </thead>
                    </Table>
                    
                                           
                ):(
                    <>
                    <Container>
                    <center>
                    <br></br>
                    <h2 tstyle={{ fontSize: "18px"}}>You don't have any items to buy</h2>
                    <h3 tstyle={{ fontSize: "16px"}}>Please add Items to Buy!</h3>
                    <Button style={{marginTop:"60px", marginLeft:"50px",background:"rgb(193,0,0)",color:"white",cursor:"pointer", height:"50px",width:"150px", fontSize:"16px"}} onClick={handleAddNow}>Add Now</Button>
                    <br></br>
                    </center>
                    </Container>
                    <br></br>
                    </>
                )
            }
            
    
            {/* <CartItem/> */}
            {
                console.log("cartDetails",cartItems)
            }
            {
                (isCartItemsFetched )?(
                    cartItems.map((index,pos)=>{
                    console.log("CartModel in map",cartModels)
                    console.log("cart model quantity",index.modelNumber,":",cartModels.get(index.modelNumber))
                    console.log("Model Number:",index.modelNumber)
                    return(
                    <CheckoutItem item={index} quantity={cartModels.get(index.modelNumber)}/>
                    );
                })
                ):(null)
            }
            
            </Col>
            {
                (isCartItemsFetched && cartItems.length > 0)?(
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
            {
                (cartItems.length > 0)?(
                    <Row>
                <Col md-4></Col>
                <Col md-4>
                <Button style={{marginTop:"20px",background:"rgb(193,0,0)",color:"white",cursor:"pointer", height:"50px",width:"150px", fontSize:"16px"}} onClick={handleProceedToPaymentClick}>Place Order</Button>
                </Col>
                <Col md-4></Col>
            </Row>
            
                ):(
                    null
                )
            }
            
            </div>
      </div>
      
      <Footer />
      
      </>
        );

}

export default BuyNowSummary;