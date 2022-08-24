import axios from "axios";
import {React,useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import url from "../../../Uri";
import { getCookie } from '../../Cookies';
import "../../OrderSummary/AddressForm.css";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import {  Input } from "reactstrap";
import 'typeface-roboto';
import {AiFillDelete} from 'react-icons/ai';
import { toast, ToastContainer } from "react-toastify";
import Header from "../../Header";
import Footer from "../../Footer/Footer";

var fullname = "";
var addressone = "";
var addresstwo = "";
var incity = "";
var instate = "";
var zip = "";
var incountry = "";
var phoneNo = "";


function AddressCartSummary() {

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
          toast.error("Please enter all details")
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
          toast.error("Enter full name")
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


      function handleProceedOnClick(){
        console.log("address length",address.length);
        var flag = true;
        try{
            address.map((index,i)=>{
                if(document.getElementById("add"+i).checked){
                    localStorage.setItem("selectedaddress",JSON.stringify(index));
                    console.log("add   "+localStorage.getItem("selectedaddress"));
                    navigate("/cart-summary")
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
            console.log("error",error);
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


      return (
        <>
        <Header/>
        
        <div style={{border:"none",marginTop:"100px"}} >
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
            <h1 style={{marginTop:"40px",color:"black",fontSize:"18px",letterSpacing:"0.02em",fontWeight:"500",fontFamily:"Roboto",marginLeft:"2px",lineHeight:"21px"}}>DELIVERY ADDRESS 📬</h1>
            </center>
            
          </Col>
          <Col md={1}></Col>
        </Row>
        <br></br>
  
        {
          address.map((index,i)=> {
            return (
              <>
              <Row style={{marginLeft:"2px"}}>
              <Col md={2}></Col>
              <Col md={8}>
                <Card>
                  <Card.Body>
                    <Card.Text>
  
                      <input type="radio" value="Address1" name="add" id={"add"+i} onChange={()=>selectedaddress(index,index.name+""+i)} /> <b style={{marginRight:20,marginLeft:10}}>Full Name- <b style={{fontWeight:400}}>{index.name}</b></b> <b>Mobile No.- <b style={{fontWeight:400}}>{index.mobileNumber}</b></b> 
                      <p style={{marginLeft:"3%"}}><b>Address-</b> {index.address} {index.city} {index.state} - {index.pincode}, <b>Alternate Mobile No.- </b><b style={{fontWeight:400}}>{index.alternateMobile}</b></p>
                      <Button style={{background:"#C10000",marginLeft:"5%",border:"none"}} onClick={()=>handleAddressDelete(index)}>Remove <AiFillDelete/> </Button>                    
                    </Card.Text>
                  </Card.Body>
  
                </Card>
              </Col>
              <Col md={2}></Col>
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
              <Button style={{backgroundColor:"#C10000",border:"none"}} onClick={HandleButtonClick}>Add New Address</Button>
              
              <Button style={{marginLeft:"1%",backgroundColor:"#C10000",border:"none", position:"sticky", alignContent:"end" }} onClick={handleProceedOnClick}>Proceed to Buy</Button>

            </center>
          
          </Col>
          <Col md={1}></Col>
          </Row>
          {/* <Row>
          <Col md={1}></Col>
          <Col md={10}>
            <center>
            <Button style={{backgroundColor:"#C10000",border:"none", marginTop:"20px", position:"sticky", alignContent:"end" }} onClick={handleProceedOnClick}>Proceed to Buy</Button>
            </center>
            </Col>
          <Col md={1}></Col>
        </Row> */}
        <br></br>
        
  
  
  
  
  
        {
          (isButtonClicked) ? (
            <>
            <br></br>
            <Row >
              <Col md={2}></Col>
              <center>
              <Col md={7} style={{marginLeft:"10px"}} >
                <Card >
                  <Card.Body>
                    <Card.Title style={{marginTop:"1%",fontSize:"18px", alignContent:"center"}}>Add New Address📌</Card.Title>
                    <Row style={{marginTop:40}}>
                      
                        <Col md={6} >
                        <Input
                          id="full_name"
                          type="text"
                          placeholder="Full Name"
                          name="fullname"
                          onChange={InputFullNameHandler}
                          style={{borderRadius:"5px",border:"none",borderBottom:"1px solid #E2E2E2"}}
                        />
                      </Col> 
                      <Col md={6}>
                      <Input
                        id="Phone"
                        class="form-field"
                        type="text"
                        placeholder="Phone No."
                        name="Phone"
                        maxLength={10}
                        onChange={InputPhoneNoHandler}
                        
                        style={{borderRadius:"5px",border:"none",borderBottom:"1px solid #E2E2E2"}}
                      />
                    
                      </Col>

                    </Row>
                    
                    <Row style={{marginTop:20}}>
                      <Col>
                          <Input
                            
                            style={{height:"50px",borderRadius:"5px",border:"none",borderBottom:"1px solid #E2E2E2"}}
                            id="last-name"
                            class="form-field"
                            type="textarea"
                            maxLength={50}
                            placeholder="Address Line 1 (Street Address, P.O.)"
                            name="ADL1"
                            onChange={InputAddressOneHandler}
                          />
                       
                      </Col>
                      </Row>
                      <Row style={{marginTop:20}}>
                    <Col md={6}>
                    <Input
                      id="City"
                      class="form-field"
                      type="text"
                      placeholder="City"
                      name="City"
                      onChange={InputCityHandler}
                      
                      style={{borderRadius:"5px",border:"none",borderBottom:"1px solid #E2E2E2"}}
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
                      
                      style={{borderRadius:"5px",border:"none",borderBottom:"1px solid #E2E2E2"}}
                    />
                   
                    </Col>  
                    </Row>
                    <Row style={{marginTop:20}}>
                    <Col md={6}>
                    <Input
                      id="Zip"
                      class="form-field"
                      type="text"
                      placeholder="Zip"
                      name="Zip"
                      maxLength={6}
                      onChange={InputZipHandler}
                      style={{borderRadius:"5px",border:"none",borderBottom:"1px solid #E2E2E2"}}
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
                      style={{borderRadius:"5px",border:"none",borderBottom:"1px solid #E2E2E2"}}
                    /> 
                   
                    </Col>  
                    </Row>
                    <br></br>
                    <Row style={{marginTop:20}}>
                      
                      <Col>
                      <center>
                      <Button style={{backgroundColor:"#C10000",border:"none"}} class="form-field" type="submit" onClick={ProceedHandler}>
                        Save Address
                      </Button>
                      </center>
                      
                      </Col>
                    </Row>
                    <br></br>
                    
  
                  </Card.Body>
                </Card>
  
  
              </Col>
              </center>
              <Col md={3}></Col>
              
            </Row>
            <br></br>
            
            </>
          ) : (null)
        }
  
  
      </div>
      <Footer/>
      </>
    
      );
}

export default AddressCartSummary;