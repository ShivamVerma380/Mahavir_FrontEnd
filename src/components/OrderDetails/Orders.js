import axios from "axios";
import React, { useEffect, useState }  from "react";
import {Row,Col,Form,Button} from 'react-bootstrap';
// import { Header } from "semantic-ui-react";
import Header from "../Header";



const productBoughtbyUser =[

    {
        "orderId":"Or123",
        "modelNumber":"71620",
        "productPrice":"14000",   
        "ProductImage":"https://github.com/ShivamVerma380/MahavirImages/blob/main/Whirlpool/Refrigerators/Double%20Door/21391-Omega-Steel-1.jpeg?raw=true",
        "DateofDelivery":"27-07-2022",
        "BuyDate":"18-07-2019",
        "OrderStatus":"Delivered",
        "BuyerEmail":"shraddhamulay09@gmail.com"
    },
    {
        "orderId":"Or124",
        "modelNumber":"21391",
        "productPrice":"15000",
        "ProductImage":"https://github.com/ShivamVerma380/MahavirImages/blob/main/Whirlpool/Refrigerators/Double%20Door/21391-Omega-Steel-1.jpeg?raw=true",
        "DateofDelivery":"25-07-2022",
        "BuyDate":"18-07-2020",
        "OrderStatus":"On_the_Way",
        "BuyerEmail":"shraddhamulay09@gmail.com"
    },
    {
        "orderId":"Or125",
        "modelNumber":"CMC33S05NI",
        "productPrice":"15000",
        "ProductImage":"https://github.com/ShivamVerma380/MahavirImages/blob/main/Whirlpool/Refrigerators/Double%20Door/21391-Omega-Steel-1.jpeg?raw=true",
        "DateofDelivery":"20-07-2022",
        "BuyDate":"18-07-2021",
        "OrderStatus":"Cancelled",
        "BuyerEmail":"shraddhamulay09@gmail.com"
    },
    {
        "orderId":"Or126",
        "modelNumber":"CMC33S05NI",
        "productPrice":"15000",
        "ProductImage":"https://github.com/ShivamVerma380/MahavirImages/blob/main/Whirlpool/Refrigerators/Double%20Door/21391-Omega-Steel-1.jpeg?raw=true",
        "DateofDelivery":"20-07-2022",
        "BuyDate":"18-07-2022",
        "OrderStatus":"Returned",
        "BuyerEmail":"shraddhamulay09@gmail.com"
    },
    {
        "orderId":"Or127",
        "modelNumber":"CMC33S05NI",
        "productPrice":"15000",
        "ProductImage":"https://github.com/ShivamVerma380/MahavirImages/blob/main/Whirlpool/Refrigerators/Double%20Door/21391-Omega-Steel-1.jpeg?raw=true",
        "DateofDelivery":"20-07-2022",
        "BuyDate":"18-07-2015",
        "OrderStatus":"Returned",
        "BuyerEmail":"shraddhamulay09@gmail.com"
    }

]

const Orders=()=>{
    console.log("orders "+productBoughtbyUser[0]);
    console.log("orders type"+typeof productBoughtbyUser);

    const[filteredProduct,setfilteredProducts]=useState(new Array());
    const[filteredProduct2,setfilteredProducts2]=useState(new Array());
    // const[products,setProducts]=useState(new Array());
    const[orderStatus,setOrderStatus] = useState([]);
    const[orderTime,setOrderTime] = useState([]);

    function filters_ordertime(id){
        var element = document.getElementById(id);
        var arr=[];
        // var arr2=[];
        if(element.checked){
            orderTime.push(id);
            console.log("time "+orderTime)


            
            
                productBoughtbyUser.map(index=>{
                    var date=index.BuyDate.split('-');
                    var year=date[2];
                    orderTime.map(y=>{
                        if(y==="Older"){
                            if(year<2019){
                                arr.push(index);
                            }
                            
                        }
                        if(y===year){
                            console.log("jihhj")
                            arr.push(index);
                        }
                        
                        
                    })
                })
            
            
            setfilteredProducts(arr);
            console.log("..."+JSON.stringify(filteredProduct));

        }
        else
        {
            var arr2=[];
            orderTime.splice(orderTime.indexOf(id),1);
            console.log("time "+orderTime)
            productBoughtbyUser.map(index=>{
                var date=index.BuyDate.split('-');
                var year=date[2];
                orderTime.map(y=>{
                    if(y===year){
                        arr2.push(index);
                    }
                })
            })
            setfilteredProducts(arr2);
            
            console.log("..."+JSON.stringify(filteredProduct));
            
        }
        
        
    }

    function filters_orderstatus(id){
        var element = document.getElementById(id);
        var arr=[];
        // var arr2=[];
        if(element.checked){
            orderStatus.push(id);
            console.log("time "+orderStatus)

            
            productBoughtbyUser.map(index=>{
                
                orderStatus.map(y=>{
                    if(index.OrderStatus===y){
                        arr.push(index);
                    }
                })
            })
            setfilteredProducts2(arr);
            console.log("..."+JSON.stringify(filteredProduct2));
            
        }
        else
        {
            var arr2=[];
            orderStatus.splice(orderStatus.indexOf(id),1);
            console.log("time "+orderStatus)
            productBoughtbyUser.map(index=>{
                
                orderStatus.map(y=>{
                    if(index.OrderStatus===y){
                        arr2.push(index);
                    }
                    
                })
            })
            setfilteredProducts2(arr2);
            
            console.log("..."+JSON.stringify(filteredProduct2));
            
        }
        
        
    }
    var products=[];
    
    const operation = (filteredProduct, filteredProduct2, isUnion = false) => filteredProduct.filter( a => isUnion === filteredProduct2.some( b => (a.BuyDate.split('-')[2] === b.BuyDate.split('-')[2] && a.orderStatus===b.orderStatus) ) );

    // Following functions are to be used:
    const inBoth = (filteredProduct, filteredProduct2) => operation(filteredProduct, filteredProduct2, true);
    console.log('inBoth:', inBoth(filteredProduct, filteredProduct)); 

    console.log("1: "+JSON.stringify(filteredProduct))
    console.log("2: "+JSON.stringify(filteredProduct2))
    if(filteredProduct.length===0 && filteredProduct2.length===0){
        products=productBoughtbyUser;
    }
    else if(filteredProduct.length===0){
        products=filteredProduct2;
    }
    else if(filteredProduct2.length===0){
        products=filteredProduct;
    }
    else{
        products=inBoth(filteredProduct, filteredProduct2); 
    }

   
    // var products=[];
    // products=_.intersection(filteredProduct,filteredProduct2);
    

    console.log("filter p : "+JSON.stringify(products))
    return(

        <>
        <Header/>
        
<Row>
<Col style={{    backgroundColor: '#fff',
                            borderRadius: '2px',
                            boxShadow: '0 2px 4px 0 rgb(0 0 0 / 8%)'}} sm={2}>
                        <h3 style={{margin: '10px'}}>Filter</h3>
                        <div className="orderfilter">
                            <div className="orderfiltertitle" >Order Status</div>
                            <Form className="orderfiltercheck">
                                <Form.Check type="checkbox"  value="On_the_Way" id="On_the_Way" label = "On the Way" onChange={()=>filters_orderstatus("On_the_Way")}/>
                                
                                <Form.Check type="checkbox"  value="Delivered" id="Delivered"  label = "Delivered" onChange={()=>filters_orderstatus("Delivered")}/>
                                
                                <Form.Check type="checkbox"  value="Cancelled" id="Cancelled"  label = "Cancelled" onChange={()=>filters_orderstatus("Cancelled")}/>
                              
                                <Form.Check type="checkbox"  value="Returned" id="Returned"  label = "Returned" onChange={()=>filters_orderstatus("Returned")}/>
                            </Form>
                        </div>
                        <div className="orderfilter">
                            <div className="orderfiltertitle">Order Time</div>

                            <Form className="orderfiltercheck">
                                {/* <Form.Check type="checkbox" id="Last_30_days" value="Last_30_days"  label = "Last 30 days" onChange={()=>filters_ordertime('Last 30 days')}/> */}
                                <Form.Check type="checkbox" id="2022" value="2022"  label = "2022" onChange={()=>filters_ordertime('2022')}/>
                                <Form.Check type="checkbox" id="2021" value="2021"  label = "2021" onChange={()=>filters_ordertime('2021')}/>
                                <Form.Check type="checkbox" id="2020" value="2020"  label = "2020" onChange={()=>filters_ordertime('2020')}/>
                                <Form.Check type="checkbox" id="2019" value="2019"  label = "2019" onChange={()=>filters_ordertime('2019')}/>
                                <Form.Check type="checkbox" id="Older" value="Older"  label = "Older" onChange={()=>filters_ordertime('Older')}/>
                            </Form>
                        </div>
                        
                    </Col>
                    <Col  sm={10}>
                        <Row> 
                        <Form className="d-flex">
                        <Form.Control
                        style={{
                            height: '40px',
                            width: '100%',
                            border: '1px solid #dbdbdb',
                            padding:' 8px',
                            borderRadius: '4px 0 0 4px',
                            fontSize: '14px'
                                                }}
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        />
                        <Button variant="flat" size="1" style={{
                        
                        boxShadow: '0 2px 4px 0 rgb(0 0 0 / 20%)',
                        border: 'none',
                        width:'160px'
                        }}>
                            <svg width="16" height="16" viewBox="0 0 17 18" class="IgU6Js" xmlns="http://www.w3.org/2000/svg"><g fill="#fff" fill-rule="evenodd"><path class="" d="m11.618 9.897l4.225 4.212c.092.092.101.232.02.313l-1.465 1.46c-.081.081-.221.072-.314-.02l-4.216-4.203"></path><path class="" d="m6.486 10.901c-2.42 0-4.381-1.956-4.381-4.368 0-2.413 1.961-4.369 4.381-4.369 2.42 0 4.381 1.956 4.381 4.369 0 2.413-1.961 4.368-4.381 4.368m0-10.835c-3.582 0-6.486 2.895-6.486 6.467 0 3.572 2.904 6.467 6.486 6.467 3.582 0 6.486-2.895 6.486-6.467 0-3.572-2.904-6.467-6.486-6.467"></path></g></svg>
                            <span> </span>
                            Search</Button>
                    </Form>
                        </Row>
                       
                        {
                            
                            products.map(item=>{
                                return(
                                    <Row className="ordersbox">
                                        <Col md={2}>
                                        <img  style={{height:"100%", width:"100%"}} src = {item.ProductImage}/>
                                        </Col>
                                        <Col md={4}>
                                            <h5><br></br>Order ID: {item.orderId}<br></br><br></br>{item.modelNumber}
                                            
                                            </h5>
                                        </Col>
                                        <Col md={2}>
                                            
                                        <h5> <br></br>MSP: <b style={{marginRight:"20px",color:"rgb(255,98,98)"}}>₹{item.productPrice}</b> </h5> 
                    
                                        </Col>
                                        <Col md={4}>
                                        <h5><br></br>Ordered On: {item.BuyDate}
                                        <br></br><br></br>Delivery Date: {item.DateofDelivery}
                                        <br></br><br></br>Delivery Date: {item.OrderStatus}</h5>
                                        
                                        </Col>
                                    </Row>
                                )
                            })
                        }
                   
            {
                // (isOrderDetailsSet)?(


                        
                    // productBoughtbyUser.map(index=>{
                    //         // console.log("Model Number:",index.modelNumber)
                    //         return(    
                    //             <OrderItem item={index}/>
                    //         );
                    //     })
                   

                    
                        
                    
                // ):(
                //     null
                // )
            }
                 </Col>
                    
                    </Row>   
            

        </>
    )
}


export default Orders;
