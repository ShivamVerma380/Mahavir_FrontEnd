import React, { useState, useEffect} from "react";
import "./AddressForm.css";
import Header from "../Header";
import { useNavigate } from "react-router-dom";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import {  Input } from "reactstrap";
import axios from "axios";
import {getCookie} from '../Cookies';
import 'typeface-roboto';
import url from "../../Uri";

import {AiFillDelete} from 'react-icons/ai';
import { ToastContainer, toast } from "react-toastify";

var fullname = "";
var addressone = "";
var addresstwo = "";
var incity = "";
var instate = "";
var zip = "";
var incountry = "";
var phoneNo = "";



const AddressForm = () => {
  const navigate = useNavigate();
  const [address, setAddress] = useState([]);
  const [isAddressFetched, setIsAddressFetched] = useState(false);
 

  var token = getCookie("jwtToken");
  console.log(token);
  useEffect(() => {
    if (!isAddressFetched) {
      axios({
        method: "get",
        url: url+"/address",
        headers: {
          "Authorization": "Bearer "+token
        }
      }).then(function (response) {
        console.log("Response", response);
        if (response.status == 200) {
          console.log("Address response", response.data);
          setAddress(response.data);
          console.log("Address: ", address)
          setIsAddressFetched(true);

        } else {
          console.log(response.data.message);
        }
      }).catch(function (error) {
        console.log(error);
      })

    }
  }, [])

  console.log("Address length: ",address.length)


  const ProceedHandler = () => {


    if (fullname === "" || addressone === "" || incity === "" || instate === "" || zip === "" || incountry === "" || phoneNo === "") {
      toast.warn("Please enter all details")
    }
    else {
      var formdata = {
        "name": localStorage.getItem("full-name"),
        "pincode": localStorage.getItem("zip"),
        "locality": "",
        "landmark": "",
        "address": localStorage.getItem("address-one"),
        "city": localStorage.getItem("city"),
        "state": localStorage.getItem("state"),
        "alternateMobile": localStorage.getItem("phone"),
        "addressType": ""

      }

      axios.post(url+"/address", formdata, {
        headers: {
          "Authorization": "Bearer "+token,
          "Content-Type": "multipart/form-data"
        }
      }).then(function (response) {
        if (response.status == 200) {
          console.log("Address Added successfully");
          console.log(response.data)
          // navigate("/");
        }
      }).catch(function (error) {
        console.log("Error", error);
      })
      console.log("Form: ", formdata)
      window.location.reload()
      // navigate("/OrderSummary")
    }


  }

  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const HandleButtonClick = () => {
    if (address.length<3) {
      setIsButtonClicked(true);
    }
    else {
      toast.warn("You can save only 3 addresses")
    }
  }

  const InputFullNameHandler = (e) => {
    fullname = e.target.value;
    console.log("Full Name: ", fullname)
    localStorage.setItem("full-name", fullname)
    if (fullname === "") {
      alert("Enter full name")
    }


  }

  const InputAddressOneHandler = (e) => {
    addressone = e.target.value;
    console.log("Address One: ", addressone)
    localStorage.setItem("address-one", addressone)

  }

  const InputAddressTwoHandler = (e) => {
    addresstwo = e.target.value;
    console.log("Address Two: ", addresstwo)
    localStorage.setItem("address-two", addresstwo)

  }

  const InputCityHandler = (e) => {
    incity = e.target.value;
    console.log("City: ", incity)
    localStorage.setItem("city", incity)

  }

  const InputStateHandler = (e) => {
    instate = e.target.value;
    console.log("State: ", instate)
    localStorage.setItem("state", instate)

  }

  const InputZipHandler = (e) => {
    zip = e.target.value;
    console.log("Zip: ", zip)
    localStorage.setItem("zip", zip)

  }

  const InputCountryHandler = (e) => {
    incountry = e.target.value;
    console.log("Country: ", incountry)
    localStorage.setItem("country", incountry)

  }

  const InputPhoneNoHandler = (e) => {
    phoneNo = e.target.value;
    console.log("Phone No: ", phoneNo)
    localStorage.setItem("phone", phoneNo)

  }

  function selectedaddress(index,id){

    var element = document.getElementById(id);
    // console.log("addddd "+JSON.stringify(index))
    if (element.checked){
        localStorage.setItem("selectedaddress",JSON.stringify(index));
        console.log("add   "+localStorage.getItem("selectedaddress"));
    }

  }

  function handleAddressDelete(index){
    console.log("Index",index);
    axios.post(url+"/delete-address",index, {
      headers: {
        "Authorization": "Bearer "+token,
        "Content-Type": "application/json"
      }
    }).then(function(response){
      if(response.status==200){
        console.log("Address deleted successfully");
        window.location.reload();
      }else{
        console.log("Error in deleting address");
      }
    }).catch(function(error){
      console.log("Error",error);
    }
    )
  
  }

  return (
    
    
    <div style={{border:"2px solid #E2E2E2"}} >
      <ToastContainer position="top-center"/>
      {/* <Header/>  */}
      {/* <div className="radio">
          <label>
            <input type="radio" value="option1"  />
              Address 1, ............
          </label>
      </div>
      <div className="radio">
          <label>
            <input type="radio" value="option1"  />
              Address 2, ............
          </label>
      </div> */}
      <Row >
        <Col md={1}></Col>
        <Col md={10}>
          <center>
          <h1 style={{marginTop:"40px",color:"black",fontSize:"20px",fontWeight:"600",fontFamily:"typeface-roboto",marginLeft:"2px"}}>DELIVERY ADDRESS</h1>
          </center>
          
        </Col>
        <Col md={1}></Col>
      </Row>
      <br></br>

      {
        address.map((index,i)=> {
          return (
            <>
            <Row>
            <Col md={1}></Col>
            <Col md={10}>
              <Card style={{ width: "65rem", height: "7rem" }}>
                <Card.Body>
                  <Card.Text>

                    <input type="radio" value="Address1" name="add" id={index.name+""+i} onChange={()=>selectedaddress(index,index.name+""+i)} /> <b style={{marginRight:20,marginLeft:10}}>{index.name}</b> <b>{index.mobileNumber}</b> 
                    <p>{index.address} {index.city} {index.state} <b>- {index.pincode}</b>, Alternate Mobile Number: <b>{index.alternateMobile}</b></p>
                    <AiFillDelete onClick={()=>handleAddressDelete(index)}/>                     
                  </Card.Text>
                </Card.Body>

              </Card>
            </Col>
            {/* <Col md={1}></Col> */}
          </Row>
          <br></br>
          </>
          )
          
        })
      }

      


      <Row style={{ marginTop: 20 }}>
        <Col md={1}></Col>
        <Col md={10}>
          <center>
            <Button style={{backgroundColor:"#C10000",border:"none"}} onClick={HandleButtonClick}>Add a New Address</Button>
          </center>
          
        </Col>

      </Row>
      <br></br>
      





      {
        (isButtonClicked) ? (
          //   <div class="form-container">
          //   <form class="register-form">

          //     {/* Uncomment the next line to show the success message */}
          //     {/* <div class="success-message">Success! Thank you for registering</div> */}
          //     <input
          //       id="full_name"
          //       class="form-field"
          //       type="text"
          //       placeholder="Full Name"
          //       name="fullname"
          //       onChange={InputFullNameHandler}
          //     />
          //     {/* Uncomment the next line to show the error message */}
          //     {/* <span id="first-name-error">Please enter a first name</span> */}
          //     <input
          //       id="last-name"
          //       class="form-field"
          //       type="text"
          //       placeholder="Address Line 1 (Street Address, P.O.)"
          //       name="ADL1"
          //       onChange={InputAddressOneHandler}
          //     />
          //     <input
          //       id="last-name"
          //       class="form-field"
          //       type="text"
          //       placeholder="Address Line 2 (Apartment,Suite,Unit, Building)"
          //       name="ADL2"
          //       onChange={InputAddressTwoHandler}

          //     />
          //     {/* Uncomment the next line to show the error message */}
          //     {/* <span id="last-name-error">Please enter a last name</span> */}
          //     <input
          //       id="City"
          //       class="form-field"
          //       type="text"
          //       placeholder="City"
          //       name="City"
          //       onChange={InputCityHandler}
          //     />
          //     <input
          //       id="State"
          //       class="form-field"
          //       type="text"
          //       placeholder="State"
          //       name="State"
          //       onChange={InputStateHandler}
          //     />
          //     <input
          //       id="Zip"
          //       class="form-field"
          //       type="text"
          //       placeholder="Zip"
          //       name="Zip"
          //       onChange={InputZipHandler}
          //     />
          //     <input
          //       id="Country"
          //       class="form-field"
          //       type="text"
          //       placeholder="Country"
          //       name="Country"
          //       onChange={InputCountryHandler}
          //     />
          //     <input
          //       id="Phone"
          //       class="form-field"
          //       type="text"
          //       placeholder="Phone No."
          //       name="Phone"
          //       onChange={InputPhoneNoHandler}
          //     />
          //     {/* Uncomment the next line to show the error message */}
          //     {/* <span id="email-error">Please enter an email address</span> */}
          //     <button class="form-field" type="submit" onClick={ProceedHandler}>
          //       Proceed
          //     </button>
          //   </form>
          // </div>
          <>
          <Row>
            <Col md={1}></Col>
            <Col md={10}>
              <Card >
                <Card.Body style={{marginLeft:50}}>
                  <Card.Title>Add New Address</Card.Title>
                  <Row style={{marginTop:40}}>
                  <Col md={6}>
                      <Input
                        id="full_name"
                        type="text"
                        placeholder="Full Name"
                        name="fullname"
                        onChange={InputFullNameHandler}
                        style={{borderRadius:"20px"}}
                      />
                    </Col> 

                  <Col md={6}>
                  <Input
                    id="Phone"
                    class="form-field"
                    type="text"
                    placeholder="Phone No."
                    name="Phone"
                    onChange={InputPhoneNoHandler}
                    style={{borderRadius:"20px"}}
                 />
                 
                  </Col>  
                  </Row>
                  <br></br>
                  <br></br>
                  <Row>
                    <Col>
                    
                        <Input
                          style={{height:"100px",  borderRadius:"20px"}}
                          id="last-name"
                          class="form-field"
                          type="textarea"
                          placeholder="Address Line 1 (Street Address, P.O.)"
                          name="ADL1"
                          onChange={InputAddressOneHandler}
                          
                        />
                     
                    </Col>
                    </Row>
                    <br></br>
                    <br></br>
                    <Row>
                  <Col md={6}>
                  <Input
                    id="City"
                    class="form-field"
                    type="text"
                    placeholder="City"
                    name="City"
                    onChange={InputCityHandler}
                    style={{borderRadius:"20px"}}
                  />
                    </Col> 

                  <Col md={6}>
                  <Input
                    id="State"
                    class="form-field"
                    type="text"
                    placeholder="State"
                    name="State"
                    onChange={InputStateHandler}
                    style={{borderRadius:"20px"}}
                  />
                 
                  </Col>  
                  </Row>
                  <br></br>
                  <br></br>
                  <Row>
                  <Col md={6}>
                  <Input
                    id="Zip"
                    class="form-field"
                    type="text"
                    placeholder="Zip"
                    name="Zip"
                    onChange={InputZipHandler}
                    style={{borderRadius:"20px"}}
                  />
                    </Col> 

                  <Col md={6}>
                  <Input
                    id="Country"
                    class="form-field"
                    type="text"
                    placeholder="Country"
                    name="Country"
                    onChange={InputCountryHandler}
                    style={{borderRadius:"20px"}}
                  /> 
                 
                  </Col>  
                  </Row>
                  <br></br>
                  <br></br>
                  <Row>
                    <Col md={10}>
                    
                    </Col>
                    <Col md={2} style={{alignItems:"left",alignContent:"right"}}>
                    <Button style={{backgroundColor:"#C10000",border:"none"}} class="form-field" type="submit" onClick={ProceedHandler}>
                      Proceed
                    </Button>
                    
                    </Col>
                  </Row>
                  

                </Card.Body>
              </Card>


            </Col>
            <Col md={1}></Col>
          </Row>
          <br></br>
          </>
        ) : (null)
      }


    </div>

  );
}
export default AddressForm;