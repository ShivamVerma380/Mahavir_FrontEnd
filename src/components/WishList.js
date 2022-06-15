import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Button } from "react-bootstrap";
import * as AiIcons from 'react-icons/ai';
import { Navigate, useNavigate } from "react-router-dom";

const WishList = () => {
  // var arr = localStorage.getItem("wishlistproduct").split(',')
  const [arr,setarr] = useState(localStorage.getItem("wishlistproduct").split(','))
  console.log("array: ", arr)
  const [product, setProduct] = useState([]);
  const [isProductFetched, setIsProductFetched] = useState(false);
  const [array,setarray] = useState([]);  

  const RemoveFromWishList=(event)=>{
    
    console.log("Model number",event.target.name);
    // product.map(p=>{
    //     if(p.modelNumber===event.target.name){
    //         console.log("Inside model num if");
    //     }
    // })
    // setarr(arr.filter(p=>p!==event.target.name))
    // console.log("Array before pop",arr)
    // arr.pop(event.target.name)
    // console.log("Array after pop",arr)

    var str = "";
    
    arr.map(index=>{
      if(index!==event.target.name) 
      str+=index+",";
    })
    console.log("Before pop: ",arr)
    // arr.pop(event.target.name)
    setarr(arr.filter(p=>p!==event.target.name))
    
    localStorage.setItem("wishlistproduct",str)
    
    
    setarray(array.filter(item=>item.modelNumber!==event.target.name))
    console.log("After pop: ",arr)
    
    // SetLength(length-1);
}

const RemoveFromWishListviaIcon=(event)=>{
    
  console.log("Model number",event.target.name);
  // product.map(p=>{
  //     if(p.modelNumber===event.target.name){
  //         console.log("Inside model num if");
  //     }
  // })
  // setarr(arr.filter(p=>p!==event.target.name))
  // console.log("Array before pop",arr)
  // arr.pop(event.target.name)
  // console.log("Array after pop",arr)
  const navigate = useNavigate();
  navigate("/")
  var str = "";
  
  arr.map(index=>{
    if(index!==event.target.name) 
    str+=index+",";
  })
  console.log("Before pop: ",arr)
  // arr.pop(event.target.name)
  setarr(arr.filter(p=>p!==event.target.name))
  
  localStorage.setItem("wishlistproduct",str)
  
  
  setarray(array.filter(item=>item.modelNumber!==event.target.name))
  console.log("After pop: ",arr)
  
  // SetLength(length-1);
}

  useEffect(() => {
    if (!isProductFetched) {
      
        //   arr.map(index => {
        //     console.log("Index: ", index)
        //     axios({
        //       method: "get",
        //       url: "http://localhost:8080/get-products/" + index
        //     }).then(function (response) {
        //       console.log(response);
        //       if (response.status == 200) {
        //         console.log("Response", response.data);
        //         setProduct(response.data);
        //         array.push({ product });


        //         console.log("Products: ", { product })
        //         setIsProductFetched(true);


        //       }
        //     }).catch(function (error) {
        //       console.log("error", error);
        //     })
        //   })
        // }
        var urls = [];
        arr.map(index => {
          if (index != '') {
            urls.push(axios.get("http://localhost:8080/get-products/" + index));
          }
        })
        axios.all(urls).then(
          axios.spread((...res) => {
            res.map((response) => {
              console.log("response", response);
              setProduct(response.data)
              array.push(response.data);
            })
            // SetLength(product.length);
            setIsProductFetched(true);
            console.log("Array: ", array);
            
          })
        )
      
      

    }});

  return (
    <div>
      <Row style={{marginTop:20}}>
        <Col md={2}></Col>
        <Col md={3}>
          <h1 style={{color:"rgb(255,98,98"}}><i>My WishList</i></h1>
        </Col>
      
      </Row>
      
      {
        (isProductFetched) ? (

          
              array.map(index => {
                return (
                  <Row >
                    <Col md={2}></Col>
                    <Col md={9}>
                  
                  <Row style={{marginTop:30, border:"1px solid black"}}>
                    
                    <Col md={3}>
                      <img src={'data:image/jpg;base64,' + index.productImage1.data} style={{ width: 200, height: 200 }}></img>
                    </Col>
                    
                    <Col md={6}>
                      <Row>
                        <Col md={7}>
                          <h4>{index.productName}</h4>
                        </Col>
                        <Col md={3}>
                          <Button name={index.modelNumber} style={{marginLeft:80,backgroundColor:"rgb(255,98,98"}} onClick={RemoveFromWishList}>X</Button>
                          {/* <AiIcons.AiTwotoneDelete onClick={RemoveFromWishListviaIcon}/> */}
                        </Col>
                      </Row>
                      
                      
                      <br></br>
                      <Row>
                        <h4>₹{index.productPrice}</h4>
                      </Row>
                    </Col>
                  </Row>
                  
                  </Col>
                  </Row>
                  
                  
                  // <h1>Hello{index}</h1>
                );
              })

            

            




        ) : (null)

      }

    </div>
  )
}
export default WishList;