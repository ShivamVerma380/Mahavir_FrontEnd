import React, { useState } from "react";
import { Col, Input, Label, Row } from 'reactstrap';
import { Button, Container, Form,Card } from "react-bootstrap";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import Admin from './Admin';
import url from "../../Uri";
import { MDBInput } from "mdb-react-ui-kit";





const AdminLogin = () => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [otp,setOtp] = useState("");
    const [inputOtp,setInputOtp] = useState("");
    const [isEmailVerified,setIsEmailVerified] = useState(false);

    const navigate = useNavigate();


    const handleEmailChange = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
    }

    const handleOtpChange = (e) => {
        e.preventDefault();
        setInputOtp(e.target.value);
    }

    function verifyEmail(){

        if(email=="" || password==""){
            alert("Please enter email and password");
            return;
        }



        axios.get(url+"/verify-email/"+email)
        .then((res) => {
            // console.log(res.data);
            if(res.status==200){
                // alert("Email Verified")
                setOtp(res.data.otp);
                setIsEmailVerified(true);
                // document.getElementById("signInButtonAdmin").disabled = false;
            }
            else{
                alert(res.data.message);
            }
        }).catch((err) => {
            // console.log(err);
            alert(err.response.data.message);
        })
    }

    function signIn(){

        console.log("In sign in")

        if(email=="" || password==""){
            alert("Please enter email and password");
            return;
        }

        if(inputOtp!=otp){
            alert("Please enter correct OTP");
            return;
        }

        var form_data_body = new FormData();

        form_data_body.append("Email",email);
        form_data_body.append("Password",password);

        axios.post(url+"/login-admin",form_data_body)
        .then((res) => {
            // console.log(res.data);
            if(res.status==200){
                alert("Login Successful");
                // console.log(res.data);
                // localStorage.setItem("admin",JSON.stringify(res.data.admin));
                localStorage.setItem("jwtTokenAdmin",res.data.token);
                localStorage.setItem("isAdminLoggedIn","yes,true");
                // window.location.reload();
                navigate("/pendingdelivery")   
            }
            else{
                alert(res.data.message);
            }
        }).catch((err) => {
            // console.log(err);
            alert(err.response.data.message);
        })
    }

    



    return (
        <div className='signin'>

        <Container className="justify-content-center" style={{marginTop:"10%"}}>
            <h4 style={{textAlign:"center"}}>Admin Login</h4>
            <br/>
            <Row>
                <Col>
                    <MDBInput wrapperClass='mb-4' placeholder='Email address' id='form1' type='email' onChange={handleEmailChange} />
                </Col>
                <Col>
                    <MDBInput wrapperClass='mb-4' placeholder='Password' id='form2' type='password'  onChange={handlePasswordChange}/>
                </Col>
            </Row>
            
            
            <Row>
               <Col>
                    <MDBInput wrapperClass='mb-4' placeholder='Enter 6 digit OTP recieved on mail' id='form3' type='number' onChange={handleOtpChange}  />
               </Col>
               <Col>
                    <Button className="mb-4 w-100" onClick={verifyEmail}>Verify Email</Button>
               </Col> 
            </Row>
            
            

            <Button id="signInButtonAdmin" className="mb-4 w-100" disabled={!isEmailVerified} onClick={signIn}>Sign in</Button>
            {/* <p className="text-center">Not a member? <a onClick={() => handleJustifyClick('tab2')} >Register</a></p> */}
            
        </Container>

    </div>
    );
}
export default AdminLogin