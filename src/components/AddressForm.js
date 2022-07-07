import React, { useState, useEffect} from "react";
import "./AddressForm.css";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import {  Input } from "reactstrap";
import axios from "axios";


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


  useEffect(() => {
    if (!isAddressFetched) {
      axios({
        method: "get",
        url: "http://localhost:8080/address",
        headers: {
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJraGFyZW9ta2FyOTlAZ21haWwuY29tIiwiZXhwIjoxNjU3MjA1NzA3LCJpYXQiOjE2NTcxMDU3MDd9.kxDnbZkajCwWlVCMeukJnfe3UCU-O2QUp8MNvTzpKjQ"
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
      alert("Please enter all details")
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

      axios.post("http://localhost:8080/address", formdata, {
        headers: {
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJraGFyZW9ta2FyOTlAZ21haWwuY29tIiwiZXhwIjoxNjU3MjA1NzA3LCJpYXQiOjE2NTcxMDU3MDd9.kxDnbZkajCwWlVCMeukJnfe3UCU-O2QUp8MNvTzpKjQ",
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
      navigate("/OrderSummary")
    }


  }

  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const HandleButtonClick = () => {
    if (address.length<3) {
      setIsButtonClicked(true);
    }
    else {
      alert("You can save only 3 addresses")
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

  return (
    <div >
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
          <h1 style={{marginTop:"40px",color:"rgb(255,98,98"}}>DELIVERY ADDRESS</h1>
        </Col>
        <Col md={1}></Col>
      </Row>

      {
        address.map(index => {
          return (
            <Row>
            <Col md={1}></Col>
            <Col md={10}>
              <Card style={{ width: "60rem", height: "7rem" }}>
                <Card.Body>
                  <Card.Text>
                    <input type="radio" value="Address1" name="add" /> <b style={{marginRight:20,marginLeft:10}}>{index.name}</b> <b>{index.mobileNumber}</b> 
                    <p>{index.address} {index.city} {index.state} <b>- {index.pincode}</b>, Alternate Mobile Number: <b>{index.alternateMobile}</b></p> 
                    
                  </Card.Text>
                </Card.Body>

              </Card>
            </Col>
            <Col md={1}></Col>
          </Row>
          )
          
        })
      }

      


      <Row style={{ marginTop: 20 }}>
        <Col md={4}></Col>
        <Col md={8}>
          <Button style={{backgroundColor:"rgb(255,98,98)"}} onClick={HandleButtonClick}>Add a New Address</Button>
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
          <Row>
            <Col md={1}></Col>
            <Col md={10}>
              <Card style={{ width: "80rem" }}>
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
                 />
                 
                  </Col>  
                  </Row>
                  <br></br>
                  <br></br>
                  <Row>
                    <Col>
                    
                        <Input
                          style={{height:"100px"}}
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
                  /> 
                 
                  </Col>  
                  </Row>
                  <br></br>
                  <br></br>
                  <Row>
                    <Col md={6}>
                    
                    </Col>
                    <Col md={6}>
                    <Button style={{backgroundColor:"rgb(255,98,98)"}} class="form-field" type="submit" onClick={ProceedHandler}>
                      Proceed
                    </Button>
                    </Col>
                  </Row>
                  

                </Card.Body>
              </Card>


            </Col>
            <Col md={1}></Col>
          </Row>
        ) : (null)
      }


    </div>

  );
}
export default AddressForm;