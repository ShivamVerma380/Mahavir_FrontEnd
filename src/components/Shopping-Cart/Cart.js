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

function Cart() {
    // var cartItems=new Array();
    var modelnums=new Array();
    const navigate = useNavigate();
    var total=0;
    const [cartItems, setcartItems] = useState([]);
    modelnums=getCookie("CartModels").split(',');
    console.log(modelnums,"hjdshj")
    const[cartItemsFetched,setcartItemsFetched]=useState(false);

    function removefromcart(modelnumber){
       
        for (var i = 0; i < modelnums.length; i++) {
            if (modelnums[i] === modelnumber) {
                modelnums.splice(i, 1);
                console.log(modelnums);
                setCookie("CartModels",modelnums,20);
                window.location.reload();
                break;
            }
        }
        
                
        
    }
    useEffect(()=>{
        if(!cartItemsFetched){
            var urls = [];
            
            modelnums.map(modelNum => {
                if(modelNum==="" || modelNum===null){

                }
                else{
                urls.push(axios.get("http://localhost:8080/get-products/" + modelNum));

                }
            })
            axios.all(urls).then(
                axios.spread((...res) => {
                    res.map(index => {

                        cartItems.push(index.data);
                        // filteredProducts.push(index.data);


                    })
                    setcartItemsFetched(true);

                })
            )
        
        }
    })   

   
    return(
        <div>
        <h1 style={{color:"rgb(255,98,98)",padding:'1%'}}><i>Cart</i></h1>
        <Row style={{margin:'1%'}}>
            <Col sm={10} style={{boxShadow: 'rgb(0 0 0 / 20%) 0px 1px 2px 0px'}}>
                
                {
                    cartItems.map(item=>{
                        
                        total+=parseInt(item.offerPrice);
                        console.log("Total Price: "+total)
                        
                        return(
                            <Row style={{padding: '1%',
                            borderBottom: 'solid 2px #ff585885',
                            backgroundColor: 'white'}}>
                                
                                <Col sm={2}>
                                    <Row>
                                    <Image style={{ height: "100%", width: "100%" }} src={item.productImage1} />
                                    </Row>
                                    
                                </Col>
                                <Col sm={8}>
                                <Row>
                                            <h4>{item.productName}</h4>
                                       </Row>
                                       <Row>
                                            
                                            {
                                                (item.productPrice === item.offerPrice) ? (<h4>₹ {item.productPrice}</h4>) : (
                                                    <h4>MSP: <b style={{ marginRight: "20px", color: "rgb(255,98,98)" }}>₹{item.offerPrice}</b> MRP: <b style={{ textDecorationLine: "line-through", textDecorationStyle: "solid" }}>₹ {item.productPrice}</b></h4>
                                                )
                                            }

                                        </Row>
                                        <Row>
                                    <QuantityPicker smooth />
                                    <Button onClick={()=>removefromcart(item.modelNumber)} style={{marginLeft:'20px',width:'20%'}} className="btn-flat">REMOVE</Button>
                                    
                                    </Row>
                                </Col>
                                <Col sm={2}>
                                    <h4>Delivered by</h4> 
                                </Col>
                                
                                
                            </Row>
                            
                            
                        )
                        

                    }
                    
                    )
                    
                }
                <Row style={{padding:'1%'}}>
                    <Button style={{marginLeft:'75%',width:'20%'}} className="btn-flat">Proceed to Buy</Button>

                </Row>
            </Col>
            <Col sm={2}>
            
                                    <h3>Total: {total}</h3>
            </Col >
            
        </Row>
        </div>
    );
    
    // var token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJraGFyZW9ta2FyOTlAZ21haWwuY29tbSIsImV4cCI6MTY1NzM2MjIyNiwiaWF0IjoxNjU3MjYyMjI2fQ.4rzArP34anc9EoiPzfKRIz58vS2ZKmclLcg71L2ZHgo"
    // //var token = localStorage.getItem("jwtToken");
    // const [cartDetails,setCartDetails] = useState();
    // // var isCartDetailsSet = false;x
    // const [isCartDetailsSet,setisCartDetailsSet] = React.useState(false);
    // var price = 0;
    // var discount = 0;
    // var amount = 0;
    // useEffect(()=>{
    //     if(!isCartDetailsSet){
    //         var isLoggedIn = localStorage.getItem("isLoggedIn");
    //         if(isLoggedIn==="true"){
    //             axios({
    //                 method:"get",
    //                 url: "http://localhost:8080/get-cart-details",
    //                 headers:{
    //                     "Authorization": "Bearer "+localStorage.getItem("jwtToken")
    //                 }
    //             }).then(function(response){
    //                 console.log("Response",response);
    //                 if(response.status==200){
    //                     console.log("Data",response.data);
    //                     setCartDetails(response.data);
    //                     console.log("Cart Details",cartDetails)
    //                     setisCartDetailsSet(true);
                        
    //                 }else{
    //                     console.log(response.data.message);
    //                 }
    //             }).catch(function(error){
    //                 console.log(error);
    //             })
    //         }else{
    //             var modelNumbers = localStorage.getItem("CartItems").split(',');
    //             var urls=[];
    //             var urls=[];
    //             modelNumbers.map(modelNum=>{
    //                 urls.push(axios.get("http://localhost:8080/get-products/"+modelNum));
    //             })

    //             axios.all(urls).then(
    //                 axios.spread((...res)=>{
    //                     res.map(index=>{
    //                         cartDetails.push(index.data);
    //                     })

    //                     setisCartDetailsSet(true);

    //                 })
    //             )

    //         }
    //     }
        
    // },[]);
    
    
    // return (
        
        
      
    //     <div >   
    //        <Header/> 
    //        <div className="Cart">
    //        <Row>
  
    //         <Col sm={8}>
    //         {
    //             (isCartDetailsSet)?(
    //                 <Table>
    //                 <thead>
    //                     <tr>
    //                     <th> MyCart ({cartDetails.length} items)</th>
    //                     {/* <th><Form className="d-flex">
    //                                 <FormControl
    //                                 type="search"
    //                                 placeholder="Pincode Search"
                                
    //                                 aria-label="Search"
    //                                 />        
    //                             </Form></th> */}
    //                     </tr>
    //                 </thead>
    //                 </Table>
    //             ):(
    //                 null
    //             )
    //         }
            

    //         {/* <CartItem/> */}
    //         {
    //             console.log("cartDetails",cartDetails)
    //         }
    //         {
    //             (isCartDetailsSet)?(
    //             cartDetails.map(index=>{
    //                 console.log("Model Number:",index.modelNumber)
    //                 return(
    //                 <CartItem item={index}/>
    //                 );
    //             })
    //             ):(null)
    //         }
            
    //         </Col>
    //         {
    //             (isCartDetailsSet)?(
    //                 <Col sm={4}>
    //                 <Table style={{margin_top:"50px", color:'black'}} >
    //                 <thead>
    //                     <tr>
    //                     <th> Price Details</th>
    //                     <th></th>
    //                     </tr>
    //                 </thead>
    //                 <tbody>
    //                     <tr>
    //                     <td>Price ({cartDetails.length} Item)</td>
    //                     <td>
    //                         {
                                
    //                             cartDetails.map(index=>{
    //                                 {
    //                                     (index.freeItem) ? (price+=(parseInt(index.productPrice)+parseInt(index.freeItem.price))) : (price+=parseInt(index.productPrice))
    //                                 }
                                    
                                    
                                    
    //                             })
    //                         }
    //                         ₹ {price}
    //                         {/* ₹ 37,480 */}
    //                     </td>
                        
    //                     </tr>
    //                     <tr>
    //                         <td>Discount</td>
    //                         <td>
    //                             {
    //                                 cartDetails.map(index=>{
    //                                     {
    //                                         (index.freeItem) ? (discount+=(parseInt(index.freeItem.price)+(parseInt(index.productPrice)-parseInt(index.offerPrice)))) : (discount+=(parseInt(index.productPrice)-parseInt(index.offerPrice)))
    //                                     }
                                         
    //                                 })
    //                             }
    //                             - ₹ {discount}
    //                         </td>
    //                     </tr>
    //                     <tr>
    //                     <td>Delivery Charges</td>
    //                     <td>Free</td>
    //                     </tr>
                        
    //                     <tr>
    //                     <td> Total Amount</td>
    //                     <td>
    //                     ₹ {
                                
    //                             amount = parseInt(price)-parseInt(discount)

    //                         }
                            
    //                         {/* ₹ 37,480 */}
    //                     </td>
    //                     </tr>
                            
    //                 </tbody>
    //                 </Table>
    //                 <br></br>
    //                 <br></br>
    //                 <Row>
    //                     <center>
    //                     <Button style={{width:"300px"}}className="btn-flat">Place Order</Button>
    //                     </center>
    //                 </Row>
    //                 </Col>
    //             ):(
    //                 null
    //             )
    //         }
            
    //         </Row>
    //         {/* <Row>
    //             <Col md={7}>
    //             </Col>
    //             <Col >
    //             <Button style={{width:"300px"}}className="btn-flat">Place Order</Button>
    //             </Col>
    //         </Row> */}
    //        </div>
  
    // </div>    
    // );
  }
  export default Cart;