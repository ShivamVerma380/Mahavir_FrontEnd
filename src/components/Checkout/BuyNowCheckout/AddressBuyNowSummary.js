import axios from "axios";
import {React,useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import url from "../../../Uri";
import { getCookie } from '../../Cookies';
import "./BuyNowCheckout.css";
import { Button, Card, Container, Row, Col, Dropdown } from "react-bootstrap";
import {  Input } from "reactstrap";
import 'typeface-roboto';
import {AiFillDelete} from 'react-icons/ai';
import { State, City }  from 'country-state-city';
import Header from "../../Header";


import { ToastContainer, toast } from "react-toastify";
import Footer from "../../Footer/Footer";


var fullname = "";
var addressone = "";
var addresstwo = "";
var incity = "Pune";
var instate = "Maharashtra";
var zip = "";
var incountry = "India";
var phoneNo = "";


function AddressBuyNowSummary(){

    const navigate = useNavigate();
    const [address, setAddress] = useState([]);
    const [isAddressFetched, setIsAddressFetched] = useState(false);
    const [states, setStates] = useState([]);
    const [isStateSelected, setIsStateSelected] = useState(false);
    const [cities, setCities] = useState([]);
    const [state, setState] = useState("Select State ▼");
    const [city, setCity] = useState("Select City ▼");
    const [isCitySelected, setIsCitySelected] = useState(false);
    var token = getCookie("jwtToken");
    // console.log(token);

    



    useEffect(() => {
        if (!isAddressFetched && !isStateSelected ) {
          axios({
            method: "get",
            url: url+"/address",
            headers: {
              "Authorization": "Bearer "+token
            }
          }).then(function (response) {
            // console.log("Response", response);
            if (response.status == 200) {
              // console.log("Address response", response.data);
              setAddress(response.data);
              // console.log("Address: ", address)
              setIsAddressFetched(true);
    
            } else {
              // console.log(response.data.message);
            }
          }).catch(function (error) {
            console.log(error);

          })
          // console.log("state",State.getStatesOfCountry('IN'))
          // 
          setStates(State.getStatesOfCountry('IN'));
          setIsStateSelected(true);

    
        }
      }, [])
    
    // console.log("Address length: ",address.length)
    
    const ProceedHandler = () => {


        if (fullname === "" || addressone === "" || incity === "" || instate === "" || zip === "" || incountry === "" || phoneNo === "") {
          toast.error("Please enter all details")
        }
        else {

          var formdata = {
            "name": document.getElementById("full_name").value,
            "pincode": document.getElementById("Zip").value,
            "locality": "",
            "landmark": "",
            "address": localStorage.getItem("address-one"),
            "city": "Pune",
            "state": "Maharashtra",
            "alternateMobile":document.getElementById("Phone").value,
            "addressType": ""
    
          }
    
          axios.post(url+"/address", formdata, {
            headers: {
              "Authorization": "Bearer "+token,
              "Content-Type": "multipart/form-data"
            }
          }).then(function (response) {
            if (response.status == 200) {
              // console.log("Address Added successfully");
              // console.log(response.data)
              // navigate("/");
            }
          }).catch(function (error) {
            console.log("Error in address");
          })
          // console.log("Form: ", formdata)
          window.location.reload()
          // navigate("/OrderSummary")
        }
    
        // console.log("address-one",document.getElementById("address-one").value)
      }
    
      const [isButtonClicked, setIsButtonClicked] = useState(false);
    
      const HandleButtonClick = () => {
        if (address.length<3) {
          setIsButtonClicked(true);
        }
        else {
          toast.error("You can save only 3 addresses")
        }
      }

      const InputFullNameHandler = (e) => {
        fullname = e.target.value;
        // console.log("Full Name: ", fullname)
        localStorage.setItem("full-name", fullname)
        if (fullname === "") {
          toast.warn("Enter full name")
        }
    
    
      }
    
      const InputAddressOneHandler = (e) => {
        addressone = e.target.value;
        // console.log("Address One: ", addressone)
        localStorage.setItem("address-one", addressone)
    
      }
    
      const InputAddressTwoHandler = (e) => {
        addresstwo = e.target.value;
        // console.log("Address Two: ", addresstwo)
        localStorage.setItem("address-two", addresstwo)
    
      }
    
      // const InputCityHandler = (e) => {
      //   incity = e.target.value;
      //   console.log("City: ", incity)
      //   localStorage.setItem("city", incity)
    
      // }
    
      // const InputStateHandler = (e) => {
      //   instate = e.target.value;
      //   console.log("State: ", instate)
      //   localStorage.setItem("state", instate)
    
      // }
    
      const InputZipHandler = (e) => {
        zip = e.target.value;
        // console.log("Zip: ", zip)
        localStorage.setItem("zip", zip)
    
      }
    
      const InputCountryHandler = (e) => {
        
    
      }
    
      const InputPhoneNoHandler = (e) => {
        phoneNo = e.target.value;
        // console.log("Phone No: ", phoneNo)
        localStorage.setItem("phone", phoneNo)
    
      }
    
      function selectedaddress(index,id){
    
        var element = document.getElementById(id);
        // console.log("addddd "+JSON.stringify(index))
        if (element.checked){
            localStorage.setItem("selectedaddress",JSON.stringify(index));
            // console.log("add   "+localStorage.getItem("selectedaddress"));
        }
    
      }
    
      function handleAddressDelete(index){
        // console.log("Index",index);
        axios.post(url+"/delete-address",index, {
          headers: {
            "Authorization": "Bearer "+token,
            "Content-Type": "application/json"
          }
        }).then(function(response){
          if(response.status==200){
            // console.log("Address deleted successfully");
            window.location.reload();
          }else{
            // console.log("Error in deleting address");
          }
        }).catch(function(error){
          console.log("Error in delete-address");
        }
        )
      
      }

      function handleProceedOnClick(){
        // console.log("address length",address.length);
        var flag = true;


  
        try{
            address.map((index,i)=>{
                if(document.getElementById("add"+i).checked){
                    localStorage.setItem("selectedaddress",JSON.stringify(index));
                    // console.log("add   "+localStorage.getItem("selectedaddress"));
                    navigate("/summary")
                    flag = false;
                }
            })
            if(flag)
            toast.error("Please select an address");
            // for(int i=0;i<address.length;i++){
            //     if(document.getElementById("add"+i).checked){

            //     }
            // }
        }catch(error){
            console.log("error",error.response);
        }
        // try {
            
        //     console.log("Add1",document.getElementById("add0").checked);            
        // } catch (error) {
        //     console.log("Error in add1",error);
        // }

        // try {
        //     console.log("Add2",document.getElementById("add1").checked);
        // } catch (error) {
        //     console.log("Error in add2",error);
        // }

        // try {
        //     console.log("Add3",document.getElementById("add2").checked);
        // } catch (error) {
        //     console.log("Error in add3",error);
        // }
          
        
        
      }

      function selectState(index){
        var arr = [];
        // console.log("Index",index);
        // console.log("cities",City.getCitiesOfState("IN",index.isoCode));
        City.getCitiesOfState("IN",index.isoCode).map((city) => {
          arr.push(city.name);
        });
        incountry = "India";
        // console.log("Country: ", incountry)
        localStorage.setItem("country", "India")
        setCities(arr);
        setCity("Select City ▼");
        setState(index.name);
        localStorage.setItem("state", index.name);
        instate = index.name;
        // console.log("Cities",arr);
      }

      function selectCity(index){
        setCity(index);
        incity = index;
        localStorage.setItem("city", index);
        // console.log("City",index);
      }
      return (
        <>
        <ToastContainer position="top-center"/>
        <Header/>
        <div className="deliveryAdd">
          
          <ToastContainer position="top-center" />
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
          <Row style={{marginTop:"100px"}}>
            <Col md={1}></Col>
            <Col md={10}>
              <center>
                <h1 style={{ marginTop: "40px", color: "black", fontSize: "20px", fontWeight: "600", fontFamily: "typeface-roboto", marginLeft: "2px" }}>DELIVERY ADDRESS 📬</h1>
              </center>

            </Col>
            <Col md={1}></Col>
          </Row>
          <br></br>

          {address.map((index, i) => {
            return (

              <>
                <Row>
                  <Col md={2}></Col>

                  <Col md={8}>
                    <Card>
                      <Card.Body>
                        <Card.Text style={{ width: "fitContent", paddingRight: "0" }}>

                          <input type="radio" value="Address1" name="add" id={"add" + i} onChange={() => selectedaddress(index, index.name + "" + i)} /> <br></br><b style={{ marginRight: 20, marginLeft: 10 }}>{index.name}</b><br></br> <b>{index.mobileNumber}</b>
                          <p>{index.address}<br></br> {index.city} {index.state} <b>- {index.pincode}</b>,<br></br> Alternate Mobile Number: <b>{index.alternateMobile}</b></p>
                          <AiFillDelete onClick={() => handleAddressDelete(index)} />
                        </Card.Text>
                      </Card.Body>

                    </Card>
                    {/* </Col> */}
                  </Col><Col md={2}></Col>
                </Row>
                <br></br>
              </>

            );

          })}




          <Row style={{ marginTop: 20 }}>
            <Col md={1}></Col>
            <Col md={10}>
              <center>
                <Button style={{ backgroundColor: "#C10000", border: "none" }} className="form-field" onClick={HandleButtonClick}>Add a New Address</Button>
              </center>

            </Col>
            <Col md={1}></Col>
          </Row>
          <Row>
            <Col md={1}></Col>
            <Col md={10}>
              <center>
                <Button style={{ backgroundColor: "#C10000", border: "none", marginTop: "20px", position: "sticky", alignContent: "end" }} className="form-field" onClick={handleProceedOnClick}>Proceed to Buy</Button>
              </center>
            </Col>
            <Col md={1}></Col>
          </Row>
          <br></br>






          {(isButtonClicked) ? (
            <>
              <Row>
                <Col md={3}></Col>
                <Col md={6} style={{ marginLeft: "10px" }}>
                  <Card>
                    <Card.Body>
                      <Card.Title style={{ fontSize: "18px", alignContent: "center" }}>Add New Address📌</Card.Title>
                      <Row style={{ marginTop: 40 }}>

                        <Col>
                          <Input
                            id="full_name"
                            type="text"
                            className="form-field"
                            placeholder="Full Name"
                            name="fullname"
                            onChange={InputFullNameHandler}
                            style={{ borderRadius: "20px" }} />
                        </Col>
                      </Row>
                      <Row style={{ marginTop: 20 }}>

                        <Col>
                          <Input
                            id="Phone"
                            className="form-field"
                            type="text"
                            placeholder="Phone No."
                            name="Phone"
                            maxLength={10}
                            onChange={InputPhoneNoHandler}
                            style={{ borderRadius: "20px" }} />

                        </Col>
                      </Row>
                      <Row style={{ marginTop: 20 }}>
                        <Col>
                          <Input
                            style={{ height: "100px", borderRadius: "20px" }}
                            id="last-name"
                            className="form-field"
                            type="textarea"
                            maxLength={50}
                            placeholder="Address Line 1 (Street Address, P.O.)"
                            name="ADL1"
                            onChange={InputAddressOneHandler} />

                        </Col>
                      </Row>

                      <Row style={{ marginTop: 20 }}>
                        <Col md={6}>
                          <Input
                            id="Country"
                            className="form-field"
                            type="text"
                            placeholder="India"
                            value="India"
                            defaultValue="India"
                            readonly
                            style={{ borderRadius: "20px" }}
                          ></Input>

                        </Col>
                        <Col md={6}>
                          <Input
                            id="state"
                            className="form-field"
                            type="text"
                            placeholder="Maharashtra"
                            value="Maharashtra"
                            defaultValue="Maharashtra"
                            readonly
                            style={{ borderRadius: "20px" }}
                          ></Input>

                        </Col>
                      </Row>

                      <Row style={{ marginTop: 20 }}>
                        <Col md={6} style={{ marginBottom: 20 }}>
                          <Input
                            id="city"
                            className="form-field"
                            type="text"
                            placeholder="Pune"
                            value="Pune"
                            defaultValue="Pune"
                            readonly
                            style={{ borderRadius: "20px" }}
                          ></Input>
                        </Col>

                        <Col md={6}>
                          <Input
                            id="Zip"
                            className="form-field"
                            type="text"
                            placeholder="Zip"
                            name="Zip"
                            maxLength={6}
                            onChange={InputZipHandler}
                            style={{ borderRadius: "20px" }} />
                        </Col>
                      </Row>

                      <Row style={{ marginTop: 20 }}>

                        <Col>
                          <center>
                            <Button style={{ backgroundColor: "#C10000", border: "none" }} className="form-field" type="submit" onClick={ProceedHandler}>
                              Add new Address
                            </Button>
                          </center>

                        </Col>
                      </Row>


                    </Card.Body>
                  </Card>


                </Col>
                <Col md={3}></Col>

              </Row>
              <br></br>

            </>
          ) : (null)}


        </div>
        <Footer/></>
    
      );
}

export default AddressBuyNowSummary;