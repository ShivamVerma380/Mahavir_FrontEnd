import React, { useState } from "react";
import "./AddressForm.css";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import {  Input } from "reactstrap";


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
  const ProceedHandler = () => {


    if (fullname === "" || addressone === "" || addresstwo === "" || incity === "" || instate === "" || zip === "" || incountry === "" || phoneNo === "") {
      alert("Please enter all details")
    }
    else {
      navigate("/OrderSummary")
    }


  }

  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const HandleButtonClick = () => {
    setIsButtonClicked(true);
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
      </Row>
      <Row>
        <Col md={1}></Col>
        <Col md={10}>
          <Card style={{ width: "80rem", height: "7rem" }}>
            <Card.Body>
              <Card.Text>
                <input type="radio" value="Address1" name="add" /> Address 1 ..............
              </Card.Text>
            </Card.Body>

          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={1}></Col>
        <Col md={10}>
          <Card style={{ width: "80rem", height: "7rem" }}>
            <Card.Body>
              <Card.Text>
                <input type="radio" value="Address2" name="add" /> Address 2 ..............
              </Card.Text>
            </Card.Body>

          </Card>
        </Col>
      </Row>


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
              <Card style={{ width: "80rem", height:"32rem" }}>
                <Card.Body style={{marginLeft:50}}>
                  <Card.Title>Add New Address</Card.Title>
                  <Row style={{marginTop:40}}>
                  <Col md={4}>
                      <Input
                        id="full_name"
                        type="text"
                        placeholder="Full Name"
                        name="fullname"
                        onChange={InputFullNameHandler}
                      />
                    </Col> 

                  <Col md={4}>
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
                    <Col md={8}>
                    
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
                  <Col md={4}>
                  <Input
                    id="City"
                    class="form-field"
                    type="text"
                    placeholder="City"
                    name="City"
                    onChange={InputCityHandler}
                  />
                    </Col> 

                  <Col md={4}>
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
                  <Col md={4}>
                  <Input
                    id="Zip"
                    class="form-field"
                    type="text"
                    placeholder="Zip"
                    name="Zip"
                    onChange={InputZipHandler}
                  />
                    </Col> 

                  <Col md={4}>
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
                    <Col md={3}>
                    
                    </Col>
                    <Col md={3}>
                    <Button style={{backgroundColor:"rgb(255,98,98)"}} class="form-field" type="submit" onClick={ProceedHandler}>
                      Proceed
                    </Button>
                    </Col>
                  </Row>
                  

                </Card.Body>
              </Card>


            </Col>
          </Row>
        ) : (null)
      }


    </div>

  );
}
export default AddressForm;