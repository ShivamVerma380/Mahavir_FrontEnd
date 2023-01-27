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
import { toast, ToastContainer } from 'react-toastify';


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
            
            // console.log("Cart Models",cartModels)
            var urls=[];
            arr.map(item=>{
                if(item!=""){
                    // console.log("item",item)
                    urls.push(axios.get(url+"/get-products/"+item.split("=")[0]));
                }
            })
              
          
          
      
          axios.all(urls).then(
            axios.spread((...res) => {
                res.map(index => {
  
                    cartItems.push(index.data);
                    
                    // filteredProducts.push(index.data);
  
  
                })
                // console.log("Cart Items",cartItems)
                // console.log("Cart models ...",cartModels)
                SetIsCartItemsFetched(true);
  
            })
          )
        }
      })

      function handleProceedToPaymentClick(){
        if(parseInt(amount)==0){
            // alert("Please add items to purchase");
            toast.warn(<b>Please add items to purchase</b>)
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
        <ToastContainer position='top-center'/>
        <Header/>
        
        <div  className="cartpage"> 
            <div className="Cart" style={{boxSizing:"border-box"}}>
            <Row style={{display:'flex',justifyContent:'center'}}>
    
            <Col className='summaryTable'>
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
                    // <>
                    // <Container>
                    // <center>
                    // <br></br>
                    // <h2 tstyle={{ fontSize: "18px"}}>You don't have any items to buy</h2>
                    // <h3 tstyle={{ fontSize: "16px"}}>Please add Items to Buy!</h3>
                    // <Button style={{marginTop:"60px", marginLeft:"50px",background:"rgb(193,0,0)",color:"white",cursor:"pointer", height:"50px",width:"150px", fontSize:"16px"}} onClick={handleAddNow}>Add Now</Button>
                    // <br></br>
                    // </center>
                    // </Container>
                    // <br></br>
                    // </>
                    <center>
                    <img src="https://github.com/ShivamVerma380/MahavirImages/blob/main/VectorImg/emptywishlistvectorimg.png?raw=true" style={{height:"260px",width:"260px",marginTop:'100px'}}/>
                    <br></br>
                    <h5 style={{fontWeight:600, fontSize:"20px", lineHeight:"23px", letterSpacing:"0.02em"}}>Oops! You don't have any items to buy</h5>
                    <Row>
                      <Col md={3}></Col>
                      <Col md={6}>
                      <p style={{fontWeight:500, fontSize:"18px", lineHeight:"23px", letterSpacing:"0.02em", color:"rgba(0,0,0,0.5)"}}>Please add Items to Buy!</p>
                      </Col>
                    </Row>
                    <br></br>
                    <Button onClick={()=>handleAddNow()} style={{background:"#C10000",border:"none",padding:"16px",fontSize:"14px",lineHeight:"14px",borderRadius:"5px",marginBottom:"20px"}}>ADD NOW</Button>
                    
                    
                    </center>
                )
            }
            
    
            {/* <CartItem/> */}
            {
                // console.log("cartDetails",cartItems)
            }
            {
                (isCartItemsFetched )?(
                    cartItems.map((index,pos)=>{
                    // console.log("CartModel in map",cartModels)
                    // console.log("cart model quantity",index.modelNumber,":",cartModels.get(index.modelNumber))
                    // console.log("Model Number:",index.modelNumber)
                    return(
                    <CheckoutItem item={index} quantity={cartModels.get(index.modelNumber)}/>
                    );
                })
                ):(null)
            }
            
            </Col>
            {
                (isCartItemsFetched && cartItems.length > 0)?(
                    <Col className="summarypriceTable">
                    <Table style={{margin_top:"50px", color:'black',width:"100%"}} >
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
                                        (index.freeItem) ? (price+=(parseInt(index.productPrice.replace(',',''))+parseInt(index.freeItem.price.replace(',','')))*parseInt(cartModels.get(index.modelNumber))) : (price+=parseInt(index.productPrice.replace(',',''))*parseInt(cartModels.get(index.modelNumber)))
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
                                            (index.freeItem) ? (discount+=((parseInt(index.freeItem.price.replace(',',''))+(parseInt(index.productPrice.replace(',',''))-parseInt(index.offerPrice.replace(',',''))))*parseInt(cartModels.get(index.modelNumber)))) : (discount+=((parseInt(index.productPrice.replace(',',''))-parseInt(index.offerPrice.replace(',','')))*parseInt(cartModels.get(index.modelNumber))))
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
                    <Row className='place_order_button_row'>
                
                <Button style={{marginTop:"20px",background:"rgb(193,0,0)",color:"white",cursor:"pointer", height:"50px",width:"150px", fontSize:"16px",border:'solid 1px rgb(193, 0, 0)'}} onClick={handleProceedToPaymentClick}>Place Order</Button>
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